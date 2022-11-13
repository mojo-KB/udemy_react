// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages2 = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard2 = [];
var coffeeProduct = [{ name: "Thai Coffee", price: 12 }];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (inputProducts) {
    var total = 0;
    inputProducts.map(function (product) { return total += product.price; });
    return total;
};
console.log(getTotal(coffeeProduct));
