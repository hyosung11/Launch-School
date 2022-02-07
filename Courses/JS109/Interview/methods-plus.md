# Methods, Properties Plus for Interview Assessment

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

### `Array.isArray(value)`

 The `Array.isArray()` method determines whether the passed value is an Array.

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

### `Array.prototype.length`

The length property of an object which is an instance of type `Array` sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

### `Array.prototype.at(index)`

The `at()` method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

`array.at(-1)` returns the last item; same as `array[array.length -1]`

### `Array.prototype.concat()`

```js
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)
```

### `Array.prototype.every()`

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

### `Array.prototype.filter()`

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

### `Array.prototype.find()`

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

### `Array.prototype.findIndex()`

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

### `Array.prototype.flat()`

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```js
flat()
flat(depth)
```

### `Array.prototype.forEach()`

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

### `Array.prototype.includes()`

The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
includes(searchElement)
includes(searchElement, fromIndex)
```

### `Array.prototype.indexOf()`

The `indexOf()` method returns the **first** index at which a given element can be found in the array, or `-1` if it is not present.

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### `Array.prototype.join()`

The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. 

```js
join()
join(separator)
```

### `Array.prototype.lastIndexOf()`

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

The pop() method removes the **last** element from an array and returns that element. This method changes the length of the array.

### Array.prototype.push()

The push() method adds one or more elements to the **end** of an array and *returns the new length of the array*.

```js
push(element0)
push(element0, element1)
push(element0, element1, /* ... ,*/ elementN)
```

### Array.prototype.reduce()

The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a **single value**.

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

## Objects

### Object.assign()

The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

`Object.assign(target, ...sources)`

## Regular Expressions

## Strings