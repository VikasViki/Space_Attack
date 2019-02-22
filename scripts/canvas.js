var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = $("<canvas widht = '" + CANVAS_WIDTH + 
                        "' height = '" + CANVAS_HEIGHT + "'bgcolor = 'red'></canvas>");

var canvas = canvasElement.get(0).getContext("2d");

canvasElement.appendTo('body');