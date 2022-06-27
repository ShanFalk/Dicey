from flask import Blueprint, jsonify, session, request
from app.models import Brew, db
from app.forms.brew_form import CreateBrew
from app.aws_utils import get_unique_filename, upload_file_to_s3
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy.orm import joinedload


brew_routes = Blueprint('brews', __name__)


@brew_routes.route("/", methods=["POST"])
@login_required
def add_brew():
    form = CreateBrew()

    form['csrf_token'].data = request.cookies['csrf_token']

    file = request.files[form.image.name]
    if form.validate_on_submit():
        if file.filename == "":
            return "Please select a file"
        if file:
            file.filename = get_unique_filename(file.filename)
            upload_file_to_s3(file)


@brew_routes.route("/", methods=["GET"])
def get_brews():
    brews = Brew.query.options(joinedload('reviews'), joinedload(
        'images'), joinedload('brew_tags')).all()
    print({"brews": [brew.to_dict() for brew in brews]})
    return {"brews": [brew.to_dict() for brew in brews]}
