from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from helpers.Owns import owns

from config import db

class TeamModel(db.Model, SerializerMixin):
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    info = db.Column(db.String)

    members = owns(
        "MemberModel",
        "team"
    )