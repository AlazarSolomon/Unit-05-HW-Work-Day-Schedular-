// var InputGroupTextOne = document.getElementsByClassName('input-group-text')[0].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextOne);
// var InputGroupTextTwo = document.getElementsByClassName('input-group-text')[1].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextTwo);
// var InputGroupTextThree = document.getElementsByClassName('input-group-text')[2].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextThree);
// var InputGroupTextFour = document.getElementsByClassName('input-group-text')[3].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextFour);
// var InputGroupTextFive = document.getElementsByClassName('input-group-text')[4].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextFive);
// var InputGroupTextSix = document.getElementsByClassName('input-group-text')[5].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextSix);
// var InputGroupTextSeven = document.getElementsByClassName('input-group-text')[6].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextSeven);
// var InputGroupTextEight = document.getElementsByClassName('input-group-text')[7].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextEight);
// var InputGroupTextNine = document.getElementsByClassName('input-group-text')[8].innerHTML.match(/(\d+)/)[0]
// // console.log(InputGroupTextNine);
// var FormControlEl = document.getElementsByClassName('form-control')[0].classList.add('present')
// console.log(FormControlEl)

var eventElOne = document.getElementById('textInputOne')
var eventElTwo = document.getElementById('textInputTwo')
var eventElThree = document.getElementById('textInputThree')
var eventElFour = document.getElementById('textInputFour')
var eventElFive = document.getElementById('textInputFive')
var eventElSix = document.getElementById('textInputSix')
var eventElSeven = document.getElementById('textInputSeven')
var eventElEight = document.getElementById('textInputEight')
var eventElNine = document.getElementById('textInputNine')
console.log(eventElOne)

var saveButtonTwo = document.querySelector("#button-addon2");
var saveButtonThree = document.querySelector("#button-addon3");
var saveButtonFour = document.querySelector("#button-addon4");
var saveButtonFive = document.querySelector("#button-addon5");
var saveButtonSix = document.querySelector("#button-addon6");
var saveButtonSeven = document.querySelector("#button-addon7");
var saveButtonEight = document.querySelector("#button-addon8");
var saveButtonNine = document.querySelector("#button-addon9");
var saveButtonTen = document.querySelector("#button-addon10");

var events = [];


var currentTime = moment().format("hh")*1;
console.log(currentTime)
// $("#currentTime").text(time);

var a = 13
var b = 14
var c = 15
var d = 16
var e = 17

// console.log(a)


var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function timeCheck() {
for (i=0; i < 9; i++) {
    var calendarTime = document.getElementsByClassName('input-group-text')[i].innerHTML.match(/(\d+)/)[0]
    console.log(calendarTime);
    if (currentTime == calendarTime) {
    document.getElementsByClassName('form-control')[i].classList.add('present')
    }
    else if (currentTime < calendarTime) {
    document.getElementsByClassName('form-control')[i].classList.add('future')
    }
    else {
    document.getElementsByClassName('form-control')[i].classList.add('past')
    }
}
}



timeCheck();


function saveEvent() {
    // Save related form data as an object
    var event = {
        eventElOne: eventElOne.value.trim(),
        eventElTwo: eventElTwo.value.trim(),
        eventElThree: eventElThree.value.trim(),
        eventElFour: eventElFour.value.trim(),
        eventElFive: eventElFive.value.trim(),
        eventElSix: eventElSix.value.trim(),
        eventElSeven: eventElSeven.value.trim(),
        eventElEight: eventElEight.value.trim(),
        eventElNine: eventElNine.value.trim()
    };
    console.log(event)
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("event", JSON.stringify(event));
}
  
  function renderEvent() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastEvent = JSON.parse(localStorage.getItem("event"));
    console.log(lastEvent)
    // Check if data is returned, if not exit out of the function
    if (lastEvent !== null) {
        eventElOne.value = lastEvent.eventElOne;
        eventElTwo.value = lastEvent.eventElTwo;
        eventElThree.value = lastEvent.eventElThree;
        eventElFour.value = lastEvent.eventElFour;
        eventElFive.value = lastEvent.eventElFive;
        eventElSix.value = lastEvent.eventElSix;
        eventElSeven.value = lastEvent.eventElSeven;
        eventElEight.value = lastEvent.eventElEight;
        eventElNine.value = lastEvent.eventElNine;
    } else {
      return;
    }
  }
  
  saveButtonTwo.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  saveButtonThree.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  saveButtonFour.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  saveButtonFive.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  saveButtonSix.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  saveButtonSeven.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  saveButtonEight.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  saveButtonNine.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  saveButtonTen.addEventListener("click", function(event) {
  event.preventDefault();
  saveEvent();
  renderEvent();
  });
  
  // The init() function fires when the page is loaded 
  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderEvent();
  }
  init();


// function storeEvent() {
// localStorage.setItem("eventsEl");


// saveButton.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     if (email === "") {
//       displayMessage("error", "Event/Notes cannot be blank");

//     store

//     }
//   });
// }
// storeEvent();