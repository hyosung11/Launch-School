// Demonstrate how pseudo-classical object creation pattern works. Use a supertype and a subtype in your response

// Rectangle
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};

function Square(size) {
  // state
  Rectangle.call(this, size, size);
}
console.log(Square.prototype.constructor);
// Using `Object.create` to create a new object whose ``[[Prototype]]` is set to
console.log(Object.getPrototypeOf(Square.prototype));
Square.prototype = Object.create(Rectangle.prototype);
//Square.prototype.constructor = Square;
console.log(Square.prototype.constructor);
// let rectangle = new Rectangle(10, 5);
// console.log(rectangle.getArea()); // 50

let square = new Square(5);
// Creates a new object
// sets the execution context to the new object
// invokes the constructor function

console.log(square.getArea());

// console.log(rectangle instanceof Rectangle);
// console.log(Object.getPrototypeOf(rectangle) === Rectangle.prototype);

// Square

// Where is this prototype object?

// What creates the linkage between the instance and the prototype?
//[[Prototype]] vs .prototype?

// What is the actual value of `[[Prototype]]`?
// - references the function object's `prototype` property

// methods are same across all instances, so can be stored on the prototype object
//

// What is `this`?
