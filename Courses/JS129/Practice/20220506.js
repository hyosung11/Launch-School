// function bar() {
//   console.log('good morning');
// }

// global.inner = {
//   bar() {
//     console.log('good afternoon');
//   },
// };

// let obj = {
//   inner: {
//     bar() {
//       console.log('good night');
//     },

//     foo() {
//       bar();
//     },
//   },

//   bar() {
//     console.log('wake up');
//   },

//   foo() {
//     this.inner.bar();
//     inner.bar();
//     bar();
//   },
// };

// obj.foo();

/* The code logs `good night`, `good afternoon`, and `good morning`. Line 33 uses method invocation to invoke `obj.foo` on line 26, which sets the context (`this`) for `obj.foo` to the `obj` object. Thus, line 27 invokes `obj.inner.bar` on line 13, which logs `good night`. The calls on lines 28 and 29 don't use `this`, so both calls look to the global object. Line 28 invokes `global.inner.bar` on line 6 which logs `good afternoon` and line 29 invokes `bar` on line 1 which logs `good morning`. */

function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  },
};

let foo = function () {
  console.log('go to sleep');
};

function go(foo) {
  foo();
}

go(obj.foo);

/* The code will log `good afternoon`, `good afternoon`, and `good morning`. Line 41 passes `obj.foo` to the `go` function on line 37 which strips the method of its context (`obj'). Thus, when we call `foo` on line 38, it invokes `obj.foo`, but it sets the context (`this`) to the global object. So, line 27 calls `global.inner.bar` on line 6 which logs `good afternoon`. The invocations on lines 28 and 29 also use the global object as the context and log `good afternoon`, and `good morning` respectively. */

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year)
//     this.startEngine();
//   }

//   startEngine() {
//     console.log('Ready to go!');
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// let Person = class {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   communicate() {
//     console.log('Communicating');
//   }

//   eat() {
//     console.log('Eating');
//   }

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// // let omi = new Person('Omi', 'Bidol-Lee', 10, 'female');
// // console.log(omi instanceof Person);
// // console.log(omi.fullName());
// // omi.eat();
// // omi.communicate();
// // omi.sleep();

// // let Doctor = class extends Person {
// //   constructor(firstName, lastName, age, gender, specialization) {
// //     super(firstName, lastName, age, gender)
// //     this.specialization = specialization;
// //   }

// //   diagnose() {
// //     console.log('Diagnosing');
// //   }
// // }

// // let sohee = new Doctor('Sohee', 'Bidol-Lee', 49, 'female', 'Internal Medicine');
// // console.log(sohee instanceof Person);
// // console.log(sohee instanceof Doctor);
// // sohee.eat();
// // sohee.communicate();
// // sohee.sleep();
// // console.log(sohee.fullName());
// // sohee.diagnose();

// let Student = class extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender)
//     this.degree = degree;
//   }

//   study() {
//     console.log('Studying');
//   }
// }

// let GraduateStudent = class extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree;
//   }

//   research() {
//     console.log('Researching');
//   }
// }

// let sungOh = new GraduateStudent('SungOh', 'Bidol-Lee', 6, 'male', 'Math', 'Calculus');

// console.log(sungOh instanceof Person);
// console.log(sungOh instanceof Student);
// console.log(sungOh instanceof GraduateStudent);
// sungOh.eat();
// sungOh.study();
// sungOh.research();
