# JS129 Written Assessment Questions and Answers

## Question 1 (4 points)

Examine the code below:

```js
let andy = {
  name: 'Andy Davis',
  toys: [],
};

let woody = {
  name: 'Sheriff Woody',
  play() {
    console.log('Reach for the sky!');
  },
};

let buzz = {
  name: 'Buzz Lightyear',
  play() {
    console.log('To Infinity, And Beyond!');
  },
};

andy.toys.push(woody);
andy.toys.push(buzz);
```

1. Describe the relationship between the `andy` object and the `buzz` and `woody` objects.
2. Implement a method, `playWithToys`, in the `andy` object. The method should invoke the `play` method of all the toys for that object.

### Q1 Answer (1/4)

1. The `andy` object and the `buzz` and `woody` objects are all created using object literal syntax.

```js
let andy = {
  name: 'Andy Davis',
  toys: [],

  playWithToys() {
    return this.toys.play;
  }
};
```

### Q1 Response

Abbie Papka (TA)
16 days ago

Yes, all three objects are created using object literal syntax, but there is a specific relationship between them. Look closer to see if you can identify it.

Your `playWithToys` method should call the play method for **each** toy. Can you modify it accordingly?

### Q1 Revised Answer

1. The `buzz` and `woody` objects are collaborators with the `andy` object.

2. Implement the `playWithToys` method:

```js
let andy = {
  name: 'Andy Davis',
  toys: [];

  playWithToys() {
    this.toys.forEach(toy => toy.play());
  }
}
```

## Question 2 (5 points)

Examine the two code examples below:

Example 1

```js
let sarah = {
  name: 'Sarah',
  introduce() {
    console.log(`Hi, my name's ${this.name}`);
  },
};

let paul = {
  name: 'Paul',
};

sarah.introduce();
```

Example 2

```js
let sarah = {
  name: 'Sarah',
  introduce() {
    console.log(`Hi, my name's ${this.name}`);
  },
};

let paul = {
  name: 'Paul',
};

sarah.introduce.call(paul);
```

For each example, identify the execution context of `introduce`. Explain how you determined the execution context, and outline the difference between the execution context in the two examples.

### Q2 Answer (5/5)

For Example 1, the execution context of `introduce` is the `sarah` object. This is because `sarah.introduce()` uses method call syntax whose implicit execution context is the calling object.

For example 2, the execution context of `introduce` is the `paul` object. Here, the `call` method is used to explicitly bind the `paul` object to the invocation on line 12.

## Question 3 (5 points)

The code below defines a constructor function, `Book`, and adds a method, `read`, to the prototype of that constructor:

```js
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.read = function() {
  console.log(`Reading ${this.title}`);
};
```

Objects created by this constructor have `title` and `author` properties, as well as a `read` method. However, we now need to add an `allTitles` method that returns an array of the titles of all the books created by the constructor. Think about where the array and the method should live and then update the code to create the array and implement the method.

### Q3 My Answer (4/5)

```js
function Book(title, author) {
  this.title = title;
  this.author = author;
  Book.allTitles.push(this);
}

Book.prototype.read = function() {
  console.log(`Reading ${this.title}`);
};

Book.allTitles = [];
```

### Q3 Response

Abbie Papka (TA)
16 days ago

Good job implementing the logic around recording all the books created by the constructor. You are just missing one piece:

  > `allTitles` method that returns an array of the titles of all the books created by the constructor.

Please add an appropriate method that returns your array of all the titles. (You might also consider modifying your array to be called `titles` so that the name `allTitles` is available for your method.)

### Q3 Revised Answer

```js
function Book(title, auther) {
  this.title = title;
  this.author = author;
  Book.titles.push(this.title);
}

Book.prototype.read = function() {
  console.log(`Reading ${this.title}`);
}

Book.allTitles = function() {
  return Book.titles;
}

Book.titles = [];

let book1 = new Book('Tiny Habits', 'BJ Fogg');
let book2 = new Book('Kettlebell Simple & Sinister', 'Pavel');
console.log(Book.allTitles());  // ['Tiny Habits', 'Kettlebell Simple & Sinister'];
```

## Question 4 (3 points)

Rewrite your answer from the previous question using classes.

### Q4 Answer (2/3)

```js
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  read () {
    console.log(`Reading ${this.title}`);
  };

  static allTitles() {
    Book.allTitles.push(this);
  }
}

Book.allTitles = [];
```

### Q4 Response

Abbie Papka (TA)
16 days ago

I recommend the same thing with names here: to name your array `titles` so that `allTitles` is available for the method that *returns* all the titles. Here you've mixed up where you should be adding instances of books to the `titles` array. Please modify your code so that each instance will be added to the `titles` array when the constructor is called. Please also adjust your `allTitles` method to return the `titles` array.

### Q4 Revised Answer

```js
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    Book.titles.push(this.title);
  }

  static titles = [];

  static allTitles() {
    return Book.titles;
  }

  read() {
    console.log(`Reading ${this.title}`);
  }
}

let book1 = new Book('Tiny Habits', 'BJ Fogg');
let book2 = new Book('Kettlebell Simple & Sinister', 'Pavel');
console.log(Book.allTitles());  // ['Tiny Habits', 'Kettlebell Simple & Sinister'];
```

## Question 5 (6 points)

Examine the following code snippets:

snippet 1

```js
let obj = {
  foo() {
    return this;
  }
};

console.log(obj.foo());
```

snippet 2

```js
let obj = {
  foo() {
    return this;
  }
}

let foo = obj.foo;
console.log(foo());
```

snippet 3

```js
let obj = {
  foo() {
    return this;
  }
}

let obj2 = {
  bar: 42,
  foo() {
    console.log(this.bar);
  }
};

console.log(obj.foo.call(obj2));
```

What does each snippet log, and why does it log what it does?

### Q5 My Answer (6/6)

Snippet 1 logs `{ foo: [Function: foo] }`, a reference to the `obj` object because `obj.foo` uses method invocation which implicitly sets the execution context to the calling object. Thus, the `this` keyword references the `obj` object.

Snippet 2 logs the global object in Node. Assigning the `foo` variable to the return value of `obj.foo` strips the `foo` method of its execution context. On the last line, `foo` is invoked using function invocation. Thus its implicit execution context is the global object.

Snippet 3 logs `{ bar: 42, foo: [Function: foo] }`, a reference to the `obj2` object. On the last line, the `call` method is used to explicitly bind the `foo` method to the `obj2` object.

## Question 6 (5 points)

What does the following code do? Explain why it does that.

```js
let obj = {
  a: "hello",
  b: "world",
  bar: {
    a: "completely",
    b: "different",
  },
  foo: function() {
    return `${this.a} ${this.b}`;
  },
};

let qux = obj.foo.bind(obj.bar);
console.log(qux());
```

### Q6 My Answer

The code logs `'completely different'`. On line 13, the `qux` variable is assigned to the return value of hard-binding the `foo` method's context using `bind` to the `obj.bar` object. Thus, when `qux` is invoked on line 14, its execution context is the `bar` object because it has been permanently bound.

## Question 7 (3 points)

Examine the code below:

```js
function Country(name, language) {
  this.name = name;
  Country.language = language;
}

Country.prototype.getName = function() {
  return this.name;
}

Country.prototype.getLanguage = function() {
  return this.constructor.language;
}

let france = new Country('France', 'French');
let spain = new Country('Spain', 'Spanish');

console.log(france.getName()); // France
console.log(france.getLanguage()) // Spanish
```

With reference to the `name` and `language` properties, explain precisely why line 17 outputs `'France'` and line 18 outputs `'Spanish'`.

### Q7 My Answer

When a constructor function is invoked with `new`, JavaScript doe the following six things:

1. Creates a new object.
2. Sets `[[Prototype]]` of the new object to the same object as the constructor's `prototype` property.
3. Sets the `constructor` property of the new object to point to the constructor function (the function that created the new object).
4. Sets `this` inside the function to refer to the new object.
5. Invokes the function.
6. Returns the new object implicitly (no `return` expression necessary; explicit return values only override the new object if the return value itself is an object).

On line 17, when `france.getName()` is invoked using method call syntax, since `france` doesn't have its own `getName` method, it looks up the prototype chain and delegates the call to the `Country` constructor object that has the `getName` method. `'France'` is passed as the argument for the `name` parameter and `this.name` logs `'France'`.

On line 18, when `france.getLanguage` is invoked, the value of `language` has been set to `'Spanish'` by the Country constructor when the `spain` instance is created on line 15. This is because on line 3, `Country.language` is a static method that sets the value of `language` to the latest instance.

## Question 8 (4 points)

JavaScript supports two main inheritance patterns. One of these patterns can be described as objects inheriting directly from other objects. The other can be described as classes or types inheriting from other classes or types. For each of these two patterns, provide an example of using that pattern to form an inheritance relationship.

### Q8 My Answer

```js
// objects inheriting directly from other objects
let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this; 
  },
};

let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);
```

```js
// classes or types inheriting from other classes or types
class Rectangle {
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
```

### Q8 Revised Answer

Abbie Papka (TA), 6 days ago

Your example of classes inheriting from other classes or types does not demonstrate inheritance -- only object creation using the class syntax. Can you fix this so there is an inheritance relationship?

```js
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(square.getArea()) // 25
```

## Question 9 (3 points)

What is the difference between string primitives and `String` objects? Explain why you can use a string primitive value to access the properties and methods defined for `String` objects.

### Q9 My Answer

String primitives are created by using quotes (single or double) or back-tick characters to define a string's value. We must use the `String` constructor to create a `String` object. A string primitive's type is `string`, but the `String` object type is `object`. When you try to access a property or invoke a method on a string primitive, JavaScript wraps the string primitive in a `String` object behind the scenes. Once JavaScript has wrapped your string primitive in a `String` object, it then uses the object to access the property or call the method. When the wrapping object has served its purpose, JavaScript discards it.

## Question 10 (3 points)

Examine the following two code snippets. The only difference between them is the last line of each snippet. Are there any problems with either of these approaches that aren't present in the other?

Snippet 1

```js
function Animal(name) {
  // some statements
}

Animal.prototype = {
  speak: function() {
    // some statements
  },
};

function Dog() {}
Dog.prototype = Animal.prototype; // line 12
```

Snippet 2

```js
function Animal(name) {
  // some statements
}

Animal.prototype = {
  speak: function() {
    // some statements
  },
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype); // line 12
```

### Q10 My Answer

I didn't answer this question.

### Q10 Revised Answer

In the first code snippet, on line 12, `Dog.prototype` is assigned to reference `Animal.prototype` which means they reference the same object. Therefore, if we mutate one, the change will occur in the other one. This means they are no longer different prototypes and do not have an inheritance relationship.

If we want to create a prototypal relationship, we can do that as shown on line 12 of the second snippet.

## Question 11 (5 points)

Suppose an application that we're writing needs two kinds of objects: robots and humanoids. Robots have an intelligence level, a model number, and they can solve problems. Humanoids have all the same characteristics and behaviors that a robot has, but they can also walk and talk. Using factory functions, write code that automates the creation of these two types of objects while reusing as much code as possible. Do not use prototypal or pseudo-classical inheritance.

### Q11 My Answer()

```js
function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {}
  }
}

function createHumanoid(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {},

    walk() {},

    talk() {},
  }
}
```

### Response

Is there a way to reuse the `createRobot` function within the `createHumanoid` function? Remember here we are looking for you to reuse as much code as possible.

### Q11 Revised Answer

```js
function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {}
  }
}

function createHumanoid(intelligence, model) {
  let newHumanoid = createRobot(intelligence, model);
  newHumanoid.walk = function() { console.log("Walking") };
  newHumanoid.talk = function() {};
  return newHumanoid;
}

let humanoid = createHumanoid('high', '09JI');
humanoid.walk(); // Walking
```

## Question 12 (5 points)

Suppose we introduced a new type of object to our application: humans. Humans have a name and age and they can also walk and talk. Using factory functions, write the code needed so that human objects can reuse the `walk` and `talk` methods that humanoids use. Both humanoids and humans should get the methods from the same source. As with the previous question, do not use prototypal or pseudo-classical inheritance.

### Q12 My Answer

```js
const Walk = {
  walk() {}
}

const Talk = {
  talk() {}
}

function createHuman(name, age) {
  this.name = name;
  this.age = age;

  Object.assign({}, Walk, Talk)
}
```

### Q12 Response

Here you've used the Constructor prototype syntax in your `createHuman` function so no object is returned by the function when called without `new`.

Your use of mix-ins is on the right track, you just need to fix your `createHuman` function to return the correct object.

### Q12 Revised Answer

```js
function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {}
  }
}

const walk = {
  walk() {
    console.log(`Walking`);
  },
}

const talk = {
  talk() {
    console.log(`Talking`);
  },
}

function createHumanoid(intelligence, model) {
  let newHumanoid = createRobot(intelligence, model);
  Object.assign(newHumanoid, walk, talk);
  return newHumanoid;
}

let humanoid = createHumanoid('high', '09JI');
humanoid.walk(); // Walking
humanoid.talk(); // Talking

function createHuman(name, age) {
  let newHuman = {
    name,
    age,
  };
  Object.assign(newHuman, walk, talk);
  return newHuman;
}

let human = createHuman('Sam', 45);
console.log(human.age); // 45
human.walk(); // Walking
```

## Question 13 (4 points)

Examine the following code snippet:

```js
let greeter = {
  a: 'hello',
  b: 'world',
  greet() {
    function sayHello() {
      console.log(`${this.a} ${this.b}`);
    }

    sayHello();
  }
};

greeter.greet(); // logs 'undefined undefined'
```

We want the `greet` method to log `hello world`. Instead, it logs `undefined undefined`. There are multiple ways to fix this problem. Show two of those fixes.

### Q13 My Answer

```js
let greeter = {
  a: 'hello',
  b: 'world',
  greet() {
    let self = this;
    function sayHello() {
      console.log(`${self.a} ${self.b}`);
    }

    sayHello();
  }
};

greeter.greet(); // logs 'hello world'
```

```js
let greeter = {
  a: 'hello',
  b: 'world',
  greet() {
    let sayHello = () => {
      console.log(`${this.a} ${this.b}`);
    }

    sayHello();
  }
};

greeter.greet(); // logs 'hello world'
```

## Question 14 (3 points)

What does the following code do, and why?

```js
let str1 = new String("Hello, world");
let str2 = new String("Hello, world");
console.log(str1 === str2);
```

### Q14 My Answer

The code logs `false`. The two strings are not identical because `str1` and `str2` reference two different objects that have been created using the `String` constructor.

## Question 15 (7 points)

This exercise asks you to come up with a skeletal OO design for a Role-playing Game.

The application has information about every player's character. They all have a name, health, strength, and intelligence.

Each character, when created, receives:

- a health value of 100.
- a random strength value (between 2 and 12, inclusive).
- a random intelligence value (between 2 and 12 inclusive).

Use a `rollDice` method to determine the random values. This method should not take any arguments.

Only the `heal` and `hurt` methods can change the health value. Each method accepts one argument: the amount of change to apply to the health level. The method `heal` increases the health value by the indicated amount, while `hurt` decreases it.

A player's character can be a warrior, a paladin, a magician, or a bard.

New warriors receive an additional 2 points of strength. The resulting strength range is thus between 4 and 14, inclusive.

New magicians receive an additional 2 points of intelligence. The resulting intelligence range is thus between 4 and 14, inclusive.

Warriors and paladins can both wear armor. They need access to two additional methods: `attachArmor` and `removeArmor`.

Paladins, magicians, and bards can all cast spells. They need access to a `castSpell` method that accepts one argument: the spell.

Bards are a type of magician that can also create potions. They have a `createPotion` method.

Use **classes** to create your design based on the application description. Your classes should show any inheritance relationships, mix-ins, and methods necessary to meet the requirements.

This question is about designing object type relationships and how you organize your constructors, behaviors, and state. Your methods only need to provide enough detail to fulfill the requirements. In some cases, you may be able to omit the method body entirely. Don't include any functionality that we don't describe above.

### Q15 My Answer

```js
class Character {
  constructor(name, health = 100, strength, intelligence) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.intelligence = intelligence;
  }

  rollDice() {}

  heal(increaseHealth) {}

  hurt(decreaseHealth) {}
}

class Warrior extends Character {}

class Paladin extends Character {}

class Magician extends Character {}

class Bard extends Character {}
```

### Q15 Response

It seems like you also maybe ran out of time on this problem.

There are several things missing or incorrect in your code:

All characters should be assigned:

> - a random strength value (between 2 and 12, inclusive).
> - a random intelligence value (between 2 and 12 inclusive).

You need to provide more detail / implementation in these methods so they act as required in the problem description:

- rollDice
- heal
- hurt

Your object relationships need some changes. Reread this portion of the problem description and see what improvements you can find and make:

- New warriors receive an additional 2 points of strength. The resulting strength range is thus between 4 and 14, inclusive.

- New magicians receive an additional 2 points of intelligence. The resulting intelligence range is thus between 4 and 14, inclusive.

- Warriors and paladins can both wear armor. They need access to two additional methods: attachArmor and removeArmor.

- Paladins, magicians, and bards can all cast spells. They need access to a castSpell method that accepts one argument: the spell.

- Bards are a type of magician that can also create potions. They have a createPotion method.

### Q15 Revised Answer

```js
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = this.rollDice();
    this.intelligence = this.rollDice();
  }

  rollDice() {
    return Math.floor(Math.random() * 11) + 2;
  }

  heal(amount) {
    this.health += amount;
  }

  hurt(amount) {
    this.health -= amount;
  }
}

const armor = {
  attachArmor() {
    console.log(`Armor attached.`);
  },

  removeArmor() {
    console.log(`Armor removed.`);
  },
}

const spell = {
  castSpell(spell) {
    console.log(spell);
  }
}

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.strength = this.rollDice() + 2;
  }
}

Object.assign(Warrior.prototype, armor);

class Paladin extends Character {}
Object.assign(Paladin.prototype, armor, spell);

class Magician extends Character {
  constructor(name) {
    super(name);
    this.intelligence = this.rollDice() + 2;
  }
}

Object.assign(Magician.prototype, spell);

class Bard extends Magician {
  createPotion() {
    console.log(`Potion is ready!`);
  }
}

let warrior = new Warrior('Voltaire');
console.log(warrior.name); // Voltaire
console.log(warrior.health); // 100
console.log(warrior.strength); // 8
warrior.attachArmor(); // Armor attached.
warrior.hurt(8);
console.log(warrior.health); // 92
warrior.heal(4);
console.log(warrior.health); // 96

let magician = new Magician('Merlin');
console.log(magician.intelligence); // 14
magician.castSpell(`Cruciatus`) // Cruciatus

let paladin = new Paladin('Yoda');
paladin.removeArmor(); // Armor removed.

let bard = new Bard('Homer');
bard.castSpell('Lightning'); // Lightning
bard.createPotion(); // Potion is ready!
bard.hurt(2);
console.log(bard.health); // 98
```
