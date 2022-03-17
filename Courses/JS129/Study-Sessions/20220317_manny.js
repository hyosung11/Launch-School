/* 12:45  */

/* Consider the following program. */

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age)
    this.color = color;
  }
  
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');
let tabby = new Cat('Tabby', 11, 'purple and black');

console.log(pudding.info() === 
'My cat Pudding is 7 years old and has black and white fur.');
// console.log(butterscotch.info());
// console.log(tabby.info());

/* Update this code so that when you run it, you see the following output:

My cat Pudding is 7 years old and has black and white fur.
My cat Butterscotch is 10 years old and has tan and white fur. */

/* Solution */
class Cat extends Pet {
  constructor(name, age, colors) {
    super(name, age);
    this.colors = colors;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`
  }
}

/* Discussion */
/* Discussion

Since constructor method in Cat class requires arguments that differ from constructor method in Pet class, we must define a constructor method for Cat, and that method must be sure to call super.

Finally, we just need to define info method on Cat class that returns required message.

Further Exploration

An alternative approach to this problem would be to modify the Pet class to accept a colors parameter. If we did this, we wouldn't need to supply an constructor method for Cat.

Why would we be able to omit the constructor method? Would it be a good idea to modify Pet in this way? Why or why not? How might you deal with some of the problems, if any, that might arise from modifying Pet? 

Further Exploration

    Why would we be able to omit the constructor method?
        We can ommit the constructor method of the subtype class in the case that the constructor method of the super type is of sufficient functionality for the instatiated objects from the subtype. By ommitting constructor in Cat, we are delegating this behavior to the supertype upon instantiation.
    Would it be a good idea to modify Pet in this way? Why or why not?
        Depends. If we are certain that the colors property is required by all classes which has a subtype relationship with Pet, then yes. However, the more functionality that we defer to the supertype constructor, the subtype classes have to be more specific in their instantiation (more arguments, supertype is less abstracted). If the classes have consistent levels of abstraction in the program, this should not be an issue
    How might you deal with some of the problems, if any, that might arise from modifying Pet?
        Use a guard clause to facilitate an optional argument and property. IE: in the supertype's constructor: if (color) this.color = color;

Comment
Elaine Vuong
4 months ago

Can also consider providing a default argument of color = undefined within the Pet constructor, to account for occurrences where some Pet instances do not have any color.
*/

/* Animals

Given a class Animal create two classes Cat and Dog that inherit from it.

The Cat constructor should take 3 arguments, name, age and status. Cats should always have a leg count of 4 and a species of cat. Also, the introduce method should be identical to the original except, after the phrase there should be a single space and the words Meow meow!. For example: */

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true

/*
The Dog constructor should take 4 arguments, name, age and status and master. Dogs should always have a leg count of 4 and a species of dog. Dogs have the same introduce method as any other animal, but they have their own method called greetMaster(), which accepts no arguments and returns Hello (master's name)! Woof, woof!. (Make sure you replace (master's name) with the name of the dog's master.) */

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
  constructor(name, age, status, legs = 4, species = "cat") {
    super(name, age, status, legs, species);
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
  }
}


class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()} Meow meow!`;
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce())
//  === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true