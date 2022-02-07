# Interview Assessment Methods Plus

## Arrays

### Array.from()

The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

```js
/* Syntax */
// Arrow function
Array.from(arrayLike, (element) => { /* ... */ } )
Array.from(arrayLike, (element, index) => { /* ... */ } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function mapFn(element) { /* ... */ })
Array.from(arrayLike, function mapFn(element, index) { /* ... */ })
Array.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)
Array.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)
```

### Array.isArray(value)

 The `Array.isArray()` method determines whether the passed value is an Array.

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

### Array.prototype.length

The length property of an object which is an instance of type `Array` sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

### Array.prototype.at(index)

The `at()` method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

`array.at(-1)` returns the last item; same as `array[array.length -1]`

### Array.prototype.concat()

```js
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)
```

### Array.prototype.every()

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
// Arrow function
every((element) => { /* ... */ } )
every((element, index) => { /* ... */ } )
every((element, index, array) => { /* ... */ } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function(element) { /* ... */ })
every(function(element, index) { /* ... */ })
every(function(element, index, array){ /* ... */ })
every(function(element, index, array) { /* ... */ }, thisArg)
```

### Array.prototype.filter()

The `filter()` method **creates a new array** with all elements that pass the test implemented by the provided function.

```js
// Arrow function
filter((element) => { /* ... */ } )
filter((element, index) => { /* ... */ } )
filter((element, index, array) => { /* ... */ } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function(element) { /* ... */ })
filter(function(element, index) { /* ... */ })
filter(function(element, index, array){ /* ... */ })
filter(function(element, index, array) { /* ... */ }, thisArg)
```

### Array.prototype.find()

The `find()` method returns the **value** of the **first element** in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

```js
// Arrow function
find((element) => { /* ... */ } )
find((element, index) => { /* ... */ } )
find((element, index, array) => { /* ... */ } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)

// Inline callback function
find(function(element) { /* ... */ })
find(function(element, index) { /* ... */ })
find(function(element, index, array){ /* ... */ })
find(function(element, index, array) { /* ... */ }, thisArg)
```

### Array.prototype.findIndex()

The `findIndex()` method returns the **index** of the **first element** in the array that satisfies the provided testing function. Otherwise, it returns `-1`, indicating that no element passed the test.

```js
// Arrow function
findIndex((element) => { /* ... */ } )
findIndex((element, index) => { /* ... */ } )
findIndex((element, index, array) => { /* ... */ } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function(element) { /* ... */ })
findIndex(function(element, index) { /* ... */ })
findIndex(function(element, index, array){ /* ... */ })
findIndex(function(element, index, array) { /* ... */ }, thisArg)
```

### Array.prototype.flat()

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```js
flat()
flat(depth)
```

### Array.prototype.forEach()

The `forEach()` method executes a provided function once for each array element.

```js
// Arrow function
forEach((element) => { /* ... */ } )
forEach((element, index) => { /* ... */ } )
forEach((element, index, array) => { /* ... */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { /* ... */ })
forEach(function(element, index) { /* ... */ })
forEach(function(element, index, array){ /* ... */ })
forEach(function(element, index, array) { /* ... */ }, thisArg)
```

### Array.prototype.includes()

The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
includes(searchElement)
includes(searchElement, fromIndex)
```

### Array.prototype.indexOf()

The `indexOf()` method returns the **first** index at which a given element can be found in the array, or `-1` if it is not present.

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Array.prototype.join()

The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. 

```js
join()
join(separator)
```

### Array.prototype.lastIndexOf()

The `lastIndexOf()` method returns the **last** index at which a given element can be found in the array, or `-1` if it is not present. The array is searched *backwards*, starting at fromIndex.

```js
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
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

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

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

The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

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

The `some()` method *tests whether at least one element in the array passes the test* implemented by the provided function. It returns `true` if, in the array, it finds an element for which the provided function returns `true`; otherwise it returns `false`. It doesn't modify the array.

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

## Strings