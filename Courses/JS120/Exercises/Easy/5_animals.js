/* JS120 - Object Oriented JavaScript > Easy > 5. Animals

Animals

Given a class `Animal` create two classes `Cat` and `Dog` that inherit from it.

The `Cat` constructor should take 3 arguments, `name`, `age` and `status`. Cats should always have a leg count of `4` and a species of `cat`. Also, the `introduce` method should be identical to the original except, after the phrase there should be a single space and the words `Meow meow!`. For example: */

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

/* The `Dog` constructor should take 4 arguments, `name`, `age` and `status` and `master`. Dogs should always have a leg count of `4` and a species of `dog`. Dogs have the same `introduce` method as any other animal, but they have their own method called `greetMaster()`, which accepts no arguments and returns `Hello (master's name)! Woof, woof!`. (Make sure you replace (master's name) with the name of the dog's master.) */

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cats', status);
  }

  introduce() {
    return `${super.introduce()} Meow meow!`
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

let panther = new Cat('Black Panther', 5, 'calm');
console.log(panther.introduce()); // Hello, my name is Black Panther and I am 5 years old and calm. Meow meow!
console.log(panther)
// Cat {
//   name: 'Black Panther',
//   age: 5,
//   legs: 4,
//   species: 'cats',
//   status: 'calm'
// }

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`
  }
}

let dog = new Dog('Rusty', 7, 'excited', 'Oliver');
console.log(dog.introduce());
console.log(dog.greetMaster()); // Hello Oliver! Woof, woof!

/* Discussion

In the `Cat` class we are using the `super` keyword to invoke the constructor method of the parent class `Animal`. We need to pass 5 arguments to it (name, age, legs, species, status), as this is how many arguments the `Animal` constructor method takes.

As the `introduce()` method in the `Cat` class is just a slight modification of the method with the same name, from the parent class, we can use again the `super` keyword to invoke that method on the object's parent like this `super.introduce()`. Finally, we just need to concatenate to the return value of this method string "Meow, meow!", which we did using template strings.

In the `Dog` class constructor method, we are like in the `Cat` class, using the `super` keyword to invoke the constructor method from the `Animal` class. Also, within this method, we are instantiating a new property called `master`. Then, within the `greetMaster()` method, we are accessing the value of this property using the `this` keyword. */