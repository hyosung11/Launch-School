/* JS 120-129 & 225-229 SPOT Study Session

Participants
- Elaine Vuong
- Aryan Binazir
- Michael Cremononi
- Manuel Alingog
- HyoSung

Elaine's study process
- general overview
- go through each chapter because each builds on the next chapter
- log output to the console
*/

// What does this code snippet log to the console? Explain why and be precise. What concept does this demonstrate?


let protoObj = {'a': 1, 'b': 2};
let obj = Object.create(protoObj);
protoObj.b = 5;

obj.b = 18

console.log(protoObj.b)
console.log(obj.b); // What does this log to the console and why?

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// Elaine has recently learned about the Global Object and undeclared variables but she's forgotten the rules! Can you help her understand what's going on in the code snippet below? 

foo = 'bar'
console.log(foo);        // logs bar
console.log(global.foo); // logs bar

let foo = {
  bar: function() {
    console.log(this);
  }
};

console.log(foo.bar()); // What does this logs to the console and why?
// => { bar: [Function: bar] }
// What does line 7 log to the console and why? Explain what concept this demonstrates.

function logNum() { console.log(this.num) };
let obj = { num: 42 };
obj.logNum = logNum;
obj.logNum(); // logs ? => 42

// What does line 4 log to the console? Explain with precision and sufficient detail, paying attention lines 3 and lines 4.

let foo = { a: 1, b: 2 };
let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};
console.log(bar.add(foo));      // logs ? => 'abcdef'
console.log(bar.add.call(foo)); // logs ? => 3

// Take a look at the following code snippet. What does line 9 and line 10 log to the console?

let ninjaA;
{
  const Ninja = function() {
    this.swung = false;
  };
  ninjaA = new Ninja();
}
let ninjaB = Object.create(ninjaA);
console.log(ninjaA.constructor === ninjaB.constructor) // true

// Given the code below,  create a ninjaB object without direct access to the Ninja constructor function. Explain your logic and why your code works.

/*
Object.create()
The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
*/

let ninjaA;
{
  const Ninja = function() {
    this.swung = false;
  };
  ninjaA = new Ninja();

  console.log(Object.getPrototypeOf(ninjaA) === Ninja.prototype)
}

let ninjaB = {}

Object.setPrototypeOf(ninjaB, Object.getPrototypeOf(ninjaA)) 

console.log(Object.getPrototypeOf(ninjaA) === Object.getPrototypeOf(ninjaB))

/*
The key thing to realize is that instances created by a Constructor function, inherit from the Constructor's Function prototype, AND that all function objects have a function prototype, which contains a constructor property. ninjaA inherits from the object referenced by Ninja.prototype. Recall that Ninja.prototype also defines a property called constructor; which contains a reference to the Ninja constructor function itself. Since ninjaA inherits from Ninja.prototype, we can invoke the Ninja constructor function by the following line of the code: new ninjaA.constructor(). This returns a new instance of Ninja.
*/
