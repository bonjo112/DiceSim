//Prints dice roll in rollDiceClicked to the page if randomNumber over 6
function printNumber(number) {
  let placeholder = document.getElementById('dice');
  placeholder.innerHTML = number;
  let button = document.getElementById('button');
  printNumber(result);
}

// Runs when user presses "roll dice"
function rollDiceClicked() {

  //deletes old dice if new dice in place
  var myNode = document.getElementById("dice");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  
  //does math and sets new dice value
  var side_choice = document.getElementById("select").value; 
  var dice = {
    sides: side_choice,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      let diceThing = document.getElementById("dice");
      let x = document.createElement("IMG");
      let choices = ["1_dot.png", "2_dots.png", "3_dots.png", "4_dots.png","5_dots.png" ,"6_dots.png", "7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png"];
      if (randomNumber < 21) {
      x.setAttribute("src", choices[randomNumber - 1])
      x.setAttribute("align", "center");
      } else{
        printNumber(randomNumber)
      } 
      diceThing.appendChild(x);
    }
  }
  dice.roll();
}
