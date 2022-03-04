# Execution Context

[An Introduction to Functions, Execution Context and the Call Stack (FULL VIDEO - Parts 1-3)](https://www.youtube.com/watch?v=exrc_rLj5iw&t=2s) from Codesmith on YouTube.

## What happens when JavaScript executes (runs) code?

```js
const num = 3;

function multiplyBy2 (inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const name = "Will";
```

As soon as we start running our code, we create a **global execution context**:

* Thread of execution (parsing and executing the code line after line)
* Live memory of variables with data (known as a Global Variable Environment)

Code Example 1

Global Memory

1. num : 3
2. `multiplyBy2` : -> [f] ->
3. name : "Will"

## The Thread in JavaScript

* Single threaded (one thing at a time)
* Synchronous execution (for now)

## Running/calling/invoking a function

This is not the same as defining a function

```js
const num = 3;

function multiplyBy2 (inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);
```

Code Example 2 (changed from code example 1)
Global Memory

1. num : 3
2. `multiplyBy2` : -> [f] ->
3. output : ... initially `undefined` => 8
4. newOutput : ...

When you execute a function, you create a new execution context comprising:

1. The thread of execution (we go through the code **in the function** line by line)
2. A local memory ("Variable environment") where anything defined in the function is stored

## Call Stack

We keep track of the functions being called in JavaScript with a Call Stack

Tracks which execution context we are in - that is, what function is currently being run and where to return to after an execution context is popped off the stack.

One global execution context, multiple function contexts.

E.g. from above:

multiplyBy2()
--------------
global()

![Functions-Execution_Contexts-The_Call_Stack](/Users/hyosung11/Launch-School/Courses/JS120/Lesson-2-Functions-Objects-Prototypes/functions-execution_contexts.png)