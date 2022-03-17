/* JS120 - Object Oriented JavaScript > Easy > Complete the Program - Cats!

Complete the Program - Cats!

Consider the following program. */

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  // insert code here:
  constructor(name, age, colors) {
    super(name, age); // `super` refers to `Pet`'s constructor method
    this.colors = colors;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info() === 'My cat Pudding is 7 years old and has black and white fur.') // true

console.log(butterscotch.info() === 'My cat Butterscotch is 10 years old and has tan and white fur.'); // true

/* Update this code so that when you run it, you see the following output:

My cat Pudding is 7 years old and has black and white fur.
My cat Butterscotch is 10 years old and has tan and white fur.

Discussion

Since the `constructor` method in the `Cat` class requires arguments that differ from the `constructor` method in the `Pet` class, we must define a `constructor` method for `Cat`, and that method must be sure to call `super`.

- I added the below from my notes:
 When called inside the `constructor` method, the `super` keyword refers to the constructor method for the parent class (the class that we inherit from).

Finally, we just need to define the `info` method on the `Cat` class that returns the required message.

Further Exploration

An alternative approach to this problem would be to modify the `Pet` class to accept a colors parameter. If we did this, we wouldn't need to supply a `constructor` method for `Cat`.

Why would we be able to omit the `constructor` method? Would it be a good idea to modify `Pet` in this way? Why or why not? How might you deal with some of the problems, if any, that might arise from modifying `Pet`?

Jason Aricheta
4 months ago

Further Exploration

Why would we be able to omit the constructor method?
- We can omit the constructor method of the subtype class in the case that the constructor method of the super type is of sufficient functionality for the instantiated objects from the subtype. By omitting `constructor` in `Cat`, we are delegating this behavior to the supertype upon instantiation.

- Would it be a good idea to modify Pet in this way? Why or why not?
Depends. If we are certain that the `colors` property is required by all classes which has a subtype relationship with Pet, then yes. However, the more functionality that we defer to the supertype constructor, the subtype classes have to be more specific in their instantiation (more arguments, supertype is less abstracted). If the classes have consistent levels of abstraction in the program, this should not be an issue.

How might you deal with some of the problems, if any, that might arise from modifying Pet?
- Use a guard clause to facilitate an optional argument and property. E.g., in the supertype's constructor: if (color) this.color = color;

3 Likes Comment

Elaine Vuong
4 months ago

Can also consider providing a default argument of `color = undefined` within the `Pet` constructor, to account for occurrences where some `Pet` instances do not have any color.

*/