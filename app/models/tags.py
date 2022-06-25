class Tags(db.Model):
    __tablename__ = 'tags'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    # relationships
    tag_tags = db.relationship("Brew",
                                secondary=brewtags,
                                back_populates="brew_tags",
                                # Question: unsure about cascade
                                cascade="all, delete"
                                )
