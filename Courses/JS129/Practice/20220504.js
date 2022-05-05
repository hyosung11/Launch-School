// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype = {
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   eat() {
//     console.log('Eating');
//   },

//   communicate() {
//     console.log('Communicating');
//   },

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.diagnose = function() {
//   console.log('Diagnosing');
// };
// Doctor.prototype.constructor = Doctor;

// function Professor(firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.teach = function() {
//   console.log('Teaching');
// }
// Professor.prototype.constructor = Professor;

// function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.study = function() {
//   console.log('Studying');
// }
// Student.prototype.constructor = Student;

// function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
//   Student.call(this, firstName, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.research = function() {
//   console.log('Researching');
// }
// GraduateStudent.prototype.constructor = GraduateStudent;

// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// let professor = new Professor('foo', 'bar', 21, 'gender', 'Math');
// console.log(professor instanceof Person);     // logs true
// console.log(professor instanceof Professor);     // logs true
// professor.eat();                              // logs 'Eating'
// professor.communicate();                      // logs 'Communicating'
// professor.sleep();                            // logs 'Sleeping'
// console.log(professor.fullName());            // logs 'foo bar'
// professor.teach();                         // logs 'Teaching'

// let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// const OPERATIONS = {
//   '+': (num1, num2) => num1 + num2,
//   '-': (num1, num2) => num1 - num2,
//   '*': (num1, num2) => num1 * num2,
//   '/': (num1, num2) => num1 / num2,
// };

// let getOperation = (operation) => OPERATIONS[operation];

// let compute = (operation, num1, num2) => {
//   return operation(num1, num2);
// };

// console.log(compute(getOperation('/', 18, 6)) // NaN

// console.log(compute('*', 2, 8) === 16); // TypeError: operation is not a function

// console.log(compute(getOperation('+'), 5, 9) === 14); // true

// console.log(getOperation('%'), 9, 4) === 5;

// global.foo = 5;
// if (isFinite(foo)) {
//   let bar = 3;
//   xyz = 5;
//   console.log(bar);
// }

// console.log(global.hasOwnProperty('global'));
// console.log(global.hasOwnProperty('foo'));
// console.log(global.hasOwnProperty('isFinite'));
// console.log(global.hasOwnProperty('bar'));
// console.log(global.hasOwnProperty('xyz'));
// console.log(global.hasOwnProperty('console'));
// console.log(global.hasOwnProperty('log'));

// console.log(console.hasOwnProperty('log'));

// function foo() {
//   return this;
// }

// console.log(foo());

/* Since we invoke `foo` with an implicit context, JavaScript runs the code with the execution context set to the global object. Since `this` refers to the current execution context while the function is running, the function returns the global object. */

// let obj = {
//   foo() {
//     return this;
//   },
// };

// console.log(obj.foo()); // { foo: [Function: foo] }

/* Since we invoke `foo` with an implicit context of `obj`, JavaScript runs the code with the execution context set to `obj`. Since `this` refers to the current execution context while the method is running, the method returns the `obj` object. */

let obj = {
  foo() {
    return this;
  },
};

let foo = obj.foo;
console.log(foo());

/* The code returns the global object. Since we invoke `foo` with an implicit context, JavaScript runs the code with the execution context set to the global object. Since `this` refers to the current execution context while `foo` is running, the return value is the global object. */