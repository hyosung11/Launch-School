# JS129 Written Assessment Answers Practice 20220620

## Q1 10:04 - 10:09

1. The `buzz` and `woody` objects are collaborators with the `andy` object.

2. `playWithToys`

```js
let andy = {
  name: 'Andy Davis',
  toys: [],

  playWithToys() {
    this.toys.forEach(toy => toy.play());
  }
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

andy.playWithToys();
```

## Q2 10:12 - 10:17

In Example 1, the execution context of `introduce` is the `sarah` object. On line 12, method invocation syntax is used to call the `introduce` method on the `sarah` object. The implicit execution context is the calling object, in this case `sarah`. Thus, `this.name` references the `name` property of the `sarah` object.

In example 2, the execution context of `introduce` is the `paul` object. On line 12, the `call` method is used to explicitly bind the `introduce` method to the `paul` object. Thus, `this.name` references the `name` property of the `paul` object and not the `sarah` object.

## Q3 10:20 - 10:26

```js
function Book(title, author) {
  this.title = title;
  this.author = author;
  Book.titles.push(this.title);
}

Book.prototype.read = function () {
  console.log(`Reading ${this.title}`);
};

Book.allTitles = function() {
  return Book.titles;
}

Book.titles = [];

let book1 = new Book('Tiny Habits', 'BJ Fogg');
let book2 = new Book('KSS', 'Pavel');

console.log(Book.allTitles()); // [ 'Tiny Habits', 'KSS' ]
```

## Q4 10:27 - 10:30

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
let book2 = new Book('KSS', 'Pavel');

console.log(Book.allTitles()); // [ 'Tiny Habits', 'KSS' ]
```

## Q5 10:41 - 10:49 with interruptions

Snippet 1 logs `{ foo: [Function: foo] }`, where `this` is a reference to the `obj` object. On the last line, method invocation is used to call the `foo` method with `obj` as the calling object. Thus, `this` references the `obj` object.

Snippet 2 logs a reference to the `global` object in Node. Here, assigning the `foo` variable to `obj.foo` strips the method of its context. On the last line, `foo` is invoked using function syntax whose implicit execution context is the global object.

Snippet 3 logs `{ bar: 42, foo: [Function: foo] }`, a reference to the `obj2` object. On the last line, the `call` method is used to explicitly bind the `foo` method to the `obj2` object. Thus, `this` references the `obj2` object when the method is invoked.

## Q6 11:10 - 11:17

The code logs `'completely different'`. On line 13, the `qux` variable is assigned to the return value of using the `bind` method to explicitly and permanently bind the `foo` method to the `obj.bar` object. When `qux` is invoked as a function on the last line, the `this` keyword references the `bar` object because of the use of `bind`. Thus, `this.a` and `this.b` reference the `a` and `b` properties of the `bar` object and we get `'completely different'` as a result.

## Q7 09:10

On line 17, `france.getName()` is invoked with method call syntax. Since the `france` instance object doesn't have its own `getName()` method, JavaScript looks up the prototype chain and finds the `getName()` method on the `Country` constructor's prototype object. On line 14, when the `Country` constructor is invoked with the `new` keyword, the argument `'France'` is assigned to the `name` property of the `france` instance object. Thus, when the `getName()` method is invoked, `this.name` logs `'France'`.

On line 18, when `france.getLanguage()` is invoked, the value of `language` has been set to `'Spanish'` by the `Country` constructor when the `spain` instance is created on line 15. `france.getLanguage()` eventually resolves to `Country.language` on line 3 which is a static method that sets the value of `language` to the latest instance.

If I were giving an assessment answer, I'd go into detail about how `book1.getAuthor()` eventually resolves to `Book.author`. I'd also be more specific about when and how each string value gets assigned to an object property (Like how 'Tiny Habits' is assigned to the title instance property for book1 because it was passed in as an argument to the Book constructor on line 14.)

## Q8 9:52 - 9:57

```js
// object inheriting directly from other objects
let a = {
  foo: 1,
  bar: 2,
}

let b = Object.create(a);
console.log(b.foo) // 1
```

```js
// classes or types inheriting from other classes or types
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {}

let car = new Car('Tesla', 'X');
console.log(car.make) // Tesla
```

## Q9 10:00 - 10:04

String primitives are created by using quotes (single or double) or back-tick characters to define a string's value. We must use the `String` constructor to create a `String` object. A string primitive's type is `string`, but the `String` object type is `object`. When you try to access a property or invoke a method on a string primitive, JavaScript wraps the string primitive in a `String` object behind the scenes. Once JavaScript has wrapped your string primitive in a `String` object, it then uses the object to access the property or call the method. When the wrapping object has served its purpose, JavaScript discards it.

## Q10 10:10 - 10:17

In the first snippet on line 12, `Dog.prototype` is assigned to reference `Animal.prototype` which means they reference the same object. Therefore, if we mutate one, the change will occur in the other one. They are no longer different prototypes and do not have an inheritance relationship. If we want to create a prototypal relationship, we need to use `Object.create()` so that `Dog.prototype` inherits from `Animal.prototype` as show on the last line of the second snippet.

## Q11 10:21 - 10:26

```js
function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {
      console.log(`Solving`);
    }
  }
}

function createHumanoid(intelligence, model) {
  let humanoid = createRobot(intelligence, model);
  humanoid.walk = function() {
    console.log(`Walking`);
  };
  humanoid.talk = function() {
    console.log(`Talking`);
  };

  return humanoid;
}

let laurent = createHumanoid('high', 'supreme');
laurent.solve(); // Solving
laurent.talk(); // Talking
```

## Q12 10:29 - 10:39

```js
function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {
      console.log(`Solving`);
    }
  }
}

const walkMixin = {
  walk() {
    console.log(`Walking`);
  }
}

const talkMixin = {
  talk() {
    console.log(`Talking`);
  }
}

function createHumanoid(intelligence, model) {
  let humanoid = createRobot(intelligence, model);
  Object.assign(humanoid, walkMixin, talkMixin);
  return humanoid;
}

let alex = createHumanoid('high', 'supreme');
alex.solve(); // Solving
alex.walk(); // Walking

function createHuman(name, age) {
  let human = {
    name,
    age,
  }
  Object.assign(human, walkMixin, talkMixin);
  return human;
}

let laurent = createHuman('Laurent', 44);
laurent.walk() // Walking
```

## Q13 11:00 - 11:03

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

## Q14 11:08 - 11:10

The code logs `false`. `str1` and `str2` are separate objects created as instances of the `String` constructor which was invoked with the `new` keyword. Since they are separate objects, they are not strictly equal and reference different locations in memory.

## Q15 11:28 - 11:47

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
  }
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

class Bard extends Magician {
  createPotion() {
    console.log(`Potion ready!`);
  }
}

let warrior = new Warrior('Antonio');
// console.log(warrior.strength);
// warrior.attachArmor();
// console.log(warrior.health);
// console.log(warrior.hurt(50));
// console.log(warrior.health);

let paladin = new Paladin('Anakin');
// console.log(paladin.name);
// paladin.attachArmor();
// paladin.castSpell('Yahoo!');

let magician = new Magician('Rasputin');
console.log(magician.intelligence);
magician.hurt(20);
console.log(magician.health);

let bard = new Bard('Homer');
bard.createPotion();
```