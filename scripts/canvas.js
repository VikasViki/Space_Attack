//Creating the canvas

var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

// var canvasElement = $("<canvas widht = '" + CANVAS_WIDTH + 
//                         "' height = '" + CANVAS_HEIGHT + "></canvas>");

var canvasElement =  document.getElementById("canvas_container");


// var canvas = canvasElement.get(0).getContext("2d");  undefined doesn;t have getContext Method

var canvas = canvasElement.getContext("2d");


//Setting the interval for game loop

var FPS = 30;

setInterval(function() {
    
    update();
    
    draw();

}, 1000/FPS);

var textX = 50;
var textY = 50;

function update() {

    textX += 1;
    textY += 1;

}

function draw() {

    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    canvas.fillStyle = "#000000";

    canvas.fillText("Sup Bro", textX, textY);

}