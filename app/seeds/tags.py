from app.models import db, Tag


def seed_tags():
    db.session.add_all([
        Tag(name='Horror'),
        Tag(name='Science Fantasy'),
        Tag(name='Funny'),
        Tag(name='JRPG'),
        Tag(name='Medieval'),
        Tag(name='Western'),
        Tag(name='Regency'),
        Tag(name='Noir'),
    ])

def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()