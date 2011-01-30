(function() {
  window.SHOES = function() { 
    this.VERSION = '0.0.0';
    this.RELEASE = 'Haste';
  };
  window.Shoes = new window.SHOES();
}());

(function(Shoes){
 
  if(!(!!document.createElement("canvas").getContext)) {
    var wrapper = document.getElementById("canvasWrapper");
    wrapper.innerHTML = "Your browser does not appear to support Canvas";
    return;
  }
    
  canvas = document.getElementById('orange_shoes');
  context = canvas.getContext("2d");
  mouseX = 0;
  mouseY = 0;
  canvas.onmousemove = getMousePoint;
  function getMousePoint(evt){
    mouseX = evt.clientX - canvas.offsetLeft;
    mouseY = evt.clientY - canvas.offsetTop;
  }

  background = function (color, stroke) {
    context.fillStyle = color;
    context.strokeStyle = stroke;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);
  }

  text = function (str, x, y, size, face) {
    context.font = size + " " + face; 
    context.fillText(str, x, y);
  }

  image = function (source, x, y, w, h) {
    var img = new Image();
    img.onload = function() {
      context.drawImage(img,x,y,w,h); 
    } 
    img.src = source;
  }

  oval = function (c, x, y, r){
    context.beginPath();
    context.fillStyle = c;
    context.arc(x+r, y+r, r, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
  }

  rect = function (c, x, y, w, h){
    context.beginPath();
    context.fillStyle = c;
    context.fillRect(x, y, w, h);
    context.closePath();
    context.fill();
  }
})(window.SHOES);
