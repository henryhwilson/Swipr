/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

// Create a Card with title and subtitle
var main = new UI.Card({
  body:'Dinner Swipe until 9pm',
  subtitle:'DBA: $582.30 Swipes: 3'
});

var hours = new UI.Card({
  title:'Meal Periods',
  subtitle:'Dinner: $582.30 Swipes: 3'
});

// Display the Card
main.show();
hours.show();

/* https://www.dartmouth.edu/dining/locations/ */