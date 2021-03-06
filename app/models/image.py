from .db import db
from datetime import datetime


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.Text, nullable = False)
    brew_id = db.Column(db.Integer, db.ForeignKey('brews.id'), nullable = False)

    # relationships
    brew = db.relationship("Brew", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "img_url": self.img_url,
            "brew_id": self.brew_id
        }
