# Main Methods

## Arrays

### Array.isArray(value)

 The `Array.isArray()` method determines whether the passed value is an Array.

```js
Array.isArray( [ 1, 2, 3 ] );  // true
Array.isArray( { foo: 123 } ); // false
Array.isArray( 'foobar' );   // false
Array.isArray( undefined );  // false
```

### Array.prototype.length

The length property of an object which is an instance of type `Array` sets or *returns the number of elements in that array*. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

### Array.prototype.at()

The `at(index)` method takes an integer value and *returns the item at that index*, allowing for positive and negative integers. Negative integers count back from the last item in the array.

`array.at(-1)` returns the last item; same as `array[array.length -1]`

```js
// Our array with items
const cart = ['apple', 'banana', 'pear'];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // Logs: 'pear'

// Add an item to our 'cart' array
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // Logs: 'orange'
```

### Array.prototype.concat()

The `concat(value)` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```js
// Syntax
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)

// Concatenating two arrays
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric); // results in ['a', 'b', 'c', 1, 2, 3]
```

### Array.prototype.every()

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
// Arrow function
every((element) => { /* ... */ } )
every((element, index) => { /* ... */ } )
every((element, index, array) => { /* ... */ } )

// Example
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold)); // expected output: true

// The following example tests whether all elements in the array are bigger than 10.
function isBigEnough(element, index, array) {
  return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Array.prototype.filter()

The `filter()` method **creates a new array** with all elements that pass the test implemented by the provided function.

```js
// Arrow function
filter((element) => { /* ... */ } )
filter((element, index) => { /* ... */ } )
filter((element, index, array) => { /* ... */ } )

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

### Array.prototype.find()

The `find(element)` method returns the **value** of the **first element** in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

```js
// Arrow function
find((element) => { /* ... */ } )
find((element, index) => { /* ... */ } )
find((element, index, array) => { /* ... */ } )

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found); // expected output: 12
```

### Array.prototype.findIndex()

The `findIndex()` method returns the **index** of the **first element** in the array that satisfies the provided testing function. Otherwise, it returns `-1`, indicating that no element passed the test.

```js
// Arrow function
findIndex((element) => { /* ... */ } )
findIndex((element, index) => { /* ... */ } )
findIndex((element, index, array) => { /* ... */ } )

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

### Array.prototype.flat()

The `flat(depth)` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```js
flat()
flat(depth)

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat()); // expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2)); // expected output: [0, 1, 2, [3, 4]]
```

### Array.prototype.forEach()

The `forEach()` method executes a provided function once for each array element.

```js
// Arrow function
forEach((element) => { /* ... */ } )
forEach((element, index) => { /* ... */ } )
forEach((element, index, array) => { /* ... */ } )

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

### Array.prototype.includes()

The `includes(searchElement)` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

```js
includes(searchElement)
includes(searchElement, fromIndex)

const array1 = [1, 2, 3];

console.log(array1.includes(2)); // expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // expected output: true

console.log(pets.includes('at')); // expected output: false
```

### Array.prototype.indexOf()

The `indexOf(searchElement)` method returns the **first** index at which a given element can be found in the array, or `-1` if it is not present.

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2)); // expected output: 4

console.log(beasts.indexOf('giraffe')); // expected output: -1
```

### Array.prototype.join()

The `join()` method *creates and returns a new string* by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```js
join()
join(separator)

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

### Array.prototype.lastIndexOf()

The `lastIndexOf()` method returns the **last** index at which a given element can be found in the array, or `-1` if it is not present. The array is searched *backwards*, starting at fromIndex.

```js
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```

### Array.prototype.map()

The `map()` method **creates a new array** populated with the results of calling a provided function on **every** element in the calling array.

```js
// Arrow function
map((element) => { /* ... */ })
map((element, index) => { /* ... */ })
map((element, index, array) => { /* ... */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* ... */ })
map(function(element, index) { /* ... */ })
map(function(element, index, array){ /* ... */ })
map(function(element, index, array) { /* ... */ }, thisArg)
```

### Array.prototype.pop()

The `pop()` method removes the **last** element from an array and returns that element. This method changes the length of the array.

### Array.prototype.push()

The `push()` method adds one or more elements to the **end** of an array and *returns the new length of the array*.

```js
push(element0)
push(element0, element1)
push(element0, element1, /* ... ,*/ elementN)
```

### Array.prototype.reduce()

The `reduce()` method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a **single value**.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise, array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

```js
// Arrow function
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
```

### Array.prototype.reverse()

The reverse() method *reverses an array in place*. The first array element becomes the last, and the last array element becomes the first.

### Array.prototype.shift()

The shift() method *removes the first element* from an array and *returns that removed element*. This method changes the length of the array.

### Array.prototype.slice()

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

```js
slice()
slice(start)
slice(start, end)
```

### Array.prototype.some()

The `some()` method *tests whether at least one element in the array passes the test* implemented by the provided function. It returns `true` if, in the array, it finds an element for which the provided function returns `true`; otherwise, it returns `false`. It doesn't modify the array.

```js
// Arrow function
some((element) => { /* ... */ } )
some((element, index) => { /* ... */ } )
some((element, index, array) => { /* ... */ } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function(element) { /* ... */ })
some(function(element, index) { /* ... */ })
some(function(element, index, array){ /* ... */ })
some(function(element, index, array) { /* ... */ }, thisArg)
```

### Array.prototype.sort()

The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values

```js
// Functionless
sort()

// Arrow function
sort((firstEl, secondEl) => { /* ... */ } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(firstEl, secondEl) { /* ... */ })
```

### Array.prototype.splice()

The `splice()` method changes the contents of an array by *removing* or *replacing* existing elements and/or *adding* new elements in place. To access part of an array without modifying it, see slice().

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

### Array.prototype.toLocaleString()

The `toLocaleString()` method returns a string representing the elements of the array. The elements are converted to Strings using their `toLocaleString` methods and these Strings are separated by a locale-specific String (such as a comma “,”).

```js
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);
```

### Array.prototype.toString()

The `toString()` method returns a string representing the specified array and its elements.

```js
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

### Array.prototype.unshift()

The `unshift()` method *adds* one or more elements to the **beginning** of an array and *returns the new length of the array*.

```js
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, /* ... ,*/ elementN)
```

### Array.prototype.values()

The `values()` method returns a new array iterator object that contains the values for each index in the array.

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## Looping

### for...in

The `for...in` statement iterates over all enumerable properties of an object that are keyed by **strings** (ignoring ones keyed by Symbols), including inherited enumerable properties.

```js
for (variable in object) {
  statement
}
```

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

### for...of

The `for...of` statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

```js
for (variable of iterable) {
  statement
}
```

```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## Math

### Math.abs()

The `Math.abs()` function returns the absolute value of a number. That is, it returns `x` if `x` is positive or zero, and the negation of `x` if `x` is negative.

### Math.ceil()

The `Math.ceil()` function always rounds a number up to the next largest integer.

Note: `Math.ceil(null)` returns integer 0 and does not give a `NaN` error.

### Math.floor()

The `Math.floor()` function returns the largest integer less than or equal to a given number.

### Math.max()

The `Math.max()` function returns the largest of the zero or more numbers given as input parameters, or `NaN` if any parameter isn't a number and can't be converted into one.

```js
Math.max()
Math.max(value0)
Math.max(value0, value1)
Math.max(value0, value1, /* ... ,*/ valueN)
```

### Math.min()

The static function `Math.min()` returns the lowest-valued number passed into it, or `NaN` if any parameter isn't a number and can't be converted into one.

```js
Math.min()
Math.min(value0)
Math.min(value0, value1)
Math.min(value0, value1, ... , valueN)
```

### Math.pow()

The `Math.pow()` static method, given two arguments, *base* and *exponent*, returns `base` to `exponent`.

`Math.pow(base, exponent)`

### Math.random()

The `Math.random()` function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

### Math.round()

The `Math.round()` function returns the value of a number *rounded to the nearest integer*.

### Math.sign()

The `Math.sign()` function returns either a **positive** or **negative** +/- 1, indicating the sign of a number passed into the argument. If the number passed into `Math.sign()` is 0, it will return a +/- 0. Note that *if the number is positive, an explicit (+) will not be returned*.

```js
console.log(Math.sign(3));
// expected output: 1

console.log(Math.sign(-3));
// expected output: -1

console.log(Math.sign(0));
// expected output: 0

console.log(Math.sign('-3'));
// expected output: -1
```

### Math.sqrt()

The `Math.sqrt()` function returns the square root of a number.

## Numbers

### Number.MAX_SAFE_INTEGER

The `Number.MAX_SAFE_INTEGER` constant represents the maximum safe integer in JavaScript (2^53 - 1).

### Number.NaN

The `Number.NaN` property represents Not-A-Number. Equivalent of `NaN`.

### Number.isInteger()

The `Number.isInteger(value)` method determines whether the passed value is an integer.

### Number.isNaN()

The `Number.isNaN(value)` method determines whether the passed value is `NaN` and its type is `Number`. It is a more robust version of the original, global isNaN().

### Number.parseFloat()

The `Number.parseFloat(string)` method parses an argument and *returns a floating point number*. If a number cannot be parsed from the argument, it returns `NaN`.

### Number.parseInt()

The `Number.parseInt(string, radix)` method parses a string argument and returns an integer of the specified radix or base.

### Number.prototype.toFixed()

The `toFixed(digits)` method formats a number using fixed-point notation and returns it as a string.

## Objects

### Object.assign()

The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

`Object.assign(target, ...sources)`

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

### Object.entries()

 The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs. This is the same as iterating with a f`or...in` loop, except that a `for...in` loop enumerates properties in the prototype chain as well.

The order of the array returned by `Object.entries()` is the same as that provided by a `for...in` loop. If there is a need for different ordering, then the array should be sorted first, like `Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));`.

`Object.entries(obj)`

```js
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
```

### Object.freeze()

The `Object.freeze()` method *freezes* an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. `freeze()` returns the same object that was passed in.

### Object.fromEntries()

The `Object.fromEntries()` method transforms a list of key-value pairs into an object.

`Object.fromEntries(iterable);`

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

### Object.hasOwn()

The `Object.hasOwn()` static method returns `true` if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns `false`.

Note: `Object.hasOwn()` is intended as a replacement for `Object.hasOwnProperty()`.

`Object.hasOwn(instance, prop)`

### Object.prototype.hasOwnProperty()

The `hasOwnProperty()` method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

Note: `Object.hasOwn()` is recommended over `hasOwnProperty()`, in browsers where it is supported.

`hasOwnProperty(prop)`

### Object.is()

The `Object.is()` method determines whether two values are the same value.

`Object.is(value1, value2);`

```js
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true
```

### Object.keys()

The `Object.keys()` method returns an **array** of a given object's own enumerable property **names**, iterated in the same order that a normal loop would.

### Object.values()

The `Object.values()` method returns an **array** of a given object's own enumerable property **values**, in the same order as that provided by a `for...in` loop. (The only difference is that a `for...in` loop enumerates properties in the prototype chain as well.)

## Regular Expressions

![JavaScript-Regex-Cheatsheet](/Users/hyosung11/Launch-School/Courses/JS109/Interview/JavaScript-Regex-Cheatsheet.png)

### Creating a regular expression

`const re = /ab+c/;`

`const re = new RegExp('ab+c');`

### Using regular expressions

Regular expressions are used with the `RegExp` methods `test()` and `exec()` and with the `String` methods `match()`, `replace()`, `search()`, and `split()`.

**Method**     | **Description**
---------------|-----------------------------------------------------------------------------------------------------------------
`exec()`       | Executes a search for a match in a string. It returns an array of information or `null` on a mismatch.
`test()`       | Tests for a match in a string. It returns `true` or `false`.
match()        | Returns an array containing all of the matches, including capturing groups, or `null` if no match is found.
`matchAll()`   | Returns an iterator containing all of the matches, including capturing groups.
search()       | Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
`replace()`    | Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
`replaceAll()` | Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
`split()`      | Uses a regular expression or a fixed string to break a string into an array of substrings.

## Strings

### String length

The `length` property of a `String` object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.

### String.prototype.at()

The `at(index)` method takes an integer value and returns a new `String` consisting of the **single** UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

```js
const myString = 'Every green bus drives fast.';

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length-2);
console.log(lengthWay); // Logs: 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // Logs: 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // Logs: 't'
```

### String.prototype.charAt()

The String object's `charAt(index)` method returns a new string consisting of the **single** UTF-16 code unit located at the specified offset into the string. If `index` is out of range, `charAt()` returns an empty string.

### String.prototype.charCodeAt()

The `charCodeAt(index)` method returns an **integer** between 0 and 65535 representing the UTF-16 code unit at the given index.

### String.prototype.codePointAt()

The `codePointAt(pos)` method returns a non-negative integer that is the Unicode code point value at the given position.

### String.prototype.concat()

The `concat()` method concatenates the string arguments to the calling string and returns a new string.

```js
// Syntax
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)

// Examples
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
```

### String.prototype.endsWith()

The `endsWith()` method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.

```js
endsWith(searchString)
// length Optional
// If provided, it is used as the length of str. Defaults to str.length.
endsWith(searchString, length)
```

### String.fromCharCode()

The static `String.fromCharCode()` method returns a string created from the specified sequence of UTF-16 code units. Because `fromCharCode()` is a static method of `String`, you always use it as `String.fromCharCode()`, rather than as a method of a `String` object you created.

```js
String.fromCharCode(num1)
String.fromCharCode(num1, num2)
String.fromCharCode(num1, num2, ..., numN)

String.fromCharCode(65, 66, 67);   // returns "ABC"
String.fromCharCode(0x2014);       // returns "—"
String.fromCharCode(0x12014);      // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212);         // also returns "—"; 8212 is the decimal form of 0x2014
```

### String.fromCodePoint()

The static `String.fromCodePoint()` method returns a string created by using the specified sequence of code points.

```js
// Syntax
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, ..., numN)

// Examples
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404" == "Є"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307); // "\uD834\uDF06a\uD834\uDF07"
```

### String.prototype.includes()

The `includes()` method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

```js
includes(searchString)
includes(searchString, position)
```

### String.prototype.indexOf()

The `indexOf()` method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

```js
indexOf(searchString)
indexOf(searchString, position)
```

### String.prototype.lastIndexOf()

The `lastIndexOf()` method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

```js
lastIndexOf(searchString)
lastIndexOf(searchString, position)
```

### String.prototype.localeCompare()

The `localeCompare()` method returns a **number** indicating whether a reference string comes before, or after, or is the same as the given string *in sort order*.

```js
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)

// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0

// localeCompare() enables case-insensitive sorting for an array.
let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### String.prototype.match()

The `match(regexp)` method retrieves the result of matching a string against a regular expression. The return value is an Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

### String.prototype.matchAll()

The `matchAll(regexp)` method returns an iterator of all results matching a string against a regular expression, including capturing groups.

### String.prototype.padEnd()

The `padEnd()` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

```js
padEnd(targetLength)
padEnd(targetLength, padString)

// Examples
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```

### String.prototype.padStart()

The `padStart()` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

```js
padStart(targetLength)
padStart(targetLength, padString)

'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

### String.prototype.repeat()

The `repeat(count)` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

### String.prototype.replace()

The `replace()` method returns a new string with some or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a `RegExp`, and the `replacement` can be a string or a function to be called for each match. If `pattern` is a string, only the first occurrence will be replaced. The original string is left unchanged.

```js
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)

// Example
// In the following example, the regular expression is defined in replace() and includes the ignore case flag. 
let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```

### String.prototype.replaceAll()

The `replaceAll()` method returns a new string with all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a `RegExp`, and the `replacement` can be a string or a function to be called for each match. The original string is left unchanged.

```js
replaceAll(regexp, newSubstr)
replaceAll(regexp, replacerFunction)

replaceAll(substr, newSubstr)
replaceAll(substr, replacerFunction)

// Example
'aabbcc'.replaceAll('b', '.');
// 'aa..cc'
```

### String.prototype.search()

The `search(regexp)` method executes a search for a match between a regular expression and this `String` object. The return value is the index of the first match between the regular expression and the given string, or `-1` if no match was found.

```js
let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation
```

### String.prototype.slice()

The `slice(beginIndex, endIndex)` method extracts a section of a string and returns it as a new string, without modifying the original string.

### String.prototype.split()

The `split()` method divides a `String` into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

```js
split()
split(separator)
split(separator, limit)
```

### String.prototype.startsWith()

The `startsWith(searchString, position = 0)` method determines whether a string begins with the characters of a specified string, returning `true` or `false` as appropriate.

### String.prototype.substring()

The `substring(indexStart, indexEnd)` method returns the part of the `string` between the start and end indexes, or to the end of the string.

### String.prototype.toLowerCase()

The `toLowerCase()` method returns the calling string value converted to lower case.

### String.prototype.toString()

The `toString()` method returns a string representing the specified object.

### String.prototype.toUpperCase()

The `toUpperCase()` method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

### String.prototype.trim()

The `trim()` method *removes whitespace from both ends of a string* and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

### String.prototype.trimStart()

The `trimStart()` method removes whitespace from the beginning of a string. `trimLeft()` is an alias of this method.

### String.prototype.trimEnd()

The `trimEnd()` method removes whitespace from the end of a string. `trimRight()` is an alias of this method.

End
