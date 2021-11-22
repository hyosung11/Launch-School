# Answer Snippets for Written Assessment

## 1. Arrays: working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)

## Data Types

JavaScript has the following built-in data types:

`undefined`
`null`
`String`
`Number`

### `Number`

* All JavaScript numeric values have type `Number`.
* JavaScript represents all numbers using a floating point system.

Primitive values are not mutable.
`NaN` is a number in JavaScript, so it is a primitive value.
`undefined` is a primitive value.

```js
Number('12 oz');   // => NaN
parseInt('12 oz'); // => 12

Number('');        // => 0
parseInt('');      // => NaN
```

## 4. Declarations, Initialization, Assignment, and Reassignment

```js
let myNumber = 3;
```

`let` with a variable name and optional assignment forms a JavaScript statement.

The value `3` is an expression. Code appearing to the right of an `=` in a declaration is an expression.

```js
let myVariable = 'Hello, World';
myVariable = 23;
```

Once you create a variable, you can reassign it to a different value. This code contains only one variable: `myVariable`.

```js
let a = 2;
let b = Math.floor(Math.random() * 2);
a *= b;

if (a = 2) {
  console.log('The value of `a` is two.');
} else {
  console.log('The value of `a` is NOT two.');
}
```

In JavaScript, whenever you see a single `=` sign in an expression, it's always a variable assignment; in this code, the program assigns the value `2` to `a` instead of testing whether `a` already contains a value of `2`. What's more, the expression between parentheses in an `if` statement gets evaluated in a boolean context; that is, JavaScript tries to determine if the expression has a truthy or falsy return value. In this case, the return value is always `2`, which evaluates as truthy, so the program always executes line 6, and never line 8.

## 5. Equality: Loose and Strict Equality

What will the following code output? Why?

```js
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
```

The code outputs `false`. This example illustrates equality and the difference between comparing primitive values and object values. Primitives, like strings or numbers, are compared by their value. Here, `array1` and `array2` are objects and not primitives, so JavaScript compares whether the two objects are strictly equal on line 4 by checking whether they are the same object, i.e., whether they reference the same location in memory. Since two different array objects were constructed on line 1 and line 2, they don't have the same reference. Thus, `false` gets logged.

On line 1 we declare a variable `array1` and initialize it to a 3 element array with the elements `2` `6` and `4`. On line 2 we declare a variable `array2` and initialize it to a 3 element array and within `array2` we also see `2`, `6`, `4`. So `array1` and `array2` are both 3 element arrays with the same values in the same order. In JavaScript arrays are objects. They are not primitive types. If we were to compare the output of two primitive types such as strings, we would see the output `true` because primitive types are compared by their value. However, when we compare two objects JavaScript is comparing their location in memory. If the two objects do not occupy the same location in memory then JavaScript will return `false`.

---

When comparing a `number` and a `string`, JavaScript coerces the `string` to a `number.

* Even if a string isn't a number, JavaScript coerces it to a number when a string and a number are mixed with `==`.
* It doesn't matter which side of the `==` contains the string operand.
* If the string contains a non-numeric value, JavaScript coerces it to `NaN`.

## 8. Functions: Function Declarations, Function Expressions, and Arrow Functions

```js
let foo = function() {
  function bar() {};
}
```

Function declarations are statements that must begin with the `function` keyword. Here, a function declaration is nested within a function expression.

## 11. Functions: passing arguments into and return values out of functions

During execution, JavaScript makes the arguments passed to a function available to the function as local variables with the same name as the function's parameters.

Defining a function involves parameters.
Invoking a function involves arguments.

## 16. Pass-by-value / Pass-by-reference

Pass-by-value

* Passing an argument into a function
* That argument is a *primitive* type
* The parameter in the function points to a new **copy** of the value

Pass-by-reference

* Passing an argument into a function
* That argument is an *object* type -->  {} object, Array, and Arrays are also objects
* The function can *change/modify/mutate* the argument that is passed because we have a *reference* to that original argument

---

When passing a **primitive value** as an argument to a function

* reassigning the parameter that corresponds to the primitive value does not affect the original value.

Primitive values, such as strings, numbers, and undefined, are immutable values that get stored in a variable. Unlike objects, we don't store pointers to the primitive values in the variable.

Primitive values are always immutable. Thus, no matter what happens inside the function, the original value passed to the function never changes.

When we pass objects into functions as arguments, we pass a pointer for the object into the function; when we pass primitive values as arguments, we pass a copy of the primitive value.

---

Which of the following code snippets use pass-by-value at least once?

```js
function foo(a) {
  return a + 1;
}

foo(5);
```

This snippet uses pass-by-value when it passes a primitive value (`5`) to the function and then the function returns a primitive value (`6`).

```js
function foo(a) {
  return [a, a, a];
}

foo(5);
```

This snippet uses pass-by-value when it passes a primitive value (`5`) to the function. Note that it uses pass-by-reference when it returns an array.

```js
function foo() {
  return [1, 2, 3];
}

foo();
```

This snippet does not use pass-by-value at all. No arguments are passed to the function, and the function returns an array using pass-by-reference.

```js
let foo = 5;
let bar = foo;
```

Snippet D does not use pass-by-value at all. The term pass-by-value only applies to functions, not assignments and initializations.

```js
function foo(a) {
  return 6;
}

foo([1, 2, 3]);
```

Snippet E uses pass-by-value when it returns a primitive value (6) from the function. It uses pass-by-reference when it passes an array argument to the function.

---

When passing an **object** (includes arrays) as an argument to a function:

* the parameter assigned to the objects acts as a pointer to the original object
* the function can mutate the original object
* reassigning the parameter that corresponds to the object does not affect the original object

Objects are passed into functions as references; that is, the function sees a pointer to the original object.

A function can use an object pointer to mutate the original object.

If the function somehow received a copy of the object, it would lose the ability to mutate the original object; it can only mutate the copy. Since we mutate the object, JavaScript must not be passing a copy to the function.

Reassigning a variable that points to an object merely changes what the variable points to; it doesn't change the value of the original object.

---

What will happen when we run this code? Why?

```js
let a = ['Hello'];

function changeValue(a) {
  a[0] = 'Goodbye';
}

changeValue(a);
console.log(a);
```

The code logs `[ 'Goodbye' ]`. This example illustrates pass by reference. On line 1, the global variable `a` is declared and initialized to reference the array `['Hello']` which is an object value. The function `changeValue` is declared on line 3 and invoked on line 7 with the argument `a` passed to it. When `a` is passed to `changeValue` it is passed as a reference to `[‘Hello’]`, so within function `changeValue`, that array referenced by outer scope variable `a` is mutated. Thus, when `console.log(a)` is called on line 8, `[ 'Goodbye' ]` is logged.

---

Which of the following code snippets use pass-by-reference at least once?

```js
function foo(s) {
  return s + s;
}

foo("abc");
```

Snippet A does not use pass-by-reference at all. It passes a primitive value (`"abc"`) to the function and then the function returns a primitive value (`"abcabc"`).

```js
function foo(s) {
  return { qux: s };
}

foo("abc");
```

Snippet B uses pass-by-reference when it returns an object (`{ qux: s }`). It uses pass-by-value when passing the primitive string value to the function as an argument.

```js
function foo() {
  return { qux: "xyzzy" };
}

foo();
```

Snippet C uses pass-by-reference when it returns an object (`{ qux: "xyzzy" }`). It does not use pass-by-value at all.

```js
let foo = { qux: "xyzzy" };
let bar = foo;
```

Snippet D does not use pass-by-reference at all. The term pass-by-reference only applies to functions, not assignments and initializations.

```js
function foo(obj) {
  return "def";
}

foo({ qux: "xyzzy" });
```

Snippet E uses pass-by-reference when we pass an object (`{ qux: "xyzzy" }`) to the function. It uses pass-by-value when the function returns a primitive value ("def").

## 18. Side-effects

Which of the following code snippets have functions that have side-effects? Choose all that apply.

```js
function volume(height, width, depth) {
  let result = height * width * depth;
  console.log(result);
  return result;
}
```

This snippet writes output to the console.

```js
let readline = require("readline-sync");

function askYesOrNo(prompt) {
  let answer = readline.question(prompt);
  return answer;
}
```

This snippet gets input from the keyboard.

```js
function multiply(a, b) {
  a * b;
}
```

This snippet doesn't do anything that is considered a side-effect.

```js
let boo = "gar";

function setBoo() {
  boo = "xyz";
}
```

This snippet changes the value of the global variable `boo`.

## 19. Strings (working with Strings)

Consider the following variable declaration. Which of the following expressions return `'o'`?

```js
let cat = 'Butterscotch';

cat[8];
cat[-4]; // => returns `undefined` if you try to access a character with a negative integer
cat[cat.indexOf('o')];
cat.slice(-4, -3); // => `string.length + -4` -> 12 - 4 = 8 and `string.length + -3` -> 12 - 3 = 9; same as `cat.slice(8, 9)
cat[cat.length - 4];
```

## 20. Truthiness vs. Boolean

`[undefined]` is truthy since it's an array value, even though the array contains just a single `undefined` element.

## 21. Variable Scope (especially how variables interact with function definitions and blocks)

A variable's scope refers to where it is available for use in a program; in other words, where it can be accessed.

Passing the value of a variable into a function as an argument gives that function access to the value of the variable, but it doesn't change the *scope* of the variable.

The type of variable's value plays no part in its scope, nor does its truthiness.

Scope describes where JavaScript looks for any variables used in an expression.

Functions create new scopes in JavaScript.

Variables declared with `let` and constants declared with `const` inside code blocks have local scope. Variables declared with either keyword inside a block aren't accessible outside the block.

* Scope determines where JavaScript can find declared variables that it needs to use.
* Functions and blocks always create new scopes.
* Scopes exist even if there are no variables defined within that scope.
* Scopes involve the names of variables, constants, and functions; the values associated with those names play no part.

### Rules

1. Outer scope variables can be accessed by the inner scope.
2. Inner scope variables cannot be accessed by the outer scope.
3. Peer scopes do not conflict.
4. Nested functions have their own variable scope, and follow the same rules of inner and outer scoped variables.
5. Inner scope variables can shadow outer scope variables.

### 1. Outer scope variables can be accessed by the inner scope

```js
let a = 1; // outer scope variable

function logA() {
  console.log(a);  // => 1
  a += 1;          // a is reassigned to a new value
}

logA();
console.log(a);   // => 2  "a" was re-assigned in the inner scope
```

This code logs `1` from within `logA` and `2` from the `console.log(a)` method on line 9. The call to `logA` returns `undefined`. This example illustrates that outer scope variables can be accessed by the inner scope. Since the variable `a` is declared and initialized in the outer scope (i.e., the global scope), it can be accessed within the inner scope of the function `logA`. Here, `a` is reassigned to a new value within `logA` and this is the value that is logged.

```js
// What will the following code log to the console and why?
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
```

This code will log `1`. This example illustrates variable scoping rules, specifically that outer scope variables can be accessed in an inner scope. Here, on line 2, we declare the local variable `a` with `let` and initialize it to the value of `1`. On line 4, there is an `if` statement and the condition provided to the `if` statement is the boolean `true`. This means it's always going to evaluate as true and the code on line 5 will execute each time `myFunction` is called. Since the `if` statement creates an inner scope within `myFunction` it can access the variable `a` in the outer scope on line 2. Thus, on line 5, we log the value of `a` to the console which is `1`.

```js
// What will the following code log to the console and why?
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
```

The code logs `1`. This example illustrates variable scoping, specifically that outer scope variables can be accessed in an inner scope. Here, the global variable `a` is declared and initialized to the value `1` on line 1. The function `myFunction` is called on line 7. Within `myFunction` the `console.log(a)` method is invoked and it has access to the variable `a` on line 1. Thus, the value `1` is logged.

This code logs `1`. On line 7 we're invoking the function `myFunction` and on line 4 within that function we're logging `a` to the console. The variable `a` is declared on line 1 outside of this function. The function body of `myFunction` does create an inner scope; however, inner scope can access variables declared in the outer scope, so on line 4 within the `myFunction` function body we can successfully access `a` and log its value.

```js
let hello = "Hello, world!";

function myFunc() {
  console.log(hello);
}

myFunc(); // => Hello, world!
```

The code logs `Hello, world!`. This example illustrates variable scoping rules, specifically that outer scope variables are accessible from an inner scope. Here, the global variable `hello` is declared and initialized to the string "Hello, world!" on line 1. The function `myFunc` is declared on line 3 and invoked on line 7. Within `myFunc` the `console.log(hello)` method logs the value of `hello`. So `myFunc` logs "Hello, world!" and returns `undefined`.

### 2. Inner scope variables cannot be accessed in the outer scope

```js
function aFunc() {
  let a = 1;
}

aFunc();
console.log(a); // ReferenceError: a is not defined
```

This code will log `ReferenceError: a is not defined`. This example illustrates variable scoping rules, specifically that inner scope variables cannot be accessed in the outer scope. The function `aFunc` is invoked and defines a new scope for local variables. The local variable `a` is declared within `aFunc` and initialized to the value `1`. After the function `aFunc` executes, the variable `a` is immediately discarded and control returns to the main flow of the program. Thus, when the `console.log(a)` method executes on line 6, a `ReferenceError` is thrown because the outer scope of the program does not have an `a` variable.

### 3. Peer scopes do not conflict

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

Executing `console.log(a)` on line 7 throws an error since `a` is not in scope in `funcB`. This example illustrates variable scoping rules, specifically that peer scopes do not conflict. The function `funcA` is called and defines a new scope for local variables. The local variable `a` is declared and initialized to the string `'hello'`. Then `hello` is logged to the terminal. After function `funcA` executes, the variable `a` is discarded and control returns to the main flow of the program. Function `funcB` is called and attempts to log the value stored in the variable `a`, but `ReferenceError: a is not defined` is thrown because the scope of local variable `a` was confined to `funcA`.

### 4. Nested functions have their own variable scope, and follow the same rules of inner and outer scoped variables

```js
let a = 1;           // first level variable

function foo() {     // second level
  let b = 2;

  function bar() {   // third level
    let c = 3;
    console.log(a);  // => 1
    console.log(b);  // => 2
    console.log(c);  // => 3
  }

  bar();

  console.log(a);    // => 1
  console.log(b);    // => 2
  console.log(c);    // => ReferenceError: c is not defined
}

foo();
```

My edited version of LS Shorter Answer
The code will log the values `1`, `2`, `3`, `1`, `2` and then throw a `ReferenceError`. This  example illustrates variable scoping rules, specifically that nested functions have their own variable scope, and that inner scope variables cannot be accessed in the outer scope. Here, executing `console.log(c)` on line 17 throws an error because `c` is not in scope on line 17 of function `foo`. The variable `c` is declared on line 7, but its scope is confined to the function `bar`. Once `bar` completes execution, the variable `c` is immediately discarded. On line 17, `foo` cannot see the variable `c` at all. Thus, `c` is not in scope on line 17 of the function `foo`, and a `ReferenceError` is thrown.

EV Longer Answer
A global variable `a` is declared and initialized to the Number `1`. The `foo()` function is invoked and creates a new scope for local variables. The local variable `b` is declared and initialized to the Number `2`. Within the `foo()` function, the function `bar()` is invoked, which creates a new scope for local variables. The local variable `c` is then declared and initialized to the Number `3`. Since the function `bar()` is nested within the function `foo()`, it can access the outer scoped variables: `a` (global scope) and `b` (outer scoped variable declared within the `foo()` function). Therefore, the values `1`, `2`, and `3` are logged to the console.

After the `bar()` function completes execution, the local variable `c` is **immediately discarded**, and control returns to the `foo()` function on line 15. The `foo()` function then calls the `console.log()` method, and values of the variable `a` and `b` (i.e. `1` and `2`) are logged to the console. However, when the `foo()` function attempts to access the value stored in the variable `c`, a `ReferenceError` is thrown as the variable `c` was created in the nested function `bar()` which only existed within the function scope of `bar()` and was destroyed after `bar()` completed execution. Therefore, `c` is NOT in scope on line 15 of the `foo()` function, and a `ReferenceError` is thrown. This demonstrates the principle of variable scoping, particularly that nested function have their own variable scope, and that inner scope variables **CANNOT** be accessed in the outer scope.

### 5. Inner scope variables can shadow outer scope variables

```js
let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
```

This code will log the number `1`, `2`, and `3` to the terminal. This example illustrates variable shadowing. Here, the global variable `number` is declared and initialized to the Number `10`. The `forEach` method is called on the Array `[1, 2, 3]` and each element of `[1, 2, 3]` is passed as an argument to the callback function and assigned the parameter `number`. Since the parameter `number` shares the same variable name as the global variable `number` variable shadowing occurs. Although the variable `number` declared on line 1 is still visible at this point since it was declared outside of and before the block scope, the local variable `number` shadows this outer scope variable making it inaccessible to the `forEach` method. Thus, the code logs the number `1`, `2`, and `3`.

```js
let a = 1;
function doit(a) {
  console.log(a); // => 3
}
doit(3);
console.log(a); // => 1
```

This code will log `3` and `1` to the terminal. This example illustrates variable shadowing. Here, the global variable `a` is declared and initialized to `1` on line 1. On line 5, the function `doit` is called and passed the value `3` as an argument. Within `doit` the parameter `a` is assigned the value `3`. Since the parameter `a` and the global variable `a` share the same name, the global variable `a` is shadowed by the parameter `a` making the outer scoped variable inaccessible within the function `doit`. Thus, `console.log(a)` on line 3 logs `3`. Finally, `console.log(a)` on line 6 logs `1` as it only has access to the global variable `a` from line 1.

```js
// What will the following code log to the console and why?
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
```

The code will raise a reference error. This example illustrates variable scoping rules and variable shadowing. On line 2, we declare a variable `a` and assign it to the value `1`. On line 4, we have an `if` statement that's always going to evaluate as true. Therefore, JavaScript will execute the code within this block. Note that the curly braces on lines 4 and 8 define a block, so this block creates an inner scope. Within this inner scope, we attempt to log the value of `a` on line 5. Then on line 6, we declare another variable called `a` and initialize it to `2`. Finally, on line 7, we attempt to log the value of `a`. Variable, `a` declared on line 6, has a scope of this entire block. And therefore, within this block, this variable `a` is shadowing the variable `a` declared on line 2. So from within this block, we can't see or access the variable `a` declared on line 2. On line 5, our code is not attempting to log the variable `a` declared on line 2, it's attempting to log the variable `a` declared on line 6. However, we cannot access a variable declared with `let` prior to assigning it a value. A variable declared with `let` although it's hoisted, is not given any value, not even the value `undefined`. This is why we'll get a reference error if we try to access a variable declared with `let` prior to initializing it to a value.

```js
// What will the following code log to the console and why?
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
```

The code will log `false`. This example illustrates variable scoping rules, specifically that variables in an inner scope are not accessible in an outer scope. On line 1 we declare a variable `a` and assign it the value `5`. On line 2 we declare the variable `b` and assign it the boolean `false`. On lines 4 through 6 we see that we have an if statement. The conditional is `a > 4`. Since `a` was initialized to `5` on line 1, this is always going to return `true`. So line 5 is always going to execute when we run this code. On line 5, we declare a variable `b` and initialize it to the boolean `true`. On line 8, we're passing `b` to our `console.log` invocation. In our code, we've declared two different variables called `b`. However, the curly braces on lines 4 to 6 define a block and the variable `b` declared within this block has inner scope and cannot be accessed in an outer scope. Thus, the `console.log(b)` method on line 8 will log `false`, the value of `b` on line 2.

```js
// What will the following code log to the console and why?
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
```

The code logs `2`. This example illustrates variable shadowing. The parameter `a` of `myFunction` shadows the variable `a` declared on line 1. The `a` referenced within the function body on line 4 refers to whatever argument is passed to the function. Here, the value of `b` which is then logged.

On line 1 the global variable `a` is declared and initialized to `1`. On line 3, the function `myFunction` is declared. On line 7, the global variable `b` is declared and initialized to `2`.
Finally on line 9, `myFunction` is called and `b` is passed in as the argument. `myFunction` has one parameter defined and its name is `a`. On line 4, within the function body, we log `a` to the console. The function parameter `a` on line 3 shadows the variable `a` declared on line 1. This makes the variable `a` on line 1 inaccessible within the function. So instead of logging the value of the variable `a` declared on line 1, the value that gets logged is the value passed in as an argument to `myFunction`. Here, we've passed in the variable `b` as the argument, so the value `2` gets logged.

```js
// What will the following code log to the console and why?
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
```

The code raises an error. This example illustrates that variables declared with `const` cannot have their value changed through reassignment. On line 1, the variable `a` is declared with the `const` keyword. On line 4, when we try to reassign `a` to the value `2`, the `TypeError: Assignment to constant variable.` is raised.

The code raises an error. On line 1, the variable `a` is declared with `const`. A variable declared with `const` cannot be reassigned. So on line 4, within the function body we attempt to reassign `a` to `2` and that raises the error. `myFunction` doesn't have a parameter named `a` to shadow the variable `a` declared on line 1. So on line, 4 we are attempting to reassign this constant defined on line 1.

On line 7, we're passing the variable `a` in as an argument to `myFunction`, but because we haven't defined any parameters for `myFunction`, passing in an argument isn't going to raise an error in JavaScript. It will simply ignore those arguments.

```js
// What will the following code log to the console and why?
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
```

The code logs `{ firstName: 'Jane', lastName: 'Doe' }`. This example illustrates that while a variable declared with `const` cannot be reassigned, its object properties are mutable. On line 1, global variable `a` is declared with `const` and initialized to an object. On line 6, the function `myFunction` is declared, and invoked on line 10. Finally on line 12, we attempt to log the value of the variable `a`. On line 7, we are not reassigning the variable `a`, instead we are reassigning `firstName`, one of its properties. Although we cannot reassign a variable declared with `const` that doesn't mean it's immutable. We can mutate the object that's assigned to constant `a`. On line 10, when we call `myFunction`, we reassign the value of the `firstName` property to the string `'Jane'`. Thus, on line 12, the object logged is `{ firstName: 'Jane', lastName: 'Doe' }`

### Variable Shadowing 1

Does `foo` in the `bar` function shadow the `foo` outside the function?

```js
let foo = 1;

function bar() {
  let foo = 2;
  console.log(foo);  // logs 2
}

bar();
```

Yes because functions create scope in JavaScript. The `foo` in the body of the `bar` function is distinct from the `foo` declared on line 1 in the global scope. Thus, `foo` in the `bar` function shadows the `foo` in the global scope which is why the `console.log(foo)` method logs `2` to the console.

### Variable Shadowing 2

Let's make a small change to the code from the previous question. Does `foo` in the `bar` function shadow the `foo` outside the function?

```js
function bar() {
  let foo = 2;
  console.log(foo);  // logs 2
}

let foo = 1;
bar();
```

Yes, `foo` on line 2 shadows `foo` on line 6 even though line 6 occurs later in the code file. Shadowing occurs based on when the variable is declared: in this code, line 6 runs before line 2, so the `foo` on line 2 shadows `foo` on line 6.

### 1. Outer blocks cannot access inner scope variables

```js
if (true) {
  let a = 'foo'
}

console.log(a); // ReferenceError
```

The code will throw a `ReferenceError`. This example illustrates the variable scoping principle that outer blocks cannot access variables from inner scope. Within the `if` statement, the local variable `a` is declared and initialized to the string `foo`. After line 3, the variable `a` is no longer in scope. Thus, when we execute the `console.log(a)` method on line 5 and attempt to log the value stored in `a`, a `ReferenceError` is thrown.

```js
if (true) {
  let myValue = 20;
}

console.log(myValue);
```

The code will throw a `ReferenceError`. This example illustrates the variable scoping principle that variables declared within a block are not accessible outside the block. Here, the variable `myValue` is declared with the keyword `let` and block scoped. It is only available within the block. Once the block ends, `myValue` disappears and is inaccessible to the `console.log(myValue)` method on line 5. Thus, the `ReferenceError: myValue is not defined` is raised.

### 2. Inner blocks can access variables from outer scopes

```js
let a = 'foo';

if (true) {
  console.log(a); // => 'foo'
}
```

The code will log `foo`. This example illustrates the variable scoping principle that inner blocks can access variables from outer scopes. On line 1, the global variable `a` is declared and initialized to the string `'foo'`. On line 4, the block within the `if` statement accesses the variable `a` defined in the outer scope, and logs the value `foo` to the console.
