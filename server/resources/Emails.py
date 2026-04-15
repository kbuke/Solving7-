from flask import session, make_response, request
from flask_restful import Resource
from config import db
from models.EmailModel import EmailModel
from email.message import EmailMessage
import smtplib
from dotenv import load_dotenv
import os
import resend

load_dotenv()
# password = os.getenv("GMAIL_PASSWORD")

resend.api_key = os.getenv("RESEND_API_KEY")


class EmailList(Resource):
    def get(self):
        email = [email.to_dict() for email in EmailModel.query.all()]
        return email
    
    def post(self):
        json_data = request.get_json()
        
        recipient_email = os.getenv("S7_EMAIL")
        # password=os.getenv("S7_EMAIL_PW")

        try:
            new_email = EmailModel(
                email_subject = json_data.get("emailSubject"),
                email_message = json_data.get("emailMessage"),
                sender_email = json_data.get("senderEmail"),
                recipient_email = recipient_email
            )
            db.session.add(new_email)
            db.session.commit()

            # Send email with Resend 
            response = resend.Emails.send({
                # "from": f"Solving7 <{recipient_email}>",
                "from": "Solving7 <noreply@solving7.green>",
                "to": [recipient_email],
                "reply_to": json_data.get("senderEmail"),
                "subject": new_email.email_subject,
                "html": f"""
                    <p><strong>From:</strong> {new_email.sender_email}</p>
                    <p><strong>Message:</strong></p>
                    <p>{new_email.email_message}</p>
                """
            })
            print(response)

            return {"message": "Email sent successfully"}, 201

        except Exception as e:
            return {"error": f"Failed to send email: {str(e)}"}, 500