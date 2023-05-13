from __future__ import print_function

import datetime
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from utils import *

class GoogleCalendar():
	def __init__(self):
		self.getCreds()



	def getCreds(self):
		self.SCOPES = ['https://www.googleapis.com/auth/calendar']
		self.creds = None

		# The file token.json stores the user's access and refresh tokens
		if os.path.exists('../../token.json'):
			self.creds = Credentials.from_authorized_user_file('../../token.json', self.SCOPES)
		# If there are no (valid) credentials available, let the user log in.
		if not self.creds or not self.creds.valid:
			if self.creds and self.creds.expired and self.creds.refresh_token:
				self.creds.refresh(Request())
			else:
				flow = InstalledAppFlow.from_client_secrets_file(
					'../../credentials.json', self.SCOPES)
				self.creds = flow.run_local_server(port=0)
			# Save the credentials for the next run
			with open('../../token.json', 'w') as token:
				token.write(self.creds.to_json())

	def parseEvents(self, debug=False):
		if debug == False:
			print = lambda *args, **kwargs:None
		events_list = []
		try:
			service = build('calendar', 'v3', credentials=self.creds)

			# Call the Calendar API
			now = datetime.datetime.utcnow().isoformat() + 'Z'  # 'Z' indicates UTC time
			end = (datetime.datetime.utcnow() + datetime.timedelta(days=21)).isoformat() + 'Z'
			events_result = service.events().list(calendarId='primary', timeMin=now,
												timeMax=end, singleEvents=True,
												orderBy='startTime').execute()
			events = events_result.get('items', [])

			if not events:
				print('No upcoming events found.')
				return
			
			for event in events:
				start = datetime.datetime.fromisoformat(event['start'].get('dateTime', event['start'].get('date')), )
				end = datetime.datetime.fromisoformat(event['end'].get('dateTime', event['end'].get('date')))
				
				events_list.append([start, end, event['summary']])
				print(start, end, event['summary'])

		except HttpError as error:
			print('An error occurred: %s' % error)

		return events_list

	def getAvailableTime(self, duration):
		events = self.parseEvents()
		bid = getNextHour()
		while bid < addWeeks(bid,3):
			for s,e,_ in events:
				print(bid, s,e,sep=' || ')
				try:
					if s<=bid<=e or s<=addMinutes(bid, duration)<=e:
						break
				except:
					print("skiping day")
			else:
				return bid
			bid = addMinutes(bid, 15)
					
		return bid
		

	def createEvent(self, start, end, name, description):
		try:
			service = build('calendar', 'v3', credentials=self.creds)

			event = {
				'summary': name,
				'description': description,
				'start': {
					'dateTime': start,
					'timeZone': 'America/Los_Angeles',
				},
				'end': {
					'dateTime': end,
					'timeZone': 'America/Los_Angeles',
				},
				'reminders': {
					'useDefault': False,
					'overrides': [
						{'method': 'email', 'minutes': 24 * 60},
						{'method': 'popup', 'minutes': 10},
					],
				},
			}

			event = service.events().insert(calendarId='primary', body=event).execute()
			print('Event created: %s' % (event.get('htmlLink')))
			return 'Event created: %s' % (event.get('htmlLink'))

		except HttpError as error:
			print('An error occurred: %s' % error)
		
		return 'stub'
		

	def deleteEvents(self):
		return 'stub'