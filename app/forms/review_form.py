from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField, StringField, BooleanField, FloatField, TextAreaField, Field
from wtforms import validators
from wtforms.validators import DataRequired, Length
import re


class CreateReview(FlaskForm):
    rating = IntegerField("rating", validators=[DataRequired(message="You must give a rating.")])
    content = StringField("content", validators=[DataRequired(message="You must write something."), Length(min=1, max=255, message="Your review must be 255 characters or less.")])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    brew_id = IntegerField("brew_id", validators=[DataRequired()])


class UpdateReview(FlaskForm):
    id = IntegerField("id")
    rating = IntegerField("rating", validators=[DataRequired(message="You must give a rating.")])
    content = StringField("content", validators=[DataRequired(message="You must write something."), Length(min=1, max=255, message="Your review must be 255 characters or less.")])
    user_id = IntegerField("user_id")
    brew_id = IntegerField("brew_id")
