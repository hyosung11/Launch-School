/* JS120 - OOJS > Function Context > 2. The Franchise

The method franchise.allMovies is supposed to return the following array: 

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules. */

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     });
//   },
// };

// 1. Preserve the context with a variable in outer scope
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return self.name + ' ' + number;
//     });
//   },
// };

// 2. Use `bind`
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }.bind(this));
//   },
// };

// 3. Use an arrow function
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(number => this.name + ' ' + number);
//   },
// };

// 4. Use the optional `thisArg` argument
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, this);
//   },
// };

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function () {
//     let self = this;
//     return [1, 2, 3].map(
//       function (number) {
//         return this.name + ' ' + number;
//       }.call()(self)
//     );
//   },
// };

// console.log(franchise.allMovies());

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/* The code will log `2`. While `baz` does not have its own `foo` property, it inherits the `foo` property from `qux`. Thus, `baz.foo` evaluates to `1` as does  `qux.foo`, so when added together they return `2`. 

Launch School

`qux.foo` returns `1` since `qux` has a `foo` property with that value. However, `baz` doesn't have its "own" copy of the `foo` property. Therefore, JavaScript searches the prototype chain for a `foo` property and finds the property in `qux`. Thus, `baz.foo` is also `1` and the sum of the two values is `2`. */

Object factories return objects that represent data of a specific type and they reuse code.

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.apply(this); // line 8
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a) // => 3

/* The value of `foo.a` will be 3. By using `apply` on line 8 with explicit context, we pass `this` as the context argument since inside `incrementA` but outside of `increment`, `this` references the containing object, namely `foo`.  */

// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.apply(this); // line 8
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a) // => 3

/* The value of `foo.a` will be 3. By using `apply` on line 8 with explicit context, we pass `this` as the context argument since inside `incrementA` but outside of `increment`, `this` references the containing object, namely `foo`.  */

// let foo = {
//   a: 0,
//   incrementA: function() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment(); // line 8
//   }
// };

// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     let test = increment.bind(this); // line 8
//     test()
//   }
// };

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment(); // line 8
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a) // => 3

let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }
};

let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}.`);
  }
};

let student = new Student('Omi', 10, 'Spring');
student.sayName();
student.enrollInCourse('Art101');
