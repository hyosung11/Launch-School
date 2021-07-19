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

## 5. Walk-through: Calculator

Our first program in this course will be a command line calcultor program that will:

1. Ask the user for two numbers.
2. Ask the user for the type of operation to perform: add, subtract, multiply or divide.
3. Perform the calculation and display the result.

**Getting Ready to Code**

Let's start writing the first version of the calculator. Open your terminal and navigate to the directory you created for this lesson and create a file named c`alculator.js` in that directory:

```js
touch calculator.js
```

Go ahead and open the newly created file in your favorite editor. We'll start coding soon.

Before we begin, though, we must install a **library** called `readline-sync` in our *working directory*. This library provides a simple way to retrieve user input from the command line. Node's built-in way to retrieve command line input requires a basic understanding of **asynchronous programming** which we're not ready to deal with right now.

To install `readline-sync`, run the following command from your lesson directory:

```js
npm install readline-sync --save
```

The output from this command may contain warnings; ignore them for now. You should be good to go as long as the output includes a line similar to the following towards the end:

```js
added 1 package from 1 contributor and audited 1 package in 3.561s
```

If successful, this command should create a directory called `node_modules` inside your lesson directory. Confirm that it's there and that it contains a `readline-sync` subdirectory. If both directories are there, then you're ready to use the `readline-sync` library and can start writing the calculator program.

**Starting to Code**

Some folks are visual learners, and really enjoy seeing complex topics covered as videos. Application walkthroughs, like the one we're about to do, often work well as videos, so we've provided a video walkthrough of this project that you can watch if you want.

[Video Version](https://launchschool.com/lessons/64655364/assignments/e3733b97)

Even if you watch the video, you may still want to read through the text version of the walkthrough below. The **repetition** can help you understand things better.

Let's begin by writing out the steps, in plain English, that our program must perform. Try to make a habit of writing some **pseudocode** before you start writing code. You can use comments to write your pseudocode directly in the `calculator.js file`.

```js
// calculator.js
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
```

Let's write some code. We begin by welcoming the user to our program:

```js
console.log('Welcome to Calculator!');
```

Save the file and run the program with the command n`ode calculator.js`. You should see the welcome message logged to the console.

```js
$ node calculator.js
Welcome to Calculator!
```

**Asking for the Numbers**

Next, we want to ask the user to input the first number. Asking a question is easy; just log the query to the console:

```js
console.log('Welcome to Calculator!');

console.log("What's the first number?");
```

If you run this program, you'll see that it asks the user for the first number, but it immediately stops running. The program doesn't wait for the user to input something. We need `readline-sync` and it's `question` function to obtain the user's response.

To use `readline-sync`, we need to require it at the top of our calculator program:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
```

The first line uses the built-in Node function `require` to look for the `readline-sync` library in the `node_modules` folder. The **function** returns the library in the form of an **object** that we can assign to the `readline` variable. The variable name doesn't have to be `readline`; you can choose any name you want, but it makes sense to use a name that helps you remember what the variable contains.

We'll use the `question` method from the r`eadline-sync` library to get input from the user. To do so, we need to *refer* to the **method** as `readline.question`, where `readline` is the name of the variable that contains the library object.

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
readline.question();
```

The `question` **method** causes the program to wait for some keyboard input. It *returns the input as a string* when the user presses the Return key. Let's try it:

```js
$ node calculator.js
Welcome to Calculator!
What's the first number?
```

After logging `What's the first number?`, the program pauses and waits for you to type something. Type a number and press the Return key. The program should exit when you do that.

Great! We now have a way to capture keyboard input from the user. Right now, though, we aren't doing anything with that input. Let's assign the return value of `readline.question`, a string, to a variable and display that string to make sure we're getting the input from the user:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log(number1);
```

Run this program and verify that it works correctly. It'll redisplay whatever you type at the prompt.

We can do something similar with the second number and log both numbers:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log(`${number1} ${number2}`);
```

After running this program and entering two numbers, you'll see them both printed next to each other on the same line.

**Performing the Operation**

So far, so good. However, we want to do something with these two numbers. We need to either add, subtract, multiply or divide them based on what the user requests. First, we need to ask the user what they want to do:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();
```

The `\n` in that string is an **escape sequence** that tells Node to start a newline at that point in the output. We call this escape sequence a **newline** character.

Here, we ask the user to enter `1` if they want to perform addition, `2` if they want to perform subtraction, `3` if they want to perform multiplication, and `4` if they want to perform division on the two numbers. Run the program to verify that it works as expected.

We can now use our knowledge of `if/else` statement to perform arithmetic operations based on what the user requested. We'll cover the addition operation first:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = number1 + number2;
}

console.log(`The result is: ${output}`);
```

Here, we declare an `output` variable to receive the result of the arithmetic operation. We'll assign the value conditionally based on which operation the user requests. For instance, here we test whether `operation` holds the string value `'1'`, i.e., the user wants to perform addition. If that's the case, we add the two numbers and assign the result to `output`. The last line then logs the output to the console.

Since `readline.question` always returns a string, we must compare the `operation` variable with the string `'1'`, not the number `1`. The number version of the comparison won't evaluate to true unless you use the loose equality operator (`==`). Since `==` can coerce one or both values to a different type, its behavior may be confusing. We strongly recommend that you always use `===`, not `==`, to avoid these confusing behaviors; **explicit coercions** more clearly show what's happening.

Let's run the program and see what happens. Ask the program to add `3` and `3`. In light of what we just said about the use of strings, it should come as no surprise that the output is `33` instead of `6`. The `+` operator *always performs concatenation* if one of its arguments is a string, so the result is `33`.

To get around this behavior, we need a way to *convert the strings to numbers* before adding them. The JavaScript `Number` function does that. Let's convert `number1` and `number2` to numbers and then add them:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;

if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
}

console.log(`The result is: ${output}`);
```

You should get the correct output this time.

Let's add an `else if` clause to our if statement to take care of the subtraction operation:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
  output = Number(number1) - Number(number2);
}

console.log(`The result is: ${output}`);
```

Run this program and make sure you get the right output.

We can follow the same template to take care of the last two operations, multiplication and division:

```js
const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // 3 represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === '4') { // 4 represents division
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
```

Our calculator app is now complete! Play around with it using different numbers and operations to see that it covers all cases.

## 6. Pseudocode

When you write programming code, you're writing it for other programs to process. When you write JavaScript, you are writing for the JavaScript engine/interpreter to process. If you *make a syntax error*, the JavaScript interpreter will complain, saying it doesn't know how to process the broken syntax. If there are no errors, the interpreter can parse and execute the code. Since programming code must be **error-free**, you must follow a rigid format when programming. A missing period or an additional comma may cause the entire program to break.

Pseudocode, on the other hand, is for humans -- machines or programs can't read it (at least, not yet!), so its format is relaxed. Human brains are far more flexible and powerful than programming language interpreters or compilers.

For example, here's some pseudocode for a function that determines which number in a collection has the greatest value.

```js
Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.
```

This approach is one that we can use to solve the problem. We don't start writing code from the beginning, but instead try to **load the problem into our brain first**.

When you first approach any problem, it's important to try to **understand** it well. To do that, you must spend some time to load the problem into your brain. Only then can you start to dissect it, understand it, and come up with an execution path to solve it.

Unfortunately, loading the problem into your brain takes some effort, and you must turn the problem over and over before it gets fully absorbed by your brain. Doing this while working with a programming language is hard since your train of thought gets interrupted time and again by having to deal with syntax issues. Instead of thinking about the logic and dissecting the problem, you're searching for specific language syntax issues to please the interpreter, which has nothing to do with the logical aspect of solving a problem.

Therefore, there are two layers to solving any problem:

- The logical problem domain layer.
- The syntactical programming language layer.

When you're not yet fluent in a programming language, doing both at the same time can be very difficult and frustrating.

Pseudocode comes in to play at this point. Using pseudocode lets us focus on the logical problem domain layer without dragging us down to the programming language layer.

The problem with pseudocode, however, is that *we cannot verify its logic*. The above pseudocode that we wrote earlier, for example, seems about right. However, how can we be sure? To verify the logic, we must translate the pseudocode into programming code, which is where you can focus on programming language syntax issues without having it interrupt your flow.

### Formal Pseudocode

Before we can take our pseudocode and translate it to program code, we must formalize the pseudocode a little more. We'll still use English, but we'll use some keywords to help us break down the program logic into concrete commands, which makes translating to code more natural.

We'll use the below keywords to assist us, along with their meaning.

| Keyword | Meaning |
| ------- |-------- |
| START | start of the program |
| SET | set a variable that we can use for later |
| GET | retrieve input from user |
| PRINT | display output to user |
| READ | retrieve a value from a variable |
| IF/ELSE IF/ELSE | show conditional branches in logic |
| WHILE | show looping logic |
| END | end of the program |

We can use the above keywords to act as a pseudo-programming language, but one that's still written in English, which lets us be more relaxed about the precision of the syntax. Here's a stab at translating to formal pseudocode:

```js
START

Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to next iteration
  
  iterator = iterator + 1

PRINT savedNumber

END
```

Note that we're using PRINT to show the final return value. This translation almost looks like program code, but it's not. The advantage of this additional step is to give more structure to the pseudocode and to let us think at a more detailed level, yet still not worry about a programming language syntax. Though detailed it may be, this pseudocode still suffers from the same problem -- *we can't verify that this logic is sound*. Finally, to test the logic, we need to translate it into program code.

### Translating Pseudocode to Program Code

We're using JavaScript, so here's a stab at it in JavaScript. Note that we *eschew **explicit** iteration over the more idiomatic **implicit** iteration using* `forEach`. That's a language-specific choice. If we were to write this program in some other language, we might choose to iterate using a `for` loop instead. Even in JavaScript, you can use a `for` loop if that's the style of programming you prefer.

```js
function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}
```

If we run the above code, we can show that our pseudocode logic works!

Now, let's look at the working code, and start to improve it from a lower layer -- at the programming language level. For instance, what should we do if `numbers` is `undefined`? Perhaps we can use a **guard** clause that returns `undefined`, like this: `if (numbers === undefined) return;`. Now that we have the general logic and code in place, there are other small improvements we can make.

In this example, the function we wanted to write was straightforward. We were able to write a few lines of pseudocode, move it to a more formal pseudocode, and then translate it to JavaScript. However, most problems you encounter will be more difficult than this example. You won't be able to take the same approach. That is, you won't be able to detail out the entire problem first in pseudocode, then translate all of it into JavaScript. If you did, you'd likely discover that a lot of your logic or assumptions in the pseudocode is incorrect, and you'll need to make some changes that ripple across the entire program, forcing you to start over time and again. Remember, *pseudocode is a guess at the solution*; there's no verification that the logic is correct. You can't do that until you translate it to program code.

For more sophisticated problems, we need to *take a piecemeal approach when writing pseudocode*, then translate that pseudocode to JavaScript. Once we verify that the logic is correct, we can move to the next piece of the problem. Step-by-step, we slowly **load the problem into our brain**, verifying the logic each step along the way.

We'll show you how to use **flowcharts** to help with this in the next assignment. For now, try a few practice rounds using pseudocode to guide your problem-solving logic. For example, write out pseudocode (both casual and formal) that does the following:

- a function that returns the sum of two numbers
- a function that takes an array of strings, and returns a string that is all those strings concatenated together
- a function that takes an array of integers, and returns a new array with every other element

You don't need to write any JavaScript code here; just practice writing the logic in English.

You don't need to use pseudocode for every bit of code you write, especially once you get down to the function level. However, it's a good idea to always use it here in this course and the associated Small Problem exercises. This will help you overcome problems in the short term, and prepare you for the interview assessment later on.

For brevity, we won't use pseudocode extensively in this course. However, we will use it for the more complicated problems and when we feel that it most helpful to see the pseudocode for a problem.

20210719 10:38 Assignment Complete

## Flowchart

Using a flowchart helps us map out the logical sequence of a possible solution in a visual way. We'll take a stab at drafting a flowchart for the same problem we saw in the previous assignment. First, though, let's take a look at the components at our disposal in a flowchart.

![Flowchart Components](flowchart_components.jpg)

Using the components above, here's what a flowchart would look like for our approach to finding the largest number in a collection.

![Flowchart Largest Number](flowchart_largest.jpg)

The above flowchart uses the non-idiomatic name **saved_number**. *This is a mistake*. The idiomatic version of this name should be `savedNumber`.

Note that the decision (the diamond) component should only have **two branches**. *If you have a decision condition that has 3 (or more) branches, use separate diamonds for each branch.*

Note that the arrows show the logic "flow" and that we're taking great pains to **specify the iteration logic**. That helps us map out the step-by-step logic our program would need to solve this problem. It's called the ***imperative*** or ***procedural*** way to solve a problem. In many higher level programming languages, basic concepts such as iterating over a collection are encapsulated into a method. In JavaScript, for example, we have a handy `forEach` method that lets us iterate over an Array collection. Using `forEach` is the **declarative** way to solve a problem.

When working with flowcharts, we are going to be **imperative** in our approach, and we'll visually show how to loop manually, rather than using any declarative constructs built into the language. Doing things this way *forces you to understand the logic much better*, and also *forces you to "think like a computer*," which helps you debug logical errors in your code. Over time, as you get better at thinking like a computer, you can reach for the higher-level declarative syntax.

### A Larger Problem

Now, let's suppose that the above flowchart is mapping out a solution to part of a more complex problem. Let's suppose that we need to ask the user to enter N collections of numbers and that we want to find and display the largest number from each collection. How would we approach coming up with a solution here?

Let's try to high-level pseudocode this.

```js
/*
while the user wants to keep going
  - ask the user for a collection of numbers
  - extract the largest one from the collection and save it
  - ask the user if they want to input another collection

return the saved list of numbers
*/
```

That seems reasonable, but you can see that the line `extract the largest one from that collection` is a sub-process that itself contains much logic. That functionality is self-contained, so it's a great candidate for a **sub-process**. We can, of course, turn that sub-process into a function. Let's not think about functions yet, though. Instead, let's keep our train of thought at the logical level and not think about code.

Now, you may be thinking that we were only able to see the "extract the largest one from that collection" as a sub-process because we did the previous assignment first. If we were tackling this larger problem first, it might not be apparent. That's a fair point. In that scenario, we probably must include the full pseudocode from the previous assignment, like this:

```js
/*
while the user wants to keep going
  - ask the user for a collection of numbers
  - iterate through the collection one by one
    - save the first value as the starting value
    - for each iteration, compare the saved value with the current value
    - if the saved value is greater than or equal to the current number
      - move to the next value in the collection
    -otherwise, if the current value is greater than the saved value
      - reassign the saved value as the current value

  - after iterating through the collection, save the largest value into the list
  - ask the user if they want to import another collection

return the saved list of numbers
```

When pseudocode gets long, it becomes difficult to trust the accuracy of the logic (remember, you can only verify the logic by running the actual program code). Therefore, it's prudent to extract a logical grouping into a sub-process and tackle the various pieces separately.

Let's take our shortened pseudocode from the beginning and translate this into formal pseudocode.

```js
/*
START

SET largeNumbers = []
SET keepGoing = true

WHILE keepGoing === true
  GET "enter a collection"
  SET collection
  SET largestNumber = SUBPROCESS "extract the largest one from the collection"
  largeNumbers.push(largestNumber)
  GET "enter another collection?"
  IF "yes"
    keepGoing = true
  ELSE
    keepGoing = false

PRINT largeNumbers

END
*/
```

Notice that we have a `SUBPROCESS` keyword to show that some other thing will extract the largest number from a collection. As before, we could have included the entire formal pseudocode from the previous assignment, but that would have made it very long. Our confidence in a large block of pseudocode can't be very high. Extracting logic into sub-processes lets us focus on a well-defined, narrowly-scoped set of pseudocode.

Next, we'll try to use a flowchart to help us organize the logical flow a bit more.

![Flow Chart of `largeNumbers`](flowchart_large_numbers.jpeg)

The interesting part of this flowchart is the processing square in the middle `num = findLargest(collection)`. It's our sub-process. You can think of this square as the zoomed-out high-level view of the very first flowchart from the top of this assignment.

Interestingly, when we move logic to sub-processes, we use a *declarative* type of syntax, rather than *imperative*. In other words, we can say "findLargest," rather than outline step by step how the logic should be. Thinking about how the high-level logic flows lets you create sub-processes to narrow the scope of your application. From a high level, writing declarative code fragments our program into logical sections, letting us focus on one section at a time. For example, if we wanted to add a validation feature to our program, we could have a sub-process that returns `true` or `false` given an input. We can call it `validateInput` and represent it as a square in our flowchart, without having to lay out the step-by-step imperative logic that's required to validate the user's input. From a high level, we can trust that this sub-process will do its job -- it only returns true or false. When we're ready to work on the logic in that `validateInput` sub-process, we can focus on the responsibilities of this sub-process and ignore the rest of the program.

As you use pseudocode and flowcharts to help you dissect the logic of a problem, you always need to think about how detailed the chart and words should be, and what you can extract to sub-processes. A programmer must always think about that when designing the solution to a problem. You won't get it right the first time.

*Start at a high level*, using **declarative** syntax. For example, if you're working on a calculator, you can start with something like this:

```js
/*

- Get the first number
  - Make sure it's valid, otherwise, ask for another
- Get the second number
  - Make sure it's valid, otherwise, ask for another
- Get the operator
  - Make sure it's valid, otherwise, ask again

- Perform the operation on the two numbers
- Display the result
- Ask whether the user wants to do another calculation

*/
```

In the above, you're not yet outlining exactly how to validate the inputs. No specifics or imperative style pseudocode yet. Once you have the high-level steps, it's time to drill down a level into imperative pseudocode and outline specifics.

In the long term, you may not need pseudocode or flowcharts at all. ***However, on our interview coding assessments, we expect you to lay out your logic before you begin coding.*** Pseudocode is the most straightforward way to do that, so take time to practice pseudocode before you take those assessments.

### Flowcharting the Calculator

Taking the high-level pseudocode above, we can come up with a flowchart that looks something like this.

![Flowcharting the Calculator](flowchart_calculator.jpg)

The above flowchart uses the **non-idiomatic names** `valid_number`, `valid_operator`, and `find_result`. This is a mistake. The names should be `numberValid`, `operatorValid`, and `findResult`. We use the corrected names below and in later assignments.

We're only able to come up with this high-level flowchart by introducing three sub-processes: `numberValid`, `operatorValid`, and `findResult`. By not worrying about the low-level details of how those sub-processes will work, we can think at a higher level about our overall application logic. When we're ready to dive into how each of those sub-processes should work, we can create the detailed pseudocode and flowcharts for each of them.

Hopefully, this gives you an idea of one way to approach tackling the logical side of problem-solving.

20210719 13:22 Assignment Complete
