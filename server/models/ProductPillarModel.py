from sqlalchemy.orm import validates 
from sqlalchemy_serializer import SerializerMixin

from models.ProductModel import ProductModel
from models.PillarModel import PillarModel

from config import db 

from helpers.ManyToManyId import many_to_many_id

from validators.validate_instance_exists import validate_instance_exists
from validators.validate_unique_pair import validate_unique_pair

class ProductPillarModel(db.Model, SerializerMixin):
    __tablename__ = "product_pillars"

    id = db.Column(db.Integer, primary_key = True)
    pillar_id = many_to_many_id("pillars")
    product_id = many_to_many_id("products")

    @validates("pillar_id")
    def validate_pillar_id(self, key, value):
        return(validate_instance_exists(
            PillarModel,
            value,
            key
        ))
    
    @validates("product_id")
    def validate_product_id(self, key, value):
        return(validate_instance_exists(
            ProductModel,
            value,
            key
        ))
    
    def validate_unique(self):
        validate_unique_pair(
            self, 
            ProductPillarModel,
            pillar_id = self.pillar_id,
            product_id = self.product_id
        )

