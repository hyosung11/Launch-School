# JS109 Written Assessment Template of Topics, Practice Questions & Sample Answers

## 1. Declarations, Initialization, Assignment, and Reassignment

On line 1, the global variable `x` is declared and initialized to the string `'x'`.
On line 2, the global variable `y` is declared and references the array/object `y`.

On line 3, the variable `z` is reassigned to the `z`.

### Example

What happens when you run the following program? Why do we get that result?

```js
{
  let foo = "bar";
}

console.log(foo); // ReferenceError: foo is not defined
```

The program outputs an error since `foo` is out of scope. The `let` statement creates variables with block scope which limits the visibility of the variable to the block. Even though `console.log(foo)` comes after the declaration and initialization of `foo`, we still get an error since we declared `foo` inside the block. Outside the block, `foo` doesn't exist.

### 3. What does the following program log to the console? Why?

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

console.log(foo.a); // line 15 => 'hi'
console.log(qux); // line 16 => 'hello'
```

Solution
The program logs `'hi'` and `'hello'` and demonstrates the difference between pass by value and pass by reference. When passed as arguments into functions, objects are mutable; strings and other primitives are not. `foo` as an object is pass by reference, so when it is passed into the function `bar` to the parameter `argument1`, it points to the same place in memory as the object `foo`. Therefore, when we reassign the property `a` of the local variable `argument1`, we are mutating the same object that the global variable `foo` points to. Thus, when the `console.log(foo.a)` method is called on line 15, `hi` is logged.

On the other hand, `qux` as a string is pass by value. When `qux` is supplied as an argument to `bar`, `argument2` is initialized with a copy of the value of `qux`, and not the actual variable `qux` itself. Therefore, reassigning `argument2` will not reassign `qux`, since they are two different copies of the same value. Thus, line 16 logs `hello`: the original value of the `qux` variable.

## 2. Variable scope, especially how variables interact with function definitions and blocks

1. Outer scope variables can be accessed by the inner scope.
2. Inner scope variables cannot be accessed by the outer scope.
3. Peer scopes do not conflict.
4. Nested functions have their own variable scope, and follow the same rules of inner and outer scoped variables.
5. Inner scope variables can shadow outer scope variables.

* Outer blocks cannot access inner scope variables
* Inner blocks can access variables from outer scopes

### Example 1: Outer scope variables can be accessed by the inner scope

What does the code log and why?

```js
let name = "John";                  // line 1

const greet = () => `Hi ${name}`;   // line 3

let greeting = greet();             // line 5

console.log(greeting);              // line 7
```

The code logs `'Hi John'` and illustrates variable scope, specifically that outer scope variables can be accessed by the inner scope. On line 1, the global variable `name` is declared and initialized to the string `'John'`. On line 3, the global variable `greet` is declared and initialized to an arrow function that implicitly returns the template literal `Hi ${name}` with the value stored in the global variable `name` interpolated in the string. On line 5, the global variable `greeting` is declared and initialized to the return value of the call to the arrow function `greet` whose value is the string `'Hi John'`. Here, the function `greet` has access to the value of the global variable `name` because outer scope variables can be accessed from the inner scope of the function `greet`. On line 7, the `console.log` method passes the value of the variable `greeting` as an argument and logs '`Hi John'`. In the end, `console.log` returns `undefined`.

### Example 2: Outer scope variables can be accessed by the inner scope

What does this code log and why?

```js
let dog = 'Bark'; // line 1

function dogCall() { // line 3
  dog = dog + dog;
}

dogCall(dog); // line 7 => undefined
console.log(dog); // line 8 => 'BarkBark'
```

The code logs `'BarkBark'` and illustrates variable scoping, specifically that outer scope variables can be accessed by the inner scope. On line 1, the global variable `dog` is declared and initialized to the string `'Bark'`. On line 3, the function `dogCall` is declared without a parameter and without a `return` statement. On line 7, the function `dogCall` is called with `dog` passed as an argument. Since `dogCall` doesn't accept any arguments, it ignores the argument `dog` and returns `undefined`. Within function `dogCall` the global variable `dog` is reassigned via `dog = dog + dog` because outer scope variables can be accessed by the inner scope within the function. The value of `dog` is concatenated to the new string value `'BarkBark'`. On line 8, the `console.log` method passes in the value of `dog` as an argument and logs `'BarkBark'` to the console.

### Example 3: Inner scope variables can shadow outer scope variables

What does the code log and why?

```js
let dog = 'Bark'; // line 1

function dogCall(dog) { // line 3
  dog = dog + dog;
}

dogCall(dog); // line 7
console.log(dog); //  line 8 => Bark
```

The code logs `'Bark'` and illustrates variable scope, specifically that inner scope variables can shadow outer scope variables. On line 1, the global variable `dog` is declared and initialized to the string `'Bark'`. On line 3, the function `dogCall` is declared with the parameter `dog`. The parameter `dog` shadows the global variable `dog` because they share the same name making the global variable `dog` inaccessible within the function. On line 7, the function `dogCall` is called with `dog` passed as an argument. Since the function `dogCall` doesn't have an explicit `return` statement, it returns `undefined`. On line 8, the `console.log` method only has access to the global variable `dog` and passes in its value and logs `'Bark'`.

### Example 4. Inner scope variables can shadow outer scope variables

What does this code log and what's the principle being demonstrated?

```js
let animal = "dog"; // line 1

const speak = animal => {
  if (animal) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
};

speak(); // line 11
```

The code logs `'Meow'` and illustrates that inner scope variables can shadow outer scope variables. On line 1, the global variable `animal` is declared and initialized to the string `'dog'`. On line 3, the arrow function `speak` is declared with the parameter `animal`. The parameter `animal` shadows the global variable `animal` and makes it inaccessible within the function. On line 11, the function `speak` is called but doesn't pass an argument, so the value passed to the parameter `animal` is `undefined`. Within function `speak`, the `if` conditional evaluates the value of `animal` as false because `undefined` is a falsy value, so the `else` branch executes and `'Meow'` is logged.

### Example 5. Variable Scope

Take a look at this code snippet. What does this program log to the console? Why?

```js
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
```

The program logs `'bar'`. This example illustrates variable scope and variable shadowing. On line 1, the global variable `foo` is declared and initialized to the string `'bar'`. Line 2 starts a block, which creates a new scope for `let` variables. The variable on line 1 is still visible at this point, but line 3 declares a new variable named `foo` that shadows the variable from line 1. The second `foo` variable gets initialized to `'quz'`, but it goes out of scope on line 4 when the block ends. That brings `foo` from line 1 back into scope, so line 6 logs its value: `'bar'`.

## 3. Primitive Values, Objects, and Type Coercions

Primitive values are always *immutable*; they don't have parts that one can change. Such values are said to be atomic; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or *reassign* it: give it an entirely new value. All operations on primitive values evaluate as new values. There are seven primitive data types in JavaScript: **string**, **number**, **boolean**, **`undefined`**, **`null`**, bigInt and symbol.

Objects are complex values composed of primitive values or other objects. Objects are usually (but not always) mutable: you can add, remove, and change their various component values. Everything that is not a primitive is an object. This includes **objects**, **arrays**, and **functions**.

Type coercion is the conversion of one type of value into another. **Implicit coercion** happens when operators like the loose equality operator `==` or the binary operator `+` are used to change the type of values being compared. **Explicit coercion** happens when constructors (`Number` , `String` ), methods (`parseInt`, `parseFloat`, ...) or unary operators (`+`, `!!`) are used with the clear intent of converting a value from one type to another one.

### Example 1: Type Coercion

What will the following expressions return?

```js
A) 'b' > 'a'

B) [] + true;

C) '' + undefined

D) [[]] + {}
```

A) Returns `true`. Both strings are coerced to their UTF-16 code points and then compared. String value `b` has a UTF-16 code point of 98 and string value `a` has a UTF-16 code point of 97.

B) Returns the string `'true'`. The empty array `[]` is coerced to an empty string and the boolean `true` gets concatenated to the string `"true"`.

C) Returns the string `'undefined'`. The empty string `''` is concatenated with `undefined`.

D) Returns the string `'[object Object]'`. The empty nested array `[[]]` is coerced to an empty string `''` and the plain object `{}` is coerced to the string `'[object Object]'`.

## 4. Object Properties

Objects are data structures that store a collection of key-value pairs. Each item in the collection has a name that is called the key and an associated value. Key-value pairs are also called object properties in JavaScript. We can also use "property" to refer to the key name.
If a value happens to be a function, it is called a method. The properties contained by the object are delimited by braces `{}`. The keys are strings, even when quotes are omitted. The values can be of any type. Object properties can be accessed through dot notation or bracket notation.

### Example 1: Dot Notation vs Bracket Notation

What is the output of both code snippets and why? Explain any differences.

```js
// Snippet 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

// Snippet 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?
```

The output of snippet 1 is `{ prefix: 'Pacific' }` and demonstrates using dot notation to add a property to an object. On line 1, the global variable `ocean` is declared and initialized to an empty object `{}`. On line 4, `ocean.prefix = 'Pacific'` access the object referenced by `ocean` and adds the key `prefix` and the value `'Pacific'` to the object and this is what's logged.

The output of snippet 2 is `{ Indian: 'Pacific' }` and demonstrates the use of bracket notation to add a property to an object. On line x, the global variable `ocean` is declared and initialized to reference the object `{}`. On line x, the global variable `prefix` is declared and initialized to the string `'Indian'`. On the next line, the value stored in `prefix` is assigned to the key as `'Indian'` and the value is initialized as `Pacific'` in the object referenced by the variable `ocean` and this is what gets logged.

### Example 2: Changing Object Properties

What will the code snippet return?

```js
let person = {              // line 1
  name: 'Jane',
  age: 24                   // line 3
}                           // line 4

function changeName(name) { // line 6
  person[name] = name;
  console.log(person);      // line 8
  return person;
}                           // line 10

changeName('Jessie');       // line 12
```

The code returns `{ name: 'Jane', age: 24, Jessie: 'Jessie' }`. This example illustrates that dot notation cannot be used to reference a key by a variable reference. On line 1, the global variable `person` is declared and initialized to reference the object `{ name: 'Jane', age: 24 }`. On line 6, the function `changeName` is declared with the parameter `name`. On line 12, function `changeName` is called with the string `'Jessie'` passed as an argument. On line 7, within function `changeName`, the string `'Jessie'` is assigned to the parameter `name`. The expression `person[name] = name` uses bracket notation to access the global object `person`. Since `[name]` lacks quotes, it won't access the `name` key of the object `person`. Instead, `person[name] = name` will add the key `Jessie` with the value `'Jessie'` to the object `person`. On line 8, the `console.log` method passes the global variable `person` as an argument and logs the object `{ name: 'Jane', age: 24, Jessie: 'Jessie' }`. On line 9, the object referenced by the global variable `person` is explicitly returned.

Jordan Whistler's Version:
On line 12, the `changeName` function is invoked with the string argument `'Jessie'`. This function is defined on lines 6 through 10 with one parameter, `name`.  On line 7, the globally scoped object `person` is referenced using bracket notation. This accesses and assigns the key with the string value `'Jessie'` which is referenced by the `name` variable to the same value.  On line 8, the object referenced by `person` is logged to the console: `{ name: 'Jane', age: 24, Jessie: 'Jessie' }`, and returned by the function on the following line. This code demonstrates that an object key referenced by bracket notation, when passed a variable, will access the key with the value referenced by that variable.

## 5. Mutability vs. Immutability vs. `const`

Objects are usually (but not always) mutable, meaning you can add, remove, and change their various component values. Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.

Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values.

A `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a `const` object, but we can't change which object the `const` points to. The `Object.freeze()` method prevents the properties of an object from being mutated.

### Example 1: Object Mutability

What does the code log and why?

```js
const location = Object.freeze({ state: 'CA', country: 'US' }); // line 1
location.state = 'FL'; // line 2
console.log(location); // line 3 => { state: 'CA', country: 'US' }

const campus = { state: 'Boston', address: 'North Ave NW' }; // line 5
campus.state = 'Georgia'; // line 6
console.log(campus); // line 7 => { state: 'Georgia', address: 'North Ave NW' }
```

These examples illustrate object immutability and mutability and the `const` declaration. One line 1, the global constant `location` is declared and initialized to the `Object.freeze` method called on the object `{ state: 'CA', country: 'US' }`. The `Object.freeze` method prevents the object from being mutated. On line 2, the `state` property of the `location` object is accessed via dot notation and an attempted reassignment is made to the string `'FL'`. On line 3, the `console.log` method passes the object referenced by the global variable `location` as an argument and the unchanged object `{ state: 'CA', country: 'US' }` is output to the console.

On line 5, the global constant `campus` is declared and initialized to reference the object `{ state: 'Boston', address: 'North Ave NW' }`. On line 6, the `state` key of the `campus` object is accessed via dot notation and it's value is mutated to the string `'Georgia'`. Although a `const` declaration prohibits changing what object the `const` points to, it does not prohibit changing the content of the object. Here, the `campus` object has not been frozen, so it's property can be mutated. On line 7, the `console.log` method passes the object referenced by the global constant `campus` as an argument and the object `{ state: 'Georgia', address: 'North Ave NW' }` is logged to the console.

### Example: `const`

What happens when you run the following code? Why?

```js
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
```

The program first greets Victor 3 times. It then encounters an error on line 6 which prevents it from greeting Joe because you can't reassign a constant after defining it. In order to reassign the variable, you must use `let`.

## 5. What will the following code log to the console and why?

```js
const a = 1;

function myFunction() {
  a = 2; // line 4
}

myFunction(a);
```

This code will raise an error: `TypeError: Assignment to a constant variable`. Variables declared by `const` are block scoped and their value cannot be changed through reassignment. So when we try to reassign `a` on line 4, we get an error. Passing `a` as an argument to `myFunction` doesn't do anything because `myFunction` does not accept any parameters.

## 6. Strict and Loose Equality

The strict equality operator returns `true` when the operands have the **same type** and **value**, `false` otherwise. For an object, it will return `true` ONLY if both operands refer to the same object.

The loose equality operator (`==`) checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, if the operands are different data types, it will attempt to **coerce** one or both operands before comparison.

1. The string is coerced to a number.
2. A boolean is coerced to a number when compared with any other value.
3. An object is coerced into a primitive value when compared with a primitive value.
4. A comparison of `undefined` with `null` evaluates as `true`.

### Example 1

What does this code log and why?

```js
let something = []; // line 1
let somethingElse = ''; // line 2

if (something === somethingElse) { // line 4
  console.log("TV");               // line 5
} else if (something == somethingElse) { // line 6
  console.log("Radio");                   // line 7
} else { // line 8
  console.log("Other"); // line 9
} // line 10
```

The code logs `'Radio'` and illustrates loose and strict equality, specifically how the loose equality operator uses implicit coercion. On line 1, the global variable `something` is declared and initialized to reference an empty array `[]`. On line 2, the global variable `somethingElse` is declared and initialized to an empty string `''`. On lines 4-9, an `if..else` statement is defined. In the `if` statement's condition, the values stored in `something` and `somethingElse` are compared using the strict equality operator `===`. Since an empty array and an empty string are not equal, the condition evaluates to `false`, and the first block is bypassed. On line 6, the values stored in `something` and `somethingElse` are compared again but using the loose equality operator. The loose equality operator coerces the value in `something` to an empty string `''` and compares it to the value stored in `somethingElse` which is also an empty string `''`, and this comparison evaluates to `true`, so the `console.log` method executes on line 7, and `'Radio'` is logged.

## 7. Passing arguments into and return values out of functions

Arguments let you pass data from outside the function's scope into the function so it can access the data.

Functions can perform an operation and **return** a result to the call location for later use. We do that with **return values** and the `return` statement.

JavaScript uses the `return` statement to return a value to the code that called the function: the **caller**. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

### Example: Passing Arguments

What is logged and why?

```js
function fetchData(email) {                  // line 1
  return {
    email: email,                            // line 3
    company: "Microsoft"
  }                                          // line 5
}
                                             // line 7
console.log(fetchData('bill@microsoft.com')) // line 8
```

The code logs `{ email: 'bill@microsoft.com, company: "Microsoft" }`. On line 8, the function `fetchData` is called with the string `'bill@microsoft.com'` passed as an argument. The return value of the `fetchData` call is passed to the `console.log` method. On line 1, the function `fetchData` is declared with the parameter `email`. On line 2, the object `{ email: 'bill@microsoft.com, company: "Microsoft" }` is explicitly returned because the value in the parameter `email` which is the string `'bill@microsoft.com'` is passed to the `email` value of the key `email` in the object. This example illustrates passing arguments into and return values out of functions.

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

### Example: String Methods

What does the code log and why?

```js
let sentence = "Lorem ipsum dolor sit amet ionsectetum adipisicing";
let result = [];                                    // line 2
for (let word of sentence.split(' ')) {
  if (word.startsWith("i") && word.endsWith("m")) { // line 4
    result.push(word + ' ')
  }                                                 // line 6
}
                                                    // line 8
console.log(result.join('').trim());                // line 9
```

The code logs `'ipsum ionsectetum'`. On line 1, the global variable `sentence` is declared and initialized to the string `"Lorem ipsum dolor sit amet ionsectetum adipisicing"`. On line 2, the global variable `result` is declared and initialized to reference an empty array `[]`. On lines 3-7, a `for..of` loop is defined. The `split` method is called on `sentence` which returns an array of strings separated by a space. The variable `word` is initialized to the value of each string in the array as the loop iterates through it. On line 4, the `if` conditional checks each iteration of `word` and if it evaluates as true for  both string methods `startsWith('i')` and `endsWith('m')`, the string at that iteration is concatenated with `' '` and added to the array `result` via the `push` method. On line 9, the `console.log` method is called with `result` passed as an argument. The string method `join` is called on `result` with the `''` as an argument which returns a string with no spaces and the `trim` method is chained onto the result to remove white space from the start and end of the string. This example illustrates using various string methods in JavaScript.

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

The `forEach` method executes a callback function for each element in the calling array. The return value of the callback function is not used by the `forEach` method. `forEach` always returns `undefined`. `forEach` performs simple iteration and returns `undefined`.

The `filter` method returns a new array that includes all elements from the calling array for which the callback returns a truthy value. If no elements return a truthy value, it returns an empty array. `filter` doesn't mutate the caller. `filter`'s callback function can accept 1, 2, or 3 elements: the element value, the element index, and the array it is operating on.

The `map` method returns a new array populated with the return values of executing a callback function for each element of the calling array.

The `some()` method executes a callback function once for each element in the calling array, until it finds an occurrence where the callback function returns a **truthy** value. If such an element is found, the method **immediately** returns `true`. Otherwise, if the callback function returns a falsy value for all elements, the method returns `false`.

The `every()`method executes a callback function once for each element in the calling array, until it finds an occurrence where the callback function returns a **falsy** value. If such an element is found, the method **immediately** returns `false`. Otherwise, if the callback function returns a truthy value for all elements, the method returns `true`.

### Example: `filter`

What is the return value of the filter method call below? Why?

```js
[1, 2, 3].filter(num => 'hi');
```

The code returns `[1, 2, 3]`. The `filter` method performs selection based on the truthiness of the callback's return value. Here, the return value is always `'hi'`, which is truthy. Thus, `filter` returns a new array containing all the elements in the original array.

### Example: `map`

What is the return value of `map` in the following code? Why?

```js
[1, 2, 3].map(num => {
  num * num;
});
```

The code returns `[ undefined, undefined, undefined ]`. The `map` method looks at the return value of the callback function to decide the elements in the returned array. Each element in the original array is replaced by what the callback returns for that element. Here, there's no explicit return statement in the callback function, which means the callback returns `undefined` each time.

### Example: `pop`

What is the return value of the following statement? Why?

```js
['ant', 'bear', 'caterpillar'].pop().length;
```

The return value is `11`. First, the `pop` method is called on the array. `pop` destructively removes the last element from the calling array and returns it. Second, `length` is accessed on the return value of `pop` which is the string `'caterpillar'` and it has a length of 11.

### Example: `every`

What is the callback's return value in the following code? Also, what is the return value of `every` in this code?

```js
[1, 2, 3].every(num => {
  return num = num * 2;
});
```

The return values of the callback will be `2`, `4`, and `6` on the respective iterations. The expression `num = num * 2` is an assignment expression and will evaluate as the expression on the right-hand side of the assignment and that is what gets returned in each iteration. Since all of those numbers are truthy values, `every` will return `true`.

## 10. Working with Objects; accessing keys and values of an Object as arrays

The `Object.keys` static method returns an object's keys as an array.

The `Object.values` static method extracts the values from every own property in an object to an array.

 The `Object.entries` static method *returns an array of nested arrays*. Each nested array has two elements: one of the object's keys and its corresponding value.

The `Object.assign` static method merges two or more objects by combining the key-value pairs into a single object. `Object.assign` mutates the first object.

## 11. Arrays are Objects

JavaScript arrays are objects. The chief difference between an array and some other object is that it uses non-negative integers as its primary keys. Another significant difference is that adding elements to the array increases the value of its `length` property, and changing the value of the `length` property causes the number of elements to change.

Arrays as objects are object data types with non-primitive or object values, not primitive values.

## 12. Understand the concepts of pass-by-reference and pass-by-value

Pass-by-value relates to primitive values that are passed as arguments into a function. With all primitive values, the value is passed by value and the function receives a copy of the original value. The parameter in the function points to a new copy of the value.

Pass-by-reference relates to object values that are passed as arguments into a function. When we declare and initialize a variable to an object value, we are initializing that variable to hold a *reference* which points to the actual object in memory. Therefore, when we pass the argument into a function, we pass the reference that points to the actual object. Thus, any destructive changes that the function may implement on the Object affects the original object as well. The function can *change/modify/mutate* the argument that is passed because we have a *reference* to that original argument.

The `abc` parameter is initialized to a reference that points to the same Array/Object in memory as `xyz`. Therefore, any mutations to `abc` will also be shown in `xyz` because these two variables contain a reference that points to the same object in memory.

### Examples: Pass by Value

What does this program output and why?

```js
let greeting = 'Hello';

const test = (str) => {
  str = str.concat(' World!');
  return str;
};

test(greeting);
console.log(greeting);
```

The code returns the string `'Hello World'` and logs `'Hello'`. This example illustrates pass by value of a string into a function. Since the value of `greeting` is an immutable string, it is passed by value into function `test` and whatever happens inside the function cannot mutate the value of `greeting`. Within function `test` the parameter `str` accepts the value of the argument `greeting` passed in through the call to function `test`. `str` is reassigned within `test` and its value is concatenated via `str.concat(' World')` and `'Hello World'` is returned. Since the value of `str` is not captured anywhere, it is destroyed.

## 4. Example 2: Pass by Value

```js
let firstName = 'John';

const getName = (name) => {
  name.concat(' Doe');
  name = name.toLowerCase();
  return name;
};

getName(firstName); // line 9
console.log(firstName); // line 10
```

The `console.log(firstName)` method outputs `John` on line 10. The call to the `getName` function returns `john` on line 9. This example illustrates pass by value. The function `getName` cannot access or reassign the variable `firstName` because only a copy of the value of `firstName` is passed into the function, and not the actual variable `firstName` itself since it’s a primitive and hence pass-by-value. The `name.concat(' Doe')` call on line 3 does not change the value of `name`, since strings cannot be mutated. The reassignment `name = name.toLowerCase()` does change the value of `name` because it reassigns `name` to its own value with the `toLowerCase()` method performed on it.

### Example 2: Pass by Reference

What will happen when we run this code? Why?

```js
let a = ['Hello'];

function changeValue(a) {
  a[0] = 'Goodbye';
}

changeValue(a); // line 7
console.log(a);
```

The code logs `[ 'Goodbye' ]`. This example illustrates pass by reference. On line 1, the global variable `a` is declared and initialized to reference the array `['Hello']` which is an object value. On line 3, the function `changeValue` is declared and invoked on line 7 with the argument `a` passed to it. When `a` is passed to function `changeValue`, it is passed as a reference to `[‘Hello’]`, so within function `changeValue`, the array referenced by outer scope variable `a` is mutated. Thus, when `console.log(a)` is called on line 8, `[ 'Goodbye' ]` is logged.

```js
let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat(" World!");
  return arr;
}

test(greeting);
console.log(greeting);
```

The code logs `['Hello']` and illustrates pass by reference of an array as an object value into a function. When the function `test` is called with the argument `greeting`, it is passed by reference to the parameter `arr`. At this point `greeting` and `arr` reference the same array `['Hello']`. Within function `test`, the `concat` method is called on `arr` and returns a new array `['Hello', 'World' ]` that doesn't mutate the array referenced by `greeting` Thus, the call to `console.log(greeting)` logs the value of `greeting` from line 1.

arrays get passed into functions by reference
the concat method returns a new array - non-mutating
doesn't affect the original array
two arrays in memory

* ['Hello']
* ['Hello', 'World' ]

```js
let greeting = ["Hello"];

const test = arr => {
  arr = arr.push(" World!");
  return arr;
}

test(greeting); // => 2
console.log(greeting); // => [ 'Hello', ' World!' ]
```

The code logs `[ 'Hello', ' World!' ]` and illustrates pass by reference of an array into a function and array mutation via the `push` method. On line 8, the call to function `test` passes in the argument `greeting` which references the array `["Hello"]` on line 1. Within function `test` the `arr` parameter points to the same array that the `greeting` variable points to on line 1. So when the `push` method is called on `arr` it mutates the array referenced by `greeting` and returns `2` the length of the array. Meanwhile, the `console.log(greeting)` method passes the value of `greeting` which references the same `arr` variable in memory and logs `[ 'Hello', ' World!' ]`.

## 13. Variables as Pointers

Variables that have **primitive** values store those values at the memory location associated with the variable. In our example, `a` and `b` point to different memory locations. When we assign a value to either variable, the value gets stored in the appropriate memory location. If you later change one of those memory locations, it does not affect the other memory location, even if they started off with the same value. Therefore, the variables are *independent* when they contain primitive values.

However, with objects, JavaScript doesn't store the value of the object in the memory location used by the variable. Instead, it allocates additional memory for the object, and places a pointer to the object in the space allocated for the variable. Thus, we need to follow two pointers to get the value of our object from its variable name.

When two variables point to the same object, mutating the shared object will result in the change being reflected in both variables.

## 1. Example: What will line 10 log to the console and why?

```js
let greeting = ["Hello"];

const test = arr => {
  arr = ["ByeBye"]; // line 4
  arr.push("World");
  return arr;
}

test(greeting); // line 9
console.log(greeting); // line 10
```

On line 10, the `console.log(greeting)` method will log `["Hello"]` because 1) the global variable `greeting` is not reassigned within the body of the function `test`, and 2) the object that the variable `greeting` points to is not mutated within the function `test`. On line 1, the global variable `greeting` is declared and assigned to reference the array `["Hello"]`. On line 9, the function `test` is called with the passed in argument `greeting`. At this point, both the global variable `greeting` and the parameter `arr` reference the same array. On line 4, `arr` is reassigned to reference the new array `["ByeBye"]`. Therefore, parameter `arr` and the object `greeting` variable no longer reference the same place in computer memory. Thus, the object variable `greeting` is no longer mutable because `arr` now references a different object.

### Example: variables as pointers

```js
let pets = ['dragon', 'turtle'];

let newPets = pets;

pets = [];

console.log(newPets);
```

On line 7, `log` method call with the value referenced by the `newPets` global variable passed in as an argument will output `[ 'dragon', 'turtle' ]`, because 1) `newPets` is initialized to the value referenced by the global variable `pets` and 2) `newPets` isn't reassigned to another value. On line 1, the global variable `pets` is initialized to an array value. On line 2, the global variable `newPets` is initialized to the value referenced by the global variable `pets`. Now, each variable references the same array object in memory. On line 5, `pets` is reassigned to an empty array. The reassignment of `pets` doesn't affect what `newPets` references. Each variable points to a value and reassigning either one doesn't affect the other. On line 7, when the value referenced by `newPets` is passed as an argument to the `log` method call, `newPets` still references the array `['dragon', 'turtle']`. This illustrates the concept of variables as pointers. A variable cannot point to another variable. Variables always point to values in memory. If a variable is assigned to another variable, it points to the value referenced by the other variable. When a variable is reassigned, it is reassigned without affecting what other variables point to.

## 14. `console.log` vs. `return`

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

### Example: Truthiness vs Boolean

In the code below, the conditional statement outputs `'Neither a nor b is true'` and line 12 returns `false`. Explain why the `else` branch is executed when `a` and `b` are evaluated in the conditional statement. Also explain why `false` is returned when `a` is compared to `b` on line 12. Which principle is demonstrated by the combination of these facts?

```js
let a = false;
let b = null;

if (a) {
  console.log("a is true");
} else if (b) {
  console.log("b is true");
} else {
  console.log("Neither a nor b is true");
}

a === b; // false
```

The conditional statement outputs `'Neither a nor b is true'` and demonstrates the use of truthiness and boolean values in JavaScript. In both the `if` and `else if` statements the values of the global variables `a` and `b` evaluate to false. Thus, the `if` and `else if` blocks are bypassed and the `else` block executes to log the string `'Neither a nor b is true'`. On line 12, using the strict equality operator to compare the values in `a` and `b` returns `false` because while both values evaluate to `false` they are not the same value.

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

```js
function test(str) {
  str + '!!!';
}

let word = test('Hello');

if (word) {
  console.log('Hi');
} else {
  console.log('Goodbye');
}
```

no explicit return statement
test will implicitly return undefined
str is not assigned to anything
word is assigned to `undefined`
word is evaluated to false
so the else block executes
and "Goodbye" is logged

## 19. First-class Functions

All JavaScript functions are **first-class functions**. The key feature of first-class functions is that you can treat them like any other value. In fact, **all JavaScript functions are objects**. Thus, you can assign them to variables, pass them as arguments to other functions, and return them from a function call.

## 20. Side-effects

1. It reassigns any non-local variable. Reassigning a variable in the outer scope would be a side-effect.
2. It mutates the value of any object referenced by a non-local variable. Mutating an array or object argument, for instance, would be a side-effect.
3. It reads from or writes to a file, network connection, browser, or the system hardware. Side-effects like this include writing to the console log and reading input from the terminal.
4. It raises an exception without handling it.
5. It calls another function that has side-effects.

```js
// 1. side-effect: logs output to the console
// returns: undefined
function displayTotal(num1, num2) {
  console.log(num1 + num2);
}

// 2. side-effect: mutates the passed-in array
// returns: updated array
function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}
// 3. side-effect: none
// returns: a new number
function computeTotal(num1, num2) {
  return num1 + num2;
}
```

## 21. Naming Conventions (legal vs idiomatic)

Idiomatic names follow the naming conventions in the JavaScript book.

Note that non-idiomatic names are not invalid names. Non-idiomatic names are commonly used by external libraries to provide names that are easy to type yet unlikely to conflict with names in other libraries

Invalid names include variables that begin with a number, use hyphens, look like property reference.

Avoid magic numbers which are numbers or values that appear in your program without any information that describes what that number represents.

## 22. Be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose

```js
let hello = "Hello, world!";

function myFunc() {
  console.log(hello);
}

myFunc();
```

The function `myFunc` outputs `'Hello, world!'` which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

```js
let arrayOfAges = [6, 9, 48, 53];

function getOldest(ages) {                   // line 1
  return ages.sort((a, b) => b - a)[0];     // line 2
}                                            // line 3

getOldest(arrayOfAges);
```

The function `getOldest` sorts an array of numbers from lowest to highest and returns the highest number.
