from flask import request, session
from flask_restful import Resource
from werkzeug.security import check_password_hash
import os 

class Login(Resource):
    def post(self):
        data = request.get_json()

        email = data.get("adminEmail")
        password = data.get("adminPassword")

        if not email or not password:
            return{"error": "Email and password required"}, 400
        
        admin_email = os.getenv("S7_EMAIL")
        admin_password_hash = os.getenv("S7_LOGIN_PW")

        if email == admin_email and check_password_hash(admin_password_hash, password):
            session["is_admin"] = True
            return {"message": "Logged in successfully"}, 200

        return {"error": "Invalid credentials"}, 401