'use strict';

// default function parameters - f(x = y)
function multiply(x, y = 2) {
  return x * y;
}

console.log(multiply(4));

const greet = (person, greeting = 'Hi') => {
  console.log(`${greeting}, ${person}`);
};

greet('Danny');
greet('Danny', 'Yo');

// spread for function calls - f(...x) - takes iterable (array etc) and turns it into single arguments - f(...[1, 2, 3]) == f(1, 2, 3) // Math.max(...[1, 2, 3]) returns 3! - Strings can be spread as they are iterables
console.log(Math.max(...[1, 5, 9, 7, 6, 12]));
console.log(Math.min(...[-8, 6, -49, 0, 22, 59]));

function giveMeFour(a, b, c, d) {
  console.log(`a: ${a}\tb: ${b}\nc: ${c}\td: ${d}`);
}
giveMeFour(...['t', 'g', 'z', 'p']);
giveMeFour(...[1, 2, 3, 4]);
const colors = ['red', 'yellow', 'blue', 'green'];
giveMeFour(...colors);
const str = 'GOAT';
giveMeFour(...str);

// spread for array literals - copy/combine arrays
const cephalopods = [
  'dumbo octopus',
  'humboldt squid',
  'flamboyant cuttlefish',
];
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods]; // create new array from existing
console.log(mollusca);
console.log(['garden slug', ...mollusca]);
const inverts = [...cnidaria, ...gastropods, ...cephalopods];
const cephCopy = [...cephalopods]; // easily copy array! - new reference in memory

// spread for Object literals - functions as above but use {} to create object - objects can only be spread into other objects, not arrays
const feline = {
  legs: 4,
  family: 'Felidae',
};
const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};
console.table(dog);

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable',
};
console.table(houseCat);

const catDog = {
  ...canine,
  ...feline,
};
console.table(catDog); // two props with same key overwrite each other - always uses last instance of prop (order matters!)

const dogClone = { ...dog }; // creates copy
console.table({ ...['a', 'b', 'c'] }); // using array creates key value pairs to object

// arguments object - use for functions that accept a variable number or arguments
// array like object called 'arguments' - new way called Rest which is preferable (below)
// needs to be converted to an array to use all available array methods
// does not work with arrow functions!
function sum() {
  console.log(arguments);
  return [...arguments].reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));

// Rest - newer implementation of the arguments object
// like spread - turns remaining arguments into an array
// f(x, y, ...z) - works in arrow functions (x, y, ...z) =>
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 5, 7, 9, 10));
const sumArrow = (...nums) => nums.reduce((a, b) => a + b);
console.log(sumArrow(5, 6, 11, 99, 55));

function fullName(first, last, ...titles) {
  console.log(`${titles.join(' ')} ${first} ${last}`);
}

fullName('Daniel', 'Bodmer', 'Sir', 'Most Awesome', 'The Best');

// Destructuring Arrays - 'unpack' values from an array - properties from object into distinct variables
const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward',
];

const [gold, silver, bronze] = raceResults;
console.log(gold, silver, bronze);
const [first, , third, , fith] = raceResults; // use commas to skip indexes
console.log(first, third, fith);
const [winner, ...others] = raceResults; // first element to variable, rest to array
console.log(winner, others);

// Destructuring Objects - unpack using prop name
const runner = {
  firstName: 'Eliud',
  lastName: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

const { firstName, lastName } = runner;
console.log(firstName, lastName);
const { country: nation } = runner; // takes country prop and renames variable to nation
console.log(nation);

// Nested Destructuring
const results = [
  {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia',
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States',
  },
];
const [, { country }] = results;
console.log(country);

// Destructuring Parameters - take only need props from an object or array! useful for apis? - must match name of object props!
function print({ firstName, lastName, title }) {
  return `${title} ${firstName} ${lastName}`;
}
console.log(print(runner));

const response = ['HTTP/1.1', '200 OK', 'application/json'];
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
parseResponse(response);
