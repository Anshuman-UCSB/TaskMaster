import os, sys
sys.path.append(os.path.join(os.path.dirname(__file__), "calendar"))
from googleCalendar import GoogleCalendar

gc = GoogleCalendar()
gc.nukeEvents()