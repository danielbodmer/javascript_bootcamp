// DOM events
// https://developer.mozilla.org/en-US/docs/Web/Events
//2 ways NOT to add events
/*
put code in HTML file using <element eventName="code()">
in js code using element.eventType = funcion()
*/
const btn = document.querySelector('#clicker');
btn.onclick = () => alert('You clicked me! But not very well :(');

// use element.addEventListener('type', callback)
const btnGood = document.querySelector('#good');
const str = 'You used me in the best possible way! :D';
const popUp = (str) => () => alert(str);
btnGood.addEventListener('click', popUp(str));
