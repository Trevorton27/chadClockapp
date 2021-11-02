function showTime() {
  const theTime = new Date(); //To use Date, must first establish a variable. Use const instead of var.

  let hours = theTime.getHours();
  const minutes = renderLeadingZero(theTime.getMinutes());
  const seconds = renderLeadingZero(theTime.getSeconds());
  const isAm = hours < 12 || hours === 0;
  const amPm = isAm ? 'AM' : 'PM';

  document.getElementById('clock').textContent = `${formatHour(
    hours
  )}:${minutes}:${seconds} ${amPm}`;
}

function renderLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;
  hour = hour === 0 ? hour + 12 : hour;

  return hour;
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

function showDate() {
  const theDate = new Date();

  const day = dayNames[theDate.getDay()];
  const date = appendDateSuffix(theDate.getDate());
  const month = monthNames[theDate.getMonth()];
  const year = theDate.getFullYear();

  document.getElementById(
    'date'
  ).textContent = `${day}, ${month} ${date}, ${year}`;
}

function appendDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

showTime(); //if you set a delay below, you can bypass this by calling these functions in the global name space here.
showDate();

setInterval(function () {
  showTime();
  showDate();
}, 1000); //Add an optional delay in miliseconds here between the , and )
