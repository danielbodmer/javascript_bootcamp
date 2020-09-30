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

// functions as arguments - don't use () in arg when passing function!
function callTwice(func) {
  func();
  func();
}
const laugh = () => console.log('Ha Ha Ha Ha');
callTwice(laugh);

function repeatNTimes(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}
const sayMyName = () => console.log(`Hello, Danny!`);
repeatNTimes(sayMyName, 5);

function callOne(f1, f2) {
  const rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}
callOne(sayMyName, laugh);

// functions as return values - function factory/template!
function multiplyBy(num) {
  return (x) => num * x;
}
const triple = multiplyBy(3);
console.log(triple(5));
const double = multiplyBy(2);
console.log(double(10));

makeBetween = (min, max) => (age) => age >= min && age <= max;

const isChild = makeBetween(0, 17);
const isAdult = makeBetween(18, 120);
const isTheNinties = makeBetween(1990, 1999);

console.log(isChild(5));
console.log(isChild(19));
console.log(isAdult(47));
console.log(isAdult(17));
console.log(isTheNinties(1991));
console.log(isTheNinties(1988));

// callbacks - function passed to function and executed within function - tend to use anonymous functions i.e. setTimeout(func, time in ms)
// use anonymouse function for one time use!
setTimeout(function () {
  console.log('I triggered after 2 seconds!');
}, 2000);
setTimeout(() => console.log('Hello!'), 5000);

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  alert('I told you not to click me!');
});
// hoisting
