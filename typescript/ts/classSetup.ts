// classes in typescript example


class Person {
    // class fields
    first: String;
    last: String;
    score: Number = 0;
    numLives: Number = 10;

    // private field
    #privateScore: Number = 2;

    // setter functions
    set numberOfLives( inputNum: Number) {
        this.numLives = inputNum;
    }

    // getter functions
    get fullName() {
        return `${this.first} ${this.last}`
    }



    

    // private function : can only be called in the class itself
    #setPrivateScore( inputScore: Number) {
        this.#privateScore = inputScore;
    }



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
    
    getPrivateScore() {
        return this.#privateScore;
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





