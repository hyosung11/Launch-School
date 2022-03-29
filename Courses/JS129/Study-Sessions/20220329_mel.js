// Quick question for you all! I was going over the quizzes, and I noticed a way of setting the prototype for a subclass in way I’m not familiar with. Here’s the snippet, and particularly I mean the third line:
// function Animal() {}
// function Cat() {}
// Cat.prototype = new Animal();
// let fluffy = new Cat();
// console.log(fluffy instanceof Animal);
// What seems to be more common in the LS curriculum is assigning the prototype property of the subclass to an object created from the superclass’ prototype property, i.e.: Cat.prototype = Object.create(Animal.prototype);.
// Is there a functional difference between these two ways of setting inheritance? Based on the code above, Cat.prototype will point to an instance of Animal  which will still inherit from Animal.prototype, but when using Object.create, Cat.prototype will point to Animal.prototype. Both techniques still ensure that fluffy is an instance of Cat and Animal.

// Yes, there are differences. In particular, assigning a new Animal() directly to Cat.prototype gives access to everything in the Animal object to Cat objects, including ordinary properties. In most cases, prototype objects should only contain methods, so in the Object.create code, Animal.prototype probably has no data properties.
