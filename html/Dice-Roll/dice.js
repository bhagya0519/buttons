function rollDice(){
  const dice = document.getElementById("dice");
  const randomNumber = Math.floor(Math.random() * 6) + 1;//Random number between 1 and 6 
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  dice.innerHTML = diceFaces[randomNumber - 1];
}