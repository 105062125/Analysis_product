from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)


@app.route('/')
def index(path):
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
