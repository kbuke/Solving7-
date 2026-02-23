from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

from helpers.BelongsTo import belongs_to

from validators.validate_instance_exists import validate_instance_exists

from models.TeamsModel import TeamModel

class MemberModel(db.Model, SerializerMixin):
    __tablename__ = "members"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    position = db.Column(db.String, nullable = False)
    intro = db.Column(db.String, nullable = False)

    team_id = belongs_to("teams")
    team = db.relationship("TeamModel", back_populates = "members")

    serialize_rules = (
        "-team.members",
    )

    @validates("team_id")
    def validate_team(self, key, value):
        return validate_instance_exists(
            TeamModel,
            value,
            key
        )