from app.models import db, Review
<<<<<<< HEAD


def seed_reviews():
    review_seed_1 = Review(rating = 3,
                content = 'Seen better',
                user_id = 1,
                brew_id = 2)

    review_seed_2 = Review(rating = 5,
                content = 'Awesome.',
                user_id = 2,
                brew_id = 1)

    review_seed_3 = Review(rating = 2,
                content = 'Meh.',
                user_id = 3,
                brew_id = 2)

    review_seed_3 = Review(rating = 2,
                content = 'Meh.',
                user_id = 3,
                brew_id = 2)

    review_seed_4 = Review(rating = 2,
                content = "Would buy it again if it wasn't a pdf.",
                user_id = 3,
                brew_id = 1)

    db.session.add(review_seed_1)
    db.session.add(review_seed_2)
    db.session.add(review_seed_3)
    db.session.add(review_seed_4)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE purchases (RESTART IDENTITY CASCADE;')
    db.session.commit()
=======
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
        brewId=4
        ),
            Review(
        rating=1,
        content='Ut enim ad minim veniam',
        userId=3,
        brewId=4
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
        brewId=4
        ),
            Review(
        rating=3,
        content='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        userId=1,
        brewId=5
        ),

        ]
    )
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
>>>>>>> c80a3071e74a20228af700650f0a65e45cdce5e3
