/* JS120 - OOJS > Objects > 2. Buggy Code 2

A grocery store uses a JavaScript function to calculate discounts on various items. They are testing out various percentage discounts but are getting unexpected results. Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. Then, modify the code so that it produces the correct results. */

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function (percent) {
    let discount = (this.price * percent) / 100;

    return this.price - discount;
  },
};

console.log(item.discount(20)); // should return 40
console.log(item.discount(50)); // should return 25
console.log(item.discount(25)); // should return 37.5

/* The problem is that the `discount` method is mutating the `item` object. Since objects are mutable, each change made to the property of the `item` object is compounded every time the `discount` method is called. To fix this, the `discount` method should be modified so that it doesn't mutate the object. */

/* Create a class Rectangle. The constructor should take 2 arguments which represent width and length respectively. The formula for a rectangle's area is: width * length. Implement the class so that the output from the example below is correct. */

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength () {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

/* In the constructor function, we create the properties `width` and `length` and assign to them the values of parameters with the same name. To access the value of each property with the methods, we use the `this` keyword in front of each property name. */

/* Create a class Rectangle. The constructor should take 2 arguments which represent width and length respectively. The formula for a rectangle's area is: width * length. Implement the class so that the output from the example below is correct. */

let Rectangle = class {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

/* In the constructor function, we create the properties `width` and `length` and assign to them the values of parameters with the same name. To access the value of each property with the methods, we use the `this` keyword in front of each property name. */

/* 7.1 What does the following code log to the console? Try to answer without running the code. Can you explain why the code produces the output it does? */

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },

  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle (width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area); // => ?
console.log(rect1.perimeter); // =?

/* The code logs `NaN` and `NaN`. The value of `this` within the `RECTANGLE.area` and `RECTANGLE.perimeter` methods get set to the `RECTANGLE` object when they are called. Since `RECTANGLE` doesn't define `width` and `height` properties, the property accesses both return `undefined`. Since mathematical operations on `undefined` produce a value of `NaN`, the return value of the methods is `NaN`. */

/* 7.2 How would you fix the problem in the code from problem 1? */

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this); // <-- fix
  this.perimeter = RECTANGLE.perimeter.call(this); // <-- fix
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);      // => 6
console.log(rect1.perimeter); // => 10

/* ### 7.3 Write a constructor function called `Circle` that takes a radius as an argument. You should be able to call an `area` method on any objects created by the constructor to get the circle's area. Test your implementation with the following code */

const Circle = function(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
}

// given code
let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

/* 7.4 What will the following code log to the console and why? */


function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/* The code will log `true`. Even though we define the `swingSword` method on the prototype after we create `ninja`, all objects created by the `Ninja` constructor share the same prototype object. Thus, when we define `swingSword`, it immediately becomes available to the `ninja` object. */

/* 7.5 What will the following code output and why? Try to answer without running the code */

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  }
};

console.log(ninja.swingSword());

/* The code will output `TypeError: ninja.swingSword is not a function`. Since `Ninja.prototype` has been reassigned to an entirely new object it doesn't mutate the original prototype object. However, the prototype for the `ninja` object does not change; it's still the original prototype defined during the constructor's invocation. Thus, JavaScript can't find the `swingSword` method in the prototype chain of `ninja`. */

/* 6. Implement the method described in the comments below: */

function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`

/* This pattern of "chainable" methods invocations and property accesses on an object require that methods defined on the prototype always return the context object (in this case, `ninjaA` and `ninjaB`. */

/* 7. In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function: */

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();

console.log(ninjaA.constructor === ninjaB.constructor) // => true

/* 8. Since a constructor is just a function, you can call it without the new operator. However, that can lead to unexpected results and errors, especially for inexperienced programmers. Write a constructor function that you can use with or without the new operator. The function should return the same result with either form. Use the code below to check your solution: */

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last)
  }

  this.name = `${first} ${last}`
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe