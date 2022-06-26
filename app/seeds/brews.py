from app.models import db, Brew

def seed_brews():
    brew_seed_1 = Brew(title = '',
                description = '',
                pdf_url = '',
                price = 0.00,
                for_sale = True,
                user_id = 'int')

    brew_seed_2 = Brew(title = '',
                description = '',
                pdf_url = '',
                price = 0.00,
                for_sale = True,
                user_id = 'int')

    brew_seed_3 = Brew(title = '',
                description = '',
                pdf_url = '',
                price = 0.00,
                for_sale = True,
                user_id = 'int')

    db.session.add(brew_seed_1)
    db.session.add(brew_seed_2)
    db.session.add(brew_seed_3)

    db.session.commit()

def undo_brews():
    db.session.execute('TRUNCATE brews RESTART IDENTITY CASCADE;')
    db.session.commit()
