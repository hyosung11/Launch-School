# Lesson 2 > Advanced Concepts

## 1. Introduction

With that bit of practice under your belt, it's time to move on and start learning some new concepts and techniques. We'll explore a bunch of new ideas, including hoisting, strict mode, closures, IIFEs, modules, exceptions, and garbage collection. It's a bit of a hodge-podge -- most of the assignments are standalone in that the later assignments don't lean heavily on the earlier ones. Nevertheless, the information presented is important.

At the end of this lesson, you'll have an excellent working knowledge of JavaScript, and will be ready to start using it in more advanced applications. Let's go!

## 2. The `var` Statement

It may surprise you to learn that `let` and `const` are relatively new language features. ES6 introduced these keywords in 2015, but it took a few years before they saw widespread use in applications.

Before `let` and `const` were added to JavaScript, developers declared variables with the `var` statement. While `let` and `const` are now preferred by many developers, there is plenty of old code around that still uses `var`. Inexplicably, some developers even prefer `var`. One way or the other, you will probably have to deal with `var`. Now is as good a time as any to learn about it.

Thus far, we've used the `let` and `const` statements to declare variables. These statements are simple and relatively easy to understand and use; they declare and initialize variables and constants, respectively, and create variables with block scope, which is easy to understand.

Unless stated otherwise, run the examples in this assignment with Node and a JavaScript file, e.g.:

```sh
$ node example.js
```

If you enter code one line at a time in the Node REPL, you may not see the behaviors we want to demonstrate. We'll talk about why this a little later.

### 2.1 What to Focus On

The `var` statement is no longer as important for JavaScript developers to understand as it once was. However, many older JavaScript programs and some newer programs contain `var` statements. You will undoubtedly encounter such code in your career, so you must understand how `var` works. In particular, you must know how it differs from `let` and `const`.

### 2.2 The `var` Statement

Specifically, the `var` statement looks a lot like the `let` and `const` statements.

```js
var foo;
var bar = "qux";
var baz = 3.1415;
```

All three of these statements create a variable. The first creates a variable named `foo`, but sets its value to `undefined`. The second creates a variable named `bar` and assigns `"qux"` as its initial value. The last statement creates a variable named `baz` and gives it an initial value of `3.1415`. Compare that with `let` and `const`:

```js
let foo;
let bar = "qux";
const baz = 3.1415;
```

The two `let` statements are similar to the `var` statements. The first creates a variable named `foo` with an initial value of `undefined`, while the second creates one named `bar` with a value of `qux`. The `const` statement creates a variable whose value cannot be changed. The `var` statement provides no way to create constants like `baz`, so that's one significant disadvantage to using `var`. Despite the similarities, the differences between `let` and `var` are more wide-reaching.

### 2.3 How do `var` and `let` Differ?

The easiest way to see how `var` and `let` differ is with a couple of examples. First, let's see how they interact with the global object:

```js
//**********************************************************
// Use the Node REPL for this example.
// Type the commands one at a time - don't use copy and paste.
//**********************************************************

var bar = 42;
console.log(global.bar); // 42
bar += 1;
console.log(global.bar); // 43

let foo = 86;
console.log(global.foo); // undefined
```

This example shows that using `var` at the top level of a program creates a property on the global object, e.g., `global` in Node or `window` in a browser. Thus, we can use `global.bar` to examine the value of `bar`. However, the `let` declaration doesn't add a property to the global object. In fact, it doesn't add a property to any object - it simply creates a variable. Since the `global.foo` doesn't exist, JavaScript returns `undefined` when we try to access it.

This behavior shows that `let` is safer than `var` when used at the program's top level. Placing properties on the global object may lead to conflicts and bugs; `let` alleviates that issue.

When you use `var` inside a function, the variable is **not** stored as a property of the global object:

```js
function foo() {
  var bar = 42;
  console.log(global.bar); // undefined
}

foo();
```

### 2.4 Scope and `var`

A much more significant difference is that `let` is **block-scoped**, while `var` is **function-scoped**. A block-scoped variable is only visible within the block where it is declared; in JavaScript, a block is code delimited by curly braces, `{...}`.

(Remember: [not everything between braces is a block](https://launchschool.com/books/javascript/read/variables#variablescope).)

Not everything between curly braces is technically a block. For instance, the braces that surround an object literal do not define a block. Technically, the braces that surround a function body don't define a block either, though it is convenient to think of function bodies as blocks. While there are similarities between blocks, function bodies, and, to a lesser degree, object literals, the term block usually refers to executable code between braces, including function bodies:

```js
{
  // this is a block
  let foo = 42;
  console.log(foo);
}

if (answer === 'yes') {
  // this is a block
  console.log('yes');
} else {
  // so is this
  console.log('nope');
}

while (answer !== 'no') {
  // this is a block
  doSomething();
}

function foo() {
  // not technically a block. However, we can treat it as a block.
  let foo = 42;               // foo has block scope
  console.log(foo);
}

let foo = {
  // this is not a block
  bar: 42,
};
```

A function-scoped variable is visible within the function where it is declared. This difference in scope can lead to unexpected behavior when using `var`:

```js
function foo() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log(a); // 1
  console.log(b); // ReferenceError: b is not defined
}

foo();
```

Whoa! That is different. What's going on here? Why can we access variable `a` when it's declared inside the `if` statement's block, but we can't access `b` even though it is declared in the same block? That doesn't make much sense.

The answer is that `var` *creates a variable with function scope*, while `let` *creates a variable with block scope*. Thus, `a` is available everywhere in the function, but `b` is only available in the block.

That has a peculiar side effect when we use var. Consider this code:

```js
function foo() {
  if (false) {
    var a = 1; // line 3
  }

  console.log(a); // undefined
}

foo();
```

Even though the code on line 3 never runs, we still create a variable named `a` with function scope. Furthermore, since we're not initializing `a`, it receives a default value of `undefined` instead of `1`. Thus, line 7 displays `undefined`.

Though the difference in scope explains these behaviors, we also need to know how function-scope and block-scope work. That's where **hoisting** enters the picture. We'll get to that in the next two assignments.

Are you curious why we insisted that you use the Node REPL for the example at the beginning of this section? Let's see what happens when we put that code in a file and run it from the command line:

```js
var bar = 42;
console.log(global.bar);
bar += 1;
console.log(global.bar);

let foo = 86;
console.log(global.foo);
```

```sh
$ node global.js
undefined
undefined
undefined
```

Other than some deleted comments, our code hasn't changed. However, the results have. This time, we see `undefined` instead of `42` and `43` when we log the value of `global.bar`. This is a peculiarity of Node -- when you run a JavaScript program file with Node, Node "wraps" your code in a function that looks like this:

```js
(function (exports, require, module, __filename, __dirname) {
  // your code is here
});
```

Can you see why `bar` isn't defined in `global`? Think about it for a moment.

So, what's going on? The issue here is that your code is running inside a function. If you use `var` inside a function, it creates a function-scoped variable, not a global variable. Thus, the variable doesn't show up as a property of the global object.

Since the Node REPL doesn't use this **wrapper function**, `var` declarations at the top level are stored in the global object.

The effect of the wrapper function may sound like a bizarre edge case that won't affect you, but it probably will someday soon. This is because the wrapper function, or its absence, is the source of most problems involving differing behavior in the REPL and a program file.

### 2.5 Summary

In this assignment, we introduced the `var` statement. Though the `var` statement is mostly "on the way out," it hasn't been deprecated as of 2019. In fact, it will probably still be around for a very long time to come.

Coming up next, we'll look more deeply at the concept of scope and how it applies to declarations in JavaScript.

## 3. More About Scope

Now that we know about the `var` statement, let's take a closer look at scope. Our primary purpose in this assignment is to reduce the ambiguity involved in the language surrounding scope in JavaScript. To do that, we'll describe scope as three separate but related concepts.

Run the examples in this assignment with Node and a JavaScript file, e.g.:

```sh
node example.js
```

Do not use the Node REPL as it may interfere with the behaviors we want to demonstrate.

### 3.1 What to Focus On

Scope is a fundamental concept in all computer languages. However, the terminology can sometimes be a little confusing, especially in JavaScript. Thus, you should focus on understanding scope:

* What do we mean by declared scope, visibility scope, and lexical scope?
* What do we mean by global scope and local scope?
* What do we mean by inner scope and outer scope?
* What do we mean by function scope and block scope when talking about declared scope?
* What do we mean by function scope and block scope when talking about visibility scope?

### 3.2 Declared Scope vs Visibility Scope vs Lexical Scope

We use terms like global scope, local scope, function scope, block scope, inner scope, and outer scope when we talk about scope. Unfortunately, the terminology can be fluid and confusing. For instance, a variable can be declared with block scope by using the `let` keyword. If that declaration is inside a function, it has local scope. It can also have function scope if the declaration isn't inside a block. The variable can also have global scope if the declaration is at the topmost level of the program, outside all functions and blocks. To make matters worse, we can also talk about inner scope and outer scope. For instance, if you have a function that declares a variable, that variable is in the function's inner scope. However, the function can also reference variables from the surrounding scope, i.e., the function's outer scope.

What's a new developer to do? One way to help keep things straight is to look at scope as having *three subtly different but related meanings.*

In one sense, scope refers to where a particular identifier -- a variable, function, or class name -- is available for use by your code. We can call this the **visibility scope**. If a variable is available throughout your code, then it has global scope. Otherwise, it has local scope.

In another sense, scope refers to how a particular identifier is declared. We'll call this the **declared scope**. For instance, we use the `let` keyword to declare variables with block scope, and use `var` to declare variables with function scope. Knowing the declared scope lets us determine where a variable is available.

Finally, scope can refer to the lexical structure of your code. We'll call this the **lexical scope**. The lexical scope distinguishes between variables that are declared inside a function or block and the variables that are declared outside of that function or block. Lexical scope is especially important with **closure**, as we'll learn later.

The terms **visibility scope** and **declared scope** *are terms of convenience*. You probably won't find either term used outside of Launch School. **Lexical scope** *is widely used*.

Though the visibility, declared, and lexical scopes have different meanings, there is considerable overlap. For instance, if we use `let` to declare variables with block scope at the topmost level of the program, then those variables also have global scope:

```js
// `let` used to declare variables with block scope at the topmost level of the program also have global scope
let foo = 1;
let bar = 2;
console.log(foo, bar); //  1 2
```

However, if we rearrange that code *so part of it is inside a block*, we get something different:

```js
let bar = 2;

if (true) {
  let foo = 1;
  console.log(foo, bar); //  1 2
}
```

Here, both `foo` and `bar` are again declared with block scope. However, `foo` now has local scope for its visibility scope. Confusingly, we can also say that its visibility is block scope. Furthermore, `foo` in this example is in the block's inner scope, while `bar` is in its outer scope.

Let's explore these scopes in some more detail.

#### 3.2.1 Declared Scope

Declared scope concerns how a variable is declared: `let`, `const`, `class`, `var`, or `function`. The first three declare variables with **block scope** while the other two declare variables with **function scope**. *Even if the variable is declared outside of a function or block, it has either block or function scope:*

```js
let foo1 = 1;        // declared scope is block scope
var bar1 = 2;        // declared scope is function scope

if (true) {
  let foo2 = 3;      // declared scope is block scope
  var bar2 = 4;      // declared scope is function scope
}

function xyzzy() {  // declared scope is function scope
  let foo3 = 5;     // declared scope is block scope
  var bar3 = 6;     // declared scope is function scope

  if (true) {
    let foo4 = 7;   // declared scope is block scope
    var bar4 = 8;   // declared scope is function scope
  }
}
```

Note that the declared scope of each variable above is determined solely by which keyword was used to declare it: `let` or `var`.

Block Scope | Function Scope
---------|----------|---------
 `let` | `var`
 `const` | `function`
 `class` | -

RR

#### 3.2.2 Visibility Scope

#### 3.2.3 Lexical Scope

### 3.3 How to Talk About Scope

### 3.4 Summary

In this assignment, we refined the concept of scope to include declared scope, visibility scope, and lexical scope. This refinement lets us discuss scope with a bit less fuzziness.

In the next assignment, we'll talk about hoisting. Hoisting is an important mental model that lets JavaScript better understand how scope works.

## 4. Hoisting

## 5. Practice Problems: Hoisting and the `var` Statement

## 6. Strict Mode

## 7. Closures

## 8. Practice Problems: Closures

## 9. Closures and Private Data

## 10. Immediately Invoked Function Expressions

## 11. Practice Problems: Immediately Invoked Function Expressions

## 12. Shorthand Notation

## 13. Practice Problems: Shorthand Notation

## 14. Modules

## 15. Exceptions

## 16. Garbage Collection

## 17. Side Effects and Pure Functions

## 18. JS130 Exercises

## 19. Summary

## 20. Lesson 2 Quiz 1