from app.models import db, Review
#check the name of the model!

def seed_reviews():
    db.session.add_all(
        [
            Review(
        rating=5,
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        userId=1,
        brewId=1
        ),
            Review(
        rating=4,
        content='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        userId=2,
        brewId=1
        ),
            Review(
        rating=1,
        content='Ut enim ad minim veniam',
        userId=3,
        brewId=2
        ),
            Review(
        rating=3,
        content='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        userId=1,
        brewId=2
        ),
            Review(
        rating=2,
        content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        userId=2,
        brewId=3
        ),
        Review(
        rating=5,
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        userId=3,
        brewId=3
        ),
            Review(
        rating=4,
        content='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        userId=2,
        brewId=3
        ),
            Review(
        rating=1,
        content='Ut enim ad minim veniam',
        userId=3,
        brewId=2
        ),
            Review(
        rating=3,
        content='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        userId=3,
        brewId=1
        ),
            Review(
        rating=2,
        content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        userId=1,
        brewId=2
        ),
            Review(
        rating=3,
        content='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        userId=1,
        brewId=3
        ),

        ]
    )
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY;')
    db.session.commit()
