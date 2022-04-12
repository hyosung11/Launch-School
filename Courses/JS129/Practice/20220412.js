/* JS120 - OOJS > Easy > 10. Pet Shelter

Consider the following code:

*/
// class Pet {
//   constructor(animal, name) {
//     this.animal = animal;
//     this.name = name;
//   }

//   info() {
//     return `${this.animal} named ${this.name}`;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   addPet(pet) {
//     this.pets.push(pet);
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }

//   printPets() {
//     this.pets.forEach(pet => console.log(pet.info()));
//   }
// }

// class Shelter {
//   constructor() {
//     this.owners = {};
//   }

//   adopt(owner, pet) {
//     owner.addPet(pet);
//     if (!this.owners[owner.name]) {
//       this.owners[owner.name] = owner;
//     }
//   }

//   printAdoptions() {
//     for (let name in this.owners) {
//       console.log(`${name} has adopted the following pets:`);
//       this.owners[name].printPets();
//       console.log("");
//     }
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding = new Pet('cat', 'Pudding');
// let darwin = new Pet('bearded dragon', 'Darwin');
// let kennedy = new Pet('dog', 'Kennedy');
// let sweetie = new Pet('parakeet', 'Sweetie Pie');
// let molly = new Pet('dog', 'Molly');
// let chester = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

/*
P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     let discount = item.price * percent / 100;
//     return item.price - discount;
//   },
// };

// console.log(item.discount(20))   // should return 40

// console.log(item.discount(50))   // should return 25

// console.log(item.discount(25))   // should return 37.5

let foo = {
  a: 0,
  incrementA: function () {
    function increment() {
      this.a += 1;
    }

    increment();
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a); // => 0

// Describe this code:

class Dog {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Woof! My name is ${this.name}.`)
  }
}

/* This code defines a `Dog` class with a `constructor` method and a `sayHello` method. The `constructor` method initializes a new `Dog` object by assigning the instance property `this.name` to the dog's name specified by the argument. The `sayHello` instance method logs a message to the console that includes the dog's name in place of `${this.name}`. The instance method `sayHello` returns `undefined`. */