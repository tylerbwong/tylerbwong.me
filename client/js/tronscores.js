var database = firebase.database();
var today = new Date();
var day = today.getDay();
var topScores = [0, 0, 0, 0, 0, 0, 0];

database.ref().on('value', function(snapshot) {
   var changed = snapshot.child('scores');
   topScores = [0, 0, 0, 0, 0, 0, 0];

   changed.forEach(function(scoreEntry) {
      var cur = scoreEntry.child('score').val();

      if (cur > topScores[scoreEntry.child('day').val()])
         topScores[scoreEntry.child('day').val()] = cur;
   });
   createChart(topScores);

}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code);
});

var getTopScores = function() {
   return topScores;
};

var addScore = function(score) {
   var newScore = database.ref().child('scores').push();

   newScore.set({
      score: score,
      day: day
   });
};
