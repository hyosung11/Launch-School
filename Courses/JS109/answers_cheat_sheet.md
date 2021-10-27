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

## 4. object properties

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

The `pop()` method removes the **last** element from an array and returns that element. This method mutates the calling array.

The `push()` method **adds** one or more elements to the **end** of an array and returns the length of the new array. This method mutates the calling array.

## 10. Working with Objects; accessing keys and values of an Object as arrays

The `Object.keys` static method returns an object's keys as an array.

The `Object.values` static method extracts the values from every own property in an object to an array.

 The `Object.entries` static method *returns an array of nested arrays*. Each nested array has two elements: one of the object's keys and its corresponding value.

The `Object.assign` static method merges two or more objects by combining the key-value pairs into a single object. `Object.assign` mutates the first object.

## 11. Arrays are objects

## 12. Understand the concepts of pass-by-reference and pass-by-value

Pass-by-value relates to primitive values that are passed as arguments into a function. With all primitive values, the value is passed by value and the function receives a copy of the original value. The parameter in the function points to a new copy of the value.

Pass-by-reference relates to object values that are passed as arguments into a function. When we declare and initialize a variable to an object value, we are initializing that variable to hold a *reference* which points to the actual object in memory. Therefore, when we pass the argument into a function, we pass the reference that points to the actual object. Thus, any destructive changes that the function may implement on the Object affects the original object as well. The function can *change/modify/mutate* the argument that is passed because we have a *reference* to that original argument.

  The `abc` parameter is initialized to a reference that points to the same Array/Object in memory as `xyz`. Therefore, any mutations to `abc` will also be shown in `xyz` because these two variables contain a reference that points to the same object in memory.

## 13. variables as pointers

## 14. console.log vs. `return`

## 15. truthiness vs. boolean

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

## 16. function definition and invocation

## 17. function declarations, function expressions, and arrow functions

## 18. implicit return value of function invocations

## 19. first-class functions

## 20. side-effects

## 21. naming conventions (legal vs idiomatic)

## 22. be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose.