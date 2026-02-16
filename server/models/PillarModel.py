from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

class PillarModel(db.Model, SerializerMixin):
    __tablename__ = "pillars"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    challenge = db.Column(db.String, nullable = False)
    offering = db.Column(db.String, nullable = False)
    success = db.Column(db.String, nullable = False)