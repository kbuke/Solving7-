from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

from helpers.ManyToManyDefined import many_to_many_defined

class ProductModel(db.Model, SerializerMixin):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    info = db.Column(db.String, nullable = False)

    pillars = many_to_many_defined(
        "PillarModel",
        "products",
        "product_pillars"
    )

    serialize_rules = (
        "-pillars.products",
        "-pillars.sustainable_goals",
    )
