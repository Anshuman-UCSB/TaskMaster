from googleCalendar import GoogleCalendar
from utils import *

calendar = GoogleCalendar()
# calendar.parseEvents()
# # calendar.createEvent(name = 'API test event', start='2023-05-13T09:30:00-07:00', end = '2023-05-13T10:30:00-07:00', description = 'Description: test \nLength: test \nFocus: test')
print(calendar.getAvailableTime(60))
calendar.deleteEvents()
