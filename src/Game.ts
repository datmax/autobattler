import Player from "./Player";

class Game{
    public players: Player[];
    public round: number = 0;
    constructor(){
        const player1 = new Player();
        const player2 = new Player();
        this.players.push(player1, player2);
    }

    
    public start() : void{
        
    }


}