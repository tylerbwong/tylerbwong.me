var min = 1;
var max = 8;
var result = "";

function changeColor() {
   var color = "";
   var textColor = "";
   var compColor = "";
   var num = Math.floor(Math.random() * (max - min)) + min;

   switch(num) {
      case 1:
         color = "#EF9A9A";
         textColor = "red-text text-lighten-3";
         compColor = "red lighten-3";
         break;
      case 2:
         color = "#A5D6A7";
         textColor = "green-text text-lighten-3";
         compColor = "green lighten-3";
         break;
      case 3:
         color = "#80DEEA";
         textColor = "cyan-text text-lighten-3";
         compColor = "cyan lighten-3";
         break;
      case 4:
         color = "#FFAB91";
         textColor = "deep-orange-text text-lighten-3";
         compColor = "deep-orange lighten-3";
         break;
      case 5:
         color = "#80CBC4";
         textColor = "teal-text text-lighten-3";
         compColor = "teal lighten-3";
         break;
      case 6:
         color = "#81D4FA";
         textColor = "light-blue-text text-lighten-3";
         compColor = "light-blue lighten-3";
         break;
      default:
         color = "#2196F3";
         textColor = "blue-text";
         compColor = "blue"
         document.getElementById("facebook").className = "btn-floating red";
         document.getElementById("instagram").className = "btn-floating yellow";
         document.getElementById("github").className = "btn-floating green";
         break;
   }
   document.getElementById("colorChange").content = color;
   document.getElementById("hi").className = "center " + textColor;
   document.getElementById("button").className = "btn-floating btn-large " + compColor;
   document.getElementById("learnproject1").className = textColor;
   document.getElementById("learnproject2").className = textColor;
   document.getElementById("learnproject3").className = textColor;
   document.getElementById("learnproject4").className = textColor;
   document.getElementById("epic").className = textColor;
   document.getElementById("whodonedidit").className = textColor;
   document.getElementById("tron").className = textColor;
   document.getElementById("poke").className = textColor;
   document.getElementById("modalClose").className = "modal-action modal-close waves-effect btn-flat " + textColor;
   return color;
}

result = changeColor();

var getColor = function() {
   return result;
};
