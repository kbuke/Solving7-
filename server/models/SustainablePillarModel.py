from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db

from helpers.ManyToManyId import many_to_many_id

class SustainablePillarModel(db.Model, SerializerMixin):
    __tablename__ = "sustainable_pillars"

    id = db.Column(db.Integer, primary_key = True)
    pillar_id = many_to_many_id("pillars")
    sustainable_id = many_to_many_id("sustainable_goals") 
 