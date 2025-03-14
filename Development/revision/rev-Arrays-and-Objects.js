//you can store functions in Arrays and Objects. 
// const phrases = {
//     greeting: "hello there",
//     time: () => {
//         const currentTime = new Date ();
//         return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
//     }
// }
// console.log(phrases.greeting);
// console.log(phrases.time());
// console.log();

//Creating an Object Using the Constructor Function
function PhraseObjectConstructor(name) {
    this.greeting = `Hello there ${name}!`
    this.time = () => {
        const currentTime = new Date();
        return `This time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
    }
}
const phrases = new PhraseObjectConstructor("Harold");
console.log(phrases.greeting);
console.log(phrases.time());
console.log();

//A Brief Intro to this
//this is a reserved word in JavaScript that returns the context it is in
const example = {
    name: "Harold",
    test: function() {
        return this;
    }
}
console.log(example.test());
console.log();

//this can be very useful since we can use it to reference objects from inside themselves.
const example1 = {
    name: "Henry",
    sayName: function () {
        return `My name is ${this.name}`;
    }
}
console.log(example1.sayName());
console.log();

