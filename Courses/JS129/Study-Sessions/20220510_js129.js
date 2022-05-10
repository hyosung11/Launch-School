/* JS129 Study Group

Karl, Vikram Swarmy, Alex Stein, HyoSung

prepare default examples as a template for the interview
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} says: Woof! Woof!`);
}

let fido = new Dog('Fido');
fido.bark() // 'Fido says: Woof! Woof!'
console.log(fido instanceof Dog); // true

/* Using `new` and not using `new`. */

function Dog(name) {
  let obj = {};
  Object.setPrototypeOf(obj, Dog.prototype);
  // let obj = Object.create(Dog.prototype)
  obj.name = name;
  return obj;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} says: Woof! Woof!`);
}

let fido = Dog('Fido');
fido.bark();
console.log(fido instanceof Dog);

/* Scope safe constructor */

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log('Meow');
  }

  eat() {
    console.log('Im eating');
  }
}

class Tabby extends Cat {
  constructor(name, color, socks) {
    super(name, color);
    this.socks = socks;
  }

  speak() {
    super.speak();
    console.log('Tabby Meow');
  }
}

let tabby = new Tabby('ann', 'grey', 'white');

tabby.eat();
tabby.speak();
console.log(tabby instanceof Cat);

/* resolves to undefined in strict mode */