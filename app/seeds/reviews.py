from app.models import db, Review
#check the name of the model!

def seed_reviews():
    db.session.add_all(
        [
            Review(
        rating=5,
        content='This brew took my gaming experience to a whole new level!',
        userId=1,
        brewId=1
        ),
            Review(
        rating=4,
        content='Very unique content! Had a lot of fun with it.',
        userId=2,
        brewId=1
        ),
            Review(
        rating=1,
        content='Booooooriiiiiing',
        userId=3,
        brewId=2
        ),
            Review(
        rating=3,
        content='',
        userId=1,
        brewId=1
        ),

        ]
    )
