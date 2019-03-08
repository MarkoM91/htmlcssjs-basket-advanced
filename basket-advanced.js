function getRandom(min, max) {

  return Math.floor(Math.random() * (max-min + 1)) + min;
}

function getRandomChar() {

  var rndInt = getRandom(65, 90);
  var rndChar = String.fromCharCode(rndInt);


  return(rndChar);
}

function getRandomId() {
  var rndId = "";

  for (var i = 0; i < 3; i++) {

  rndId += getRandomChar() + getRandom(0, 9);
  }
return rndId
}



function getRandomPlayer() {

  var twoPerc = getRandom(0, 100);
  var threePerc = 100 - twoPerc;
  var player = {

  "id" : getRandomId(),
  "points" : getRandom(0, 30),
  "bounce" : getRandom(0, 15),
  "mistake" :getRandom(0, 5),
  "twoPerc" : twoPerc,
  "threePerc" : threePerc
}

return player;
}

function isPresent(player, players) {

  var finded = false;

  for (var i = 0; i < players.length; i++) {

    if (player.id == id) {
      finded = true;
    }
  }
  return  finded;
}

function getPlayerbyId(id, players){

var player;
   for (var i = 0; i < players.length; i++) {
     if (players[i].id == id) {
      player = players[i];
     }
   }
return player;

}

function getRandomPlayers() {
  var players = [];

  for (var i = 0; i < 10; i++) {
     var player = getRandomPlayer();
    if (!isPresent(player.id, players)) {

        players.push(player);
    }

  }

  return players;
}

function updateUI(players) {
  var option = $('.input-element');
  for (var i = 0; i < players.length; i++) {

     option.append(players[i].id);









  }


}

function clearClick() {
  var input = $('#usr-input');
  input.val("");

  idDOM =$('#id');
  idPoints = $('#points > span.content');
  idBounce = $('#bounce > span.content');
  idMistake = $('#mistake > span.content');
  idTwoPerc = $('#twoPerc > span.content');
  idThreePerc = $('#threePerc > span.content');

  idDOM.text(player.id);
  idPoints.text(player.points);
  idBounce.text(player.bounce);
  idMistake.text(player.mistake);
  idTwoPerc.text(player.twoPerc);
  idThreePerc.text(player.threePerc);
}

function playerSelection(players, me) {

 var pickedId = me.val();

 var player = getPlayerbyId(pickedId, players)

 idDOM =$('#id > span.content');
 idPoints = $('#points > span.content');
 idBounce = $('#bounce > span.content');
 idMistake = $('#mistake > span.content');
 idTwoPerc = $('#twoPerc > span.content');
 idThreePerc = $('#threePerc > span.content');

 idDOM.text(player.id);
 idPoints.text(player.points);
 idBounce.text(player.bounce);
 idMistake.text(player.mistake);
 idTwoPerc.text(player.twoPerc);
 idThreePerc.text(player.threePerc);
}





function init() {

getRandomChar();
var res = getRandomPlayers();
console.log(res);
var players = getRandomPlayers();
updateUI(players);
var clearButton = $('#clear-btn');
clearButton.click(clearClick);

var input = $('#usr-input');
input.on("change" , function() {

var me = $(this);
  playerSelection(players, me);

});
}


$(document).ready(init);
