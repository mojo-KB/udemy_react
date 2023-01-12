// classes in typescript example


class Person {
    // class fields
    first: string;
    last: string;
    score: number = 0;
    numLives: number = 10;

    // private field



    // constructor(name: string, age:number) {
    //     this.name = name;
    //     this.age = age;
    // }
    // greet() {
    //     return `Hello ${this.name}`
    // }
   
    
    // constructors
    constructor (first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    // functions
    taunt() {
        return "BOOYAH!"
    } 
}


//const jimmy = new Person('Jimmy', 25)
const player2 = new Person("Bunla", "Kour")
//const player1 = new Person();
console.log(player2.taunt());





