from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)



# @login_required
@user_routes.route('/')
def users():
    users = User.query.all()
    return {user.id: user.to_dict() for user in users}

@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
