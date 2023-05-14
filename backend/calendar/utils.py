import datetime
import pytz

def getNextHour():
	pst=pytz.timezone('US/Pacific')

	bid = datetime.datetime.now().replace(microsecond=0, second=0, minute=0)
	bid = addMinutes(bid, 20*60+3*60)

	return pst.localize(bid)

def addMinutes(date, mins):
	return date + datetime.timedelta(0,mins*60)

def addWeeks(date, weeks):
	return date + datetime.timedelta(weeks,0)

def isWorkingHours(date, start, end):
	if end < 6:
		end+=24
	return start<=date.hour<=end

def incrementTime(date,inc,start,end):
	bid = addMinutes(date,inc)
	while not isWorkingHours(bid,start, end):
		bid = addMinutes(bid,inc)
	return bid