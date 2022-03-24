# JS129 Written Examination Code Snippets

## 1. What does this code log and why?

```js
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);
```

On line 1, a variable qux is defined with an object { foo: 1 }.
- On line 2, the Object.create method is invoked with the object referenced by qux.  The Object.create method returns a new object with its private [[Prototype]] property set to the prototype object passed as an argument.
- On line 3, when the expression baz.foo + qux.foo is evaluated, qux.foo returns 1, but since baz.foo does not have properties of its own, it has to delegate access to its prototype. So, when JavaScript searches for the value of foo it will climb up baz's prototype chain and find the foo property in qux. Finally, the expression baz.foo + qux.foo will be evaluated 1 + 1 and its result will be the number 2.