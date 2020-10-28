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
// Factory Functions - makes and returns object - not the most common way to do this - without using 'new' keyword when assigning to variable, functions are copied for each copy assigned to new variable
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

color = makeColor(255, 42, 5);

console.dir(color);
console.log(color.rgb());
console.log(color.hex());

// constructor functions - use 'new' keyword to instantiate object - turns object into prototype and creates ref to function rather than creation new copies - adds methods to the prototype -
// no return value - and 'this' is used directly in the function
// captialise function name
// using below allows adding of new methods to object prototype Function.prototype.method
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  /*
  this.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }; // gets added to object not prototype
  */
}
// don't use arrow functions for prototypes due to how it interacts with 'this'
Color.prototype.rgbProto = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
}; // adds to prototype but has to be declared outside of original function
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
Color.prototype.rgba = function (alpha = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const newColor = new Color(255, 4, 16);
const newColor2 = new Color(40, 123, 27);

console.dir(newColor);
// console.log(newColor.rgb());
console.log(newColor.rgbProto());
console.log(newColor.rgba(0.3));
console.log(newColor2.hex(), newColor.hex());
console.log(newColor.hex === newColor2.hex); // same memory reference / returns true

// js classes - syntatic sugar for constructor functions
class MakeColor {
  constructor(r, g, b, name = 'new color') {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(alpha = 1.0) {
    return `rgba(${this.innerRGB()}, ${alpha})`;
  }
  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }
  calcHSL() {
    let { r, g, b } = this;
    r /= 255;
    g /= 255;
    g /= 255;

    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    this.h = h;
    this.s = s;
    this.l = l;
  }
}

const c1 = new MakeColor(255, 67, 89, 'tomato');
console.dir(c1);
console.log(c1.name);
console.log(c1.rgb());
console.log(c1.rgba(0.5));
console.log(c1.hex());
console.log(c1.hsl());

// extends, super and sub-classes - share functionality between classes
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  meow() {
    return 'Meowwww!!!';
  }
}

// super()
class Dog extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age); // calls parent constructor
    this.livesLeft = livesLeft;
  }
  bark() {
    return 'Wooof!!';
  }
}

const maude = new Cat('Maude', 5);
console.log(maude.eat());
console.log(maude.meow());
