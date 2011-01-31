(function(global, undefined) {

var canvas;
var context;
var mouseX;
var mouseY;

var shoes = { 
  version: '0.0.0',
  release: 'Haste',
  canvas: canvas,
  context: context,
  app: app,
  background: background,
  text: text,
  image: image,
  oval: oval,
  rect: rect
};

function app() {
  shoes.canvas = document.getElementsByTagName('canvas')[0];
  if(!shoes.canvas) {
    shoes.canvas = document.createElement('canvas');
    shoes.canvas.width = 600;
    shoes.canvas.height = 400;
    document.body.appendChild(shoes.canvas);
  };
  shoes.context = shoes.canvas.getContext('2d');
  return shoes;
};

function background(color, stroke) {
  shoes.context.fillStyle = color;
  shoes.context.strokeStyle = stroke;
  shoes.context.fillRect(0, 0, shoes.canvas.width, shoes.canvas.height);
  shoes.context.strokeRect(0, 0, shoes.canvas.width, shoes.canvas.height);
};

function text(str, x, y, size, face) {
  shoes.context.font = size + " " + face; 
  shoes.context.fillText(str, x, y);
};

function image(source, x, y, w, h) {
  var img = new Image();
  img.onload = function() {
    shoes.context.drawImage(img,x,y,w,h); 
  } 
  img.src = source;
};

function oval(c, x, y, r){
  shoes.context.beginPath();
  shoes.context.fillStyle = c;
  shoes.context.arc(x+r, y+r, r, 0, Math.PI*2, true);
  shoes.context.closePath();
  shoes.context.fill();
};

function rect(c, x, y, w, h){
  shoes.context.beginPath();
  shoes.context.fillStyle = c;
  shoes.context.fillRect(x, y, w, h);
  shoes.context.closePath();
  shoes.context.fill();
};

global.shoes = shoes; 
})(this);
