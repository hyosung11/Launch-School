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

It's important to remember that JavaScript arrays are objects. The chief difference between an array and some other object is that it uses non-negative integers as its primary keys. Another significant difference is that adding elements to the array increases the value of its `length` property, and changing the value of the `length` property causes the number of elements to change.

Since arrays are objects, we can add additional properties to them:

```js
let arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
arr; // => ['foo', 'bar', 'qux', boo: 'hoo', '-1': 374]
arr.length; // => 3 (not 5!) - just count indexes
arr.forEach(element => console.log(element)); // prints: foo, bar, qux
Object.keys(arr); // => [ '0', '1', '2', 'boo', '-1' ]
```

Note that `arr[-1] = 374` looks like we're creating an element at index position `-1`. In fact, the `'-1'` property is not really an element of the array, but is an ordinary property of the object. You can see this in the return value from line 4 where the property is shown as `'-1': 374`. By the same token, `arr['boo']` isn't an element of the array, but a property of the object.

It's also important to note that the value of the length property *does not change after we add non-element properties* to the array. Furthermore, those properties are ignored by array methods like `forEach`, `map`, and `filter`.

However, when we use an `Object` method, such as `keys`, we get a list of all of the property names. Curiously, the return value here shows the indices of the array elements as string keys, `'0'`, `'1'`, and `'2'`.

Finally, you must be careful when you need to distinguish between arrays and other objects. You might, for instance, assume that the `typeof` operator would identify an array as an `'array'`. It doesn't. It returns `'object'` instead. If you really need to detect an array, you can use the `Array.isArray` method:

```js
let arr = ['foo', 'bar', 'qux'];
let obj = { a: 1, b: 2 };
typeof arr; // => 'object'
typeof obj; // => 'objet'
Array.isArray(arr); // => true
Array.isArray(obj); // => false
```

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

The **return value** is the evaluated value of the expression.

## 4. Declarations, Initialization, Assignment, and Re-assignment

```sh
> let firstName = "Sohee"; // Declare and initialize variable with an explicit value on the same line.
= undefined
```

Note that regardless of whether we provide a value in a declaration, the variable is initialized. If we don't provide an explicit value, that initial value is `undefined`.

```js
let count = 1;
count = 2;
```

On line 1, we declare a (global/local) variable named `count`, and initialize it to a value of `1`, which is a primitive value. Line 2 reassigns `count` to a new primitive value, `2`.

Be sure to always declare your variables and constants with `let` and `const`. Undeclared variables have global scope.

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

## 14. Objects: Object Properties

Key-value pairs are also called object properties in JavaScript. We can also use "property" to refer to the key name.

If a variable declared with `const` is initialized with an object, you can't change what object that variable refers to. You can, however, modify that object's properties and property values:

```sh
> const MyObj = { foo: "bar", qux: "xyz" }
> MyObj.qux = "hey there"
> MyObj.pi = 3.1415
> MyObj
= { foo: 'bar', qux: 'hey there', pi: 3.1415 }

> MyObj = {} // Uncaught TypeError: Assignment to constant variable.
```

Use `Object.freeze` with objects to freeze the property values of an object (like with arrays):

```sh
> const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'xyz' }
```

Not all object properties are variables; only those on the global object.

## 15. Objects: Working with Objects: accessing keys and values of an Object as arrays

Since most objects have multiple properties, you may want to iterate over an object's keys, values or both.

### `for/in` loop

The `for/in` loop iterates over all the keys in the object. In each iteration, it assigns the keys to a variable which you then use to access the object's values.

```js
let person = {
  name: 'SungOh',
  age: 6,
  height: '46 inches'
};

for (let prop in person) {
  console.log(person[prop]);
}

// SungOh
// 6
// 46 inches
```

In the above example, we iterate over the `person` object using the `for/in` loop. Line 376 declares a variable `prop` which, in each iteration, receives a key from the the object until the object runs out of key-value pairs. We use `prop` inside the loop body to access and log the corresponding value.

### `Object.keys`

The `Object.keys` static method returns an object's keys as an array. You can iterate over that array using any technique that works for arrays. For instance:

```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Object.keys(person);
console.log(personKeys) // => [ 'name', 'age', 'height' ]
personKeys.forEach(key => {
  console.log(person[key]);
});

// Bob
// 30
// 6 ft
// undefined
```

### `Object.values`

The `Object.values` static method extracts the values from every own property in an object to an array:

```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personValues = Object.values(person);

console.log(personValues); // => [ 'Bob', 30, '6 ft' ]

// Remember that you can't predict the order of the values in the returned array
```

### `Object.entries`

While `Object.keys` and `Object.values` return the keys and values of an object, respectively, the `Object.entries` static method returns an array of nested arrays. Each nested array has two elements: one of the object's keys and its corresponding value:

```js
let person = { name: 'Bob', age: 30, height: '6ft' };

console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
```

### `Object.assign`

You may sometimes want to merge two or more objects, i.e., combine the key-value pairs into a single object. The `Object.assign` static method provides this functionality:

```sh
> let objA = { a: 'foo' }
= undefined

> let objB = { b: 'bar' }
= undefined

> Object.assign(objA, objB)
= { a: 'foo', b: 'bar' }
```

`Object.assign` *mutates* the first object. In the above example, the properties from the `objB` object get added to the `objA` object, altering `objA` permanently in the process:

```sh
> objA
= { a: 'foo', b: 'bar' }

> objB
= { b: 'bar' }
```

Note that `objB` isn't mutated. If you need to create a new object, use an empty object as `Object.assign`'s first argument. Note that `Object.assign` can take more than two arguments:

```sh
> objA = { a: 'foo' }
= undefined

> objB = { b: 'bar' }
= undefined

> Object.assign({}, objA, objB)
= { a: 'foo', b: 'bar' }

> objA
= { a: 'foo' }

> objB
= { b: 'bar' }
```

This code mutates neither objA nor objB and returns an entirely new object.

## 16. Pass-by-value / Pass-by-reference

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

## 17. Primitive Values, Objects and Type Coercion

### Primitive Values

The primitive data types are strings, numbers, booleans, `null`, and `undefined`, bigints, and symbols. Primitive types are the simplest, most basic types in JavaScript.

With (most) primitive values, the **actual value** of the variable gets stored in allocated memory.

Primitive values are always *immutable*; they don't have parts that one can change. Such values are said to be **atomic**; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or *reassign* it: give it an entirely new value. All operations on primitive values evaluate as new values. Even something like `0 + 0` evaluates to a new value of `0`.

### Objects

Objects include, but aren't limited to, the following types: Simple Objects, Arrays, Dates, and Functions.

Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays **are** objects) has a length property that contains a number: a primitive value. Objects are usually (but not always) mutable: you can add, remove, and change their various component values.

### Type Coercion

Type coercion is the conversion of one type of value into another.**Explicit type coercion** lets the programmer decide what to do, whereas **implicit type coercion** lets the JavaScript engine choose.

#### Explicit Type Coercion

**Explicit type coercion** happens when the programmer intentionally uses one of the many built-in functions and operators to coerce one type of value to another.

Strings to Numbers

```js
> Number('1') // The `Number` function explicitly coerces a string to a number.
= 1 // Can perform arithmetic operations on the result

> Number('foo') // Number on a non-numeric string
= NaN // Returns `NaN` in JavaScript. Most other languages return an error.

// parseInt function
> parseInt('12') // `parseInt` converts the string '12' to an integer.
= 12

> parseInt('12xyz')
= 12 // Stops converting and ignores everything else once it encounters an invalid character.

> parseInt('3.1415')
= 3 // Returns an integer when the string is a number with a fractional component.

// parseFloat function
> parseFloat('12.5foo')
= 12.5 // Coerces a string to a floating-point (decimal) number.
```

Numbers to Strings

```js
> String(20)
= '20'
```

#### Implicit Type Coercion

**Implicit type coercion** happens when you perform an operation involving values of two different types and JavaScript coerces the values to have the same type; that type varies based on the specific combination of types involved in the original expression. How different values get coerced depends on the operation. The most common operations in this context are `==` and `+`.

The `==` operator implicitly coerces one of its operands when the operands have different types. The most common case occurs when comparing a string with a number:

```js
> '1' === 1 // The strict equality operator compares the two value directly. It returns `false` here since the two values have different types, so they aren't identical values.
false
> '1' == 1 // The non-strict equality operator coerces the string `'1'` into a number and then compares it with the `1` on the right-hand side and returns `true`.
true
```

When comparing a boolean with any value, `==` coerces `true` and `false` to their number equivalents, which are `1` and `0` respectively. Thus the first and last expression below return `true`.

```js
// (boolean 1 => true) == true
> 1 == true
true
// (boolean 3 => false) == true
> 3 == true
false
// (boolean 0 => false) == false
> 0 == false
true
```

## 18. Side-effects

A function is said to have **side-effects** if it does any of the following:

1. It reassigns any non-local variable. Reassigning a variable in the outer scope would be a side-effect.
2. It mutates the value of any object referenced by a non-local variable. Mutating an array or object argument, for instance, would be a side-effect.
3. It reads from or writes to a file, network connection, browser, or the system hardware. Side-effects like this include writing to the console log and reading input from the terminal.
4. It raises an exception without handling it.
5. It calls another function that has side-effects.

The following functions have side-effects:

```js
// side-effect: logs output to the console
// returns: undefined

function displayTotal(num1, num2) {
  console.log(num1 + num2);
}

// side-effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}
```

Here's an example of a function with no side-effects:

```js
// side effect: none
// returns: a new number

function computeTotal(num1, num2) {
  return num1 + num2;
}
```

Most functions should return a useful value or they should have a side effect, but not both. In the above examples, `append` both returns a useful value and has a side effect. If you write functions that do both, you may have trouble remembering one of those -- either you'll forget about the side effect, or you'll forget that there's a return value that you need to examine.

By "useful value," we mean that the function returns a value that has meaning to the calling code. For instance, a computeTotal function should probably return a number that contains the result of adding some numbers together. A function that returns an arbitrary value or that always returns the same value (such as undefined) is not usually returning a useful value.

There are exceptions to this rule about mixing side effects and useful return values. For instance, if you read something from a database, you almost certainly have to return a value. If you read some input from the user's keyboard, you probably need to display a prompt, read the input from the terminal, then return a value. Accessing a database and reading and writing from the terminal are side effects, but you may still need a return value.

Function names should reflect whether side effects may occur. For instance, you can use a name like displayTotal as the name of a function that displays a total on the console. The term "display" implies that you're going to do some output -- a side effect -- rather than attempting to just calculate and return the total. On the other hand, you would probably name the function that computes the total something like computeTotal. In this case, "compute" implies that you're going to return the value of a computation.

## 19. Strings (working with Strings)

In JavaScript, strings are primitive values and are immutable. JavaScript creates a new copy of the string when assigning a string to a variable.

What will the following code output?

```js
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye";
console.log(str1);
```

The output is `hello there` since we are dealing with strings. In JavaScript, strings are primitive values and are immutable; they can't be changed. That also means JavaScript creates a new copy of the string when assigning a string to a variable. Thus, line x assigns `str2` a new string that happens to be a copy of `str1`'s value. Line x, in turn, assigns `str2` to an entirely new string.

### String Element Reference

Strings use an integer-based index that represents each character in the string. The index starts counting at zero and increments by one for the remaining index values. You can reference a specific character using this index.

```js
let str = 'abcdefghi';
str[2]; // => 'c'
```

### String Methods

You can think of strings as collections of characters. You can access individual characters or multiple characters of the string and can loop through all the characters by using the `length` property in conjunction with `for` and `while` loops.

Since JavaScript strings are **primitive values**, any operation performed on them *results in a new string*. None of the methods that operate on strings mutate the string since JavaScript strings are **immutable**.

#### `String.prototype.concat()`

The `concat()` method concatenates the string arguments to the calling string and returns a new string. If the arguments are not of the type string, they are converted to string values before concatenating. `concat` can take more than one string as arguments: `concat(str1, str2, ..., strN)`.

```sh
> let str = 'Hello'
undefined
> str.concat(' World!')
'Hello World!'
> str
'Hello'
```

#### `String.prototype.includes()`

The `includes` method takes a string as the argument and returns a boolean signifying whether that string exists within the string that `includes` was called on.

```sh
> 'One potato, two potato, three potato, four'.includes('three')
true
> 'One potato, two potato, three potato, four'.includes('tater')
false
> 'abc'.includes('a')
true
```

`includes` also takes an optional second argument that specifies which index in the string to start looking for the substring.

```sh
> 'abcdefg'.includes('b', 2)
false
```

Although the string `abcdefg` includes `'b'`, the method call returns `false` since the search started from index `2`.

#### `String.prototype.slice()`

The `slice` method extracts a section of a string and returns a new string, without modifying the original string. The `slice` method takes two arguments. The first argument specifies the index at which to start the extraction and the second argument specifies the index at which to end the extraction. The character at the ending index is not part of the returned substring. If the second argument to `String.prototype.slice` is omitted, all the characters from the start index to the end of the string are returned in the substring. Calling the `slice` method without any arguments will return a copy of the original string.

```js
// The first argument specifies the index at which to start the extraction and the second argument specifies the index at which to end the extraction.
let str = 'abcdefghi';
str.slice(2, 5) // => 'cde'

// If the second argument to `String.prototype.slice` is omitted, all the characters from the start index to the end of the string are returned in the substring.
let str = 'abcdefghi';
str.slice(2) // => 'cdefghi'

// Calling the `slice` method without any arguments will return a copy of the original string.
'abcdefghi'.slice() // => 'abcdefghi'

// When given negative numbers as the indices, `slice` treats them as `string length + index`. Below, an index of `-4` is equivalent `9 + (-4)` since the length of the string is 9 and `9 + (-4)` equals `5`. Likewise, `-2` is equivalent to `7`.
'abcdefghi'.slice(-4, -2) // => 'fg'
```

#### `String.prototype.split()`

The `split` method separates a given string into multiple strings and returns them in the form of an array. How the string gets split depends on the argument you provide to `split`.

The `split` method, when called without any arguments, returns an array with the string as its only element:

```js
'this is a string'.split() // => ['this is a string']
```

The `split` method called with an empty string as the argument returns an array of all the characters in the string:

```js
'abcdef'.split(''); // => ['a', 'b', 'c', 'd', 'e', 'f']
'abcdef'.split('')[0]; // => 'a'
```

Note that we use the `[]` operator on the return value of `split`. The `split` method returns an array so we can access element from that array using the `[]` operator.

Any other string provided to `split` as the argument will be used to separate the string using the argument as the **delimiter**:

```js
'apple,orange,mango'.split(','); // => ['apple', 'orange', 'mango']
```

#### `String.prototype.substring()`

The `substring` method takes a start index and an end index and returns a substring from the start of the index up to, but not including, the end index.

```js
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```

#### `String.prototype.trim()`

The `trim` method removes whitespace from both ends of a string it's called on.

```sh
> '   acbcdef   '.trim()
'abcdef'
```

`trim` removes any number of space characters as well as whitespace characters like `\n` and `\t`.

```sh
> `\nabcdef\t.trim()
'abcdef'
```

The `trimStart()` method removes whitespace from the beginning of a string while `trimEnd()` does so at the end of a string.

```sh
> '   abcdef   '.trimStart()
'abcdef   '

> '   abcdef   '.trimEnd()
'   abcdef'
```

#### `String.prototype.toUpperCase()` & `String.prototype.toLowerCase()`

`toUpperCase()` and `toLowerCase()` convert strings to uppercase and lowercase respectively.

```sh
> 'pete'.toUpperCase()
'PETE'

> 'PETE'.toLowerCase()
'pete'
```

Sometimes, you want to convert only the first character of a string to it uppercase equivalent. You can do that by combining toUpperCase() with slice() and any of the string concatenation methods:

```js
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

capitalize('pete'); // => 'Pete'
```

#### `String.prototype.charAt()`

The `charAt()` method takes an index as an argument and returns the character at that index in the given string.

```sh
> let sentence = "It's a walk in the park."
> sentence.charAt(5)
'a'
```

#### `String.prototype.charCodeAt()`

The `charCodeAt()` method returns the Unicode code point or character code of the character at the index. If an index is not provided, `charCodeAt()` assumes the index `0`.

```sh
> 'abcdef'.charCodeAt(1)
98
```

Index `1` contains the character `'b'` and the code point for `'b'` is 99. 

## 20. Truthiness vs. Boolean

Notice that every `if` statement has an expression that evaluates as true or false. However, the expression doesn't have to be one of the boolean values, `true` or `false`. JavaScript can coerce any value to a boolean value, and that's what it does in conditional contexts like the `if` statement.

JavaScript can coerce any value to a boolean. Thus, you can use any expression in a conditional expression. We often say that the expression **evaluates as** or **evaluates to** true or false.

JavaScript treats the following values as false: 0funN is empty: `0`, `false`, `undefined`, `null`, `NaN`, and `''`. Everything else evaluates as true.

The term **falsy** refers to values


### Boolean

Comparison operators return a boolean value: `true` or `false`.


## 21. Variable Scope (especially how variables interact with function definitions and blocks)

The function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

In JavaScript, variables declared with the `let` or `const` keywords have **block** scope.

### Non-local Variable Use

## 22. Variables as Pointers

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
