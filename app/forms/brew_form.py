from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField, StringField, BooleanField, FloatField, TextAreaField
from wtforms import validators
from wtforms.validators import DataRequired
import re


class CreateBrew(FlaskForm):
    id = IntegerField("id")
    title = StringField('title', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    # for_sale = BooleanField("for_sale", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])

    # def validate_image(form, field):
    #     if field.data:
    #         field.data = re.sub(r'[^a-z0-9_.-]', '_', field.data)
