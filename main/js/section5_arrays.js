// Creating Arrays
let shoppingList = ['cereal', 'cheese', 'ice'];
let lotto = [1, 49, 23, 34, 17];
let myCollection = [12, 'dog', true, null, NaN];
let myArray = new Array(1, 2, 3); //not recommended

// Array Indices
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(`There are ${colors.length} colors in the colors array.`);
console.log(`The first color is ${colors[0]}.`);
console.log(`The third color is ${colors[2]}.`);
console.log(`The last color is ${colors[colors.length - 1]}.`);
console.log(
  `This happens if I try to access colors with and incorrect index: ${colors[10]}.`
);

// Modifying Arrays
let shoppingList2 = ['Cheddar Cheese', '2% Milk'];
shoppingList2[1] = 'Whole Milk';
console.log(shoppingList2);
shoppingList2[2] = 'Ice Cream';
console.log(shoppingList2);
shoppingList2[shoppingList2.length] = 'Tomatoes'; // add to end (use .push instead)
console.log(shoppingList2);

// Push & Pop (add / remove from end)
let topSongs = [
  'First Time Ever I Saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
];

topSongs.push('Fortunate Song');
topSongs.push(true);
console.log(topSongs);
topSongs.pop(); // returns last value - useful! e.g. Last to-do on list
console.log(topSongs);
const nextSong = topSongs.pop();
console.log(nextSong);
console.log(topSongs);

// Unshift & Shift (add / remove from start)
let dishesToDo = ['big platter'];
dishesToDo.unshift('large plate');
dishesToDo.unshift('small plate');
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
dishesToDo.unshift('dirty spoon');
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.unshift('fork', 'knife'); // multiple items - also works with .push()
console.log(dishesToDo);

// Concat - merge arrays - creates new array
let fruits = ['apple', 'banana'];
let veggies = ['aspargus', 'brussel sproutes'];
let meats = ['steak', 'chicken breat'];
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
let allFood = fruits.concat(veggies, meats);
console.log(allFood);

// Includes - look for a value - boolean
let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter',
];
console.log(
  `Does ingredients include fish? ${ingredients.includes('fish') ? 'Y' : 'N'}`
);
console.log(
  `Does ingredients include shrimp? ${
    ingredients.includes('shrimp') ? 'Y' : 'N'
  }`
);

// indexOf - works like str.indexOf (returns index) - number
console.log(ingredients.indexOf('eel'));

// join - create string from array
let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
console.log(letters.join(''));
console.log(letters.join('-'));

// reverse - reverse array - in-place, does not create a copy
letters.reverse();
console.log(letters);
console.log(letters.join(''));
console.log(letters.reverse().reverse().join('.'));
console.log([1, 3, 4, 17, 1].join(', '));

// slice - copy portion of array (makes new array) - use negative to count backwards
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
let swimmers = animals.slice(0, 3); // exclusive
console.log(swimmers);
let mammals = animals.slice(2, 4);
console.log(mammals);
let reptiles = animals.slice(4);
console.log(reptiles);
let quadruped = animals.slice(-3);
console.log(quadruped);
let animalsCopy = animals.slice(); // copy array

// splice - remove/replace elements - useful for adding to middle of array (start, delCount, [instert])
// returns deleted values if greater than 0
animals.splice(1, 0, 'octopus');
console.log(animals);
animals.splice(3, 2);
console.log(animals);
animals.splice(3, 0, 'snake', 'frog');
console.log(animals);

animals.splice(0, 2, 'SHARK', 'OCTOPUS'); // delete and replace;
console.log(animals);

// sort - sorts an array - sorts by utf-16 code by default - requires function to sort numerically
let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
people.sort();
console.log(people);
let nums = [34, 10, 10000, 67, 99];
nums.sort();
console.log(nums);

// Reference Types
// arrays hold pointer to values in system memory
let refs = [5, 6, 7, 8];
let otherRefs = refs;
refs.push(9); // also adds value to otherRefs as both have same memory address
console.log(otherRefs);
otherRefs.pop();
console.log(refs);

// Using const with Arrays
