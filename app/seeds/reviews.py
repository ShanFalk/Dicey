from app.models import db, Review
# check the name of the model!


def seed_reviews():
    db.session.add_all(
        [
            Review(
                rating=5,
                content='AMAZING CONTENT',
                user_id=1,
                brew_id=4
            ),
            Review(
                rating=4,
                content='Pretty darn good!',
                user_id=1,
                brew_id=8
            ),
            Review(
                rating=1,
                content='Waste of money.',
                user_id=1,
                brew_id=1
            ),
            Review(
                rating=3,
                content='It was okay. Could have used more of the ol\' razzle dazzle.',
                user_id=1,
                brew_id=13
            ),
            Review(
                rating=2,
                content='Needs some serious improvement. Kind of boring content.',
                user_id=2,
                brew_id=1
            ),
            Review(
                rating=5,
                content='Really great value! You certainly get your money\'s worth!',
                user_id=2,
                brew_id=12),
            Review(
                rating=4,
                content='My friends and I really liked this!.',
                user_id=2,
                brew_id=4
            ),
            Review(
                rating=1,
                content='OMG no, just don\'t bother.',
                user_id=1,
                brew_id=4
            ),
            Review(
                rating=3,
                content='I would say this one is pretty good!',
                user_id=3,
                brew_id=6
            ),
            Review(
                rating=2,
                content='Yeesh. Not the worst, but certainly not the best.',
                user_id=3,
                brew_id=14
            ),
            Review(
                rating=3,
                content='I thought I was going to be wowed, but it\'s just okay.',
                user_id=3,
                brew_id=15
            ),
            Review(
                rating=4,
                content='Really added something special to our campaign.',
                user_id=3,
                brew_id=5
            ),
            Review(
                rating=2,
                content='If they can improve their content, I\'ll revise my review.',
                user_id=2,
                brew_id=1
            ),
            Review(
                rating=4,
                content='I really enjoyed this.',
                user_id=3,
                brew_id=2
            ),
            Review(
                rating=4,
                content='The artwork is incredible!',
                user_id=2,
                brew_id=3
            ),
            Review(
                rating=5,
                content='A++ Outstanding.',
                user_id=1,
                brew_id=7
            ),
            Review(
            rating=4,
            content='This one is my favorite so far.',
            user_id=3,
            brew_id=9
            ),
            Review(
                rating=5,
                content='Highly recommend!',
                user_id=3,
                brew_id=10
            ),
            Review(
                rating=4,
                content='I hope they post more; this was great!',
                user_id=3,
                brew_id=11
            ),
            Review(
                rating=3,
                content='Not as good as what I was expecting, but overall nice.',
                user_id=3,
                brew_id=2),


        ]
    )
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
