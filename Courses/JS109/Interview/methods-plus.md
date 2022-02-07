# Methods Plus for Interview Assessment

## Array

### `Array.isArray(value)`

### `Array.prototype.length`

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

The `find()` method returns the value of the **first element** in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

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

