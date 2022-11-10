function square (num: number) {
    return num * num;
}

const greet = (name: string) => {
    return `Hello ${name}`;
}

const User = (person: string, age: number, isFunny: boolean) => {
    return `${person} is ${age} years old and {${isFunny} ? 'is funny' : 'is not funny'}`
}


// functions with default parameters
const greetBunla = (name: string = "Bunla") => {
    return `Hello ${name}`;
}
greetBunla();
greetBunla("Bunla Kour");

// Adding type to a return function
const addNums = (x: number, y: number): number => {
    return x + y;
}

const getNums = (x: number, y: number): string=> {
    return `${x} ${y}`
}

const consoleLogNums = (x: number, y: number): void=> {
    console.log(x, y)
}


function rando (num: number): string | number {
    if(Math.random() < 0.5) {
        return num.toString()
    }

    return num
}

//Anonymouse Function
const colors = ["red", "orange", "yellow"]
colors.map(color => {
    return color.toUpperCase()
})

//Void Type : would return undefined
const printTwice = (msg: String): void => {
    console.log(msg)
    console.log(msg)
}


//Never type: indicate the function should not return anything
const neverStop = (): never => {
    while (true) {
        console.log("I'm still going!");
    }
}

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never{
    while(true) {
        console.log("Game is runing")
    }
}
