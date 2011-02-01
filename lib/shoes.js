(function(global) {

function Shoes() { 
  this.version = '0.0.0';
  this.release = 'Haste';
  this.canvas = null;
  this.context = null;
};

Shoes.prototype.app = function() {
  this.canvas = document.getElementsByTagName('canvas')[0];
  if(!this.canvas) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 400;
    document.body.appendChild(this.canvas);
  };
  this.context = this.canvas.getContext('2d');
  return this;
};

Shoes.prototype.background = function(color, stroke) {
  this.context.fillStyle = color;
  this.context.strokeStyle = stroke;
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
};

Shoes.prototype.text = function(str, x, y, size, face) {
  this.context.font = size + " " + face; 
  this.context.fillText(str, x, y);
};

Shoes.prototype.image = function(source, x, y, w, h) {
  var img = new Image();
  img.onload = function() {
    this.context.drawImage(img,x,y,w,h); 
  } 
  img.src = source;
};

Shoes.prototype.oval = function(c, x, y, r){
  this.context.beginPath();
  this.context.fillStyle = c;
  this.context.arc(x+r, y+r, r, 0, Math.PI*2, true);
  this.context.closePath();
  this.context.fill();
};

Shoes.prototype.rect = function(c, x, y, w, h){
  this.context.beginPath();
  this.context.fillStyle = c;
  this.context.fillRect(x, y, w, h);
  this.context.closePath();
  this.context.fill();
};

global.Shoes = Shoes; 
})(this);
