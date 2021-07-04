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
