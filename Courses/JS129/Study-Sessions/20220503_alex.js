//What does Object.create do?
// It takes an object as the argument to which it sets the prototype of the newly created object. The new object inherits all the properties from the prototype object and has access to all the properties and methods that the prototype object provides.

//What Object.assign do?

//What is encapsulation?

//call, apply, bind
// name property added to make objects easier to identify

/*Ancestors
Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output: */

Object.prototype.ancestors = function () {
  let ancestors = [];
  let obj = this;

  while (Object.getPrototypeOf(obj) !== null) {
    let proto = Object.getPrototypeOf(obj);
    ancestors.push(proto.name); // ?
    obj = Object.getPrototypeOf(obj);
  }

  ancestors.push('Object.prototype');
  return ancestors;
};

let foo = { name: 'foo' };
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors()); // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors()); // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors()); // returns ['foo', 'Object.prototype']
console.log(foo.ancestors()); // returns ['Object.prototype']

console.log(Object.getPrototypeOf(foo));
