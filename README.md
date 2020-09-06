## Sepsis Prediction 
Mobile and Web application for real time early prediction of sepsis(6 hours before the onset). I did pre processing, data visualisation , feature engineering and all the data science and machine learning work, I also handled Google Cloud and real time analysis. A flask app is built and deployed on heroku platform along with a flutter native app. 
### Structure

The directory contains web sub directories and a sub directory for hosting model and other scripts:

1. [app](https://github.com/abhishek-parashar/sepsis-prediction/tree/master/app)The folder contains all the major flutter app development work, starting from backend to frontend. This folder is how our app looks.
   
2. [Web](https://github.com/abhishek-parashar/sepsis-prediction/tree/master/web) This folder contains all the front end part of website.

3. [data](https://github.com/abhishek-parashar/sepsis-prediction/tree/master/data) contains the data taken from Physionet website, combined and converted to csv.

4. [model](https://github.com/abhishek-parashar/sepsis-prediction/tree/master/model) contains the model used for predicting , wether a person is suffering from sepsis or not, 6 hours before the onset. It also contains the files for all the pre- processing done. Along with cloud deployment files. We have used Google Cloud Platform and apache spark for streaming data. Backbone of the project.

5. [api](https://github.com/abhishek-parashar/sepsis-prediction/tree/master/api) contains the api for intereacting with flask app. 
  
### Codebase

The project is developed using multiple languages. Python for model and preprocessing along with flask backend development, Dart for flutter, Javascript for website front end development along with html and css. 

### How to run the project:

  1. Open the `Terminal`.
  2. Clone the repository by entering `https://github.com/abhishek-parashar/sepsis-prediction`.
  3. Ensure that `Python3` and `pip` are installed on the system.
  4. Create a `virtualenv` by executing the following command: `virtualenv venv`.
  5. Activate the `venv` virtual environment by executing the follwing command: `source venv/bin/activate`.
  6. Enter the cloned repository directory and execute `pip install -r requirements.txt`.
  7. Now, execute the following command: `flask run` and it will point to the `localhost` server with the port `5000`.
  8. Enter the `IP Address: http://localhost:5000` on a web browser and use the application.
  
### Dependencies

The following dependencies can be found in [requirements.txt](https://github.com/abhishek-parashar/Reddit-flair-detection/blob/master/requirements.txt):

  1. [scikit-learn](https://scikit-learn.org/)
  2. [Flask](https://palletsprojects.com/p/flask/)
  3. [Gensim](https://radimrehurek.com/gensim/)
  4. [pandas](https://pandas.pydata.org/)
  5. [numpy](http://www.numpy.org/)
  6. [scikit-learn](https://scikit-learn.org/stable/index.html)
  7. [gunicorn](https://gunicorn.org/)
  8. [dart](https://dart.dev/)
  9. [reactjs](https://reactjs.org/)
  
  
### XGBoost along with Gaussian mixture model is used to build the model. The model is tested on various other models. Details summary to be added soon.

### References
#### 2. For Building machine learning model:
1. https://medium.com/themlblog/splitting-csv-into-train-and-test-data-1407a063dd74
2. https://towardsdatascience.com/multi-class-text-classification-model-comparison-and-selection-5eb066197568
3. https://medium.com/@robert.salgado/multiclass-text-classification-from-start-to-finish-f616a8642538
4. https://www.analyticsvidhya.com/blog/2018/04/a-comprehensive-guide-to-understand-and-implement-text-classification-in-python/
5. https://www.districtdatalabs.com/text-analytics-with-yellowbrick
6. Applied AI course- https://www.appliedaicourse.com/

#### 3.For Building the Website and Deploying it:
1.	https://towardsdatascience.com/designing-a-machine-learning-model-and-deploying-it-using-flask-on-heroku-9558ce6bde7b
2.	https://towardsdatascience.com/deploying-a-deep-learning-model-on-heroku-using-flask-and-python-769431335f66
3.	https://medium.com/analytics-vidhya/deploy-machinelearning-model-with-flask-and-heroku-2721823bb653
4.	https://www.youtube.com/watch?v=UbCWoMf80PY
5.	https://www.youtube.com/watch?v=mrExsjcvF4o
6.	https://blog.cambridgespark.com/deploying-a-machine-learning-model-to-the-web-725688b851c7
