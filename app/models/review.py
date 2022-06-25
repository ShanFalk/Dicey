class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    brew_id = db.Column(db.Integer, db.ForeignKey('brews.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    user = db.relationship("User", back_populates="reviews")
    brew = db.relationship("Brew", back_populates="reviews")

    @validates('rating')
    def validate_rating(self, key, rating):
        if 5 < rating < 0:
            raise ValueError('Not a valid rating')
        return rating