// functions
/*
function funcName() {
  do something
}
parameter - var name, argument value
*/
function RollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(times) {
  for (let i = 0; i < times; i++) {
    RollDie();
  }
}

throwDice(6);

function greet(nickname) {
  console.log(`Hello, ${nickname}!`);
}

greet('Danny');

// multiple arguments - undefined if argument is missing
function sum(x, y) {
  console.log(x + y);
}
sum(5, 6);

// return statement - stops code execution
function add(x, y) {
  return x + y;
}
console.log(add(15, 31));

function isPurple(color) {
  return color.toLowerCase() === 'purple';
}

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
}

// challenge 1: Password Validator
function isValidPassword(password, username) {
  return !(
    password.length < 8 ||
    password.toLowerCase().indexOf(username.toLowerCase()) !== -1 ||
    password.indexOf(' ') !== -1
  );
}

console.log(isValidPassword('89Fjj1nms', 'dogLuvr'));
console.log(isValidPassword('dogLuvr123!', 'dogLuvr'));
console.log(isValidPassword('my password', 'dogLuvr'));

// challenge 2: Average
function avg(numberList) {
  return numberList.reduce((acc, cur) => acc + cur, 0) / numberList.length;
}
console.log(avg([1, 2, 3]));
console.log(avg([75, 76, 80, 95, 100]));

// challenge 3: Pangrams
function isPangram(sentence) {
  const lower = sentence.toLowerCase();
  const letterCount = {};

  for (char of lower) {
    if (char.match(/[a-z]/i)) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  }
  return Object.keys(letterCount).length >= 26;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));

function isPangramSolution(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let char of alphabet) {
    if (!sentence.toLowerCase().includes(char)) {
      return false;
    }
  }
  return true;
}

// challenge 4: Get Playing Card
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getCard() {
  const value = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
    'Ace',
  ];
  const suit = ['clubs', 'spades', 'hearts', 'diamonds'];

  return {
    value: pickRandom(value),
    suit: pickRandom(suit),
  };
}

for (i = 0; i < 10; i++) {
  const card = getCard();
  console.log(`Your card is the ${card.value} of ${card.suit}`);
}
