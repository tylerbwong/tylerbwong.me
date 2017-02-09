$("canvas").hide();
var tronLabel = document.getElementById("tronLabel");
tronLabel.style.display = 'none';

// KONAMI CODE
var easter_egg = new Konami();
easter_egg.code = function() {
   Materialize.toast('I like games too! Click "Tron" to play!', 4000);
   $("canvas").show();
   tronLabel.style.display = 'inline';
}
easter_egg.load();
