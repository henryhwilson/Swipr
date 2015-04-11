var UI = require('ui');

// Find the correct swipe

var today = new Date().getHours();
var swipe = "No swipe available";

if (today >= 7 && today <= 10) {
  swipe = "Breakfast swipe until 11am";
} else if (today >= 11 && today <= 15) {
  swipe = "Lunch swipe until 4pm";
} else if (today >= 16 && today <= 20) {
  swipe = "Dinner swipe until 9pm";
} else {
  swipe = "Late night swipe where open";
}

// Create a Card with title and subtitle

var main = new UI.Card({
  body:swipe,
  subtitle:'DBA: $582.30 Swipes: 3'
});