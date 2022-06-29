from flask import Blueprint, jsonify, session, request
from app.models import Review, brew, db, Image, Tag, Brew
from app.forms.review_form import CreateReview, UpdateReview
from app.utils import upload, format_errors
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy.orm import joinedload
import pd


review_routes = Blueprint('reviews', __name__)


@review_routes.route("", methods=["POST"])
def add_review():

    form = CreateReview()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_review = Review(
            rating=form.data["rating"],
            content=form.data["content"],
            user_id=form.data["user_id"],
            brew_id=form.data["brew_id"]
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': format_errors(form.errors)}, 401


@review_routes.route("", methods=["PUT"])
def update_review():

    form = UpdateReview()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        db.session.commit()
        return review.to_dict()
    return {'errors': format_errors(form.errors)}, 401


# @review_routes.route("", methods=["GET"])
# def get_reviews():
#     reviews = Review.query.options(joinedload('reviews'), joinedload(
#         'images'), joinedload('review_tags')).all()
#     return {review.id: review.to_dict(reviews=review.reviews, images=review.images, review_tags=review.review_tags) for review in reviews}


@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    review = review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return {'Successful': 'Successful'}


@review_routes.route("/sentiment", methods=["GET"])
def sentiment():
    review_data = pd.read_sql_table(table_name=Review.tablename,
                                    con=session.connection(), index_col="id")
    brew_data = pd.read_sql_table(table_name=Brew.tablename,
                                  con=session.connection(), index_col="id")
    print(brew_data, review_data)
