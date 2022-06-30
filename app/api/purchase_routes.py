from flask import Blueprint, jsonify, session, request
from app.models import User, db, Purchase
from sqlalchemy.orm import joinedload
from flask_login import current_user, login_user, logout_user, login_required


purchase_routes = Blueprint('purchases', __name__)


@purchase_routes.route("", methods=["GET"])
def get_purchase():
    purchases = Purchase.query.all()
    print("****************************", purchases)
    return {purchase.id: purchase.to_dict() for purchase in purchases}
