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
console.log("How many players will play the game?");