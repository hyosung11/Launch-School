/* SPOT Study Session with Stan  */

/*
You have recently watched Lion King as well as Jungle Book and have decided to take the best
of both these worlds and develop some OOP magic. In this Lion King x Jungle Book world of ours, Lions have two characteristics:
1) they are friendly;
2) they are in the Lion King
Lions also have certain behavior, namely they roar and say 'Hakuna Matata'

Tigers, likewise, have two characteristics:
1) they enjoy swimming;
2) they are in the Jungle Book
Tigers also have certain behavior, namely they chase and say 'I am chasing the man-cub'

Your task, should you chose to accept it, is to create a Liger (https://en.wikipedia.org/wiki/Liger).
A Liger is an animal whose father is a Lion and whose mother is a Tiger. 
The liger you create should inherit ALL properties and functionality from its parents, as follows:

console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true

Please construct this relationship using the following patterns:
1) Constructor Prototypes
2) OLOO
3) Factory functions

How you set up the relationship between the child liger, and parent Lion and Tiger is up to you.
*/

function Lion() {
  this.isFriendly = true;
  this.inLionKing = true;
}  

Lion.prototype.roar = function() {
  return `Hakuna Matata`;
};

let lion = new Lion();
console.log(lion.roar());
console.log(lion.isFriendly);
console.log(lion.inLionKing);

function Tiger() {
  this.enjoysSwimming = true;
  this.inJungleBook = true;
}

Tiger.prototype.chase = function() {
  return 'I am chasing the man-cub';
};

let tiger = new Tiger();
console.log(tiger.enjoysSwimming === true);
console.log(tiger.inJungleBook === true);
console.log(tiger.chase());


let liger = new Lion();

Object.assign(liger, new Tiger());
Object.assign(liger, Tiger.prototype);
console.log(Object.getOwnPropertyNames(Tiger));
console.log(liger.enjoysSwimming);

/*
You have recently watched Lion King as well as Jungle Book and have decided to take the best
of both these worlds and develop some OOP magic. In this Lion King x Jungle Book world of ours, Lions have two characteristics:
1) they are friendly;
2) they are in the Lion King
Lions also have certain behavior, namely they roar and say 'Hakuna Matata'

Tigers, likewise, have two characteristics:
1) they enjoy swimming;
2) they are in the Jungle Book
Tigers also have certain behavior, namely they chase and say 'I am chasing the man-cub'

Your task, should you chose to accept it, is to create a Liger (https://en.wikipedia.org/wiki/Liger).
A Liger is an animal whose father is a Lion and whose mother is a Tiger. 
The liger you create should inherit ALL properties and functionality from its parents, as follows:

console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true

Please construct this relationship using the following patterns:
1) Constructor Prototypes
2) OLOO
3) Factory functions

How you set up the relationship between the child liger, and parent Lion and Tiger is up to you.
*/

function Lion() {
  this.isFriendly = true;
  this.inLionKing = true;
}  

Lion.prototype.roar = function() {
  return `Hakuna Matata`;
};

let lion = new Lion();
console.log(lion.roar());
console.log(lion.isFriendly);
console.log(lion.inLionKing);

function Tiger() {
  this.enjoysSwimming = true;
  this.inJungleBook = true;
}

Tiger.prototype.chase = function() {
  return 'I am chasing the man-cub';
};

let tiger = new Tiger();
console.log(tiger.enjoysSwimming === true);
console.log(tiger.inJungleBook === true);
console.log(tiger.chase());

function Liger() {
  Lion.call(this);
  Tiger.call(this);
}

Liger.prototype = Object.create(Lion.prototype);
Object.assign(Liger.prototype, Tiger.prototype);
Liger.prototype.constructor = Liger;

let liger = new Liger();
console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true

/*Cat.prototype = Object.create(Lion.prototype);
Cat.prototype.constructor = Cat;
console.log(Cat.constructor === Function);
let cat = new Cat();
console.log(cat instanceof Cat);
console.log(cat instanceof Lion);
console.log(Object.getPrototypeOf(Cat.prototype)); */