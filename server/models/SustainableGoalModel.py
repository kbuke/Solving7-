from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

from helpers.ManyToManyDefined import many_to_many_defined

class SustainableGoalModel(db.Model, SerializerMixin):
    __tablename__ = "sustainable_goals"

    id = db.Column(db.Integer, primary_key = True)
    goal = db.Column(db.String, nullable = False)
    info = db.Column(db.String, nullable = False)

    pillars = many_to_many_defined(
        "PillarModel",
        "sustainable_goals",
        "sustainable_pillars"
    )

    serialize_rules=(
        "-pillars.sustainable_pillars",
    )