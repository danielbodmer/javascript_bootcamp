// for loops
for (let i = 0; i < 10; i++) {
  console.log('Hello!');
}

for (let num = 1; num <= 20; num++) {
  console.log(`${num} x ${num} = ${num * num}`);
}

for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}

// for loops and arrays
const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

const examScores = [98, 77, 84, 91, 57, 66];
for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}

// looping over objects in arrays
const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86,
  },
  {
    firstName: 'Artemis',
    grade: 97,
  },
  {
    firstName: 'Hera',
    grade: 72,
  },
  {
    firstName: 'Apollo',
    grade: 90,
  },
];

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstName} : ${student.grade}`);
}

// loop over string in reverse
const word = 'stressed';
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
  console.log(reversedWord);
}

// average
let sumOfGrades = 0;
for (let i = 0; i < myStudents.length; i++) {
  grade = myStudents[i].grade;
  sumOfGrades += grade;
}

const averageGrade = sumOfGrades / myStudents.length;
console.log(`The average grade of the students is ${averageGrade}`);

// nested for loops
let str = 'LOL';
for (let i = 0; i <= 4; i++) {
  console.log('Outer', i);
  for (let j = 0; j < str.length; j++) {
    console.log('\tInner: ', str[j]);
  }
}

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
console.log(`The total score is: ${totalScore}`);

// while loops
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`You guessed: ${guess}. Incorrect!`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`The correct number was ${target}`);

// break keyword - exit out of a loop (more common in while loops)
// on nested loops, only breaks the current loop, not outer loops
while (true) {
  if (guess === target) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congrats! You Win!!!');

// for...of loop - iterate over arrays (elements not indices)
/*
for (variable of iterable) {
  statement
}
*/
let subReddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let sub of subReddits) {
  console.log(sub);
}
for (let char of 'danny') {
  console.log(char.toUpperCase());
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    sum += row[j];
  }
  console.log(`${row} total: ${sum}`);
}

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} total: ${sum}`);
}

// for of with objects (not iterable!) - have to loop over keys or values instead
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5,
};
for (let movie of Object.keys(movieReviews)) {
  console.log(movie);
}
for (let review of Object.values(movieReviews)) {
  console.log(review);
}
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}
const ratings = Object.values(movieReviews); // turn to iterable array
let total = 0;
for (let r of ratings) {
  total += r;
}
console.log(`Average rating: ${total / ratings.length}`);

// for in - iterate over index (keys)!
/*
for (variable in object) {
  statement
}
*/
const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
};
for (let key in jeopardyWinnings) {
  console.log(key);
}
for (let key in jeopardyWinnings) {
  console.log(jeopardyWinnings[key]);
}
let winnings = 0;
for (let key in jeopardyWinnings) {
  winnings += jeopardyWinnings[key];
}
console.log(`Total Winnings: ${winnings}`);
