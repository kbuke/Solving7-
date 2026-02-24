from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

from helpers.ManyToManyDefined import many_to_many_defined

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

class ProductModel(db.Model, SerializerMixin):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    info = db.Column(db.String, nullable = False)
    state_of_world = db.Column(db.String, nullable = False, server_default = "")
    material = db.Column(db.String, nullable = False, server_default = "")
    progress = db.Column(db.String, nullable = False, server_default = "")

    pillars = many_to_many_defined(
        "PillarModel",
        "products",
        "product_pillars"
    )

    serialize_rules = (
        "-pillars.products",
        "-pillars.sustainable_goals",
    )

    @validates("name")
    def validate_product_name(self, key, value):
        value = validate_string(
            value,
            "Product Name"
        )

        value = validate_uniqueness(
            value,
            self, 
            ProductModel,
            key,
            "Product Name"
        )

        return value
