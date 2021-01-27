from flask_cors import CORS, cross_origin
from flask import Flask, render_template, send_from_directory, request, jsonify
from database import db
from models import User
from fetch_stock_data import fetch_stock
import time
import os

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'test.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# CORS can let this app use api in same localhost
CORS(app)


@ app.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}


@ app.route('/testpost', methods=['POST'])
def testpost():
    if not request.json:
        return {'content': "not a json post"}
    data = request.get_json()
    return {'content': data['sentence']}


@ app.route('/api')
def Welcome():
    return "Welcome to the API!!!"


@ app.route('/fetch_stock')
def stock_and_strategy():
    data = fetch_stock()
    return data


@ app.route('/get_all_user')
def get_all_user():
    user_list = []
    for user in User.query.all():
        user_list.append([str(user.username), str(user.email)])
    return {'user_list': user_list}


@ app.route('/create_user/<username>/<email>')
def create_user(username, email):
    u1 = User(username=username, email=email)
    db.session.add(u1)
    db.session.commit()
    print("create user successfully")
    return {'status': 'upload successfully'}


@ app.route('/create_all_user')
def create_all_user():
    db.create_all()
    u1 = User(username='john', email='john@gmail.com')
    u2 = User(username='susan', email='susan@gmail.com')
    u3 = User(username='mary', email='mary@gmail.com')
    u4 = User(username='david', email='david@gmail.com')
    db.session.add(u1)
    db.session.add(u2)
    db.session.add(u3)
    db.session.add(u4)
    db.session.commit()
    print("create db successfully")
    return send_from_directory(app.static_folder, 'index.html')


@ app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


# start from here
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
