# Written Assessment Practice Questions and Sample Answers

## Formula

1. logs
2. general principle
3. application

The code logs __. This example illustrates ... variables declared in an outer scope are accessible in an inner scope. [Here connect specific instance to general principle]

## Detail and Precision

* Describe what is happening in the code example with detail and precision.
* Identify important JavaScript syntactical conventions that are relevant to the example code.
  * E.g., the fact that braces next to a while statement form a block in JavaScript
* Explain why a JavaScript syntactical convention is important and the underlying principle that it demonstrates.
  * E.g., the fact that JavaScript has particular scoping rules which affect whether or not a variable can be referenced or reassigned.

## [Answer Template](https://www.dmytronaida.com/2020/05/27/js109-written-assessment.html)

## 1. Question Example: What will line 10 log to the console and why?

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

On line 10, the `console.log(greeting)` method will log `["Hello"]` because 1) the global variable `greeting` is not reassigned within the body of the function `test`, and 2) the object that the variable `greeting` points to is not mutated within the function `test`. On line 1, the global variable `greeting` is declared and assigned to reference the array `["Hello"]`. On line 3, the function `test` is called with the passed in argument `greeting`. At this point, both the global variable `greeting` and the parameter `arr` reference the same array. On line 4, `arr` is reassigned to the new array `["ByeBye"]`. Therefore, parameter `arr` and the object `greeting` variable no longer reference the same place in computer memory. Thus, the object variable `greeting` is no longer mutable because `arr` now references a different object.

## 2. Example from Study Guide

Examine the code example below. The last line outputs the string `'Hi'` rather than the string `'Hello'`. Explain what is happening here and identify the underlying principle that this demonstrates.

```js
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);
```

Best Answer from Study Guide:

The global variable `greeting` is declared and initialized to the string `Hello` on line 1. Lines 3 to 6 define a loop that will execute forever, unless something happens to end the loop. When the loop begins, it first reassigns the `greeting` global variable to `Hi` on line 4. On the next line, `break`, causes the loop to end, with execution resuming after line 6. Finally, on line 8, `console.log` is called with the value of the variable `greeting` passed to it as an argument. Since `greeting` is now assigned to `Hi`, that is what gets output. **This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.**

Answer Explanations:

While none of these answers is technically incorrect, they all answer the question with varying degrees of detail and precision.

* Answer **A** describes what is happening in the code example, but does so in a fairly basic way with imprecise language. This response wouldn't be sufficient to receive full points for any of the questions in the assessment.

* Answer **B** again describes what is happening, but with greater precision of language. This answer would score higher than answer **A**, but generally wouldn't be sufficient to receive full points for the majority of questions; most questions in the assessment are looking for something more, such as *a specific piece of syntactical knowledge* and perhaps *identification of some fundamental concept.*

* Answer **C**, as well as precisely describing the example, *identifies an important JavaScript syntactical convention* that is relevant to the example code: the fact that braces next to a while statement form a block in JavaScript. We also use more precise terminology by saying that greeting is initialized instead of assigned. For some assessment questions, this answer might be enough to receive full points, but many questions expect you to demonstrate a deeper understanding of the fundamental concept that this illustrates.

* Answer **D** goes a step further than **C** by **explaining why this is important** and the *underlying principle that it demonstrates*; i.e., the fact that JavaScript has particular scoping rules which affect whether or not a variable can be referenced or reassigned. It also talks about how the `break` statement influences the execution of the loop. Finally, we also mention that we're declaring a global variable. Based on the way that this question is phrased, answer **D** would be the only answer of the four to receive full points in an actual assessment.

[9.](https://launchschool.com/books/javascript/read/objects#exercises)

## 3. What does the following program log to the console? Why?

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

Solution
The program logs `'hi'` and `'hello'` and demonstrates the difference between pass by value and pass by reference. When passed as arguments into functions, objects are mutable; strings and other primitives are not. `foo` as an object is pass by reference, so when it is passed into the function `bar` to the parameter `argument1`, it points to the same place in memory as the object `foo`. Therefore, when we reassign the property `a` of the local variable `argument1`, we are mutating the same object that the global variable `foo` points to. Thus, when the `console.log(foo.a)` method is called on line 80, `hi` is logged.

On the other hand, `qux` as a string is pass by value. When `qux` is supplied as an argument to `bar`, `argument2` is initialized with a copy of the value of `qux`, and not the actual variable `qux` itself. Therefore, reassigning `argument2` will not reassign `qux`, since they are two different copies of the same value. Thus, line x logs `hello`: the original value of the `qux` variable.

Launch School
Also, variable reassignment, such as that on line 10, doesn't mutate the original object even when the object is mutable. Thus, line 9 mutates `foo` by assigning its `a` property to a new value (`'hi'`). Therefore, the code on line 15 logs `hi`. On the other hand, line 10 reassigns the `argument2` variable, but it doesn't mutate the string represented by `qux`. Thus, line 16 logs `hello`: the original value of the `qux` variable.

## 4. What is output and why?

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

The `console.log(firstName)` method outputs `John` on line 104. The call to the `getName` function returns `john` on line 103. This example illustrates pass by value. The function `getName` cannot access or reassign the variable `firstName` because only a copy of the value of `firstName` is passed into the function, and not the actual variable `firstName` itself since it’s a primitive and hence pass-by-value. The `name.concat(' Doe')` call on line 3 does not change the value of `name`, since strings cannot be mutated. The reassignment `name = name.toLowerCase()` does change the value of `name` because it reassigns `name` to its own value with the `toLowerCase()` method performed on it.

## 5. What will the following code log to the console and why?

```js
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
```

This code will log `TypeError: Assignment to a constant variable`. Variables declared by `const` are block scoped and their value cannot be changed through reassignment. So when we try to reassign `a` on line 6, we get an error. Passing `a` as an argument to `myFunction` doesn't do anything because `myFunction` does not accept any parameters.

## 6. What gets logged and why?

```js
let name = 'nina';

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

This code will log `nina` because of variable scoping rules in JavaScript. When the `name` variable is declared within the scope of the function `outer`, it is limited to the scope of that function, and is terminated when the function is finished. The `console.log(name)` method only has access to variables in the global scope and cannot access variables within the scope of the function `outer`. Here, when `console.log()` is called on the last line, it only has access to the global variable `name` declared on line 1. Thus it logs `nina`.

If you were to call `console.log(name)` within the function `outer()`, that would be variable shadowing, since it would log the value of `name` within the scope of `outer()`, which would be `Jill`.

## 7. Variable Shadowing - What does this code log and why?

```js
let a = 1;

function doit(a) {
  console.log(a);
}

doit(3); // => 3
console.log(a); // => 1
```

The code returns `3` on the invocation of the function `doit` on line 7 and logs `1` from the `console.log` method on line 8. This example illustrates variable shadowing. On line 1, the global variable `a` is declared and initialized to the value of `1`. The `doit` function is declared on line 3 and accepts one argument, here the variable `a`. This parameter variable `a` shadows the global variable `a` on line 1 making it inaccessible within the function `doit`. When the `doit` function is invoked, it passes the value `3`. The `console.log` method on line 8 logs the global variable `a` from line 1.

## 8. Variable Shadowing - What does this code log and why?

```js
function changeName(name) {
  name = "bob";
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => jim
}

anotherFunction(); // => undefined
```

The code will log `jim` from the `console.log(name)` method call on line 8, and the invocation of `anotherFunction` on line 11 will return `undefined`. This is an example of variable shadowing.

This code logs 'jim'. The `changeName` function is declared on line 1 and takes an argument called `name`. On line 2, an uninitialized variable `name` is assigned the value of 'bob'. The function `anotherFunction` is declared on line 5 without an argument. On line 6 the variable `name` is initialized and assigned the value of 'jim'. The `changeName` function is called on line 6 with argument local variable'name' passed in from the inner scope of `anotherFunction`. The 'name' variable is

Alex's Answer
The code will log 'jim' and then undefined. When anotherFunction() is invoked on line X, it comes into scope and within its scope, the variable 'name is declared and initialized to the string 'jim' on line 6. On line 7, the function changeName is invoked and passed the variable name as an argument. At this point, the variable name that is local to the function changeName and the outer scope variable of the same name that is local to anotherFunction() are both set to string 'jim'. However, when changeName() is invoked the variable name that is local to that function gets reassigned to the string 'bob'. This does not affect the name variable in anotherFunction() - the two values have now diverged. When the changeName function terminates on the next line and the name variable is logged to teh console, this reverts to the version that is local to anotherFunction(), and 'jim' is logged to the console. This is an example of variable shadowing.

## 9. What does this code output to the console?

```js
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
```

The code outputs `'Not Empty'`. This example illustrates truthiness in JavaScript. Here, function `isArrayEmpty` is declared on line 1 and invoked on line 10 with an empty array `[]` passed as an argument into the function. The `arr` variable, whose value is `[]`, is passed into the `if` statement and evaluates to true because an empty array is not a falsy value. Thus, the first branch of the  `if` statement executes and `'Not Empty'` is logged to the console.

## 10. What does this code log and why?

```js
let hello = 'Hello, world!';

function myFunc() {
  console.log(hello);
}

myFunc();
```

## 11. What does this code log and why?

```js
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
```

This code logs `1`. Variables declared in an outer scope are accessible from an inner scope. Here, `a` is declared and initialized to the value of `1` within `myFunction` which has an outer scope to the `if` statement's inner scope. Since the `if` statement evaluates to `true`, the `console.log(a)` method logs `1` when `myFunction` is invoked on line 9.

---

## 12. What will it log and why?

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

## What does this code log to the console, and what concepts does this demonstrate?

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

## 13. What does this program log and why?

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

## 14. What is the return value of the final line? Why? What concept does this illustrate?

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

The return value of the final line will be `[ 4, 4, 12 ]`. This example illustrates the problem of mutating an array while iterating over it. The function `evenValues` is defined on line 3 and takes a single parameter called `array`. The `forEach` method, during each iteration, invokes the callback with the element's value as an argument. The callback then adds even numbers to the `evens` array. In the end, `forEach` returns `undefined`.

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

## Explain why line 9 outputs 'hello' rather than some other String. Be precise

```js
function change(param) {
  param += " greeting";
  return param;
}

let greeting = "hello";
change(greeting);

console.log(greeting);
```

Line 7 outputs `'hello'` because the `console.log(greeting)` method passes the global variable `greeting` from line 8 as an argument. This code demonstrates variable scope and that primitive values cannot be mutated. The function `change` is declared on line 3 with the single parameter `param`. `param` is then reassigned to " greeting" but this doesn't change the value of the `greeting` variable. Thus, "hello" is logged to the console.

LAURENT
The call to the `console.log` method on line 7 will output `hello` to the console because:

1/ the value `greeting` is passed-by-value as argument to the function call to `change` on line 7

2/ The returned value from the call to `change` is not assigned to the global scope

On line 6, we declare the global variable `greeting` and assign to it the value `hello`. On the next line, we call the function `change` with the the string `greeting` as argument. This is being passed to the function by value, which means that a copy of the variable is assigned to `param`. Inside the function, we re-assign `greeting` to `hello greeting` and return it. But the returned value is not being assigned in the global scope, and the original `greeting` string has not been modified, only a copy of it.

Alex
The code will log 'hello'. The global variable `greeting` declared on line 8 is unchanged by the function `change` because strings are primitive values and are pass-by-value, meaning a copy of the value is passed to the function, not the variable itself. A copy of the string "hello" is passed to the `change()` function on line 3 and assigned to the local variable `param`. `param is then reassigned to concatenate the string`greeting`, which is returned on line 5. When the function is invoked with`greeting` as its argument on line 9, it returns "hello greeting"-- but this does not affect the global variable `greeting`, which is logged as its original, unchanged value`hello`on line 11.

HyoSung
Line 7 outputs 'hello' because the `console.log(greeting)` method passes the global variable `greeting` from line 8 as an argument. This code demonstrates variable scope and that primitive values cannot be mutated. The function `change` is declared on line 3 with the single parameter `param`. `param` is then reassigned to " greeting" but this doesn't change the value of the `greeting` variable. Thus, "hello" is logged to the console.

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

## Will this program produce an error when run? Why or why not?

```js
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
```

HyoSung
This program will not produce an error and will log 'bar' to the console. This code demonstrates variable scoping rules and the use of `const` declarations in JavaScript. On line 1, the global variable `FOO` is declared with the `const` keyword and initialized to the value of the string 'bar'. Because `FOO` is declared with `const` it cannot be reassigned. However, lines 3-5 define a block scope and within this scope another `FOO` variable is declared with the `const` keyword. Since this variable `FOO` has inner scope it is local to the block and independent of the global `FOO` on line 1. This `FOO` is block-scoped and inaccessible to the outer-scoped `console.log(FOO)` method on line 7. Thus, when the `console.log(FOO)` method executes, it logs 'bar' because it passes in the global `FOO` variable from line 1.

Alex
The code will not return an error.  This is because of JavaScript scoping rules - specifically, that inner scope variables cannot be accessed in an outer scope. `FOO` is declared as a constant and initialized to the string `bar` on line 1. When FOO is declared as a constant within the block scope on line 3, this is an inner scope variable local to the block and independent from the global constant. Therefore, initializing the inner scope `FOO` to `qux` is permissible--whereas it would be impermissible to reassign a constant, this variable is a new variable entirely. The `}` on line 4 terminates the block scope and brings the global constant `FOO` back into scope, and logs it on line 6.

Laurent
This code will not output an error and will log `bar` to the console. Since variable are declared with `const` in different scopes, the global variable `FOO` will not be affected by the initialization of the variable `FOO` in the inner scope.

On line 1, we initialize the global variable `FOO` with the value string `bar` with the `const` keyword . Then, inside the curly braces, we initialize another variable `FOO` that will exist only in the inner scope of the curly braces. Then on line 7, the call to `console.log` will print the value of the global variable `FOO` , `bar` , to the console as it doesn't have access to the inner scope `FOO`.

## The following code causes an infinite loop (a loop that never stops iterating). Why?

```js
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```

The problem occurs on line 3 where we assign `1` to `counter` inside the conditional part of the `while` loop. JavaScript accepts this code since the assignment always returns a truthy value (`1` in this case), and the loop condition never becomes false. Furthermore, the test on line 7 never becomes trues since the assignment on line 3 ensures that `counter` is always equal to `2` when we execute line 7.

## Does the following code produce an error? Why or why not? What output does this code send to the console?

```js
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
```

The code doesn't produce an error since all 3 components of the `for` loop are optional. In this code, we omit the "next value" component; however, this isn't a problem here since we increment the loop variable on line 2. The code outputs `1`, `2`, `3`, `4`, and `5`. Although `i` is `0` on the first iteration, the loop logs `1` during that iteration since `i += 1` increments `i` before `console.log` gets to log anything. `i += 1` also returns a new value of `i` (`1`), and that's what gets passed to `console.log`. Similar actions occur on each iteration: the output is always `1` greater than the initial value of `i`, and `i += 1` takes care of incrementing `i` to the next higher number, then passes that value to `console.log`.

## In the following code, what are the final `length` values for `array1`, `array2`, `array3`, `array4`, and `array5`?

```js
let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;
```

The length of `array1` is `4`. The length is the highest index position that has a value, plus `1`. Here, the highest index position that has a value is `3`; add `1` to that, and we get the length value of `4`.

The length of `array2` is `5`. You can set the length of an array. Even if the highest index position that has a value assigned is `0`, assigning a new length of `5` overrides that length. Here, the resulting array has one element with 4 gaps at the end that each have a value of `undefined`.

The length of `array3` is `0`. Index positions must be non-negative integers starting from `0`. Negative and non-integer indexes are not counted when determining an array's length.

The length of `array4` is `3`. When you set an array to a length that is shorter than its current length, the array gets truncated to the new length. Here, JavaScript truncates the array by removing the last two elements, leaving a total of 3 elements.

The length of `array5` is `101`. Since the length of the array is the highest index position that has a value, here the highest index position that has a value is `100`, so the length is `101`.

## Add some code inside of the for loop below that logs the current value of i to the console on each iteration. Before you run the code: What sequence of numbers do you expect to be logged?

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/*
0
2
4
6
8
10
*/
```

The initialExpression initially assigns i to 0. Then, on each iteration of the `for` loop, i is re-assigned via the incrementExpression. The expression `i += 2` in our loop is short-hand for `i = i + 2`, and thus re-assigns `i` to the current value of i plus 2. When the value of i is greater than 10, the condition provided to our for loop is no longer true and the loop terminates.

## The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'

```js
for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}

console.log('Launch!');
```

In our solution code, we initialize i to 10, and decrement i by 1 on each iteration, using the short-hand expression i -= 1. Once i is equal to 0, the condition provided to our for loop is false and the loop terminates. Finally, we log 'Launch!'.

There are different ways to achieve this behavior. For example, you could also use i >= 0 as condition and then check whether i reached the value of 0 inside the loop, in order to determine whether to log the number or 'Launch!'.

/*
Write a loop that logs greeting three times.
*/

let greeting = 'Aloha!';

for (let i = 0; i < 3; i += 1) {
  console.log(greeting);
}

/*
For both kinds of loops, we declare a counter variable count to keep track of how many iterations we've been through. We start by assigning it to 1, and then increment it on each iteration of the loop. As soon as it is greater than 3, the condition provided to the loop returns false and the loop is terminated.
*/

/*
Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.
*/

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

/*
On line 5, we access the array element at the current index, and log the returned element to the console with console.log. Subsequently, we increment index by 1.

After each iteration of the loop, our while condition is evaluated. Since JavaScript arrays have a zero-based index, we want to terminate the loop when index is equal to array.length, because the last index of an array is always one less than the array's length.
*/

## Take a moment to read the MDN documentation on the continue statement

Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

```js
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
  if (cities[index] === null) continue;
  console.log(cities[index].length);
}
```

`continue` terminates the current iteration and continues with execution of the next iteration. This allows us to skip each element that is equal to `null`.

```js
for (initialization; condition; increment) {
  // loop body
}
```

/*
The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.
*/

for (let i = 0; i < 1 ; i += 1) {
  console.log("and on");
}

/*
The above code never terminates, because the condition of the for loop was left empty. In this case, JavaScript treats it as true.

One way to terminate the loop from within the body is to use the break statement:
*/

for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}

/*
Write a while loop that logs all odd natural numbers between 1 and 40.
*/

// let counter = 1;

while (counter < 41) {
  console.log(counter)
  counter += 2;
}

/*
It loops over all numbers from 1 to 40 and uses an if statement to determine whether or not num should be logged. In order to check whether num is even, we would use the condition num % 2 === 0, which checks whether num is divisible by 2 without remainder. In order to determine whether a number is odd, we simply negate it.

The trick in our solution code is that we know that each second number is odd, so if we start at 1, we can simply increment the number by 2 on each iterating, effectively looping only over the odd numbers.
*/

let counter = 1;

while (counter < 41) {
  if (counter % 2 !== 0) {
    console.log(counter);
  }
  counter += 1;
}

/*
The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.
*/

let randomNumber = Math.round(Math.random());

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No.');
}

/*
Recall that that 0 is falsy in Javascript, while 1 is truthy. Our if statement will execute the code on line 4 if the condition provided on line 3 (randomNumber) is truthy; otherwise it will execute the code on line 6.

Alternatively, you could have used as conditions if (randomNumber === 0) and if (randomNumber === 1). Just remember to make it a habit to use strict equality ===.
*/

/*
Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.
*/

let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes!' : 'No.');

/*
The syntactical structure of the ternary operator is like so:

condition ? expression1 : expression2

If the condition provided is truthy, expression1 will be evaluated. If the condition is falsy, expression2 will be evaluated.

You may have come up with a solution like the following:

randomNumber ? console.log('Yes!') : console.log('No.');

This is a perfectly fine solution. Ours is an alternative that uses the ternary operator only to decide on the string that is going to be logged. Take a close look at it: The expression randomNumber ? 'Yes!' : 'No.' evaluates to either the string 'Yes!' or the string 'No.'. Since it is an expression that evaluates to a string value, we can use it as an argument to console.log. It's similar to using other complex expressions with operators, as in console.log('Hello' + 'World').
*/

/*
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.
*/

let weather = "rainy";

if (weather === "sunny") {
  console.log("It's a beautiful day");
} else if (weather === "rainy") {
    console.log("Grab your umbrella");
} else {
  console.log("Let's stay inside");
}

/*
Note that we used the strict equality operator, ===, to determine if weather was 'sunny' or 'rainy'. If both of these comparisons return false, the else branch of our if statement will be executed.
*/

/*
Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.
*/

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/*
The switch statement evaluates the provided expression (animal in our case) and will execute the statement associated with the case that matches, as well as the statements in all cases following the matching case until reaching either the end of the switch statement or a break.

In the provided code, this means that after finding a matching case ('horse'), JavaScript will execute console.log('neigh') as well as the console.log invocations in all following clauses.
*/

/*
Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
*/

let weather = 'sunny'; // 'sunny', 'rainy', ...

switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log("Grab your umbrella.");
    break;
  default:
    console.log("Let's stay inside.");
}

/*
Our switch statement evaluates the provided expression, weather, and when it finds a case clause matching the value of that expression, the code within that case clause is executed. If the value of the provided expression does not match any case clause, the default clause is executed.
*/

## What is logged and why?

```js
let numArray = [1, [2], 3];

function passByValue(arr) {
  arr.forEach(num => {
    typeof num === 'object' ? num[0] += 1 : num += 1;
    console.log(num);
  });
}

passByValue(numArray);
console.log(numArray);
```

This code example logs `2`, `[3]` and `4` respectively, and `[1, [3], 3]`. It illustrates the concepts of pass by value and pass by reference. On line 1, `numArray` is declared and initialized to reference a nested array. On line x, the function `passByValue` is called with the variable `numArray` passed as an argument.

## Outer scope variables can be accessed by inner scope

```js
let a = 1;         // outer scope variable

function logA() {
  console.log(a);  // => 1
  a += 1;          // a is reassigned to a new value
}

logA();
console.log(a);   // => 2  "a" was re-assigned in the inner scope
```

## Peer scopes do not conflict

```js
function funcA() {
  let a = 'hello';
  console.log(a);
}

function funcB() {
  console.log(a); // ReferenceError: a is not defined
}

funcA();
funcB();
```

Executing `console.log(a)` on line 7 throws an error since `a` is not in scope in `funcB`. This code demonstrates variable scoping rules, specifically that peer scopes do not conflict. When function `funcA` is invoked, it defines a new scope for local variables. The local variable `a` is declared and initialized to the string `'hello'`. Within the `funcA` function the `console.log(a)` method logs `hello` to the terminal. After `funcA` completes execution, the variable `a` is discarded and control returns to the main flow of the program. Then function `funcB` is called and attempts to log the value stored in the variable `a` to the terminal, but a `ReferenceError` is thrown because the local variable `a` only existed within the scope of `funcA` and was destroyed after `funcA` completed execution. Thus, `a` is not in scope in `funcB`.

## How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects

```js
[1, 2, ["a", ["b", false]], null, {}]
```

Primitive Values: `1`, `2`, `"a"`, `"b"`, `false`, `null`

Objects: `[1, 2, ["a", ["b", false]], null, {}]`, `["a", ["b", false]]`, `["b", false]`, `{}`

The outermost set of brackets defines an array (an object) that contains 5 elements. The elements with values `1`, `2`, and `null` are all primitive values, while [`"a"`, [`"b"`, `false`]] is a nested array, and `{}` is nested object. The nested array has 2 elements, one of which is a primitive value (`"a"`), while the other is yet another nested array. Finally, this innermost array contains two elements, `"b"` and `false`, both of which are primitive values.
