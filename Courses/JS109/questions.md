# Written Assessment Practice Questions

## [Answer Template](https://www.dmytronaida.com/2020/05/27/js109-written-assessment.html)

### Question Example: What will line 17 log to the console and why?

```js
let greeting = ["Hello"];

const test = arr => {
  arr = ["ByeBye"];
  arr.push("World");
  return arr;
}

test(greeting);
console.log(greeting);
```

On line 17, the `console.log(greeting)` method will log `["Hello"]` because 1) the global variable `greeting` is not reassigned within the body of the function `test` and 2) the object that the variable `greeting` points to is not mutated within the function `test`. On line 8, the global variable `greeting` is declared and assigned to reference the array `["Hello"]`. On line 16, the function `test` is called with the passed in argument `greeting`. At this point both the global variable `greeting` and the parameter `arr` reference the same array. On line 11, `arr` is reassigned to the new array `["ByeBye"]`. Therefore, parameter `arr` no longer references the place in computer memory where the object `greeting` variable points. The object variable `greeting` is no longer mutable because `arr` now references a different object.

### Example from Study Guide

Examine the code example below. The last line outputs the string `'Hi'` rather than the string `'Hello'`. Explain what is happening here and identify the underlying principle that this demonstrates.

```js
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);
```

Compare the following possible answers to this question:

A) `greeting` is set to `Hello` on line 1. `greeting` is set to `Hi` on line 4. Line 8 outputs `greeting`, which is `Hi`.

B) The global variable `greeting` is assigned to the string `Hello` on line 1. Within the loop, `greeting` is then reassigned to the string `Hi` on line 4. On line 8, `console.log` is called with the variable `greeting` passed to it as an argument; since `greeting` is now assigned to `Hi`, this is what is output.

C) The global variable `greeting` is initialized to the string `Hello` on line 1. Within the loop, lines 3 to 6 define a block within which `greeting` is reassigned to the string `Hi` on line 4. On line 8, `console.log` is called with the variable `greeting` passed to it as an argument; since `greeting` is now assigned to `Hi`, this is what is output.

D) The global variable `greeting` is declared and initialized to the string `Hello` on line 1. Lines 3 to 6 define a loop that will execute forever, unless something happens to end the loop. When the loop begins, it first reassigns the `greeting` global variable to `Hi` on line 4. On the next line, `break`, causes the loop to end, with execution resuming after line 6. Finally, on line 8, `console.log` is called with the value of the variable `greeting` passed to it as an argument. Since `greeting` is now assigned to `Hi`, that is what gets output. This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

While none of these answers is technically incorrect, they all answer the question with varying degrees of detail and precision.

* Answer **A** describes what is happening in the code example, but does so in a fairly basic way with imprecise language. This response wouldn't be sufficient to receive full points for any of the questions in the assessment.

* Answer **B** again describes what is happening, but with greater precision of language. This answer would score higher than answer **A**, but generally wouldn't be sufficient to receive full points for the majority of questions; most questions in the assessment are looking for something more, such as *a specific piece of syntactical knowledge* and perhaps *identification of some fundamental concept.*

* Answer **C**, as well as precisely describing the example, *identifies an important JavaScript syntactical convention* that is relevant to the example code: the fact that braces next to a while statement form a block in JavaScript. We also use more precise terminology by saying that greeting is initialized instead of assigned. For some assessment questions, this answer might be enough to receive full points, but many questions expect you to demonstrate a deeper understanding of the fundamental concept that this illustrates.

* Answer **D** goes a step further than **C** by **explaining why this is important** and the *underlying principle that it demonstrates*; i.e., the fact that JavaScript has particular scoping rules which affect whether or not a variable can be referenced or reassigned. It also talks about how the `break` statement influences the execution of the loop. Finally, we also mention that we're declaring a global variable. Based on the way that this question is phrased, answer **D** would be the only answer of the four to receive full points in an actual assessment.

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

## What is output and why?

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

## What will the following code log to the console and why?

```js
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
```

This code will log `TypeError: Assignment to a constant variable`. Variables declared by `const` are block scoped and their value cannot be changed through reassignment. So when we try to reassign `a` on line 6, we get an error. Passing `a` as an argument to `myFunction` doesn't do anything because `myFunction` does not accept any parameters.

Alex
The code will log a type error. This is because once variables are declared as constants, they cannot be reassigned. Moreover, the function has access to the global variable `a` as a result of scoping rules: inner scopes can access outer scope variables. But when the function is invoked on line 7 and the function executes, it returns an error because const cannot be reassigned.

L
It will log a TypeError. We declare a constant `a` and assign it a value of `1`. When we call myFunction on the last line, we pass `a` as an argument, so when we try to assign `a` a value of 2 in the function, JS will look in the closest outer scope with a variable `a`, in this case the constant `a` from line 1. As `a is a constant, we can not re-assign it and this code will log a TypeError when we run it.

## What gets logged and why?

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

## Question

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

## What does this code log and why?

```js
let a = 1;

function doit(a) {
  console.log(a);
}

doit(3); // => 3
console.log(a); // => 1
```

This code returns `3` on the invocation of the function `doit` on line 8 and `1` from the `console.log` method on line 9. On line 2, the global variable `a` is declared and initialized to the value of `1`. The `doit` function is declared on line 4 and accepts one argument, here the variable `a`. This variable `a` shadows the global variable `a` on line 2. The `console.log` method logs the global variable `a` from line 2.

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

---

What will it log and why?

```js
let person = {
  name: "Corine",
  age: 12
}

function changeAge(age) {
  person.age = age;
}

function changeAgeName(name, age) {
  let person = {}
  person.name = name;
  if (age) {
    changeAge(age);
  }
}

changeAgeName("Franck", 25);

console.log(person);
```

This code will log `{ name: 'Corine', age: 25}`. The global `person` variable is assigned to an object that is passed by reference into the functions. The `changeAge(age)` function

The `console.log(person)` method
peer functions

/*Alex
The code will log {name: Corine, age: 25}. There is a global variable `person` assigned to an object; there is also a variable of the same name local to the `changeAgeName()` function. Since the local variable is declared with let, it shadows (hides) the global `person` variable and the assignment of the passed argument to the name property only affects the local `person` object. However, `changeAge(age)` is also called within the `changeAgeName()` function, and since let is not used in this instance, there is no variable shadowing happening and the function has access to the global `person` object. Therefore, the reassignment of `person.age` to the `age` passed as an argument to the other function changes the property of the original object and the change is logged to the console on line 22.
++has access to variables depending on where its defined, not where its invoked

L
The code will log { name: 'Corine', age: 25 }.

On line 1, we declare a variable person and assign the object person to it. This object has 2 properties `name`and `age`.

Then we call `changeAgeName` with `Franck` and `25` as arguments to the function. These arguments will be assigned to the parameters `name` and `age` . Then, we declare the variable `person`and assign it an empty object. This variable will shadow the `person` variable from the outer scope. When we assign the `name` property on line 14, we assign it to the empty object.

On line 15, as we have passed `25` to the `changeAgeName` variable, the if condition will evaluate to true and the block will execute the function `changeAge` with `age` passed-in as an argument. When changeAge assigns `age` on line 9, it re-assigns `age` on the object `person` from the global scope as `changeAge` has access to variables from where it is defined.

So, when we `console.log(person)` on the last line, we log the global object with the `name: "Corinne"` and the `age: 25`.

---

What does this code log to the console, and what concepts does this demonstrate?

```js
const checkEmpty = object => {
  return object == false;
}

console.log(checkEmpty(''));
console.log(checkEmpty('hi'));

console.log(checkEmpty([]));
console.log(checkEmpty([1]));

console.log(checkEmpty({}));

console.log(checkEmpty());
```

---

## What does this program log and why?

```js
let animal = "dog"

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
}

speak();
```

My Answer
This program logs "Bark" to the console. On line 18, the global variable `animal` is declared and initialized to the string "dog". On line 20, the function `speak` is declared with the parameter `animal`. This `animal` variable shadows the global `animal` variable on line 18 making the global variable inaccessible inside the function `speak`. When `speak` is invoked on line 28, it doesn't pass an argument. Instead of throwing an error, JavaScript defaults this argument's value to `undefined`. In the `if` statement `animal`'s value is evaluated as `undefined` and the `console.log("Bark")` method executes and logs "Bark".

* variable shadowing
* function without required argument in js takes the value `undefined`

Elaine's Answer
Elaine Vuong  4 days ago
Hi H - one thing I would do (perhaps it's just me) is to just highlight the concepts up front. This was well done though, good job! :slightly_smiling_face:
This was my answer if it helps at all!

This program logs 'Bark' to the console. This code snippet demonstrates a) concepts of variable shadowing and b) if no arguments are passed to a function's parameters, the parameters are assigned the default value `undefined`. On line 11 we call the `speak()` function and we do not pass any arguments to the function. The `speak()` function has one parameter, `animal`, however as no arguments are passed to it, `animal` is assigned the default value `undefined`. The function definition of `speak()` creates a new function scope for local variables. Because the local function variable `animal` shares the same name as the global variable `animal` declared on line 1, variable shadowing prevents us from using the outer scoped variable. Therefore, on line 4 since `animal` contains the primitive value `undefined`, this results in the strict equality operator returning `true`, which is a truthy value. The `if` clause is then executed, and "Bark" is logged to the console.

## What is the return value of the final line? Why? What concept does this illustrate?

```js
function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);
```

The return value of the final line will be `[ 4, 4, 12 ]`. This problem illustrates the problem of mutating an array while iterating over it. The function `evenValues` is defined on line 3 and takes a single parameter called `array`. The `forEach` method, during each iteration, invokes the callback with the element's value as an argument. The callback then adds even numbers to the `evens` array. In the end, `forEach` returns `undefined`.

The push() method adds one or more elements to the end of an array and returns the new length of the array.

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

/*Alex
The function will return the array `[4, 4, 12]`. It demonstrates what happens when you mutate an array while iterating through it--the program ostensibly intends to return a new array containing only even numbers from the original array, but misses some of the even elements because the `shift()` method mutates the original array in the course of iterating. A better choice would be to use filter() to select the even elements without mutating the original array or even just to omit the shift() method.

Laurent
This code will log `[4, 4, 12]`. It illustrates the problems of mutating an array when iterating over it.

On line 14, we call the global scope function `evenValues` with `[1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]` as argument. Inside, this function, we declare `evens` that will hold a pointer to the new array to be returned at the end of the function. We then iterate over the passed-in array with `forEach` and push the value to the `evens` array if the number is even, that is, if the expression `value % 2 === 0` returns `true`. Then we remove the first element of the array with the `shift` method. This will cause the iteration to pass some elements and not return all the even elements.

HyoSung
The return value of the final line will be `[ 4, 4, 12 ]`. The function `evenValues` is defined on line 3 and takes a single parameter called `array`. The `forEach` method, during each iteration, invokes the callback with the element's value as an argument. The callback then adds even numbers to the `evens` array. In the end, `forEach` returns `undefined`.

The push() method adds one or more elements to the end of an array and returns the new length of the array.

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

Explain why line 7 outputs 'hello' rather than some other String. Be precise.

```js
function change(param) {
  param += " greeting";
  return param;
}

let greeting = "hello";
change(greeting);

console.log(greeting);
```

Line 7 outputs 'hello' because the `console.log(greeting)` method passes the global variable `greeting` from line 8 as an argument. This code demonstrates variable scope and that primitive values cannot be mutated. The function `change` is declared on line 3 with the single parameter `param`. `param` is then reassigned to " greeting" but this doesn't change the value of the `greeting` variable. Thus, "hello" is logged to the console.

LAURENT
The call to the `console.log` method on line 7 will output `hello` to the console because:

1/ the value `greeting` is passed-by-value as argument to the function call to `change` on line 7

2/ The returned value from the call to `change` is not assigned to the global scope

On line 6, we declare the global variable `greeting` and assign to it the value `hello`. On the next line, we call the function `change` with the the string `greeting` as argument. This is being passed to the function by value, which means that a copy of the variable is assigned to `param`. Inside the function, we re-assign `greeting` to `hello greeting` and return it. But the returned value is not being assigned in the global scope, and the original `greeting` string has not been modified, only a copy of it.

Alex
The code will log 'hello'. The global variable `greeting` declared on line 8 is unchanged by the function `change` because strings are primitive values and are pass-by-value, meaning a copy of the value is passed to the function, not the variable itself. A copy of the string "hello" is passed to the `change()` function on line 3 and assigned to the local variable `param`. `param is then reassigned to concatenate the string`greeting`, which is returned on line 5. When the function is invoked with`greeting` as its argument on line 9, it returns "hello greeting"-- but this does not affect the global variable `greeting`, which is logged as its original, unchanged value`hello`on line 11.

HyoSung
Line 7 outputs 'hello' because the `console.log(greeting)` method passes the global variable `greeting` from line 8 as an argument. This code demonstrates variable scope and that primitive values cannot be mutated. The function `change` is declared on line 3 with the single parameter `param`. `param` is then reassigned to " greeting" but this doesn't change the value of the `greeting` variable. Thus, "hello" is logged to the console.
*/

```js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

[code templates for each underlying concept]

This code will log `1` and illustrates the concepts of variable scope and variable shadowing. On line 1, the global variable `bar` is declared and initialized to the value of `1`. On line 2, the function `foo` is declared without a parameter. On line 3, another `bar` variable is declared and initialized to the value of `2`. This variable in the function's scope shadows the `bar` variable on line 1. On line 6, the function `foo` is called without passing an argument. The `console.log(bar)` method on line 7 passes in the value of the global `bar` variable from line 1 and logs `1` to the console.

/*
Alex
The code will log `1`.  This demonstrates JavaScript scoping rules - specifically, that inner scope variables shadow outer scope variables of the same name. Moreover, it demonstrates that inner scope variables cannot be accessed in an outer scope. On line 1, the variable `bar` is declared and initialized to the value of 1. Then the function `foo()` is invoked on line 6 without an argument and a local variable `bar` is declared within the function. Since this variable is declared with let, it is a new variable that has local scope to the function and the global variable `bar` is shadowed or hidden within the function. The `}` terminates the function on line 4, thereby disposing of the variable that only has local scope and bringing the global variable back into scope. When `console.log(bar)` is called on line 7, it logs the value of the global variable to the console.

Laurent
This code will log the number value `1` . This code snippet demonstrates the concept of variable shadowing and variable scoping.

On line 1, we initialize the variable `var` with the value number `1` . Then on line 6, we call the function `foo` without any argument. The call to function `foo` creates a new local scope, where we initialize the variable `bar` with the number value `2` , that shadows the global scope `bar`and therefore, it will not modify it. The local variable `bar` will cease exist when the function call ends, its scope is limited to the function. So, on line line 7, the call to `console.log` will print the value of the global variable `bar` , the number value `1`, to the console.

HyoSung
This code will log `1` and illustrates the concepts of variable scope and variable shadowing. On line 1, the global variable `bar` is declared and initialized to the value of `1`. On line 2, the function `foo` is declared without a parameter. On line 3, another `bar` variable is declared and initialized to the value of `2`. This variable in the function's scope shadows the `bar` variable on line 1. On line 6, the function `foo` is called without passing an argument. The `console.log(bar)` method on line 7 passes in the value of the global `bar` variable from line 1 and logs `1` to the console.*/

LS
The code logs 1 to the console. `foo` doesn't affect the value assigned to `bar` on line 1 since JavaScript functions create an inner scope. Thus, the `bar` variable on line 3 is not the same as the one on line 1. In the end, `foo()` has no bearing on the final output.

============================================================
Will this program produce an error when run? Why or why not?

```js
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
```

HyoSung
This program will not produce an error and will log 'bar' to the console. This code demonstrates variable scoping rules and the use of `const` declarations in JavaScript. On line 1, the global variable `FOO` is declared with the `const` keyword and initialized to the value of the string 'bar'. Because `FOO` is declared with `const` it cannot be reassigned. However, lines 3-5 define a block scope and within this scope another `FOO` variable is declared with the `const` keyword. Since this variable `FOO` has inner scope it is local to the block and independent of the global `FOO` on line 1. This `FOO` is block-scoped and inaccessible to the outer-scoped `console.log(FOO)` method on line 7. Thus, when the `console.log(FOO)` method executes, it logs 'bar' because it passes in the global `FOO` variable form line 1.

Alex
The code will not return an error.  This is because of JavaScript scoping rules - specifically, that inner scope variables cannot be accessed in an outer scope. `FOO` is declared as a constant and initialized to the string `bar` on line 1. When FOO is declared as a constant within the block scope on line 3, this is an inner scope variable local to the block and independent from the global constant. Therefore, initializing the inner scope `FOO` to `qux` is permissible--whereas it would be impermissible to reassign a constant, this variable is a new variable entirely. The `}` on line 4 terminates the block scope and brings the global constant `FOO` back into scope, and logs it on line 6.

Laurent
This code will not output an error and will log `bar` to the console. Since variable are declared with `const` in different scopes, the global variable `FOO` will not be affected by the initialization of the variable `FOO` in the inner scope.

On line 1, we initialize the global variable `FOO` with the value string `bar` with the `const` keyword . Then, inside the curly braces, we initialize another variable `FOO` that will exist only in the inner scope of the curly braces. Then on line 7, the call to `console.log` will print the value of the global variable `FOO` , `bar` , to the console as it doesn't have access to the inner scope `FOO`.
