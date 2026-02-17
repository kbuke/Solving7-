from functools import wraps
from flask import session
from flask_restful import Resource

def admin_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get("is_admin"):
            return {"error": "Unauthorized"}, 401
        return fn(*args, **kwargs)
    return wrapper

class AdminDashboard(Resource):
    @admin_required
    def get(self):
        return {"message": "Welcome admin"}, 200