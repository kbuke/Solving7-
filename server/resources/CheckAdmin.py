from flask import session
from flask_restful import Resource

class CheckAdmin(Resource):
    def get(self):
        return(
            {"message": "Authorized"}
            if session.get("is_admin")
            else ({"error": "Unauthorized"}, 401)
        )