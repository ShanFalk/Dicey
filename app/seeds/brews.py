from app.models import db, Brew, Tag

def seed_brews():
    tags = Tag.query.all()
    db.session.add_all(
        [
            Brew(
            title = 'Waterdeep City Encounters',
            description = 'A plethora of unexpected and thrilling random encounters in the Waterdeep setting.',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/378174-Waterdeep_City_Encounters_v1.2.pdf',
            price = 1.00,
            for_sale = True,
            user_id = 3,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),


            Brew(
            title = 'Siege of Estelminas',
            description = 'Can your party help break the siege of Estelminas in time?',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/2+-+/Estelminas.pdf',
            price = 0.01,
            for_sale = True,
            user_id = 2,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'Poisonous Clover',
            description = 'Herbs, Poisons and all things that grow!',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/xxx-poisonous-clover.pdf',
            price = 0.20,
            for_sale = True,
            user_id = 1,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'The Lazy Dungeon Master',
            description = 'Do your game prep smart.',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/lazy-dm.pdf',
            price = 5.00,
            for_sale = True,
            user_id = 3,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'Creative Corridors',
            description = 'Your corridors will never be the same.',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/612938-Cunningly_Creative_Corridors_thegrinningfrog.com.pdf',
            price = 2.00,
            for_sale = True,
            user_id = 2,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'Menzoberranzan',
            description = "Explore the the setting of the great city of Menzoberran with this guide that offers everything you'll ever need for your adventures in the Underdark.",
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/Map_Menzoberranzan.pdf',
            price = 1.00,
            for_sale = True,
            user_id = 1,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = '101 Uncommon Magical Items',
            description = 'A lot of Magical Items. Make your players happy, save time.',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/619560-101_uncommon_magic_items_7152018.pdf',
            price = 0.01,
            for_sale = True,
            user_id = 3,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'Trilemma Map Pack',
            description = 'Fantast 3D maps to bring visual richness to your game.',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/xx_Trilemma_Map_Pack.pdf',
            price = 1.00,
            for_sale = True,
            user_id = 2,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = '20 Uncommon Magic Rings',
            description = 'One ring to rule them all.',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/920486-20_Uncommon_Magic_Rings.pdf',
            price = 0.50,
            for_sale = True,
            user_id = 1,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'The Ruins of Olbi',
            description = 'Once the greatest Dwarven city east of the Moonsea, now the the place of legends for budding and daring adventurers.',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/xx_The_Ruins_of_Olbi.pdf',
            price = 2.00,
            for_sale = True,
            user_id = 3,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'Kidnap the Archpriest',
            description = "Everything you'll need to inflitrate a medieval city and kidnap the archpriest.",
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/Kidnap_the_Archpriest_PDF.pdf',
            price = 5.00,
            for_sale = True,
            user_id = 2,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'Random Encounters',
            description = "Couldn't hurt to have a few ready to go?",
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/1253440-RandomEncountersExpanded.pdf',
            price = 0.50,
            for_sale = True,
            user_id = 1,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'Grimm Encounters',
            description = 'Dark, gory, deadly.. Perfect for family fun and bedtime stories!',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/819295-GE_Final.pdf',
            price = 0.99,
            for_sale = True,
            user_id = 3,
            brew_tags=[x for x in tags if x.name == "Horror"]),

            Brew(
            title = 'Versatile NPCS',
            description = 'Lots of NPCS for whatever your needs.',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/999563-Versatile_NPCs_II_full.pdf',
            price = 0.01,
            for_sale = True,
            user_id = 2,
            brew_tags=[x for x in tags if x.name == "Fantasy"]),

            Brew(
            title = 'Blood at the Auction',
            description = 'Buy things, solve some mysteries, try to kill some bad guys!',
            pdf_url = 'https://myawstestpython.s3.amazonaws.com/819295-Blood_at_the_Auction.pdf',
            price = 0.50,
            for_sale = True,
            user_id = 1,
            brew_tags=[x for x in tags if x.name == "Horror"]),
    ])

    db.session.commit()

def undo_brews():
    db.session.execute('TRUNCATE brews RESTART IDENTITY CASCADE;')
    db.session.commit()
