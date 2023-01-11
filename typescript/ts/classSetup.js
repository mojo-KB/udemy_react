// classes in typescript example
var Person = /** @class */ (function () {
    function Person() {
    }
    // constructor(name: string, age:number) {
    //     this.name = name;
    //     this.age = age;
    // }
    // greet() {
    //     return `Hello ${this.name}`
    // }
    Person.prototype.taunt = function () {
        return "BOOYAH!";
    };
    return Person;
}());
//const jimmy = new Person('Jimmy', 25)
var player1 = new Person();
console.log(player1.taunt());
