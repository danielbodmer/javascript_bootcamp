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

// innerHTML
const ul = document.querySelector('ul');
document.body.append(ul.innerText);
document.body.append(ul.innerHTML);
document.body.append(ul.textContent);
