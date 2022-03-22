/* JS120 - Object Oriented JavaScript > OO Basics: Classes > Generic Greeting (part 1)

Generic Greeting (part 1)

Modify the following code so that Hello! I'm a cat! is logged when Cat.genericGreeting is invoked. */

// class Cat {}

// Cat.genericGreeting();

// Expected output:

// Hello! I'm a cat!

// class Cat {
//   static genericGreeting() {
//     console.log("Hello! I'm a cat!");
//   }
// }

// Cat.genericGreeting();

/* Discussion

When looking at the initial example, the first thing you should note is the invocation of `genericGreeting`. It's being invoked on the `Cat` class, not an instance of `Cat`. This indicates that `genericGreeting` is a static method.

We define static methods on classes by using the `static` keyword.

To invoke static methods, they must be called on the class itself, not an instance of the class. If we invoke a static method on an instance of the class, we'll get a `TypeError`:

*/

// class Cat {
//   static genericGreeting() {
//     console.log("Hello! I'm a cat!");
//   }
// }

// let kitty = new Cat();
// kitty.genericGreeting(); // => TypeError: kitty.genericGreeting is not a function

/* JS120 - Object Oriented JavaScript > OO Basics: Classes > 10. Generic Greeting (part 2)

Generic Greeting (part 2)

Using the following code, add two methods: static method genericGreeting and instance method personalGreeting. The first method should log a greeting that's generic to the class. The second method should be an instance method and log a greeting that's custom to the object. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let kitty = new Cat('Sophie');
// Cat.genericGreeting();
// kitty.personalGreeting();

// Expected output:

// Hello! I'm a cat!
// Hello! My name is Sophie!

// Solution
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }

//   personalGreeting() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');
// Cat.genericGreeting();
// kitty.personalGreeting();

/* Discussion

The most notable difference between static and instance methods is that static methods are called on a class (constructor function), not any instance of the class. Think of static methods as generic actions a class may perform, like this:

*/

// class Cat {
//   static speak() {
//     console.log("Meow!");
//   }
// }

// Cat.speak(); // => "Meow!"

/* We know that cats meow, therefore, it makes sense to add speak as a generic action for Cat. */

/*  Jason Aricheta
4 months ago

Hi All! Interesting variation to genericGreeting. In that the definition of the static method is modified to log an output depending on the context it is executed on. */

class Cat {
  static genericGreeting() {
    // console.log('Hello! I am a Cat!')
    console.log(`Hello! I am a ${this.prototype.constructor.name}!`);
  }
}
class Dog {}
Dog.genericGreeting = Cat.genericGreeting;
Dog.genericGreeting(); // 'Hello! I am a Dog!'

/*  benjamin
about a month ago

Since this on line 4 already references the calling object, the interpolated portion can be replaced with this.name - both end up at the same place, but this.prototype.constructor.name is circular -- effectively (for Cat) "class Cat > Cat's prototype property > Cat's prototype property's constructor property, which is Cat > Cat.name" */
