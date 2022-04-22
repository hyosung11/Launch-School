// subtyping with constructors

function Animal(animal) {
  this.animal = animal;
}

Animal.prototype.move = function () {
  console.log('I am moving');
};

function Bird() {
  Animal.call(this, 'bird');
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

let newBird = new Bird();
newBird.move();
console.log(newBird);

/*
function Animal(animal) {
  this.animal = animal;
}

function Bird() {

}
*/
// subtyping with constructors

function Animal (animal) {
  this.animal = animal;
}

Animal.prototype.move = function () {
  console.log("I am moving");
}

function Bird () {
  Animal.call(this, "bird");
}

Bird.prototype = Object.create(Animal.prototype); // {} --> Animal.prototype
Bird.prototype.constructor = Bird; // { constructor: Bird } --> Animal.prototype

Bird.prototype.fly = function () {
  console.log("Flying");
}

// { 
//  constructor: Bird,
//  fly: function () {}
// } 
// --> Animal.prototype {constructor: Animal}

let parrot = new Bird();
parrot.move();
console.log(parrot);

let hawk = new Bird();
hawk.fly();

let eagle = new Bird();
eagle.fly();

console.log(eagle instanceof Bird);
console.log(eagle.constructor);

// super keyword

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Bird extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }
}

let parrot = new Bird("Parrot", 2);
console.log(parrot);


const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

// variable in outer scope
// arrow function
// bind
// `thisArg` passed as second argument to `forEach`


// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// variable in outer scope
// arrow function
// bind
// `thisArg` passed as second argument to `forEach`

// invocation as regular function call references the global object
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.bind(this)();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a)

// `call` 
// arrow function
// variable in outer scope 
// `bind` immediately invoked

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?

const Animal = function(species) {
  this.species = species;
  return species;
};

Animal.prototype.sleep = function() {
  console.log(`The ${this.species} is sleeping`);
};

let lion = new Animal('Panthera leo');
lion.sleep(); // TypeError

// Without running the code, determine the type of data that the dog, lion, and cat variables would reference if you were to run it.

function Dog() {
}

function Pet(type) {
  if (type === 'dog') {
    return new Dog();
  } else if (type === 'lion') {
    return 'not a pet!';
  }
}

let dog = new Pet('dog'); // ?
let lion = new Pet('lion'); // ?
let cat = new Pet('cat'); // ?

console.log(dog);
console.log(lion); // Pet {}
console.log(cat);

// // On `line 12` this code logs `Woof!` to the console. Since the `bark` method refers to `this` and `bark` belongs to the `Dog` Function Prototype, (i.e. since `bark` belongs to `Dog.prototype`) you may think that `this` in `this.weight` refers to the prototype object rather than the object itself. Explain why this is not the case.

// // It is not the case because `this` is defined by the type of invocation, not by how it has been defined.

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function() {
//   console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// };

// // this = global
// let maxi = new Dog('Maxi', 'German Shepherd', 32); // this = new object which is assigned to maxi
// // this = global
// maxi.bark(); // returns 'Woof!' this = maxi

// let person = {
//   firstName: "Laurent",
//   lastName: "Staub",
//   fullName: this.firstName + this.lastName,
// }

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  }
}

let alex = createPerson('Alex', 'Great');
/*
alex {
  firstName: "Alex",
  lastName: "Great",
  fullName: this.firstName + this.lastName,
}
*/
console.log(alex.fullName());

// We have created dexter, a new instance of Dog. However, dexter should have a low and loud bark - when he barks, log GROOOWL! to the console. Demonstrate and explain how this can be done.

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let dexter = new Dog('Dexter', 'Rottweiler', 50);
// console.log(Object.getPrototypeOf(Dog.prototype));
console.log(Object.getPrototypeOf(dexter) === Dog.prototype);
console.log(dexter.__proto__);
// console.log(Object.getPrototypeOf(Object.getPrototypeOf('dexter')));

// dexter.bark();

// dexter.bark = function() {
//   console.log(`GROOOWL!`);
// }

// dexter.bark()

// What does the following code log to the console, and explain why the code produces the output it does. How would you fix the problem in the code below?

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1);
console.log(rect1.area); // ?
console.log(rect1.perimeter); // ?