var Nation = /** @class */ (function () {
    function Nation() {
    }
    return Nation;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.players = [];
    }
    return Game;
}());
var prompt = require('prompt-sync')({ sigint: true });
console.clear();
var flag = true;
var number_of_players;
do {
    var answer = prompt("How many players will play the game?");
    try {
        number_of_players = parseInt(answer);
        flag = false;
    }
    catch (e) {
        console.log(e);
    }
} while (flag);
console.log(number_of_players);
var game = new Game();
