/* SPOT Study Session

Participants
- Miles Abbason
- Michael C
- Alex
- Anthony Whitfield
- Aryan Binazir
- Laurent Staub
- HyoSung

JS129 - Study Guide Bullets

Specific Topics of Interest
- Objects, object factories, constructors and prototypes, OLOO, and ES6 classes
- Methods and properties; instance and static methods and properties
- Prototypal and pseudo-classical inheritance
- Encapsulation
- Polymorphism
- Collaborator objects
- Single vs multiple inheritance
- Mix-ins; mix-ins vs. inheritance
- Methods and functions; method invocation vs. function invocation
- Higher-order functions
- The global object
- Method and property lookup sequence
- Function execution context and this
- Implicit and explicit execution context
- Dealing with context loss
- call, apply, and bind
- Object.assign and Object.create
- Built-in constructors like Array, Object, String and Number
- Reading OO code

Tear through the course first and then go back and know where everything fits.

- Prototypal and pseudo-classical inheritance
  - prototypal is how JavaScript works
  - pseudo-classical is an attempt to mimic class structure of other OO languages

- Constructor
  - a function that returns an object ...
*/

// function Car(name) {
//   this.name = name;
//   this.start();
// }

// let honda = new Car();

// --> car instance {}
// honda
// toyota
// ford


// {} -> {} -> {}

/*
2.1 The constructor is invoked with `new`.
2.2 The JS runtime creates a new object that inherits from the constructor's prototype object.
2.3 The new object is assigned to `this` within the function body.
2.4 The code in the function body is executed.
2.5 The function returns the object referenced by `this` unless the function returns an explicit object.
*/

/* Factory Functions */
function car(color, year) {
  return {
    color: color,
    year: year,
    start: function () {},
  };
}

let honda = car('red', 1990);

console.log(Object.getPrototypeOf(honda)); // [Object: null prototype] {}

/* Object.create()

The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. */

/* JavaScript is single-inheritance 

- mix-in mentioned */


function Vehicle() {

}

Vehicle.prototype.engine = function () {}



function Car(name) {
  this.name = name;
  this.start();
}

Car.prototype = Object.create(Vehicle.prototype);

let honda = new Car(); name

Object.assign(honda, SuperComputer)

--> car instance {}
honda
toyota
ford

/* OLOO Pattern
Objects Linking to Other Objects */

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
let willy = Object.create(human).init('willy', 38);

console.log(willy.eat()); // willy is eating.


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

willy.eat();
willy.sleep();

clark.fly();
clark.sleep()

willyJr.eat();
willyJr.sleep();
willyJr.temper();
willyJr.fly();
