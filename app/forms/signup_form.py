from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
import re


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


def validate_username(form, field):
    username = field.data
    if len(username) <= 2:
        return ValidationError('username is too short.')
    return username


def validate_email(form, field):
    email = field.data
    if len(email) <= 2:
        raise ValidationError('email is too short.')
    if not '@' in email:
        raise ValidationError('email needs an @ symbol.')
    return email


def validate_password(form, field):
    password = field.data
    print('------------', password, '------------')
    if not re.match(r"^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$])[\w\d@#$]{6,12}$", password):
        print("********************************************************************************")
        raise ValidationError(
            'Password needs at least one digit, uppercase letter, lowercase letter, and special character')
    return password


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[
                           DataRequired(), username_exists, validate_username])
    email = StringField('email', validators=[
                        DataRequired(), user_exists, validate_email])
    password = StringField('password', validators=[
                           DataRequired(), validate_password])
    bio = TextAreaField("bio", validators=[DataRequired()])
