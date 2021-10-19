# Glossary of Topics for Written Assessment

## 1. Arrays: working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)

### Arrays

Arrays are lists of elements that are ordered by index, where each element can be any value. *Arrays associate values with ordered indexes*. Arrays use an integer-based index to maintain the order of its elements. A specific element can be referenced using its index. Arrays in JavaScript can contain any JavaScript values, regardless of type, and can contain different types at the same time. This is referred to as being heterogenous.

### Array Element Referencing

You can refer to any element of an array by its index number. The last item in an array is always located at index position `array.length - 1`. This is because arrays are zero-based, meaning the first item in an array occurs at index position `0`. If an array has 5 elements within it, it has an `array.length` of 5, which means the last element has an index position of `4` (5 - 1). Therefore, to add a new value to the end of an array, you can also use the syntax `array[array.length]` which would add a new value to the very end of the array.

```js
// Arrays can be heterogenous.
let arr = [1, 2, 'string', false, null, undefined, {}, [5, 'a']]

// Array declared and initialized with `const` - contents within the Array can still be modified.
const frozenArr = ['I', 'am', 'a', 'frozen', 'array', '!'] // returns undefined
frozenArr.push('!') // push returns 7, which is the length of the array
console.log(frozenArr) // logs['I', 'am', 'a', 'frozen', 'array', '!', '!'], and returns undefined

// Array declared and initialized with `const` - cannot be reassigned -> throws an error
frozenArr = [1, 2, 3]; // Uncaught TypeError: Assignment to constant variable.

// `const` Array with Frozen Elements
const frozenCount = [1, 2, 3] // returns undefined
Object.freeze(frozenCount) // returns [1, 2, 3]
frozenCount.push(4) // returns Uncaught TypeError: Cannot add property, object is not extensible
```

### Array Keys

```js
// Standard Characteristics of the Array (length and Object.keys(arr))
let arr = [2, 4, 6];
console.log(arr);              // [2, 4, 6]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // ['0', '1', '2']

// Adding Object Properties to the arr Object
arr[-3] = 5; // adds a property '-3' with a value 5 to the array object
arr['foo'] = 'a'; // adds a property 'foo' with the value 'a' to the array object
console.log(arr); // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length); // 3 -> Object Properties added to an Array Object are NOT included in the length of the array
console.log(Object.keys(arr))  // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1);  // [ 3, 5, 7 ] => All built-in Array methods ignore properties that are not elements, so map ignores arr[-3] and arr['foo']
```

### Sparse Arrays

```js
// Sparse Arrays - consisting of unset values created by increasing the length property
1 let arr = [2, 4, 6];
2 arr.length = 5;
3 console.log(arr); // [2, 4, 6, <2 empty items> ]
4 console.log(arr.length); // 5
5 console.log(Object.keys(arr)) // ['0', '1', '2']
```

Notice that the array now contains 5 elements, as shown on line 3 and line 4. Curiously, though, two of the elements are shown as empty items. The empty items, `arr[3]` and `arr[4]`, have no value at all. In fact, those elements don't exist; you can see that on line 5 where `Object.keys` makes no mention of keys '3' and '4'. If you try to access either value, JavaScript will tell you that it is `undefined`. However, that does not mean its value is undefined. The value is NOT SET at all. Let's see what happens when we change one of these elements to an explicit undefined value:

```js
// Sparse Arrays - Explicitly Set as undefined
arr[4] = undefined
console.log(arr);              // [2, 4, 6, <1 empty item>, undefined ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2', '4']
```

`arr[3]` is still an empty item, but `arr[4]` is assigned the value `undefined`. `arr[4]` has a value; `arr[3]` does not. Note, also, that `Object.keys()` includes the index/key of the explicitly `undefined` element (`'4'`) in its return value. However, it still does not include the key for the gap at `arr[3]`.

### An Empty Array - Gaps vs Object Keys

* `Array.length` - includes elements that that have been set, as well as any gaps (i.e., unset elements)
* `Object.keys(arr)` - includes the indices of all set elements **as well as non-element properties** that have been added to the Array object.

### Odd Array Properties - Increasing, Decreasing, Negative Array Indices, Unset Values vs `undefined`

* **Decreasing the Array.length Property -** If you change an array's `length` property to a new, **smaller** value, the array gets **truncated**; and JavaScript ***removes all elements beyond the new final element***.
* **Increasing the Array.length Property** - if you change an array's `length` property to a new, **larger** value, the array expands to the new size. However, the new elements do **not get initialized**. Indexing into an element that is **not** initialized or that is **unset** returns `undefined`. Elements of an array that are **NOT** initialized will **NOT** be iterated over and included in the callback function for array iteration functions (i.e., `forEach`, `map`); however values that **ARE** initialized (even if they are initialized with a value of `undefined`) **WILL** be included in those functions.
* **Negative Array Indices (adding to the Array Properties)** - if you create 'negative array indices', ***JavaScript does NOT throw an error***; instead these are added as **properties to the array object.** Recall that object keys are **always strings.**

```js
// Investigating Increasing & Decreasing the Array.length Property, and Array Iteration with Unset Elements
let arr = [] // returns undefined
arr.length = 3 // returns 3
arr // returns [ <3 empty items> ]

arr[0] // returns undefined
arr[0] === undefined // returns true
arr.filter(element => element === undefined) // returns [] -> **this is because uninitialized elements within an array are NOT iterated through**
arr.forEach(element => console.log(element)) // does not log anything, because **uninitialized elements are NOT iterated through**, and returns undefined

arr[1] = 3 // returns 3
arr // returns [ <1 empty item>, 3, <1 empty item>]
arr.length // returns 3
arr.forEach(element => console.log(element)) // logs 3 to the console, and forEach() returns undefined

Object.keys(arr)   // only the initialized or set elements are included in Object.keys(arr) => returns the element index position of ['1']
arr.length = 2 // returns 2
arr // returns [ <1 empty item>, 3]

// Examples of Negative Arrays and Adding Array Properties
> arr = [1, 2, 3] // returns [1, 2, 3]
> arr[-3] = 4 // returns 4
> arr // returns [ 1, 2, 3, '-3': 4 ]

> arr[3.1415] = 'pi' // returns 'pi'
> arr['cat'] = 'Fluffy' // returns 'Fluffy' -> NOTE: When using bracket notation, the key must be a quoted string
> arr // returns [1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy']

> arr.length // returns 3 -> it only counts the set and unset elements [1, 2, 3], and does NOT include properties on the array object
> Object.keys(arr) // returns ['0', '1', '2', '-3', '3.1415', 'cat'] -> returns both the set element indices and all keys of the array object
> Object.values(arr) // returns [1, 2, 3, 4, 'pi', 'Fluffy'] -> returns both the set elements and all values of the array object
```

### Unset Values vs `undefined`

If you attempt to access the index of an unset value, it is uninitialized and it returns `undefined`. How do you determine between an unset item that happens to be `undefined`, and a set item that has been ***initialized and assigned*** to `undefined`?
A key things to remember:

* array.length **includes both SET and UNSET element values in its length, and DOES NOT include other array object keys or array object properties;**
* Object.keys(array) only **includes SET element values and other array object keys in its length, and does NOT include UNSET element values in its length**

```js
// Exploring Empty/Unset Value vs. undefined
let a = new Array(3); // returns undefined -> let a = new Array(3) this is another alternative to creating an array
a                     // returns [ <3 empty items> ]
a[0] === undefined;   // returns true

let b = [];           // returns undefined
b.length = 3;         // returns 3
b[-1] = 'yeah'        // returns 'yeah'
b                     // returns [ <3 empty items>, '-1': 'yeah' ]
b[0] === undefined;   // returns true

let c = [undefined, undefined, undefined] // returns undefined
c                                         // returns [ undefined, undefined, undefined ]
c[0] === undefined;                       // returns true
c['a'] = 5                                // returns 5

// Exploring Array Length Property vs. Object.keys(array).lengths
a.length                   // returns 3 -> unset items is 3; set items is 0
Object.keys(a).length;     // returns 0 -> set items is 0; array object property keys is 0

b.length                   // returns 3 -> unset items is 3; set items is 0
Object.keys(b).length      // returns 1 -> set items is 0; array object property keys is 1

c.length                   // returns 3 -> unset items is 0; set items is 3
Object.keys(c).length      // returns 4 -> set items is 3; array object property keys is 1
```

### Array Element Assignment || Object Element Assignment

Since Arrays are objects, they are mutable. As such, element assignment notation can be used to modify specific elements of arrays, or specific values of objects, by referring to their index and key respectively. Note that array and object element assignment notation is **destructive** and mutates the array/object directly.

```js
// Array Modification
let arr = [1, 2, 3]
arr[2] = 5
arr                  //  => logs [1, 2, 5]

// Object Modification
let obj = { a: 1, b: 2, c: 3};
obj['b'] = 5;
obj;                 //  => logs { a: 1, b: 5, c: 3}
```

### Array Destructuring Assignment

In an array destructuring assignment, we can assign elements of the array to multiple variables by wrapping the variable names in brackets. The first element gets assigned to the first variable, the second element gets assigned to the second variable, and so on.

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceEntries = Object.entries(produce);

produceEntries.forEach(keyVal => {
  let [ key, value ] = keyVal; // => Array Destructuring Assignment!

  console.log(`${key} is a ${value}`);
});
// logs: apple is a Fruit, carrot is a Vegetable pear is a Fruit broccoli is a Vegetable
```

### Out of Bounds Indices

Attempting to reference an out of bound index returns `undefined`. This is true for both positive and negative array indices. It does NOT throw an error. Attempting to increment an element located at an out of bound index returns `NaN` (because `undefined` + any value returns `NaN`.

```js
let arr1 = ['h', 'e', 'l', 'l', 'o']

arr1[6]                  // => returns undefined
arr1[-5]                 // => returns undefined
arr1[6] = arr1[6] + 1    // => returns NaN -> note that the sum of undefined and a number returns NaN
arr1                     // => ['h', 'e', 'l', 'l', 'o', <1 empty item>, NaN]
```

### Destructive Methods that Add/Remove Elements from Beginning or End of an Array

#### `Array.prototype.pop()`

```js
let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers); // => [1, 3, 5, 7]
```

The pop() method removes the last element from an array, but it does so destructively: the change is permanent. `pop` alters the array in-place. In other words, it mutates its caller (the array).

#### `Array.prototype.push()`

The `push()` method adds one or more elements to the end of an array and returns the length of the new array.

```js
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
```

#### `Array.prototype.shift()`

The `shift()` method removes the **first** element from an array and returns the removed element. This method changes the length of the array.

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

#### `Array.prototype.unshift()`

The `unshift()` method adds one or more elements to the beginning of an array and returns the length of the new array.

```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

### Other Destructive Array Methods

#### `Array.prototype.sort(a, b) => {...} )`

The `sort()` method sorts the elements of an array in place (mutating the calling array) and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

`sort` returns a reference to the array that was used to invoke it. It also mutates that array, and the return value reflects that mutation, but it returns a reference to the array that was used to invoke it.

* No Callback - The default sort order is **ascending**, built upon *converting the elements into strings*, then **comparing their sequences of UTF-16 code unit values.**
* Callback - if a callback function is defined, `sort` method utilizes the return value of the callback function to determine the sort order.
  * return value of callback - less than 0; sort `a` before `b`;
  * return value of callback - greater than 0; sort `b` before `a`;
  * return value of callback - is zero, the two elements are equal. Stable sorting will be maintained.

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

Another Example:

```js
let arr = [340, 15, 1, 3400];

arr.sort(); // => [ 1, 15, 340, 3400 ]
```

`Array.prototype.sort` arranges the values in the array by comparing the values of each element as strings. The resulting array contains all of the elements arranged in ascending lexicographic order based on UTF-16 codepoints. If two strings have the same value up to the length of the shorter string, sort positions the shorter string before the longer one.

Without arguments, `Array.prototype.sort` compares the values as strings, coercing the strings as needed. The comparisons are lexicographic; lengths only play a part when two strings match up to the length of the shorter one. In that case, sort positions the shorter value before the longer one.

#### `Array.prototype.reverse()`

The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
```

#### `Array.prototype.splice(start, [deleteCount], [addItem])`

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
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

### Non-destructive Array Methods

#### `Array.prototype.concat()`

The `concat` method returns a new array that contains a copy of the original array combined with additional elements supplied with the arguments. Since `concat` creates a copy of the original array and then mutates the copy, it leaves the original array intact.

```js
function addToArray(array) {
  return array.concat(10);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // => [1, 2, 3, 4, 5, 10]
console.log(oneToFive);             // => [1, 2, 3, 4, 5]
```

#### `Array.prototype.slice([start], [end])`

 The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
```

### Searching Arrays - Truthiness

#### `Array.prototype.find()`

The `find()` method returns the value of the **first** element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

The `find` method executes the `callbackFn` function once for each index of the array until the `callbackFn` returns a truthy value. If so, `find` immediately returns the value of that element. Otherwise, `find` returns `undefined`.

```js
let array = [5, 12, 8, 130, 44];

let found = array.find(element => element > 10);

console.log(found)
// => 12
```

#### `Array.prototype.findIndex(callbackFn)`

The `findIndex()` method returns the **index** of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `-1` is returned.

#### `Array.prototype.indexOf()`

The `indexOf()` method returns the first index at which a given element can be found in the array, or `-1` if it is not present.

The `indexOf` method lets you search an array for an element with the given value. If the value is a primitive value, `indexOf` finds the first element with that value. if the value is an object, it only finds the first element that has a reference to that object. `indexOf` uses the strict equality operator, `===`, to compare elements against the search value. If you provide a negative number as the second argument, `indexOf` uses that number to calculate the starting position of the search based on the distance from the end of the array. It does not search backward, however. `indexOf` returns `-1` if it can't find the desired value.

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```

#### `Array.prototype.lastIndexOf(searchElem, [fromIndex])`

The `lastIndexOf()` method returns the last index of the element that matches the `searchElem` if it is found within the array. The array is searched backwards, starting at `fromIndex`. Returns `-1` if not found.

### Arrays - Collection Methods

#### `Array.prototype.filter()`

The `filter` method returns a new array that includes all elements from the calling array for which the callback returns a truthy value. If no elements return a truthy value, it returns an empty array. `filter` doesn't mutate the caller. `filter`'s callback function can accept 1, 2, or 3 elements: the element value, the element index, and the array it is operating on.

```js
> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ]

> numbers
= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
```

`filter` iterates over the elements of the array. During each iteration, it invokes the callback function, using the value of the current element as an argument. If the callback returns a truthy value, `filter` appends the element's value to a new array. Otherwise, it ignores the element's value and does nothing. When `filter` finishes iterating, it returns the array of *selected* elements: the elements for which the callback returned a truthy value. In this example, `filter` selects all of the elements with a value greater than 4.

#### `Array.prototype.forEach()`

The `forEach` method executes a callback function for each element in the calling array. The return value of the callback function is not used by the `forEach` method. `forEach` always returns `undefined`. `forEach` performs simple iteration and returns `undefined`.

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

#### `Array.prototype.map()`

The `map()` method returns a new array populated with the return values of executing a callback function for each element of the calling array.

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

#### `Array.prototype.reduce((prevVal, currVal, currIndex, array) => {...}, initialValue)`

The `reduce()` method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

#### `Array.prototype.some(callbackFn)`

The `some()` method executes a callback function once for each element in the calling array, until it finds an occurrence where the callback function returns a **truthy** value. If such an element is found, the method **immediately** returns `true`. Otherwise, if the callback function returns a falsy value for all elements, the method returns `false`.

#### `Array.prototype.every(callbackFn)`

The `every()`method executes a callback function once for each element in the calling array, until it finds an occurrence where the callback function returns a **falsy** value. If such an element is found, the method **immediately** returns `false`. Otherwise, if callback function returns a truthy value for all elements, the method returns `true`.

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

## 3. `console.log()` vs. `return`

Output and return values are different concepts.

### `console.log`

When we invoke the `console.log` method, we're telling JavaScript to write something to the console. In Node, that is your screen; in your browser, it's the Console in your Developer Tools application. The term log is a synonym for printing or displaying something on the console.

```js
> console.log('Howdy')
Howdy // displayed on the console
= undefined // this is return value of the expression that returned nothing

> let a = console.log("Howdy")
> a
= undefined
```

The value returned by `console.log("Howdy")` is `undefined`, so that's the value to which `a` gets assigned. Therefore, `a` on the second line evaluates to `undefined`, and `node` shows it as the return value.

### `return`

JavaScript uses the `return` statement to return a value to the code that called the function: the **caller**. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

An expression is anything that JavaScript can evaluate, even if that value is `undefined` or `null`. Expressions do something, but they also return or evaluate to a value. The returned value may not always be what you expect.

The **return value** is the evaluated value of the expression.

## 4. Declarations, Initialization, Assignment, and Re-assignment

### Declaration

A declaration is a statement that asks the JavaScript engine to reserve space in memory for a variable with a particular name. Optionally, it may also specify an initial value for the variable. Note that regardless of whether we provide a value in a declaration, the variable is initialized. If we don't provide an explicit value, that initial value is `undefined`. Variable declarations, with or without initial assignment, always return `undefined`. In JavaScript, variables can be declared with the `let`, `const`, or `var` keywords. Be sure to always declare your variables and constants with `let` and `const`. Undeclared variables have global scope. When used in a declaration, the `=` is a syntactic token that tells JavaScript that you will supply an initial value for the variable. However, in an assignment, the `=` is called the assignment operator.

```sh
> let firstName = "Sohee"; // Declare and initialize variable with an explicit value on the same line.
= undefined
```

The variable `firstName` is declared and initialized with the explicit value of the string `'Sohee'` on the same line and returns `undefined`.

```js
let count = 1;
count = 2;
```

On line 1, we declare a global variable named `count`, and initialize it to a value of `1`, which is a primitive value. Line 2 reassigns `count` to a new primitive value, `2`.

### Initialization

When a variable is declared, it is initialized with the implicit value `undefined`. A more useful value can be assigned to a variable with an **initializer** in the declaration. Variables can be declared and initialized with an explicit value on the same line.

### Assignment

Variable assignment is the assigning of a value to a variable that has been declared and initialized using the assignment operator. When used in a declaration, the `=` is a syntactic token that tells JavaScript that you will supply an initial value for the variable. However, in an assignment, the `=` is called the assignment operator. The return value of an assignment is the value on the right-hand side of the `=` assignment operator.

### Reassignment

After a variable has been assigned, it can be re-assigned. This means that the variable can be made to refer to a new value. A key concept to understand is that when we re-assign a value to a variable, we are NOT changing the original value - we are putting a completely new value in the variable.

### Constant

The `const` keyword is similar to the `let` keyword, but it lets you declare and initialize **constant** identifiers. Constants have an **immutable binding** to their values. Unlike an ordinary variable, once you declare a constant, you **cannot** assign it a new value. The constant will continue to have that value until the constant is no longer needed. When naming constants, a common convention is to use all capital letters and digits in the name with underscores to separate words, or `SCREAMING_SNAKE_CASE`.

The `const` declaration creates a **read-only reference** to a value. It does not mean the value it holds is **immutable** —- just that the **variable identifier cannot be reassigned**. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be **altered**.

### Common Errors with Constants

* Declaration without an initial value supplied throws a `SyntaxError`.
  * When you declare a `const` in JavaScript, it requires an initial value to be supplied; otherwise, it will a throw a `SyntaxError: Missing initializer in a const declaration`.
* Reassignment of a `const` variable throws an `Uncaught TypeError`.
  * Reassigning a `const` in JavaScript will throw an `Uncaught TypeError: Assignment to a constant variable`.

```js
// Playing with constants
> let const FIRST_NAME = 'Mitchell';
undefined // => declaration (with or without an initial value)  always returns `undefined`.

// Common Errors
> let const LAST_NAME; // Declaration without an initial value -> SyntaxError: Missing initializer in `const` declaration
FIRST_NAME = 'Harry'; // Reassignment -> Uncaught TypeError: Assignment to a constant variable.
```

## 5. Equality: Loose and Strict Equality

In JavaScript, there are two equality operators: strict equality `(===)` and non-strict (or weak) equality `(==).` The `===` operator behaves as a traditional equality operator does in most languages: it evaluates as true when the two expressions on either side have the same **type** and **value**. On the other hand, the `==` operator *coerces* the values to the same type before comparing them. Coercions can produce unexpected and confusing behavior. Thus, it's good practice to use `===` rather than `==.` The same holds for the `!==` vs. `!=` operators: prefer `!==`.

### Strict Equality `===` Operator

The strict equality operator returns `true` when the operands have the **same type** and **value**, `false` otherwise. For an object, it will return `true` ONLY if both operands refer to the same object.

Unlike the non-strict equality operator, the strict equality operator always considers operands of different types to be different.

* **Different Types → `false` -** If the operands are of **different types**, returns `false`.
* **Same Object → `true` -** If both operands are objects, returns `true` only if they refer to the same object.
* **Both `null` or Both `undefined` →** If both operands are `null` or both operands are `undefined`, returns `true`.
* **Comparison with `NaN` → `false`** If either operand is `NaN`, returns `false`.
* **Otherwise**, compare the two operand's values:
  * Numbers must have the **same numeric values**.
    * `0`, `+0`, and `-0` are considered to be the same value.
    * `0n` is NOT `===` to `0`, `+0` or `-0`
  * Strings must have the **same characters in the same order.**
  * Booleans must be **both `true` or both `false`.**

### Loose Equality `==` Operator

The loose equality operator (`==`) checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, if the operands are different data types, it will attempt to **coerce** one or both operands before comparison.

1. `==` Comparison of a String and a Number → the **string** is a coerced to a number, and the values are compared.
2. `==` Comparison of a Boolean and a Number → the **boolean** is coerced to a number, and the values are compared.
3. `==` Comparison of a Boolean and a String → the boolean gets coerced to a number, and then the string is coerced to a number, the values are compared.
4. `==` Note that `null` and `undefined` are considered equivalent, **however** these values do NOT get coerced to 0.
5. `==` with Arrays and Objects - it considers two objects equal only when they're the same object. When an object is compared with a primitive value, the **object** is **coerced into a primitive value** and compared again using the `==` operator.
    * Empty Object `{}` - when compared to a string, is coerced to the string `'[object Object]'`
    * Array `[]` - when compared to a string, is coerced to the empty string `''`
    * Array (single value) `[4]` - when compared, is coerced to the value of the first element
    * Array (multiple values) `[4, 7]` - when compared, is coerced to the String `'4,7'` - notice NO SPACES!

```js
// Non-Strict Equality - String and a Number
'1' == 1  // coerces the string '1' to a number, and then compares them => returns true
1 == '1'  // coerces the string '1' to a number, and then compares them -> note that operand order does NOT matter => returns true

// Non-Strict Equality - Boolean and a Number
1 == true   // coerces the boolean true to a number 1, and then compares 1 and 1 => returns true
3 == true   // coerces the boolean true to a number 1, and then compares 1 and 3 => returns false
0 == false  // coerces the boolean false to a number 0, and then compares 0 and 0 => returns true

// Non-Strict Equality - Boolean and a String
'1' == true // coerces the boolean true to a number 1, and then the string '1' is coerced to a number, compares 1 == 1 => returns true
'' == false // coerces the boolean false to a number 0, and then the string '' is coerced to the number 0, compares 0 == 0 => returns true

// Non-Strict Equality - undefined and null
undefined == 0     // returns false -> note that undefined is NOT coerced to 0
undefined == ''    // returns false -> note that undefined is NOT coerced to 0
null == 0          // returns false -> note that null is NOT coerced to 0
null == ''         // returns false -> note that null is NOT coerced to 0
undefined == null  // returns true  -> interesting behavior in that undefined and null are considered equivalent

// Non-Strict Equality - Array Comparison
let arr = []  // returns undefined
arr == []     // returns false
arr == arr    // returns true -> HAS to be the SAME object

// Non-Strict Equality - Object and a Primitive
'' == {} // the plain object {}  is coerced into to the string '[object Object]', and is compared with the string '' which is coerced to the number 0, compares '[object Object]' and 0 => returns false
'[object Object]' == {}  // coerces the plain object{} to string '[object Object]' and compared with string '[object Object]' -> returns true
[] == '' // empty array is coerced to an empty string; both empty strings are coerced to the number 0 and compared => returns true
[] == 0  // empty array is coerced to an empty string; empty string is coerced to the number 0 and compared => returns true
[] == false // empty array is coerced to an empty string; empty string is coerced to the number 0, boolean false coerced to number 0 => returns true
```

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

All JavaScript functions are **first-class functions**. The key feature of first-class functions is that you can treat them like any other value. In fact, **all JavaScript functions are objects**. Thus, you can assign them to variables, pass them as arguments to other functions, and return them from a function call.

There is no limit to the number of functions that can be passed as arguments to a first-class function.

First-class functions can be passed to or returned by any other first-class function.

A first-class function does not have to accept a function argument or return a function value.

Functions in JavaScript are first-class values or first-class objects. This term is used to describe values that can be: assigned, passed, and returned. In JavaScript, functions can be:

* **assigned** to a variable or an element of a data structure (such as an array or object).
* **passed** as an argument to a function.
* **returned** as the return value of a function.

All **primitive values, arrays, objects,** and **even functions** meet this criteria! Not only can you invoke functions, but you can also **pass** them around your program like any other value. Since functions can be treated as values, we can **create** functions that **can take other functions as arguments and return other functions**.

### Higher-order Functions

A higher-order function is a function that takes other functions as arguments, OR a function that returns another function.

By definition, higher-order functions must accept a function as an argument or return a function. They can do both, of course, but they must do one of these.

A higher-order function can return any function, including a function that is itself another higher-order function.

### Callback Functions

Callback functions are functions that are passed as arguments to higher-order functions.

By definition, higher-order functions accept functions as arguments or return them. Since a callback function is passed as an argument to another function, that other function must be a higher-order function.

There is no limit to the number of callback functions that can be passed to another function, provided that function is prepared to deal with those callbacks.

E.g., callback function is given by the expression `arr => console.log(arr[0])`.

Note that all functions that accept callback functions as arguments are examples of higher-order functions (because they accept the callback function as an argument to the function).

## 8. Functions: Function Declarations, Function Expressions, and Arrow Functions

### Function Declaration

A function declaration defines a function with the specified parameters. Function declarations always begin with the keyword `function`.

```js
function functionName(zeroOrMoreParameters ...) {
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

A function expression is very similar to and has almost the same syntax as a function declaration (see function statement for details). The main difference between a function expression and a function declaration is that a function expression **does NOT have the keyword function** at the very beginning of a statement. Function expression also CANNOT be called before declaration - trying to call a function expression before declaration results in: `ReferenceError: Cannot access 'funcName' before initialization`.

```js
// Example of a Function Expression
let greetPeople = function() {
  console.log("Good Morning!");
};

greetPeople();
```

In the first example, we declare a variable named `greetPeople` and assign it to the function expression after the `=` sign. We can do that since JavaScript functions are first-class functions. The key feature of first-class functions is that you can treat them like any other value. In fact, all JavaScript functions are objects, meaning they can be assigned to variables, passed as arguments to functions, and be used as return values from functions.

```js
// Example of a Wrapped Function Expression
(function greetPeople() {
  console.log("Good Morning!");
});
```

This is a function expression, not a declaration, because the statement does NOT begin with the keyword function, it begins with a parentheses.

```js
// Example of a Function Expression in a Higher Order Function
function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`);
  };
}
```

The function `greeter()` is a function expression, and NOT a function declaration. This is because the `greeter()` function is preceded by the keyword 'return'

```js
let greetPeople = function () { // space after function keyword not required
  console.log("Good Morning!");
}

greetPeople();
```

### Arrow Functions

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations. Aside from syntax, arrow functions have **implicit returns.**

We can omit the `return` statement in arrow functions ***when and only when*** the function body **contains a single expression** (the expression may have subexpressions, but the **entire expression must evaluate to a single value**). Suppose it contains two or more expressions or statements. In that case, you must **explicitly return a value if you need it, and you must also use curly braces.**

```js
// Examples of Arrow Functions
let greetPeople = () => console.log("Hi!");
greetPeople(); // logs 'Hi'

// MDN Documentation - Unnamed Arrow Function with No Parameters
// Arrow Function (no parameters)
let a = 4;
let add = () => a + 100;
console.log( add() ); // logs 104

// MDN Documentation - Unnamed Arrow Function with 1 Parameter
// Traditional Function
function (a){
  return a + 10;
}

// Arrow Function
let addTen = a => a + 10;
console.log( addTen(40) ); // logs 50

// MDN Documentation - Unnamed Arrow Function with Multiple Parameters
// Traditional Function
function (a, b) {
  return a + b + 100;
}

// Arrow Function
let multiAdd = (a, b) => a + b;
console.log(multiAdd(5, 10)); // logs 15

// MDN Documentation - Unnamed Multi-line Function with Multiple Parameters
// Traditional Function
function (a, b) {
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}

// MDN Documentation - Named Functions with 1 Parameter
// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;
```

Below we define an arrow function `getNumber` that requires one parameter. The parentheses around the parameter name are optional in this case and are often omitted.

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

## 9. Functions: Function Definition and Invocation

### Function

A function is a procedure that lets you extract code and run it as a separate unit.

Before you can use a function, you must first define it with the reserved keyword, `function`. After the word `function`, you write the function's name followed by a pair of parentheses (`()`). After the closing parenthesis, the code you want to associate with the function -- the **function body** -- gets placed between curly braces (`{}`).

```js
// Function declaration example
function say(words) {
  // function body
  console.log(words)
}

say("hello"); // => logs 'hello'
```

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

### Function vs Method

Functions are called or invoked by typing their name, and providing optional values, called **arguments**. Arguments let you pass data from **outside** the function's scope **into the function**, so that it can access the data.

In a **function definition**, the names between parentheses are called parameters, and *arguments are the values of those parameters*.

**Function and Function Invocation -** Function Invocation (function calls) occur by writing parentheses after its name and passing it zero or more arguments. It uses the syntax `functionName(object)`.

**Method & Method Invocation -** Method invocation occurs when you prepend a variable name or value followed by a period `.` to a function invocation, `'xyzzy'.toUpperCase()`. We call such functions **methods**.

**Recall**: JavaScript uses the `return` statement to return a value to the code that called the function: the caller. Some functions are destructive - that means that they **mutate the caller**. Examples of this include `Array.prototype.pop()` and `Array.prototype.reverse()`.

## 10. Functions: Implicit Return Value of Function Invocations

All JavaScript function calls evaluate to a value. By default, that value is `undefined`; this is the **implicit return value** of most JavaScript functions. However, when you use a `return` statement, you can return a specific value from a function. This is an **explicit return value**. Outside of the function, there is no distinction between implicit and explicit return values, but it's important to remember that all functions return something unless they raise an exception, even if they don't execute a `return` statement.

**Caller -** JavaScript uses the `return` statement to *return a value to the code that **called** the function:* the **caller**. If you don't specify a value, it returns the implicit return value of `undefined`. Either way, the `return` statement **causes the function to stop running and returns control to the caller.**

**Predicates** are functions that always return a boolean value, i.e., `true` or `false.`

## 11. Functions: passing arguments into and return values out of functions

### Function Names and Parameters

Functions are called by typing their name and providing some optional values that we call **arguments**.

Function Names and Parameters are both considered variable names in JavaScript. Parameters are local variables - they are only defined locally, within the body of the function. Given the function `say`, we must provide a value, an argument, for the `word` parameter. For instance, we can pass the value `'hello'` as an argument to the `say()` function, which it uses to initialize the `words` parameter to. The function can use the value in any way it needs to. Note that the parameter's scope is the function definition; you can't use it outside of `say`.

```js
function say(word) {
  console.log(word);
}
```

In `say.js`, the function definition includes (`words`) after the function name. This syntax tells us that we should supply (**pass**) a single argument to the function when we call it. Arguments let you pass data from outside the function's scope into the function so it can access the data. If the function definition doesn't need access to outside data, you don't need any arguments.

### Function Composition & Return Value Importance

Function Composition is a process whereby JavaScript lets us use a function call, as an ***argument** to another function.* This can be done because functions are treated as *first-class objects in JavaScript* - they can be assigned to variables, passed as arguments to other functions [HOF], and returned from other functions [HOF].

Functions can perform an operation and **return** a result to the call location for later use. We do that with **return values** and the `return` statement.

JavaScript uses the `return` statement to return a value to the code that called the function: the **caller**. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

Functions that always return a boolean value, i.e., `true` or `false`, are called **predicates**. You will almost certainly encounter this term in future readings and videos, so commit it to memory.

We've seen that function calls always return a value, and we can pass that function call as an argument to another function call. Thus, it's vital to know what values our functions return. In the final analysis, those values get passed as arguments to other functions.

### Parameter vs Argument

The local variable names between parentheses `()` are called **parameters**, not arguments. *Arguments are the values you pass into the function* for each of those parameters. The **parameter values inside the function are also called arguments**. You can think of **parameters as placeholders**, while **arguments refer to the values that get stored in the placeholders.**

During execution, JavaScript makes the **arguments** passed to a function available to the function as local variables with the same names as the function's **parameters**.

When defining a function, you should use **parameters,** and when invoking a function, you should use **arguments**

```js
// Comparing Arguments and Parameters
function add(left, right) { // left & right are parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments
console.log(sum);    // logs 9 to the console
```

This code logs a string representation of the number `9` to the console. On line 6, we declare the global variable `sum` with the `let` keyword, and assign it the return value from calling the `add` function, and passing the values `3` and `6` as arguments to `add()`. The arguments `3` and `6` are assigned to the parameters `left` and `right` respectively. The function body creates a new local scope for variables declared with the `let` and `const` keywords. We declare a local variable `sum` and initialize it to the return value of adding left and right, which evaluates to `9`. We then return the value of `sum`, which is `9`, and `9` is assigned to the `sum` global variable.

### Default Parameters

When a function is defined, sometimes you may want to structure it so that it has a default value, when the caller does NOT provide an argument. This can be done with default parameters.

```js
// Example of Default Parameters
function say(words = "hello") {
  console.log(words + "!");
}

say("Howdy"); // => Howdy!
say();        // => hello!
```

The default parameter of `words` is assigned the value `'hello'`. In the case where the caller does NOT provide an argument, `words` is assigned the value `'hello'`.

### Nested Functions

Functions may also be nested within other functions. Such nested functions get created and destroyed every time the outer function runs. For variable scoping purposes, nested functions have their own variable scope, and follow the same rules of inner and outer scoped variables.

```js
function foo() {
  function bar() {
    console.log("BAR");
  }
  bar(); // => BAR
}

foo();
bar(); // ReferenceError: bar is not defined
```

The `bar()` function is only created within the scope of the `foo()` outer function, and the `bar()` function gets destroyed once the outer function `foo()` stops running. This is why a ReferenceError is thrown that says bar is not defined.

### Functions Create a New Scope

Note that a local variable only comes into existence when you call that function. The mere act of defining a function doesn't create any variables. The function declaration does, however, *define* the scope of the variables.

```js
function aFunc() {
  let a = 1;
}

aFunc();
```

For example, in the `aFunc` function above, the function body defines where variable `a`, when created, will be accessible. However, the variable `a` doesn't get created and assigned a value unless we invoke the function. When we call the function on line 5, a variable `a` is created, assigned the value `1` and immediately discarded once the function finishes execution and control returns to the main flow of the program.

Because of this, when we talk about the scope of a variable, it doesn't matter whether we ever execute the code. For instance, suppose we had the following complete program:

```js
function aFunc() {
  let foo = 1;
}
```

Though we never invoke `aFunc` and never create the `foo` variable, we still talk of it as in the scope of `aFunc`.

## 12. Mutability vs. Immutability vs `const`

### Mutability

Objects are usually (but not always) mutable, meaning you can add, remove, and change their various component values. Recall that Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays are objects) has a length property that contains a number: a primitive value.

Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.

### Immutability

Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values.

`NaN` is a number in JavaScript, so it is a primitive value

### `const` declaration

A `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a `const` object, but we can't change which object the `const` points to.

### Strings

Strings are similar to arrays in two ways:

1. String Character Reference - similar to arrays, characters of a String can be referenced using String Element Reference. Strings use an integer-based index that represents each character in the string. The index starts counting at zero and increments by one for the remaining index values. You can reference a specific character using this index.
2. String.length - similar to arrays, Strings also have a `length` property
3. Similar Methods - the following methods are available to both Strings and Arrays:
    * `Array.prototype.slice()`; `String.prototype.slice()`
    * `Array.prototype.concat()`; `String.prototype.concat()`
    * `Array.prototype.includes()`; `String.prototype.includes()`

However, although Strings can be referenced using String Character Reference (similar to Array Element Reference); Array Elements can be **assigned** and **reassigned**; whereas String Characters **CANNOT** be assigned or reassigned. Attempting to perform String Character Assignment will not throw an error, but it does NOT affect the Sting. This is because Strings are immutable. In order to make modifications to a string, you must create a new String with the desired changes, and reassign the value to a new variable.

```js
// Array Element Re-Assignment
let arr = [ 1, 2, 3 ]; // returns undefined
arr[0] = 5;            // returns 5
arr;                   // [5, 2, 3]

// Attempted String Element Re-Assignment (no error is thrown, but the string is NOT affected)
let numString = '123'                  // returns undefined
numString[0] = '5';                    // returns '5'
numString;                             // returns '123'
numString = '5' + numString.slice(1);  // returns '523'
numString;                             // returns '523'
```

## 13. Naming Conventions (legal vs idiomatic)

### Idiomatic

Names that follow the naming conventions in the [Naming Conventions section of the JavaScript Book](https://launchschool.com/books/javascript/read/preparations#namingconventions) are referred to as **idiomatic names**. In particular, whether a name is idiomatic or not depends on what kind of name we're describing.

Category | Name | Notes
---------|----------|---------
Non-constant variables and object properties | `employee` |
--------- | `number` |
--------- | `fizzBuzz` |
--------- | `speedOfLight` |
--------- | `destinationURL` | URL is an acronym
--------- | `m00n` |
Constructor functions and classes | `Cat` |
--------- | `BoxTurtle` |
--------- | `FlightlessBird |
Other functions |`parseURL`| URL is an acronym
--------- |`goFaster`|
Configurations and magic constants |`ABSOLUTE_PATH`|
--------- |`TODAY`|
Other`const` names | `employeeOfMonth`| Local style
--------- |`HairyCat`| Local style
--------- |`ABSOLUTE_PATH` | Local style

The following [tables](https://github.com/hyosung11/Launch-School/blob/d578bc76f9ed805b2d255d5761622e7261b692a8/Courses/JS101/Lesson-2-Small-Programs/notes.md) show which names are and aren't idiomatic in the various categories and when.

### Legal / Valid But Non-Idiomatic

Note that non-idiomatic names are not invalid names. Non-idiomatic names are commonly used by external libraries to provide names that are easy to type yet unlikely to conflict with names in other libraries.

Category  | Name  | Notes
----------|-------|------
Universally non-idiomatic  | $number  | Begins with $
fizz_buzz  | snake_case not allowed  |
fizzBUZZ  | BUZZ is not an acronym  |
_hello  | Begins with _  |
goodbye_  | Ends with _  |
milesperhour  | Undifferentiated words  |
MILESPERHOUR  | Undifferentiated words  |
Non-constant variables and object properties  | Employee Begins with capital letter  |
fizzBUZZ  | BUZZ is not an acronym  |
FIZZ_BUZZ  | SCREAMING_SNAKE_CASE  |
Constructor functions and classes  | cat  | Begins with lowercase letter
makeTurtle  | Begins with lowercase letter  |
FIZZ_BUZZ  | SCREAMING_SNAKE_CASE  |
Other functions  | ParseURL  | Begins with capital letter
FIZZ_BUZZ  | SCREAMING_SNAKE_CASE  |
Configuration and magic constants  | absolutePath  | Not SCREAMING_SNAKE_CASE
Today  | Not SCREAMING_SNAKE_CASE  |

### Invalid Names

Name  | Notes
------|------
42ndStreet  | Begins with number
fizz-buzz  | Hyphen not allowed
fizz.buzz  | Looks like property reference

### Avoid Magic Numbers

A magic number is a number (or other simple value) that appears in your program without any information that describes what that number represents. For instance, a card game in which each player is dealt 5 cards may use the number `5` at various points in the program, such as a loop that deals the cards or when determining how many cards a player should receive to get back to the 5-card level. If you just use the number `5` in your program, there's no way to tell by just looking at the code why you are using that particular number. The situation becomes even more confusing when you use the same number in other contexts. For instance, your game may also use a best-of-five approach to determine the overall winner.

The way to avoid magic numbers is to use constants.

## 14. Objects: Object Properties

### Objects

Objects are data structures that store a collection of key-value pairs. Each item in the collection has a name that is called the key and an associated value. Key-value pairs are also called object properties in JavaScript. We can also use "property" to refer to the key name.

An object's keys are strings, but the value can be any type, including other objects. If a non-string key value is attempted, JavaScript will coerce the non-string key value to a string.

### Key-Value Pair

Objects can be created using object literal syntax. Braces (`{}`) delimit the list of key-value pairs contained by the object. Each key-value pair ends with a comma (`,`), and each pair has a key, a colon (`:`), and a value. The comma that follows the last pair is optional. Though the keys are strings, we typically omit the quotes when the key consists entirely of alphanumeric characters and underscores. The values of each pair can be any type.

### Dot Notation vs Bracket Notation

To access a specific value in an object, use **dot notation**, or **bracket notation.**

* **Dot Notation -** With dot notation, a `.` and a key name is placed after the variable that references the object. When dot notation is used, the property name must be a valid JavaScript ***identifier*** - this means that it can contain letters, `$`, `_` and digits - but it may not START with a digit. If you are trying to use the *value stored in a variable as a property name*, you cannot use dot notation - because expressions are **NOT** permitted - only a valid JavaScript identifier can be used as the property name. Trying to access a property using incorrect dot notation syntax throws a `SyntaxError`.

* **Bracket Notation -** With bracket notation, the property is the expression within the square brackets, that is evaluated and coerced to a string, if it is not already a string. If you have a variable that contains a key's name, you must use bracket notation, and the variable name MUST be unquoted.

LS - with bracket notation, we write the key as a **quoted string** and put it **inside square brackets**. Most developers prefer **dot notation** when they can use it. However, if you have a variable that **contains a key's name,** you must use bracket notation, and the variable MUST be unquoted.

```js
// Dot Notation
let character = {}
character.name = 'Helen'; // returns 'Helen'
character.'age' = 13;     // Uncaught SyntaxError: Unexpected string => NO illegal identifier characters such as punctuation

// Bracket Notation
character[age] = 13;      // Uncaught ReferenceError: age is not defined => the key must be a quoted string
character['age'] = 13;    // returns 13
let type = 'friend'       // returns undefined
character[type] = 'Patty'; // returns 'Patty' => notice that the variable type does NOT require brackets
```

### Deleting Properties

The `delete` operator removes a key-value pair from the object and returns `true` unless it cannot delete the property (for instance, if the property is non-configurable).

```js
let person = {};
person.age = 13;
person['name'] = 'Joe';
delete person.name;   // returns true
delete person['age']; // returns true
person; // logs {}
```

### `const` with Objects

If a variable declared with `const` is initialized with an object, you can't change what object that variable refers to. You can, however, modify that object's properties and property values. Essentially, a `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the contents of that thing.

```sh
> const MyObj = { foo: "bar", qux: "xyz" }
> MyObj.qux = "hey there"
> MyObj.pi = 3.1415
> MyObj
= { foo: 'bar', qux: 'hey there', pi: 3.1415 }

> MyObj = {} // Uncaught TypeError: Assignment to constant variable.
```

### `Object.freeze(obj)`

The `Object.freeze()` method freezes an object. Note that `Object.freeze()` only freezes the object that is passed to it. If the object passed to it contains other objects, those objects won't be frozen. For example, if we have a nested array, the nested objects can still be modified after passing it to `Object.freeze`. Use `Object.freeze` with objects to freeze the property values of an object (like with arrays).

Trying to modify a frozen object with **assignment** does not throw an error, but it fails silently.

Trying to modify a frozen object with a **destructive** method (e.g., `Array.prototype.push()`) throws a TypeError / raises an exception.

```js
const MyObj = Object.freeze({ foo: "bar", qux: "xyz" });
MyObj.qux = "hey there";
MyObj; // => { foo: 'bar', qux: 'xyz' }

// To determine if an object is frozen, use the `Object.isFrozen` method with returns `true` if an object is frozen, and returns `false` otherwise.
Object.isFrozen(myObj); // => returns true
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

### `Object.keys()`

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

### `Object.values()`

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

### `Object.entries()`

While `Object.keys` and `Object.values` return the keys and values of an object, respectively, the `Object.entries` static method *returns an array of nested arrays*. Each nested array has two elements: one of the object's keys and its corresponding value:

```js
let person = { name: 'Bob', age: 30, height: '6ft' };

console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
```

### `Object.assign()`

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

### Pass-by-value (Primitive Values - immutable)

Pass-by-value relates to **primitive** values that are passed as arguments into a **function**. With all primitive values, the value is passed by value and the function will receive a **copy** of the original value.

When you pass primitive values to functions, you can treat JavaScript like pass-by-value. No operation performed on a primitive value can permanently alter the value. In other words, when you pass a primitive value to a function, you won't be able to affect the value of the argument passed to the function.

Here's an example of pass-by-value:

```js
function getNumber(num) {
  /* The `num` parameter is initialized to a new primitive number `7`. Although `num` references `7`, it is not the same `7` that `luckyNumber` references in memory. They are distinct. */

  return num;
}

let luckyNumber = 7;
getNumber(luckyNumber); // returns 7
```

### Pass-by-reference (Objects -> mutable)

Pass-by-reference relates to **object** values that are passed into a function. When we declare and initialize a variable to an object value, e.g., `let arr = [1, 2, 3]`, we are initializing that variable to hold a *reference* which points to the actual object in memory. Therefore, when we pass `arr` into a function, we pass the reference that points to the actual object. Therefore, any destructive changes that the function may implement on the Object affects the original object as well.

With objects, JavaScript exhibits a combination of behaviors from both pass-by-reference as well as pass-by-value. Some people call this pass-by-value-of-the-reference or call-by-sharing. Whatever you call it, the most important concept you should remember is:

When an operation within the function mutates its argument, it affects the original object.

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

### Simple Assignment

Simple assignments in JavaScript work a lot like pass-by-value and pass-by-reference, but it is **incorrect to speak of them in terms of pass-by-value or pass-by-reference.**

This similarity is a useful mental model. However, it's incorrect to speak of assignment in terms of pass-by-value or pass-by-reference. In JavaScript, those terms only apply when calling and returning from functions, not assignments. It is more correct to state that:

```js
let number = 1;
let newNumber = number; // is this pass by value? -> NO because the values are distinct, if you increment one, the other is unaffected

let arr = [1, 2, 3];
let newArr = arr; // is this pass by reference? -> NO because arr and newArr point to the exact same array
```

In the above code, `number` and `newNumber` have the same values, but those values are distinct - if you increment one, the other is unaffected. Thus, it **looks** a lot like pass-by-value.

* **Accurate Terminology -** `number` is declared and initialized to the value `1`; and `newNumber` is declared and initialized to the value `1`. Although the variable `number` and `newNumber` both contain the value `1`, the values are **stored in two different memory locations, each one associated with that specific variable.** That means that if you later change the value stored in one of those memory locations, it does NOT affect the value stored in the other memory location, **even** if they started off with the same values. Variables that contain primitive values are **independent** of one another.

Therefore, if you attempt to increment `number`, `newNumber` is unaffected - this is because the values are distinct and the variables are independent of one another.

On the other hand, `arr` and `newArr` point to the exact same array. If you use `arr` to modify the array, the array referenced by `newArr` also changes. That **looks** like pass-by-reference.

* **Accurate Terminology -** On `line 1`, we declare the variable `arr` and initialize it to point to the array `[1, 2, 3]`. On `line 2` we declare the variable `newArr` and initialize it to point to the same array `[1, 2, 3]` that `arr` points to. Since `newArr` and `arr` point to the same array object, they are considered aliases. This means that if we were to perform a destructive action on the array object (i.e. `arr.push(4)`) we would see the updated array reflected when we inspect `arr` AND when we inspect `newArr` Both would display `[1, 2, 3, 4]`

## 17. Primitive Values, Objects and Type Coercion

### Data Types

Data types are used to represent different kinds of data. Data types are used by programs to determine what they can or cannot do with a given piece of data.

`typeof` operator - to see what type a particular value has, you can use the typeof operator. `typeof` returns a string that contains the type of its operand's value.

Literals - data type values can be represented by literals. A literal is any notation that lets you represent a fixed value in source code.

```js
'Hello, world!'     // string literal
3.141528            // numeric literal
true                // boolean literal
{ a: 1, b: 2 }      // object literal
[ 1, 2, 3 ]         // array literal
undefined           // undefined literal
```

### Primitive Values

The seven primitive data types are strings, numbers, booleans, `null`, and `undefined`, bigints, and symbols. Primitive types are the simplest, most basic types in JavaScript.

With (most) primitive values, the **actual value** of the variable gets stored in allocated memory.

Primitive values are always *immutable*; they don't have parts that one can change. Such values are said to be **atomic**; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or *reassign* it: give it an entirely new value. All operations on primitive values evaluate as new values. Even something like `0 + 0` evaluates to a new value of `0`.

### Objects are Complex Values

Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays **are** objects) has a length property that contains a number: a primitive value. Objects are usually (but not always) mutable: you can add, remove, and change their various component values.

Objects include, but aren't limited to, the following types: Simple Objects, Arrays, Dates, and Functions.

### Neither a Primitive Value or an Object

Objects and primitive values are the data and functions that you use in your program. Anything that isn't data or a function is neither a primitive value nor an object. That includes:

* variables and other identifiers such as function names
* statements such as `if`, `return`, `try`, `while`, and `break`
* keywords such as `new`, `function`, `let`, `const`, and `class`
* comments
* anything else that is neither data nor a function

### Type Coercion

Type coercion is the conversion of one type of value into another.**Explicit type coercion** lets the programmer decide what to do, whereas **implicit type coercion** lets the JavaScript engine choose.

#### Explicit Type Coercion

**Explicit type coercion** happens when the programmer intentionally uses one of the many built-in functions and operators to coerce one type of value to another.

##### Strings to Numbers (Numeric Coercion)

`Number()` - when used as a function converts a string or other value to the Number type. If the value can't be converted, it returns `NaN`.

* Can't convert string to a Number - returns the value `NaN`.
* Single element array that consists of a Number - returns the number.
* Called on an empty string `''`, `null`, or `undefined` - returns `0`.
* Called on a multi-element array, or an object - returns `NaN`.

`Number('')` - attempting to convert an empty string or whitespace with `Number('')` returns `0`.
`Number(true)` || `Number(false)` - coerces the boolean value `true` to `1`, and the boolean value `false` to `0`.

```js
// Examples of Number Coercion
let one = Number('1')         // returns undefined
one                           // returns 1
typeof one                    // returns 'number'
let friend = Number("cat")    // returns undefined
friend                        // returns NaN
typeof friend                 // returns 'number' -> typeof NaN is a number and not a standalone primitive data type (null, undefined)
Number(' ')                   // returns 0 -> coercing an empty string to a number returns 0 (because an empty string is false)
Number(null)                  // returns 0
Number({})                    // returns NaN
Number([])                    // returns 0
Number([undefined])           // returns 0
Number([4])                   // returns 4
Number([1, 2, 3])             // returns NaN
Number(undefined)             // returns NaN
Number(true)                  // returns 1
Number(false)                 // returns 0
```

`parseInt(string, radix)` - function parses a **string** argument and returns an **integer number** of the specified radix (the base in mathematical numeral systems). An unusual feature of `parseInt` is that it converts strings to numbers even when the string contains non-numeric characters. As long as the string begins with a digit (can be optionally preceded by a `+` or `-` sign) `parseInt` returns an integer number.

`parseFloat(string)` - function parses an argument (converting it to a string first if needed) and returns a **floating point number**. `parseFloat` parses the **numeric** part of the string, and *stops parsing once* it finds a character that can't be part of a number. `parseFloat()` does not accept a radix argument.

```js
// More Examples
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

##### Coercing Values to Numbers Using `+` (Unary Operator)

The unary `+` operator attempts to coerce a value to a number. It works like the Number function, but is more succinct. Although it is more succinct, for clarity - consider using `Number(value)` as this method makes your intention very clear.

```js
// Examples of the Unary operator (+)
> +""     // returns 0
> +'1'.   // returns 1
> +'2.3'  // returns 2.3
> +[]     // returns 0
> +'abc'  // returns NaN
```

##### Numbers to Strings (String Coercion)

* `Object.prototype.toString()` - this method returns a string representation of a value.
  * Throws an Error for the data types - `null` and `undefined`.
  * Number Literals - This method does **not work on a number literal** - see examples.
  * Objects - on all objects (empty or non-empty) this method returns `[object Object]`

* `Array.prototype.toString()` - converts every element of an array to a string, then concatenates them all with a `,` between each string. `null` and `undefined` are treated as **empty values**.

* `String()`- performs type conversion when called as a function, and this function works on both `null` and `undefined`. This is useful because using `Object.prototype.toString()` can lead to a program-halting error if the value turns out to be `undefined` or `null`.
  * Empty Array - when the `String()` function is called on an empty array, an empty string `''` is returned
  * Single Element Array - when the `String()` function is called on a single element array, the element is returned
  * Multi-element Array - when the `String()` function is called on a multi-element array, it converts every element of an array to a string, then concatenates them all with a `,` between each string. `null` and `undefined` are treated as **empty values.**

```js
> String(20)
= '20'

// Examples using toString() Method with Number Literals
let number = 42     // returns undefined
number.toString()   // returns '42'
42.toString()       // returns SyntaxError: Invalid or unexpected token
// Note that JavaScript doesn't let you call a method directly on a number literal, we first assign 42 to a variable before we call the toString() method
(42).toString()     // returns '42' -> alternatively, you can wrap the number in parentheses
42..toString()      // returns '42' -> alternatively, you can use two dots

// Examples using toString() with Booleans
true.toString()   // returns 'true'
false.toString()  // returns 'false'

// Example using Array.prototype.toString()
[1, 2, 3].toString() // returns '1,2,3'
[1, null, 2, undefined, 3].toString() // returns '1,,2,,3' => null and undefined are treated as EMPTY values

// Examples of Object.prototype.toString()
let obj = {a: 'foo', b: 'bar'}  // returns undefined
obj.toString()                  // returns '[object Object]'

// toString() - Attempting to call on null and undefined
undefined.toString() // Uncaught TypeError: Cannot read property 'toString' of undefined
null.toString()      // Uncaught TypeError: Cannot read property 'toString' of null

// Examples of String() Function
String(42)        // returns '42'
String([1, 2, 3]) // returns '1,2,3'
String({ a: 'foo', b: 'bar' }) // returns '[object Object]'

// String() - null and undefined
String(null)      // returns 'null'
String(undefined) // returns 'undefined'
```

##### Template Literals

Inside template literals, JavaScript implicitly coerces interpolation expressions like `${something}` to string values. Don't write `${something.toString()}` or `${String(something)}`.

#### Implicit Type Coercion

**Implicit type coercion** happens when you perform an operation involving values of two different types and JavaScript coerces the values to have the same type; that type varies based on the specific combination of types involved in the original expression. How different values get coerced depends on the operation. The most common operations in this context are `==` and `+`.

The `==` non-strict equality operator implicitly coerces one of its operands when the operands have different types. The most common case occurs when comparing a string with a number:

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

##### Implicit Type Coercion with the `==` Operator

1. `==` Comparison of a `String` and a `Number` → the **string** is a coerced to a number, and the values are compared.
2. `==` Comparison of a `Boolean` and a `Number` → the **boolean** is coerced to a number, and the values are compared.
3. `==` Comparison of a `Boolean` and a `String` → the **boolean** gets coerced to a number, and then the **string** is coerced to a number, the values are compared.
4. `==` Note that `null` and `undefined` are considered equivalent, **however** these values do NOT get coerced to 0.
5. `==` with Arrays and Objects - when used with two objects, it considers the two objects equal **only when they're the same object**.
6. `==` with Objects and Primitive Values - when an object is compared with a primitive value, the **object** is **coerced into a primitive value** and compared again using the `==` operator.
    * Empty Array - an empty array is coerced to the empty string `''`
    * Object - all object are coerced to the string `'[object Object]'`

```js
// Non-Strict Equality - String and a Number
'1' == 1  // coerces the string '1' to a number, and then compares them => returns true
1 == '1'  // coerces the string '1' to a number, and then compares them => returns true

// Non-Strict Equality - Boolean and a Number
1 == true   // coerces the boolean true to a number 1, and then compares 1 and 1 => returns true
3 == true   // coerces the boolean true to a number 1, and then compares 1 and 3 => returns false
0 == false  // coerces the boolean false to a number 0, and then compares 0 and 0 => returns true

// Non-Strict Equality - Boolean and a String
'1' == true // coerces the boolean true to a number 1, and then the string '1' is coerced to a number 1, compares 1 === 1 => returns true
'' == false // coerces the boolean false to a number 0, and then the string '' is coerced to the number 0, compares 0 === 0 => returns true

// Non-Strict Equality - undefined and null
undefined == 0     // returns false -> note that undefined is NOT coerced to 0
undefined == ''    // returns false -> note that undefined is NOT coerced to 0, the string '' is coerced to the number 0
null == 0          // returns false -> note that null is NOT coerced to 0
null == ''         // returns false -> note that null is NOT coerced to 0, the string '' is coerced to the number 0
undefined == null  // returns true  -> interesting behavior in that undefined and null are considered equivalent

// Non-Strict Equality - Array Comparison
let arr = []  // returns undefined
arr == []     // returns false
arr == arr    // returns true -> HAS to be the SAME object

// Non-Strict Equality - Object and a Primitive
'' == {} // the empty object {} is coerced into the string '[object Object]', and is compared with the string '' which is coerced to the number 0, compares '[object Object]' === 0 => returns false
'[object Object]' == {} // coerces the empty object {} to string '[object Object]' and compares with the string '[object Object]' => returns true
{a: 1} == '[object Object]'// coerces the object {a: 1} to string '[object Object]' and compares with string '[object Object]' => returns true
[1, 2] == '1,2' // the array [1, 2] is coerced to the string '1,2' - both strings are compared => returns true
[] == '' // empty array is coerced to an empty string; both empty strings are coerced to the number 0 and compared => returns true
[] == 0  // empty array is coerced to an empty string; empty string is coerced to the number 0 and compared => returns true
[] == false // empty array is coerced to an empty string; empty string is coerced to the number 0, boolean false coerced to number 0 => returns true
```

##### Implicit Coercion with the Binary `+` Operator

1. `+` of a `String` and Another Value - the other operand is coerced to a string and concatenated.
2. `+` when both operands are a **combination** of `numbers`, `booleans`, `null`, or `undefined`, they are **converted** to numbers (`Number()`) and added together.
3. `+` when one of the operands is an Object, both operands are converted to strings and concatenated together.

`undefined` and `null`

* `Number(undefined)` - returns `NaN`;  `String(undefined)` - returns `'undefined'`
* `Number(null)` - returns `0`; `String(null)` - returns `'null'`

```js
// Binary Operator - String and Another Value
'hi' + {}        // returns 'hi[object Object]'
'hi' + []        // returns 'hi' => note that the empty array is coerced to an empty string
'hi' + true      // returns 'hitrue'
'hi' + 5         // returns 'hi5'
'hi' + undefined // returns 'hiundefined'
'hi' + null      // returns 'hinull'

// Binary Operator - Numbers, Booleans, Null, undefined
1 + true;       // true is coerced to the number 1, and 1 + 1 => returns 2
1 + false;      // false is coerced to the number 0, and 1 + 0 => returns 1
true + false;   // false is coerced to the number 0, and true is coerced to the number 1 => returns 1
null + false;   // Number(null) is 0 + Number(false) is 0 => 0 + 0 => returns 0
null + null;    // Number(null) is 0 + Number(null) is 0 => 0 + 0 => returns 0
1 + undefined;  // Number(undefined) returns NaN, NaN + 1 => returns NaN

// Binary Operator - one of the operands is an Object
[1] + 2;        // String([1]) returns '1' + number 2 -> coerced into the string '2' => returns "12"
[1] + '2';      // String([1]) returns '1' + string '2' => returns "12"
[1, 2] + 3;     // String([1, 2]) is converted to the string '1,2'; the number 3 is converted to '3' => '1,2' + '3' => '1,23'
[] + 5;         // String([]) is converted to the string '' + number 5 (converted to '5') => '' + '5' => returns '5'
[] + true;      // String([]) is converted to the string '' + boolean true (converted to 'true') => '' + 'true' => returns 'true'
42 + {};        // number 42 is converted to the string '42' + String({}) is converted to the string [object Object] => '42[object Object]'
```

##### Implicit Coercion with Relational Operators (`<=, <, >=, >`)

The relational operators, `<, >, <=, and >=` are defined for numbers (numeric comparison) and strings (lexicographic order).

String Comparisons - JavaScript compares them lexicographically. When comparing strings, the comparison is character-by-character. JavaScript moves from left-to-right in the strings looking for the first character that is different from its counterpart in the other string. Once it finds a character that differs, it compares that character with its counterpart, and makes a decision based on that. If both strings are equal up to the length of the shorter string as in the next to last example, then the shorter string is considered less than the longer string.

1. **When Both Operands are Strings** - JavaScript compares them lexicographically.
2. **Otherwise** - JavaScript converts both operands to numbers before comparing them.

```js
11 > '9';       // one operand is a number -> the string '9' is coerced to the number 9 and compared => 11 > 9 => returns true
'11' > 9;       // one operand is a number -> the string '11' is coerced to the number 11 and compared => 11 > 9 => returns true
123 > 'a';      // one operand is a number -> the string 'a' is coerced to NaN and compared => any comparison with NaN => returns false
123 <= 'a';     // one operand is a number -> the string 'a' is coerced to NaN and compared => any comparison with NaN => returns false
true > null;    // both operands are NOT strings -> true is coerced to 1 and null is converted to 0 => 1 > 0 => returns true
true > false;   // both operands are NOT strings -> true is coerced to 1 and false is coerced to 0 => 1 > 0 => returns true
null <= false;  // both operands are NOT strings -> null is converted to 0 and false is coerced to 0 => 0 <= 0 -> returns true
undefined >= 1; // both operands are not strings -> undefined is converted to NaN => any comparison with NaN => returns false
```

##### Best Practices

* Explicit Type Coercion - always use explicit type coercion
* Strict Equality & Inequality - always use strict equality and strict inequality operators (`===` and `!==`)/
* Two Exceptions
  * Don't use `String()` or `toString()` inside `${...}` expression in template literals.
  * Use the unary `+` operator to convert strings to numbers.

#### Primitive Values & Objects Summary

1. Every value in JavaScript is either a primitive or an object.
2. Primitives are atomic values.
3. Objects are "compound" values made up of primitives or other objects.
4. Primitive values are **immutable**. You can't add to, remove from, or otherwise change a primitive value. Any operation performed on a primitive value returns a new primitive value.
5. Objects are **mutable**. Certain operations on objects can change the object in place. All variables that have a reference to that object will see that change.

## 18. Side-effects

Ideally, you want a function to do one thing and limit its responsibility. A function is said to have **side-effects** if it does any of the following:

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

#### String Element Assignment

Recall that JavaScript strings are immutable, primitive values. Attempting to use element assignment on a string will not throw an error, but it does not modify the string.

```js
let str1 = 'hello'; // returns undefined
str1[0] = 'b';      // returns 'b'
str1;               // returns 'hello' -> notice how no modification to the string was made, because strings are immutable
```

To modify a string, create a new string with the desired changes.

#### Out of Bounds Indices of Strings

Attempting to reference an out of bound index returns `undefined`. This is true for both positive and negative string indices.

```js
let str1 = 'hello'

str1[9] // => returns undefined
str1[-5] // => returns undefined
```

### String Length

The `length` property of a String object contains the length of the string in UTF-16 code units. Unlike arrays, the `length` is a read-only data property of string instances.

### String Methods

You can think of strings as collections of characters. You can access individual characters or multiple characters of the string and can loop through all the characters by using the `length` property in conjunction with `for` and `while` loops.

Since JavaScript strings are **primitive values**, any operation performed on them *results in a new string*. None of the methods that operate on strings mutate the string since JavaScript strings are **immutable**.

#### `String.prototype.concat()`

The `concat()` method concatenates the string arguments to the calling string and returns a new string. If the arguments are not of the type string, they are converted to string values before concatenating. `concat` can take more than one string as arguments: `concat(str1, str2, ..., strN)`.

It is strongly recommended that the assignment operators `+` and `+=` are used instead of the `concat()` method.

```sh
> let str = 'Hello'
undefined
> str.concat(' World!')
'Hello World!'
> str
'Hello'
```

#### `String.prototype.includes()`

The `includes` method takes a string as the argument and returns a boolean signifying whether that string exists within the string that `includes` was called on. The search is case-sensitive.

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

// `NaN` argument is treated as if it were `0`
'abcdefghi'.slice(NaN) // => 'abcdefghi'
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

The `substring` method takes a start index and an end index and returns a substring from the start of the index up to, but not including, the end index. `substring` does not mutate the caller and returns a new string.

Negative arguments provided to `substring` are treated as if they were `0`.
`NaN` arguments are treated as `0`.

```js
const str = 'Mozilla';

// Returns a substring from the start index up to, but not including, the end index.
console.log(str.substring(1, 3));
// expected output: "oz"

// Returns a substring from the start index to the end of the string
console.log(str.substring(2));
// expected output: "zilla"

// If the start index is greater than the end index, the arguments are swapped.
console.log(str.substring(5, 3));
//  => 'il'
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

Sometimes, you want to convert only the first character of a string to it uppercase equivalent. You can do that by combining `toUpperCase()` with `slice()` and any of the string concatenation methods:

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

The ability to express **true** or **false** is vital in any programming language. It helps us build *conditional logic* and to understand the state of an object or expression. Typically, we capture the notion of whether a value is true or false in a **boolean** data type. A boolean is an **object** whose only purpose is to *convey whether it is true or false*.

In the assessment, we want you to be very clear about the distinction between *truthy* and *falsy* values and the boolean values `true` and `false`.

### Boolean

A boolean is a data type whose only purpose is to convey whether something is `true` or `false`.

### Truthiness

Truthiness differs from Boolean values. In JavaScript, almost all values *evaluate as true* or are *truthy*. The only values that *evaluate as false* or are *falsy* are (0 funN is empty ''):

* `0`
* `false`
* `undefined`
* `null`
* `NaN`
* `''`

In JavaScript, the *falsy* values `0`, `false`, `undefined`, `null`, `NaN`, `""` are all said to *evaluate to false* when used in a boolean context. All other values, the *truthy* values, are all said to *evaluate to true*. Note that saying that a value evaluates to true or false is **not** the same as saying that those values **are** `true` or `false`, or that they are **equal to** `true` or `false`.

```js
// All of These Values are Considered `truthy`
if (true)
if ({})
if ([])         // <-- considered truthy
if (42)
if ("0")        // <-- considered truthy
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

Suppose we ask you to describe what is happening in this code:

```js
let a = "Hello";

if (a) {
  console.log("Hello is truthy");
} else {
  console.log("Hello is falsy");
}
```

If your answer says that "`a` is `true`" or that "`a` is equal to `true`" in the conditional on line 3, we would likely deduct points from your score. A much better answer would say that "`a` is truthy" or that "`a` evaluates to true" on line 3.

To sum up:

* Use "evaluates to true" or "is truthy" when discussing expressions that only have to be truthy.
* Use "evaluates to false" or "is falsy" when discussing expressions that only have to be falsy.
* Do not use "is `true`" or "is equal to `true`" unless you are specifically discussing the boolean value `true`.
* Do not use "is `false`" or "is equal to `false`" unless you are specifically discussing the boolean value `false`.

Notice that every `if` statement has an expression that evaluates as true or false. However, the expression doesn't have to be one of the boolean values, `true` or `false`. JavaScript can coerce any value to a boolean value, and that's what it does in conditional contexts like the `if` statement.

```js
// Example 1
a = 5
if (a) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

// Example 2
b = 0
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
```

The first example logs "how can this be true?" while the second logs "it is not true." This works since JavaScript coerces the value `5` to `true`, and the value `0` to `false`.
JavaScript can coerce any value to a boolean. Thus, you can use any expression in a conditional expression.

Comparison operators return a boolean value: `true` or `false`.

Expression involving the logical operators of `||` and `&&` use short-circuit evaluation; they also return **truthiness** values.

## 21. Variable Scope (especially how variables interact with function definitions and blocks)

### Variable Scope

A variable's scope is the part of the program that can access that variable by name. Specifically, variable scoping rules describe how and where the language finds previously declared variables.

In JavaScript, we have two different types of scope: **global** (outer) and **local** (inner). Any variable declared inside a function or block is a local variable - everything else is a global variable.

There are two types of variables, based on where they are accessible: global and local variables. Global variables are available throughout a program, while local variables are confined to a function or a block. The keyword used (`let` and `const`) and the location where the variable is declared combine to determine if the variable is global or local.

### Block

A block is a segments of one or more statements and expressions grouped by opening and closing curly braces `{}`. Blocks appear in:

* Control Flow - `if`, `else if`, `else`
* Loops - `while`, `do...while`
* For Statements - `for`
* Switch and Try/Catch Statements - `switch`, and `try...catch` statements
* On Their Own - by themselves `{}`

Note that the `{}` that surround an **object literal** are NOT a block and **function bodies** are also ***technically*** NOT blocks, however since they look and behave so much like blocks, many developers do not distinguish between the two.

Variables declared **within** a block scope are **only available to the block**. Variables initialized **outside** of the block scope are ***available within the block,*** and ***after the block ends.***

Code Examples:

```js
// Variables declared within a block scope are only accessible within the block
if (1 === 1) {
  let a = 'hello'
  console.log(a) // => logs 'hello'
}

console.log(a) // Uncaught ReferenceError: a is not defined
/* Since `a` is declared within the block scope, it is not accessible OUTSIDE of the block. Therefore, the `console.log(a)` method that runs outside the block on line 1034 cannot access the `a` variable which was declared within the block */

// Variables declared outside of block scope are available within and after the block ends.
let b = 'hello'
if (1 === 1) {
  console.log(b) // => logs 'hello'
  b = 'bye'
}

console.log(b) // => logs 'bye'
/* Since `b` is declared outside the block scope, it has global scope. Therefore, within the block of the `if` statement, the `b` variable is visible within the block and is reassigned to the string literal 'bye'. Thus, when we `console.log(b)` on line 1044, we log 'bye' to the terminal. */

// Undeclared variables have global scope and ignore all scope entirely.
if (1 === 1) {
  c = 'hello'
  console.log(c) // => logs 'hello'
}

console.log(c) // => logs 'hello'
/* Since `c` is declared without `let` or `const`, the variable has global scope. Therefore, even though it is declared within the block of the `if` statement, since `c` has global scope, the variable `c` can still be accessed by the `console.log(c)` method on line 1053 OUTSIDE of the block scope. Thus the second `console.log(c)` method logs the string literal 'hello' to the terminal */

// Does the function invocation `foo()` alter the text logged to the console?
let bar = 1;
function foo() {
  let bar = 2;
}

foo();

console.log(bar);     // => logs 1
/* No because of variable scoping rules. This code invokes the `foo()` function. The `foo` function body creates an inner scope, and within that inner scope it declares and initializes a new `bar` variable, and assigns it the number value `2`. Note that this `bar` variable is NOT the same as the `bar` variable created in the global scope on line 1. Once the `foo()` function call is finished, the function's inner scope is destroyed, along with the `bar` variable that was created and initialized to `2`. Therefore, when we log `bar`, the `console.log(bar)` method on line 1063 uses the `bar` variable that was declared and initialized on line 1. Thus, this code logs '1' to the console.
```

### Undeclared Variable

Undeclared Variables are variables declared without the keyword `let`, `const`, or `var`. If you fail to declare a variable, JavaScript will NOT throw an error. Undeclared variables have global scope, and they ignore block and function scope entirely!

### Global Scope

Variables declared in a global scope are variables that are available across your program. You can use them anywhere in the program, either globally or from inside a function or a block.

### Local Scope

Local scopes comes in two forms: **block scope** and **function scope**.

### Function Scope Rules

**Functions** define a *new scope* for local variables. You can think of the scope defined by a function as an inner scope. Local variables are short-lived; they go away when the function that corresponds to their scope stops running. When we invoke the function, we start a new scope. If the code within that scope declares a new variable, that variable belongs to the scope. When the last bit of code in that scope finishes running, the scope goes away, as do any local variables declared within it. JavaScript repeats this process each time we invoke a function.

**Nested functions** define nested scopes. A variable's scope is determined by **where** it is declared.

#### Rule 1: **outer scope variables can be accessed by the inner scope:**

```js
let a = 1; // outer scope variable

function logA() {
  console.log(a); // => 1
  a += 1; // a is reassigned to a new value
}

logA();
console.log(a) // => 2 because 'a' was reassigned in the inner scope
```

Since the variable `a` is declared and initialized in the outer scope (i.e., the global scope), it can be accessed within the inner scope of the function `logA`. Here, when the function `logA` is called on line 1094, the value of `a` is reassigned to a new value of `2` within the function body. Thus, when the `console.log(a)` method executes on line 1095, the value `2` is logged to the console.

**Takeaway:** When instantiating variables in an inner scope, be careful that we are NOT accidentally re-assigning an existing variable in an outer scope.

#### Rule 2: **inner scope variables cannot be accessed in the outer scope:**

```js
function aFunc() {
  let a = 1;
}

aFunc();
console.log(a); // ReferenceError: a is not defined
```

Here, the outer scope is the global scope, and it does not have an `a` variable. Where a variable is declared determines its scope. In the above code, `a` is declared in an inner scope and thus cannot be accessed from an outer scope.

Note that a *local variable only comes into existence when you call that function*. The mere act of defining a function doesn't create any variables. The function declaration does, however, *define* the scope of the variables. For example, in the `aFunc` function above, the function body defines where variable `a`, when created, will be accessible. However, the variable `a` doesn't get created and assigned a value **unless** we invoke the function. When we call the function on line 5, a variable `a` is created, assigned the value `1` and *immediately discarded* once the function finishes execution and control returns to the main flow of the program.

**EV -** the `aFunc()` function is invoked, and defines a new scope for local variables. The local variable `a` is declared with the `let` keyword, and initially assigned the Number literal value `1`. After the function `aFunc()` completes execution, the variable `a` is immediately discarded and control returns to the main flow. Therefore, when we try to log the value stored in variable `a` to the console, a `ReferenceError` is thrown because the local variable `a` only existed within the function scope and was destroyed after the function completed execution, and therefore DOES NOT exist in the global scope. This demonstrates the principle of variable scoping, particularly that inner scope variable CANNOT be accessed or modified in the outer scope.

Because of this, when we talk about the scope of a variable, it doesn't matter whether we ever execute the code. For instance, suppose we had the following complete program:

```js
function aFunc() {
  let foo = 1;
}
```

Though we never invoke `aFunc` and never create the `foo` variable, we still talk of it as in scope within `aFunc`.

In JavaScript, variables declared with the `let` or `const` keywords have **block** scope which confines the variable's scope to that block. In other words, when you use `let` or `const` inside a block it confines the variable's scope to that block.

Parameters have local scope within a function.

#### Rule 3: **peer scopes do not conflict:**

```js
function funcA() {
  let a = 'hello';
  console.log(a);
}

function funcB() {
  console.log(a); // ReferenceError: a is not defined
}

funcA();
funcB();
```

Executing `console.log(a)` on line 7 throws an error since `a` is not in scope in `funcB`. The declaration on line 2 does declare a variable named `a`, but that variable's scope is confined to `funcA`. `funcB` can't see the variable at all. That also means that we could declare a separate `a` variable in `funcB` if we wanted. The two a variables would have different local scopes and would also be independent of each other.

**EV -** the function `funcA()` is invoked, and defines a new scope for local variables. The local variable `a` is declared with the `let` keyword, and initially assigned the String literal `'hello'`. The String `'hello'` is then logged to the terminal. After the `funcA()` function completes execution, the variable `a` is immediately discarded and control returns to the main flow. The function `funcB()` is invoked, and attempts to log the value stored in the variable `a` to the terminal, however, a `ReferenceError` is thrown because the local variable `a` only existed within the function scope of `funcA()` and was destroyed after `funcA()` completed execution. Therefore, `a` is NOT in scope in `funcB()`. This demonstrates the principle of variable scoping, particularly that peer scopes do **NOT** conflict.

#### Rule 4: **nested functions have their own variable scope:**

Nested functions follow the same rules of inner and outer scoped variables. When dealing with nested functions, our usage of what's "outer" or "inner" is going to be *relative*. We'll switch vocabulary and talk about the "first level," "second level," and "third level."

```js
let a = 1; // first level variable

function foo() { // second level variable
  let b = 2;

  function bar() { // third level
  let c = 3;
  console.log(a); // => 1
  console.log(b); // => 2
  console.log(c); // => 3
  }

  bar();

  console.log(a) // => 1
  console.log(b) // => 2
  console.log(c) // => ReferenceError
}

foo();
```

**LS -** This code logs the values: `1`, `2`, `3`, `1`, `2` and then throws a `ReferenceError`.
Executing `console.log(c)` on line 17 throws an error since `c` is **NOT IN SCOPE** on line 17 of the `foo()` function. The declaration on line 7 does declare a variable named `c`, but that variable's scope is confined to the function `bar`. Once the `bar` function completes execution, the variable `c` is immediately discarded. On line 17, `foo` CANNOT see the variable `c` at all. Therefore, `c` is NOT in scope on line 17 of the `foo()` function, and a `ReferenceError` is thrown. This demonstrates the principle of variable scoping, particularly that nested function have their own variable scope, and that inner scope variables **CANNOT** be accessed in the outer scope.

**EV -** This code logs the values: `1`, `2`, `3`, `1`, `2` and then throws a `ReferenceError`.
A global variable `a` is declared and initialized to the Number `1`. The `foo()` function is invoked and creates a new scope for local variables. The local variable `b` is declared and initialized to the Number `2`. Within the `foo()` function, the function `bar()` is invoked, which creates a new scope for local variables. The local variable `c` is then declared and initialized to the Number `3`. Since the function `bar()` is nested within the function `foo()`, it can access the outer scoped variables: `a` (global scope) and `b` (outer scoped variable declared within the `foo()` function). Therefore, the values `1`, `2`, and `3` are logged to the console. After the `bar()` function completes execution, the local variable `c` is **immediately discarded**, and control returns to the `foo()` function on line 15. The `foo()` function then calls the `console.log()` method, and values of the variable `a` and `b` (i.e. `1` and `2`) are logged to the console. However, when the `foo()` function attempts to access the value stored in the variable `c`, a `ReferenceError` is thrown as the variable `c` was created in the nested function `bar()` which only existed within the function scope of `bar()` and was destroyed after `bar()` completed execution. Therefore, `c` is NOT in scope on line 15 of the `foo()` function, and a `ReferenceError` is thrown. This demonstrates the principle of variable scoping, particularly that nested function have their own variable scope, and that inner scope variables **CANNOT** be accessed in the outer scope.

#### Rule 5: **inner scope variables can *shadow* outer scope variables**

Inner scope variables can shadow outer scope variables. Variables, parameters, function names, or class names can shadow names from the outer scope. The only names that don't get involved in shadowing are property names for objects.

Take a look at the following code:

```js
[1, 2, 3].forEach(number => {
  console.log(number);
});
```

Here, `number` is the parameter that represents the value that the callback function expects when it is invoked. It represents each element as the `forEach` method iterates through the array. *Parameters* are also local variables and the same scoping rules apply to them.

Suppose we had a variable named `number` in the outer scope, though. We know that the inner scope has access to the outer scope, so we'd essentially have two local variables in the inner scope with the same name. When that happens, it's called **variable shadowing**, and it prevents access to the outer scope local variable. See this example:

```js
let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
```

EV - This code logs the numbers `1`, `2`, `3` to the terminal. In the global scope, a variable `number` is declared with the `let` keyword and initialized to the Number `10`. The `forEach()` method is then called on the array `[1, 2, 3]` and each element within the `[1, 2, 3]` array is passed as an argument to the callback function, and assigned the parameter `number`. Since the parameter `number` shares the same variable name as the global variable `number`, variable shadowing occurs. Although the variable `number` declared on line 1 is STILL visible at this point, since the variable was declared OUTSIDE and before block scope, the new local variable `number` shadows (hides) the outer scope variable. Therefore, this code logs the numbers `1`, `2`, `3`.

`console.log(number)` will use the parameter `number` and discard the outer scoped local variable. Variable shadowing also prevents us from making changes to the outer scoped `number`.

Variable shadowing isn't limited to callback functions. Whenever you have one scope nested within another, **variables in the inner scope** will shadow variables in the outer scope having the same name.

```js
let a = 1;

function doit(a) {
  console.log(a); // => 3
}

doit(3);
console.log(a); // => 1
```

**EV** - this code logs the number `3` and the number `1` to the terminal. First, the global variable `a` is declared and initialized on line 1. On line 5, we invoke the `doit` method, and pass the value `3` as an argument to the function. Within the `doit` function, the parameter `a` is assigned the value of `3`. Although the global variable `a` is still visible, since the parameter `a` shares the same name as the global variable `a` defined on line 1, variable shadowing prevents the outer-scope variable from being accessed. Therefore, within the `doit` function's execution, `3` is logged to the console. Line 6 then logs `1` to the console by passing the value of the global variable `a` from line 1.

Note that, in this case, it's the parameter `a` that is shadowing the global variable `a`. Most names -- variables, parameters, function names, or class names -- can shadow names from the outer scope. The only names that don't get involved in shadowing are property names for objects.

### Block Scope Rules

In JavaScript, blocks are segments of one or more statements and expressions grouped by opening and closing curly braces (`{}`). Each pair of braces in the constructs like `if/else` and the `for` and `while` loops define new block scopes. The rules for block scopes are identical to those for function scopes.

#### 1. Outer blocks cannot access variables from inner scopes

```js
if (true) {
  let a = 'foo'
}

console.log(a); // ReferenceError
```

Within the `if` statement, the local variable `a` is declared and initialized to the string `foo`. After line 3, the variable `a` is no longer in scope. Thus, when we execute the `console.log(a)` method on line 5 and attempt to log the value stored in `a`, a `ReferenceError` is thrown. This demonstrates the variable scoping principle that outer blocks cannot access variables from inner scopes.

#### 2. Inner blocks can access variables from outer scopes

```js
let a = 'foo';

if (true) {
  console.log(a); // => 'foo'
}
```

On line 1, the global variable `a` is declared and initialized to the string `'foo'`. On line 4, the block within the `if` statement accesses the variable `a` defined in the outer scope, and logs the value `foo` to the console. This demonstrates the variable scoping principle that inner blocks can access variables from outer scopes.

```js
// 3.
function aFunc() {
  let a = 'foo';

  if (true) {
    let b = 'bar';
    console.log(a); // => 'foo'

    if (true) {
      let c = 'baz';
    }

    console.log(a); // => 'foo'
    console.log(b); // => 'bar'
    console.log(c); // => ReferenceError
  }

  console.log(a); // => 'foo'
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

aFunc();
```

If you run the above example, you'll see that only one exception gets raised: `ReferenceError: c is not defined` even though we expect three exceptions. That's how exceptions work in JavaScript; they halt the execution of the program *immediately*. Once execution reaches line 14, it raises an error and immediately stops executing the rest of the code. The point of the example is to show that the variable `c` will not be accessible outside the inner `if` block and variables `b` and `c` will not be accessible outside the outer `if` block.

#### 3. Variables defined in an inner block can **shadow** variables from outer scopes

### Variable Shadowing

Variable shadowing occurs when a **local variable in an inner scope** *shares the same name* as a **variable in an outer scope**. If a variable's name in an inner scope is **identical** to an outer scope variable, *variable shadowing* will **prevent** you from **using the outer scope variable!**

```js
// Example 1 - Variable Shadowing
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // => logs 'bar'
```

The program logs `bar`. Line 1 declares and initializes a variable called `foo` and assigns it the value `'bar'`. Line 2 begins a new block, which creates a new scope for `let` variables. The variable on line 1 is STILL visible at this point, since the variable is declared OUTSIDE and before the block scope; however, since line 3 declares a new variable named `foo`, which has the same name as the variable on line 1, this new variable shadows the variable from line 1. This second variable `foo` gets initialized to the value `'qux'`, but it goes out of scope on line 4, when the block ends. That brings the `foo` variable from line 1 back into scope, so line 6 logs its value: `'bar'` to the console.

```js
// Example 2 - Variable Shadowing
const FOO = 'bar';
{
  const FOO = 'qux';
}
console.log(FOO); // => logs 'bar'
```

This program logs 'bar'. Line 1 declares and initializes a const called `FOO` and assigns it the value `'bar'`. Line 2 begins a new block which creates a new scope for `let` and `const` variables. The variable on line 1 is STILL visible at this point, since the variable was declared OUTSIDE and before block scope; however, since line 3 declares a new `const` variable named `FOO` which has the same name as the variable on line 1, this new variable shadows the variable from line 1. This second variable `FOO` gets initialized to the value `'qux'`, but it goes out of scope on line 4, when the block ends. That brings the `const` `FOO` variable from line 1 back into scope, so line 6 logs its value `'bar'` to the console. The key takeaway is that the `const` variable initialized with global scope and the `const` variable declared and initialized within the block scope are separate entities - therefore, no error occurs.

```js
// Example 3 - Variable Shadowing
let number = 5;
function test(number) { // <-- since the `number` parameter is the same as the variable declared on line 1, the `number` parameter SHADOWS the line 1 `number` variable
  number = 3;
}
test(number);
console.log(number); // => logs 5
```

This code logs `5` to the console. The reason that the second code snippet doesn't change the value of `number` defined on line 1 is that the `number` parameter on line 3 SHADOWS the `number` variable by creating a separate and independent variable with the same name, but with the scope limited to the function.

---

Not all code between **curly braces** is a block.

* For instance, the code inside a function definition is not technically a block, but is, instead, called the **function body**.
  * Although blocks and function bodies are very similar, there are subtle differences that you will encounter in a later course.
* There are also other types of things between curly braces that are not considered blocks:
  * class definitions (introduced in a later course) and
  * object literals are not blocks.
  * The differences are more substantial with these constructs than with function bodies.

---

Sample wording:

The function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

### Non-local Variable Use

## 22. Variables as Pointers

Some variables act as pointers to a place (or address space) in memory, while others contain values. JavaScript stores primitive values in variables, but it uses *pointers* for non-primitive values like arrays and other objects.

### Working with Primitive Values

When a variable contains a primitive value, in most cases, JavaScript will store the primitive value itself in the allocated memory of the variable. Therefore, if you have two variables that have the same primitive value, those values are stored in two different memory locations, each one associated with that specific value. This means that the two variables are independent and changing one has no impact on the other, even if they contain the same values.

```js
> let a = 5
> let b = a
> a = 8
> a
= 8

> b
= 5
```

We initialize `a` to the value `5`, then assign `b` to the value of `a`: both variables contain `5` after line 2 runs. Next, we reassign variable `a` to a value of `8` on line 3, and on lines 4 and 5 we see that `a` does indeed now have the value `8`. On lines 7 and 8 we see that `b`'s value did not change: it is still `5`. Each variable has a value, and reassigning values does not affect any other variables that happen to have the same value. Thus, `a` and `b` are independent: changing one doesn't affect the other.

Variables that have **primitive** values store those values at the memory location associated with the variable. In our example, `a` and `b` point to different memory locations. When we assign a value to either variable, the value gets stored in the appropriate memory location. If you later change one of those memory locations, it does not affect the other memory location, even if they started off with the same value. Therefore, the variables are *independent* when they contain primitive values.

### Working with Objects and Non-mutating Operations

Creating new variables causes JavaScript to allocate space somewhere in its memory for the value. However, with objects, JavaScript doesn't store the value of the object in the same place. Instead, it allocates additional memory for the object, and places a pointer to the object in the space allocated for the variable. Thus, we need to follow two pointers to get the value of our object from its variable name.

Two Pointers:

* 1. Memory Address of the pointer
* 2. The Pointer --> points to the Memory Address of the Object

Consider the following code:

```js
let obj = { a: 1 };
obj = { b: 2 };
obj.c = 3;
```

On line 1, we declare a variable named `obj`, and initialize it to `{ a: 1 }`, which is an object value. Line 2 reassigns `obj` to a new object, `{ b: 2 }`. Finally, on line 3, we mutate the object currently referenced by `obj` by adding a new property to the object.

In the above example, `obj` is always at the same address. The value at that address is a pointer to the actual object. While the pointer to the object can change, `obj` itself always has the same address. In other words, `obj`'s address doesn't change, but its value changes to the address of the object currently assigned to the variable.

Code | obj | The Object
---------|----------|---------
 let obj = { a: 1 }; | mem addr: 0x1248 | mem addr: 0x40011fe0
  | value: 0x40011fe0 | value: { a: 1 }
 obj = { b: 2}; | mem addr: 0x1248 | mem addr: 0x40012000
  | value: 0x40012000 | value: { b: 2 }
 obj.c = 3; | mem addr: 0x1248 | mem addr: 0x40012000
  | value: 0x40012000 | value: { b: 2, c: 3 }

Looking at the table above, we can see that the memory address of `obj` is always 0x1248, and the value at that address is a pointer/reference to the actual object. On line 1, the value at memory address 0x1248 is the **pointer** to the memory address of the Object `{ a: 1 }`. On line 2, the variable `obj` is reassigned to reference a different Object. The memory address of `obj` has not changed, it is still 0x1248, but the value at memory address 0x1248 has been changed to a different pointer/reference which contains the memory address of Object `{ b: 2 }`.

When we reassign the variable `obj`, the memory address of `obj` does not change, but its value changes to the address of object currently assigned to the variable.

Let's look at another example. This time, we'll use arrays. Remember that arrays in JavaScript are objects, and almost everything we say about arrays holds for objects as well.

```sh
> let c = [1, 2]
> let d = c
> c = [3, 4]
> c
= [ 3, 4 ]

> d
= [ 1, 2 ]
```

Again, this example holds no surprises. For the moment, though, let's ignore what happens on line 2. We can assume that variables `c` and `d` end up with the same value after line 2 runs. Reassigning `c` on line 3 creates a new array, but the code doesn't affect the value of `d`. The two variables reference different arrays.

This code works as expected since reassignment changes the pointer value of `c` to reference the new `[3, 4]` object. Though `d` originally had the same pointer value as `c`, it was stored in a different memory location (the location of `d`). Thus, when we reassign `c`, we're not changing `d` -- it still points to the original array.

As with primitive values, this is straightforward: each variable has a value, and reassigning values does not affect any other variables that happen to have the same value. Thus, `c` and `d` are independent variables.

Let's see what happens with a **mutating** operation like the `push` method:

```sh
> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]
```

We mutated the array referenced by `e`, but it also changed the array referenced by `f`!

As we saw a little earlier, objects (and arrays) aren't stored in the memory location used by the variable. Instead, that memory location points to yet another memory location. That's where the object is ultimately stored.

The use of pointers has a curious effect when you assign a variable that references an object to another variable. Instead of copying the object, *JavaScript only copies the pointer*. Thus, when we initialize `f` with `e`, we're making both `e` and `f` point to the same array: `[1, 2]`. It's not just the same value, but the same array in the same location in memory. The two variables are independent, but since they point to the same array, that array is dependent on what you do to both `e` and `f`.

With `e` and `f` pointing to the same array, line 3 uses the pointer in the `e` variable to access and mutate the array by appending `3` and `4` to its original value. Since `f` also points to that same array, both `e` and `f` reflect the updated contents of the array. Some developers call this **aliasing**: `e` and `f` are aliases for the same value.

Okay, that's good. What happens if we mutate a primitive value? Oops! You can't do that: all primitive values are immutable. Two variables can have the same primitive value. However, since primitive values are stored in the memory address allocated for the variable, they can never be aliases. If you give one variable a new primitive value, it doesn't affect the other.

### Reassignment and Mutation

Primitive - when you reassign a primitive value, you do not mutate the primitive value. Instead, the variable refers to a new value. This does not change the original value as we are putting a completely new value in the variable when its reassigned.

Object - when you use Array Element Assignment, you can reassign a specific element in the array. Note that this does not mutate the element, but it does mutate the array. Therefore, Array Element Assignment can be used to destructively mutate an array.

Reassignment of a specific element:

```sh
> let g = ['a', 'b', 'c']
> let h = g
> g[1] = 'x'
> g
= [ 'a', 'x', 'c' ]

> h
= [ 'a', 'x', 'c' ]
```

The key thing to observe here is that we're reassigning a specific element in the array, not the array itself. This code doesn't mutate the element, but it does mutate the array. Reassignment applies to the item you're replacing, not the object or array that contains that item.

### Takeaway

The takeaway of this section is that JavaScript stores primitive values in variables, but it uses pointers for non-primitive values like arrays and other objects. Pointers can lead to surprising and unexpected behavior when two or more variables reference the same object in the heap. Primitive values don't have this problem.

When using pointers, it's also important to keep in mind that some operations **mutate** objects, while others don't. For instance, `push` mutates an array, but `map` does not. In particular, you must understand how something like `x = [1, 2, 3]` and `x[2] = 4` differ: both are reassignments, but the second mutates `x` while the first does not.

* **Primitive Values -** variables contain/store the primitive value. Even if two variables have the same primitive values, the primitive values are stored in different memory locations associated with the specific variable, and are **independent** of one another.
* **Objects** - variables contain/store references or pointers for objects. When two variables point to the same object, mutating the shared object will result in change being reflected in both variables; another way to put it is that the two variables are aliases. When working with objects, be wary of operations that are **destructive/mutate.**
