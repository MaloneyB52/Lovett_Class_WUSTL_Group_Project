from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import datetime as dt
import numpy as np
import pandas as pd
import sqlalchemy
import json
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect


app = Flask(__name__)

dialect = 'postgresql'
username = 'postgres'
password = 'bootcamp2021'
host = 'bootcamp-final-cln.ch1wrcuq3max.us-east-2.rds.amazonaws.com'
database = 'crime'
engine = create_engine(f'{dialect}://{username}:{password}@{host}/{database}')

inspector = inspect(engine)
inspector.get_table_names()


with engine.connect() as conn:
    off_type_person_df = pd.read_sql("SELECT * FROM person_crime", conn)

with engine.connect() as conn:
    off_type_property_df = pd.read_sql("SELECT * FROM property_crime", conn)

with engine.connect() as conn:
    off_type_society_df = pd.read_sql("SELECT * FROM society_crime", conn)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/getperson")
def getperson():
    return  off_type_person_df.to_json(orient="columns")

@app.route("/getproperty")
def getproperty():
    return  off_type_property_df.to_json(orient="columns")

@app.route("/getsociety")
def getsociety():
    return  off_type_society_df.to_json(orient="columns")

if __name__ == "__main__":
    app.run(debug=True)