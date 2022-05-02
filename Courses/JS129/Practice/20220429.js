// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function (percent) {
//     let discount = (item.price * percent) / 100;
//     return item.price - discount;
//   },
// };

// function discountItem(item, percent) {
//   let discount = (item.price * percent) / 100;
//   return item.price - discount;
// }

// console.log(item.discount(20));
// console.log(item.discount(50));
// console.log(item.discount(25));

/* JS120 - Object Oriented JavaScript > Objects > Testing Object Equality */

// function objectsEqual(obj1, obj2) {
//   return Object.entries(obj1).toString() === Object.entries(obj2).toString();
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// function createStudent(name, year) {
//   return {
//     name: name,
//     year: year,
//     courses: [],
//     info() {
//       console.log(`${this.name} is a ${this.year} year student`);
//     },

//     listCourses() {
//       return this.courses;
//     },

//     addCourse(course) {
//       this.courses.push(course);
//     },

//     addNote(courseCode, note) {
//       let course = this.courses.filter(course => {
//         return course.code === courseCode;
//       })[0];

//       if (course) {
//         if (course.note) {
//           course.note += `; ${note}`;
//         } else {
//           course.note = note;
//         }
//       }
//     },

//     viewNotes() {
//       this.courses.forEach(course => {
//         if (course.note) {
//           console.log(`${course.name}: ${course.note}`);
//         }
//       });
//     },

//     updateNote(courseCode, note) {
//       let course = this.courses.filter(course => {
//         return course.code === courseCode;
//       })[0]

//       if (course) {
//         course.note = note;
//       }
//     },
//   };
// }

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// console.log(foo.listCourses());
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// console.log(foo.listCourses());
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // // "Math: Fun course; Remember to study for algebra"
// // // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"

// let person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName); // NaN

/* Outside of a function, the `this` keyword is bound to the global object. Since `global.firstName` and `global.lastName` are not defined, the operation being performed here is `undefined + undefined` which results in `fullName` having the value `NaN` */

// function createPerson (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     fullName: firstName + lastName,
//   }
// }

// let person = createPerson('SungOh', 'Bidol-Lee')
// console.log(person.fullName); // NaN

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function () {
//     return [1, 2, 3].map(number => {
//       return this.name + ' ' + number;
//     });
//   },
// };

// console.log(franchise.allMovies());
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3',
// ];

// function func() {
//   return this;
// }

// let context = func();
// console.log(context);

/* The code outputs the global object, that's `global` in Node and `window` in a browser. Since line 5 calls `func` as a function, the implicit context for `func` is the global object, so it returns the global object. */

// let obj = {
//   func: function () {
//     return this;
//   },
// };

// let context = obj.func();

// console.log(context); // { func: [Function: func] }
// returns an object with the property `func` whose value is a function called `func`

/* This code outputs the object `obj` since it invokes `func` as a method. As a method invocation, it receives an implicit execution context that refers to the object used to invoke it.  */

message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();
// console.log(foo)

/* `call` and `apply` are built-in methods that let us explicitly set the function execution context. */