class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    Fruit.names.push(this.name);
  }

  static names = [];

  static allNames() {
    return Fruit.names; // or return this.names (line 11)
  }
}

let fruit1 = new Fruit('apple', 'red');
let fruit2 = new Fruit('orange', 'orange');

console.log(Fruit.allNames()); // [ 'apple', 'orange' ]

// const names = Fruit.allNames;
// console.log(names());

/*
The difference will show up in how the `allNames` static method is invoked. If you use `this`, it's possible that context could be lost by doing something like `const names = Fruit.allNames`, and then invoking `names` separately. If you use `Fruit.names`, then execution context won't matter because you're accessing the `names` static parameter directly on the `Fruit` class.

It's safer to do this on static methods than instance methods because instance methods are meant to be inherited. They don't go into this, and I can explain more in-depth later (or in a call) - but the whole reason `this` acts the way it does in JavaScript (I think) is because prototypal inheritance wouldn't work otherwise.
*/

// Prototypal inheritance in JavaScript would not work without the use of `this`.

// We can use the class name on static methods because `this` is used for flexibility, and we do not need that flexibility in static properties.

// ------------------------------------------------------------

function SuperType (state1) {
  this.state1 = state1;
}

function SubType (state1, state2) {
  SuperType.call(this, state1);
  this.state2 = state2;
}

// SubType.prototype.method = function () {
//   return "something";
// }

// console.log(Object.getOwnPropertyNames(SubType.prototype));
// console.log(SubType.prototype.__proto__);

SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;

let instance = new SubType("st1", "st2");


// - All function are given a `prototype` property by the JavaScript engine when they are created in case thier intended use is as a constructor. 
// - The function `prototype` property created by JavaScript is given a non-enumerable property called `constructor` which is assigned to a reference of the function object. 
// - Because we want `SubType` to inherit the methods of `SuperType`, we need to somehow connect the two constructors. 
// - This is done through `line 48`. 
// - The `prototype` property of `SubType` is overwritten or reassigned to a completly new object created from `Object.create`. 
// - Because `Object.create` makes a new object whose `[[Prototype]]` property is assigned to the argument that is passed into `Object.create`, this new object will inherit from whatever object we pass in as an argument. 
// - On `line 48`, we pass in the function `prototype` property on `SuperType`, `SuperType.prototype`. 
// - This results in a new object whose `[[Prototype]]` is assigned to `SuperType.prototype`.
// - This new object overwrites the original `SubType.prototype` object. 
// - This new object does not have a `constructor` property like the original value of `SubType.prototype`. 
// Therefore we need to create a new `constructor` property manually and reassign it to the `SubType` function object, which we do on `line 49`. (This constructor property is enumerable, unlike the original.)

// - When we invoke `SubType` as a constructor with `new` on `line 58`, the new object's `[[Prototype]] is assigned to `SubType.prototype`. 
// The prototype chain of `instance` is:
// instance --> SubType.prototype --> SuperType.prototype --> Object.prototype --> null

// ----------------------------------
// The effect of reassigning `SubType.prototype` on the `instanceof` operator. 

console.log(instance instanceof SubType === true);
console.log(instance instanceof SuperType === true);