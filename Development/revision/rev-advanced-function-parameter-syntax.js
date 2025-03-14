//Advanced Function Parameter Syntax: Default / Rest / Spread
function customGreeting(greeting, name, adjective, occassion) {
    return `${greeting}, ${name}, ${adjective}, ${occassion},`;
}
console.log(customGreeting("Good morning", "Pouja", "fantastic", "Tuesday"));
console.log();

//create a function that takes in an itemPrice as a price in dollars and returns the discounted price:
function discountedPrice (itemPrice) {
    return itemPrice - (itemPrice * 0.25);
}
//we want to encode the discount rate as a parameter of the function.
// function discountedPrice (itemPrice, discount = 0.5) {
//     return itemPrice - (itemPrice * discount);
// }
// console.log(discountedPrice(100));
// console.log(discountedPrice(100, 0.25));
// console.log();

//add a tax parameter to discountedPrice() so that we can include a tax percentage to be added to the discounted sales price. 
function discountedAndTaxedPrice(itemPrice, tax, discount = 0.25) {
    let subtotal = itemPrice - (itemPrice * discount);
    return subtotal + (subtotal * tax);
  };
  
  console.log(discountedAndTaxedPrice(100, 0.10)); //=> 82.5
  console.log(discountedAndTaxedPrice(100, 0.10, 0.20)); //=> 88
  console.log();

  //Use JavaScript's spread Operator in a Function Call
  function add (a, b, c) {
    return a + b + c;
  }
  const arr = [1,2,3];
  console.log(add(...arr));//it converts this: add(...arr) into this: add(1, 2, 3).
  