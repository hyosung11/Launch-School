# Written Assessment Practice Problems

## Example 1 - What does this code log and why?

```js
let a = 1;

function doit(a) {
  console.log(a);
}

doit(3); // => 3
console.log(a); // => 1
```

This code logs `3` on the invocation of the function `doit` on line 8 and `1` from the `console.log` method on line 9. On line 2, the global variable `a` is declared and initialized to the value of `1`. The `doit` function is declared on line 4 and accepts one argument, here the variable `a`. This variable `a` shadows the global variable `a` on line 2. The `console.log` method logs the global variable `a` from line 2.

Alex's Answer
The code logs 3 and then 1. This is an example of variable shadowing -- the parameter 'a' makes the global variable 'a' inaccessible within the function doit. Instead, the local variable a is assigned the value of the argument passed to the function when it is invoked in line 7, which is 3. Therefore, when the function is invoked and the local variable 'a' is logged, this logs 3. Later, after the function has terminated and the global variable a is logged on line 8, this logs 1. This demonstrates inner and outer scoping.

## Example 2

What does this code log and why?

```js
function changeName(name) {
  name = "bob";
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name);
}

anotherFunction(); // => 'jim`
```

This code logs 'jim'. The `changeName` function is declared on line 1 and takes an argument called `name`. On line 2, an uninitialized variable `name` is assigned the value of 'bob'. The function `anotherFunction` is declared on line 5 without an argument. On line 6 the variable `name` is initialized and assigned the value of 'jim'. The `changeName` function is called on line 6 with argument local variable'name' passed in from the inner scope of `anotherFunction`. The 'name' variable is

variable shadowing


Alex's Answer
The code will log 'jim' and then undefined. When anotherFunction() is invoked on line X, it comes into scope and within its scope, the variable 'name is declared and initialized to the string 'jim' on line 6. On line 7, the function changeName is invoked and passed the variable name as an argument. At this point, the variable name that is local to the function changeName and the outer scope variable of the same name that is local to anotherFunction () are both set to string 'jim'. However, when changeName() is invoked the variable name that is local to that function gets reassigned to the string 'bob'. This does not affect the name variable in anotherFunction() - the two values have now diverged. WHen the changeName function terminates on the next line and the name variable is logged to teh console, this reverts to the version that is local to anotherFunction(), and 'jim' is logged to the console. This is an example of variable shadowing.