$(document).ready(function() {
$("#myModal2").hide();
$("#myModal3").hide();

var cannonSize = 35;
var $grid = $("td");
var rand = Math.floor(Math.random() * 81);
var newRand;
var randomNum = rand;
var gridNumRandomized = [];
var visionPower = [];
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
var span = document.getElementsByClassName("close")[0];

// var audio = $(".image")[0];
// $(".image").mouseenter(function() {////////////////////
//   audio.play();
// });
span.onclick = function() {
var $pName = document.getElementsByClassName('pName').value;
var $name = document.getElementById("fname").value;
modal.style.visibility = "hidden";


$(".pName").html($name);
$(".pCannon").html(cannonSize);
$(".pScore").html(score);

for (var i = 0; i < 20; i++) {
  $($grid[randomNum]).addClass("startSub").html("ship");
  gridNumRandomized[i] = randomNum;
  numberRandomize();
  randomNum = rand;
}

setTimeout(function () {
  for (var i = 0; i < 20; i++) {
    $($grid[gridNumRandomized[i]]).removeClass("startSub").html("ship");
    $($grid[gridNumRandomized[i]]).addClass("battleSub").html("ship");
  }
}, 3000);


for (var i = 0; i < 5; i++) {
  $($grid[randomNum]).addClass("startSub").html("vision");
  visionPower[i] = randomNum;
  numberRandomize();
  randomNum = rand;
}

setTimeout(function () {
  for (var i = 0; i < 20; i++) {
    $($grid[visionPower[i]]).removeClass("startSub").html("vision");
    $($grid[visionPower[i]]).addClass("battleSub").html("vision");
  }
}, 3000);

numOfPirates = gridNumRandomized.length;
$(".pPirates").html(numOfPirates);
}


$("td").click(function(){

if (cannonSize >= 1 && $(this).html() !== "hit" && $(this).html() !== "blank")
{
  cannonSize--;

$(".pCannon").html(cannonSize);
}

$(".pCannon").html(cannonSize);
if ($(this).html() !== "" && $(this).html() !== "blank" && $(this).html() !== "hit" && $(this).html() !== "vision")
{
$(this).addClass("subHit").html("hit");
numOfPirates--;
score += 20;
  cannonSound.play();
  $(".image").attr("src","./images/pirate-hit.gif");
$(".pPirates").html(numOfPirates);
$(".pScore").html(score);
}

else if ($(this).html() == "hit")
{}
else if ($(this).html() !== "hit" && $(this).html() !== "blank" && $(this).html() !== "vision")
{
  $(this).addClass("missSub").html("blank");
  splashSound.play();
  $(".image").attr("src","./images/pirate-laugh.gif");
}

else if ($(this).html() == "vision") {
    $(this).addClass("visionSub").html("blank");
//noise of a surprise
$(".image").attr("src","./images/pirate-vision.gif");

for (var i = 0; i < gridNumRandomized.length; i++) {
  $($grid[gridNumRandomized[i]]).addClass("startSub").html("ship");
}

setTimeout(function () {
  for (var i = 0; i < 20; i++) {
    $($grid[gridNumRandomized[i]]).removeClass("startSub").html("ship");
    $($grid[gridNumRandomized[i]]).addClass("battleSub").html("ship");
  }
}, 3000);

}

  if (score > 0)
  {score -= 5;
  $(".pScore").html(score);}
  else if (score < 0)
  {
    score = 0;
    $(".pScore").html(score);
  }

if (numOfPirates == 0)
{victory();}
else if (cannonSize == 0)
{gameOver();}
else if (cannonSize < numOfPirates)
{gameOver();}
});

function numberRandomize(){
  rand = Math.floor(Math.random() * 81);
  for (var i = 0; i < gridNumRandomized.length; i++) {
  if (rand == gridNumRandomized[i])

  numberRandomize();
  }
  return rand;
}


function gameOver()
{
eLaughSound.play();

  $("#myModal3").show();
}

function victory()
{
treasureSound.play();

 $("#myModal2").show();

}


$(".gameOverBtn").click(function(){

 location.reload();
});

});
