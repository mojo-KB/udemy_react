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

const songExample = {
    title: 'Unchained Melody',
    artist: "Rgitheous Brothers",
    numStreams: 12345678,
    credits: { 
        producer: "Phil Spector",
        writer: "Alex North"
    }
}


function calculatePayout(song: {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}): string {
    return "Something"
}

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}


function calculatePayoutTwo(song: Song): number {
    return .0333 * song.numStreams;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

function printData(song: Song): void {
    console.log(song.title, song.artist, song.numStreams, song.credits.producer, song.credits.writer)
}

printSong(songExample);
calculatePayout(songExample);
printData(songExample);


// Optional properties in an object example

type Point3D = {
    // this type taking (x,y) and also (x,y,z)
    x: number;
    y: number;
    z?: number;
}

const threeDCorrd: Point3D = {
    x: 2, 
    y: 5,
    z: 3
} 


// Readonly type modifier
type User = {
    readonly id: number,
    username: string;
}

const user: User = {
    id: 12345,
    username: "mojo-KB"
}