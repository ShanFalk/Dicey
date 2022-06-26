from app.models import db, Purchase


def seed_purchases():
    pass

def undo_purchases():
    db.session.execute('TRUNCATE purchases (RESTART IDENTITY CASCADE;')
    db.session.commit()