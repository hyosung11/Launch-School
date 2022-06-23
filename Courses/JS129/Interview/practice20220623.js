// function createStudent(name, course, grade) {
//   let obj = {};
//   obj.name = name;
//   obj.course = course;
//   obj.grades = [grade];

//   obj.addGrade = function(newGrade) {
//     obj.grades.push(newGrade);
//   }

//   return obj;
// }

// let hyosung = createStudent('HyoSung', 'JS129', 97);
// hyosung.addGrade(100);
// console.log(hyosung.grades); // [ 97, 100 ]

// Prompt: See if an object came from a constructor

// Example constructors

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// function Dog(name) {
//   this.name = name;
// }

// Objects to test with

// let myCar = new Car('Toyota', 'Prius');
// let myDog = new Dog('Rusty');

// Possible Solutions

// Using `instanceof` operator
// console.log(myCar instanceof Car); // true
// console.log(myDog instanceof Car); // false

// Using `isPrototypeOf` method
// console.log(Car.prototype.isPrototypeOf(myCar)); // true
// console.log(Car.prototype.isPrototypeOf(myDog)); // false

// Compare the constructor property of the created object to the constructor function
// console.log(myCar.constructor === Car); // true
// console.log(myDog.constructor === Car); // false
// console.log(myDog.constructor === Dog); // true

// function isInstanceOf(obj, constructorFunction) {
//   while(obj) {
//     obj = Object.getPrototypeOf(obj);
//     if (obj === constructorFunction.prototype) return true;
//   }

//   return false;
// }

// console.log(isInstanceOf(myCar, Dog));

// Ancestors

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function () {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  }.bind(this),
};

console.log(john.greetings());