# write a flask app that has one put endpoint

from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get():
	return "Hello World!"

@app.route('/pdf/post', methods=['POST'])
def postpdf():
	data = request.get_json()
	print(data)
	return ":)"

@app.route('/text/post', methods=['POST'])
def posttext():
	data = request.get_json()
	print(data)
	return ":)"

if __name__ == '__main__':
	app.run(debug=True, host='localhost')
	