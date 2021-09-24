# Written Assessment Practice Questions

[9.](https://launchschool.com/books/javascript/read/objects#exercises)

## 1. What does the following program log to the console? Why?

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

console.log(foo.a); // => 'hi'
console.log(qux); // => 'hello'
```

This program logs `hi` and `hello`. Since objects are mutable, `console.log(foo.a)` logs `hi` because the function `bar` passes in `foo` as its argument and the variable `a` is reassigned when passed as an argument. Passing the `qux` variable into the function `bar` doesn't mutate the string `qux`, so `console.log(qux)` logs `hello`. This program demonstrates the difference between pass by reference and pass by value.

/* HyoSung
This program logs `hi` and `hello`. Since objects are mutable, `console.log(foo.a)` logs `hi` because the function `bar` passes in `foo` as its argument and the variable `a` is reassigned when passed as an argument. Passing the `qux` variable into the function `bar` doesn't mutate the string `qux`, so `console.log(qux)` logs `hello`. This program demonstrates the difference between pass by reference and pass by value.

Laurent
It will log 'hi' and 'hello'. We call 'bar' on line 15 with 2 arguments : the first one 'foo' is passed by reference as 'foo' is an object and the second one is passed by value as 'qux' is a string. When we try to re-assign the 'a' property on 'foo', the 'foo' object is mutated and foo.a value is mutated to 'hello'. On the other hand, when we re-assign the value of qux in the outer scope, it doesn't re-assigned to 'hi'.

Alex
The code will log 'hi' and then 'hello'. This demonstrates the difference between pass-by-reference and pass-by-value. Foo is an object, and so when we pass it into the function bar as argument1, the local variable argument1 then points to the same place in memory as the object foo. Therefore, when we reassign the property 'a' of local variable argument1, we are mutating the same object that global variable foo points to, hence 'hi' is logged on the second to last line. On the other hand, qux is a string, which is a primitive, which means it is pass-by-value. reassigning the local variable argument2 does not mutate the original value of qux because strings are immutable and the local variable argument2 now merely has a new value that no longer coincides with the original value of qux passed to it as an argument. It therefore logs the original value of qux, 'hello' on the last line.

Solution
The program logs `'hi'` and `'hello'` The reason behind this is that objects are mutable; strings and other primitives are not. Also, variable reassignment, such as that on line 10, doesn't mutate the original object even when the object is mutable. Thus, line 9 mutates `foo` by assigning its `a` property to a new value (`'hi'`). Therefore, the code on line 15 logs `hi`. On the other hand, line 10 reassigns the `argument2` variable, but it doesn't mutate the string represented by `qux`. Thus, line 16 logs `hello`: the original value of the `qux` variable.

=======================
What is output and why?

```js
let firstName = 'John';

const getName = (name) => {
  name.concat(' Doe');
  name = name.toLowerCase();
  return name;
};

getName(firstName);
console.log(firstName);
```

The `console.log(firstName)` method outputs 'John'. It takes the global variable `firstName` whose values is assigned to the string 'John'. The call to the getName function returns 'john' because within the function 'name' is reassigned to `name.toLowerCase()` and that is what's returned. This is an example of pass by value.

Laurent
It will log 'John'. When we call getName() with firstName as an argument, we pass firstName by value, which means that the concat() and toLowercase() executions is done on a copy of firstName. Then, as the returned value of getName() is not assigned to any variable in the global scope, we can't access it. Therefore, when we log firstName, the original firstName variable gets logged.

Alex
The code will log 'John'. The second-to-last line will return 'john'. This is because the firstName variable is a primitive value and is therefore pass-by-value. The variable is passed into the function getName() as an argument, but since nothing that happens in the function accesses or reassigns the original variable firstName, everything that happens within the function is merely changing the value of the local variable name, which starts off with the same value as firstName, but is not otherwise connected to the variable firstName. Moreover, since .concat() is a non-mutating method, it does not mutate the value of the local variable name. The reassignment on the next line does, however, when it calls the .toLowerCase method on the original value of the local variable and then reassigns that to the variable name. Therefore, the function returns 'john'

The `console.log(firstName)` method outputs 'John'. It takes the global variable `firstName` whose values is assigned to the string 'John'. The call to the getName function returns 'john' because within the function 'name' is reassigned to `name.toLowerCase()` and that is what's returned. This is an example of pass by value.
