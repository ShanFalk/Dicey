from flask import Blueprint, jsonify, session, request
from app.models import Brew, db, Image, Tag
from app.forms.brew_form import CreateBrew, UpdateBrew
from app.utils import upload, format_errors
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy.orm import joinedload


brew_routes = Blueprint('brews', __name__)


@brew_routes.route("", methods=["POST"])
def add_brew():

    image = request.files["img_url"]
    pdf = request.files["pdf_url"]

    img_url = upload(image)
    pdf_url = upload(pdf)

    form = CreateBrew()
    form['csrf_token'].data = request.cookies['csrf_token']

    print(form.data)
    print(form.data["brew_tags"])

    if form.validate_on_submit():

        tag_id_arr = form.data["brew_tags"].split(",")
        tag_id_arr = [int(id) for id in tag_id_arr]
        print("*"*50, tag_id_arr)
        tags = Tag.query.all()
        brew_tags = [tag for tag in tags if tag.id in tag_id_arr]

        new_brew = Brew(
            title=form.data['title'],
            description=form.data['description'],
            pdf_url=pdf_url,
            price=form.data['price'],
            user_id=form.data['user_id'],
            brew_tags=brew_tags)

        db.session.add(new_brew)
        db.session.commit()
        new_image = Image(
            img_url=img_url,
            brew_id=new_brew.id)
        db.session.add(new_image)
        db.session.commit()
        return new_brew.to_dict()
    return {'errors': format_errors(form.errors)}, 401


@brew_routes.route("", methods=["PUT"])
def update_brew():
    # print(request.files)

    # image = request.files["img_url"]
    # pdf = request.files["pdf_url"]

    # img_url = upload(image)
    # pdf_url = upload(pdf)

    form = UpdateBrew()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        brew = Brew.query.get(form.data['id'])

        brew.title = form.data['title']
        brew.description = form.data['description']
        brew.price = form.data['price']
        db.session.commit()
        # image = Image.query.get(form.data["id"])
        return brew.to_dict()
    return {'errors': format_errors(form.errors)}, 401


@brew_routes.route("", methods=["GET"])
def get_brews():
    brews = Brew.query.options(joinedload('reviews'), joinedload(
        'images'), joinedload('brew_tags')).all()
    return {brew.id: brew.to_dict(reviews=brew.reviews, images=brew.images, brew_tags=brew.brew_tags) for brew in brews}
