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
const selectRandomPx = (dimension) => {
  const rand = Math.floor(Math.random() * dimension) + 1;
  return `${rand.toString()}px`;
};

impossible.addEventListener('mouseover', function () {
  impossible.style.left = selectRandomPx(window.innerWidth);
  impossible.style.top = selectRandomPx(window.innerHeight);
});
