//function to toggle visibility
function vsblty(target) {
  document.querySelector(target).classList.toggle("visibility");
}

//function to generate a random number
function randomNum() {
  var num = Math.floor(Math.random() * 6);
  return num;
}


//function that runs the array in a loop so that the dice only represents the generated number
function dices(num,plyr) {
  for(var i = 0; i < plyr.length; i++) {
    if(i === num) {
      continue;
    }
    vsblty(plyr[i]);
  }
}


//these tags are hidden by default
vsblty("h1.player1");
vsblty("h1.player2");
vsblty("h1.draw");

//arrays to refer to the images
var plyr1 = [".plyr1 .dice1", ".plyr1 .dice2", ".plyr1 .dice3", ".plyr1 .dice4", ".plyr1 .dice5", ".plyr1 .dice6"];
var plyr2 = [".plyr2 .dice1", ".plyr2 .dice2", ".plyr2 .dice3", ".plyr2 .dice4", ".plyr2 .dice5", ".plyr2 .dice6"];

//make to two random numbers
var num1 = randomNum();
var num2 = randomNum();

//views dice numbers representing those numbers
dices(num1,plyr1);
dices(num2,plyr2);

//use if statements to show/hide messages based on what numbers are generated
if(num1 > num2) {
  vsblty("h1.player1");
  vsblty("h1.header");
}

else if(num2 > num1) {
  vsblty("h1.player2");
  vsblty("h1.header");
}

else if(num1 === num2) {
  vsblty("h1.draw");
  vsblty("h1.header");
}
