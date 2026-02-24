from sqlalchemy.orm import validates 
from sqlalchemy_serializer import SerializerMixin

from config import db 

from helpers.ManyToManyId import many_to_many_id

class ProductPillarModel(db.Model, SerializerMixin):
    __tablename__ = "product_pillars"

    id = db.Column(db.Integer, primary_key = True)
    pillar_id = many_to_many_id("pillars")
    product_id = many_to_many_id("products")