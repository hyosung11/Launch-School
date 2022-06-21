// let andy = {
//   name: 'Andy Davis',
//   toys: [],

//   playWithToys() {
//     this.toys.forEach(toy => toy.play());
//   }
// };

// let woody = {
//   name: 'Sheriff Woody',
//   play() {
//     console.log('Reach for the sky!');
//   },
// };

// let buzz = {
//   name: 'Buzz Lightyear',
//   play() {
//     console.log('To Infinity, And Beyond!');
//   },
// };

// andy.toys.push(woody);
// andy.toys.push(buzz);

// andy.playWithToys();

// Example 1
// let sarah = {
//   name: 'Sarah',
//   introduce() {
//     console.log(`Hi, my name's ${this.name}`);
//   },
// };

// let paul = {
//   name: 'Paul',
// };

// sarah.introduce();

// Example 2
// let sarah = {
//   name: 'Sarah',
//   introduce() {
//     console.log(`Hi, my name's ${this.name}`);
//   },
// };

// let paul = {
//   name: 'Paul',
// };

// sarah.introduce.call(paul);

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   Book.titles.push(this.title);
// }

// Book.prototype.read = function () {
//   console.log(`Reading ${this.title}`);
// };

// Book.allTitles = function() {
//   return Book.titles;
// }

// Book.titles = [];

// let book1 = new Book('Tiny Habits', 'BJ Fogg');
// let book2 = new Book('KSS', 'Pavel');

// console.log(Book.allTitles()); // [ 'Tiny Habits', 'KSS' ]

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     Book.titles.push(this.title);
//   }

//   static titles = [];

//   static allTitles() {
//     return Book.titles;
//   }

//   read() {
//     console.log(`Reading ${this.title}`);
//   }
// }

// let book1 = new Book('Tiny Habits', 'BJ Fogg');
// let book2 = new Book('KSS', 'Pavel');

// console.log(Book.allTitles()); // [ 'Tiny Habits', 'KSS' ]

// class Fruit {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     Fruit.names.push(this.name);
//   }

//   static names = [];

//   static allNames() {
//     return Fruit.names; // or return this.names
//   }
// }

// let fruit1 = new Fruit('apple', 'red');
// let fruit2 = new Fruit('orange', 'orange');

// console.log(Fruit.allNames()); // [ 'apple', 'orange' ]

// let obj = {
//   foo() {
//     return this;
//   },
// };

// console.log(obj.foo()); // { foo: [Function: foo] }

// let obj = {
//   foo() {
//     return this;
//   },
// };

// let foo = obj.foo;
// console.log(foo());

// let obj = {
//   foo() {
//     return this;
//   },
// };

// let obj2 = {
//   bar: 42,
//   foo() {
//     console.log(this.bar);
//   },
// };

// console.log(obj.foo.call(obj2));

// let obj = {
//   a: 'hello',
//   b: 'world',
//   bar: {
//     a: 'completely',
//     b: 'different',
//   },
//   foo: function () {
//     return `${this.a} ${this.b}`;
//   },
// };

// let qux = obj.foo.bind(obj.bar);
// console.log(qux()); // completely different

// function Book(title, author) {
//   this.title = title;
//   Book.author = author;
// }

// Book.prototype.getTitle = function() {
//   return this.title;
// }

// Book.prototype.getAuthor = function() {
//   return this.constructor.author;
// }

// let book1 = new Book('Tiny Habits', 'BJ Fogg');
// let book2 = new Book('Kettlebells', 'Pavel'); // (line 15)

// console.log(book1.getTitle());   // Tiny Habits (line 17)
// console.log(book1.getAuthor());  // Pavel (line 18)

// On line 17, `book1.getTitle()` is invoked using method call syntax. Since `book1` doesn't have its own getTitle method, it looks up the prototype chain and delegates the call to the `Book` constructor object that has the `getTitle` method. `'Tiny Habits'` is passed as the argument for the title parameter and this.title logs `'Tiny Habits'`.

// On line 18, when `book1.getAuthor()` is invoked, the value of `author` has been set to 'Pavel' by the `Book` constructor when the `book2` instance is created on line 15. This is because on line 3, Book.author is a static method that sets the value of author to the latest instance.

// function Country(name, language) {
//   this.name = name;
//   Country.language = language;
// }

// Country.prototype.getName = function() {
//   return this.name;
// }

// Country.prototype.getLanguage = function() {
//   return this.constructor.language;
// }

// let france = new Country('France', 'French')
// let spain = new Country('Spain', 'Spanish')
// let italy = new Country('Italy', 'Italian')

// console.log(france.getName());      // France
// console.log(france.getLanguage());  // Spanish

// let a = {
//   foo: 1,
//   bar: 2,
// }

// let b = Object.create(a);
// console.log(b.foo) // 1

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
// }

// class Car extends Vehicle {}

// let car = new Car('Tesla', 'X');
// console.log(car.make);

// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function () {
//     // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Animal.prototype;

// function createRobot(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {
//       console.log(`Solving`);
//     }
//   }
// }

// function createHumanoid(intelligence, model) {
//   let humanoid = createRobot(intelligence, model);
//   humanoid.walk = function() {
//     console.log(`Walking`);
//   },
//   humanoid.talk = function() {
//     console.log(`Talking`);
//   }

//   return humanoid;
// }

// let laurent = createHumanoid('high', 'supreme');
// laurent.solve(); // Solving
// laurent.talk(); // Talking

// Q11
// function createRobot(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {
//       console.log(`Problem solved.`);
//     }
//   }
// }

// let robot = createRobot('low', 'abc');
// robot.solve();
// console.log(robot.intelligence);

// function createHumanoid(intelligence, model) {
//   let humanoid = createRobot(intelligence, model);
//   humanoid.walk = function() {
//     console.log(`Walking`);
//   };
//   humanoid.talk = function() {
//     console.log(`Talking`);
//   }
//   return humanoid;
// }

// let einstein = createHumanoid('high', 'experimental');
// einstein.solve();
// einstein.walk();
// console.log(einstein.intelligence);

// Q12
function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {
      console.log(`Problem solved.`);
    },
  };
}

const walk = {
  walk() {
    console.log(`Walking`);
  }
}

const talk = {
  talk() {
    console.log(`Talking`);
  }
}

function createHumanoid(intelligence, model) {
  let humanoid = createRobot(intelligence, model);
  Object.assign(humanoid, walk, talk);
  return humanoid;
}

let einstein = createHumanoid('high', 'experimental');
einstein.solve();
einstein.walk();
console.log(einstein.intelligence);

function createHuman(name, age) {
  let human = {
    name,
    age,
  }
  Object.assign(human, walk, talk);
  return human;
}

let pavel = createHuman('Pavel', 55);
pavel.walk();
console.log(pavel.name);