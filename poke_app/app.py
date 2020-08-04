# Import libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    Response,
    redirect)
import pandas as pd
import io
import random
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure
import base64
import scipy.stats as st
import numpy as np

#################################################
# Flask Setup
app = Flask(__name__)

# Read in csv data
scatter_df = pd.DataFrame(pd.read_csv('poke_app/static/scatter_pokedex.csv'))
scatter_df = scatter_df.dropna(how='any')

# Create dropdown menu from column names
dropdown_list = scatter_df.columns[1:]

@app.route('/')
def home():
    return render_template('index.html')

# Create route that renders the scatter plot template and app
@app.route('/compare', methods=['GET', 'POST'])
def compare():

    links = {'src':''}

    if request.method == 'POST':

        stat_name1 = request.form['stat_name1']
        stat_name2 = request.form['stat_name2']

        x_values = scatter_df[stat_name1]
        y_values = scatter_df[stat_name2]

        # Calculates linear regression
        (slope, intercept, r_value, p_value, std_err) = st.linregress(x_values, y_values)
        x_value = np.asarray(x_values, dtype=np.float64)
        regress_values = x_value * slope + intercept
          
        print(f'The r-squared is: {r_value}')

        # Plots scatter plot and regresion
        img = io.BytesIO()
        # Clears plot
        plt.clf()
        plt.scatter(x_values,y_values)
        plt.title(f'Pokemon {stat_name1} vs. {stat_name2}')
        plt.ylabel(stat_name2)
        plt.xlabel(stat_name1)
        plt.plot(x_value,regress_values,"r-")
        # Annotates graph with equation
        line_eq = "y = " + str(round(slope,2)) + "x + " + str(round(intercept,2))
        plt.annotate(line_eq,xy=(min(x_values),min(y_values)),fontsize=15,color="red")
        plt.savefig(img, format='png')
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode()
        links = {'src':f'data:image/png;base64,{plot_url}', 'r2':f'R-squared: {r_value}', 'pv':f'{p_value}'}

    return render_template('compare.html', dropdown_menu=dropdown_list, links=links)

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/data')
def data():
    return render_template('data.html')

# Route to get and create JSON data for app.js
# @app.route("/scatter", methods=['GET', 'POST'])
# def scatter():

#     # aqi_data = {stat_name1:'', stat_name2:''}

#     if request.method == 'POST':

#         stat_name1 = request.form['stat_name1']
#         stat_name2 = request.form['stat_name2']

#         # Set lists as values in dictionary to be used as JSON
#         # aqi_data = {
#         #     stat_name1: scatter_df[stat_name1].values.tolist(),
#         #     stat_name2: scatter_df[stat_name2].values.tolist()
#         # }

#         # Send to "/scatter"
#         return jsonify(aqi_data)

# Run app
if __name__ == "__main__":
    app.run(debug=True)
    