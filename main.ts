class Nation {
    lands: number;
    money: number;
    villages: number;
    units: number;
}

class Player {
    name: string;
    nation: Nation;
}

class Game {
    players: any[];
    constructor() {
        this.players = []
    }
}
const prompt = require('prompt-sync')({sigint: true});
console.clear();
let flag:boolean = true;
let number_of_players:number;
do {
    let answer:string = prompt("How many players will play the game?");
    try {
        number_of_players = parseInt(answer);
        flag = false;
    } catch (e) {
        console.log(e);
    }
} while (flag);
console.log(number_of_players);
const game:Game = new Game();