/* JS120 - Object Oriented JavaScript > Easy > Moving

Moving

You have the following classes. */

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return 'strolls';
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return 'saunters';
//   }
// }

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return 'runs';
//   }
// }

/* You need to modify the code so that this works: */

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

/* You are only allowed to write one new method to do this */

const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward.`
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return 'strolls';
  }
}

Object.assign(Person.prototype, walkMixin);

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return 'saunters';
  }
}

Object.assign(Cat.prototype, walkMixin);

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return 'runs';
  }
}

Object.assign(Cheetah.prototype, walkMixin);


let mike = new Person("Mike");
console.log(mike.walk()); // "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk()); // "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk()); // "Flash runs forward"

/* Discussion

You can use the `walkMixin` with any class that defines properties `gait` and `name`. You can also define a parent class and make the other classes inherit from that class.

Mixins are more appropriate in a has-a relationship. While it is sometimes tricky to choose one or the other, a great guideline is to decide if you want some additional functionality, or if you want to extend the abilities of the class. In this case, it is pretty clear that we need the functionality of walking; we don't need to extend the abilities of class `Person`(extending the abilities of a class coincides with an is-a relationship, not has-a).

Bob Rodes

This is one of those interesting discussions that engineers have where there are good points to be made on both sides. "Has-a" or "is-a"? Aggregation or inheritance? Mixins or superclasses?

A counterargument to the one in favor of mixins in this case is that coupling principles dictate that a mixin should be a self-contained unit. In other words, it should not depend on the existence of a method or property in the classes into which it is to be mixed. In this specific case, if the consumer of the mixin fails to provide a gait method, the walk method crashes. Some would say that this violates coupling principles.

However, this can be easily (albeit somewhat rigidly) addressed by providing an alternative to the gait method: */

// const walkMixin = {
//   walk() {
//     let gait = typeof this.gait === 'function' ? this.gait() : 'walks';
//     return `${this.name} ${gait} forward`;
//   },
// };

/* Nevertheless, while it is true that an animal "has a" gait (at least most of them do), it is also true that an animal with a gait "is a" WalkingAnimal. So, you can really argue for either mixins or inheritance, and set it up either way.

The best argument for the mixin is that the implementation is simpler. Scaling that argument to a large real-world situation, it reduces maintenance overhead and therefore cost. The counterargument is that it may not be as flexible as inheritance, so future maintenance overhead could be negatively impacted.

The coupling problem persists even if you use inheritance. What happens if you create a superclass `WalkingAnimal` with a `walk` method that depends on a `gait` method in a subclass? If you directly instantiate `WalkingAnimal`, or fail to provide a `gait` method in the subclass, invoking `walk` will throw an error.

There are several ways to address this.

One way is to disallow direct instantiation of the superclass, and require implementation of the gait method (this effectively creates an abstract class):  */

// class WalkingAnimal {
//   constructor(name) {
//     if (this.constructor === WalkingAnimal) {
//       throw new TypeError(
//         "'WalkingAnimal' class cannot be directly instantiated."
//       );
//     }

//     if (typeof this.gait !== 'function') {
//       throw new TypeError(
//         `'${this.constructor.name}' class must implement a 'gait' method.`
//       );
//     }

//     this.name = name;
//   }
// }

// class Person extends WalkingAnimal {
//   gait() {
//     return 'strolls';
//   }
// }

// class Cat extends WalkingAnimal {
//   gait() {
//     return 'saunters';
//   }
// }

// class Cheetah extends WalkingAnimal {
//   gait() {
//     return 'runs';
//   }
// }

/* That's a bit abstruse, but it does have the advantage of telling consumers of the class what to do, while avoiding telling them how to do it.

A simpler way is to provide a gait method in the superclass, that will be invoked unless the subclass overrides it: */

// class WalkingAnimal {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return 'walks';
//   }

//   walk() {
//     return `${this.name} ${this.gait()} forward.`;
//   }
// }

// class Person extends WalkingAnimal {
//   // gait() {
//   //   return "strolls";
//   // }
// }

// class Cat extends WalkingAnimal {
//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah extends WalkingAnimal {
//   gait() {
//     return "runs";
//   }
// }

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike walks forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

/* This is simpler than implementing an abstract class architecture, at the cost of making an implementation decision for the consumer (providing a default if the consumer doesn't implement a gait method). This is unlikely to be a "real" cost in this problem domain, but in every architectural decision, it's worth keeping in mind the lengths you are willing to go to avoid telling consumers how to implement your class. Here, it seems fine to say that walk "walks" unless a subclass wants to provide a different verb.

Another way — and, to my mind, the best way in this situation — is to implement gait as a property rather than a method ("best" because gait isn't really an action, but an attribute, so it's better implemented as a property than a method): */

// class WalkingAnimal {
//   constructor(name, gait = 'walks') {
//     this.name = name;
//     this.gait = gait;
//   }

//   walk() {
//     return `${this.name} ${this.gait()} forward.`;
//   }
// }

// class Person extends WalkingAnimal {
//   constructor(name) {
//     super(name);
//   }
// }

// class Cat extends WalkingAnimal {
//   constructor(name) {
//     super(name, 'saunters');
//   }
// }

// class Cheetah extends WalkingAnimal {
//   constructor(name) {
//     super(name, 'runs');
//   }
// }

/*  Lots of different ways to go!*/