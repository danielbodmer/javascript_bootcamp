// The DOM
// document object is root of the tree and nodes contain HTML elements as objects

// selecting elements - select -> manipulate
/*
document.
getElementById
getElementsByTagName
getElementsByClassName
*/
const paragraph = document.getElementById('main');
paragraph.addEventListener('click', () => {
  paragraph.innerHTML = 'You just clicked me!';
});

// getElementsByTagName - returns list of matching tags (HTML collection - array like object but not an array!)
const inputs = document.getElementsByTagName('input');
console.dir(inputs);

for (let input of inputs) {
  console.log(input);
  console.log(input.value);
}

const inputsArr = [...inputs]; // turns into proper array
console.log(inputsArr);

// getElementsByClassName - same as above but returns by class rather than by tag
const listItems = document.getElementsByClassName('special');
console.dir(listItems);
// find specific elements in the class
const ul = document.getElementsByTagName('ul')[0];
const p = ul.getElementsByClassName('special');
const li = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
console.dir(li);

// querySelector & querySelectorAll - nicer what of getting elements!
// can replicate functionality of getElementById, getElementsByTagName, getElementsByClassName
/*
pass in CSS style selector
document.querySelector('h1') - find first matching tag
document.querySelector('#red') - find first matching id
document.querySelector('.big') - find first matching class
use .querySelectorAll to return all instances of matching element
*/
const h1 = document.querySelector('h1');
h1.addEventListener('click', () => (h1.innerHTML = 'I used a querySelector!'));

const peas = document.querySelector('section ul li.special');
console.dir(peas);

const password = document.querySelector('input[type=password]');
console.dir(password);
password.placeholder = 'Please type your password';

const allListItems = document.querySelectorAll('li');
console.dir(allListItems);
