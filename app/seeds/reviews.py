from app.models import db, Review


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