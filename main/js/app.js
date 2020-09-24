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
  console.log(`Good game, your score of ${userScore} did /
  not beat the highscore of ${highScore}`)
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
