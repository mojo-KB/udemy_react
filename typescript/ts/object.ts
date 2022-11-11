const dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 2
}

const printName = (person: {first: string; last: string}): void=> {
    console.log(`${person.first} ${person.last}`)
}


let coordinate:{x: number, y: number} = {x: 34, y: 2}

function randomeCoordinate(): {x: number, y:number}  {
    return {x: Math.random(), y: Math.random()}
}

// Excess Properties Example
printName({first: "Bunla", last: "Kour", age: 23})


const singer = {
    first: "Micheal",
    last: "Jackson",
    age: 25
}
printName(singer); // age will be ignored 

function createUser(user: {
    usename: string;
    email: string;
    isAdmin: boolean
}) {
    return "Hello";
}


// Type Alias; usually for Object type
type Point = {
    x: number;
    y: number
}

let secondCoordinate: Point = {x: 34, y: 2};

function returnCoordinate(): Point {
    return {x: Math.random(), y: Math.random()}
}

function doublePoint(inputPoint: Point): Point {
    return {x: inputPoint.x * 2, y: inputPoint.x * 2};
}

type myNum = number; 


// Nested Objects
const describePerson = (person: {
    name: string;
    age: number;
    parentNames: {
        mom: string;
        dad: string;
    }
}): string => {
    return `
    Person: ${person.name},
    Age: ${person.age},
    Parents: ${person.parentNames.mom}, ${person.parentNames.dad}
    `
}

describePerson({
    name: 'Jimmy', 
    age: 19,
    parentNames: {
        mom: 'kim',
        dad: "steve"
    }
})

const Song1 = {
    title: 'Unchained Melody',
    artist: "Rgitheous Brothers",
    numStreams: 12345678,
    credits: { 
        producer: "Phil Spector",
        writer: "Alex North"
    }
}
function calculatePayou() {

}

