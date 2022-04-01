/* JS129 Written Assessment

15 problems

last two are code problems

creating classes
creating constructor functions

*/
console.log(willy.eat()); //
console.log(willy.sleep()); //

console.log(clark.fly()); //
console.log(clark.sleep()); //

console.log(willyJr.eat()); //
console.log(willyJr.sleep()); //
console.log(willyJr.temper()); //
console.log(willyJr.fly()); //

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
willy.temper = function() {
  console.log(`${this.name} wants his steak!`);
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

// willy.eat(); // => line 34 will output value from `undefiend is eating.` since we dont't call the init method and pass a name argument to the object willy is referencing.

// willy.sleep(); //

// clark.fly(); //
 //clark.sleep(); //

// willyJr.eat(); //
// willyJr.sleep(); //
// willyJr.temper(); //
willyJr.fly(); //

/* JS120 - Object Oriented JavaScriptOO Basics: ClassesHello, Sophie! (part 1)

Hello, Sophie! (part 1)

Using the code from the previous exercise, add a parameter to constructor that provides a name for the Cat object. Assign this parameter to a property called name and use it to log a greeting with the provided name. (You can remove the code that displays I'm a cat!.) */

class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');

