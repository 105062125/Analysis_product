from flask_cors import CORS, cross_origin
from flask import Flask, render_template, send_from_directory, request, jsonify

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)


@app.route('/api')
def Welcome():
    return "Welcome to the API!!!"


@app.route('/api/justpie/')
def GeneratePie():
    return "generate"


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')
