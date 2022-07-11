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

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function () {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   }.bind(this),
// };

// console.log(john.greetings());

/* Ancestors

Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:

*/

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);
  if (ancestor === Object.prototype) {
    return ['Object.prototype'];
  } else {
    return [ancestor.name, ...ancestor.ancestors()];
  }
}

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']