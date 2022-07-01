from app.models import db, Review
# check the name of the model!


def seed_reviews():
    db.session.add_all(
        [
            Review(
                rating=5,
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                user_id=1,
                brew_id=4
            ),
            Review(
                rating=4,
                content='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                user_id=1,
                brew_id=8
            ),
            Review(
                rating=1,
                content='Ut enim ad minim veniam',
                user_id=1,
                brew_id=1
            ),
            Review(
                rating=3,
                content='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                user_id=1,
                brew_id=13
            ),
            Review(
                rating=2,
                content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                user_id=2,
                brew_id=1
            ),
            Review(
                rating=5,
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                user_id=2,
                brew_id=12),
            Review(
                rating=4,
                content='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                user_id=2,
                brew_id=4
            ),
            Review(
                rating=1,
                content='Ut enim ad minim veniam',
                user_id=1,
                brew_id=4
            ),
            Review(
                rating=3,
                content='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                user_id=3,
                brew_id=6
            ),
            Review(
                rating=2,
                content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                user_id=3,
                brew_id=14
            ),
            Review(
                rating=3,
                content='Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.',
                user_id=3,
                brew_id=15
            ),
            Review(
                rating=4,
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                brew_id=5
            ),
            Review(
                rating=2,
                content='Elementum tempus egestas sed sed risus pretium quam vulputate. Montes nascetur ridiculus mus mauris.',
                user_id=2,
                brew_id=1
            ), Review(
                rating=4,
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                brew_id=2
            ), Review(
                rating=4,
                content='Augue neque gravida in fermentum et sollicitudin ac orci.',
                user_id=2,
                brew_id=3
            ), Review(
                rating=5,
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=1,
                brew_id=7), Review(
                rating=4,
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                brew_id=9),
            Review(
                rating=5,
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                brew_id=10),
            Review(
                rating=4,
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                brew_id=11),
            Review(
                rating=3,
                content='Felis imperdiet proin fermentum leo vel. Arcu ac tortor dignissim convallis aenean et. Eu augue ut lectus arcu.',
                user_id=3,
                brew_id=2),


        ]
    )
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
