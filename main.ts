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

do {
    rl.question("How many players will play the game?", (answer) => {
        try {
            let number_of_players:number = parseInt(answer);
            break;
        } catch(e) {
            console.log(e.message);
        }
    })
} while (true);

const game:Game = new Game();