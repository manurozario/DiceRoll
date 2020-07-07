//function to toggle visibility
function vsblty(target) {
  document.querySelector(target).classList.toggle("visibility");
}

//function to generate a random number then replace the dice image accordingly
function randomNum(index) {
  var num = Math.floor((Math.random() * 6)+1);
  var dice = "images/dice" + num + ".png"
  document.querySelectorAll("img")[index].setAttribute("src",dice);
  return num;
}


//make to two random numbers
var num1 = randomNum(0);
var num2 = randomNum(1);



//use if statements to show/hide messages based on what numbers are generated
if(num1 > num2) {
  vsblty("h1.player2");
  vsblty("h1.draw");
}

else if(num2 > num1) {
  vsblty("h1.player1");
  vsblty("h1.draw");
}

else if(num1 === num2) {
  vsblty("h1.player1");
  vsblty("h1.player2");
}
