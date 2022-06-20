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

let france = new Country('France', 'French')
let spain = new Country('Spain', 'Spanish')

console.log(france.getName());      // France
console.log(france.getLanguage());  // Spanish