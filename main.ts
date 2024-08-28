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
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.clear();
let flag:boolean = true;
let number_of_players:number;
do {
    rl.question("How many players will play the game?", (answer) => {
        try {
            number_of_players = parseInt(answer);
            flag = false;
        } catch(e) {
            console.log(e.message);
        }
        rl.close();
    })
} while (flag);
console.log(number_of_players);
const game:Game = new Game();