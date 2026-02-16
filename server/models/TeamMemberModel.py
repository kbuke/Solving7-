from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

class TeamMemberModel(db.Model, SerializerMixin):
    __tablename__ = "team_members"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    position = db.Column(db.String, nullable = False)
    intro = db.Column(db.String, nullable = False)