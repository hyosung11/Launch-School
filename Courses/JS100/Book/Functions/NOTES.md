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

## Functions & Scope

* **global** variables and **local** variable
* Where you declare a `let` or `const` variable determines whether the variable is global or local.

### Global variables

Global variables have a global scope, which means that they are available everywhere within a program. You can read and reassign them at any time.
Any variable declared inside a function or block is a local variable - everything else is a global variable.

Global variables can be useful in some scenarios, e.g., application-wide configuration. However, most developers discourage their use since they often lead to bugs. In general, you should limit the scope of your variables as much as possible; smaller variable scopes limit the risk that an outer scope might misuse the variable.

### Local Variables

As the name suggests, local variables in JavaScript have a local scope, meaning that you can't access them outside the function that declares them. As with global variables, where you declare a local variable determines its scope.

```js
function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
```

The above code is functionally identical to the first example in the previous section. However, it doesn't use any global variables. The `greetPeople` function declares `greetingMessage` internally. It's accessible within the function, but a `ReferenceError` occurs if you try to use it elsewhere.

That brings us to another important property of local variables. Local variables are short-lived; they go away when the function that corresponds to their scope stops running. When we invoke the function, we start a new scope. If the code within that scope declares a new variable, that variable belongs to the scope. When the last bit of code in that scope finishes running, the scope goes away, as do any local variables declared within it. JavaScript repeats this process each time we invoke a function.

Thus far, we've talked about variables scoped to a function definition. Another way to scope variables locally is to use block-scoping. We've already discussed it in the Variables chapter, and we'll expand on it in the next. For now, block scoping occurs when you use `let` or `const` inside a block and confines the variable's scope to that block.

Variable scoping is a crucial topic in programming. A solid grasp of the concept is essential to fluency with any programming language.

## Functions vs. Methods

Thus far, all our function calls used `functionName(obj)` syntax. We call a function by writing parentheses after its name and passing it zero or more arguments. If you want to convert a string to all uppercase letters, you might expect to use a function call like `toUpperCase(string)`. However, you need to use a different syntax called **method invocation**.

Method invocation occurs when you prepend a variable name or value followed by a period (`.`) to a function invocation, e.g. `'xyzzy'.toUpperCase()`. We call such functions **methods**.  Think of the previous code as the method `toUpperCase` as returning a modified version of the string 'xyzzy'.

It's unfortunate, but there is no easy way to determine whether you need to use a function or method call for any given function. You must read the documentation or study the source code.

## Mutating the Caller

Sometimes a method permanently alters the object that invokes the method: it **mutates the caller**. To contrast this with non-mutating methods, let's see an example:

```js
let name = "Pete Hanson";
console.log(name.toUpperCase()); // => 'PETE HANSON'
console.log(name);               // => 'Pete Hanson'
```

The `toUpperCase` string method performs a non-mutating (non-destructive) operation. It preserves the previous value of the string: `'Pete Hanson'`. Non-mutating methods like `toUpperCase()` often return a new value or object, but leave the caller unchanged.

Some methods permanently alter the object. We'll use an array method to illustrate. We haven't talked about arrays in detail yet, but we have enough knowledge for this example:

```js
let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers); // => [1, 3, 5, 7]
```

The `pop()` method removes the last element from an array, but it does so **destructively**: the change is permanent. Where the String `toUpperCase` method returns a new value that's a changed version of the original string, `pop` alters the array in-place. In other words, it mutates its caller (the array).

We can also talk about whether functions mutate their arguments. Let's create a function that illustrates this concept:

```js
function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // => [9, 2, 3, 4, 5]
```

This code uses the `[index]` syntax to change the first element of the array that we pass to the `changeFirstElement` function. When the function finishes running, we can see that the original array changed.

Not all functions behave like that; none of our greeting functions alter the values we passed them. To see an example of a non-destructive array function, let's create a function that adds a new element to an array and returns the new array:

```js
function addToArray(array) {
  return array.concat(10);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // => [1, 2, 3, 4, 5, 10]
console.log(oneToFive);             // => [1, 2, 3, 4, 5]
```

The `concat` method returns a new array that contains a copy of the original array combined with the additional elements that we supply with the arguments. Since `concat` creates a copy of the original array and then mutates the copy, it leaves the original array intact, as shown on line #7.

One non-obvious point here is that mutation is a concern when dealing with arrays and objects, but not with primitive values like numbers, strings, and booleans. Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values. Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.

How do you know which methods mutate the caller and which don't? It's useful to know that all primitive values are immutable, so this question never arises when dealing with them. However, there's no way to tell whether a function mutates an array or object. You have to use the documentation or memorize it through repetition.

If you have experience programming in other languages and wonder whether JavaScript is a pass-by-value or pass-by-reference language, JavaScript is both! It uses pass-by-value when dealing with primitive values and pass-by-reference with objects and arrays.

## Function Composition

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum); // => 65

let difference = subtract(80, 10);
console.log(difference); // => 70
```

This works fine. However, in a process called **function composition**, JavaScript lets us use a function call as an argument to another function. Stated differently, we're saying that we can pass `add(20, 45)` and `subtract(80, 10)` as arguments to another function:

```js
console.log(add(20, 45)); // => 65
console.log(subtract(80, 10)); // => 70
```

Passing the function call's return value to `console.log` is the canonical example of function composition in JavaScript. It's useful but uninteresting. Life gets more interesting when you pass function call results to a function that does something more complicated:

```js
function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// 4550 == ((20 + 45) * (80 - 10))
```

Here, we pass the return values of `add(20, 45)` and `subtract(80, 10)` to the `times` function, and we pass the return value of `times` to `console.log`! It produces the same result as the following verbose code:

```js
let sum = add(20, 45);
let difference = subtract(80, 10);
let result = times(sum, difference);
console.log(result);
```

Let's see an even more complicated example:

```js
add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560
```

Let's break down what this code does:

1. First, we pass two arguments to `add`: `subtract(80, 10)` and `times(subtract(20, 6), add(30, 5))`.
2. The first argument—the `subtract` function call—returns `70`.
3. The second argument, the `times` function call, furthermore has two arguments: `subtract(20, 6)` and `add(30, 5)`.
   * `subtract(20, 6)` returns `14`
   * `add(30, 5)` returns `35`
   * using the return values, the entire function call becomes `times(14, 35)`
   * the overall value of the times call is `490`

* 4. Using the return values from steps 2 and 3, we get `add(70, 490)` which returns `560`.

We've seen that function calls always return a value, and we can pass that function call as an argument to another function call. Thus, it's vital to know what values our functions return. In the final analysis, those values get passed as arguments to other functions.

## Three Ways to Define a Function

```js
function functionName(zeroOrMoreArguments...) {
  // function body
}
```

In JavaScript, we call a function definition that looks like that a **function declaration**. A notable property of function declarations is that you can call the function before you declare it.

```js
greetPeople(); // Invoking a function before declaring it

function greetPeople() {
  console.log("Good Morning!"); // => Good Morning!
}
```

Let's see another way to define a function called a **function expression**.

```js
let greetPeople = function () { // space after function keyword not required
  console.log("Good Morning!");
};

greetPeople();
```

Most of it looks like a standard function declaration. However, since we're saving it to a variable, it's a function expression instead. Function expressions have one key difference from a function declaration: you cannot invoke a function expression before it appears in your program.

Our example declares a variable named `greetPeople` and assigns it to the function expression after the `=` sign. We can do that since JavaScript functions are f**irst-class functions**. The key feature of first-class functions is that you can treat them like any other value. In fact, **all JavaScript functions are objects**. Thus, you can assign them to variables, pass them as arguments to other functions, and return them from a function call. The implications are far-reaching.

Any function definition that doesn't have the word `function` at the very beginning of a statement is a function expression. Even wrapping what looks like a function declaration in parentheses creates a function expression:

```js
(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});
```

Another common example of function expressions occur in higher-order functions, a concept we won't explore in this book, but should show:

```js
function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`);
  };
}
```

Look closely at the definition of the `greeter` function. That is not a function declaration -- it's a function expression.

There's a third kind of function in JavaScript called an **arrow function**. Syntactically, arrow functions look radically different from function declarations and expressions. Let's look at one:

```js
let greetPeople = () => console.log("Good Morning!");
greetPeople();
```

Arrow functions are similar to function expressions, but they use a different syntax. The differences are not merely syntactic, however.

For now, let's look at one interesting property of arrow functions: _implicit returns_. First, we'll convert the add function from the previous section to use arrow function syntax:

```js
let add = (a, b) => a + b;
```

Note the lack of a `return` statement. We can omit it in arrow functions _when and only when the function body contains a single expression_ (the expression may have subexpressions, but the entire expression must evaluate to a single value). Suppose it contains two or more expressions or statements. In that case, you must explicitly return a value if you need it, and you must also use curly braces:

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

 Above we define an arrow function getNumber that requires one parameter. The parentheses around the parameter name are optional in this case and are often omitted.

 ## The Call Stack

The call stack helps JavaScript keep track of what function is executing as well as where execution should resume when the function returns. To do that, it works like a stack of books: if you have a stack of books, you can put a new book on the top or remove the topmost book from the stack. In much the same way, the call stack puts information about the current function on the top of the stack, then removes that information when the function returns.

```js
function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second();
```

When this program starts running, the call stack initially has one item -- called a **stack frame** -- that represents the global (top-level) portion of the program. The initial stack frame is sometimes called the `main` function. JavaScript uses this frame to keep track of what part of the main program it is currently working on.

|Call Stack|
|-|
|-|
|-|
|main|

When program execution reaches the function invocation on line 10, it first updates the main stack frame with the current program location. JavaScript will use this location later to determine where execution should resume when second finishes running.

After setting the location in the current stack frame, JavaScript creates a new stack frame for the second function and places it on the top of the call stack: we say that the new frame is pushed onto the stack. Our call stack now looks like this:

Call Stack
-
-
second
main: line 10
Note that the frame for the second function is now stacked on top of the main frame. While the second frame is still on the stack, main remains stuck beneath it, inaccessible. At the same time, the main function becomes dormant and the second function becomes active.

The second function calls the first function on line 6. That action causes JavaScript to update the second frame so that JavaScript will know where to resume execution later. It then creates a new stack frame for the first function and pushes it to the call stack.

Call Stack
-
first
second: line 6
main: line 10
Once the first function begins executing, it invokes the console.log method. All JavaScript functions and methods, including the built-in ones like console.log, share the same call stack. Therefore, we need to record our current location and then push a new frame to the stack:

Call Stack
console.log
first: line 2
second: line 6
main: line 10
Chances are, console.log also has several internal function calls. However, we will ignore them and just assume that console.log does all its work without any additional function calls. Instead, it just logs the message first function to the console, then immediately returns.

When console.log returns, JavaScript removes -- pops -- the top frame from the call stack. That's the frame for console.log in this example. That leaves the previous stack frame exposed. JavaScript uses this frame to determine where execution should resume. In this case, execution resumes immediately after line 2.

Call Stack
-
first: line 2
second: line 6
main: line 10
Eventually, the first function will return. When that happens, the first frame gets popped from the stack. That exposes the stack frame for second, and that, in turn, tells JavaScript that it should resume execution on line 6.

Call Stack
-
-
second: line 6
main: line 10
Next, control passes to the console.log call on line 7. Before console.log is called, the stack frame for second is adjusted to point to line 7:

Call Stack
-
-
second: line 7
main: line 10
We now invoke console.log again. When that happens, it gets added to the stack:

Call Stack
-
console.log
second: line 7
main: line 10
When console.log finishes, its stack frame gets popped from the stack, and control returns to second:

Call Stack
-
-
second: line 7
main: line 10
The second method then finishes executing, which causes its stack frame to be removed from the stack, exposing the stack frame for main. The main frame tells JavaScript to resume execution on line 10.

Call Stack
-
-
-
main: line 10
Eventually, the main function has no more code to run. When this happens, the main frame gets popped from the stack, and the program ends.

Call Stack
-
-
-
-
