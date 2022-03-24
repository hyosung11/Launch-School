// 32. Why is the context lost in this situation? Fix it.

let shirt = {
  a: 'Hello',
  b: 'World',
  foo: () => console.log(this + this),
};

shirt.foo(); //'Hello World'
let someVar = shirt.foo;
someVar.call(shirt); // 
