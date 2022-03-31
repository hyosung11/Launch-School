/* Closure

getters
setters

instance property

*/
//OLOO

//Start with the grandparent, which is to be the prototype
let human = {
  init(name, age) {
    this.name = name;
    this.age = age;
    return this; //explicitly returning `this` allows for method chaining below
  },
  eat() {
    console.log(`${this.name} is eating.`);
  },
};

//then can just create another object using the prototype object as arg for Object.create()
let willy = Object.create(human);
willy.sleep = function() {   //can add properties or methods that are specific to this object type
  console.log(`Shh... a sleeping ${this.age} year old.`);
}

let superHuman = Object.create(human);
superHuman.fly = function() {   //can add properties or methods that are specific to this object type
  console.log(`Wow... a flying ${this.age} year old.`)
}

//then another object as sub-type to that sub-type as well
let clark = Object.create(superHuman).init('Clark Kent', 29);

let willyJr = Object.create(willy).init('Willy Jr', '2');
willyJr.temper = function() {
  console.log(`${this.name} wants his coookiiiies!!`);
}

willy.eat(); //
willy.sleep(); //

clark.fly(); //
clark.sleep(); //

willyJr.eat(); //
willyJr.sleep(); //
willyJr.temper(); //
willyJr.fly(); //


// In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

function Ninja() {
  
}

let ninjaA = new Ninja()

// create a ninjaB object
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA) 

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

// In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

function Ninja() {
  
}

let ninjaA = new Ninja()

// create a ninjaB object
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA) 

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true



CoursesJS225 Object Oriented JavaScriptObject Creation Patterns10. Practice Problems: Constructor Functions and Prototypes (1)
Practice Problems: Constructor Functions and Prototypes (1)
What does the following code log to the console?

Copy Code
let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo();

foo.bar();
Foo();

obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);
Solution
What does the following code log to the console?

Copy Code
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
Solution
How do you fix this problem?

Solution
Write a constructor function Circle, that takes a radius as an argument. You should be able to call an area method on the created objects to get the circle's area. Test your implementation with the following code:

Copy Code
let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
Solution
What will the following code log out and why?

Copy Code
let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());
Solution
What will the following code log out and why?

Copy Code
let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());
Solution
Implement the method described in the comments below:

Copy Code
let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true
Solution
In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

Copy Code
let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
Hint
The value assigned to ninjaA is an object that was created using a constructor function (because of the use of the new operator). As such, this object will have a constructor property that points to its constructor function. Think of a way to leverage this property and you will arrive at a solution.

Solution
Solution 1: use Object.create

Copy Code
let ninjaA = (function(){
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor);  // => true
Solution 2: use the constructor function

Copy Code
let ninjaA = (function(){
  function Ninja(){};
  return new Ninja();
})();


// Answers
1. let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

2.
let ninjaB = new ninjaA.constructor;
