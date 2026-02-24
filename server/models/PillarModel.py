from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness
from validators.validate_instance_numbers import validate_instance_numbers

from helpers.ManyToManyDefined import many_to_many_defined

class PillarModel(db.Model, SerializerMixin):
    __tablename__ = "pillars"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    challenge = db.Column(db.String, nullable = False)
    offering = db.Column(db.String, nullable = False)
    success = db.Column(db.String, nullable = False)

    sustainable_goals = many_to_many_defined(
        "SustainableGoalModel",
        "pillars",
        "sustainable_pillars"
    )

    products = many_to_many_defined(
        "ProductModel",
        "pillars",
        "product_pillars"
    )

    serialize_rules=(
        "-sustainable_goals.pillars",
        
        "-products.pillars",
    )

    @validates("name")
    def validate_pillar_name(self, key, value):
        # Ensure proper string
        value = validate_string(
            value,
            "Pillar Name"
        )

        # Ensure value is unique
        value = validate_uniqueness(
            value, 
            self,
            PillarModel,
            key,
            "Pillar Name"
        )

        # Ensure no more than 17 values
        return validate_instance_numbers(
            PillarModel,
            self,
            7,
            key,
            value
        )

