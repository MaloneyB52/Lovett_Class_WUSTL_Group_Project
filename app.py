from flask import Flask
app = Flask(__name__)
@app.route('/')
def crime():
    return 'Crime in the US'