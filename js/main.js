//The user is presented with a game user manual
//The user is presented with a prompt to take their name
  //OBJECT users profile {name,score}
    //FUNCTION
//The users name is presented on the game left-side
//The game is presented in the center of the screen, the title is presented to the user
//The user has a limited amount of cannons they can user
  //cannonSize
//The battleships are loaded onto the grid field
  //The battleships will start off as randomly placed individuals blocks
  //The grid needs to be set up
  //battleships are outputted randomly onto the grid
    //battleships ARRAY
//The user can select which grid space they think the battleship will be
  //A test can be ran if the user can select the block and it reacts with the user's selection if correct
  //IF successful alter the size a few ships
//IF the user is successful it will produce an explosion in the water
  //Otherwise it will produce a sploosh animation
//IF the user successfully destroys each section of the ship the shipwreck will appear in the spaces it occupied
//IF the user successfully destroys all the ships on the field they are presented with a WINNER SCREEN
  //Otherwise the user is presented with a GAME OVER screen
//IF so they have an option to try again or they can exit the game

$(document).ready(function() {


//var person1 = new person(name,score)
var cannonSize = 10;
//ships = [miniSub,techSub, bigSub, sneakySub, dangerSub];
var $grid = $("td");
var rand = Math.floor(Math.random() * 81);
var newRand;
var randomNum = rand;
var gridNumRandomized = [];
var playerWon = false;


var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal


// When the user clicks on <span>, close the modal


span.onclick = function() {
  // if $($name).html() = "")
  // {
  //
  // }
modal.style.display = "none";
var $pName = document.getElementsByClassName('pName').value;
var $name = document.getElementById("fname").value; //textbox value
$(".pName").html($name);
}


//make a class for each sub
// this would be used to target a cell and populate it with the class

for (var i = 0; i < 19; i++) {
  $($grid[randomNum]).addClass("battleSub").html("ship");
  gridNumRandomized[i] = randomNum;
  numberRandomize();
  randomNum = rand;
}



$("td").click(function(){
if (cannonSize > 0)
{
  cannonSize--;
  playerWon();
}
else
{
  gameOver();
}

function playerWon(){
for (var i = 0; i < gridNumRandomized.length; i++) {
if ($($grid[gridNumRandomized[i]]).html() != "hit")
  {
console.log("All targets have been shot at");
  }
  else{
  console.log("outside if");
}
}
};

$(".pCannon").html(cannonSize);
if ($(this).html() !== "")
{
$(this).addClass("subHit").html("hit");
}
else {
  console.log("Missed The Shot");
}

});

function numberRandomize(){
  rand = Math.floor(Math.random() * 81);
for (var i = 0; i < gridNumRandomized.length; i++) {
//for loop given values with the array
if (rand == gridNumRandomized[i])

numberRandomize();
}

}
return rand;




function gameOver()
{
   console.log("GAMEOVER - You ran out of cannons");
  // modalLoss.style.display = "block";
}

function victory()
{
  console.log("CONGRATULATIONS - You Have Defeated The Pirates");
}

$("gameOverBtn").click(function(){
 model.style.display = "none";
 location.reload();
});


// if ($(gridNumRandomized()).addClass() == "subHit" )
// {
//   console.log("CONGRATULATIONS YOU WON");
//   modalWin.style.display = "block";
// }
// function resetBoard()
// {
//     $("td").html(" ");
//     $("td").html(" ");
//
// }
// $(this).html(miniSub);

// $(this).html(techSub);
// $(this).html(bigSub);
// $(this).html(sneakySub);
// $(this).html(dangerSub);












});
