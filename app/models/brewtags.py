from .db import db

brewtags = db.Table('brewtags', db.Model.metadata,
    db.Column('brewId', db.Integer, db.ForeignKey('brews.id'), primary_key=True),
    db.Column('tagId', db.Integer, db.ForeignKey('tags.id'), primary_key=True)
)
