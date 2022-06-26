from app.models import db, Image


def seed_images():
    # https://i.imgur.com/0shpwjv.jpg
    # https://i0.wp.com/nerdarchy.com/wp-content/uploads/2019/03/cloud-worms.jpg?fit=564%2C398&ssl=1
    # https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700864920.jpg
    pass


def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
