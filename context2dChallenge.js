var robot = new Image();
var power = new Image();

function init() {
  robot.src = 'images/lionborg.svg';
  power.src = 'images/ball.svg';

  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('lion').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas



  ctx.drawImage(robot,0, 0);
  ctx.restore();
  ctx.save();

 var time = new Date();

 ctx.translate(150, 150);
 ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
 ctx.translate(-150, -150);
 ctx.globalAlpha = 0.5
 ctx.drawImage(power, 0, 0);
 ctx.restore();
 ctx.save();


  var gradient = ctx.createRadialGradient(150,150,90, 150,150,150);
  // Add two color stops
  gradient.addColorStop(0, 'yellow');
  gradient.addColorStop(.5, 'orange');
  gradient.addColorStop(.9, 'white');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 300, 300);
  ctx.restore();

  window.requestAnimationFrame(draw);
}

init();
var robot = new Image();
var power = new Image();

function init() {
  robot.src = 'images/lionborg.svg';
  power.src = 'images/ball.svg';

  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('lion').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas



  ctx.drawImage(robot,0, 0);
  ctx.restore();
  ctx.save();

 var time = new Date();

 ctx.translate(150, 150);
 ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
 ctx.translate(-150, -150);
 ctx.globalAlpha = 0.5
 ctx.drawImage(power, 0, 0);
 ctx.restore();
 ctx.save();


  var gradient = ctx.createRadialGradient(150,150,90, 150,150,150);
  // Add two color stops
  gradient.addColorStop(0, 'yellow');
  gradient.addColorStop(.5, 'orange');
  gradient.addColorStop(.9, 'white');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 300, 300);
  ctx.restore();

  window.requestAnimationFrame(draw);
}

init();
