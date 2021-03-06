// shorthand object properties - create object props using variable as key and variable value as value
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg,
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);
console.table(stats);

// computed properties - create dynamic key = use square bracket around key
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
  [role]: person,
  [role2]: person2,
};
console.table(team);

const addProp = (obj, key, value) => {
  return { ...obj, [key]: value };
};

const result = addProp(team, 'CEO', 'Elon Musk');
console.table(result);

// adding methods to objects (functions in objects are called Methods) - prefer function keywords over arrow funcitons!
const math = {
  numbers: [1, 2, 3, 4, 5],
  add: (x, y) => x + y,
  multiply: (x, y) => x * y,
};

console.log(math.add(5, 6), math.multiply(5, 6), math.numbers);

// Method shorthand syntax
const auth = {
  username: 'danny',
  login() {
    console.log('logged you in');
  },
  logout() {
    console.log('logged you out!');
  },
};

auth.login();
auth.logout();

// THIS! - a reference to the current execution scope
function sayHi() {
  console.log('Hi!');
  console.log(this); // refers to global object (windows in browers - global in Node)
}

sayHi();

const greet = function () {
  console.log(this); // still refers to windows/global
};

greet();

// this in methods in object refers to the object rather than the window
const popStar = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickname: 'Cher',
  fullname() {
    const { first, last, nickname } = this; // save having to use this.value
    console.log(this); // returns the object!
    console.log(`${this.first} ${this.last} AKA ${this.nickname}`);
    console.log(first, last, nickname);
    return `${first} ${last} AKA ${nickname}`;
  },
  printBio() {
    const fullName = this.fullname(); // use this to refernce the object itself
    console.log(`${fullName} is a person`);
    console.log(this);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickname} says hahahahaha!`);
  }, // this gets sets to window for arrow functions - not recommended to use arrow functions for object methods
};
popStar.fullname();
popStar.printBio();
popStar.laugh();

// This: Invocation context
const printBio = person.printBio; // changes context of this and references window/global

// Annoyomatic Demo
const annoyer = {
  phrases: [
    'Literally',
    'cray cray',
    "I can't even",
    'Totes!',
    'YOLO',
    "Can't stop, won't stop",
  ],
  pickPhrase() {
    const { phrases } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    /*
    setInterval(function () {
      // console.log(this.pickPhrase()); won't work as setInterval belongs in global scope - use an arrow function instead
    }, 3000);
    */
    this.timerId = setInterval(() => console.log(this.pickPhrase()), 3000); // takes this from object rather than window
  },
  stop() {
    clearInterval(this.timerId);
  },
};

annoyer.start();
annoyer.stop();
