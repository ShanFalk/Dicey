class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    pdf_url = db.Column(db.Text, nullable = False)
    brew_id = db.Column(db.Integer, db.ForeignKey('brews.id'), nullable = False)

    # relationships
    brew = db.relationship("Brew", back_populates="images")