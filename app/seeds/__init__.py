from flask.cli import AppGroup
from .users import seed_users, undo_users
from .brews import seed_brews, undo_brews
from .reviews import seed_reviews, undo_reviews
from .tags import seed_tags, undo_tags
from .images import seed_images, undo_images
from .brewtags import seed_brewtags, undo_brewtags
from .purchases import seed_purchases, undo_purchases

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_brews()
    seed_reviews()
    seed_tags()
    seed_images()
    seed_brewtags()
    seed_purchases()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_purchases()
    undo_brewtags()
    undo_tags()
    undo_reviews()
    undo_images()
    undo_brews()
    undo_users()
