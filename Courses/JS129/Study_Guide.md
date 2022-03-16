# JS129 Assessment: Object Oriented Programming > Specific Topics of Interest

## 1. Objects, Object Factories (Factory Functions), Constructors and Prototypes, OLOO, and ES6 classes

### 1.1 Objects

`Object.prototype.isPrototypeOf()`
The `isPrototypeOf(object)` method checks if an object exists in another object's prototype chain.

```js
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// prototype chains:
// foo: Foo <- Object
// bar: Bar <- Foo <- Object
// baz: Baz <- Bar <- Foo <- Object

console.log(Baz.prototype.isPrototypeOf(baz));    // true
console.log(Baz.prototype.isPrototypeOf(bar));    // false
console.log(Baz.prototype.isPrototypeOf(foo));    // false
console.log(Bar.prototype.isPrototypeOf(baz));    // true
console.log(Bar.prototype.isPrototypeOf(foo));    // false
console.log(Foo.prototype.isPrototypeOf(baz));    // true
console.log(Foo.prototype.isPrototypeOf(bar));    // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

### 1.2 Object Factories / Factory Functions

```js
// Factory Function / Object Factory
function createRectangle(width, length) {
  return {
    width: width, // width,
    length: length, // length,

    getWidth() {
      return this.width;
    },

    getLength() {
      return this.length;
    },

    getArea() {
      return this.width * this.length;
    },
  };
}

let rectangle = createRectangle(4, 5);

// console.log(rectangle.getWidth()); // 4
// console.log(rectangle.getLength()); // 5
// console.log(rectangle.getArea()); // 20
```

### 1.3 Constructors and Prototypes

- pseudo-classical inheritance

```js
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

let rectangle1 = new Rectangle(5, 4);
console.log(rectangle1.getWidth()); // 4
console.log(rectangle1.getLength()); // 5
console.log(rectangle1.getArea()); // 20
```

### 1.4 OLOO (Objects Linking with Other Objects)

- Prototypal inheritance
- uses `init` and an explicit return in the constructor

```js
// OLOO (uses `init` and an explicit return in the constructor)
let rectanglePrototype = {
  init(length, width) {
    this.width = width;
    this.length = length;
    return this;
  },

  getWidth() {
    return this.width;
  },

  getLength() {
    return this.length;
  },

  getArea() {
    return this.width * this.length;
  },
};

let olooRectangle = Object.create(rectanglePrototype).init(5, 4);

console.log(olooRectangle.getWidth()); // 4
console.log(olooRectangle.getLength()); // 5
console.log(olooRectangle.getArea()); // 20
```

### 1.5 ES6 Classes

```js
// ES6 Class (Pseudo-classical)
// class declaration
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

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
```

Discussion

The solution to the problem is straightforward. In the constructor function we are creating two properties `width` and `length` and assigning to them values of parameters with the same name.

To access the value of each property within methods, we use the `this` keyword in front of each property name.

## 2. Methods and Properties; Instance and Static Methods and Properties

### 2.1 Instance Methods

### 2.2 Static Methods

## 3. Prototypal and Pseudo-classical Inheritance

### 3.1 Prototypal Inheritance

objects inheriting properties from other objects

### 3.2 Pseudo-classical Inheritance

## 4. Encapsulation

## 5. Polymorphism

### 5.1 Duck Typing

Synora Eusebio (JS129)
For anyone that’s interested, I wrote out a full implementation of the Polymorphism via Duck Typing example. I had to rework the prepare method in the Wedding constructor in order to get that specific method to work.

```js
class Chef {
  constructor(guests, flowers, songs) {
    this.guests = guests; 
    this.flowers = flowers; 
    this.songs = songs;
  }
  prepare(wedding) { 
    return this.prepareFood(wedding.guests);
  }

  prepareFood(guests) {
    return `Prepare food for ${this.guests} guests!`;
  }
}

let chef = new Chef(200, 'tulips', ["Electric Slide", "Cha-Cha Slide"]);
console.log(chef);
/*
Chef {
  guests: 200,
  flowers: 'tulips',
  songs: [ 'Electric Slide', 'Cha-Cha Slide' ]
}
*/
console.log(chef.prepare(chef.guests)); // Prepare food for 200 guests!
console.log(chef.prepareFood(chef.guests)); //Prepare food for 200 guests!

class Decorator {
  constructor(guests, flowers, songs){
    this.guests = guests;
    this.flowers = flowers; 
    this.song = songs;
  }
  prepare(wedding) {
    return this.decoratePlace(wedding.flowers);
  }

  decoratePlace(flowers) {
    return `Where are my ${this.flowers}??`;
  }
}

let decorator = new Decorator(300, 'roses', ["Electric Slide", "Cha-Cha Slide"]);
console.log(decorator);

/*
Decorator {
  guests: 300,
  flowers: 'roses',
  song: [ 'Electric Slide', 'Cha-Cha Slide' ]
}
*/
console.log(decorator.prepare(decorator.flowers)); //Where are my roses??
console.log(decorator.decoratePlace(decorator.flowers)); //Where are my roses??


class Musician {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers; 
    this.songs = songs;
  }
  prepare(wedding) {
    return this.preparePerformance(wedding.songs);
  }

  preparePerformance(songs) {
    return `Prepare the following songs: ${this.songs}`;
  };
}

let musician = new Musician (400, 'carnations', ["Electric Slide", "Cha-Cha Slide"]);
console.log(musician);
/*
Musician {
  guests: 400,
  flowers: 'carnations',
  songs: [ 'Electric Slide', 'Cha-Cha Slide' ]
}
*/

console.log(musician.prepare(musician.songs));//Prepare the following songs: Electric Slide,Cha-Cha Slide
console.log(musician.preparePerformance(musician.songs)); //Prepare the following songs: Electric Slide,Cha-Cha Slide

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => console.log(preparer));
  }
}

let wedding = new Wedding (400, 'daisy', ["Electric Slide", "Cha-Cha Slide"]);

console.log(wedding);
/*
Wedding {
  guests: 400,
  flowers: 'daisy',
  songs: [ 'Electric Slide', 'Cha-Cha Slide' ]
}
*/

wedding.prepare([chef.prepare(chef.guests), decorator.prepare(decorator.flowers), (musician.prepare(musician.songs))]);
/*
Prepare food for 200 guests!
Where are my roses??
Prepare the following songs: Electric Slide,Cha-Cha Slide
*/
```

## 6. Collaborator Objects

## 7. Single vs Multiple Inheritance

### 7.1 Single Inheritance

Objects can only inherit from one object, and classes can extend only one other class. In other words, an object can have only one prototype object. This is single inheritance.



### 7.2 Multiple Inheritance

## 8. Mix-ins; mix-ins vs. inheritance

### 8.1 Mixins

### 8.2 Mixins vs Inheritance

## 9. Methods and functions; method invocation vs. function invocation

### 9.1 Method Invocation

### 9.2 Function Invocation

## 10. Higher-order functions

## 11. The global object

`global`
`window`

## 12. Method and property lookup sequence

## 13. Function execution context and `this`

## 14. Implicit and explicit execution context

## 15. Dealing with context loss

## 16. `call`, `apply`, and `bind`

## 17. `Object.assign` and `Object.create`

## 18. Built-in constructors like `Array`, `Object`, `String` and `Number`

## 19. Reading OO code
