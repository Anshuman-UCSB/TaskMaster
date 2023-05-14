# write a flask app that has one put endpoint

from flask import Flask,request
from flask_cors import CORS
from gpt.chatgpt import GPT
import json
import os, sys
import re

sys.path.append(os.path.join(os.path.dirname(__file__), "calendar"))
from googleCalendar import GoogleCalendar
import utils

app = Flask(__name__)
CORS(app)
preferences = None

def processAssignment(text):
	# assert preferences is not None, "Not initialized from form yet"
	gpt = GPT(open("gpt/prompt.txt",'r').read())
	resp = gpt.ask(text)
	print(resp)
	processed = json.loads(resp)
	# json_str = resp.split("```")[1].strip()
	# print(f"{json_str=}")
	# processed = json.loads(json_str)
	# title = processed['title']
	#  = processed['']
	course_name = processed['course_name']
	gc = GoogleCalendar()
	for task in processed['tasks']:
		print(task, gc)
		task_time = gc.getAvailableTime(task['duration'])
		gc.createEvent(task_time,
				utils.addMinutes(task_time, task['duration']),
				course_name+" assignment",
				task['subtask'],
				)

@app.route('/', methods=['GET'])
def get():
	return "Hello World!"

@app.route('/assignment/pdf', methods=['POST'])
def postpdf():
	data = request.get_json()
	print("[Data]",data)
	return ":)"

@app.route('/form', methods=['POST'])
def postform():
	global preferences
	preferences = request.get_json()
	print(preferences)
	return ":)"

@app.route('/assignment/text', methods=['POST'])
def posttext():
	print("recieved this")
	print("recieved",request.__dict__)
	data = request.get_json()["text"]
	print(data)
	processAssignment(data)
	return ":)"

if __name__ == '__main__':
	app.run(debug=True, host='localhost')
	