from app.models import db, Tag


def seed_tags():
    db.session.add_all([
        Tag(name='Horror', type='genre'),
        Tag(name='Science Fantasy', type='genre'),
        Tag(name='Funny', type='genre'),
        Tag(name='JRPG', type='genre'),
        Tag(name='Medieval', type='genre'),
        Tag(name='Western', type='genre'),
        Tag(name='Regency', type='genre'),
        Tag(name='Noir', type='genre'),
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