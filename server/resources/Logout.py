from flask_restful import Resource
from flask import session

class Logout(Resource):
    def delete(self):
        session.clear()
        return {}, 204