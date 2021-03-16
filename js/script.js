// var rootEl = document.getElementById("root");
var rootEl = $('#root');

// var titleEl = document.createElement("h1");
var titleEl = $('<h1>');

// var today = moment();
// var weekDay = today.format("[Today is] dddd")
// $('#').text(weekDay);

// titleEl.textContent = "Hello friends";
titleEl.text('Work Day Scheduler');

// titleEl.className = 'header';
titleEl.attr('class', 'header');

// titleEl.classList.add('p-5') - (`p-5` is for padding)
titleEl.addClass('p-5');

// titleEl.style.border = "rgb(122, 242, 242) 3px solid";
// titleEl.css('border-bottom', 'rgb(122, 242, 242) 5px solid');

// rootEl.appendChild(titleEl);
rootEl.append(titleEl);

// titleEl.append("Welcome to jQuery");
rootEl.append('<h2>Hourly plan:</h2>');

// var hoursArray = [
//   '06:00',
//   '07:00',
//   '08:00',
//   '09:00',
//   '10:00',
//   '11:00',
//   '12:00',
//   '13:00',
//   '14:00',
//   '15:00',
//   '16:00',
//   '18:00',
//   '19:00',
//   '20:00',
//   '21:00',
// ];

// for (var i = 0; i < hoursArray.length; i++) {
//   // Create a new `<div>` for each ability and its text content
//   var hoursEl = $('<li>');

//   // abilityEl.textContent = abilities[i];
//   hoursEl.text(hoursArray[i]);

//   // `my-3` class adds margin on top and bottom
//   hoursEl.addClass('my-3');

//   // Add this new `<div>` to the abilities `<div>` container element.
//   rootEl.append(hoursEl);
// }

// // select all `<div>` elements on the page
// // document.querySelectorAll('div');
// console.log($('div'));
