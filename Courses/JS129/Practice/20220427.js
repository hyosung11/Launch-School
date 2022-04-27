/* What will the following code log? */
// class Something {
//   constructor() {
//     this.data = 'Hello';
//   }

//   dupData() {
//     return this.data + this.data;
//   }

//   static dupData() {
//     return 'ByeBye';
//   }
// }

// let thing = new Something();
// console.log(Something.dupData()); // line 16
// console.log(thing.dupData()); // line 17

/* The code will log `'ByeBye'` and `'HelloHello'`. Here we see two methods named `dupData` in the `Something` class. However, one is defined as `dupData`, and is thus an instance method. The other has the `static` keyword in front of its name and so it is a static method. The two methods are different, and completely independent of each other.

Our code first creates a `Something` object, and then logs the result of `Something.dupdata`, on line 16, and then `thing.dupData` on line 17. The former invocation calls the static method (`dupData`) and logs "ByeBye". The latter invocation calls the instance method, and logs "HelloHello". */

/* Shouter

Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. Person exposes method greeting which when called logs the provided greeting text. Shouter is a subtype of Person and is a bit loud so whatever he says is uppercased.

*/

// function Person() {
// }
// Person.prototype.greeting = function(text) {
//   console.log(text);
// }

// function Shouter() {
//   Person.call(this);
// }
// Shouter.prototype = Object.create(Person.prototype)
// Shouter.prototype.greeting = function(text) {
//   Person.prototype.greeting.call(this, text.toUpperCase()); // method invocation on the object's parent
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase()); // use the `super` keyword to invoke the method `greeting()` on the object's parent and pass the uppercased text to it.
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

/* The `Person` class is a supertype of the `Shouter` class. The `Person` class defines a method `greeting` which logs the value stored in `text` to the console. Within the implementation of `greeting` on the `Shouter` class, we want to invoke the `greeting` method defined on the `Person` and pass in an uppercase text argument. Our solution employs the `super` keyword to access and call functions on an object's parent. */

// Moving
// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return 'strolls';
//   }
// }

// Object.assign(Person.prototype, walkMixin);

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return 'saunters';
//   }
// }

// Object.assign(Cat.prototype, walkMixin);

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return 'runs';
//   }
// }

// Object.assign(Cheetah.prototype, walkMixin);

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// "Flash runs forward"

/* Discussion

You can use the `walkMixin` with any class that defines properties `gait` and `name`. You can also define a parent class and make the other classes inherit from that class.

Mixins are more appropriate in a has-a relationship to add some additional functionality, or to extend the abilities of the class. In this case, we need the functionality of walking. We don't need to extend the abilities of class `Person`. Extending the abilities of a class coincides with an is-a relationship, not has-a. */

class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }

  info() {
    return `a ${this.animal} named ${this.name}`
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(pet => console.log(pet.info()));
  }
}

class Shelter {
  constructor() {
    this.owners = {};
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.owners[owner.name]) {
      this.owners[owner.name] = owner;
    }
  }

  printAdoptions() {
    for (let name in this.owners) {
      console.log(`${name} has adopted the following pets:`);
      this.owners[name].printPets();
      console.log("");
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding = new Pet('cat', 'Pudding');
let darwin = new Pet('bearded dragon', 'Darwin');
let kennedy = new Pet('dog', 'Kennedy');
let sweetie = new Pet('parakeet', 'Sweetie Pie');
let molly = new Pet('dog', 'Molly');
let chester = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);