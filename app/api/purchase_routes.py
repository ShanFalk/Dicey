from flask import Blueprint, json, session, request
from app.models import User, db, Purchase
from sqlalchemy.orm import joinedload
from flask_login import current_user, login_user, logout_user, login_required


purchase_routes = Blueprint('purchases', __name__)


@purchase_routes.route("", methods=["GET"])
def get_purchase():
    purchases = Purchase.query.all()
    return {purchase.id: purchase.to_dict() for purchase in purchases}

@purchase_routes.route("",methods=["POST"])
def post_purchase():

    data = json.loads(request.data)
    brew_ids = data["brew_ids"]

    for brew_id in brew_ids:
        new_purchase = Purchase(
            user_id = data["user_id"],
            brew_id = brew_id
        )
        db.session.add(new_purchase)
    db.session.commit()

    purchases = Purchase.query.all()
    return {purchase.id: purchase.to_dict() for purchase in purchases}
