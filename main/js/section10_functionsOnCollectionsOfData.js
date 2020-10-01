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
// .some() - boolean -
