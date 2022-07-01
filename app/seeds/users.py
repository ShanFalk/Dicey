from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        image_url='https://images.squarespace-cdn.com/content/v1/5d7dafb4eabf16592a823ca0/df0f10e7-07a7-4866-a8ea-3b15d0037c86/20-0129_DEMO.png',
        bio='A demo user.' )

    marnie = User(
        username='marnie',
        email='marnie@aa.io',
        password='password',
        image_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSP6seTMb4N1jcY1_L1z1yPelB91v2STK7Q&usqp=CAU',
        bio='Went down the rabbit hole in the summer of 1982; been here ever since.' )


    bobbie = User(
        username='bobbie',
        email='bobbie@aa.io',
        password='password',
        image_url='https://www.google.com/aclk?sa=L&ai=DChcSEwjMrcz2jcn4AhVqPK0GHcZJCTcYABAFGgJwdg&ae=2&sig=AOD64_3PaW4aFM7icZ8FH_aVIvqyb93eww&adurl&ctype=5&ved=2ahUKEwjG5bz2jcn4AhVBJX0KHWp2B_kQvhd6BAgBEHM',
        bio='Just a humble dude trying to make some great adventures' )


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
