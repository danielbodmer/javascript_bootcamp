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

// finding Parent/Child/Sibling
