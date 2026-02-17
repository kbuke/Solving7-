from config import db 

def owns(
    owned_model,
    back_populator
):
    return db.relationship(
        owned_model,
        back_populates = back_populator,
        cascade="all, delete-orphan"
    )