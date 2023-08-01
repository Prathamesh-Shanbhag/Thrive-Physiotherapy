function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

function printCalendar() {
  var currentDate = new Date()

  var year = currentDate.getYear()
  if (year < 1000) year = 2000 + year - 100

  var month = currentDate.getMonth() + 1
  var dayOfWeek = currentDate.getDay()
  var dayOfMonth = currentDate.getDate()

  var tempDate = new Date(year, month - 1, 1)
  var firstDayOfMonth = tempDate.getDay()

  if (dayOfWeek === 0) dayOfWeek = 7
  if (firstDayOfMonth === 0) firstDayOfMonth = 7

  var monthName, daysInMonth
  switch (month) {
    case 1:
      monthName = 'January'
      daysInMonth = 31
      break
    case 2:
      monthName = 'February'
      daysInMonth = isLeapYear(year) ? 29 : 28
      break
    case 3:
      monthName = 'March'
      daysInMonth = 31
      break
    case 4:
      monthName = 'April'
      daysInMonth = 30
      break
    case 5:
      monthName = 'May'
      daysInMonth = 31
      break
    case 6:
      monthName = 'June'
      daysInMonth = 30
      break
    case 7:
      monthName = 'July'
      daysInMonth = 31
      break
    case 8:
      monthName = 'August'
      daysInMonth = 31
      break
    case 9:
      monthName = 'September'
      daysInMonth = 30
      break
    case 10:
      monthName = 'October'
      daysInMonth = 31
      break
    case 11:
      monthName = 'November'
      daysInMonth = 30
      break
    case 12:
      monthName = 'December'
      daysInMonth = 31
      break
  }

  document.write("<TABLE border='1'><TR>")
  document.write("<TD bgcolor='#a5c422' align='center' colspan='7'>")
  document.write(monthName + ' ' + year)
  document.write('</TD></TR><TR>')

  document.write('<TR>')
  document.write("<TD align='center' bgcolor='pink'>Mo</TD>")
  document.write("<TD align='center' bgcolor='pink'>Tu</TD>")
  document.write("<TD align='center' bgcolor='pink'>We</TD>")
  document.write("<TD align='center' bgcolor='pink'>Th</TD>")
  document.write("<TD align='center' bgcolor='pink'>Fr</TD>")
  document.write("<TD align='center' bgcolor='pink'>Sa</TD>")
  document.write("<TD align='center' bgcolor='pink'>Su</TD>")
  document.write('</TR>')

  var totalDays = daysInMonth + firstDayOfMonth - 1

  for (var i = 0; i < totalDays; i++) {
    if (i < firstDayOfMonth - 1) {
      document.write("<TD bgcolor='white'></TD>")
      continue
    }
    if (i % 7 === 0) {
      document.write('</TR><TR>')
    }
    var cellDate = i - firstDayOfMonth + 2
    var cellColor = cellDate === dayOfMonth ? '#99a983' : '#f9f9f9'
    document.write("<TD bgcolor='" + cellColor + "' align='center'>")
    document.write(cellDate)
    document.write('</TD>')
  }
  document.write('</TR></TABLE>')
}
