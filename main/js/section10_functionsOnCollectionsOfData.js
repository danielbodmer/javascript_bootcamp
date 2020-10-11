// array callback methods
// run function once per every element in array
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

// .forEach() (returns undefined // .map() returns new Array) - not chainable as it returns undefined! basically the same as for x of y - add a second param to use index

// anonymous
numbers.forEach(function (num) {
  console.log(num * 2);
});
// reusable version
function printTriple(n) {
  console.log(n * 3);
}
numbers.forEach(printTriple);
numbers.forEach((e, idx) => console.log(idx, e));

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the Flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage'],
  },
];
books.forEach(function (book) {
  console.log(book.title);
});

// .map() - creats a new array from existing array using callback
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});
console.log(texts, caps);

const doubles = numbers.map((num) => num * 2);
console.log(doubles);
const isEven = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});
console.log(isEven);

const updatedWord = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
});
console.log(updatedWord);

const bookTitles = books.map(function (book) {
  return book.title;
});
console.log(bookTitles);

// arrow functions - prefer over old style of function
/*
const name = (param) => return statement 
if one param, no parenthesis needed
*/
const square = (x) => {
  return x ** 2;
};
const multiply = (x, y) => {
  return x * y;
};

// arrow function - implicit return - return not needed if one line
const squared = (n) => n ** 2;
console.log(squared(5));

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const doubleNum = nums.map((e) => e * 2);
console.log(doubleNum);
const parityList = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
console.log(parityList);

// Array.find() - retrieves element from array based on callback function - stops after finding first match
let movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds',
];

const movie = movies.find((movie) => movie.includes('Mrs'));
console.log(movie);
// find where starts with search strong
const movie2 = movies.find((movie) => movie.indexOf('Mrs') === 0);
console.log(movie2);

const fourStarRating = books.find((b) => b.rating >= 4);
console.log(fourStarRating);

// .filter() - filter out data that returns false in callback and adds true to new arrays
const isOdd = nums.filter((n) => n % 2 === 1);
console.log(isOdd);

function oddOrEven(str) {
  const flag = str === 'even' ? 0 : 1;
  return (num) => num % 2 === flag;
}

const isEvenOrOdd = oddOrEven('even');
const isEvenFilter = nums.filter(isEvenOrOdd);
console.log(isEvenFilter);

const goodBooks = books.filter((b) => b.rating > 4.3);
console.log(goodBooks);
const fantasyBooks = books.filter((b) => b.genres.includes('fantasy'));
console.log(fantasyBooks);
const shortForm = books.filter(
  (b) => b.genres.includes('short stories') || b.genres.includes('essays')
);
console.log(shortForm);
const query = 'The';
const results = books.filter((book) =>
  book.title.toLowerCase().includes(query.toLowerCase())
);

// .every() - boolean - test whether all elements pass provided function
const everyWords = ['dog', 'dig', 'log', 'bag', 'wag'];
const everyResult = everyWords.every((word) => word.length === 3);
console.log(everyResult);
// .some() - boolean - returns true if any element passes provided function test
const someResult = everyWords.some((word) => word[0] === 'd');
console.log(someResult);
const goodRatings = books.every((book) => book.rating >= 3.5);
console.log(goodRatings);
const any2Authors = books.some((book) => book.authors.length === 2);
console.log(any2Authors);

// .sort() - does not sort int numerical order by default, callback must be used...
// mutates array - use slice() with no params to create new array
const prices = [400.5, 3000, 99.99, 35.99, 35.99, 12.0, 9500];
console.log(prices.sort()); // sorts by first character
// compare function is required arr.sort(comparFunc(a,b))
/*
if compare returns less than 0 sort a before b
if compare returns 0 leave a and b unchanged with respect to each other
if compare returns greater than 0 sort b before a
*/
console.log(prices.sort((a, b) => a - b)); // sorts in ascending order
console.log(prices.sort((a, b) => b - a)); // sorts in descending order
// sort an object
books.sort((a, b) => a.rating - b.rating);
console.log(books);

// .reduce() - reduces array of values to a single value
console.log(
  [3, 5, 7, 9, 11].reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
);
// find max value
const grades = [87, 64, 96, 88, 99, 73, 70, 64];
const maxGrades = grades.reduce((max, currentValue) => {
  if (currentValue > max) return currentValue;
  return max;
});
console.log(maxGrades);
const maxGrade2 = grades.reduce((max, currentValue) => {
  return Math.max(max, currentValue);
});
console.log(maxGrade2);
const minGrade = grades.reduce((min, currentValue) =>
  Math.min(min, currentValue)
);
console.log(minGrade);
// 3rd param of initial value, sets initial value of accumulator .reduce(acc, cur, 100)
// defaults to 1st element if not specified!

// use reduce to tally - set intial value as object
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y', 'n'];
let voteTally = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});
console.log(voteTally);

voteTally = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(voteTally);

console.log(
  books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if (!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book);
    return groupedBooks;
  }, {})
);
