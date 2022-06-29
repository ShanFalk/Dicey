from app.models import db, Image


def seed_images():
    db.session.add_all([
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Screen+Shot+2022-06-28+at+09.35.01.png",
            brew_id = 1,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Screen+Shot+2022-06-28+at+09.35.26.png",
            brew_id = 1,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Screen+Shot+2022-06-28+at+09.35.35.png",
            brew_id = 1,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/2+-+/estel-minas-cover.png",
            brew_id = 2,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/2+-+/estelminas1.png",
            brew_id = 2,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/2+-+/Estelminas2.png",
            brew_id = 2,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/poisonous-clover-1.png",
            brew_id = 3,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/poisonous-clover-2.pnghttps://myawstestpython.s3.amazonaws.com/poisonous-clover-2.png",
            brew_id = 3,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/lazy-dm-cover.png",
            brew_id = 4,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/lazy-dm-contents.png",
            brew_id = 4,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/lazy-dm1.png",
            brew_id = 4,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Cunningly_Creative_Corridors-1.png",
            brew_id = 5,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Cunningly_Creative_Corridors-2.png",
            brew_id = 5,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Cunningly_Creative_Corridors-3.png",
            brew_id = 5,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Menzoberranzan1.jpg",
            brew_id = 6,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Menzoberranzan2.png",
            brew_id = 6,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Menzoberranzan3.png",
            brew_id = 6,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/uncommon_magic_items1.png",
            brew_id = 7,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/uncommon_magic_items2.png",
            brew_id = 7,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/uncommon_magic_items3.png",
            brew_id = 7,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Trilemma_Map_Pack1.png",
            brew_id = 8,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Trilemma_Map_Pack2.png",
            brew_id = 8,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Trilemma_Map_Pack3.png",
            brew_id = 8,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/20_Uncommon_Magic_Rings1.png",
            brew_id = 9,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/20_Uncommon_Magic_Rings2.png",
            brew_id = 9,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/20_Uncommon_Magic_Rings3.png",
            brew_id = 9,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/The_Ruins_of_Olbi1",
            brew_id = 10,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/The_Ruins_of_Olbi2",
            brew_id = 10,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/The_Ruins_of_Olbi3",
            brew_id = 10,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Kidnap_the_Archpriest1",
            brew_id = 11,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Kidnap_the_Archpriest2",
            brew_id = 11,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Kidnap_the_Archpriest3",
            brew_id = 11,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/RandomEncountersExpanded1",
            brew_id = 12,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/RandomEncountersExpanded2",
            brew_id = 12,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/RandomEncountersExpanded3",
            brew_id = 12,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/GE_Final1",
            brew_id = 13,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/GE_Final2",
            brew_id = 13,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/GE_Final3",
            brew_id = 13,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Versatile_NPCs_II_full1",
            brew_id = 14,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Versatile_NPCs_II_full2",
            brew_id = 14,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Versatile_NPCs_II_full3",
            brew_id = 14,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Blood_at_the_Auction1",
            brew_id = 15,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Blood_at_the_Auction2",
            brew_id = 15,
        ),
        Image(
            img_url = "https://myawstestpython.s3.amazonaws.com/Blood_at_the_Auction3",
            brew_id = 15,
        ),
    ]
    )

    db.session.commit()



def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
