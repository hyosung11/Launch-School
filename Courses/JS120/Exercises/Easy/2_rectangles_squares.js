/* Rectangles and Squares

Given the class from the previous problem:

*/
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

/* Write a class called `Square` that inherits from `Rectangle`, and is used like this: */

class Square extends Rectangle {
  constructor(lengthOfSide) {
    super(lengthOfSide, lengthOfSide)
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

/* Discussion

The key thing to note for this problem is that we must call super in constructor method of Square class, and that Square inherits the area method from Rectangle. */

// Elaine Vuong
// class - Pseudo-Classical Inheritance
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);  
  }
}

let newSquare = new Square(5);
console.log(`area of square = ${newSquare.getArea()}`); // area of square = 25

/*
Execution of Line 27 causes the Square Class Function's Prototype to inherit from
the Rectangle Class Function's Prototype (in other words, the internal [[Prototype]]
property of Square.prototype refers to Rectangle.prototype)

Therefore, when we create a new instance of the Square Class called newSquare,
newSquare inherits from the Square Class Function's Prototype (in other words, the
internal [[Prototype]] property of newSquare refers to Square.prototype)

When we call the `getArea` method on the newSquare object (which is an instance of
the Square class), although the newSquare object does not define its
own method called getArea, the JS engine searches the prototypal chain of
newSquare and it finds the getArea method defined on the Rectangle
Class Function's Prototype (on Rectangle.prototype).
*/

// Constructors & Prototypes - pseudo-classical inheritance
function RectangleFunc(length, width) {
  this.length = length;
  this.width = width;
}

RectangleFunc.prototype.getWidth = function() {
  return this.width;
}

RectangleFunc.prototype.getLength = function() {
  return this.length;
}

RectangleFunc.prototype.getArea = function() {
  return this.width * this.length;
}

function Square(side) {
  RectangleFunc.call(this, side, side);
}

Square.prototype = Object.create(RectangleFunc.prototype); 
// Understanding How to Implement Pseudo-Classical Inheritance
    // Re-assign Square.prototype to a reference to a new Object that INHERITS from Rectangle.prototype
    // This means that Square.prototype's Internal [[Prototype]] Property references Rectangle.prototype
    // This is proven in this line of code: 
        // Object.getPrototypeOf(Square.prototype) === RectangleFunc.prototype; // returns true

// Resetting the constructor property
    // All Functions have a Function Prototype which can be accessed at funcName.prototype
    // On the Function Prototype, there exists a property called 'constructor'
    // The 'constructor' property on the Function Prototype contains a reference BACK TO THE FUNCTION ITSELF

        // RectangleFunc.prototype.constructor                   // returns [Function: RectangleFunc]
        // RectangleFunc.prototype.constructor === RectangleFunc // returns true

    // What do the four lines of code below show? First - what is in Square.prototype? Located in Square.prototype is RectangleFunc {}
    // This means that Square.prototype contains a reference to RectangleFunc.prototype (proven above)
    // So what is defined on Square.prototype.constructor? You can see that Square.prototype does NOT define an 'OWN' constructor
    // property - which makes sense, because Square.prototype contains a reference to RectangleFunc.prototype
    // However, BECAUSE Square.prototype INHERITS from RectangleFunc.prototype, then Square.prototype can access the constructor
    // property defined on RectangleFunc.prototype. This is why Square.prototype.constructor initially returns [Function: RectangleFunc] -
    // this means that before the re-assignment, Square.prototype.constructor contains a reference to the Function RectangleFunc
    // Therefore, we need to RE-ASSIGN Square.prototype.constructor so it is made to refer back to the Square Function, and NOT RectangleFunc

        // Square.prototype                                       // returns RectangleFunc {}
        // Square.prototype.hasOwnProperty('constructor');        // returns false
        // 'constructor' in Square.prototype;                     // returns true
        // RectangleFunc.prototype.hasOwnProperty('constructor'); // returns true
        // Square.prototype.constructor;                          // returns [Function: RectangleFunc]

Square.prototype.constructor = Square;

let newSquare = new Square(5);
console.log(`area of square = ${newSquare.getArea()}`); // area of square = 25