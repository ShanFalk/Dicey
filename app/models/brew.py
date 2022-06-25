from .db import db

class Brew(db.Model):
    __tablename__ = 'brews'

    # columns
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable = False)
    description = db.Column(db.Text)
    pdf_url = db.Column(db.Text, nullable = False)
    price = db.Column(db.Float, nullable = False)
    for_sale = db.Column(db.Boolean, default=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    user = db.relationship("User", back_populates="brews")
    images = db.relationship("Image", back_populates="brew")
    reviews = db.relationship("Review", back_populates="brew")
    purchases = db.relationship("Purchase", back_populates="brew")
    brew_tags = db.relationship("Brew",
                                secondary=brewtags,
                                back_populates="tag_tags",
                                # unsure about cascade
                                cascade="all, delete"
                                )

    @validates('title')
    def validate_title(self, key, title):
        if len(title) <= 2:
            raise ValueError('title is too short')
        return title

    @validates('price')
    def validate_price(self, key, price):
        if 1000 < price < 0:
            raise ValueError('Not a valid price')
        return price