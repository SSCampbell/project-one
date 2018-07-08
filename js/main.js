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
var i = null;
// function resetBoard()
// {
//     $("td").html(" ");
//     $("td").html(" ");
//
// }
var rand = Math.floor(Math.random() * 80);
i = rand;
console.log(i);

//make a class for each sub
// this would be used to target a cell and populate it with the class
// $($grid[i])
// $(this).html(miniSub);

// $(this).html(techSub);
// $(this).html(bigSub);
// $(this).html(sneakySub);
// $(this).html(dangerSub);












});
