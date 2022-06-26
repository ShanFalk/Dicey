from .db import db
from datetime import datetime


class Brewtag(db.Model):
    __tablename__ = 'brewtags'

    id = db.Column(db.Integer, primary_key=True)
    brew_id = db.Column(db.Integer, db.ForeignKey('brews.id'), nullable=False)
    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    brew = db.relationship("Brew", back_populates="brewtags")
    user = db.relationship("Tag", back_populates="brewtags")



    def to_dict(self):
        return {
            "id": self.id,
            "brew_id": self.brew_id,
            "tag_id": self.tag_id
        }
