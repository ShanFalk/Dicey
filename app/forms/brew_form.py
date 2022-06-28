from typing import Dict
from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField, StringField, BooleanField, FloatField, TextAreaField, Field
from wtforms import validators
from wtforms.validators import DataRequired
import re
from app.models import db, Tag

class DictField(Field):
    def get_list(self, values):
        self.data = values


class DictField(Field):
    def get_list(self, values):
        self.data = values


class CreateBrew(FlaskForm):

    title = StringField('title', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    # for_sale = BooleanField("for_sale", validators=[DataRequired()])
    brew_tags = DictField("brew_tags")
    user_id = IntegerField("user_id", validators=[DataRequired()])

    # def validate_image(form, field):
    #     if field.data:
    #         field.data = re.sub(r'[^a-z0-9_.-]', '_', field.data)


class UpdateBrew(FlaskForm):
    id = IntegerField("id")
    title = StringField('title', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
