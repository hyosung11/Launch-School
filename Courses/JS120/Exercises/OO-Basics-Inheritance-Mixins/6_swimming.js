/* JS120 - Object Oriented JavaScript > OO Basics: Inheritance and Mixins > Swimming

Swimming

Correct the following program so it will work properly. Just make the smallest possible change to ensure that objects of Maltese and Fish class have access to the swim method. */

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   },
// };

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {}

// let dog1 = new Maltese('Buddy');
// let fish1 = new Fish('Nemo');

// console.log(dog1.swim());
// console.log(fish1.swim());

// Expected output:

// Buddy is swimming.
// Nemo is swimming.

// My working solution
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  },
};

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

Object.assign(Fish.prototype, swimMixin);
Object.assign(Dog.prototype, swimMixin);

let dog1 = new Maltese('Buddy');
let fish1 = new Fish('Nemo');

console.log(dog1.swim());
console.log(fish1.swim());

// LS Solution
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  },
};

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {
  constructor(name) {
    super(name);
    Object.assign(this, swimMixin);
  }
}

let dog1 = new Maltese('Buddy');
let fish1 = new Fish('Nemo');

console.log(dog1.swim());
console.log(fish1.swim());

/* Discussion

Methods inside a mixin can be added to a class by simply using Object.assign method inside of the constructor method and passing this and a name of the mixin as its arguments.

However, note that using Object.assign like this adds a copy of the mixed-in methods directly to each new object. It is better to assign the mixins to the prototype object, like so:

*/

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {
  constructor(name) {
    super(name);
  }
}

Object.assign(Fish.prototype, swimMixin);
Object.assign(Maltese.prototype, swimMixin);