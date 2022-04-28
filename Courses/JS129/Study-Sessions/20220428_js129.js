/* JS129 Study Group

Introductions
- Karl, TA based in Wales, at International JavaScript Conference
- Chiara, Spain, Italian
- Wendy Tran, Eugene OR
- Vikram Swamy, Cleveland, OH, work for small family-based manufacturing company
- HyoSung, JS129
- Alex, working as a QA in NJ

Agenda
- Intros
- Assessment Format
- Preparing for the Assessment
- Example Questions

strong mental models

method lookup

Questions

Execution Context*/

let foo = {
  a: 1,
}

// add code here

let baz = {};
Object.assign(baz, foo);

let bar = Object.create(foo);

console.log(bar.a); // 1
console.log(baz.a); // 1

console.log(bar.hasOwnProperty('a')); // false
console.log(baz.hasOwnProperty('a')); // true

function Cat(name) {
  this.name = name;
}

Cat.prototype.miaow = function() { console.log('miaow') }

let myCat = new Cat('fluffy')

myCat.miaow();


class Cat {
  constructor(name) {
    this.name = name;
  }

  miaow() {
    console.log('miaow');
  }
}

let myCat = new Cat('fluffy')

myCat.miaow();

console.log(Cat.prototype)

// console.log(Cat.prototype)