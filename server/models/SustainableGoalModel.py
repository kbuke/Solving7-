from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

from helpers.ManyToManyDefined import many_to_many_defined

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness
from validators.validate_instance_numbers import validate_instance_numbers

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
        "-pillars.sustainable_goals",
        "-pillars.products",
    )

    @validates("goal")
    def validate_goal(self, key, value):
        value = validate_string(
            value,
            "Pillar"
        )

        value = validate_uniqueness(
            value, 
            self,
            SustainableGoalModel,
            key,
            "Sustainable Goal"
        )

        return validate_instance_numbers(
            SustainableGoalModel,
            self,
            17,
            key,
            value
        )

    