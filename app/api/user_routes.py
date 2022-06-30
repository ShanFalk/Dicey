from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, db, Purchase

user_routes = Blueprint('users', __name__)


# @login_required
@user_routes.route('')
def users():
    users = User.query.all()
    return {user.id: user.to_dict() for user in users}


@login_required
@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/purchases')
def user_purchases(id):
    purchases = Purchase.query.filter(Purchase.user_id == id).all()
    return {purchase.id: purchase.to_dict() for purchase in purchases}
