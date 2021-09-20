# Glossary for Written Assessment

## Arrays: working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)

### `Array.prototype.filter()`

### `Array.prototype.find()`

### `Array.prototype.forEach()`

```js
array.forEach(element => {
  console.log(element.foo);
});
```

This paragraph talks about the `forEach` method being
called by the object referenced by `array` in the above
code. It invokes the callback function for each element,
passing that element to the callback as an argument.
Within the callback, the element is known by the
parameter name `element`, and the callback uses the
`console.log` method to log the value of `element.foo`.

### `Array.prototype.map()`

## Declarations, Initialization, Assignment, and Re-assignment

### Declarations

### Initialization

### Assignment

### Re-assignment

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

The function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

## Non-local Variable Use

## Objects vs Primitives

## Object Mutation

## Output and Return Value

## Variables as Pointers

# Study Guide Topics

* variable scope, especially how variables interact with function definitions and blocks

* primitive values, objects and type coercion

* object properties

## Mutability vs. Immutability vs `const`

A `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a `const` object, but we can't change which object the `const` points to.

## Equality: loose and strict equality

## passing arguments into and return values out of functions

## Strings (working with Strings)

### String Methods




* working with Objects: accessing keys and values of an Object as arrays

* arrays are objects

* understanding the concepts of *pass-by-reference* and *pass-by-value*

* variables as pointers
* console.log vs. return
* truthiness vs. boolean
* function definition and invocation
* function declarations, function expressions, and arrow functions
* implicit return value of function invocations
* first-class functions
* side-effects
* naming conventions (legal vs idiomatic)
* be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)
