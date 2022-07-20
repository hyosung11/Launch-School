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
  let accumulator = initialValue;
  let index = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }

  while (index < array.length) {
    accumulator = callback(accumulator, array[index]);
    index += 1;
  }

  return accumulator;
}
```

2. `Array.prototype.reduce` can be an incredibly useful function. You're not limited to simple accumulation-style processing, but can perform a wide variety of different tasks with it. For instance, you can emulate many of the standard Array methods, including `filter`, `map`, and more.

Let's try it. Write a function that works like the `filter` function from problem 1. This time, though, you should use `Array.prototype.reduce` to filter the input array.

Possible Solution

```js
function filter(array, callback) {
  return array.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value)
    }

    return filteredItems;
  }, []);
}
```

As you can see, this is very similar to the `filter` function in our solution to problem 1. The chief difference is that we now use `Array.prototype.reduce` to iterate over the array elements, and use an array as the accumulator (`filteredItems`) and the final return value.

3. Let's put `reduce` to work with emulating `map` as well. Write a function that works like the `map` function from problem 2. This time, though, use `Array.prototype.reduce` to transform the input array.

Possible Solution

```js
function map(array, callback) {
  return array.reduce((transformedItems, value) => {
    transformedItems.push(callback(value));
    return transformedItems;
  }, []);
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

Possible Solution

```js
function objForEach(object, callback) {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      callback(property, object[property]);
    }
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});
```

Output

```sh
the value of foo is 1
the value of bar is 2
the value of qux is 3
```

## 4. Build a TodoList Class: Getting Started

In this assignment, we'll start working on a simple todo list project. The project contains two classes: a `TodoList` class and a `Todo` class. `TodoList` objects contain a collection (an array) of `Todo` objects. We'll finish building the project in subsequent assignments.

We'll reuse this code in later lessons, so make sure that you create a git repository for it and push it to the remote repository. For best results, create a new repository just for this project. In particular, don't nest the repo inside another repo; if you already created a repo for this course, put the new repo elsewhere.

### 4.1 The Todo Class

Let's examine the `Todo` class first:

```js
// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}
```

Objects created by our `Todo` class contain a title and a boolean flag that indicates whether the todo is "done." We also have some methods that we can use to set, unset, and interrogate the `done` attribute; they aren't strictly needed, but they provide a better and safer interface when working with `Todo` objects. We'll use the `Todo` class to encapsulate todo items, and our `TodoList` class to maintain the collection of `Todo` objects.

#### 4.1.1 Creating and Displaying a Todo

We can use the Todo constructor to create todos and the toString method to format them in a manner suitable for display:

```js
// omitted code

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");

console.log(todo1.toString());
console.log(todo2.toString());
console.log(todo3.toString());
```

```sh
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym
```

Note that we use `toString` on lines 7-9 to create the string representations of our todo objects. Without `toString`, our output wouldn't look very good:

```js
// omitted code

console.log(todo1);
console.log(todo2);
console.log(todo3);
```

```sh
Todo { title: 'Buy milk', done: false }
Todo { title: 'Clean room', done: false }
Todo { title: 'Go to the gym', done: false }
```

We can also use the `String` function to accomplish the same formatting as `toString`:

```js
// omitted code

console.log(String(todo1));
console.log(String(todo2));
console.log(String(todo3));
```

#### 4.1.2 Marking a Todo as Done or Not Done

Let's say that we've bought some milk and want to mark the `Buy milk` todo as done. For that, we can use the `markDone` method:

```js
// omitted code

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");

todo1.markDone();

console.log(todo1.toString());
console.log(todo2.toString());
console.log(todo3.toString());
```

```sh
[X] Buy milk
[ ] Clean room
[ ] Go to the gym
```

We can also mark a previously completed todo as not done:

```js
// omitted code

todo1.markUndone();

console.log(todo1.toString());
console.log(todo2.toString());
console.log(todo3.toString());
```

```sh
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym
```

#### 4.1.3 Querying a Todo's Completion Status

The `isDone` method determines whether a `Todo` object is marked as done:

```js
// omitted code

todo2.markDone();
console.log(todo2.isDone() ? "The todo is done." : "The todo is not done.");

todo2.markUndone();
console.log(todo2.isDone() ? "The todo is done." : "The todo is not done.");
```

```sh
The todo is done.
The todo is not done.
```

#### 4.1.4 Retrieve a Todo's Title

The `getTitle` method returns the title of a `Todo` object:

```js
// omitted code

console.log(todo2.getTitle()); // => 'Clean room'
```

As with the methods used to manipulate and query the done status, we don't need this method. We could easily access the title directly with `todo.title`. We'll talk more about why we provide methods for such tasks in the next assignment.

That's pretty much it for our `Todo` objects. We can create them, mark them as done or undone, query them, display them, and retrieve their title. That's plenty of functionality without much code.

Before proceeding, delete all the testing code from your JavaScript file. We'll add more tests in a few minutes. For now, all you need is the `Todo` class.

### 4.2 The TodoList Class

Let's turn our attention to our *collection* class, `TodoList`. Why build a custom class instead of using a simple array of `Todo` objects? We could do that. However, a custom collection class lets us add properties and methods that are specific to *todo lists*. For example, our todo list may have a title or a due date, and we may want to create an outstanding todos report. We can also impose specific requirements on the objects that we can put on the list. For instance, we can restrict the `TodoList` contents to just `Todo` objects. After all, it doesn't make much sense to place a `Circle` object on a todo list. With some effort, we can accomplish these tasks with arrays, but it's more natural to use a custom object type.

Let's get started with the `TodoList` class:

```js
// omitted code

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  // rest of class needs implementation
}

let list = new TodoList("Today's Todos");
console.log(list); // TodoList { title: "Today's Todos", todos: [] }
```

Our class uses an array to track `Todo` objects. However, that can change in the future without changing the `TodoList` interface. The interface consists of the methods and properties intended for use by code that isn't part of the class.

We'll leave the rest of the implementation to you. Use the code below to help guide you through writing the methods that `TodoList` needs.

#### 4.2.1 Creating a TodoList Object

We've already completed this part for you with the `constructor` method.

```js
// The Todo class
// Your TodoList class

let list = new TodoList("Today's Todos");
console.log(list);
```

```sh
TodoList { title: "Today's Todos", todos: [] }
```

#### 4.2.2 Add a Todo to a TodoList Object

The `add` method appends todos to the end of the list. It raises an error if the argument isn't a `Todo` object.

```js
// Omitted code

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
console.log(list);

list.add(1); // delete this line after testing it
```

```sh
list: TodoList {
  title: "Today's Todos",
  todos: [
    Todo { title: 'Buy milk', done: false },
    Todo { title: 'Clean room', done: false },
    Todo { title: 'Go to the gym', done: false },
    Todo { title: 'Go shopping', done: false }
  ]
}

TypeError: can only add Todo objects
```

Possible Solution

```js
class TodoList {
  // Omitted code

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }

    this.todos.push(todo);
  }
}
```

We raise a `TypeError` exception when the argument isn't a `Todo` object to indicate that the argument has the wrong type.

We had a brief discussion of exceptions in the Introduction to Programming With JavaScript book. However, in the book, we mentioned that using exceptions to prevent bad inputs may not be best practice. After all, we can avoid passing invalid data around in our program. However, we can't prevent someone else who is using our `TodoList` class from calling the method with something other than a `Todo` object.

In a later assignment, we'll move the `TodoList` class into a *module* that other programs can use. We may not have control over what those programs do, so raising an exception is appropriate.

We'll discuss exceptions in more detail in a later lesson.

#### 4.2.3 How Many Todos are on the TodoList?

The `size` method returns the number of todos on the list.

```js
// Omitted code

console.log(list.size()); // 4
```

Possible Solution

```js
class TodoList {
  // Omitted cde

  size() {
    return this.todos.length;
  }
}
```

#### 4.2.4 Get the First and Last Todos from a TodoList

The `first` and `last` methods return the first and last todo items from a todo list. If the list is empty, they each return `undefined`.

```js
// Omitted code

console.log(list.first());
console.log(list.last());

let emptyList = new TodoList("Empty List");
console.log(emptyList.first());
console.log(emptyList.last());
```

```sh
Todo { title: 'Buy milk', done: false }
Todo { title: 'Go shopping', done: false }
undefined
undefined
```

Possible Solution

```js
class TodoList {
  // Omitted code

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }
}
```

#### 4.2.5 Get the Todo at Index Position

The `itemAt` method returns the todo item at a given index position in the todo list. It raises an error if the argument is missing, invalid, or out of range.

```js
// Omitted code

console.log(list.itemAt(1));
```

```sh
Todo { title: 'Clean room', done: false }
```

```js
// Omitted code

console.log(list.itemAt("a")); // delete this line after testing it
```

```sh
ReferenceError: invalid index: a
```

```js
// Omitted code

console.log(list.itemAt(55)); // delete this line after testing it
```

```sh
ReferenceError: invalid index: 55
```

Possible Solution

```js
class TodoList {
  // Omitted code

  itemAt(index) {
    this._validateIndex(index)
    return this.todos[index];
  }

  _validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
}
```

#### 4.2.6 Mark a Todo at Index Position as Done or Not Done

The `markDoneAt` method marks the todo item at a given index position as done. `markUndoneAt` does the opposite: it marks the item as not done. Both methods raise an error if the argument is missing, invalid, or out of range.

```js
// Omitted code

list.markDoneAt(1);
console.log(list);

list.markUndoneAt(1);
console.log(list);
```

```sh
TodoList {
  title: "Today's Todos",
  todos: [
    Todo { title: 'Buy milk', done: false },
    Todo { title: 'Clean room', done: true },
    Todo { title: 'Go to the gym', done: false },
    Todo { title: 'Go shopping', done: false }
  ]
}
TodoList {
  title: "Today's Todos",
  todos: [
    Todo { title: 'Buy milk', done: false },
    Todo { title: 'Clean room', done: false },
    Todo { title: 'Go to the gym', done: false },
    Todo { title: 'Go shopping', done: false }
  ]
}
```

```js
// Omitted code

list.markDoneAt(); // delete this line after testing it
```

```sh
ReferenceError: invalid index: undefined
```

```js
// Omitted code

list.markUndoneAt(55); // delete this line after testing it
```

```sh
ReferenceError: invalid index: 55
```

Possible Solution

```js
class TodoList {
  // Omitted code

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }
}
```

Since `itemAt` already handles index validation, we don't need to check the index in these two methods explicitly.

#### 4.2.7 Are All Todos Done?

The `isDone` method returns `true` if all of the todos in a todo list are done, `false` if any are not.

```js
// Omitted code

console.log(list.isDone()); // false

list.markDoneAt(0);
list.markDoneAt(1);
list.markDoneAt(2);
list.markDoneAt(3);
console.log(list.isDone()); // true

list.markUndoneAt(2);
console.log(list.isDone()); // false
```

Possible Solutions

There are several ways to write this method. One way is to filter the todo list for todos that aren't done; if there are no undone todos, then all todos are done:

```js
class TodoList {
  // Omitted code

  isDone() {
    let done = this.todos.filter(todo => !todo.isDone());
    return done.length === 0;
  }
}
```

That's not particularly elegant, and the negated condition makes it a little hard to follow. Instead, we can use `Array.prototype.every`; this method returns true if the callback returns true for every element in the array. That makes for code that is easier to read:

```js
class TodoList {
  // Omitted code

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }
}
```

#### 4.2.8 Remove and Return the First or Last Todo from the List

#### 4.2.9 Remove and Return a Todo by Index Position

#### 4.2.10 Render the Todo List as a String Suitable for Display

#### 4.2.11 Our Solution

## 5. Build a TodoList Class: Add a forEach Method

## 6. Build a TodoList Class: Add a filter Method

## 7. Build a TodoList Class: More Methods

## 8. Build a TodoList Class: Final Code

