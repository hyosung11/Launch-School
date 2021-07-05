# INTRODUCTION TO PROGRAMMING: Functions

Most languages have a feature called procedures that let you extract the code and run it as a separate unit. In JavaScript, we call these procedures **functions**.

## Using Functions

Before you can use a function, you must first define it with the reserved keyword, `function`. After the word `function`, you write the function's name followed by a pair of parentheses (`()`). After the closing parenthesis, the code you want to associate with the function -- the **function body** -- gets placed between curly braces (`{}`).

```js
function say() {
  console.log("Hi!");
}
```

Functions are called by typing their name and providing some optional values that we call **arguments**. In `say.js`, the function definition includes `(words)` after the function name. This syntax tells us that we should supply (**pass**) a single argument to the function when we call it. Arguments let you pass data from outside the function's scope into the function so it can access the data. If the function definition doesn't need access to outside data, you don't need any arguments.

In the definition of a function, the names between parentheses are called **parameters**. The arguments are the values of those parameters.

Function names and parameters are both considered variable names in JavaScript. Parameters, in particular, are **local variables**; they are only defined locally, within the body of the function.

Programmers often talk about function **invocation** and **invoking** functions. The terms are synonymous with "call" and "calling." You _invoke a function_ or write a _function invocation_. We use these terms as well.

The local variable names between parenthesis (`()`) are properly called **parameters**, not arguments. Arguments are the values you pass into the function for each of those parameters. The parameter values inside the function are also called arguments. You can think of parameters as placeholders, while arguments refer to the values that get stored in the placeholders.

```js
function add(left, right) { // left & right are parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments
```

## Return Values

Functions can perform an operation and **return** a result to the call location for later use. We do that with **return values** and the `return` statement.

All JavaScript function calls evaluate to a value. By default, that value is `undefined`; this is the **implicit return value** of most JavaScript functions. However, when you use a `return` statement, you can return a specific value from a function. This is an **explicit return value**. Outside of the function, there is no distinction between implicit and explicit return values, but it's important to remember that all functions return something unless they raise an exception, even if they don't execute a `return` statement.

```js
function add(a, b) {
  return a + b;
}

let twoAndThree = add(2, 3);
console.log(twoAndThree); // => 5
```

JavaScript uses the `return` statement to return a value to the code that called the function: the **caller**. If you don't specify a value, it returns `undefined`. Either way, the `return` statement causes the function to stop running and returns control to the caller.

Functions that always return a boolean value, i.e., `true` or `false`, are called **predicates**. You will almost certainly encounter this term in future readings and videos, so commit it to memory.

## Default Parameters

When you define a function, you sometimes want to structure it so that you can call it without an argument. Let's update `say` to use a default value when the caller doesn't provide an argument.

```js
function say(words = "hello") {
  console.log(words + "!");
}

say("Howdy"); // => Howdy!
say();        // => hello!
```

You'll notice that `say()`—without arguments—logs "hello!" to the console. Since we've provided a default value for `words`, we can call our function without arguments. Nice!

## Nested Functions

Functions can be created anywhere, even nested in another function:

```js
function foo() {
  function bar() {
    console.log("BAR");
  }

  bar(); // => BAR
  bar(); // => BAR
}

foo();
bar(); // ReferenceError: bar is not defined
```

Here, the `bar` function is nested within the `foo` function. Such nested functions get created and destroyed every time the outer function runs. (This has a mostly negligible effect on performance.) They are also private functions since we can't access a nested function from outside the function where it is defined.
