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

// querySelector & querySelectorAll
