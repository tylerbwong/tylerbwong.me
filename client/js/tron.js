var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var color = getColor();
var fontArial = "24px Source Sans Pro, sans-serif";

var state = 0;
var currentState = 0;

var squareDim = 4;
var squareRad = squareDim / 2;

var startX = canvas.width / 2 - squareDim;
var startY = canvas.height / 2 - squareDim;
var posX = startX;
var posY = startY;
var checkX = 0;
var checkY = 0;
var changeX = 2;
var changeY = 2;

var tron = [];
var history = new Array(canvas.width);
for (var i = 0; i < canvas.width; i++)
   history[i] = new Array(canvas.height);

var score = 0;
var lives = 3;
var gameActive = false;

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
   if (e.keyCode == 39) {
      state = 1;
      gameActive = true;
   }
   else if (e.keyCode == 37) {
      state = 2;
      gameActive = true;
   }
   else if (e.keyCode == 38) {
      state = 3;
      gameActive = true;
   }
   else if (e.keyCode == 40) {
      state = 4;
      gameActive = true;
   }
   else if (e.keyCode == 32) {
      state = 0;
      gameActive = false;
      draw();
   }
}

function drawScore() {
    context.font = fontArial;
    context.fillStyle = color;
    context.fillText("Score: " + score, 16, 32);
}

function drawLives() {
   context.font = fontArial;
   context.fillStyle = color;
   context.fillText("Lives: " + lives, canvas.width - 95, 32)
}

function makeTron() {
   var rect = {
      x: posX,
      y: posY,
      width: squareDim,
      height: squareDim
   };

   history[posX][posY] = true;

   return rect;
}

function drawTron() {
   var newTron = makeTron();
   //  console.log("Tron: " + newTron.x + " " + newTron.y);
   //  console.log("History: " + history[newTron.x][newTron.y]);

   if (tron.indexOf(newTron) == -1)
      tron.push(newTron);

   for (item in tron) {
      context.beginPath();
      context.rect(tron[item].x, tron[item].y, tron[item].width, tron[item].height);
      context.fillStyle = color;
      context.fill();
      context.closePath();
   }
}

function reset() {
   lives--;
   tron = [];
   history = new Array(canvas.width);
   for (var i = 0; i < canvas.width; i++)
      history[i] = new Array(canvas.height);
   posX = startX;
   posY = startY;
   addScore(score);
   score = 0;
   state = 0;
   gameActive = false;
}

function collisionDetection() {
   var currentRect = {
      x: posX,
      y: posY,
      width: squareDim,
      height: squareDim
   };

   if (currentRect.x < 0 || currentRect.x > canvas.width - squareRad ||
         currentRect.y < 0 || currentRect.y > canvas.height - squareRad)
      reset();

   if ((currentRect.x != startX && currentRect.y != startY) && history[posX][posY])
      reset();
}

function draw() {
   context.clearRect(0, 0, canvas.width, canvas.height);
   collisionDetection();
   drawTron();
   drawScore();
   drawLives();

   switch (state) {
      case 1:
         posX += changeX;
         currentState = state;
         break;
      case 2:
         posX -= changeX;
         currentState = state;
         break;
      case 3:
         posY -= changeY;
         currentState = state;
         break;
      case 4:
         posY += changeY;
         currentState = state;
         break;
      default:
         break;
   }

   if (!lives) {
      window.location.href = "index.html";
   }

   if (gameActive)
      score = tron.length;
   else
      score = 0;

   requestAnimationFrame(draw);
}
