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