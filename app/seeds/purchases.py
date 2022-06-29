from app.models import db, Purchase


def seed_purchases():
    db.session.add_all(
        [
            Purchase(
                user_id=1,
                brew_id=4,
            ),
            Purchase(
                user_id=1,
                brew_id=9,
            ),
            Purchase(
                user_id=1,
                brew_id=12,
            ),
            Purchase(
                user_id=1,
                brew_id=13,
            ),
            Purchase(
                user_id=2,
                brew_id=1,
            ),
            Purchase(
                user_id=2,
                brew_id=2,
            ),
            Purchase(
                user_id=2,
                brew_id=4,
            ),
            Purchase(
                user_id=1,
                brew_id=4,
            ),
            Purchase(
                user_id=3,
                brew_id=6,
            ),
            Purchase(
                user_id=3,
                brew_id=7,
            ),
        ]
    )
    db.session.commit()


def undo_purchases():
    db.session.execute('TRUNCATE purchases RESTART IDENTITY CASCADE;')
    db.session.commit()
