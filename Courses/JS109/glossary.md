# Glossary of Topics for Written Assessment

## 1. Arrays: working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)

### `Array.prototype.filter()`

The `filter` method returns a new array that includes all elements from the calling array for which the callback returns a truthy value.

```js
> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ]

> numbers
= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
```

`filter` iterates over the elements of the array. During each iteration, it invokes the callback function, using the value of the current element as an argument. If the callback returns a truthy value, `filter` appends the element's value to a new array. Otherwise, it ignores the element's value and does nothing. When `filter` finishes iterating, it returns the array of *selected* elements: the elements for which the callback returned a truthy value. In this example, `filter` selects all of the elements with a value greater than 4.

`filter` doesn't mutate the caller.

### `Array.prototype.find()`

The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

The `find` method executes the `callbackFn` function once for each index of the array until the `callbackFn` returns a truthy value. If so, `find` immediately returns the value of that element. Otherwise, find returns `undefined`.

```js
let array = [5, 12, 8, 130, 44];

let found = array.find(element => element > 10);

console.log(found)
// => 12
```

### `Array.prototype.forEach()`

To use `forEach`, you need a callback function that you pass to `forEach` as an argument. A callback function is a function that you pass to another function as an argument. The called function invokes the callback function when it runs. The `forEach` method invokes its callback once for each element, passing it the element's value as an argument. `forEach` always returns `undefined`.

```js
let array = [1, 2, 3];
array.forEach(function(num) {
  console.log(num); // on first iteration  => 1
                    // on second iteration => 2
                    // on third iteration  => 3
}); // returns `undefined`

// We can also use an arrow function instead of a function expression, which makes our code compact and, when you're familiar with the syntax, more readable.
let array = [1, 2, 3];
array.forEach(num => console.log(num));

// We can also perform more complex operations:
let array = [1, 2, 3];
array.forEach(num => console.log(num + 2)); // on first iteration  => 3
                                            // on second iteration => 4
                                            // on third iteration  => 5
```

This code invokes the callback function once for each element in the array. `forEach`, during each iteration, invokes the callback with the element's value as an argument. The callback then logs it to the console. In the end, `forEach` returns `undefined`.

```js
array.forEach(element => {
  console.log(element.foo);
});
```

This paragraph talks about the `forEach` method being called by the object referenced by `array` in the above code. It invokes the callback function for each element, passing that element to the callback as an argument. Within the callback, the element is known by the parameter name `element`, and the callback uses the `console.log` method to log the value of `element.foo`.

`forEach` performs simple iteration and returns `undefined`.

### `Array.prototype.map()`

`map` transforms an array's elements and returns a new array with the transformed values.

The `map` method takes a function as an argument and calls it for each element of the array used to call `map`.

`map` uses the return value of the callback to perform a transformation.

```js
// The map method handles this situation more cleanly:
> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [ 1, 4, 9, 16 ]

> squares = numbers.map(num => num * num);
= [ 1, 4, 9, 16 ]
```

However, `map` returns a new array that contains one element for each element in numbers, with each element set to the return value of the callback: the squares of the numbers in this case. This code is more compact than the `forEach` code, and, better yet, it has no side effects; the callback doesn't update squares (the return value of map does that), and we don't have to reset the variable if we rerun the same code.

## 2. Arrays Are Objects

Arrays are a subset of objects. While objects store a collection of key-value pairs, arrays associate values with indexes.

Arrays as objects are object data types with non-primitive or object values, not primitive values.

Arrays are objects. One side effect of this is that the `typeof` operator doesn't return 'array' when applied to an array:

```js
> let arr = [1, 2, 3]
> typeof arr
= 'object'
```

## 3. `console.log` vs. `return`

Output and return values are different concepts.

`console.log`

When we invoke the `console.log` method, we're telling JavaScript to write something to the console. In Node, that is your screen; in your browser, it's the Console in your Developer Tools application. The term log is a synonym for printing or displaying something on the console.

```sh
> console.log('Howdy')
Howdy // displayed on the console
= undefined // this is return value of the expression that returned nothing

> let a = console.log("Howdy")
> a
```

```sh
> let a = console.log("Howdy")
> a
```

The value returned by `console.log("Howdy")` is `undefined`, so that's the value to which `a` gets assigned. Therefore, `a` on the second line evaluates to `undefined`, and `node` shows it as the return value.

`return`

JavaScript uses the `return` statement to return a value to the code that called the function: the **caller**. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

The return value is the evaluated value of the expression.

## 4. Declarations, Initialization, Assignment, and Re-assignment

```js
let count = 1;
count = 2;
```

On line 1, we declare a (global/local) variable named `count`, and initialize it to a value of `1`, which is a primitive value. Line 2 reassigns `count` to a new primitive value, `2`.

## 5. Equality: loose and strict equality

What will the following code output?

```js
console.log(false == '0');
console.log(false === '0');
```

The code outputs:

```sh
true
false
```

In JavaScript, there are two equality operators: strict equality `(===)` and non-strict (or weak) equality `(==).` The `===` operator behaves as a traditional equality operator does in most languages: it evaluates as true when the two expressions on either side have the same **type** and **value**. On the other hand, the `==` operator *coerces* the values to the same type before comparing them. Coercions can produce unexpected and confusing behavior. Thus, it's good practice to use `===` rather than `==.` The same holds for the `!==` vs. `!=` operators: prefer `!==`.

The **strict equality operator**, also known as the **identity operator**, returns true when the operands have the same type _and_ value, **false** otherwise.

The **non-strict equality operator**, also known as the **loose equality operator**, is similar to `===.` However, when the operands have different types, `==` attempts to coerce one of the operands to the other operand's type before it compares them, and it may coerce both operands in some cases. The result is `true` when the final values are the same, `false` otherwise. The coercion behavior can lead to unexpected results. For instance, when we compare the number `5` to the string `'5'` using `==,` we get `true`; with `===`, we get `false`. When dealing with a string and a number, `==` coerces the string value into a number.

## 6. Functions: be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)

```js
let hello = "Hello, world!";

function myFunc() {
  console.log(hello);
}

myFunc();
```

The `myFunc` function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

## 7. Functions: First-class Functions

JavaScript functions are **first-class functions**. The key feature of first-class functions is that you can treat them like any other value. In fact, **all JavaScript functions are objects**. Thus, you can assign them to variables, pass them as arguments to other functions, and return them from a function call.

## 8. Functions: Function Declarations, Function Expressions, and Arrow Functions

### Function Declaration

```js
function functionName(zeroOrMoreArguments ...) {
  // function body
}
```

In JavaScript, we call a function definition that looks like that a **function declaration**. A notable property of function declarations is that you can call the function before you declare it.

```js
greetPeople(); // Invoking a function before declaring it

function greetPeople() {
  console.log("Good Morning!");
}
```

### Function Expression

```js
let greetPeople = function () { // space after function keyword not required
  console.log("Good Morning!");
}

greetPeople();
```

Function expressions have one key difference from a function declaration: you cannot invoke a function expression before it appears in your program.

Any function definition that doesn't have the word `function` at the very beginning of a statement is a function expression. Even wrapping what looks like a function declaration in parentheses creates a function expression:

```js
(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});
```

### Arrow Functions

```js
let greetPeople = () => console.log("Good Morning!");
greetPeople();
```

For now, let's look at one interesting property of arrow functions: *implicit returns*. First, we'll convert the add function from the previous section to use arrow function syntax:

```js
let add = (a, b) => a + b;
```

Note the lack of a `return` statement. We can omit it in arrow functions *when and only when the function body contains a single expression* (the expression may have subexpressions, but the entire expression must evaluate to a single value). Suppose it contains two or more expressions or statements. In that case, you must explicitly return a value if you need it, and you must also use curly braces:

```js
let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));
```

Above we define an arrow function `getNumber` that requires one parameter. The parentheses around the parameter name are optional in this case and are often omitted.

## 9. Functions: Function Definition and Invocation

Before you can use a function, you must first define it with the reserved keyword, `function`. After the word function, you write the function's name followed by a pair of parentheses (`()`). After the closing parenthesis, the code you want to associate with the function -- the **function body** -- gets placed between curly braces (`{}`).

In the definition of a function, the names between parentheses are called **parameters**. The **arguments** are the values of those parameters.

Parameters are **local variables**; they are only defined locally, within the body of the function.

```js
function add(left, right) { // left & right are parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments
```

Programmers often talk about function invocation and invoking functions. The terms are synonymous with "call" and "calling." You invoke a function or write a function invocation. We use these terms as well.

Functions and methods perform actions and return values.

## 10. Functions: Implicit Return Value of Function Invocations

All JavaScript function calls evaluate to a value. By default, that value is `undefined`; this is the **implicit return value** of most JavaScript functions. However, when you use a `return` statement, you can return a specific value from a function. This is an **explicit return value**. Outside of the function, there is no distinction between implicit and explicit return values, but it's important to remember that all functions return something unless they raise an exception, even if they don't execute a return statement.

## 11. Functions: passing arguments into and return values out of functions

Functions are called by typing their name and providing some optional values that we call **arguments**. In `say.js`, the function definition includes (`words`) after the function name. This syntax tells us that we should supply (**pass**) a single argument to the function when we call it. Arguments let you pass data from outside the function's scope into the function so it can access the data. If the function definition doesn't need access to outside data, you don't need any arguments.

Functions can perform an operation and **return** a result to the call location for later use. We do that with **return values** and the `return` statement.

JavaScript uses the `return` statement to return a value to the code that called the function: the **caller**. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

Functions that always return a boolean value, i.e., `true` or `false`, are called **predicates**. You will almost certainly encounter this term in future readings and videos, so commit it to memory.

## 12. Mutability vs. Immutability vs `const`

### Mutability

Objects are usually (but not always) mutable: you can add, remove, and change their various component values.

Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.

### Immutability

Primitive values are not mutable.
`NaN` is a number in JavaScript, so it is a primitive value

Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values.

### `const`

A `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a `const` object, but we can't change which object the `const` points to.

## 13. Naming Conventions (legal vs idiomatic)

### Idiomatic

Names that follow the naming conventions in the [Naming Conventions section of the JavaScript Book](https://launchschool.com/books/javascript/read/preparations#namingconventions) are referred to as **idiomatic names**. In particular, whether a name is idiomatic or not depends on what kind of name we're describing.

The following [tables](https://github.com/hyosung11/Launch-School/blob/d578bc76f9ed805b2d255d5761622e7261b692a8/Courses/JS101/Lesson-2-Small-Programs/notes.md) show which names are and aren't idiomatic in the various categories and when.

### Legal / Non-Idiomatic

Note that non-idiomatic names are not invalid names. Non-idiomatic names are commonly used by external libraries to provide names that are easy to type yet unlikely to conflict with names in other libraries.

### Invalid Names

## 14. Object Properties

================ RR ================

## Pass-by-value / Pass-by-reference

### Pass-by-value

Pass-by-value relates to **primitive** values that are passed into a function. With all primitive values, the value is passed by value and the function will receive a copy of the original value.

Here's an example of pass-by-value:

```js
function getNumber(num) {
  /* The `num` parameter is initialized to a new primitive number `7`. Although `num` references `7`, it is not the same `7` that `luckyNumber` references in memory. They are distinct. */

  return num;
}

let luckyNumber = 7;
getNumber(luckyNumber); // returns 7
```

### Pass-by-reference

Pass-by-reference relates to **object** values that are passed into a function. When we declare and initialize a variable to an object value, e.g., `let arr = [1, 2, 3]`, we are initializing that variable to hold a *reference* which points to the actual object in memory. Therefore, when we pass `arr` into a function, we pass the reference that points to the actual object.

Here's an example of pass-by-reference:

```js
let pets = ['cat', 'dog', 'gold fish'];
getPets(pets);

function getPets(arr) {
  /* The `arr` parameter is initialized to a reference that points to the same Array in memory as `pets`. Therefore, any modifications to `arr` will also be shown in `pets` because these two variables contain a reference that points to the same object in memory.
  */

 console.log(arr === pets); // true
}
```

Another example:

## Scope

## Non-local Variable Use

## Primitive Values, Objects and Type Coercion

### Primitive Values

The primitive data types are strings, numbers, booleans, `null`, and `undefined`, bigints, and symbols. Primitive types are the simplest, most basic types in JavaScript.

With (most) primitive values, the actual value of the variable gets stored in allocated memory.

Primitive values are always *immutable*; they don't have parts that one can change. Such values are said to be **atomic**; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or *reassign* it: give it an entirely new value. All operations on primitive values evaluate as new values. Even something like `0 + 0` evaluates to a new value of `0`.

### Objects

Objects include, but aren't limited to, the following types: Simple Objects, Arrays, Dates, and Functions.

Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays **are** objects) has a length property that contains a number: a primitive value. Objects are usually (but not always) mutable: you can add, remove, and change their various component values.

## 21. Variable Scope (especially how variables interact with function definitions and blocks)

The function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

## 22. Variables as Pointers

== Study Guide Topics ==

## Strings (working with Strings)

### String Methods

## working with Objects: accessing keys and values of an Object as arrays

## variables as pointers

## truthiness vs. boolean

## side-effects
