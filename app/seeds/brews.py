from app.models import db, Brew

def seed_brews():
    brew_seed_1 = Brew(title = 'A cool brew',
                description = 'Just like the title',
                pdf_url = 'text',
                price = 0.01,
                for_sale = True,
                user_id = 3)

    brew_seed_2 = Brew(title = 'Another great title',
                description = 'TExtText',
                pdf_url = 'text',
                price = 0.01,
                for_sale = True,
                user_id = 2)

    brew_seed_3 = Brew(title = 'a great title',
                description = 'aaa',
                pdf_url = 'text',
                price = 0.01,
                for_sale = True,
                user_id = 1)

    db.session.add(brew_seed_1)
    db.session.add(brew_seed_2)
    db.session.add(brew_seed_3)

    db.session.commit()

def undo_brews():
    db.session.execute('TRUNCATE brews RESTART IDENTITY CASCADE;')
    db.session.commit()
