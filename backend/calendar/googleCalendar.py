from __future__ import print_function

import datetime
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


class GoogleCalendar():
	def __init__(self):
		self.getCreds()



	def getCreds(self):
		self.SCOPES = ['https://www.googleapis.com/auth/calendar']
		self.creds = None

		# The file token.json stores the user's access and refresh tokens
		if os.path.exists('token.json'):
			self.creds = Credentials.from_authorized_user_file('token.json', self.SCOPES)
		# If there are no (valid) credentials available, let the user log in.
		if not self.creds or not self.creds.valid:
			if self.creds and self.creds.expired and self.creds.refresh_token:
				self.creds.refresh(Request())
			else:
				flow = InstalledAppFlow.from_client_secrets_file(
					'credentials.json', self.SCOPES)
				self.creds = flow.run_local_server(port=0)
			# Save the credentials for the next run
			with open('token.json', 'w') as token:
				token.write(self.creds.to_json())

	def parseEvents(self):
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
			
			events_list = []
			for event in events:
				start = datetime.datetime.fromisoformat(event['start'].get('dateTime', event['start'].get('date')), )
				end = datetime.datetime.fromisoformat(event['end'].get('dateTime', event['end'].get('date')))
				
				print(start, end, event['summary'])

		except HttpError as error:
			print('An error occurred: %s' % error)