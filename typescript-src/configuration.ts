interface Chiken {
    breed: string,
    eggPerWeek: number,
    name: string,
}


const norma: Chiken = {
    breed: "Silkie",
    eggPerWeek: 4,
    name: "Norma"
}


/*
tsc index.js: to compine the typescript file
tsc -w index.js: to watch the errors while the file is chaning
*/


interface Product {
    price: number;
    name: string;
    quantity: number
}

const printProduct = (product: Product): void => {
    
    console.log(`${product.name} ${product.price} ${product.quantity}`)
}