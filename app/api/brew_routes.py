from flask import Blueprint, jsonify, session, request
from app.models import Brew, db, Image
from app.forms.brew_form import CreateBrew
from app.utils import upload, format_errors
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy.orm import joinedload


brew_routes = Blueprint('brews', __name__)


@brew_routes.route("", methods=["POST"])
def add_brew():
    print(request.files)

    print("*********Line 18*************** ")
    image = request.files["img_url"]
    pdf = request.files["pdf_url"]

    img_url = upload(image)
    pdf_url = upload(pdf)

    form = CreateBrew()
    form['csrf_token'].data = request.cookies['csrf_token']

    print("*********Line 25*************** ", img_url, pdf_url)

    if form.validate_on_submit():
        print("*********Line 28*************** ")

        new_brew = Brew(
            title=form.data['title'],
            description=form.data['description'],
            pdf_url=pdf_url,

            price=form.data['price'],
            user_id=form.data['user_id'],
        )
        print("*********Line 38*************** ")

        db.session.add(new_brew)
        db.session.commit()
        new_image = Image(
            img_url=img_url,
            brew_id=new_brew.id)
        db.session.add(new_image)
        db.session.commit()
        return new_brew.to_dict()
    return {'errors': format_errors(form.errors)}, 401


@brew_routes.route("", methods=["GET"])
def get_brews():
    brews = Brew.query.options(joinedload('reviews'), joinedload(
        'images'), joinedload('brew_tags')).all()
    return {brew.id: brew.to_dict(reviews=brew.reviews, images=brew.images, brew_tags=brew.brew_tags) for brew in brews}
