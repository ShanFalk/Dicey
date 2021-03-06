from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
from sqlalchemy.orm import validates


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.Text)
    bio = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    brews = db.relationship("Brew", back_populates="user")
    reviews = db.relationship("Review", back_populates="user")
    purchases = db.relationship("Purchase", back_populates="user")

    def to_dict(self, **kwargs):

        out = {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "image_url": self.image_url,
            "bio": self.bio,
            "created_at": self.created_at,
        }

        for key, collection in kwargs.items():
            # might neeed to import the to_dict methods for the associated models
            out[key] = [ele.to_dict() for ele in collection]

        return out

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'bio': self.bio,
            'image_url': self.image_url,
            "created_at": self.created_at,
        }
