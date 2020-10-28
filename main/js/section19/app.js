// prototypes - blueprint object that contains all object methods
// one prototype - i.e. each array created doesn't have a copy of all methods, rather a reference to the array prototype that includes all its methods
// existing methods can be overwritten i.e. Array.prototype.pop = () => code

// add a new method to an existing prototype
String.prototype.grumpus = () => {
  return 'This is a new prototype!';
};

String.prototype.yell = function () {
  return `${this.toUpperCase()}!!!!`;
};

console.log(''.grumpus());
console.log('Hello'.yell());

// Intro to Object Orientated Programming
// Factory Functions - makes and returns object
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  return color;
}

color = new makeColor(255, 42, 5);

console.dir(color);
console.log(color.rgb());
