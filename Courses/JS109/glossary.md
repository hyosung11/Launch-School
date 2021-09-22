# Glossary of Topics for Written Assessment

## Arrays: working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)

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

## Arrays Are Objects

Arrays are a subset of objects. While objects store a collection of key-value pairs, arrays associate values with indexes.

Arrays are objects. One side effect of this is that the `typeof` operator doesn't return 'array' when applied to an array:

```js
> let arr = [1, 2, 3]
> typeof arr
= 'object'
```

## Declarations, Initialization, Assignment, and Re-assignment

```js
let count = 1;
count = 2;
```

On line 1, we declare a (global/local) variable named `count`, and initialize it to a value of `1`, which is a primitive value. Line 2 reassigns `count` to a new primitive value, `2`.

## Functions: be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)

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

## Objects vs Primitives

## Object Mutation

## Output and Return Value

## Variables as Pointers

== Study Guide Topics ==

## Variable Scope (especially how variables interact with function definitions and blocks)

The function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

## Primitive Values, Objects and Type Coercion

### primitive values

With (most) primitive values, the actual value of the variable gets stored in allocated memory.

## object properties

## Mutability vs. Immutability vs `const`

A `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a `const` object, but we can't change which object the `const` points to.

## Equality: loose and strict equality

## passing arguments into and return values out of functions

## Strings (working with Strings)

### String Methods

## working with Objects: accessing keys and values of an Object as arrays



* understanding the concepts of *pass-by-reference* and *pass-by-value*

* variables as pointers
* console.log vs. return
* truthiness vs. boolean
* function definition and invocation
* function declarations, function expressions, and arrow functions
* implicit return value of function invocations
* first-class functions
* side-effects

## naming conventions (legal vs idiomatic)
