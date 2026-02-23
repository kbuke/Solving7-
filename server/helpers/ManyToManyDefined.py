from config import db 

def many_to_many_defined(
    relationalModel,
    back_populator,
    secondary_table_name
):
    return db.relationship(
        relationalModel,
        back_populates = back_populator,
        secondary = secondary_table_name
    )