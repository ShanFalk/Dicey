from flask import Blueprint, jsonify, session, request
from app.models import Tag

tag_routes = Blueprint('tags', __name__)

@tag_routes.route("", methods=["GET"])
def get_tags():
    tags = Tag.query.all()
    return {tag.id: tag.to_dict() for tag in tags}