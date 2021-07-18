# Lesson 2: Small Programs

## 1. Introduction

Work through several JavaScript programs of increasing difficulty. Think about the logic of a program and how to debug and get familiar with writing lots of code.

### Pre-requisites

- Node.js installed
- execute JavaScript programs
- know how to use the node console
- be familiar with JavaScript syntax and data structures (Arrays and Objects)
- know how to use git and push code to GitHub
- completed the Prep courses and all assignments

### Afterwards

- gained confidence in writing your first JavaScript programs
- this is the first step to learning to program

## 2. Style Guide

Adhering to a particular style convention helps your teammates and future maintainers understand your code.

The conventions we'll discuss in this section are specific to the JavaScript community. Other programming languages—and even some JavaScript sub-communities—may have different preferences about each guideline.

Here's a short list of **guidelines** that we recommend. They will help you write readable code, and smooth the process of asking for code reviews at Launch School.

- Set your text editor to use **space characters**—not tabs—for indentation. The editor should also insert spaces if you press the `Tab` key on your keyboard.

- Set your text editor to use 2 spaces for indentation and when converting tab characters to spaces.

- Try to limit lines to 80 characters. This limit isn't a universal preference, but it helps readability. Not all developers have massive screens or good eyesight.

- JavaScript uses the character sequence `//` to mark the beginning of a comment. The comment runs through the end of the line. You can also use `/*` and `*/` for multiline comments and comments that appear in the middle of a line. Programmers use comments to leave notes for other programmers or themselves at a later point in time; however, don't overdo your comments. Let your code do the talking instead.

- Use **camelCase** formatting for variable and function names. Such names begin with a lowercase letter. If the name contains multiple words, each subsequent word should begin with an uppercase letter:

```js
// declaring and initializing a variable
let answerToUltimateQuestion = 42;

// defining a function
function fourScoreAndSevenYearsAgo() {
  // do something
}
```

- Some special functions called **constructor** functions use PascalCase names (also called CamelCase -- note the capitalization). For instance:

```js
// defining a function
function DomesticCat(name) {
  // do something
}

let cat = new DomesticCat('Fluffy');
```

We discuss constructors briefly a little later, and in more detail in a later course.

- Use uppercase names with underscores to represent **const** values: values that don't change.

```js
const INTEREST_RATE = 0.0525;
const FOUR = 'four';
```

This naming style is called **SCREAMING_SNAKE_CASE**.

- All names—variables and constants as well as functions—should use **alphabetic** (a-z, A-Z without umlauts, accents, and so on) and **numeric** characters only. The first character must be alphabetic. Constants may use underscores within the name, but should not use consecutive underscores, nor may they begin or end with an underscore.

JavaScript also allows a `$` in names, but this should only be used when working with a library that uses `$` names, such as jQuery, which we discuss towards the end of the Core Curriculum. For our purposes, though, you should treat names with `$` as *non-idiomatic*; they're legal, but not used except in certain cases.


CoursesJS101 Programming Foundations with JavaScriptLesson 2: Small Programs2. Style Guide
Style Guide
The JavaScript community has some stylistic guidelines that help make JavaScript code easier to read and write. Not all of the guidelines agree on all points, but there's plenty of overlap. Adhering to the style conventions of a programming language is helpful and meaningful even if you don't agree with every convention. You probably won't be the sole person developing and maintaining a software project; adhering to a particular style convention helps your teammates and future maintainers understand your code. It's hard enough to understand code written by someone else; don't make it harder with unusual or non-standard stylistic choices.

The conventions we'll discuss in this section are specific to the JavaScript community. Other programming languages—and even some JavaScript sub-communities—may have different preferences about each guideline.

Here's a short list of guidelines that we recommend. They will help you write readable code, and smooth the process of asking for code reviews at Launch School.

Set your text editor to use space characters—not tabs—for indentation. The editor should also insert spaces if you press the Tab key on your keyboard.

Set your text editor to use 2 spaces for indentation and when converting tab characters to spaces.

Try to limit lines to 80 characters. This limit isn't a universal preference, but it helps readability. Not all developers have massive screens or good eyesight.

JavaScript uses the character sequence // to mark the beginning of a comment. The comment runs through the end of the line. You can also use /* and */ for multiline comments and comments that appear in the middle of a line. Programmers use comments to leave notes for other programmers or themselves at a later point in time; however, don't overdo your comments. Let your code do the talking instead.

Use camelCase formatting for variable and function names. Such names begin with a lowercase letter. If the name contains multiple words, each subsequent word should begin with an uppercase letter:

Copy Code
// declaring and initializing a variable
let answerToUltimateQuestion = 42;

// defining a function
function fourScoreAndSevenYearsAgo() {
  // do something
}
Some special functions called constructor functions use PascalCase names (also called CamelCase -- note the capitalization). For instance:

Copy Code
// defining a function
function DomesticCat(name) {
  // do something
}

let cat = new DomesticCat('Fluffy');
We discuss constructors briefly a little later, and in more detail in a later course.

Use uppercase names with underscores to represent const values: values that don't change.

Copy Code
const INTEREST_RATE = 0.0525;
const FOUR = 'four';
This naming style is called SCREAMING_SNAKE_CASE.

All names—variables and constants as well as functions—should use alphabetic (a-z, A-Z without umlauts, accents, and so on) and numeric characters only. The first character must be alphabetic. Constants may use underscores within the name, but should not use consecutive underscores, nor may they begin or end with an underscore.

JavaScript also allows a $ in names, but this should only be used when working with a library that uses $ names, such as jQuery, which we discuss towards the end of the Core Curriculum. For our purposes, though, you should treat names with $ as non-idiomatic; they're legal, but not used except in certain cases.

- When writing code with curly braces, such as functions and `if` statements, write the opening brace on the same line as the function name or conditional expression. Use a single space before the opening brace:

```js
// bad
function test(){
 // do something
}

// bad
function test()
{
  // do something
}

// bad
if (foo === bar){
  // do something
}

// bad
while (foo !== bar)
{
  // do something
}

// good
function test() {
  // do something
}

// good
if (foo === bar) {
  // do something
}

// good
while (foo !== bar) {
  // do something
}
```

- Use spaces between *operators* and *operands* to make your code less cluttered and easier to read:

```js
// bad
let sum=x+5;

// good
let sum = x + 5;
```

- Use *semicolons* to terminate each logical line of code unless the line ends with `{`,` }`, or `:`. See the discussion in our [Introduction to Programming With JavaScript](https://launchschool.com/books/javascript/read/preparations#stylishjavascript) book for details.

That covers the essential style conventions you need to get started. If you want more information about JavaScript styling, we recommend [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript). Check it out, but don't try to memorize all of the rules; ESLint, which we'll discuss soon, will help you remember the most important rules.

## 3. Set up a new directory for this lesson

Now, you should be working in a new local git repository. Recall that you can turn any directory locally into a git repo with the `git init` command. Just make sure to not nest git repositories within each other. If you've forgotten how to create a git repository locally, review [this chapter](https://launchschool.com/books/git/read/creating_repositories).

Within your new git repo, create a new directory for this lesson. Call it `lesson_2` or something that makes sense to you. Create your assignments for this lesson in this directory. Later, we'll set up some configurations for this directory that will affect all files within it.

## 4. Truthiness

The ability to express **true** or **false** is vital in any programming language. It helps us build c*onditional logic* and to understand the state of an object or expression. Typically, we capture the notion of whether a value is true or false in a **boolean** data type. A boolean is an **object** whose only purpose is to *convey whether it is true or false*.

JavaScript uses the `true` and `false` *primitive values* as booleans. You can print them, assign them to variables, pass them around, and test them:

```js
// 1
console.log(true);    // true
console.log(false);   // false

// 2
function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

makeLonger("abc", true);  // 'abcabc'
makeLonger("xyz", false); // 'xyz'

// 3
function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
}

isDigit("5");  // true
isDigit("a");  // false

// 4
if (value === true) {
  console.log("It's true!");
} else if (value === false) {
  console.log("It's false!");
} else {
  console.log("It's not true or false!");
}
```

### Expressions and Conditionals

In real code, you wouldn't usually use the `true` or `false` values directly in a conditional expression like `value === true`. Instead, you would merely evaluate an expression that should evaluate as either `true` or `false`. For instance:

```js
let num = 5;

if (num < 10) { // same as `if ((num < 10) === true)`
  console.log("small number");
} else {
  console.log("large number");
}
```

The above code outputs `small number` since `num < 10` *evaluates* as true. We can verify that in the `node` REPL:

```js
> let num = 5
> num < 10
= true

> num = 12
> num < 10
= false
```

In much the same way, a function doesn't usually return `true` or `false` explicitly. Instead, it *returns the result* of a **conditional expression**. For instance:

```js
function isSmall(number) {
  return number < 10;
}

let num = 15;

if (isSmall(num)) {
  console.log("small number");
} else {
  console.log("large number");
}
```

This code logs `large number` since `isSmall(num)` *evaluates* as `false` when `num` greater than or equal to `10`.

### Logical Operators

Logical operators *evaluate* an expression that involves two subexpressions, then return a value that evaluates as true or false:

#### The `&&` Operator

`&&` is the **and** operator. It *evaluates* as **true** only when *both* sub-expressions evaluate as **true**:

```js
> true && true              // true
> true && false             // false
> false && true             // false
> false && false            // false

> let num = 5
> num < 10 && num > 3       // true
> num < 10 && num > 6       // false
> num > 10 && num < 6       // false
> num > 10 && num < 3       // false
```

Note, though, that we didn't have to put subexpressions like `num > 10` in parentheses. JavaScript's **precedence** rules treat `>` with higher precedence than `&&`. That means that it treats `num < 10 && num > 3` as `(num < 10) && (num > 3)`, not as `num < (10 && (num > 3))` or `num < ((10 && num) > 3)`.

The precedence rules can cause much confusion, especially if your concept of how to evaluate an expression differs from JavaScript's. Thus, it's a good idea to always use **parentheses** with expressions that involve multiple operators:

```js
> (num < 10) && (num > 3)
```

The **parentheses** *make* your intent clear and prevent confusing situations.

You can *chain* as many sub-expressions as you'd like with `&&`; the sub-expressions *get evaluated left to right*. If any sub-expression is **false**, the entire `&&` chain evaluates as **false**. The whole expression evaluates as **true** only when *all* of the sub-expressions *evaluate* as true:

```js
> let num = 5
> (num < 10) && (num > 0) && ((num % 2) === 1)
= true

> (num < 10) && (num > 0) && ((num % 2) === 1) && false
= false
```

#### The `||` Operator

`||` is the **or** operator. It *evaluates* as **true** when **either of** the two sub-expressions evaluates as true; it *evaluates* as **false** when **both** sub-expressions evaluate as **false**.

```js
> true || true              // true
> true || false             // true
> false || true             // true
> false || false            // false

> let num = 5
> num < 10 || num > 3       // true
> num < 10 || num > 6       // true
> num > 10 || num < 6       // true
> num > 10 || num < 3       // false
```

#### Short-Circuit Operators

Both `&&` and `||` exhibit a behavior called **short-circuiting**. That means that JavaScript stops evaluating sub-expressions once it can determine the final value. In the case of `&&`, JavaScript short-circuits when it realizes that the entire expression can't be true; that is, when it *encounters a false sub-expression*. With `||`, it short-circuits when it r*ealizes that the expression can't be false*; that is, at least one sub-expression is true.

Consider `&&`: it short-circuits when it encounters the first sub-expression (from left-to-right) that evaluates as false:

```js
> false && undefined.length
= false
```

Notice that the above code doesn't generate a `TypeError` even though the code includes the sub-expression `undefined.length`. By itself, `undefined.length` raises a `TypeError`. However, since the left side of the `&&` guarantees that the entire expression can't be true, the *right side never executes*. Instead, the expression evaluates as false.

Conversely, this code *does raise an exception*:

```js
> true && undefined.length
TypeError: Cannot read property 'length' of undefined
```

Likewise, the `||` operator **short-circuits** when it encounters the first `true` sub-expression, again based on left-to-right evaluation:

```js
> true || undefined.length
= true
```

The above code *doesn't raise* a `TypeError` since `||` didn't evaluate the second sub-expression; it **short-circuited** when `true` evaluated as true.

Relying on the short-circuit behavior can be dangerous, but it's sometimes handy. For instance, suppose you have a `name` variable that usually contains a string, but may sometimes contain `null`. Before you can use the string's `length` property, you must *confirm* that it isn't `null`:

```js
if (name && (name.length > 0)) {
  console.log(`Hi, ${name}.`);
} else {
  console.log("Hello, whoever you are.");
}
```

This type of conditional expression often appears in real-life JavaScript code, so get familiar with it. In particular, make sure that you understand that *JavaScript doesn't evaluate the right-side of a short-circuit operator when the expression short-circuits*.

#### Truthiness

The discussion so far should be mostly review. It's time to talk about the main topic of this assignment: what is **truthiness**, and how does it impact our code? We'll tackle that next.

After that review of booleans and logical operators, we're finally able to talk about the notion of **truthiness**. Truthiness differs from boolean values in that *JavaScript evaluates almost all values as true*. There are some exceptions, however:

- `false`
- `undefined`
- `null`
- `0`
- `""` (empty string)
- `NaN`

All of these values evaluate as false. **Memorize** them!

Notice that we've repeatedly used the phrases *evaluated as true* and *evaluated as false*.

- You can also use the terms **truthy** and **falsy** to describe the nature of the values.
- Be careful to make the same distinction in your own written and spoken communications.
- Saying that an expression returns `true` or `false` is not the same as saying that it returns a truthy or falsy value, or that it evaluates as true or false. 
- The terms true and false refer to the **Boolean** values `true` and `false`; the other phrases refer to *truthiness*, that is, a **truthy** or **falsy** value.

**Truthiness** means that we can use any condition or logical expression:

```js
let num = 5;
if (num) {
  console.log("valid number");
} else {
  console.log("error!");
}
```

If you didn't know JavaScript at all, you might guess that the above code should either output `error!` or generate an error of its own. However, when you run that code, it outputs `valid number`. That's because JavaScript considers any non-zero (and non-NaN) number to be **truthy**. It *does not, however, mean* that `num` is equal to `true`:

```js
console.log(num === true);        // => false
```

The use of **truthy** and **falsy** values sometimes leads to some surprising code:

```js
let name;
if (name = getNameFromUser()) {
  console.log(`Hi ${name}`);
} else {
  console.log("you must enter your name!");
}
```

Presumably, `getNameFromUser` solicits and returns the user's name and returns an empty string if the user doesn't enter a name. *Since an empty string is* **falsy**, we can test for a missing name by evaluating the assignment `name = getNameFromUser()`. If the user didn't enter her name, *the expression evaluates as false*, and the code logs you must enter your name!.

While this type of code is commonplace, most style guides strongly discourage it. We at Launch School also discourage it. The code looks like it could be a mistake. Perhaps the programmer intended to write `name == getNameFromUser()` or `name === getNameFromUser()`. It's safer and more intentional to write:

```js
let name = getNameFromUser();
if (name) {
  console.log(`Hi ${name}`);
} else {
  console.log("you must enter your name!");
}
```

Better yet, make it clear that you're **testing** for an empty name:

```js
let name = getNameFromUser();
if (name === "") {
  console.log("you must enter your name!");
} else {
  console.log(`Hi ${name}`);
}
```


