// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages2: number[] = []
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard2: string[][] = []
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type coffee = {
    name: string,
    price: number
}
const coffeeProduct: coffee[] = [{name: "Thai Coffee",price: 12}]
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (inputProducts: coffee[]): number => {
    let total = 0
    inputProducts.map((product) => total += product.price)
    return total;
}
console.log(getTotal(coffeeProduct));