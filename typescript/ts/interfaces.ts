// interfaces is similar to type alias

type Point3 = {
    x: number,
    y: number
}


// while interfaces are used to enforce the shape of an object
// only for objects
interface Person {
    name: string,
    age: number;
}


const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turining ${person.age}`
}

