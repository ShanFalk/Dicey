from flask import Blueprint, json, session, request
from app.models import User, db, Purchase, purchase
from sqlalchemy.orm import joinedload
from flask_login import current_user, login_user, logout_user, login_required


purchase_routes = Blueprint('purchases', __name__)


@purchase_routes.route("", methods=["GET"])
def get_purchase():
    purchases = Purchase.query.all()
    return {purchase.id: purchase.to_dict() for purchase in purchases}

@purchase_routes.route("",methods=["POST"])
def post_purchase():
    print('*'*50, json.loads(request.data))
    brew_ids = request.data["brew_ids"]
    user_id = request.data["user_id"]
    for brew_id in brew_ids:
        new_purchase = Purchase(
            user_id,
            brew_id
        )
        db.session.add(new_purchase)
    db.session.commit()

    purchases = Purchase.query.all()
    return {purchase.id: purchase.to_dict() for purchase in purchases}
