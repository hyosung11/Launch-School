/* Aryan

Inroductions
- Nykaela, JS229 taking written exam next week
- Laurent, JS129, take the exam next week
- HyoSung, JS129, take the written exam next week
- Shane,
- Aryan, passed JS210
- Alex, JS129
- Marcus, Amsterdam from UK, 229 written

*/
function Animal(name, kind, legs) {
  this.name = name;
  this.kind = kind;
  this.legs = legs;
}

Animal.prototype.howManyLegs = function() {
  console.log(`I have ${this.legs} legs!`);
}

let zebra = new Animal('Zebbie','Zebra', 4);

// zebra.howManyLegs()

function Dog(name, breed) {
  Animal.call(this, name, 'Dog', 4);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;



console.log(Dog.prototype.constructor)


Dog.prototype.bark = function () {
  console.log('Bark');
}

let doggy = new Dog('Charlie', 'Doberman');

// doggy.bark();
// zebra.bark();








// console.log(zebra.__proto__ === Animal.prototype)

// console.log(Object.getPrototypeOf(zebra) === Animal.prototype); // true
// console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype); // true
// console.log(Animal.prototype.hasOwnProperty('name'))


let obj = {
  foo: () => console.log(this),
}

obj.foo(); // Window -- if run in browser

let obj = {
  foo: function() {
    let arrow = () => console.log(this);
    arrow();
  },
};

obj.foo(); // {foo: f} -- so here `this` reference obj

The surrounding context is, in fact, the `global object`. The reason for that is simple: the `let` statement in this example *is in the program's top-level code*, so its context is the global object. That means that `this` inside the object literal is also the global object, so `this` on line 5 refers to the global object, not `obj`.