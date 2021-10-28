# JS109 Written Assessment Answer Cheat Sheet

## 1. declarations, initialization, assignment, and re-assignment

The global variable `x` is declared and initialized to the string `'x'`.
The global variable `y` is declared and references the array/object `y`.

The variable `z` is reassigned to the `z`.

## 2. variable scope, especially how variables interact with function definitions and blocks

1. Outer scope variables can be accessed by the inner scope.
2. Inner scope variables cannot be accessed by the outer scope.
3. Peer scopes do not conflict.
4. Nested functions have their own variable scope, and follow the same rules of inner and outer scoped variables.
5. Inner scope variables can shadow outer scope variables.

* Outer blocks cannot access inner scope variables
* Inner blocks can access variables from outer scopes

## 3. primitive values, objects, and type coercions

Primitive values are always *immutable*; they don't have parts that one can change. Such values are said to be **atomic**; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or *reassign* it: give it an entirely new value. All operations on primitive values evaluate as new values.

Objects are complex values composed of primitive values or other objects. Objects are usually (but not always) mutable: you can add, remove, and change their various component values.

Type coercion is the conversion of one type of value into another.**Explicit type coercion** lets the programmer decide what to do, whereas **implicit type coercion** lets the JavaScript engine choose.

## 4. Object Properties

Objects are data structures that store a collection of key-value pairs. Each item in the collection has a name that is called the key and an associated value. Key-value pairs are also called object properties in JavaScript. We can also use "property" to refer to the key name.

## 5. mutability vs. immutability vs. `const`

Objects are usually (but not always) mutable, meaning you can add, remove, and change their various component values. Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.

Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values.

A `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a `const` object, but we can't change which object the `const` points to.

## 6. loose and strict equality

The strict equality operator returns `true` when the operands have the **same type** and **value**, `false` otherwise. For an object, it will return `true` ONLY if both operands refer to the same object.

The loose equality operator (`==`) checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, if the operands are different data types, it will attempt to **coerce** one or both operands before comparison.

## 7. passing arguments into and return values out of functions

Arguments let you pass data from outside the function's scope into the function so it can access the data.

Functions can perform an operation and **return** a result to the call location for later use. We do that with **return values** and the `return` statement.

JavaScript uses the `return` statement to return a value to the code that called the function: the **caller**. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

## 8. Working with Strings

The `concat` method concatenates the string arguments to the calling string and returns a new string. If the arguments are not of the type string, they are converted to string values before concatenating. `concat` can take more than one string as arguments: `concat(str1, str2, ..., strN)`.

The `includes` method takes a string as the argument and returns a boolean signifying whether that string exists within the string that `includes` was called on. The search is case-sensitive.

The `slice` method extracts a section of a string and returns a new string, without modifying the original string. The `slice` method takes two arguments. The first argument specifies the index at which to start the extraction and the second argument specifies the index at which to end the extraction. The character at the ending index is not part of the returned substring. If the second argument to `slice` is omitted, all the characters from the start index to the end of the string are returned in the substring. Calling the `slice` method without any arguments will return a copy of the original string.

The `split` method separates a given string into multiple strings and returns them in the form of an array. How the string gets split depends on the argument you provide to `split`.

The `split` method, when called without any arguments, returns an array with the string as its only element.

The `split` method called with an empty string as the argument returns an array of all the characters in the string.

Any other string provided to `split` as the argument will be used to separate the string using the argument as the **delimiter**.

The `substring` method takes a start index and an end index and returns a substring from the start of the index up to, but not including, the end index. `substring` does not mutate the caller and returns a new string.

The `trim` method removes whitespace from both ends of a string it's called on.

The `trimStart()` method removes whitespace from the beginning of a string while `trimEnd()` does so at the end of a string.

`toUpperCase()` and `toLowerCase()` convert strings to uppercase and lowercase respectively.

The `charAt()` method takes an index as an argument and returns the character at that index in the given string.

The `charCodeAt()` method returns the Unicode code point or character code of the character at the index. If an index is not provided, `charCodeAt()` assumes the index `0`.

## 9. Working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)

### Destructive Methods

The `pop()` method removes the **last** element from an array and returns that element. This method mutates the calling array.

The `push()` method **adds** one or more elements to the **end** of an array and returns the length of the new array. This method mutates the calling array.

The `shift()` method *removes* the **first** element from an array and returns the removed element. This method mutates the calling array.

The `unshift()` method *adds* one or more elements to the **beginning** of an array and returns the length of the new array. This method mutates the calling array.

The `sort()` method sorts the elements of an array in place (mutating the calling array) and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. This method mutates the calling array.

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

### Non-destructive Methods

The `concat` method returns a new array that contains a copy of the original array combined with additional elements supplied with the arguments. Since `concat` creates a copy of the original array and then mutates the copy, it leaves the original array intact.

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

The `find` method executes the callback function once for each index of the array until the callback function returns a truthy value. If so, `find` immediately returns the value of that element. Otherwise, `find` returns `undefined`.

The `findIndex()` method returns the **index** of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `-1` is returned.

The `indexOf()` method returns the first index at which a given element can be found in the array, or `-1` if it is not present.

### Collection Methods

The `filter` method returns a new array that includes all elements from the calling array for which the callback returns a truthy value. If no elements return a truthy value, it returns an empty array. `filter` doesn't mutate the caller. `filter`'s callback function can accept 1, 2, or 3 elements: the element value, the element index, and the array it is operating on.

The `forEach` method executes a callback function for each element in the calling array. The return value of the callback function is not used by the `forEach` method. `forEach` always returns `undefined`. `forEach` performs simple iteration and returns `undefined`.

The `map` method returns a new array populated with the return values of executing a callback function for each element of the calling array.

The `some()` method executes a callback function once for each element in the calling array, until it finds an occurrence where the callback function returns a **truthy** value. If such an element is found, the method **immediately** returns `true`. Otherwise, if the callback function returns a falsy value for all elements, the method returns `false`.

The `every()`method executes a callback function once for each element in the calling array, until it finds an occurrence where the callback function returns a **falsy** value. If such an element is found, the method **immediately** returns `false`. Otherwise, if callback function returns a truthy value for all elements, the method returns `true`.

## 10. Working with Objects; accessing keys and values of an Object as arrays

The `Object.keys` static method returns an object's keys as an array.

The `Object.values` static method extracts the values from every own property in an object to an array.

 The `Object.entries` static method *returns an array of nested arrays*. Each nested array has two elements: one of the object's keys and its corresponding value.

The `Object.assign` static method merges two or more objects by combining the key-value pairs into a single object. `Object.assign` mutates the first object.

## 11. Arrays are objects

JavaScript arrays are objects. The chief difference between an array and some other object is that it uses non-negative integers as its primary keys. Another significant difference is that adding elements to the array increases the value of its `length` property, and changing the value of the `length` property causes the number of elements to change.

Arrays as objects are object data types with non-primitive or object values, not primitive values.

## 12. Understand the concepts of pass-by-reference and pass-by-value

Pass-by-value relates to primitive values that are passed as arguments into a function. With all primitive values, the value is passed by value and the function receives a copy of the original value. The parameter in the function points to a new copy of the value.

Pass-by-reference relates to object values that are passed as arguments into a function. When we declare and initialize a variable to an object value, we are initializing that variable to hold a *reference* which points to the actual object in memory. Therefore, when we pass the argument into a function, we pass the reference that points to the actual object. Thus, any destructive changes that the function may implement on the Object affects the original object as well. The function can *change/modify/mutate* the argument that is passed because we have a *reference* to that original argument.

The `abc` parameter is initialized to a reference that points to the same Array/Object in memory as `xyz`. Therefore, any mutations to `abc` will also be shown in `xyz` because these two variables contain a reference that points to the same object in memory.

## 13. Variables as Pointers

Variables that have **primitive** values store those values at the memory location associated with the variable. In our example, `a` and `b` point to different memory locations. When we assign a value to either variable, the value gets stored in the appropriate memory location. If you later change one of those memory locations, it does not affect the other memory location, even if they started off with the same value. Therefore, the variables are *independent* when they contain primitive values.

However, with objects, JavaScript doesn't store the value of the object in the memory location used by the variable. Instead, it allocates additional memory for the object, and places a pointer to the object in the space allocated for the variable. Thus, we need to follow two pointers to get the value of our object from its variable name.

When two variables point to the same object, mutating the shared object will result in the change being reflected in both variables.

## 14. console.log vs. `return`

The `console.log` method outputs something to the console and returns `undefined`.

The `return` statement returns a value to the code that called the function. If a value isn't specified it returns `undefined`. If a function doesn't have a `return` statement, the return value of the function is `undefined`.

## 15. Truthiness vs. Boolean

A boolean is a data type whose only purpose is to convey whether something is `true` or `false`.

Truthiness differs from Boolean values. In JavaScript, almost all values *evaluate as true* or are *truthy*. The only values that *evaluate as false* or are *falsy* are (0 funN is empty ''):

* `0`
* `false`
* `undefined`
* `null`
* `NaN`
* `''`

* Use "evaluates to true" or "is truthy" when discussing expressions that only have to be truthy.
* Use "evaluates to false" or "is falsy" when discussing expressions that only have to be falsy.
* Do not use "is `true`" or "is equal to `true`" unless you are specifically discussing the boolean value `true`.
* Do not use "is `false`" or "is equal to `false`" unless you are specifically discussing the boolean value `false`.

Notice that every `if` statement has an expression that evaluates as true or false. However, the expression doesn't have to be one of the boolean values, `true` or `false`. JavaScript can coerce any value to a boolean value, and that's what it does in conditional contexts like the `if` statement.

## 16. Function Definition and Invocation

In a function definition, the names between parentheses are called parameters, and arguments are the values of those parameters.

Function Invocation (function calls) occur by writing parentheses after its name and passing it zero or more arguments. It uses the syntax `functionName(object)`.

## 17. Function declarations, function expressions, and arrow functions

A function declaration defines a function with the specified parameters. Function declarations always begin with the keyword `function`. A function written as a function declaration can be called before it is declared.

A function expression does not have the keyword `function` at the very beginning of the statement. A function expression cannot be called before declaration.

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations. Aside from syntax, arrow functions have **implicit returns.**

We can omit the `return` statement in arrow functions ***when and only when*** the function body **contains a single expression** (the expression may have subexpressions, but the **entire expression must evaluate to a single value**). Suppose it contains two or more expressions or statements. In that case, you must **explicitly return a value if you need it, and you must also use curly braces.**

## 18. Implicit return value of function invocations

All JavaScript function calls evaluate to a value. By default, that value is `undefined`; this is the **implicit return value** of most JavaScript functions. However, when you use a `return` statement, you can return a specific value from a function. This is an **explicit return value**. Outside of the function, there is no distinction between implicit and explicit return values, but it's important to remember that all functions return something unless they raise an exception, even if they don't execute a `return` statement.

JavaScript uses the `return` statement to *return a value to the code that **called** the function:* the **caller**. If you don't specify a value, it returns the implicit return value of `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

## 19. First-class Functions

All JavaScript functions are **first-class functions**. The key feature of first-class functions is that you can treat them like any other value. In fact, **all JavaScript functions are objects**. Thus, you can assign them to variables, pass them as arguments to other functions, and return them from a function call.

## 20. Side-effects

1. It reassigns any non-local variable. Reassigning a variable in the outer scope would be a side-effect.
2. It mutates the value of any object referenced by a non-local variable. Mutating an array or object argument, for instance, would be a side-effect.
3. It reads from or writes to a file, network connection, browser, or the system hardware. Side-effects like this include writing to the console log and reading input from the terminal.
4. It raises an exception without handling it.
5. It calls another function that has side-effects.

## 21. Naming Conventions (legal vs idiomatic)

Idiomatic names follow the naming conventions in the JavaScript book.

Note that non-idiomatic names are not invalid names. Non-idiomatic names are commonly used by external libraries to provide names that are easy to type yet unlikely to conflict with names in other libraries

Invalid names include variables that begin with a number, use hyphens, look like property reference.

Avoid magic numbers which are numbers or values that appear in your program without any information that describes what that number represents.

## 22. be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose

```js
let hello = "Hello, world!";

function myFunc() {
  console.log(hello);
}

myFunc();
```

The function `myFunc` outputs `'Hello, world!'` which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.