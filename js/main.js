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
  console.log("Test");
var userProfile = function(){
  this.name = name;
  this.score = score;
};
//var person1 = new person(name,score)
var cannonSize = 30;
//ships = [miniSub,techSub, bigSub, sneakySub, dangerSub];
var $grid = $("td");
var rand = Math.floor(Math.random() * 81);
var newRand;
var i = rand;
var miniSubArray = [];
var techSubArray = [];
var powerSubArray = [];
var gridNumRandomized = [];
var miniSNum = false;
var techSNum = false;
var powerSNum = false;
//make a class for each sub
// this would be used to target a cell and populate it with the class
console.log(i);
//miniSub
$($grid[i]).addClass("miniSub").html("miniSubA");
miniSubArray[0] = i;
gridNumRandomized[0] = i;
miniSNum = true;
if (miniSNum == true){
$($grid[i + 1]).addClass("miniSub").html("miniSubB");
miniSubArray[1] = i + 1;
gridNumRandomized[1] = i;
}

numberRandomize();
//techSub
$($grid[i]).addClass("techSub").html("techSubA");
techSubArray[0] = i;
gridNumRandomized[2] = i;
techSNum = true;
if (techSNum == true){
$($grid[i + 1]).addClass("techSub").html("techSubB");
techSubArray[1] = i + 1;
gridNumRandomized[3] = i;
$($grid[i + 2]).addClass("techSub").html("techSubC");
techSubArray[2] = i + 2;
gridNumRandomized[3] = i;
}

numberRandomize();
//powerSub
$($grid[i]).addClass("powerSub").html("powerSubA");
powerSubArray[0] = i;
gridNumRandomized[4] = i;
powerSNum = true;
if (powerSNum == true){
$($grid[i + 9]).addClass("powerSub").html("powersubB");
powerSubArray[1] = i + 9;
gridNumRandomized[5] = i;
$($grid[i + 18]).addClass("powerSub").html("powersubC");
powerSubArray[2] = i + 18;
gridNumRandomized[6];
$($grid[i + 27]).addClass("powerSub").html("powersubD");
powerSubArray[3] = i + 27;
gridNumRandomized[7];

}



$("td").click(function(){
cannonSize--;
if ($(this).html() !== "")
{
$(this).addClass("subHit");
}
else {
  console.log("Missed The Shot");
}

});

function numberRandomize(){
  for (var i = 0; i < gridNumRandomized.length; i++) {
    do{
    rand = Math.floor(Math.random() * 81);
    i = rand;
    } while (rand === gridNumRandomized[i])}
}


if (cannonSize == 0)
{
   console.log("GAMEOVER - You ran out of cannons");
}

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
