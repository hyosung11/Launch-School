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

## Q7 11:18 - 11:26 This question still gives me problems.

On line 17, `france.getName()` is invoked using method call syntax. Since `france` doesn't have its own `getName` method, it looks up the prototype chain and delegates the call to the `Country` constructor's prototype object that has the `getName` method. On line 14, `'France'` is assigned to the `name` instance property for `france` because it was passed as the argument to the `Country` constructor on line 14. Thus, `this.name` logs `'France'`.

On line 18, when `france.getLanguage()` is invoked, the value of `language` has been set to `'Spanish'` by the `Country` constructor when the `spain` instance is created on line 15. `france.getLanguage()` resolves to `Country.language` because on line 3, `Country.language` is a static method that sets the value of `language` to the latest instance.

## Q8 