from config import db 

def many_to_many_id(
    parent_table,
    nullable = False
):
    return db.Column(
        db.ForeignKey(f"{parent_table}.id"),
        nullable=nullable
    )
    