let age: number | string = 21;


type Point4 = {
    x: number;
    y: number
}

type Loc = {
    lat: number;
    long: number
}

const coord: Point | Loc = {x: 1, y: 32}


// Type narrowing with Union Types
function printAge(age: number | string): void {
    console.log(`You are ${age} years old.`)
}

function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    }
    return price * tax; 
}


// Union types and Arrays
const multiTypeArr: (number | string)[] = [1, 2, 3, 'A', 'B', 'C']

