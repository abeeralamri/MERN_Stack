class Card{
    constructor(name, cost){
        this.name= name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name , cost , power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
        
    }
    attack(target){
     target.res -= this.power;
     console.log(`${this.name} attack ${target.name}  by  ${this.power}`)
    }

}
class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude; 
        let txt = "";
        if (magnitude > 0){
            txt = "Raise";
        }
        else{
            txt = "Lower";
        }
        this.text = `${txt} the target's ${this.stat} by ${Math.abs(this.magnitude)} `;
    }
    play( target ) {
        if( target instanceof Unit ) {
           if(target.stat == "power"){
               target.power += this.magnitude;
               console.log(this.text);
           }
           else{
               target.res += this.magnitude;
               console.log(this.text);
           }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


const Hard_algorithm = new Effect ("Hard Algorithm", 2, "resilience", 3)
const Unhandled = new Effect ("Unhandled Promise Rejection", 1, "resilience", -2)
const Pair_Programming = new Effect("Pair Programming", 3, "power", 2)

// player 1
const Red_Belt_Ninja =  new Unit("Red Belt Ninja" , 3, 3, 4);
Hard_algorithm.play(Red_Belt_Ninja);

// player 2
Unhandled.play(Red_Belt_Ninja);


// player 3
Pair_Programming.play(Red_Belt_Ninja);


const Black_Belt_Ninja =  new Unit("Black Belt Ninja" , 4, 5, 4);
Red_Belt_Ninja.attack(Black_Belt_Ninja);