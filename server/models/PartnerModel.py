from sqlalchemy.orm import validates 
from sqlalchemy_serializer import SerializerMixin

from config import db 

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

class PartnerModel(db.Model, SerializerMixin):
    __tablename__ = "partners"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    logo = db.Column(db.String, nullable = False, unique = True)

@validates("name")
def validate_partner_name(self, key, value):
    value = validate_string(
        value,
        "Partner Name"
    )

    value = validate_uniqueness(
        value,
        self,
        PartnerModel,
        key,
        "Partner Name"
    )

    return value