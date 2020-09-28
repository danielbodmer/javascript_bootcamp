/*
Collections of properties
key / value pairs
access data using custom keys rather than index

prefer arrays over objects when order is important
let val = {} to declare an object
reference type (points to memory address) - use const!
all keys are converted to strings (except for symbols)
*/
const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 or 7',
  avgGoodSleep: '2:13',
};

// access object properties using dot notation var.property
console.log(fitBitData.totalMiles);

const numbers = {
  100: 'one hundred',
  16: 'sixtenn',
};

// use bracker notation when dot notation is not usable (key is not a string or has spaces) -- both below work
// always useful when using dynamic values to get key
console.log(numbers['100']);
console.log(numbers[100]);

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
};

console.log(palette.red);
console.log(palette['blue']);
let color = 'yellow';
console.log(palette[color]);

// adding and updating properties
// updating
fitBitData.workoutsThisWeek = '6 of 7';
fitBitData.totalMiles += 7.5;
console.log(fitBitData);
// adding
fitBitData.heartStillBeating = true;
console.log(fitBitData);

const userReviews = {};
console.log(userReviews);
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
console.log(userReviews);

// nested arrays and objects
const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1,
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3,
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2,
  },
];
console.log(shoppingCart[0]);

const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88,
  },
};
const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg);

// objects and reference types
const palette2 = palette; // < point to same memory address like an array
palette2.green = '#ebf876';
console.log(palette);
console.log(palette2);

// array / object equality
let nums = [1, 2, , 3];
let mystery = [1, 2, 3];
console.log(nums === mystery); // returns false (memory address is compared not values)
let nums2 = nums;
console.log(nums === nums); // returns true as references match

const user = {
  username: 'cherry_garcia8',
  email: 'garcia@gmail.com',
  notifications: [],
};
