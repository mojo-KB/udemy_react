class Car {
    model: string;
    year: number;
    constructor(model: string, year: number){
        this.model = model;
        this.year = year;
    }
}

const myCar = new Car("Infiniti G37", 2013)