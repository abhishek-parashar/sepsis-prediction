import pandas as pd 
import numpy as np 
from flask import Flask,request,render_template,redirect,flash,url_for
import pickel
from sklearn.externals import joblib
'''
import all required libraries for ML model.
'''
app = Flask(__name__)

@app.route("/")  # this is for home page
def hello():
    return "Hello World!"

@app.route("/predict", methods=['POST']){
	
	# collecting data
	df = pd.read_csv("position_of_data_file_with_name.csv")
	df_features = # take features whatever is needed.
	df.target = # take taget column in this variable.

	# loading model.
	model = open("location_of_your_model.pkl",'rb')
	clf = joblib.load(model)

	# posting prediction results of our model.
	if request.method == "POST":
		querry_Name = request.form['querry_Name_on_template']
		data = [querry_Name]
		data_in_array_form = cv.transform(data).toarray()
		prediction_Result = clf.predict(data_in_array_form) 


	return render_template('result_template.html',predictions = prediction_Result, name = querry_Name)
}




if __name__ == "__main__":
	app.run(debug=True)