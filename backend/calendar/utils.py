import datetime
import pytz

def getNextHour():
	utc=pytz.UTC

	bid = datetime.datetime.now().replace(microsecond=0, second=0, minute=0)
	bid = addMinutes(bid, 60)

	return utc.localize(bid)

def addMinutes(date, mins):
	return date + datetime.timedelta(0,mins*60)

def addWeeks(date, weeks):
	return date + datetime.timedelta(weeks,0)