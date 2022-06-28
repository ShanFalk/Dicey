pipenv install
pipenv lock --requirement
pipenv run flask db migrate -m “message”
pipenv db upgrade
pipenv flask run seed all
pipenv flask run seed undo


pipenv run flask run
