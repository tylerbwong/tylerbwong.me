var express = require('express');
var firebase = require('firebase');
var schedule = require('node-schedule');

var app = express();

var firebaseConfig = {
  apiKey: 'AIzaSyBszH0klANdW4oMs7ZJliuelrZRGQAaZ8E',
  authDomain: 'tylerbwong.firebaseapp.com',
  databaseURL: 'https://tylerbwong.firebaseio.com',
  storageBucket: 'project-487087514826703431.appspot.com',
  messagingSenderId: '833773361693'
};
var firebaseApp = firebase.initializeApp(firebaseConfig);
var database = firebaseApp.database();
var scoreRef = database.ref();

var rule = new schedule.RecurrenceRule();
rule.second = 0;
rule.minute = 0;
rule.hour = 0;
rule.dayOfWeek = 0;

var job = schedule.scheduleJob(rule, function() {
   scoreRef.child('scores').remove();
   console.log('Clearing complete!')
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('tylerbwong.me server is running on port', app.get('port'));
});
