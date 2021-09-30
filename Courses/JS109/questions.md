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

HyoSung
This program logs `hi` and `hello`. Since objects are mutable, `console.log(foo.a)` logs `hi` because the function `bar` passes in `foo` as its argument and the variable `a` is reassigned when passed as an argument. Passing the `qux` variable into the function `bar` doesn't mutate the string `qux`, so `console.log(qux)` logs `hello`. This program demonstrates the difference between pass by reference and pass by value.

Laurent
It will log 'hi' and 'hello'. We call 'bar' on line 15 with 2 arguments : the first one 'foo' is passed by reference as 'foo' is an object and the second one is passed by value as 'qux' is a string. When we try to re-assign the 'a' property on 'foo', the 'foo' object is mutated and foo.a value is mutated to 'hello'. On the other hand, when we re-assign the value of qux in the outer scope, it doesn't re-assigned to 'hi'.

Alex
The code will log 'hi' and then 'hello'. This demonstrates the difference between pass-by-reference and pass-by-value. Foo is an object, and so when we pass it into the function bar as argument1, the local variable argument1 then points to the same place in memory as the object foo. Therefore, when we reassign the property 'a' of local variable argument1, we are mutating the same object that global variable foo points to, hence 'hi' is logged on the second to last line. On the other hand, qux is a string, which is a primitive, which means it is pass-by-value. reassigning the local variable argument2 does not mutate the original value of qux because strings are immutable and the local variable argument2 now merely has a new value that no longer coincides with the original value of qux passed to it as an argument. It therefore logs the original value of qux, 'hello' on the last line.

Solution
The program logs `'hi'` and `'hello'`. The reason behind this is that objects are mutable; strings and other primitives are not. Also, variable reassignment, such as that on line 10, doesn't mutate the original object even when the object is mutable. Thus, line 9 mutates `foo` by assigning its `a` property to a new value (`'hi'`). Therefore, the code on line 15 logs `hi`. On the other hand, line 10 reassigns the `argument2` variable, but it doesn't mutate the string represented by `qux`. Thus, line 16 logs `hello`: the original value of the `qux` variable.

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

What will the following code log to the console and why?

```js
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
```

This code logs `TypeError: Assignment to a constant variable`. Variables declared by `const` are block scoped and their value cannot be changed through reassignment. So when we try to reassign `a` on line 6, we get an error. Passing `a` as an argument to `myFunction` doesn't do anything because `myFunction` does not accept any parameters.

// What will the following code log to the console and why?

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

Alex
The code will log a type error. This is because once variables are declared as constants, they cannot be reassigned. Moreover, the function has access to the global variable `a` as a result of scoping rules: inner scopes can access outer scope variables. But when the function is invoked on line 7 and the function executes, it returns an error because const cannot be reassigned.

H
This code logs `TypeError: Assignment to a constant variable`. Variables declared by `const` are block scoped and their value cannot be changed through reassignment. So when we try to reassign `a` on line 6, we get an error. Passing `a` as an argument to `myFunction` doesn't do anything because `myFunction` does not accept any parameters.

L
It will log a TypeError. We declare a constant `a` and assign it a value of `1`. When we call myFunction on the last line, we pass `a` as an argument, so when we try to assign `a` a value of 2 in the function, JS will look in the closest outer scope with a variable `a`, in this case the constant `a` from line 1. As `a is a constant, we can not re-assign it and this code will log a TypeError when we run it.

What gets logged and why?

```js
let name = 'nina;

function outer() {
 let name = 'jill';

 function inner() {
  return name[0].toUpperCase() + name.slice(1);
 }

 return inner();
}

outer();
console.log(name);
```

This code will log Nina. This is because name is re-declared with let within the outer () function. This results in whats called variable shadowing, wherein the inner scope does not have access to the global variable , only the local variable of the same name. Therefore, invoking outer() on the second-to-last line has no impact on the global variable name, which is logged as it originally appeared on line 1 in the console.log on the last line.

First segment
 I would also say that this example is more of an example of variable scope, rather than variable shadowing- when the variable jill is declared within the scope of the function outer(), it is limited to the scope of that function, and is terminated when the function is finished. The console.log(name) call on the last line only has access to global variables, and nothing within the scope of outer() since it’s called outside of the scope of outer. Therefore, when console.log() is called on the last line of the segment, it only has access to the global variable name declared on line one. If you were to call console.log(name) within the function outer(), then that would be variable shadowing, since it would log the value of name within the scope of outer(), which would be Jill. Also, this very easily could have been autocorrect, but the code logs nina with a lower case n- in the first sentence you said Nina with an uppercase N so just be sure to be stingy on details like that.

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

Second segment

The code will log 'hi' and then 'hello'. This demonstrates the difference between pass-by-reference and pass-by-value. Foo is an object, and so when we pass it into the function bar as argument1, the local variable argument1 then points to the same place in memory as the object foo. Therefore, when we reassign the property 'a' of local variable argument1, we are mutating the same object that global variable foo points to, hence 'hi' is logged on the second to last line. On the other hand, qux is a string, which is a primitive, which means it is pass-by-value. reassigning the local variable argument2 does not mutate the original value of qux because strings are immutable and the local variable argument2 now merely has a new value that no longer coincides with the original value of qux passed to it as an argument. It therefore logs the original value of qux, 'hello' on the last line.

Good explanation- I would add that when qux is supplied as an argument to bar, argument2 is initialized with a copy of the value of qux, and not the variable qux itself, which is why reassigning argument2 doesn’t reassign qux. Almost the exact same as what you said but just a little more specific as to the inner mechanics of why primitives can’t be reassigned within functions. To be more specific, I would reword the second to last sentence as something like “Because qux is a string and hence pass-by-value, argument2 is initialized with a copy of the value of qux and not the actual variable qux itself. Therefore, reassigning argument2 will not reassign qux, since they are two different copies of the same value, and not the actual same variable.”

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

/*
The code will log 'John'. The second-to-last line will return 'john'. This is because the firstName variable is a primitive value and is therefore pass-by-value. The variable is passed into the function getName() as an argument, but since nothing that happens in the function accesses or reassigns the original variable firstName, everything that happens within the function is merely changing the value of the local variable name, which starts off with the same value as firstName, but is not otherwise connected to the variable firstName. Moreover, since .concat() is a non-mutating method, it does not mutate the value of the local variable name. The reassignment on the next line does, however, when it calls the .toLowerCase method on the original value of the local variable and then reassigns that to the variable name. Therefore, the function returns 'john'

Third segment
Another good explanation. I would also add that the function cannot access or reassign the variable firstName because only a copy of the value of firstName is passed into the function, and not the actual variable firstName itself (since it’s a primitive and hence pass-by-value). Don’t forget that because strings are primitives (immutable), all string methods are non-mutating. Although .concat() is indeed non-mutating on arrays, it isn’t entirely correct to say it’s non-mutating when called on strings, because no methods can mutate strings. I’d probably say something to the effect of “The name.concat(' Doe') call on line 3 does not change the value of name, since strings cannot be mutated. The reassignment name = name.toLowerCase(); does change the value of name, because it reassigns name to its own value with the toLowerCase() method performed on it.” On the last line, I’d also clarify that the function returns john on the second to last line, since it could be somewhat unclear if you were referring to the getName(firstName) call or the console.log(firstName) call.

## Example 1 - What does this code log and why?

```js
let a = 1;

function doit(a) {
  console.log(a);
}

doit(3); // => 3
console.log(a); // => 1
```

This code returns `3` on the invocation of the function `doit` on line 8 and logs `1` from the `console.log` method on line 9. On line 2, the global variable `a` is declared and initialized to the value of `1`. The `doit` function is declared on line 4 and accepts one argument, here the variable `a`. This variable `a` shadows the global variable `a` on line 2. The `console.log` method logs the global variable `a` from line 2.

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
The code will log 'jim' and then undefined. When anotherFunction() is invoked on line X, it comes into scope and within its scope, the variable 'name is declared and initialized to the string 'jim' on line 6. On line 7, the function changeName is invoked and passed the variable name as an argument. At this point, the variable name that is local to the function changeName and the outer scope variable of the same name that is local to anotherFunction() are both set to string 'jim'. However, when changeName() is invoked the variable name that is local to that function gets reassigned to the string 'bob'. This does not affect the name variable in anotherFunction() - the two values have now diverged. WHen the changeName function terminates on the next line and the name variable is logged to teh console, this reverts to the version that is local to anotherFunction(), and 'jim' is logged to the console. This is an example of variable shadowing.

// 1. What does this code log and why?
// let a = 1;

// function doit(a) {
//   console.log(a);
// }

// doit(3); // => 3
// console.log(a); // => 1

/*
This code logs `3` on the invocation of the function `doit` on line 8 and `1` from the `console.log` method on line 9. On line 2, the global variable `a` is declared and initialized to the value of `1`. The `doit` function is declared on line 4 and accepts one argument, here the variable `a`. This variable `a` shadows the global variable `a` on line 2. The `console.log` method logs the global variable `a` from line 2.


*/

// 2.
// function changeName(name) {
//   name = 'bob';
// }

// function anotherFunction() {
//   let name = 'jim';
//   changeName(name);
//   console.log(name);
// }

// anotherFunction(); // => 'jim'

// 3.
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

// 4.
let hello = 'Hello, world!';
function myFunc() {
  console.log(hello);
}

myFunc();

== Study Tips ==

20210927 Study Session with Alex

What will the following code log to the console and why?

```js
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
```

This code logs `1`. Variables declared in an outer scope can be accessed in an inner scope. Here, `a` is declared within an outer scope in `myFunction`, and accessed in the `if` statement's inner scope. The `if` statement evaluates as true, so the `console.log(a)` method then logs `1` when `myFunction` is called on line 11.

Formula:

1. logs
2. general principle
3. application

This code logs `1`. Variables declared in an outer scope are accessible in an inner scope. Here, `a` is declared and initialized to the value of `1` within `myFunction` which has an outer scope to the `if` statement's inner scope. Since the `if` statement evaluates to `true`, the `console.log(a)` method logs `1` when `myFunction` is invoked on line 11.

This code logs ____ . Variables declared in an outer scope are accessible in an inner scope. [Here connect specific instance to general principle]
