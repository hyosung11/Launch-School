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

End

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

### 2.3 Adding the Index and Array Arguments

### 2.4 Summary

In this assignment, you learned how to implement the functionality behind the built-in `Array.prototype.forEach` method. In the next assignment, you'll get more practice with emulating built-in methods: we'll tackle the `filter`, `map`, and `reduce` methods specifically.

End

## 3. Practice Problems: Emulating Iteration Methods

## 4. Build a TodoList Class: Getting Started

## 5. Build a TodoList Class: Add a forEach Method

## 6. Build a TodoList Class: Add a filter Method

## 7. Build a TodoList Class: More Methods

## 8. Build a TodoList Class: Final Code

End
