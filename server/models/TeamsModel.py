from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from helpers.Owns import owns

from config import db

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

class TeamModel(db.Model, SerializerMixin):
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    info = db.Column(db.String)

    members = owns(
        "MemberModel",
        "team"
    )

    @validates("name")
    def validate_team(self, key, value):
        value = validate_string(
            value,
            "Team Name"
        )

        return validate_uniqueness(
            value,
            self,
            TeamModel,
            key,
            "Team Name"
        )