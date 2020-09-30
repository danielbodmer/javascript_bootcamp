// block scope
if (true) {
  let animal = 'eel'; // cannot be called outside of this block {}
}
if (true) {
  var animal = 'eel'; // can be called outside of this block
  console.log(animal);
}
console.log(animal);

// lexical scope - inner function can only be called by outer function not from outside the scope of outer - outer cannot access variables declared in inner
function outer() {
  let hero = 'Black Panther';

  function inner() {
    let cryForHelp = `${hero}, please save me!`;
    console.log(cryForHelp);
  }
  inner();
}
outer();

// function expressions - assign function to variable - used to pass functions as arguments
/*
const name = function () {
  return something
}
name()
*/
const square = function (num) {
  return num ** 2;
};
console.log(square(5));
const squared = (num) => num ** 2;
console.log(squared(6));
console.dir(squared);

// higher order functions - FUNCTIONS ARE OBJECTS!!!!
// functions that operate on/with other functions:
// accept other functions as arugments or return a function
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const operations = [add, subtract, multiply, divide];
console.log(operations);
console.log(operations[1](10, 6));
for (let op of operations) {
  console.log(op(100, 4));
}
const thing = {
  doSomething: multiply,
};
console.log(thing.doSomething(6, 2));

// functions as arguments

// functions as return values

// callbacks

// hoisting
