var rootEl = $('#root');
var titleEl = $('<h1>');
var saveButton = $('.save-button')
var rightNow = moment();


titleEl.text('Work Day Scheduler');
titleEl.attr('class', 'header');
titleEl.addClass('p-5');
rootEl.append(titleEl);
rootEl.append('<h2>Hourly plan:</h2>');

// var today = moment();
// var weekDay = today.format("[Today is] dddd")
// $('#').text(weekDay);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().format("X");
$("titleEl").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss");
$("TitleEl").text(unixFormat);
