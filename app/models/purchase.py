class Purchase(db.Model):
    __tablename__ = 'purchases'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    brew_id = db.Column(db.Integer, db.ForeignKey('brews.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    user = db.relationship("User", back_populates="purchases")
    brew = db.relationship("Brew", back_populates="purchases")