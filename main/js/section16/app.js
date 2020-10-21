// the call stack
// last in, first out - think stack of plates!
/*
when script calls function, it gets added to the call stack and the interpreter then starts carrying out the function
Any functions called by the function are added to the call stack further up and are run when their calls are reached
when the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the code
*/
const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log(isRightTriangle(3, 4, 5));

// call stack debugging in Dev Tools
// console -> Sources -> select js file and add breakpoint to watch call stack as code is stepped through
// js is single threaded - only uses one thread of cpu - only runs one line of code at time

// how asynchronous callbacks actually work - the browser/node does the work
console.log('I print first');
setTimeout(function () {
  console.log('I print third!');
}, 3000); // timer is set by the browser (Web APIs) - after 3 seconds browser puts this function on top of the call stack
console.log('I print second');
