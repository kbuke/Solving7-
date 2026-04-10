from flask import Flask, request, jsonify
import requests
from flask_restful import Resource

from config import PAYSTACK_TEST_SECRET_KEY
from config import PAYSTACK_URL
from config import PAYSTACK_LIVE_SECRET_KEY

import hashlib
import hmac
import os

from config import db

from models.DonationModel import DonationModel

class Donations(Resource):
    def post(self):
        data = request.get_json()

        email = data.get("email")
        amount = data.get("amount") # This must be in ZAR(Rand)

        if not email or not amount:
            return {"error": "Email and amount required"}, 400
        
        if int(amount) <= 0:
            return {"error": "Invalid amount"}, 400

        try:
            response = requests.post(
                PAYSTACK_URL,
                headers={
                    # "Authorization": f"Bearer {PAYSTACK_TEST_SECRET_KEY}",
                    "Authorization": f"Bearer {PAYSTACK_LIVE_SECRET_KEY}",
                    "Content-Type": "application/json"
                },
                json = {
                    "email": email,
                    "amount": int(amount) * 100, # convert to kobo 
                    "metadata": {
                        "type": "donation"
                    },
                    "callback_url": f"{os.getenv('FRONTEND_URL')}/success" # change this to actual url when deploying live site 
                }
            )

            res_data = response.json()



            if not res_data.get("status"):
                return jsonify({"error": res_data.get("message")}), 400

            return jsonify({
                "url": res_data["data"]["authorization_url"],

                #Have paystack generate a reference
                "reference": res_data["data"]["reference"]
            })
        
        except Exception as e:
            return jsonify({"error": str(e)}), 500

class PaystackWebhook(Resource):
    def post(self):
        if not request.data:
            return {"error": "Empty payload"}, 400 
        
        paystack_signature = request.headers.get("x-paystack-signature")
        if not paystack_signature:
            return {"error": "Missing Signature"}, 400 
        
        # secret = PAYSTACK_LIVE_SECRET_KEY.encode()
        secret = PAYSTACK_LIVE_SECRET_KEY.encode("utf-8")

        computed_signature = hmac.new(
            secret,
            request.data,
            hashlib.sha512
        ).hexdigest()

        if computed_signature != paystack_signature:
            return {"error": "Invalid signature"}, 400

        event = request.get_json()
        event_type = event.get("event")

        if event_type == "charge.success":
            # data = event["data"]
            reference = event["data"]["reference"]

            # Verify with Paystack 
            verify_url = f"https://api.paystack.co/transaction/verify/{reference}"
            verify_res = requests.get(
                verify_url,
                # headers={"Authorization": f"Bearer {PAYSTACK_TEST_SECRET_KEY}"}
                headers={"Authorization": f"Bearer {PAYSTACK_LIVE_SECRET_KEY}"}
            ).json()

            if not verify_res.get("status") or verify_res["data"]["status"] != "success":
                return "", 200

            amount = verify_res["data"]["amount"] / 100
            email = verify_res["data"]["customer"]["email"]
            

            # Prevent duplicates 
            existing = DonationModel.query.filter_by(reference = reference).first()
            if existing:
                return "", 200 
            
            donation = DonationModel(
                email=email,
                amount=amount,
                reference=reference,
                status="Completed"
            )
            
            try:
                db.session.add(donation)
                db.session.commit()
            except Exception as e:
                db.session.rollback()
                print("DB error:", str(e))

            print("Donation successful", amount, email)
        
        return "", 200

class VerifyTransaction(Resource):
    def get(self, reference):
        url = f"https://api.paystack.co/transaction/verify/{reference}"

        response = requests.get(
            url,
            # headers={"Authorization": f"Bearer {PAYSTACK_TEST_SECRET_KEY}"}
            headers={"Authorization": f"Bearer {PAYSTACK_LIVE_SECRET_KEY}"}
        )

        print(response.json())

        return response.json()
