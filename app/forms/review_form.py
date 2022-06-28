from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField, StringField, BooleanField, FloatField, TextAreaField, Field
from wtforms import validators
from wtforms.validators import DataRequired
import re


class CreateReview(FlaskForm):
    rating = IntegerField("rating", validators=[DataRequired()])
    content = StringField("content", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    brew_id = IntegerField("brew_id", validators=[DataRequired()])


class UpdateReview(FlaskForm):
    rating = IntegerField("rating")
    content = StringField("content")
    user_id = IntegerField("user_id")
    brew_id = IntegerField("brew_id")
