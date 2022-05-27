// // -----------------------------------------
// // How collaborator objects work when you want to use them as arrays and other things.

// // let cat = {
// //   name: 'Fluffy',

// //   makeNoise() {
// //     console.log('Meow! Meow!');
// //   },

// //   eat() {
// //     // implementation
// //   },
// // };

// // let dog = {
// //   name: 'Maxi',

// //   makeNoise() {
// //     console.log('Woof! Woof!');
// //   },

// //   eat() {
// //     // implementation
// //   },
// // };

// // let pete = {
// //   name: 'Pete',
// //   pets: [],
// // };

// // pete.pets.push(cat);
// // pete.pets.push(dog);

// // // invoke every `makeNoise` in one line
// // pete.pets.forEach((pet) => pet.makeNoise());

// // --------------------------
// // Factory functions; using properties of two factory functions in one instance; using Object.assign.

// // function makePerson(name) {
// //   const newPerson = { name }

// //   const newEmployee = makeEmployee(3);

// //   Object.assign(newPerson, newEmployee);

// //   return newPerson;
// // }

// // function makeEmployee(id) {
// //   const newEmployee = { id };

// //   return newEmployee;
// // }

// // const jack = makeEmployee('Jack');
// // console.log(jack.id);
// // console.log(jack.hasOwnProperty('name') === true);

// // -----------------------------------------
// // Return is not what was expected; why?
// // let john = {
// //   firstName: 'John',
// //   lastName: 'Doe',
// //   greetings: function() {
// //     console.log('hello, ' + this.firstName + ' ' + this.lastName);
// //   }.bind(this),
// // };

// // john.greetings();

// // // Different
// // let john = {
// //   firstName: 'John',
// //   lastName: 'Doe',
// //   greetings: console.log('hello, ' + this.firstName + ' ' + this.lastName),
// // };

// // Identify where in the code `this` is used.
// // Identify the surrounding function.
// // If there is no surrounding function, `this` is the context of the global environment.
// // I'll look for `bind` on the surrounding function (or if the function is an arrow function).
// // I'll look for the function's invocation.

// // JS evaluates properties for `john`
// // JS assigs `greetings` to the result of `func.bind(this)`
// // `this` is evaluated as the global environment because it is not being evaluated from a function invocation. 


// // let qux = function() {
// //   console.log(this.a + ' ' + this.b);
// // }

// // let obj = {
// //   a: 'hello',
// //   b: 'world',
// //   foo: function() {
// //     const bar = qux.bind(this);
// //     bar();
// //   }, 
// // };

// // obj.foo();
// // => hello world
// // => hello world


// // ------------------------------------------
// // Context loss 
// // Launch School introduces three examples of how context can be lost. 
// // They are: 

// // ------------------------------------------------------------
// // METHOD COPIED FROM AN OBJECT AND ASSIGNED TO A VARIABLE
// // ------------------------------------------------------------
// const obj = {
//   state1: 'obj1',

//   printObj() {
//     console.log(this);
//   },
// };

// // not context loss
// obj.printObj();

// function wrapFunc(func) {
//   func();
// }

// // Method reference be assigned to a variable or passed as an argument.
// wrapFunc(obj.printObj); // Looses context.
// // let func = obj.printObj

// const contextLoss = obj.printObj;
// contextLoss();
// // ------------------------------------------------------------



// // ------------------------------------------------------------
// // INNER FUNCTION NOT USING SURROUNDING CONTEXT
// // ------------------------------------------------------------
// const obj = {
//   printObj() {
//     function nestedFunc() {
//       console.log(this);
//     }

//     // Function can be invoked inside a method.
//     nestedFunc(); // Looses context.
//   },
// };

// // OR 

// function printContext() {
//   console.log(this);
// }

// const obj = {
//   printObj() {
//     printContext(); // Looses context
//   }
// }

// obj.printObj(); 
// // ------------------------------------------------------------



// // ------------------------------------------------------------
// // FUNCTION AS AN ARGUMENT LOSING SURROUNDING CONTEXT
// // ------------------------------------------------------------
// function wrapFunc(func) {
//   func();
// }

// const obj = {
//   printObj() {
//     wrapFunc(function() {
//       console.log(this);
//     });
//   },
// };

// obj.printObj();
// // ------------------------------------------------------------


// Identify where in the code `this` is used.  // `this` is used on line 235
// Identify the surrounding function. // `wrapFunc` is surrounding function; defined on line 228.
// If there is no surrounding function, `this` is the context of the global environment. 
// I'll look for `bind` on the surrounding function (or if the function is an arrow function). 
// I'll look for the function's invocation. // `wrapFunc` is invoked when `printObj` is invoked. 
// How is `printObj` invoked? -- `obj.printObj()` - `this` is `obj`.

// obj.printObj();
// `printObj` invokes `wrapFunc` and passes a callback that will log the value of `this`. 
// The callback that gets passed is assigned to `func` and then invoked. 
// The invocation on `line 229` is where `this` is actually determined. 

// Identify where exactly the context is being lost: 
// Which invocation is determining the value for `this`? (the invocation of `func`)
// function wrapFunc(func) {
//   func();
// // }

// const obj = {
//   printObj() {
//     wrapFunc(function() {
//       console.log(this);
//     });
//   },
// };

// obj.printObj();

// COPIED AGAIN
// Context loss 
// How collaborator objects work when you want to use them as arrays and other things. 
// Factory functions; using properties of two factory functions in one instance; using Object.assign.
/* Return is not what was expected; why? 
let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  }.bind(this),
};

john.greetings();
*/
// Dave's questions. 

// Shane question
// The below is in the course somewhere.  Did I miss the part about private state or is this about closures or something taught in a later course?
// "Objects created with the factory function can have private state. Any state stored in the body of the factory function instead of in the returned object is private to the returned object. They can't be accessed or modified unless one of the object methods exposes the state. "  



// -----------------------------------------
// How collaborator objects work when you want to use them as arrays and other things. 

// let cat = {
//   name: 'Fluffy',

//   makeNoise() {
//     console.log('Meow! Meow!');
//   },

//   eat() {
//     // implementation
//   },
// };

// let dog = {
//   name: 'Maxi',

//   makeNoise() {
//     console.log('Woof! Woof!');
//   },

//   eat() {
//     // implementation
//   },
// };

// let pete = {
//   name: 'Pete',
//   pets: [],
// };

// pete.pets.push(cat);
// pete.pets.push(dog);

// // invoke every `makeNoise` in one line
// pete.pets.forEach(pet => pet.makeNoise());

// ----------------------------------------------
// Factory functions; using properties of two factory functions in one instance; using Object.assign.
// function makePerson(name) {
//   const newPerson = { name }

//   const newEmployee = makeEmployee(3);
  
//   Object.assign(newPerson, newEmployee);
  
//   return newPerson;
// } 

// function makeEmployee(id) {
//   const newEmployee = { id };

//   return newEmployee;
// }

// const jack = makeEmployee('Jack');
// console.log(jack.name);
// console.log(jack.hasOwnProperty('name') === true);

// -----------------------------------------
// Return is not what was expected; why? 
// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   }.bind(this),
// };

// john.greetings();

// // Different
// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: console.log('hello, ' + this.firstName + ' ' + this.lastName),
// };

// Identify where in the code `this` is used.
// Identify the surrounding function. 
// If there is no surrounding function, `this` is the context of the global environment. 
// I'll look for `bind` on the surrounding function (or if the function is an arrow function). 
// I'll look for the function's invocation. 

// JS evaluates properties for `john`
// JS assigs `greetings` to the result of `func.bind(this)`
// `this` is evaluated as the global environment because it is not being evaluated from a function invocation. 


// let qux = function() {
//   console.log(this.a + ' ' + this.b);
// }

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     const bar = qux.bind(this);
//     bar();
//   }, 
// };

// obj.foo();
// => hello world
// => hello world


// ------------------------------------------
// Context loss 
// Launch School introduces three examples of how context can be lost. 
// They are: 

// ------------------------------------------------------------
// METHOD COPIED FROM AN OBJECT AND ASSIGNED TO A VARIABLE
// ------------------------------------------------------------
// const obj = {
//   state1: 'obj1',

//   printObj() {
//     console.log(this);
//   },
// };

// // not context loss
// obj.printObj();

// function wrapFunc(func) {
//   func();
// }

// // Method reference be assigned to a variable or passed as an argument.
// wrapFunc(obj.printObj); // Looses context.
// // let func = obj.printObj

// const contextLoss = obj.printObj;
// contextLoss();



// // SOLUTIONS
// //Solution 1: Can bind to the object as it's passed in.
// wrapFunc(obj.printObj.bind(obj));
// // equivalent
// const objBound = obj.printObj.bind(obj);
// wrapFunc(objBound);

// //Solution 2: Can pass in the context. 
// function wrapFuncTwo(func, context) {
//   func.call(context);
// }

// wrapFuncTwo(obj.printObj, obj);

// // ------------------------------------------------------------



// // ------------------------------------------------------------
// // INNER FUNCTION NOT USING SURROUNDING CONTEXT
// // ------------------------------------------------------------
// const obj = {
//   printObj() {
//     function nestedFunc() {
//       console.log(this);
//     }

//     // Function can be invoked inside a method.
//     nestedFunc(); // Looses context.
//   },
// };

// // OR 

// function printContext() {
//   console.log(this);
// }

// const obj = {
//   printObj() {
//     printContext(); // Looses context
//   }
// }

// obj.printObj(); 


// // SOLUTIONS
// // SOLUTION 1: Preserve the outer context with a variable.
// const obj = {
//   printObj() {
//     const self = this;

//     function nestedFunc() {
//       console.log(self);
//     }

//     // Function can be invoked inside a method.
//     nestedFunc(); 
//   },
// };

// // SOLUTION 2: Call the nusted function with explicit context
// const obj = {
//   printObj() {
//     function nestedFunc() {
//       console.log(this);
//     }

//     // Function can be invoked inside a method.
//     nestedFunc.call(this);
//   },
// };

// SOLUTION 3: Use `bind`
// const obj = {
//   printObj() {
//     function nestedFunc() {
//       console.log(this);
//     }

//     const boundFunc = nestedFunc.bind(this);
//     boundFunc();
//   },
// };

// obj.printObj(); // { printObj: [Function: printObj] }

// OR

// function printContext() {
//   console.log(this);
// }

// const obj = {
//   printObj() {
//     const boundFunc = printContext.bind(this);
//     boundFunc(); 
//   }
// }

// obj.printObj(); // { printObj: [Function: printObj] }


// SOLUTION 4: Use an arrow function
// const obj = {
//   printObj() {
//     const nestedFunc = () => {
//       console.log(this);
//     }

//     nestedFunc();
//   },
// };

// obj.printObj(); // { printObj: [Function: printObj] }
// ------------------------------------------------------------



// ------------------------------------------------------------
// FUNCTION AS AN ARGUMENT LOSING SURROUNDING CONTEXT
// ------------------------------------------------------------
// function wrapFunc(func) {
//   func();
// }

// const obj = {
//   printObj() {
//     wrapFunc(function() {
//       console.log(this);
//     });
//   },
// };

// obj.printObj();

// SOLUTIONS
// SOLUTION 1: Preserve context with a vriable.
// function wrapFunc(func) {
//   func();
// }

// const obj = {
//   printObj() {
//     const self = this;
//     wrapFunc(function() {
//       console.log(self);
//     });
//   },
// };

// obj.printObj();

// SOLUTION 2: Use `bind` as the function is being passed in. 
// function wrapFunc(func) {
//   func();
// }

// const obj = {
//   printObj() {
//     wrapFunc(function() {
//       console.log(this);
//     }.bind(this));
//   },
// };

// obj.printObj();

// // SOLUTION 3: Use an arrow function
// function wrapFunc(func) {
//   func();
// }

// const obj = {
//   printObj() {
//     wrapFunc(() => {
//       console.log(this);
//     });
//   },
// };

// obj.printObj();
// ------------------------------------------------------------


// Identify where in the code `this` is used.  // `this` is used on line 235
// Identify the surrounding function. // `wrapFunc` is surrounding function; defined on line 228.
// If there is no surrounding function, `this` is the context of the global environment. 
// I'll look for `bind` on the surrounding function (or if the function is an arrow function). 
// I'll look for the function's invocation. // `wrapFunc` is invoked when `printObj` is invoked. 
// How is `printObj` invoked? -- `obj.printObj()` - `this` is `obj`.

// obj.printObj();
// `printObj` invokes `wrapFunc` and passes a callback that will log the value of `this`. 
// The callback that gets passed is assigned to `func` and then invoked. 
// The invocation on `line 229` is where `this` is actually determined. 

// Identify where exactly the context is being lost: 
// Which invocation is determining the value for `this`? (the invocation of `func`)
// function wrapFunc(func) {
//   func();
// }

// const obj = {
//   printObj() {
//     wrapFunc(function() {
//       console.log(this);
//     });
//   },
// };

// obj.printObj();

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

// ## Question 3 (5 points)

// The code below defines a constructor function, `Book`, and adds a method, `read`, to the prototype of that constructor:


// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   Book.titles.push(this.title);
// }

// Book.prototype.read = function() {
//   console.log(`Reading ${this.title}`);
// };

// Book.allTitles = function() {
//   return Book.titles;
// }

// Book.titles = [];

// let book1 = new Book('A', 'B')
// let book2 = new Book('C', 'D');

// console.log(Book.allTitles());
// Objects created by this constructor have `title` and `author` properties, as well as a `read` method. However, we now need to add an `allTitles` method that returns an array of the titles of all the books created by the constructor. Think about where the array and the method should live and then update the code to create the array and implement the method.

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
//   Car.makes.push(this.make);
// }

// Car.prototype.drive = function () {
//   console.log(`Driving a ${this.model}`);
// };

// Car.allMakes = function () {
//   return Car.makes;
// };

// Car.makes = [];

// let car1 = new Car('Honda', 'Accord');
// let car2 = new Car('Toyota', 'Prius');
// console.log(Car.allMakes()); // [ 'Honda', 'Toyota' ]

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    Car.makes.push(this.make);
  }

  static makes = [];

  static allMakes() {
    return Car.makes;
  }

  drive() {
    console.log(`Driving a ${this.model}`);
  }
}

let car1 = new Car('Honda', 'Accord');
let car2 = new Car('Toyota', 'Prius');
console.log(Car['allMakes']()); // [ 'Honda', 'Toyota' ]

// let sohee = {
//   name: 'Sohee',
//   children: [],

//   childrenEat() {
//     return this.children.forEach(child => child.eat())
//   }
// };

// let omi = {
//   name: 'Omi',
//   eat() {
//     console.log(`Cowboy spaghetti`);
//   },
// };

// let sungoh = {
//   name: 'SungOh',
//   eat() {
//     console.log(`Crunchy penne`);
//   },
// };

// sohee.children.push(omi);
// sohee.children.push(sungoh);

// sohee.childrenEat();

// let omi = {
//   game: 'Roblox',
//   play() {
//     console.log(`My favorite game is ${this.game}`);
//   }
// }

// let sungoh = {
//   game: 'Cooking Craze',
// };

// omi.play();

// let omi = {
//   game: 'Roblox',
//   play() {
//     console.log(`My favorite game is ${this.game}`);
//   }
// }

// let sungoh = {
//   game: 'Cooking Craze',
// };

// omi.play.call(sungoh); // My favorite game is Cooking Craze

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