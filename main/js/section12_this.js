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

// computer properties - create dynamic key = use square bracket around key
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

// THIS!
