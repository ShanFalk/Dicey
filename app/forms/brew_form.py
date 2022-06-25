from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
from wtforms import validators
import re


class CreateBrew(FlaskForm):
    image = FileField('Image File', [validators.regexp(
        '^[\w]+\.((png)|(jpg)|(pdf)|(jpeg)|(gif))$')])
    submit = SubmitField('submit')

    def validate_image(form, field):
        if field.data:
            field.data = re.sub(r'[^a-z0-9_.-]', '_', field.data)
