from app.models import db, Tag


def seed_tags():
    pass

def undo_tags():
    db.session.execute('TRUNCATE tags (RESTART IDENTITY CASCADE;')
    db.session.commit()