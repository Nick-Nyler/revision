//Find Elements Using a Simple Condition with Array.prototype.indexOf()
const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];
console.log(cards.indexOf("jack of clubs"));
console.log(cards.indexOf("jack of hearts"));
console.log()
//returns the index of the first matching element. If the element isn't contained in the array, it returns -1.
console.log(cards.indexOf("ace of spades", 2));
console.log(cards.indexOf("jack of clubs", 2));
console.log()
//Find Elements Using More Complex Conditions with Array.prototype.find()
//determine whether an array of numbers contains any odd values.
function isOdd(element) {
    return (element % 2===1);
}
console.log([4, 6, 8, 10].find(isOdd));
console.log([4, 5, 8, 10].find(isOdd));
console.log([4, 5, 7, 8, 10].find(isOdd));
console.log([4, 7, 5,  8, 10].find(isOdd));
//NB:Array.prototype.indexOf() is used when you want to check an array for a simple value;
//Array.prototype.find() is also called on an array, but it takes a function as an argument. 