/* Factory Function */

// function createCar(make, fuelLevel, engineOn) {
//   return {
//     make,
//     fuelLevel,
//     engineOn,

//     startEngine() {
//       this.engineOn = true;
//     },

//     drive() {
//       this.fuelLevel -= 0.1;
//     },

//     stopEngine() {
//       this.engineOn = false;
//     },

//     refuel(percent) {
//       if ((this.fuelLevel + (percent / 100)) <= 1) {
//         this.fuelLevel += (percent / 100)
//       } else {
//         this.fuelLevel = 1;
//       }
//     },
//   };
// }

// let raceCar1 = createCar('BMW', 0.5, false);
// raceCar1.drive();

// let raceCar2 = createCar('Ferrari', 0.7, true);
// raceCar2.drive();

// let jaguar = createCar('Jaguar', 0.4, false);
// console.log(jaguar.drive());
// console.log(jaguar)

/* Converting three objects into one factory function */

// let book1 = {
//   title: 'Mythos',
//   author: 'Stephen Fry',
//   getDescription: function() {
//     return `${this.title} was written by ${this.author}.`;
//   },
// };

// let book2 = {
//   title: 'Me Talk Pretty One Day',
//   author: 'David Sedaris',
//   getDescription: function() {
//     return `${this.title} was written by ${this.author}.`;
//   },
// };

// let book3 = {
//   title: "Aunts aren't Gentleman",
//   author: 'PG Wodehouse',
//   getDescription: function() {

//   }
// }

// function createBook(title, author) {
//   return {
//     title,
//     author,

//     getDescription() {
//       return `${this.title} was written by ${this.author}.`
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
// book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
// book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

/* Add `read` property with initial value of `false` */
// function createBook(title, author) {
//   return {
//     title, // <-- simplified syntax from `title: title,`
//     author,
//     read: false,

//     getDescription() {
//       return `${this.title} was written by ${this.author}.`
//     },
//   };
// }

// let book1 = createBook('Price of the Ticket', 'James Baldwin');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// console.log(book1.getDescription());  // "Price of the Ticket was written by James Baldwin."
// console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
// console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// book1.read = true;
// console.log(book1.read); // => true
// console.log(book2.read); // => false
// console.log(book3.read); // => false

/* optional `read` parameter with a default value of `false` */
// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     getDescription() {
//       return `${this.title} was written by ${this.author}.`
//     },
//   };
// }

// let book1 = createBook('Price of the Ticket', 'James Baldwin', true);
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// console.log(book1.getDescription());  // "Price of the Ticket was written by James Baldwin."
// console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
// console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// console.log(book1.read); // => true
// console.log(book2.read); // => false
// console.log(book3.read); // => false (since book3 has no argument for `read`, it uses the default value `false`)

/* 6. add a method, `readBook`, that marks a book object as read by setting the `read` property to `true` */

// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     readBook() {
//       this.read = true;
//     },

//     getDescription() {
//       return `${this.title} was written by ${this.author}.`
//     },
//   };
// }

// let book1 = createBook('Price of the Ticket', 'James Baldwin', false);

// console.log(book1.read); // => false
// book1.readBook();
// console.log(book1.read); // => true

/* 7. update the `getDescription` method to reflect the `read` state directly */
function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    readBook() {
      this.read = true;
    },

    getDescription() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have' : "haven't"} read it.`
    },
  };
}

let book1 = createBook('The Price of the Ticket', 'James Baldwin', false);


console.log(book1.getDescription()); // The Price of the Ticket was written by James Baldwin. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // The Price of the Ticket was written by James Baldwin. I haven't read it. I have read it.

// Constructors & Prototypes - pseudo-classical inheritance

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
}

Rectangle.prototype.getLength = function() {
  return this.length;
}

Rectangle.prototype.getArea = function() {
  return this.width * this.length;
}

function Square(side) {
  Rectangle.call(this, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);

/* Understanding How to Implement Pseudo-Classical Inheritance

- Reassign `Square.prototype` to a reference to a new Object that INHERITS from RectangleFunc.prototype

- This means that Square.prototype's Internal [[Prototype]] Property references Rectangle.prototype

- This is proven in this line of code: */
// console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); // returns true

/* Resetting the constructor property

- All functions have a function prototype which can be accessed at funcName.prototype
- On the function prototype, there exists a property called 'constructor'
- The 'constructor' property on the function prototype contains a reference BACK TO THE FUNCTION ITSELF */

// console.log(Rectangle.prototype.constructor); // returns [Function: Rectangle]

// console.log(Rectangle.prototype.constructor === Rectangle); // returns true

/* What do the four lines of code below show?

First - what is in Square.prototype? Located in Square.prototype is Rectangle {}

This means that `Square.prototype` contains a reference to `Rectangle. prototype` (proven above).

So what is defined on `Square.prototype.constructor`? You can see that `Square.prototype` does NOT define an 'OWN' constructor property - which makes sense, because Square.prototype contains a reference to RectangleFunc.prototype

However, BECAUSE Square.prototype INHERITS from RectangleFunc.prototype, then Square.prototype can access the constructor property defined on RectangleFunc.prototype. This is why Square.prototype.constructor initially returns [Function: Rectangle] - this means that before the reassignment, Square.prototype.constructor contains a reference to the Function Rectangle. Therefore, we need to REASSIGN Square.prototype.constructor so it is made to refer back to the Square Function, and NOT Rectangle */

// console.log(Square.prototype); // returns Rectangle {}
// console.log(Square.prototype.hasOwnProperty('constructor')); // returns false
// console.log('constructor' in Square.prototype); // returns true
// console.log(Rectangle.prototype.hasOwnProperty('constructor')); // returns true
// console.log(Square.prototype.constructor); // returns [Function: Rectangle]

console.log(Square.prototype.constructor = Square); // [Function: Square]

let newSquare = new Square(5);
console.log(`area of square = ${newSquare.getArea()}`); // area of square = 25