/* eslint-disable no-constant-condition */
// alert("It's Working!");
console.log('test code')

// eslint-disable-next-line no-self-compare
if (1 === 1) {
  console.log("It's True!")
}

const rating = 1

if (rating === 3) {
  console.log('You are a SUPERSTAR!!!')
} else if (rating === 2) {
  console.log('Meets Expectations')
} else if (rating === 1) {
  console.log('Needs improvement')
} else {
  console.log('Unrated')
}

const num = 37

if (num % 2 !== 0) {
  console.log(`${num} is an odd number`)
}

let highScore = 1430
const userScore = 1500

if (userScore >= highScore) {
  console.log(`Congrats! You have a new high score of ${userScore}`)
  highScore = userScore
} else {
  console.log(
    `Good game, your score of ${userScore} did not beat the highscore of ${highScore}`
  )
}

const password = 'abanana'

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('Valid password!')
  } else {
    console.log('Password is long enough but must not contain spaces.')
  }
} else {
  console.log('Password must be longer!')
}

// truthy and falsey values
/*
Falsey Values:
false
0
"" (empty string)
null
undefined
NaN

everything else is truthy!!
*/

// operator precedence
// ! && ||

// eslint-disable-next-line no-self-compare
if (1 <= 4 && 'a' === 'a') {
  console.log('This was true')
}

if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log('Valid Password!')
} else {
  console.log('INVALID PASSWORD')
}

const numGuess = 3

if (numGuess >= 1 && numGuess <= 10) {
  console.log('Number is between 1 and 10')
} else {
  console.log('Please guess a number between 1 and 10')
}

const age = 78

if (age < 6 || age >= 65) {
  console.log('You get in for free!')
} else {
  console.log('You must pay!')
}

const color = 'lilac'

if (color === 'purple' || color === 'lilac' || color === 'violet') {
  console.log('Great Choice!')
}

// switch
const day = 3

switch (day) {
  case 1:
    console.log('Monday')
    break
  case 2:
    console.log('Tuesday')
    break
  case 3:
    console.log('Wednesday')
    break
  case 4:
    console.log('Thursday')
    break
  case 5:
    console.log('Friday')
    break
  case 6:
    console.log('Saturday')
    break
  case 7:
    console.log('Sunday')
    break
  default:
    console.log('Invalid selection')
}

// ternary operator ? : condition ? expIfTrue : expIfFalse
let number = 7
number === 7 ? console.log('odd') : console.log('even')

let status = 'offline'
const colorStatus = status === 'offline' ? 'red' : 'green'
console.log(colorStatus)
