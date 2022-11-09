var canvas = document.getElementById("script");
var ctx = canvas.getContext('2d');


//Rectangle all set

ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5px wide"

ctx.fillRect(85,300,100,100);


//Circle all set
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "red" 
ctx.lineWidth = "5px wide"

ctx.beginPath();
ctx.arc(385,440,67,50,300);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Pentagon
ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"
ctx.lineWidth = "5"

ctx.beginPath();
ctx.moveTo(556,307);
ctx.lineTo(667,285);
ctx.lineTo(723,379);
ctx.lineTo(651,462);
ctx.lineTo(549,416);
ctx.closePath();
ctx.fill();
ctx.stroke();


//Lines all set

ctx.fillStyle = "none"
ctx.strokeStyle = "rgb(255,0,0)"
ctx.lineWidth =  "5px wide"
ctx.beginPath();
ctx.lineTo(300,535);
ctx.lineTo(80,685);
ctx.stroke();


//Star

ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32)"
ctx.lineWidth = "5px wide"

ctx.beginPath();
ctx.moveTo(634, 495);
ctx.lineTo(667, 553);
ctx.lineTo(731, 568);
ctx.lineTo(688, 617);
ctx.lineTo(697, 680);
ctx.lineTo(636, 654);
ctx.lineTo(576, 679);
ctx.lineTo(583, 617);
ctx.lineTo(539, 567);
ctx.lineTo(604, 553);


ctx.closePath();
ctx.fill();
