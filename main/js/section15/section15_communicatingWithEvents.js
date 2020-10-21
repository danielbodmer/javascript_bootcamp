// DOM events
// https://developer.mozilla.org/en-US/docs/Web/Events
//2 ways NOT to add events
/*
put code in HTML file using <element eventName="code()">
in js code using element.eventType = funcion()
*/
// only always one listener of each type - addEventListener can handle multiple
const btn = document.querySelector('#clicker');
btn.onclick = () => alert('You clicked me! But not very well :(');

// use element.addEventListener('type', callback)
// be carefule with using arrow functions (again because of this keyword)
const btnGood = document.querySelector('#good');
const str = 'You used me in the best possible way! :D';
const popUp = (str) => () => alert(str);
btnGood.addEventListener('click', popUp(str));
btnGood.addEventListener('click', () => console.log('You clicked me!'));
btnGood.addEventListener('click', function () {
  console.log("this doesn't use an arrow function!");
});

// The Impossible Button - button moves when trying to click it
btn.classList.toggle('hidden');
btnGood.classList.toggle('hidden');

const impossible = document.querySelector('#impossible');
const selectRandomPosition = (dimension) => {
  const rand = Math.floor(Math.random() * dimension) + 1;
  return `${rand.toString()}px`;
};

impossible.addEventListener('mouseover', function () {
  impossible.style.left = selectRandomPosition(window.innerWidth);
  impossible.style.top = selectRandomPosition(window.innerHeight);
});
impossible.addEventListener('click', function () {
  impossible.innerText = 'You got me!';
  document.body.style.backgroundColor = 'green';
});

impossible.classList.toggle('hidden');

// events on multiple elements
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
];

// !! remember me
const changeColor = function (e) {
  console.log(e); // show event object
  const h1 = document.querySelector('h1');
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector('#boxes');

for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.append(box);

  // if function attached to an object, this called within function will refer to object
  box.addEventListener('click', changeColor);
}

// the event object - automatically passed into callback when event added to element -- useulf for keypress events to get which key was pressed

// Key Events: keypress, keyup & keydown
const input = document.querySelector('#username');
input.addEventListener('keydown', function (e) {
  console.log('Key Down!');
});
input.addEventListener('keyup', function (e) {
  console.log('Key Up!');
});
// character needs to display in page (i.e shift will not register a keypress but return will(?))
input.addEventListener('keypress', function (e) {
  console.log('Key Pressed!');
  console.log(e);
});

const addItemInput = document.querySelector('#add-item');
const itemsUl = document.querySelector('#items');

const createListItem = function (text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  return listItem;
};

addItemInput.addEventListener('keypress', function (e) {
  if (!this.value) return;
  if (e.key === 'Enter') itemsUl.append(createListItem(this.value));
  this.value = '';
});

// Form Events & PreventDefault
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const form = document.querySelector('#signup-form');
form.addEventListener('submit', function (e) {
  //alert('Submitting the form!');
  console.log(creditCardInput.value);
  console.log(termsCheckbox.checked);
  console.log(veggieSelect.value);
  e.preventDefault(); // prevents default behaviour (i.e. stops form loading to new page)
});

// input & change events (change works like input but needs to lose focus)
const formData = {};
creditCardInput.addEventListener('input', (e) => {
  formData['cc'] = e.target.value;
  console.log(formData);
});

const captureData = (obj, target, name) => (e) => {
  obj[name] = e.target[target];
  console.log(formData);
};

veggieSelect.addEventListener(
  'input',
  captureData(formData, 'value', 'veggie')
);

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('input', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
  });
}
