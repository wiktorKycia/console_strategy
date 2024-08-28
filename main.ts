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

