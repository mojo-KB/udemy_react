interface interfacePerson2 {
    first: string,
    last: string,
    nickname?: string
}
const thomas2 : interfacePerson= {
    first: "Thomas",
    last: "Hoddy",
}


interface userInfo {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    sayHi: () => string,
    sayHello(): string,
}

const bunla2: userInfo = {
    id: 1234,
    first: "Bunla",
    last: "Kour",
    sayHi: () => {
        return 'Hello'
    },
    sayHello: () => {
        return 'Hello'
    }
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}


const shoes: Product = {
    name: "Nike shoes",
    price: 100,
    applyDiscount(amount: number) { 
        const newPrice = this.price * (1 - amount)
        this.price = newPrice;
        return this.price 
    }
}


console.log(shoes.applyDiscount(0.5));


interface Dog2 {
    name: string,
    age: number
}

interface Dog2 {
    breed: string,
    bark(): string
}

const eldon: Dog2 = {
    name: "Elton",
    age: 0.5, 
    breed: "Australian Shepherd",
    bark() {
        return 'Woof Woof'
    }
}

interface ServiceDog extends Dog2 {
    job: "Drug sniffer" | "Bomb" | "Guide Dog"
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 2,
    breed: "Lab",
    bark() {
        return 'Woof'
    },
    job: "Guide Dog"
}

 