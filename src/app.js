/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var today = new Date().getHours();
var day = new Date().getDay();
var swipe = "No swipe available";

if (today >= 7 && today <= 10) {
  swipe = "Breakfast swipe until 11 am";
} else if (today >= 11 && today <= 15) {
  swipe = "Lunch swipe until 4 pm";
} else if (today >= 16 && today <= 20) {
  swipe = "Dinner swipe until 9 pm";
} else {
  swipe = "Late Night swipe until ";
  if (day >= 5) 
    swipe += "2 am";
  else 
    swipe += "1:30 am";
}

var loading = new UI.Window({});
loading.add(new UI.Text({
  position: new Vector2(0,49),
  size: new Vector2(144,40),
  text: "\t\t\t\tLoading...",
  textAlign: 'center',
  backgroundColor: 'white',
  font: 'gothic-28',
  color: 'black'
}));

var main = new UI.Window();

var dba_swipe_text = new UI.Text({
  position: new Vector2(0,0),
  size: new Vector2(144,74),
  borderColor: 'white',
  backgroudColor: 'black',
  text: "DBA: $582.30\nSwipes: 3",
  textOverflow: 'ellipsis',
  textAlign: 'center',
  font: 'gothic-28',
  color: 'white'
}); 

var swipe_period_text = new UI.Text({
  position: new Vector2(0,74),
  size: new Vector2(144,78),
  borderColor: 'white',
  backgroudColor: 'black',
  text: swipe,
  textOverflow: 'fill',
  textAlign: 'center',
  font: 'gothic-28',
  color: 'white'
});

main.add(dba_swipe_text);
main.add(swipe_period_text);

// Sunday
if(day === 0) {
  var focoHours = '8 am – 2:30 pm\n5 pm – 8:30 pm';
  var collisHours = '9:30 pm - 1:30 am';
  var novackHours = '11 am - 2 am';
  var hopHours = '10:30 am - 12 am';
} 
// Monday-Friday
else if (day <= 5) {
  var focoHours = '7:30 am – 10:30 am\n11 am – 3 pm\n5 pm – 8:30 pm';
  var collisHours = '7 am – 8 pm';
  
  if (day === 5)  // Friday
      collisHours += '\n9:30 pm - 2 am';
  else
      collisHours += '\n9:30 pm - 1:30 am';
  var novackHours = '7:30 am - 2 am';
  var hopHours = '8 am to 11 am (Baked Goods/Coffee)\n11 am - 12:30 am (Full Service)';
} 
// Saturday
else {
  var focoHours = '8 am – 10:30 am\n11 am – 2:30 pm\n5 pm – 8:30 pm';
  var collisHours = '9:30 pm - 2 am';
  var novackHours = '1 pm - 2 am';
  var hopHours = '10:30 am - 12 am';
}

var foco = new UI.Card({
  title:'FoCo Hours',
  body: focoHours
});

var collis = new UI.Card({
  title:'Collis Hours',
  body: collisHours
});

var hop = new UI.Card({
  title:'Hop Hours',
  body: hopHours
});

var novack = new UI.Card({
  title:'Novack Hours',
  body: novackHours
});

var diningCards = [foco, collis, hop, novack];

var menu = new UI.Menu({
  sections: [{
    title: 'Dining Hours',
    items: [{title: 'FoCo'}, {title: 'Collis'}, {title: 'Hop'}, {title: 'Novack'}]
  }]
});


loading.on('click', 'select', function(e) {
  main.show();
});

main.on('click', 'select', function(e) {
  menu.show();
});

menu.on('select', function(e) {
  diningCards[e.itemIndex].show();
});

loading.show();



