from app.models import db, Tag


def seed_tags():
    db.session.add_all([
        Tag(name='Horror'),
        Tag(name='Science-Fantasy'),
        Tag(name='Funny'),
        Tag(name='JRPG'),
        Tag(name='Medieval'),
        Tag(name='Fantasy'),
        Tag(name='Western'),
        Tag(name='Regency'),
        Tag(name='Noir'),
        # Tag(name='Adventure', type='kind'),
        # Tag(name='Items', type='kind'),
        # Tag(name='NPCs/Monsters', type='kind'),
        # Tag(name='Maps', type='kind'),
        # Tag(name='Encounters', type='kind'),
    ])
    db.session.commit()

def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()