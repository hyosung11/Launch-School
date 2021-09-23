# Written Assessment Practice Questions

What does the following program log to the console? Why?

```js
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
```

Solution
The program logs 'hi' and 'hello'. The reason behind this is that objects are mutable; strings and other primitives are not. Also, variable reassignment, such as that on line 10, doesn't mutate the original object even when the object is mutable. Thus, line 9 mutates the foo by assigning its a property to a new value ('hi'). Therefore, the code on line 15 logs hi. On the other hand, line 10 reassigns the argument2 variable, but it doesn't mutate the string represented by qux. Thus, line 16 logs hello: the original value of the qux variable.

How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.