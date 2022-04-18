// let pipe = {
//   name: 'This is not a Pipe',
//   dateCreated: 1929,
//   declareName: function() {
//     console.log('This is not a Pipe');
//   },
// };

// console.log(pipe.name); // 'This is not a Pipe'
// console.log(pipe.dateCreated); // 1929
// pipe.declareName(); // 'This is not a Pipe'

// console.log(pipe.hasOwnProperty('name')); // true

// let man = {
//   name: 'The Son of Man',
//   dateCreated: 1946,
// }

// console.log(pipe.constructor); // [Function: Object]
/* Every object in JavaScript has an internal prototype property [[Prototype]] */

/* Check the "hidden prototype reference" */
// console.log(pipe.__proto__ === Object.prototype); // true
// console.log(Object.getPrototypeOf(pipe) === Object.prototype); // true

// console.log(pipe.hasOwnProperty('constructor')); // false
// console.log(Object.prototype.hasOwnProperty('constructor')); // true

/* Focus on Object.prototype */

// console.log(Object.prototype.hasOwnProperty('constructor')); // true
// console.log(Object.prototype.constructor); // [Function: Object]
// console.log(Object.prototype); // [Object: null prototype] {}

// console.log(Object.getPrototypeOf(Object.prototype) === null); // true
// console.log(Object.getPrototypeOf(Object) === Function.prototype); // true

// console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype); //true
// console.log(Object.getPrototypeOf(Function) === Function.prototype); //true

// console.log(Function.prototype.constructor); // [Function: Function]

/* Every object has a hidden [[Prototype]] property that points to its prototype object. */

/* =================
OOP Part 2 */

// let coolBeansArr = ["pinto", "coffee", "jelly"];

// console.log(typeof coolBeansArr); // object

// console.log(coolBeansArr.constructor); // [Function: Array]
// console.log(coolBeansArr.hasOwnProperty('constructor')); // false

// console.log(Object.getPrototypeOf(coolBeansArr) === Array.prototype); // true

// console.log(Array.prototype.constructor === coolBeansArr.constructor); // true

// console.log(Object.getPrototypeOf(Array) === Function.prototype); // true
// console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

/* OOP Part 3 Factory Functions */

// function hitSong(name, date) {
//   return {
//     name: name,
//     date: date,
//     genericLyrics() {
//       return "Not too specific, not too edgy, but still relevant, upbeat."
//     },

//     phatBeat() {
//       return 'Four on the floor am I right?';
//     },

//     catchyHook() {
//       return "little funky, almost annoying ... but it won't leave your head"
//     }
//   }
// };

// let partyRock = hitSong('Party Rock Anthem', 2011);
// let leanOn = hitSong('Lean On', 2015);

// // console.log(partyRock.hasOwnProperty('genericLyrics')); // true

// // console.log(Object.getPrototypeOf(partyRock) === Object.prototype);

// console.log(partyRock.constructor); // [Function: Object]

/* OOP Part 4: Constructors with Prototypes */

// function HitSong(title, date) {
//   this.title = title;
//   this.date = date;

//   this.genericLyrics = function() {
//     return `Not too specific, not too edgy, but still relevant, upbeat.`;
//   };

//   this.phatBeat = function() {
//     return `Four on the floor am I right??`;
//   };

//   this.catchyHook = function() {
//     return `little funky, almost annoying ... but it won't leave your head`;
//   };
// }

// let partyRock = new HitSong('Party Rock Anthem', 2011);

/* `new` keyword

1. Creates an entirely new object.
2. Sets the Constructor.prototype as the prototype for the new object.
3. Sets the execution context (`this`) for the function to the new object.
4. It invokes the function.
5. It returns the new object unless the function returns another object.

*/

// console.log(partyRock.title); // Party Rock Anthem
// console.log(partyRock.phatBeat()); // Four on the floor am I right??

// console.log(partyRock.hasOwnProperty('title')); // true
// console.log(partyRock.hasOwnProperty('phatBeat')); // true

// console.log(partyRock instanceof HitSong); // true
// console.log(partyRock.constructor); // [Function: HitSong]

// console.log(Object.getPrototypeOf(partyRock) === HitSong.prototype);

// function HitSong(title, date) {
//   this.title = title;
//   this.date = date;
// }

// HitSong.prototype.genericLyrics = function () {
//   return `Not too specific, not too edgy, but still relevant, upbeat.`;
// };

// HitSong.prototype.phatBeat = function () {
//   return `Four on the floor am I right??`;
// };

// HitSong.prototype.catchyHook = function () {
//   return `little funky, almost annoying ... but it won't leave your head`;
// };

// let partyRock = new HitSong('Party Rock Anthem', 2011);
// let leanOn = new HitSong('Lean On', 2015);

// console.log(partyRock.hasOwnProperty('genericLyrics')); // false

// console.log(partyRock.genericLyrics()); // Not too specific, not too edgy, but still relevant, upbeat.

/* Derivative */
// function HitSong(title, date) {
//   this.title = title;
//   this.date = date;
// }

// HitSong.prototype.genericLyrics = function () {
//   return `Not too specific, not too edgy, but still relevant, upbeat.`;
// };

// function DanceHitSong(title, date) {
//   HitSong.call(this, title, date);
// };

// DanceHitSong.prototype = Object.create(HitSong.prototype);
// DanceHitSong.prototype.constructor = DanceHitSong;

// DanceHitSong.prototype.phatBeat = function () {
//   return `Four on the floor am I right??`;
// };

// DanceHitSong.prototype.catchyHook = function () {
//   return `little funky, almost annoying ... but it won't leave your head`;
// };

// let leanOn = new DanceHitSong('Lean On', 2015);

// function RockHitSong(title, date) {
//   HitSong.call(this, title, date);
// }

// RockHitSong.prototype = Object.create(HitSong.prototype);
// RockHitSong.prototype.constructor = RockHitSong;

// RockHitSong.prototype.lyricalHook = function() {
//   return `I could sing this all day ...`;
// }
// RockHitSong.prototype.solidGuitarRiff = function() {
//   return `More cowbell ...`;
// }

// let bornToBeWild = new RockHitSong("Born To Be Wild", 1968);

// console.log(leanOn.title);
// console.log(leanOn.date);
// console.log(leanOn.genericLyrics());
// console.log(leanOn.phatBeat());
// console.log(leanOn.catchyHook());

// console.log(HitSong.prototype.constructor);
// console.log(DanceHitSong.prototype.constructor);
// console.log(leanOn.constructor);

// console.log(DanceHitSong.prototype.hasOwnProperty('constructor')); // true

/* OOP Part 5: ES6 Classes */

// class HitSong {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   genericLyrics() {
//     return `Not too specific, not too edgy, but still relevant, upbeat.`;
//   }
// }

// class DanceHitSong extends HitSong {
//   constructor(title, date) {
//     super(title, date); // `super` invokes the parent constructor
//   }

//   phatBeat() {
//     return 'Four on the floor am I right??';
//   }

//   catchyHook() {
//     return 'little funky, almost annoying ...';
//   }
// }

// let leanOn = new DanceHitSong('Lean On', 2015);

/* OOP 6: OLOO */

let person = {
  eat() {
    console.log("I'm full.");
  },

  sleep() {
    console.log("I'm rested.");
  },

  init(name, wears) {
    this.name = name;
    this.wears = wears;
    return this;
  }
}

let milton = Object.create(person).init('Milton', 'The Pants');
console.log(milton.wears); // The Pants
milton.sleep(); // I'm rested.

// console.log(milton.hasOwnProperty('name')); // true
// console.log(milton.hasOwnProperty('wears')); // true
// console.log(milton.hasOwnProperty('eat')); // false
// console.log(milton.hasOwnProperty('sleep')); // true

let shelly = Object.create(person).init('Shelly', 'The Shorts');

milton.temper = function() {
  console.log(`Heeeeeerreeee's ${this.name}!!!!`);
}

let miltonJr = Object.create(milton).init('Milton Jr', 'The Onesie');

// console.log(miltonJr.wears);

console.log(Object.getPrototypeOf(miltonJr) === milton);

miltonJr.temper();