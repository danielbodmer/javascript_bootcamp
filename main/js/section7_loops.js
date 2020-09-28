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
