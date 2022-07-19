# Lesson 1 > Iteration and the Todo Class

## 1. Introduction

Congratulations! You've completed the first two courses in Launch School's Core Curriculum for JavaScript! You're ready to start exploring more advanced concepts, such as writing functions that use callbacks, taking advantage of closure, using JavaScript modules, testing, and learning how to use and create npm packages and other tools. We'll cover these topics and more in this course.

In this lesson, we won't learn much that is new. Think of this lesson as review and practice. We'll begin by seeing how you might emulate the built-in iteration methods from `Array.prototype`, with specific attention to `forEach`, `filter`, `map`, and `reduce`. At the end of the lesson, we'll build two small classes that we'll use later in the course.

Let's get started.

## 2. Walkthrough: Build a `forEach` Method

Let's take a break from learning new concepts and do something that's more fun. We'll take what we know about JavaScript and build our own `forEach` function. By now, you're very familiar with the built-in `Array.prototype.forEach` method. We won't try to emulate some of the more subtle behaviors of `forEach`, but we will implement the most important behaviors.

It may seem a bit silly to reimplement built-in methods, but there's a method to this madness (pun unintended; okay, maybe just a little intentional). Ordinarily, you don't want to "reinvent the wheel" like we're about to do. However, emulating existing functions and methods is a great way to enhance and hone your programming skills. It also helps you learn how these functions work, and that helps you learn how to use them more effectively.

Our `forEach` function won't be part of the `Array` prototype. Thus, we'll have to invoke it differently. Let's compare its use with that of the built-in version:

```js
let arr = [1, 2, 3, 4];

// Array.prototype.forEach
arr.forEach(value => console.log(value * value));

// Our forEach function
forEach(arr, value => console.log(value * value));
```

The output of both functions should be the same:

```js
1
4
9
16
```

`Array.prototype.forEach` iterates through the array and invokes the callback for each element in the array. In each invocation of the callback, `forEach` passes the current iteration element to the callback as an argument. Once the method finishes the iteration, it returns `undefined`.

### 2.1 Iteration and Callbacks

Let's implement our `forEach` function. Other than taking an array argument, our function should behave the same way. We can get the behavior we need with a `for` loop:

```js
function forEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index]);
  }
}
```

That's it. Note that we're relying on an implicit return to return `undefined`. We could have used `Array.prototype.forEach` to iterate through the array, but that's too much like cheating. In any case, a `for` loop is straightforward and easy.

Let's make sure our `forEach` function behaves the way it should:

```js
function forEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index]);
  }
}

let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));
```

Output:

```js
1
4
9
16
```

Great! It looks like our `forEach` function behaves the same as `Array.prototype.forEach`!

The magic behind our `forEach` function is the same magic that the built-in `forEach` method uses: it doesn't implement the action it performs on each element of the array. Do we increment every value by one? Do we output the element? None of that matters since our `forEach` function only cares about *iterating*. It doesn't care what we do with each element. Generic iteration functions let method callers pass in a callback function that takes care of the specific details of the iteration. All our function has to do is invoke the callback function with the expected arguments (the array element in this case).

### 2.2 Defining the Execution Context

Another feature of `Array.prototype.forEach` is that it lets us set the execution context for the callback function by passing in a second argument, often designated as `thisArg` in JavaScript documentation. For instance:

```js
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
[4, 5, 6].forEach(foo.showItem);
```

Output

```sh
Item:  1
Item:  2
Item:  3
TypeError: Cannot read property 'prefix' of undefined
```

Our function should have similar behavior:

```js
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);
```

Output

```sh
Item:  1
Item:  2
Item:  3
TypeError: Cannot read property 'prefix' of undefined
```

Hmm... it doesn't work, does it? See if you can make the necessary adjustments on your own. Make sure your code still works with callbacks that don't need an explicit context.

Solution

```js
function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index]);
  }
}

forEach(['a', 'b', 'c'], item => console.log(item));
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);
```

Output

```sh
a
b
c
Item:  1
Item:  2
Item:  3
TypeError: Cannot read property 'prefix' of undefined
```

The most significant change to our code is that we now use `call` to invoke the callback function with the appropriate context.

### 2.3 Adding the Index and Array Arguments

As we've seen, `Array.prototype.forEach` passes to the callback function the value of the current element during iteration. It also passes to the callback the element's index and a reference to the array that invoked `forEach`. The callback is free to ignore those arguments -- and often does -- but you can use them when you need them:

```js
['a', 'b', 'c'].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
```

Output

```sh
After a comes b
After b comes c
After c comes undefined
```

Try to modify your `forEach` function so that it passes the index and array to the callback function.

Solution

```js
function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}

forEach(['a', 'b', 'c'], function(value, index, array) {
  console.log(`After ${value} comes ${array[index + 1]}`);
});
```

### 2.4 Summary

In this assignment, you learned how to implement the functionality behind the built-in `Array.prototype.forEach` method. In the next assignment, you'll get more practice with emulating built-in methods: we'll tackle the `filter`, `map`, and `reduce` methods specifically.

## 3. Practice Problems: Emulating Iteration Methods

Let's get some practice emulating built-in Array methods.

### 3.1 Basic Emulation Problems

1. Write a function that acts like the built-in `Array.prototype.filter` method. For this problem, you only need to emulate the most basic behavior: filtering elements of an array by examining the array values. You don't have to support multiple arguments to the callback function, but feel free to add them if you like. Your function should work like this:

```js
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
```

Note that the function should not mutate the input array.

Possible Solutions

```js
// My Solution
function filter(array, callback) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    let value = array[index];
    if (callback(value)) {
      result.push(value);
    }
  }

  return result;
}

// LS Solution
function filter(array, callback) {
  let filteredItems = [];
  for (let index = 0; index < array.length; index += 1) {
    let value = array[index];
    if (callback(value)) {
      filteredItems.push(value);
    }
  }

  return filteredItems;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
```

2. Write a function that acts like the built-in `Array.prototype.map` method. For this problem, you only need to emulate the most basic behavior: transforming the elements of an array by using the array values. You don't have to include the `thisArg` argument or support multiple arguments to the callback function, but feel free to add them if you like. Your function should work like this:

```js
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
```

Note that the function should not mutate the input array.

Possible Solutions

```js
// My Solution
function map(array, callback) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    let value = array[index];
    result.push(callback(value));
  }

  return result;
}

// LS Solution
function map(array, callback) {
  let transformedItems = [];
  for (let index = 0; index < array.length; index += 1) {
    transformedItems.push(callback(array[index]));
  }

  return transformedItems;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
```

### 3.2 Emulating and Using the `reduce` Method

Before tackling the problems, you may want to read [this article](https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/) on the `Array.prototype.reduce` method. We discussed `reduce` in the [Introduction to Programming with JavaScript book](https://launchschool.com/books/javascript/read/arrays#iterationmethods). The article will refresh your memory about `reduce`, and show you some of its power. (You can ignore the section on asynchronous functions.)

1. Write a function that acts like the built-in `Array.prototype.reduce` method. For this problem, you only need to emulate the most basic behavior: reducing the elements of an array down to a single value based on the original array values. The result may be a primitive value, an object, or another array. You don't have to include the `thisArg` argument or support multiple arguments to the callback function, but feel free to add them if you like. Your function should work like this:

```js
let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]
```

Note that the function should not mutate the input array. Don't forget to account for the initialValue argument!

Hint

Pay attention to how `Array.prototype.reduce` deals with the initial value argument.

Possible Solution

```js
function reduce(array, callback, initialValue) {
  
}
```
#### 3.2.1 The Magic of the `reduce` Array Method Video

If you're a little fuzzy on how reduce works and what it's used for, check out [this optional video](https://www.youtube.com/watch?v=kC3AasLEuBA) entitled "The Magic of the `reduce` Array Method". Note that the last example in this video uses concepts we haven't seen yet, but the explanation is good.

```js
// Examples 1 & 2
const scores = [90, 30, 20, 75, 85, 95, 0, 55, 60, 40];

// Common use of `reduce` to get a total value
var total = scores.reduce((accumulator, element) => accumulator + element, 0);

console.log(total) // 550

// Another use of `reduce` to get minimum and maximum
var minMax = scores.reduce((acc, score) => [Math.min(acc[0],score), Math.max(acc[1], score)], [100, 0]);

console.log(minMax) // [0, 95]
```

```js
// Another More Complex Example
const students = [
  {
    userid: 'stevenh',
    name: 'Steven',
    passFail: true,
  },
  {
    userid: 'debbw',
    name: 'Debbie',
    passFail: true,
  },
  {
    userid: 'maxv',
    name: 'Max',
    passFail: false,
  },
];

var studentObj = students.reduce(function(acc, person) {
  return {...acc, [person.userid]: person}
}, {});

console.log(studentObj);
/*
{
  stevenh: { userid: 'stevenh', name: 'Steven', passFail: true },
  debbw: { userid: 'debbw', name: 'Debbie', passFail: true },
  maxv: { userid: 'maxv', name: 'Max', passFail: false }
}
*/
console.log(studentObj.stevenh);
// { userid: 'stevenh', name: 'Steven', passFail: true }

console.log(studentObj.stevenh.name) // Steven
```

### 3.3 Want Some More Practice?

That's it for our prepared practice problems. If you want further practice, see the [MDN Documentation for Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Many of the built-in Array methods are good emulation candidates.

If you get bored emulating the Array methods, see if you can write some functions that *manipulate objects* instead of arrays. For instance, here's a version of `forEach` that operates on objects:

## 4. Build a TodoList Class: Getting Started

## 5. Build a TodoList Class: Add a forEach Method

## 6. Build a TodoList Class: Add a filter Method

## 7. Build a TodoList Class: More Methods

## 8. Build a TodoList Class: Final Code

End
