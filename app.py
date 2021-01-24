from flask_cors import CORS, cross_origin
from flask import Flask, render_template, send_from_directory, request, jsonify
import time

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)


@app.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}


@app.route('/testpost', methods=['POST'])
def testpost():
    if not request.json:
        return {'content': "not a json post"}
    data = request.get_json()
    return {'content': data['sentence']}


@ app.route('/api')
def Welcome():
    return "Welcome to the API!!!"


@ app.route('/api/justpie/')
def GeneratePie():
    return "generate"


@ app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


# test
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
