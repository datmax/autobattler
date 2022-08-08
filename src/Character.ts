class Character{
    public hp: number;
    public ad: number;
    public armor: number;
    public x: number;
    public y: number
    constructor(hp?:number, ad?:number, armor?:number){
        this.hp = hp ?? 100;
        this.ad = ad ?? 20;
        this.armor = armor ?? 10;
    }


    private attack(char: Character) {
            char.hp = char.hp - (this.ad * this.armor / 100)
    }
    
    private spellCast(): void{
        
    }


    public performAction() {
        
    }

    
    
}


export default Character;