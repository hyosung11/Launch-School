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

let rectangle = new Rectangle(4, 5);

console.log(rectangle.getWidth());
console.log(rectangle.getLength());
console.log(rectangle.getArea());

class Square extends Rectangle {
  constructor(lengthOfSide) {
    super(lengthOfSide, lengthOfSide);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`);

/* We must call `suprer` in the `constructor` method of the `Square` class, and that `Square` inherits the `getArea` method from `Rectangle`. */
