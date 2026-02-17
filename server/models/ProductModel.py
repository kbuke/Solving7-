from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 

class ProductModel(db.Model, SerializerMixin):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    info = db.Column(db.String, nullable = False)
