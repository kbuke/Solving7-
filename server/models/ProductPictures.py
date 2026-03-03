from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

from helpers.BelongsTo import belongs_to

class ProductPictureModel(db.Model, SerializerMixin):
    __tablename__ = "product_pictures"

    id = db.Column(db.Integer, primary_key = True)
    link = db.Column(db.String, nullable = False)
    
    product_id = belongs_to("products")