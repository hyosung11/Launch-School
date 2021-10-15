# Answer Snippets for Written Assessment

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

In JavaScript, whenever you see a single `=`sign in an expression, it's always a variable assignment; in this code, the program assigns the value `2` to `a` instead of testing whether `a` already contains a value of `2`. What's more, the expression between parentheses in an `if` statement gets evaluated in a boolean context; that is, JavaScript tries to determine if the expression has a truthy or falsy return value. In this case, the return value is always `2`, which evaluates as truthy, so the program always executes line 6, and never line 8.

## 5. Equality: Loose and Strict Equality

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

### 2. Inner scope variables cannot be accessed in the outer scope

```js
function aFunc() {
  let a = 1;
}

aFunc();
console.log(a); // ReferenceError: a is not defined
```

**LS -** The outer scope (i.e. the global scope) of the program, does not have an `a` variable. Therefore, since the variable `a` is declared and initialized within the **inner scope** of the function `aFunc()` it cannot be accessed from an outer scope.

**EV -** the `aFunc()` function is invoked, and defines a new scope for local variables. The local variable `a` is declared with the `let` keyword, and initially assigned the Number literal value `1`. After the function `aFunc()` completes execution, the variable `a` is immediately discarded and control returns to the main flow. Therefore, when we try to log the value stored in variable `a` to the console, a `ReferenceError` is thrown because the local variable `a` only existed within the function scope and was destroyed after the function completed exeuction, and therefore DOES NOT exist in the global scope. This demonstrates the principle of variable scoping, particularly that inner scope variable CANNOT be accessed or modified in the outer scope.

### Variable Shadowing

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
