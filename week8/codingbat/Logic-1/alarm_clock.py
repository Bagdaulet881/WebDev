def alarm_clock(day, vacation):
    weekday = "7:00"
    weekend = "10:00" 
    if vacation:
        weekday = "10:00"
        weekend = "off"
    if day > 0 and day < 6:
        return weekday
    else:
        return weekend
