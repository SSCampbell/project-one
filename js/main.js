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
$("#myModal2").hide();
$("#myModal3").hide();
//var person1 = new person(name,score)
var cannonSize = 35;
//ships = [miniSub,techSub, bigSub, sneakySub, dangerSub];
var $grid = $("td");
var rand = Math.floor(Math.random() * 81);
var newRand;
var randomNum = rand;
var gridNumRandomized = [];
var win = 0;
var numOfPirates;
var score = 0;
var cannonSound = new Audio('audio/cannon.wav');
var splashSound = new Audio('audio/splash.wav');
var treasureSound = new Audio('audio/treasure.wav');
var eLaughSound = new Audio('audio/evil-laugh.wav');

var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal


// When the user clicks on <span>, close the modal


span.onclick = function() {
  // if $($name).html() = "")
  // {
  //
  // }

modal.style.visibility = "hidden";
var $pName = document.getElementsByClassName('pName').value;
var $name = document.getElementById("fname").value; //textbox value
$(".pName").html($name);
}

$(".pCannon").html(cannonSize);
$(".pScore").html(score);


//make a class for each sub
// this would be used to target a cell and populate it with the class

for (var i = 0; i < 19; i++) {
  $($grid[randomNum]).addClass("battleSub").html("ship");
  gridNumRandomized[i] = randomNum;
  numberRandomize();
  randomNum = rand;
}
numOfPirates = gridNumRandomized.length;
$(".pPirates").html(numOfPirates);


$("td").click(function(){

if (cannonSize >= 1 && $(this).html() !== "hit" && $(this).html() !== "blank")
{
  cannonSize--;
  cannonSound.play();
$(".pCannon").html(cannonSize);
}



$(".pCannon").html(cannonSize);
if ($(this).html() !== "" && $(this).html() !== "blank" && $(this).html() !== "hit")
{
$(this).addClass("subHit").html("hit");
numOfPirates--;
score += 20;
$(".pPirates").html(numOfPirates);
$(".pScore").html(score);
}

else if ($(this).html() == "hit")
{

}
else if ($(this).html() !== "hit" && $(this).html() !== "blank") {
  console.log("Missed The Shot");
  $(this).addClass("missSub").html("blank");
  splashSound.play();
  if (score > 0)
  {score -= 5;
  $(".pScore").html(score);}
  else if (score < 0)
  {
    score = 0;
    $(".pScore").html(score);
  }
}

if (numOfPirates == 0)
{victory();}

else if (cannonSize == 0)
{gameOver();}

else{}


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
eLaughSound.play();
  //modal3.style.visibility = "show";
   // $("#myModal3").css({"visibility":"show"});
   $("#myModal3").show();

}

function victory()
{
  console.log("CONGRATULATIONS - You Have Defeated The Pirates");
treasureSound.play();
  // modal2.style.visibility = "show";
 $("#myModal2").show();
}

$("gameOverBtn").click(function(){
 $("#myModal3").hide();

 location.reload();
});

// function resetBoard()
// {
//     $("td").html(" ");
//     $("td").html(" ");
//
// }

});
