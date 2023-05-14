# write a flask app that has one put endpoint

from flask import Flask,request
from flask_cors import CORS
from gpt.chatgpt import GPT
import json
import os, sys
from random import randint
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
	color_id = str(randint(1,11))
	for n,task in enumerate(processed['tasks']):
		task_name,task_duration = task.values()
		print(f"{task_duration=},{task_name=}")
		if type(task_name) is int:
			print("swapping")
			task_duration,task_name = task_name,task_duration
		print(f"{task_duration=},{task_name=}")
		task_duration = min(task_duration,60*4)
		task_time = gc.getAvailableTime(task_duration)
		gc.createEvent(task_time,
				utils.addMinutes(task_time, task_duration),
				course_name+" assignment part "+str(n+1),
				task['subtask'],
				color_id
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
	