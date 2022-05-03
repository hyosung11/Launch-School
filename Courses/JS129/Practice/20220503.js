// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     function bar() {
//       // inner function not using the surrounding context
//       console.log(this.a + ' ' + this.b);
//     }

//     bar(); // `bar` invoked as a standalone function, so execution context is the global object
//   },
// };

// obj.foo(); // undefined undefined

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     let self = this; // preserve context with variable in outer scope (before the inner function declaration)
//     function bar() {
//       console.log(self.a + ' ' + self.b); // use the `self` variable inside the nested inner function
//       // with JavaScript lexical scoping rules, `bar` can access `self` within its function body to use it instead of `this` to access the correct context object.
//     }

//     bar();
//   },
// };

// obj.foo(); // hello world

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }
//     // call inner function with explicit context
//     bar.call(this);
//   },
// };

// obj.foo(); // => hello world

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this) // call `bind` on the inner function and get a new function with its execution context permanently set to the object

//     bar();
//   },
// };

// obj.foo(); // => hello world

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     let qux = bar.bind(this);

//     qux();
//   },
// };

// obj.foo(); // => hello world

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = () => console.log(this.a + ' ' + this.b);

//     bar();
//   },
// };

// obj.foo(); // => hello world

// function repeatThreeTimes(func) {
//   func(); // context is the global object
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     repeatThreeTimes(function() {
//       console.log('hello, ' + this.firstName + ' '  + this.lastName); // function argument of `repeatThreeTimes`
//     });
//   },
// };

// john.greetings();

// function repeatThreeTimes(func) {
//   func(); // context is the global object
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     let self = this;
//     repeatThreeTimes(function () {
//       console.log('hello, ' + self.firstName + ' ' + self.lastName);
//     });
//   },
// };

// john.greetings();

// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     });
//   },
// };

// john.greetings();

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     }, this);
//   },
// };

// obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return (
//       this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
//     );
//   },
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);

/* The code outputs `undefined undefined is a undefined. When `turk.getDescription` is passed as an argument to `logReturnVal`, we remove the method from its context. Therefore, when we execute it as `func`, `this` points to the global object rather than `turk`. Since `global` does not define the properties `firstName`, `lastName`, or `occupation`, the output is not what we expect. */

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return (
//       this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
//     );
//   },
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

/* By using `call` to invoke `func` and passing it to the `context` argument, we can provide the desired context for the function. On line 16, we invoke `logReturnVal` with `turk` as the `context` argument, then pass that value to `call`; the result is our desired output. */

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return (
//       this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
//     );
//   },
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// let getTurkDescription = turk.getDescription.bind(turk);
// logReturnVal(getTurkDescription);

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title); // line 6
//     });
//   }
// };

// TESgames.listGames();

/* This code does not produce the desired output. Since functions lose their surrounding context when used as arguments to another function, the context of line 6 is not the `TESgames` object. Instead, it is the global object. Thus, `this.seriesTitle` resolves to `undefined` rather than `"The Elder Scrolls"`. */

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function () {
//     let self = this;
//     this.titles.forEach(function (title) {
//       console.log(self.seriesTitle + ': ' + title); // line 6
//     });
//   },
// };

// TESgames.listGames();

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function () {
//     this.titles.forEach(function (title) {
//       console.log(this.seriesTitle + ': ' + title); // line 6
//     }, this);
//   },
// };

// TESgames.listGames();

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function () {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title); // line 6
//     });
//   },
// };

// TESgames.listGames();

// let foo = {
//   a: 0,
//   incrementA: function () {
//     function increment() {
//       this.a += 1; // line 5
//     }

//     increment();
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

/* It will be `0`. Since `increment` is invoked as a function, `this.a` on line 5 references a property on the global object rather than a property of `foo`. Thus, the property `foo.a` isn't modified by `increment` and its value remains 0. */

// let foo = {
//   a: 0,
//   incrementA: function () {
//     function increment() {
//       this.a += 1; // line 5
//     }

//     increment.call(this);
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

// let foo = {
//   a: 0,
//   incrementA: function () {
//     let increment = () => {
//       this.a += 1; // line 5
//     }

//     increment();
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

// let foo = {
//   a: 0,
//   incrementA: function () {
//     let self = this;
//     function increment() {
//       self.a += 1; // line 5
//     };

//     increment();
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

let foo = {
  a: 0,
  incrementA: function () {
    function increment() {
      this.a += 1; // line 5
    }

    increment.apply(this); // line 8
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);

/* We can use `apply` to invoke `increment` on line 8 with explicit context. We pass `this` as the context argument since inside `incrementA` but outside of `increment`, `this` references the containing object, namely `foo`. */