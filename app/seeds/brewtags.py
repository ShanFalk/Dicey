from app.models import db, brewtags

def seed_brewtags():
    pass

def undo_brewtags():
    db.session.execute('TRUNCATE brewtags RESTART IDENTITY CASCADE;')
    db.session.commit()