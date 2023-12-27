from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np

app = Flask(__name__)

model=pickle.load(open('model.pkl','rb'))


@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route('/predict',methods=['POST','GET'])
def predict():
    inputt = []
    inputt.append(request.form.get("year"))
    inputt.append(request.form.get("transmission"))
    inputt.append(request.form.get("mileage"))
    inputt.append(request.form.get("fuelType"))
    inputt.append(request.form.get("tax"))
    inputt.append(request.form.get("mpg"))
    inputt.append(request.form.get("engineSize"))
    float_features=[float(x) for x in inputt]
    final=[np.array(float_features)]
    prediction=model.predict(final)
    output= prediction[0]

    
    return render_template('index.html',pred= "The price of the car is " + str(round(output)) + "$" ,bhai="kuch karna hain iska ab?")
 
       


if __name__ == '__main__':
    app.run(debug=True)