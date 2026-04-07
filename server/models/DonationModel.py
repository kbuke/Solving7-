from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db 
from datetime import datetime

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

class DonationModel(db.Model, SerializerMixin):
    __tablename__ = "donations"

    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String, nullable = False)
    amount = db.Column(db.Float, nullable = False)

    reference = db.Column(db.String, nullable = False, unique = True)

    status = db.Column(db.String, default = "Pending")
    created_at = db.Column(db.DateTime, default = datetime.utcnow)

    status_options = ["Pending", "Completed", "Failed"]
    @validates("status")
    def validate_status(self, key, value):
        if value not in self.status_options:
            raise ValueError(f"Value must be one of {self.status_options}")
        return value 
    
    @validates("email")
    def validate_email(self, key, value):
        return validate_string(
            value, 
            "Donor Email"
        )
    
    @validates("reference")
    def validate_reference(self, key, value):
        value = validate_string(
            value, 
            "Donor Reference"
        )

        return validate_uniqueness(
            value, 
            self,
            DonationModel, 
            key,
            "Donor Reference"
        )
