const add = (x, y) => x + y;

const num1 = Math.floor(Math.random() * 100) + 1;
const num2 = Math.floor(Math.random() * 100) + 1;

console.log(`${num1} + ${num2} = ${add(num1, num2)}`);

const rollDice = () => Math.floor(Math.random() * 6) + 1;

for (let i = 0; i < 10; i++) {
    console.log(`You roll the dice and the number is: ${rollDice()}`);
};

const firstName = null;
const lastName = null;
const fullName = (firstName || "Daniel") + ' ' + (lastName || "Bodmer");

console.log(`Your name is ${fullName}`);

// reverse string
const reverse = (text) => text.split('').reverse().join('');

function oldReverse(text) {
    let newString = '';
    for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
    return newString;
}

console.log(reverse('My name is Daniel Bodmer'));
console.log(oldReverse('My name is Daniel Bodmer'));