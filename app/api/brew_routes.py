from flask import Blueprint, jsonify, session, request
from app.models import Brew, db, Image, Tag, Review
from app.forms.brew_form import CreateBrew, UpdateBrew
from app.utils import upload, format_errors
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy.orm import joinedload
# import pandas as pd
# import nltk
# import plotly.express as px
# from nltk.sentiment.vader import SentimentIntensityAnalyzer


brew_routes = Blueprint('brews', __name__)


@brew_routes.route("", methods=["POST"])
def add_brew():

    print('*'*50, request.files.keys())

    image_urls = []

    for key in request.files.keys():
        if key != "pdf_url":
            image = request.files[key]
            image_url = upload(image)
            image_urls.append(image_url)

    print('*'*50, 'URLS', image_urls)

    pdf = request.files["pdf_url"]
    pdf_url = upload(pdf)

    form = CreateBrew()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        tag_id_arr = form.data["brew_tags"].split(",")
        tag_id_arr = [int(id) for id in tag_id_arr]
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
        for img_url in image_urls:
            print('*'*50, "IMAGE ADD")
            new_image = Image(
                img_url=img_url,
                brew_id=new_brew.id)
            db.session.add(new_image)
        db.session.commit()
        brew = Brew.query.options(joinedload('reviews'), joinedload(
            'images'), joinedload('brew_tags')).get(new_brew.id)
        return brew.to_dict(reviews=brew.reviews, images=brew.images, brew_tags=brew.brew_tags)
    return {'errors': format_errors(form.errors)}, 401


@brew_routes.route("", methods=["PUT"])
def update_brew():

    print('*'*50, request.files.keys())

    img_url = pdf_url = None

    if "img_url" in request.files.keys():
        image = request.files["img_url"]
        img_url = upload(image)
        print(img_url)

    if "pdf_url" in request.files.keys():
        pdf = request.files["pdf_url"]
        pdf_url = upload(pdf)

    form = UpdateBrew()
    form['csrf_token'].data = request.cookies['csrf_token']


    if form.validate_on_submit():
        print('*'*50, form.data)
        tag_id_arr = form.data['brew_tags'].split(',')
        print('*'*50)
        tag_id_arr = [int(id) for id in tag_id_arr]
        tags = Tag.query.all()
        brew = Brew.query.get(form.data['id'])
        brew.title = form.data['title']
        brew.description = form.data['description']
        brew.price = form.data['price']
        brew.brew_tags = [tag for tag in tags if tag.id in tag_id_arr]
        if pdf_url:
            brew.pdf_url = pdf_url
        if img_url:
            image = Image.query.filter_by(brew_id=form.data["id"])
            image.img_url = img_url
        db.session.commit()
        return brew.to_dict(reviews=brew.reviews, images=brew.images, brew_tags=brew.brew_tags) 
    return {'errors': format_errors(form.errors)}, 401


@brew_routes.route("", methods=["GET"])
def get_brews():
    brews = Brew.query.options(joinedload('reviews'), joinedload(
        'images'), joinedload('brew_tags')).all()
    return {brew.id: brew.to_dict(reviews=brew.reviews, images=brew.images, brew_tags=brew.brew_tags) for brew in brews}


@brew_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_brew(id):
    brew = Brew.query.get(id)
    db.session.delete(brew)
    db.session.commit()
    return {'Successful': 'Successful'}


@brew_routes.route("/one", methods=["GET"])
def sentiment():
    # review_data = pd.read_sql_table(table_name=Review.__tablename__,
    #                                 con=db.session.connection(), index_col="id")
    # brew_data = pd.read_sql_table(table_name=Brew.__tablename__,
    #                               con=db.session.connection(), index_col="id")
    # Brew.query.options(joinedload(
    #       'reviews'), joinedload('brew_tags')).filter(Brew.user_id == 1).all()

    data = pd.read_sql_query('select * from brews ',
                             con=db.session.connection(), index_col="id")
    print(data)

    # ratings = review_data["rating"].value_counts()

    # sentiments = SentimentIntensityAnalyzer()
    # review_data["Positive"] = [sentiments.polarity_scores(
    #     i)["pos"] for i in review_data["content"]]
    # review_data["Negative"] = [sentiments.polarity_scores(
    #     i)["neg"] for i in review_data["content"]]
    # review_data["Neutral"] = [sentiments.polarity_scores(
    #     i)["neu"] for i in review_data["content"]]
    # review_data = review_data[["content", "Positive", "Negative", "Neutral"]]
    # print(review_data.head())

    return "Success"
