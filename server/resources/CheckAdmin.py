from flask import session
from flask_restful import Resource

class CheckAdmin(Resource):
    def get(self):
        if session.get("is_admin"):
            return{"message": "Authorized"}, 200 
        return{"error": "Unauthorized"}, 401