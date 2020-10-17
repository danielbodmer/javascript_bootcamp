/* the important properties & methods
classList
getAttribute()
setAttribute()
appendChild()
append()
preprend()
removeChild()
remove()
createElement
innerText
textContent
innerHTML
parentElement
children
nextSibling
previousSibling
style
*/

// innerText & textContent
// innerText returns all text between opening and closing tag including any nested tags - only returns what would appear on the page
// textContent - keeps formatting and includes text within our tags. i.e. script - shows whatever is in the html file regardless of how it gets displayed on the page - faster than innerText
const h1 = document.querySelector('h1');
h1.innerText = 'Section 14 - Twisting the DOM to Our Will!';

// innerHTML - retrieve text and any other html tags within selected element
// if prop is updated, everything between tag is updated including html
const ul = document.querySelector('ul');
document.body.append(ul.innerText);
document.body.append(ul.innerHTML);
document.body.append(ul.textContent);

const form = document.querySelector('form');
console.log(form.innerHTML);

const newDiv = document.createElement('div');
document.body.append(newDiv);
newDiv.innerHTML = '<p>This p was added using the innerHTML prop</p>';

// value, src, href & more
// value - get input value (i.e. from textbox in form)
// for checkboxes - used checked rather than value!!!
const inputs = document.querySelectorAll('input');
console.log(inputs);
document.getElementById('name').value = 'Daniel';
document.getElementById('pwd').placeholder = 'Super secret password!';
// set href
const a = document.querySelector('a');
a.href = 'https://www.dogsrule.com';

// getting & setting attributes - getAttribute() & setAttribute()
const range = document.querySelector('input[type="range"');
console.log(range.getAttribute('max'));
console.log(range.getAttribute('min'));
console.log(range.getAttribute('step'));
range.setAttribute('max', 1000);
console.log(range.getAttribute('max'));

// finding Parent/Child/Sibling - parentElement, children, nextSibling, previousSibling - access other elements based on current element
const firstli = document.querySelector('li');
console.log(firstli.parentElement); // returns <ul>
console.log(firstli.parentElement.parentElement); // returns body
console.log(firstli.parentElement.parentElement.parentElement); // returns html
// parent goes up the DOM tree, .children goes down the tree
console.log(ul.children); // returns collection of child elements
// next/previous siblings - siblings share parent node
const secondLi = firstli.nextSibling;
console.log(secondLi);

// changing multiple elements
const allLis = document.querySelectorAll('li');
/*
for (let li of allLis) {
  console.log(li.innerText);
  li.innerHTML = 'We are <b>The Champions!</b>';
}
*/

// altering styles - select elements and change css .style()
console.log(h1.style); // doesn't show css from file, is indepent - starts with all styles set to "" - can only read inline styles
h1.style.color = 'teal';
h1.style.fontSize = '48px';

const p = document.querySelector('#styles');
p.style.color = 'red';
const color = ['red', 'orange', 'teal', 'green', 'blue', 'purple'];

/*
allLis.forEach((el, idx) => {
  el.style.color = color[idx];
});
*/

// getComputedStyle(element) - retrieves style value from css file - can't set
//console.log(getComputedStyle(h1));
const h1Style = getComputedStyle(h1);
console.log(h1Style.color);

// manipulating Classes - add multiple CSS styles at once
const todo = document.querySelector('#todos .todo');
/*
todo.style.color = 'gray';
todo.style.textDecoration = 'line-through';
todo.style.opacity = '50%';
*/
console.log(todo.classList); // prints classes of element and has it's own methods
todo.classList.remove('done');
todo.classList.add('done'); // adds css class to list
todo.classList.toggle('done'); // turns clas on and off
todo.classList.toggle('done');

// creating elements
const newH2 = document.createElement('h2');
newH2.innerText = 'This header was created by JavaScript';
newH2.classList.add('special');
const section = document.querySelector('section');
section.appendChild(newH2);

const newImg = document.createElement('img');
newImg.src =
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';
newImg.classList.add('photo');
document.body.append(newImg);

// append, prepend, insertBefore
