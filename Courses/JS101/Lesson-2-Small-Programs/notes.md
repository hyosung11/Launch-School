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

- Use *semicolons* to terminate each logical line of code unless the line ends with `{`,`}`, or `:`. See the discussion in our [Introduction to Programming With JavaScript](https://launchschool.com/books/javascript/read/preparations#stylishjavascript) book for details.

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

### Getting Ready to Code

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

### Starting to Code

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

### Asking for the Numbers

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

### Performing the Operation

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

## 7. Flowchart

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

## 8. ESLint

### Coding Style

Coding style is mostly a matter of opinion, but most JavaScript developers have a set of conventions that they follow. Typically, developers use a **style guide** to describe the conventions they follow. Choosing and following a style guide will:

- Help you write clear, consistent code that is easy to read.
- Help make your variable and function names consistent and predictable.
- Help you write code that your coworkers, fellow students, and Launch School staff can easily read and understand.
- Help you detect and correct common JavaScript coding mistakes.

A document called the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) captures many of the standard conventions that most developers use. We recommend that you read and try to follow the recommendations in this guide. To help you do that, you can use ESLint. The ESLint configuration we provide enforces many of the styles in the Airbnb guide, such as using *camelCase* to name your variables and functions.

### ESLint for JavaScript

Please visit [this link](https://launchschool.com/gists/9ad96eed) for information on ESLint, including installation and configuration directions, as well as a brief tutorial of how to use it.

[ESLint](https://eslint.org/docs/user-guide/getting-started)

ESLint is a static code analyzer for JavaScript; it analyzes your code and offers advice about style, format, coding practices, possible errors, and other problems. Using ESLint will help you adhere to the rules of your preferred style guide. It's a modular framework that uses a pluggable architecture to insert enforcement rules.

#### Linting and Best Practices

ESLint is what developers call a **linter**. Linters inspect your code for potential errors and "code smells," and for adherence to the best practice determined by developers over the years. Linting isn't foolproof, but it can serve as the first line of defense against some of the most common pitfalls in a language (and JavaScript has its share of those). For instance, the configuration we use disallows using assignments as a conditional expression in an `if` statement:

```js
if (result = someFunction()) { // this is legal, but might be a mistake!
  ...
}
```

Some of the most crucial rules in the best practice category apply to function length and complexity. A function that has many lines of code or that has complicated logic can be difficult to understand, maintain, and update. Our ESLint configuration defines generous limits for the rules that check for length and complexity. In most cases, the complaints that ESLint issues in this area are a strong indication that your code leaves room for improvement. You should strive to simplify and shorten your code when you see these complaints. You may decide you don't need to fix something, but it's worth giving every such complaint due consideration. In the long run, try to write simpler code and use smaller functions; it will improve your code quality.

#### Installing and Configuring ESLint

ESLint is a Node package, so you install it like any other Node package. While it is possible to install it globally (with the `-g` option), the *ESLint team does not recommend it*. Therefore, you should install ESLint and all related packages locally as a development dependency:

```sh
npm install eslint eslint-cli babel-eslint --save-dev
```

Install this version in my environment:

```sh
$ npm install eslint@4.x babel-eslint@8 --save-dev
# or
$ yarn add eslint@4.x babel-eslint@8 -D
```

Note that you **must** install these 3 packages for every project where you need to use ESLint.

Once you've successfully installed ESLint, you should have an `eslint` command available from the command line. Check that your system finds the correct version:

```js
$ npx eslint -v
v7.3.1
```

The eslint command takes a JavaScript file as an argument. For example, if you have a JavaScript file called `test.js`, you can run ESLint against the file like this:

The following code won't work since we don't yet have a test.js file.

```sh
npx eslint test.js
```

#### Configuring ESLint

Before we can actually test ESLint, we need to configure it. The rules governing ESLint configuration are somewhat complicated, so we're going to simplify the discussion. If you want all the gory details, you can learn more on the [Configuring ESLint page](https://eslint.org/docs/user-guide/configuring/).

For our purposes, we'll use the YAML configuration format since it's easier to read and type. You should place the information in a file named `.eslintrc.yml`. When you run ESLint, it looks for this file (and others) in the current directory or the closest parent directory that contains a usable configuration file, but it **does not look in your home directory**. The easiest way to leverage this search is to put your default `.eslintrc.yml` file in a directory that contains all of your projects as subdirectories. Alternatively, you can put the file in each project directory and customize it as needed.

In practice, nested configurations are allowed, but can be confusing. Put the .eslintrc.yml file in your top-level projects directory or put it in each individual project directory. Don't put it in both.

Use the following `.eslintrc.yml` file when working on Launch School projects; it's the file we expect you to use for code reviews and assessments. We may check whether your code passes ESLint checks. Note that these rules are not an exact match for the rules described in the AirBNB Style Guide recommended in our courses. We've made some adjustments that either relax AirBNB rules, or that add additional restrictions not covered by AirBNB. For instance, the Airbnb guide calls for not using the `console` object. Since most of your programs here at Launch School rely on the `console` object, we've disabled this rule.

```yml
`.eslintrc.yml`
# Last update: 05 Oct 2020
root: true
parser: babel-eslint
parserOptions:
  ecmaVersion: 6
  ecmaFeatures:
    impliedStrict: true
env:
  browser: true
  es6: true
  jest: true
  jquery: true
  node: true
extends:
  - eslint:recommended
globals:
  alert: true
  define: true
  document: true
  global: true
  location: true
  require: true
  window: true
  Handlebars: true
rules:
  accessor-pairs: error
  array-callback-return: error
  arrow-spacing: error
  block-scoped-var: error
  brace-style:
    - error
    - 1tbs
    - allowSingleLine: true
  camelcase: error
  complexity: error
  consistent-return: error
  constructor-super: error
  eqeqeq: error
  id-length:
    - error
    - exceptions:
      - _
      - a
      - b
      - x
      - y
      - z
      min: 2
      properties: never
  indent:
    - error
    - 2
    - SwitchCase: 1
  keyword-spacing: error
  linebreak-style: error
  max-depth: error
  max-len:
    - error
    - code: 80
      tabWidth: 2
      ignoreRegExpLiterals: false
      ignoreStrings: true
      ignoreTemplateLiterals: true
      ignoreTrailingComments: true
      ignoreUrls: true
  max-lines-per-function:
    - error
    - max: 20
      skipBlankLines: true
      skipComments: true
  max-nested-callbacks:
    - error
    - max: 4
  max-statements:
    - error
    - max: 15
    - ignoreTopLevelFunctions: true
  max-statements-per-line: error
  new-parens: error
  no-array-constructor: error
  no-async-promise-executor: error
  no-bitwise: error
  no-buffer-constructor: error
  no-caller: error
  no-class-assign: error
  no-confusing-arrow:
    - error
    - allowParens: true
  no-console: 'off'
  no-const-assign: error
  no-constant-condition:
    - error
    - checkLoops: false
  no-debugger: 'off'
  no-dupe-class-members: error
  no-duplicate-imports: error
  no-eq-null: error
  no-eval: error
  no-extend-native: error
  no-implicit-globals: error
  no-implied-eval: error
  no-inner-declarations:
    - error
    - both
  no-iterator: error
  no-label-var: error
  no-lonely-if: error
  no-loop-func: error
  no-misleading-character-class: error
  no-mixed-operators: error
  no-multi-assign: error
  no-multi-str: error
  no-multiple-empty-lines: error
  no-nested-ternary: error
  no-new: error
  no-new-func: error
  no-new-object: error
  no-new-require: error
  no-new-symbol: error
  no-new-wrappers: error
  no-octal-escape: error
  no-process-env: error
  no-process-exit: error
  no-prototype-builtins: 'off'
  no-restricted-syntax:
    - error
    - message: Do not use `with` statement.
      selector: WithStatement
  no-return-assign: error
  no-return-await: error
  no-script-url: error
  no-self-assign:
    - error
    - props: true
  no-self-compare: error
  no-sequences: error
  no-shadow-restricted-names: error
  no-tabs: error
  no-template-curly-in-string: error
  no-this-before-super: error
  no-throw-literal: error
  no-trailing-spaces: error
  no-unmodified-loop-condition: error
  no-unneeded-ternary: error
  no-unused-expressions: error
  no-unused-vars:
    - error
    - args: all
      argsIgnorePattern: "^_"
      caughtErrors: all
      caughtErrorsIgnorePattern: "^_"
      vars: local
  no-use-before-define:
    - error
    - functions: false
  no-useless-call: error
  no-useless-catch: error
  no-useless-computed-key: error
  no-useless-rename: error
  no-useless-return: error
  no-with: error
  nonblock-statement-body-position: error
  one-var-declaration-per-line: error
  operator-assignment: error
  prefer-promise-reject-errors: error
  quote-props:
    - error
    - consistent-as-needed
  radix: error
  require-await: error
  require-yield: error
  semi:
    - error
    - always
    - omitLastInOneLineBlock: true
  semi-spacing: error
  semi-style: error
  space-before-blocks: error
  space-infix-ops: error
  space-unary-ops:
    - error
    - words: true
      nonwords: false
  vars-on-top: error
```

#### Quick Tutorial

With configuration out of the way, we're ready to see ESLint in action with a simple program. Create a file, and name it `hello.js`. The contents of this file should contain a single line:

```js
console.log(helloWorld)
```

Now, run ESLint on this file.

```sh
$ npx eslint hello.js

/Users/wolfy/hello.js
  1:13  error  'helloWorld' is not defined  no-undef
  1:24  error  Missing semicolon            semi

✖ 2 problems (2 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

The output you see may be different -- don't worry if it is.

Let's break it down a bit:

- The first non-blank line tells you the full path name of the file that ESLint checked.
- The next two lines show the two errors that ESLint found in the code. The first error involves an undefined `helloWorld` variable at line 1, column 13. The second error shows a missing semi-colon on line 1, column 24.
- The two error lines also show the names of the rules that apply to those errors: here, the `no-undef` and `semi` rules. You can read about a specific rule by searching Google for "eslint" and the name of the rule. For instance, searching for "eslint semi" returns a link to the documentation for the "semi" rule. The documentation describes the rule and almost always shows a variety of different situations in which code triggers the rule, and also shows you code that doesn't trigger it. That's usually all you need to figure out how to fix the problem.
- Finally, the last 2 lines report some simple statistics about what ESLint found: 2 separate problems, both of which it classified as errors instead of warnings. It also says that you can fix one of the problems by running `eslint --fix hello.js` -- that's a quick and dirty way to fix a lot of small problems, but it's possible that some fixes may not work, so be careful.

#### Using ESLint with Your Editor

ESLint is available in most code editors as a plugin. Using a plugin is the most convenient way to use it -- you can easily configure your editor to run ESLint automatically, either as you type or when you save or open a file. If your editor allows plugins, don't forget to search the plugins for one that lets you integrate ESLint into your workflow. The plugin needs to be smart enough to handle a local installation of ESLint or it won't work.

## 9. Walk-through: Refactoring Calculator

In this assignment, we'll continue to work on the calculator program from before. We'll refactor parts of it and add some new functionality. Let's get into it.

### Starting to Code 2

Some folks are visual learners, and really enjoy seeing complex topics covered as videos. Refactoring walkthroughs, like the one we're about to do, often work well as videos, so we've provided a video walkthrough of this project that you can watch if you want.

[Video Version](https://launchschool.com/lessons/64655364/assignments/bfb3a9f2)

Even if you watch the video, you may still want to read through the text version of the walkthrough below. The repetition can help you understand things better.

### Adding a Distinctive Prompt

One thing you'll notice about the calculator program is that the messages are dull and lack distinctiveness; everything, both inputs and outputs, looks the same:

```sh
$ node calculator.js
Welcome to calculator!
What's the first number?
5
What's the second number?
7
```

We want to give it a more distinctive look that separates it from the usual terminal output. Maybe we can prefix each message with a `=>` marker:

```sh
=> Welcome to calculator!
=> What's the first number?
5
=> What's the second number?
7
```

That sounds easy. We can prepend the marker to the front of each output string we pass to `console.log`, right? That's certainly one way to do it, but we must remember to do it for every output message in our program. Instead, let's *extract* this functionality to a function named `prompt`:

```js
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

// rest of the program omitted
```

The `prompt` function prepends the marker to the front of the string that it logs to the console. All we have to do now is *replace* our `console.log` calls with prompt calls.

```js
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");

prompt("What's the second number?");
let number1 = readline.question();

// rest of program omitted
```

Make the change to the calculator program, then run it to verify that it works as expected.

#### Switch Statement

Our program currently uses this `if/else` statement to compare the user's choice of operator with the valid possibilities:

```js
let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}
```

Each comparison compares the variable `operation` with a different value. This kind of logic is the use-case that the `switch` statement was designed to handle, so let's replace the `if/else` with a `switch` statement:

```js
let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}
```

Run the program after you make the change to see whether it still works correctly.

Remember: it's crucial to include `break` statements in each `case` unless you use a `return` statement at the end of that `case`. If you don't include a `break` statement, JavaScript *falls through* and evaluates the rest of the `case` clauses until it reaches the end of the `switch` statement or it encounters a `break` or `return` statement.

This code isn't as concise as the `if/else` version. The code reads a little better, but we had to add 3 more lines of code. It's a tradeoff, but the *improved readability makes it worthwhile*.

#### Validating User Input

For this refactoring, we'll use a flow-chart diagram to show the intended behavior of the program:

![Validating User Input](flowchart_calculator_js.jpg)

As you can see, all three user inputs use looping logic. We take the input from the user, check whether it is valid, continue if it is, and redo the loop if it isn't. There are several ways we can implement this logic, but we'll use a simple `while` loop. The loop terminates when the input is valid. Let's add some code to handle this logic for the first input number:

```js
prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm ... that doesn't look like a valid number.");
  number1 = readline.question();
}
```

We'll write the `invalidNumber` function soon. For now, though, the overall logic looks like this: we ask the user for input and assign that input to the variable `number1`. We start a loop that:

- checks whether the input is valid.
- the loop ends if the input is valid.
- tells the user that the input is invalid.
- waits for the next input.
- jumps back to the top of the loop.

We can now complete the `invalidNumber` function:

```js
function invalidNumber(number) {
  return Number.isNaN(Number(number));
}
```

The `Number.isNaN()` method takes any JavaScript value and returns the boolean `true` if the value is `NaN`, `false` if it is not. We check whether `Number(number)` is `NaN` since calling `Number()` on a non-numeric string evaluates to `NaN`. Thus, `number` is invalid if the conversion results in `NaN`. Note that `Number()` *ignores leading whitespace* in the `number` string, so `Number(' 34')` returns `34`.

Add the above code to your program and give it a test run. If you enter some non-numeric input like `abc`, you'll be prompted to enter a valid number.

There's one problem with `invalidNumber`. Suppose you don't enter any input: you'll find that the program continues to run without prompting you to re-enter the input. The `readline.question` method returns an empty string when the user doesn't provide any input, and `Number` returns `0` when given an empty string or a string that contains nothing but whitespace. Thus, if the user doesn't enter anything, `invalidNumber` treats it as the valid number `0` and returns false.

We can observe this behavior in the node console:

```sh
> Number('')
0
> Number('   ') // leading spaces are ignored!
0
```

This behavior means that we must change our `invalidNumber` function to treat empty and whitespace strings as invalid input. We can use the `String.prototype.trimStart` method to get a copy of the `number` string with leading whitespace removed:

```js
function invalidNumber(number) {
  return number.trimStart() === ''|| Number.isNaN(Number(number));
}
```

Now that we can validate input numbers, let's add the same validation looping logic for the second number:

```js
prompt("What's the second number?");
let number2 = readline.question();

while(invalidNumber(number2)) {
  prompt("Hmm ... that doesn't look like a valid number.");
  number2 = readline.question();
}
```

Rerun the program. This time, you'll see that it asks for the input again when either input is invalid.

We should also validate the operation requested by the user. The only valid inputs for the operation are '1', '2', '3' and '4', so all we need to do is check whether the input is one of those four strings.

```js
prompt("What operation do you want to perform? 1) Add 2)Subtract 3)Multiply 4) Divide")
let operation = readline.question();

while(!['1', '2', '3', '4'].includes(operation)) {
  prompt("Please choose 1, 2, 3, or 4");
  operation readline.question();
}
```

The above code says that as long as the input isn't one of the values `1`, `2`, `3`, or `4`, keep asking the user for a valid operation number. `Array.prototype.includes` returns `true` when the given element exists in the array, `false` otherwise.

### Completed Program

```js
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4')
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}`);
```

20210720 12:05 Assignment complete.

## ESLint Calculator

Now that we've refactored our calculator program, it's time to run it through ESLint to check it for styling and other issues. Run the following command from the terminal:

```sh
npx eslint calculator.js
```

ESLint scans your program statically and outputs any issues it finds. If your program has styling issues or potential logic problems, it may output something like the following:

```sh
$ npx eslint calculator.js

/Users/wolfy/lesson_2/calculator.js
  33:37  error  Missing semicolon  semi

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

Here, it looks like we're missing a semicolon on line 33 at column 37. If we go back to the program and add the semicolon, we should see no output after the fix.

The missing semicolon was harmless in this code, but that won't always be the case. There are situations where the missing semicolon can cause serious bugs, some of which may not be noticed until much later. *Running ESLint on your program is an excellent habit to develop*: it'll help you avoid potential bugs and enforces the style guidelines that should make your programs easier for both you and other programmers to read.

20210720 12:54 Assignment Complete.

## 11. Debugging

Debugging is really at the core of what we do as programmers. While the glory and marketing go to shipping a finished application, the fact is that most of the day-to-day life of a programmer is spent stuck on some problem. Programmers can get through the trivial code rather quickly, so the majority of their time is spent analyzing and understanding a problem, experimenting or coming up with an approach, or debugging bugs in the code.

In this assignment, we'll talk about the general act of debugging, and not working with a specific debugger tool.

### Temperament

When thinking about what attributes that make a good programmer, one thing comes to mind: temperament. If the key to programming is debugging, then the key to debugging is a logical mind and patient temperament. Think Spock from Star Trek. Some people naturally possess this temperament, and that's an advantage when learning to program. Some people do not, so they must learn to develop this temperament. Natural intelligence helps, but, from our experience, most people have the intellectual capacity to become an application developer. What they need to do is develop a systematic, patient temperament when faced with a problem.

When debugging is required, something must be broken. When things break, it doesn't make you feel good. Programming is dealing with a constant stream of broken things and learning to deal with those ill feelings. Therefore, it's essential to gauge how you usually respond to problems. For example, if you're walking to the bus stop and the bus leaves right before you get there, what's your natural reaction? Someone who has the programmer temperament should figure out 1) when the next one comes, or 2) if there's an alternative path of transfers you can take, or 3) other alternative forms of transportation. If your reaction is a sinking feeling and frustration, you'll have to learn to deal with that, then transition to a systematic search for a solution. Fortunately, this can be learned, but remember to stay even-keeled and be systematic.

Dealing with feelings of frustration is a critical aspect of learning to program.

### Reading Error Messages

When you run into an error, you'll probably see a wall of text that looks like gibberish. This wall is the **stack trace**; it's crucial in determining where to begin debugging. One of the first things you must get used to is learning how to *carefully* read the stack trace. Embedded within it is the error message, which is your first hint at where to start looking.

For example, click the button to see an example stack trace.

```sh
TypeError: Cannot read property 'filter' of undefined
    at app.get (/Users/nf/Desktop/meadowlark/meadowlark.js:8:13)
    at Layer.handle [as handle_request] (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/layer.js:95:5)
    at /Users/nf/Desktop/meadowlark/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/index.js:275:10)
    at expressInit (/Users/nf/Desktop/meadowlark/node_modules/express/lib/middleware/init.js:40:5)
    at Layer.handle [as handle_request] (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/layer.js:95:5)
```

That's a real stack trace from a project. Can you spot the error message? It's at the very top: `TypeError: Cannot read property 'filter' of undefined`. The trick is to train your eye to look for the relevant parts of the stack trace, and over time, you'll be able to spot the error faster and faster. Every language and library has a specific pattern to their stack trace. The more you work with a language or library, the easier it becomes to understand the trace. When you see a large stack trace for the first time, don't despair. Study it carefully, and try to extract the meaningful bits.

### Online Resources

#### 1. **Search Engine**

Once you've identified the error, it's time to take action. Study the error message, and try to walk backward through the code to understand how the program flow arrived at the error condition. Think about all the data in use at the error location, and how missing or incorrect data might have caused the problem. Finally, use a search engine to look up the error message.

The entire error message is `TypeError: Cannot read property 'filter' of undefined`; it's probably OK to search for that entire phrase. Make sure that you don't include terms that are specific to your computer or program when searching. For example, *don't include* /`Users/nf/Desktop` in your search term since that's specific to your machine. Search results often pick up generic search terms, so be selective: don't copy and paste the entire stack trace.

Finally, if you see many results in a different programming language, you may want to preface "JavaScript" in front of the search phrase. Other languages sometimes use similar terms for common errors, so you may need to focus your search on JavaScript specifically.

#### 2. **Stack Overflow**

[Stack Overflow](https://stackoverflow.com/) is a rich treasure trove of answers to common problems. Many of their answers rank highly in search engines, but sometimes it's worth searching on SO directly.

#### 3. **Documentation**

Finally, don't hesitate to consult the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for the core JavaScript language. Make sure you're looking at the documentation for core JavaScript, and not a library or framework specific documentation. That's very important, as some frameworks provide functionality that isn't available in pure JavaScript.

### Steps to Debugging

The debugging process varies tremendously from person to person, but below are some steps you can follow until you've developed and honed habits of your own.

#### 1. **Reproduce the Error**

The first step in debugging any problem is usually reproducing the problem. Programmers need a deterministic way to reproduce the problem consistently, and only then can they start to isolate the root cause. There's an old joke where programmers say that "it works on my machine" since they can't reproduce an error that occurs in the production environment. Reproducing the problem becomes more critical as you build more sophisticated applications with various external dependencies and moving parts. Reproducing the exact error is often more than half the battle in many tricky situations.

#### 2. **Determine the Boundaries of the Error**

Once you can consistently reproduce the problem, it's time to tweak the data that caused the error. For example, the stack trace earlier was generated by this code data.users().getAll().push(newUser). Does calling data.users().getAll() cause the issue? What about just calling data.users()? What happens if we try to append a different object, like this: data.users().getAll().push(anotherUser)? How does modifying the data affect the program behavior? Do we get expected errors, or does a new error occur that sheds light on the underlying problem?

What we're trying to do is modify the data or code to get an idea of the scope of the error and determine the boundaries of the problem. This approach leads to a deeper understanding of the problem, and help us implement a better solution. Most problems can be solved in many ways; a deeper understanding of the problem leads to more holistic solutions.

#### 3. **Trace the Code**

Once you understand the boundaries of the problem, it's time to trace the code. Let's use a new example.

```js
function car(newCar) {
  let make = getMake(newCar);
  let model = getModel(newCar);
  return [make, model];
}

function getMake(newCar) {
  return newCar.split(' ')[0];
}

function getModel(newCar) {
  return newCar.split(' ')[2];
}

let [ make, model ] = car('Ford Mustang');
console.log(make === 'Ford');   // => true
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
```

This code is relatively straightforward. One aspect of it that's a bit tricky is the return value of the car function and the assignment from that function to local variables `make` and `model`. The construct used on line 15 is called array destructuring.

When an array gets assigned to two or more variables wrapped in opening and closing brackets, the first element gets assigned to the first variable, the second element gets assigned to the second variable, and so on. On line 15, the first array element gets assigned to `make` and the second gets assigned to `model`.

We will discuss array destructuring in a later course.

On line 17, we get an error when we try to see whether the value `model` begins with the character `'M'`. It looks like we have a bug. The first step is to try to reproduce the problem consistently:

```js
[make, model] = car('Mitsubishi Mirage');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined

[make, model] = car('Chevy Malibu');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined

[make, model] = car('Toyota Corolla');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
```

It seems we can reproduce the problem consistently. Furthermore, it even seems to fail in the same way when we provide an input that wouldn't match the test. We can also see that `model` appears to be `undefined` in every case. That's certainly a bug.

Let's trace the code backward. When you call `car`, a string gets passed in as an argument. The string represented by the local variable `newCar` gets passed to the two helper functions, `getMake` and `getModel`. Inside each helper, we try to split `newCar` into two new strings: `'Ford'` and `'Mustang'`. The `getMake` function should return `Ford` and `getModel` function should return `Mustang`. In this case, `getMake` returns the correct value, but `getModel` does not; in fact, it returns `undefined`. Based on these observations, we know that the bug in this code originates in the `getModel` function. Identifying the area where an error originates is called *trapping the error*.

#### 4. **Understand the Problem Well**

After we narrow the source of the bug to `getModel`, it's time to analyze the function's code. We know that the return value of this function is always `undefined`, so let's inspect the values at each step within the function:

```js
function getModel(newCar) {
  return newCar; // => "Ford Mustang"
}
```

That's the expected value of newCar, so we have no issues thus far. Let's go a step further.

```js
function getModel(newCar) {
  return newCar.split(' '); // => ["Ford", "Mustang"]
}
```

The return value here is an array that contains the strings `"Ford"` and `"Mustang"`. Based on our knowledge of how Array.prototype.split works, that's the correct result. So, let's now look at the last step:

```js
function getModel(newCar) {
  return newCar.split(' ')[2]; // => undefined
}
```

Aha! It looks like the unexpected return value here is the result of accessing the element at index `2` in `['Ford', 'Mustang']`. Since the array only has two elements, its largest index is 1. Trying to access index `2` returns `undefined` since there is no element at that location in the array. We need to use the index `1` to access the desired array element:

```js
function getModel(newCar) {
  return newCar.split(' ')[1]; // => "Mustang"
}
```

#### 5. **Implement a Fix**

There are often multiple ways and multiple layers in which you can make the fix. For example, we could suppress the error from being thrown with this code:

```js
try {
  return model[0] === 'M';
} catch {
  return false;
}
```

We'd still have the original error in the `getModel` function, but, depending on where the problem lies, a solution like that may be all you can do. If you're using a library or code that you can't modify, for instance, you have little choice but to deal with edge cases in your code. Since this is our code, we can and probably should fix the offending code in `getModel`.

**Fix one problem at a time**. You may notice other edge cases or problems while implementing a fix, but you should resist trying to fix them all at once. When you try to work on multiple fixes at once, it's easy to become confused and make the situation even worse than it was. Make a note of the issues you notice, finish fixing the one you're working on, then return to your list of issues and work them one at a time as well.

#### 6. **Test the Fix**

Finally, after implementing a fix, make sure that you verify that the code fixed the problem by using a similar set of tests from step #2. After you learn about automated testing, you'll want to add an automated test to prevent regression. For now, you can test manually.

### Techniques for Debugging

#### 1. **Line by line**

Your best debugging tool is your **patience**, which is why we mentioned temperament first in this article. Most bugs in your code come from overlooking a detail, rather than a complete misunderstanding of a concept. Being careful, patient and developing a habit of reading code line-by-line, word-by-word, character-by-character is your most useful programming skill. If you are naturally impatient or like to gloss over details, you must train yourself to behave differently when programming. All other debugging tips and tools won't matter if you aren't **detail oriented**.

#### 2. **Rubber Duck**

[Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging) sounds crazy, but it is so useful that it has its own Wikipedia page. The process centers around using some object, like a rubber duck, as a sounding board when faced with a hard problem. The idea is that when you explain the problem to a rubber duck, you force yourself to articulate the problem, detail by detail. That often leads to discovering the root of the problem. Of course, the object doesn't have to be a rubber duck -- it can be anything, including another human being. The point is to focus your mind on walking through the code, line by line, and in that process, noticing a small detail that may reveal a deeper problem. If you've never experienced this phenomenon, we encourage you to try this out yourself next time you're stuck on a bug.

#### 3. **Walking Away**

Another interesting debugging technique is to go for a walk. Some have claimed a swim, jog or even a shower helps too. The idea is that this technique works since it activates a different part of your brain. When you walk away from the computer, your brain is still working on the problem in the background. Note that this is only effective *if you first spend time loading the problem in your brain*. You cannot just walk away when you first encounter a problem and expect this technique to work. Once you've loaded the problem in your brain, your brain may work on the problem even while you're sleeping! Also, our brains get tired too, so it's ok to step away and come back to it with fresh eyes and a refreshed brain.

#### 4. **Inspecting with a Debugger**

Node.js comes with a debugger that lets you pause the program during execution and perform various actions from that point in the program execution, such as inspecting values at runtime.

To use the debugger, run the node command with the `inspect` argument. Let's inspect a program with a simple while loop using the node debugger:

```js
// debug.js

let counter = 1;

while (counter <=5 ) {
  console.log(counter);
  counter += 1;
}
```

Save this code in a file called `debug.js` and run it like so:

```sh
> node inspect debug.js
```

You'll see a prompt with some output like the following:

```sh
< Debugger listening on ws://127.0.0.1:9229/5c08d9ea-1d25-4fa8-8ddb-3ab96ea3ac5b
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in debug.js:3
  1 // debug.js
  2
> 3 let counter = 1;
  4
  5 while (counter <= 5) {
debug>
```

Ignore the first three lines of the output for now. They're not relevant to our discussion here. The 4th line says "Break on start in debug.js:3", which means that *program execution stopped on line 3*.

The debugger will automatically pause program execution, usually at the first expression or function call that it encounters in your code. In our case that's the line l`et counter = 1`; on line 3. Notice also the `>` next to line 3, which indicates the line at which execution has been paused.

We can access the value of any variables that are in scope at that point in execution by using the `exec` command followed by the name of the variable, for example `exec counter`. If we try accessing `counter` at the current point in program execution, however, it will return `undefined` since the expression has not yet been evaluated and so the assignment to `1` has not taken place.

Instead let's continue execution to the *next* expression. We can do this by using the `next` command, or its shorthand version `n`. Entering either `next` or `n` from the current point will continue execution and then pause at the start of the `while` loop on line 5. If we run `exec counter` now, we should get 1.

```sh
debug> n
break in app.js:5
  3 let counter = 1;
  4
> 5 while (counter <= 5) {
  6   console.log(counter);
  7   counter += 1;
debug> exec counter
1
debug>
```

If your program contains quite a few lines of code, using `n` / `next` to cycle through each expression or function call to get to a particular point in the program can be a bit of a pain. Here's where another command, `c` combined with a `debugger` statement, comes in useful.

What the `c` (or `cont`) command does is effectively 'un-pause' the program execution, and *continue* it to the end (or until you experience an error). If we execute the c command from our current paused location, the program will just run as normal.

```sh
< 1
< 2
< 3
< 4
< 5
< Waiting for the debugger to disconnect...
debug>
```

We get our expected output from each loop, and a `Waiting for the debugger to disconnect...` message followed by a `debug>` prompt. At this point, we can either start program execution again from the beginning using the `run` or `restart` commands, or exit the debugger using `.exit` (or hitting `CTRL+C` or `CTRL+SHIFT+C` twice, or `CTRL+D`; this can vary across systems/ environments).

On its own, the `c` command may not seem that useful, but it becomes more useful when combined with a `debugger` statement. The [debugger statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) is valid JavaScript syntax, that:

> invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

We'll come back to that word, *breakpoint*, in a moment. Let's exit the debugger and edit our `debug.js` file. Add a `debugger;` statement inside the `while` loop, after `console.log(counter)` but before `counter += 1;`:

```js
// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;
  counter += 1;
}
```

If we run `node inspect debug.js` once more, the debugger runs and pauses at line 3 as before. If we now use the `c` command, the debugger pauses execution at the `debugger` statement. Another way to think about this is that there is a *break* at that *point* in the program's execution. Setting a `debugger` statement like this is often referred to as a *breakpoint*.

```sh
debug> c
< 1
break in app.js:7
  5 while (counter <= 5) {
  6   console.log(counter);
> 7   debugger;
  8   counter += 1;
  9 }
debug>
```

We can access variables as usual using the `exec` command.

```sh
debug> exec counter
1
```

We can keep using `c` to pause on the `debugger` statement for each iteration of the `while` loop. We can also `.exit` at any point. This approach is particularly useful when you need to debug a problem that occurs in a loop, and you want to check how certain values change on each iteration of that loop.

The node debugger can be an extremely useful and powerful tool, and something that we recommend becoming familiar with. There's still a place for using `console.log()` for debugging though, for example when debugging a very simple piece of code. Also, you may be working with an IDE or environment where you can't run a debugger (CoderPad for example). It's good to be familiar with a number of different tools and approaches when debugging, but probably the most important thing is your **temperament** and **mind-set**.

#### 5. **Advanced Debugging**

The node debugger has a lot of other helpful features. It has mechanisms to step into functions and more systematically step through the code. We won't cover that yet. For now, we just want to introduce the concept of a debugger, and cover some of the basic usage. This should be sufficient to help debug small programs.

### Summary

In summary, **debugging is arguably the most vital skill you must learn as a programmer**. Focus on developing a patient, systematic temperament; carefully read error messages; use all the resources at your disposal. You should approach debugging in sequential steps and use the techniques we covered above -- especially the debugger.

20210720 14:18 Assignment Complete

## 12. Errors

JavaScript's flexibility lets a developer use it in many ways, but it also lets you easily write code that fails to function when run. There are many situations where the JavaScript interpreter cannot continue executing a program. Instead, it creates an *Error* object that describes the problem and stops the program.

As a developer, you want to do your best to avoid errors when your programs run. Let's look at the most common types of errors that can arise. In the next few assignments, we'll learn techniques to prevent and handle errors that you can't avoid.

### Terminology

When an error occurs in a JavaScript program, we say that it *throws* an Error. Some programming languages use the term *exceptions* to describe errors; JavaScript uses this terminology too, so we'll use it often. Similarly, some languages talk of *raising* an exception, so you may hear other developers talk of exceptions being raised in JavaScript programs. Don't let these terminological differences confuse you: the terms exception and Error are synonymous, as are raise and throw.

### ReferenceError

A `ReferenceError` occurs when you attempt to use a variable or function that **doesn't exist**.

```js
a;    // Referencing a variable that doesn't exist results in a ReferenceError.
a();  // The same is true of attempting to call a function that doesn't exist.
```

### TypeError

A `TypeError` occurs in a variety of different ways. Some of the most common situations that lead to a `TypeError` include:

- accessing a property on a value that does not have any properties, such as `null` or `undefined`
- trying to call something that isn't a function can also raise a `TypeError`
- trying to reassign a `const` variable:

```js
> let a;       // a is declared but is empty, as it has not been set to a value.
> typeof(a);
= "undefined"

> a.name;      // TypeError: Cannot read property 'name' of undefined

> a = 1;
> a();         // TypeError: Property 'a' is not a function

> const b = 42;
> b = 3.14;    // TypeError: Assignment to constant variable.
```

### SyntaxError

A `SyntaxError` is special in that it almost always occurs immediately after loading a JavaScript program, but before it begins to run. Unlike `ReferenceError` and `TypeError`, which are dependent upon specific variables and values encountered at runtime, JavaScript detects `SyntaxErrors` solely from the text of your program.

```js
function ( {} // SyntaxError: Unexpected token (
```

There are several cases where JavaScript can throw a `SyntaxError` while a program is running. For instance, this code raises a SyntaxError at runtime.

```js
JSON.parse('not really JSON'); // SyntaxError: Unexpected token i in JSON at position 0
```

There are a few other errors that can occur in a JavaScript program, including `RangeError`, `URIError`, among others; these tend to be rarer.

20210720 14:53 Errors Assignment complete.

## 13. Preventing Errors

The best way to handle errors is to prevent them from happening by paying attention to where they can occur. For example, consider a naive implementation of a function that returns the first letter of a word in lowercase:

```js
function lowerInitial(word) {
  return word[0].toLowerCase();
}
```

This implementation works well with simple words:

```js
lowerInitial('Joe); // "j"
lowerInitial('Karen'); // "k"
```

However, what happens if we pass it an empty String?

```js
lowerInitial(''); // TypeError: Cannot read property 'toLowerCase' of undefined
```

Errors typically occur where **assumptions** are made in code; here, we assume that the word always has a non-zero length (that is, it contains one or more characters). This code violates that assumption by passing an empty String to `lowerInitial`.

An error like this *halts execution* of the program entirely. It's easy to think of ways that we can receive an empty string in this function. For example, if the value comes from a form element on a web page, the user might not have entered any data. Alternatively, the data may come from a database that contains missing data.

### Guard Clause

One way to avoid this type of error is to use a *guard clause*. A guard clause is code that guarantees data meets certain preconditions before it gets used. In `lowerInitial`, we can check whether `word` contains any characters before we try to use it:

```js
function lowerInitial(word) {
  if (word.length === 0) { // If word contains an empty String
    return '-';            // return a dash instead of proceeding.
  }

  return word[0].toLowerCase(); // word is guaranteed to have at least
                                // 1 character, so word[0] never evaluates
                                // as undefined.
}
```

### When to Use Guard Clauses

Guard clauses are best used when a f*unction can't trust that its arguments are valid*. Invalid arguments can have incorrect types, structures, values, or properties. Usually, though, your program should be able to trust itself to do the right thing; you should be able to trust that it always calls its methods with valid values. For example, if you can trust that your program always calls `lowerInitial` with a non-empty String, you don't need the guard clause.

### Detecting Edge Cases

Most error prevention work stems from examining the **assumptions** inherent in your code. Think about whether your program can violate your assumptions. What happens when they are? We call these situations ***edge cases*** because they often involve values at the extreme end of the range of possible values. In `lowerInitial`, the shortest possible String (`''`) is an edge case.

To identify the edge cases that can break your program, start by considering the code's inputs. For a function, these are usually the arguments. Each data type has its own set of values that can cause undesired behavior.

For example, consider an argument that should be numeric. Will the code still work if the argument is *negative* or *zero*? Suppose you're expecting a whole number and instead receive a value with a *fractional component*? These are common places where a valid Number object can violate expectations in your code and cause unintentional behavior and bugs.

In `lowerInitial`, we saw that *empty Strings* can be a problem if your function doesn't expect one. There are many other types of Strings that can be troublesome, such as those that start or end with spaces, contain only spaces, or contain special characters.

Finally, it is a good idea to think about how particular combinations of values can create unexpected conditions.

### Planning Your Code

While you can't account for every possible permutation of arguments, it does pay to plan ahead. One good way to do this is to write out the common use cases of a new function, and check how your function handles them. This is a great way to identify edge cases.

Let's say we are writing a function that inserts a new element to an Array in its proper alphabetically sorted position:

```js
let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', ')); // Logs "Australia, Brazil, Cuba, Senegal"
```

Let's think about some use cases; we want to ensure that alphaInsert can handle:

```js
alphaInsert([], 'Brazil'); // Inserting in an empty Array
alphaInsert(['Brazil], 'Australia'); // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba') // At the end of an Array
alphaInsert(['Brazil'], 'Brazil'); // Duplicate entry
```

We have only four major cases here, but more complex functions can have many more cases. It may get to be a bit too much to handle. Instead, focus on the "happy path" -- the most basic use case(s). Then revisit your complete list of use cases, and verify that your implementation works well in each case. If a particular case fails, address it and then check the use cases again.

Note that our list of use cases ignores the problem of invalid data types passed as arguments (for instance, passing a Number when a function expects a String). You can check argument types when this is a real possibility, but doing so in every function is unneeded and difficult to maintain.

20210720 15:34 Preventing Errors Assignment completed.

## 14. Catching Errors

It's not possible to prevent all errors. For example, some built-in JavaScript functions can throw exceptions, but there is no practical way to predict and avoid those errors. Consider the built-in `JSON.parse` method: this method takes a single String argument that contains some data in JSON format, and converts it to an object. If you pass a String to `JSON.parse` that isn't a valid JSON value, all `JSON.parse` can do is throw an exception:

```js
let data = 'not valid JSON';

JSON.parse(data);  // throws SyntaxError: Unexpected token i in JSON at position 0
```

JSON strings look a lot like JavaScript object literals. The main differences are that we **double quote the keys**, and the literal value appears inside a String:

```js
let object = { "name": "Ferdinand", "age": 13 };  // object literal
let json = '{ "name": "Ferdinand", "age": 13 }';  // JSON string
```

We'll learn more about JSON later when we learn how to use JavaScript to connect to servers.

The only way to prevent errors in `JSON.parse` is to parse the input string. That is, we need to build a method that can parse JSON Strings. However, that's what `JSON.parse` does. We surely don't want to reimplement it just to avoid errors. Thus, avoiding errors simply isn't realistic here.

Instead of trying to avoid errors, we can just let `JSON.parse` throw a `SyntaxError`, and **catch** it with a `try/catch/finally` block. This is syntactically similar to `if/else` blocks:

```js
try {
  // Do something that might fail here and throw an exception.
} catch (error) {
  // This code only runs if something in the try clause throws an exception.
  // "error" contains the exception object.
} finally {
  // This code always runs even if the above code throws an exception.
}
```

The `finally` clause is optional; you can omit it if you don't need it, just as you can omit the `else` clause in an if statement.

Let's use `try/catch/finally` to handle `JSON.parse` errors:

```js
function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an exception if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an exception
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                    //       Unexpected token i in JSON at position 0"
                    // Logs "Finished parsing data."
                    // Returns null
```

### When to Use Try/Catch

Only use `try/catch/finally` blocks when the following conditions are both **true**:

- A built-in JavaScript function or method can throw an exception and you need to handle or prevent that exception.
- A simple guard clause is impossible or impractical to prevent the exception.

### Further Reading

You may check out [this article](https://medium.com/launch-school/javascript-weekly-graceful-error-handling-2f4045262df) by one of our students for an additional perspective on errors in JavaScript and what to do about them.

#### JavaScript Weekly: Graceful Error Handling

- coding is about expecting the unexpected
- sources of errors
  - source code errors
  - edge case errors
  - uncontrolled input errors
- error situatons
  - error at compilation
  - error at runtime

JavaScript defines 8 types of errors:

1. generic `Error`
2. `TypeError`
3. `ReferenceError`
4. `SyntaxError`
5. `RangeError`
6. `InternalError`
7. `EvalError`
8. `URIError`

Errors share two common properties:

- `name`
- `message`

16:21 I didn't finish the article. I need to put in my Trello queue.

20210720 16:23 Catching Errors Assignment completed.

## 15. Precedence

What do you think `3 + 5 * 7` returns? Which operation gets evaluated first - `7 * 5` or `5 + 3`? If `7 * 5`, then we get a return value of `38`. Otherwise, we get `56`. It turns out that `7 * 5` gets computed first. But why?

The meaning of an expression in JavaScript is determined by what is called **operator precedence**. It’s a set of [rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) that dictate how JavaScript determines what **operands** each operator takes. Operands are simply values -- the results of evaluating expressions -- that are used by the operator.

For most operators, there are two operands; however, there are also "unary" and "ternary" operators that take one or three operands:

```js
2 + 5 // Two operands (2 and 5)
!true // Unary: One operand (true)
value ? 1 : 2 // Ternary: Three operands (value, 1, 2)
```

Each operand can be the result of evaluating some other operator and its operands. Consider this expression:

```js
> 3 + 5 * 7
```

Here we have 2 operators (`+` and `*`), each of which takes 2 numbers as operands. However, there are only 3 numbers here. What gives? Furthermore, what does this expression evaluate to?

The answer lies in how operator precedence works. Precedence determines whether the `+` operator uses `3` and `5` as operands or `3` and `35` (`5 * 7`). Likewise, it determines whether `*` uses `5` and `7` as operands or `8` (`3 + 5`) and `7`. In short, precedence determines the *meaning* of an expression.

In an expression, operators with higher precedence are prioritized over those with lower precedence. In `3 + 5 * 7`, `*` has higher precedence than `+`, so `*` gets passed `5` and `7` as operands, which returns `35` as a result. Subsequently, `3` and `35` get passed to `+` for a final result of `38`. It's as though JavaScript inserted a pair of **parentheses** around `5` * `7`:

```js
> 3 + (5 * 7) // => 38
```

Suppose we wanted to prioritize `3` + `5` instead of `5 * 7`? The solution is as simple as using our own set of parentheses:

```js
> (3 + 5) * 7 // => 56
```

Parentheses override the default evaluation order and have the highest possible precedence.

Another way to think of precedence is that it *controls the order of evaluation*. Operations involving operators with high precedence get evaluated before operations involving low precedence. When two operations involve operators of the same precedence, the operations occur left-to-right (or right-to-left in some cases). However, thinking of precedence in this way can sometimes lead to unexpected results when using the `||` and `&&` **short-circuit operators** or the **ternary operator** (`a ? b : c`). It's safer to think of precedence as the mechanism used by JavaScript to determine which operands get passed to each operator.

Don't rely too much on precedence. It's easy to forget the precedence order and get confused by an unexpected result. If you're using 2 or more different operators in an expression, *use parentheses to explicitly define the meaning*. Even relying on left-to-right evaluation is subject to problems - for instance, multiple `=` and `**` operators evaluate right-to-left.

An operator that has higher precedence than another is said to **bind** more tightly to its operands. In the expression `3 + 5 * 7`, the `*` operator binds more tightly to its operands, `5` and `7`, than does the `+` operator. Thus, `+` binds to `3` and the return value of `5 * 7` instead of `3` and `5`.

Don't confuse "bind" and "bound" as used in this assignment as having anything to do with the `bind` method discussed in JS120. They are not related.

### Evaluation Order

From time to time, you may hear or read somebody saying that precedence determines the order in which expressions get evaluated. The evaluation process is more complicated than just determining what gets evaluated first, though. In fact, precedence in JavaScript is only part of the story; the other parts are either left-to-right evaluation, right-to-left evaluation, short-circuiting, and ternary expressions.

Consider this code and the output it displays:

```js
function value(n) {
  console.log(n);
  return n;
}

console.log(value(3) + value(5) * value(7));
```

```sh
3
5
7
38
```

From the first 3 lines of output, you might conclude that JavaScript is evaluating the expression left-to-right. However, the final result says otherwise -- you can only get that result if `value(5) * value(7)` gets evaluated before `value(3) + value(5)`. Which is it?

It's a little of both. The issue here is that operators like `+` and `*` need values that they can work with. Function invocations like `value(5)` and `value(7)` are not values. We can't invoke the `*` operator until we know what values those functions return. In an arithmetic expression, JavaScript first goes through an expression left-to-right and evaluates everything it can without calling any operators. Thus, here it evaluates `value(3)`, `value(5)`, and `value(7)` first, in that order. JavaScript re-evaluates the result with the precedence rules only after it has those values.

*Right-to-left evaluation* occurs when you do multiple assignments or multiple `**` operators:

```sh
> a = b = c = 3
> 5 ** 3 ** 2 // 1953125 (same as 5 ** (3 ** 2) = 5 ** 9 = 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5)
```

Neither of these are good practice in JavaScript, so we won't discuss them further.

The ternary operator (`?:`) and the short-circuit operators `&&` and `||` are a common source of unexpected behavior where precedence is concerned. Consider the following expressions:

```sh
> 3 ? 1 / 0 : 1 + 2  // Infinity
> 5 && 1 / 0         // Infinity
> null || 1 / 0      // Infinity
```

What happens, though, if we modify things so that `1 / 0` isn't needed?

```sh
> null ? 1 / 0 : 1 + 2 // 3
> null && 1 / 0        // null
> 5 || 1 / 0           // 5
```

In all 3 cases, `1 / 0` *never gets executed*, even though operator precedence would suggest that it should be evaluated first.

- In the first expression, `1 / 0` isn't evaluated since its the truthy operand for the `?:` - it only gets run when the value to the left of `?` is truthy. Instead, the code returns `3` `(1 + 2)`.
- The other two expressions don't evaluate `1 / 0` due to short-circuiting.
- In all 3 expressions, this is simply the way JavaScript works - it treats `?:`, `&&`, and `||` differently from other operators and doesn't evaluate subexpressions unless it needs them.

### Use Parentheses

Really. Don't rely on the precedence rules when you're mixing operators; use parentheses whenever you mix operators in an expression. If you don't bother with the parentheses, you'll eventually decide to work from memory. Sooner or later you'll misremember the rule, and introduce a nice little bug into your code. Someone reading your code may not be as familiar with the precedence rules as you. They will either have to look up the rules, or assume that you knew what you were doing when you wrote the code. If they assume that you knew what you were doing, they will miss the bug.

20210720 17:23 Precedence Assignment completed.

## Assignment: Calculator Bonus Features

As you program more, you'll soon realize that there's no such thing as a program that's "done." Here are a couple of bonus features you can tackle if you're up to it. They're optional, so if you're in a rush, you don't have to do them.

### 1. Asking the user for another calculation

Currently, our calculator asks the user for two numbers and an operation and then exits after displaying the result. Wouldn't it be nice if we could ask the user if they wanted to perform another calculation and start a new calculation when they respond with yes?

```js
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

while (true) {
  // ask for two numbers
  // ask for operation
  // perform operation and display results

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  if (answer !== 'y') break;
}
```

We nest the main part of our program in a `while (true)` loop and, at the end of the loop body, we ask the user if they want to perform another calculation. If the user inputs anything other than `'y'`, we break out of the loop with the `break` statement. That looks good so far, but suppose the user enters an uppercase `'Y'` or the word `'yes'` instead of `'y'`. What happens then? We can take care of those cases with the following change:

```js
while (true) {
  // code omitted for brevity

  if (answer[0].toLowerCase() !== 'y') break;
}
```

### 2. Extracting messages in the program to a configuration file

There are several messages sprinkled throughout the program. Can we move them into some configuration file and access them by key? That would let us manage the messages more easily, and we could even internationalize the messages.

Hints

- Use the JSON format to store messages in a file called `calculator_messages.json`. Here's a [quick description](https://developers.squarespace.com/what-is-json) of what JSON is.
  - JSON, or JavaScript Object Notation, is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application, as an alternative to XML.
- Use `require('./calculator_messages.json')` to load the file into your program as an object.
- Access the messages from that object with object property access syntax.

Solution

First, we need to extract the messages into a configuration file. We can use any format, from plain text files to YAML to CSV. Npm has libraries that can help with parsing those formats, but we're not yet ready to tackle npm libraries. Most JavaScript developers prefer the JSON format, so we'll use that. We'll extract our messages into a file named `calculator_messages.json`. Make sure this file is in the same directory as your calculator program.

```json
{
  "welcome": "Welcome to Calculator! Enter your name:",
  "validName": "Make sure to enter a valid name."
}

```

As you can see, our JSON configuration is just a list of key/value pairs like a JavaScript object. We only show two key-value pairs, but you can add more. Just be sure to follow the syntax shown.

Next, we'll load this file into our program:

```js
// at the top of the file

const MESSAGES = require('./calculator_messages.json);
```

This line will load the contents of the `calculator_messages.jso`n file in the form of an object and assign it to the `MESSAGES` constant. Since it's an ordinary object, we don't have to do anything before we use it. We can just start accessing its properties as needed:

```js
// replace this:
prompt("Welcome to Calculator! Enter your name:");

// with this:
prompt(MESSAGES['welcome']);
```

### 3. Internationalization

Your calculator program is a hit, and it's being used all over the world! The problem is, not everyone speaks English. You now need to internationalize the messages in your calculator. You've already done the hard work of extracting all the messages to a configuration file. Now, all you have to do is send that configuration file to translators and call the right translation in your code.

Hints

Modify your JSON file to use nested structures; the outermost structure should use a key to identify the language, while the inner structures should contain the messages that pertain to that language.

Solution

First, we must reorganize our JSON configuration a little bit to account for different languages. We'll nest the message keys under a top-level language, thereby organizing all the values. Here's an example:

```json
{
  "en": {
    "welcome": "Welcome to Calculator! Enter your name:",
    "validName": "Make sure to enter a valid name."
  },
  "es": {
    "welcome": "Bienvenido a la calculadora! Entre su nombre:",
    "validName": "Asegúrese de entrar un nombre válido."
  }
}
```

Note that we're using two top-level keys here to distinguish between English messages and Spanish messages. We could have as many top-level keys as we want to -- one for each language our program supports.

Next, we have to study how this change affects our `MESSAGES` object. If we do a `console.log(MESSAGES)` in our program, we'll see that it's still an object, except it's now a nested one. That means we must use a language key first, then the message. For example, we can get the Spanish welcome message like this:

```js
MESSAGES['es']['welcome'];
```

Because we'll need the language key every time we reference the message, let's move that to a function that we can call. That way, we can pass in the language to the method, which can then reference the `MESSAGES` object.

```js
function messages(message, lang='en') {
  return MESSAGES[lang][message];
}
```

This now means we can do this in our program:

```js
// english
prompt(messages('welcome'));       // => Welcome to Calculator! Enter your name:

// english
prompt(messages('welcome', 'en')); // => Welcome to Calculator! Enter your name:

// spanish
prompt(messages('welcome', 'es')); // => Bienvenido a la calculadora! Entre su nombre:
```

The last piece is setting a default language for your program.

```js
// top of calculator.js

const LANGUAGE = 'en';
```

Finally, whenever you call the prompt, you can do this:

```js
prompt(messages('welcome', LANGUAGE));
```

If you think that's too verbose, you could move the code around a bit and modify the `prompt` method:

```js
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

// now you can just do:
prompt('welcome')
```

Now, when non-English users want to use your calculator, all they have to do is change the LANGUAGE setting, provided you have translated the messages for them already.

20210720 20:59 16. Assignment: Calculator Bonus Features 2/3 completed. Still working on Internationalization.

## 17. Explicit Type Coercion

**Type coercion** is the conversion of one type of value into another. All programming languages have mechanisms for coercion, but type coercion in JavaScript has some eccentric behaviors. New JavaScript programmers are often baffled by this part of the language. In this assignment, we'll discuss how type coercion in JavaScript works and point out some of the quirky behavior.

There are two kinds of type coercion in JavaScript:

1. **Explicit type coercion**
2. **Implicit type coercion**

In this assignment, we'll talk about the various ways to *explicitly* coerce a value of one type to another. We'll discuss implicit coercion in the next assignment.

### Explicit type coercion

Explicit type coercion happens when the programmer intentionally uses one of the many built-in functions and operators to coerce one type of value to another. In the calculator program we worked on earlier, we used the `Number` function to convert strings to numbers before we could perform arithmetic. Using `Number` in this manner is one of the most common explicit type coercions in JavaScript programs. String to number conversions come up in all kinds of applications. Since user inputs typically come into our programs as strings, we sometimes need to coerce those strings to numbers. Let's run through some scenarios.

#### Coercing values to numbers

The `Number` function takes a string, converts it to a number if it can, then returns that number. If it can't convert the string to a number, it returns the value `NaN`.

```sh
> let one = Number(1)
> one
1
> typeof one
'number'
```

Here, we convert the string `'1'` to the number `1` by using the `Number` function. We then use the `typeof` operator to ensure that the value held by the `one` variable is, in fact, a number. Sure enough, it returns the string `'number'`.

```js
// string not convertible to a number:
> Number("cat")
NaN
```

As expected, we get a value of `NaN`, which, if you recall from the book, is of type "number," but it isn't a meaningful number. It represents a number that cannot be represented.

```js
// convert to empty string
Number('')
0
```

`Number()` converts empty strings and strings with only whitespace to `0`. That may seem odd, and you may even argue about whether it's appropriate, but it is what it is. You'll sometimes come across such unintuitive behaviors in JavaScript.

Thus far, we've talked about converting strings to numbers. What about other types? Can we, for example, convert objects, arrays, booleans, `undefined` or `null` to numbers? The answer is an interesting one here. Examine this code:

```js
> Number({})
NaN
> Number([])
0
> Number([4])
4
> Number([undefined])
NaN
> Number(null)
0
```

If these conversions have you scratching your head, you're not alone. You'll find many such inconsistencies in JavaScript. The critical thing here is to be aware that these inconsistencies exist, and to ensure that your code accounts for them. When you need to determine whether an operation works the way you expect, hop into `node` and try some examples; don't try to memorize what each coercion does.

Converting booleans to a number makes a certain amount of sense. `Number()` coerces the boolean values `true` and `false` to the numbers `1` and `0`, respectively:

```js
> Number(true)
1
> Number(false)
0
```

`parseInt` and `parseFloat`

- Both `parseInt` and `parseFloat` also coerce strings to numbers:
  - `parseInt` *converts strings to integers*, while
  - `parseFloat` coerces strings to floating point numbers.
- both functions operate on **strings**; they don't work with other types.

```js
// parseInt
> parseInt('12')
12
```

`parseInt` takes a string as an argument and tries to parse an integer number from it. Note that we used the word **integer** and not ~~number~~. Even if the string contains a floating point number, parseInt returns an integer and ignores the fractional part:

```js
// ignores fractional part:
> parseInt('12.52')
12
```

An unusual feature of `parseInt` is that *it converts strings to numbers even when the string contains non-numeric characters*. As long as the string begins with a digit -- optionally preceded by a + or - sign -- parseInt returns a number:

```js
> parseInt('12oz')
12
> parseInt('+12oz')
12

// parseInt vs Number:
> Number('12oz')
NaN
```

`parseInt` also differs from `Number` in that it accepts a second argument called the **radix**. It specifies the base of the number contained in the string. For example, `10101` in the binary numbering system (base-2) represents the number 21 in decimal (base-10). Thus:

```js
// radix base-2 as second argument
> parseInt('10101', 2)
21
```

`parseInt` supports radices from 2 to 36. See the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) for more info.

The `parseFloat` function, like `parseInt`, coerces strings to numbers, but it works with floating point numbers. Like `parseInt`, `parseFloat` parses the numeric part of the string, and stops parsing once it finds a character that can't be part of a number.

```js
> parseFloat('12 grams')
12
> parseFloat('12.2 grams')
12.2
>parseFloat('12.223 grams')
12.223
```

Unlike `parseInt`, `parseFloat` *does not accept a radix argument*.

#### Coercing to Numbers using the + operator

Most operators in JavaScript work with two values: we call such operators **binary operators**. JavaScript also supplies a **ternary operator** that works with 3 values. It also has operators that work with a single value, such as the `!` logical operator, which are called **unary operators**. Some operators, such as the `+` and `-` operators do double duty: they can apply to either two values or one. Thus, `5 - 3` is a binary `-` operator that subtracts `3` from `5`, but the expression `-4` uses a unary `-` operator to obtain the negative of the number `4`.

The **unary** `+` operator *attempts to coerce a value to a number*. It works like the `Number` function, but is more succinct:

```js
> +""
0
> +'1'
1
> +'2.3'
2.3
> +[]
0
> +'abc'
NaN
```

The **unary** `+` operator is concise and easy to use, but at first, it may lack clarity. Feel free to use it if you want, but if you find the notation confusing, use the `Number` function instead. `Number` *makes your intent clear* and leaves no room for the ambiguity that can sometimes arise with unary operators.

#### Coercing values to strings

Coercing values to strings is another common form of type coercion in JavaScript. There are several ways to perform this type of coercion. We'll discuss each below.

##### The `toString` method

You can use the `toString` method on all JavaScript data types except `null` and `undefined`. It returns a string representation of the value. Let's see an example:

```js
> let number = 42
> number.toString()
'42'
```

Since JavaScript doesn't let you call a method directly on a number literal, we first assign `42` to a variable before we call `toString()`. The reason for this is that JavaScript interprets the `.` as part of a floating point number:

```js
> 42.toString()
42.toString()
^^^

Uncaught SyntaxError: Invalid or unexpected token
```

Another way to avoid this syntax error is to wrap the number in parentheses:

```js
> (42).toString()
'42'
```

You can also use two . characters instead, though it looks a bit strange:

```js
> 42..toString()
'42'
```

You probably won't see this syntax often.

When used on booleans, `toString` returns either the string `'true'` or `'false'`, depending on the value:

```js
> true.toString()
'true'
> false.toString()
'false'
```

`Array.prototype.toString` converts every element of an array to a string, then concatenates them all with a `,` between each string:

```js
> [1, 2, 3].toString()
'1,2,3'
```

Note that `Array.prototype.toString` treats `null` and `undefined` elements as empty values:

```js
> [1, null, 2, undefined, 3].toString()
'1,,2,,3'
```

The default implementation of `toString` on objects is much less useful than the one on arrays:

```js
> let obj = {a: 'foo', b: 'bar'}
> obj.toString()
'[object Object]'
```

By default, `Object.prototype.toString` returns the string `'[object Object]'`. However, you can override that behavior with custom objects. We'll discuss that in another course.

One limitation of `toString` is that you can't use it on `undefined` and `null` since it's illegal to call a method on either of these types.

#### The `String` function

Another way to coerce values to strings is by using the `String` function. It works in much the same way as `toString`.

```js
> String(42)
'42'
> String([1, 2, 3])
'1,2,3'
> String({a: 'foo', b: 'bar'})
'[object Object]
```

One advantage that `String` has over `toString` is that it works with `null` and `undefined`.

```js
> String(null)
'null'
> String(undefined)
'undefined'
```

This behavior is useful since using `toString` can lead to a program-halting error if the value turns out to be `undefined` or `null`.

#### Template Literals

Inside template literals, JavaScript implicitly coerces interpolation expressions like `${something}` to string values. ***Don't write*** `${something.toString()}` or `${String(something)}`.

### Conclusion

Type coercion is a very common operation in programs and JavaScript provides numerous ways to convert values of one type to another. Make sure you understand the difference between the various methods of coercing values and the relative advantages and disadvantages of each method. JavaScript sometimes tries to be helpful and coerces values for us even when we may not want the conversion. This behavior is ill-advised and something that we'll look at in the next assignment.

20210721 12:31 Explicit Type Coercion assignment completed.

## Implicit Type Coercion

Implicit type coercion happens when you perform an operation involving values of two different types and JavaScript coerces the values to have the same type; that type varies based on the specific combination of types involved in the original expression. JavaScript was initially designed to be a beginner-friendly language, and some of these features were designed to make a developer's life easier. The intentions were good, but this is now considered, for the most part, to be a poor design decision that leads to confusing and buggy code. Nevertheless, these features aren't going to go away, so it's important to understand them if only to learn to avoid relying on them.

How different values get coerced depends on the operation. The most common operations in this context are `==` and `+`, but we'll discuss some other operations as well:

### Implicit Coercion with the `==` Operator

The non-strict equality operator, `==`, works identically to the strict equality operator, `===`, when the *operands have the same type*. Their behavior is wildly different, though, when the values have different types. You'll have noticed that, thus far, we've been using the `===` operator exclusively in our programs when we need to perform equality comparison. The reason for this is that `==` operator implicitly coerces one of its operands when the operands have different types.

The most common case occurs when comparing a string with a number:

The most common case occurs when comparing a string with a number:

```js
> '1' === 1 // strict equality
false
> '1' == 1 // non-strict equality
true
```

- The strict equality operator compares the two values directly. It returns `false` here since the two values have different types, so they aren't identical values.
- The non-strict equality operator, though, coerces the string `'1'` into a number and then compares it with the `1` on the right-hand side. We get the same result if we swap the two operands:

```js
> 1 == '1'
true
```

Such behavior should be unexpected since a string and a number should never be equal to each other. That's why you should use `===` exclusively. Even if you understand what you're doing, other readers of your program may not be familiar with this subtlety.

Strings and numbers aren't the only types that the `==` operator coerces. Let's see what happens when we compare booleans with numbers:

```js
// (boolean 1 => true) == true
> 1 == true
true
// (boolean 3 => false) == true
> 3 == true
false
// (boolean 0 => false) == false
> 0 == false
true
```

- Had we used `===` here, all 3 expressions would return `false`.
- By using `==`, though, two of them return `true`.
- When comparing a boolean with any value, `==` coerces `true` and `false` to their number equivalents, which are `1` and `0` respectively. Thus, the first and last expressions above return `true`.

```js
// compare boolean with a string
> '1' == true
true
```

Here, the boolean `true` is coerced to the number `1`, and the comparison becomes `'1' == 1`. From our previous investigations, we know that this expression evaluates as true since the string `'1'` gets coerced to the number `1`.

Another situation occurs when comparing `undefined` and `null`. The `==` operator considers them equal:

```js
> undefined == null
true
```

One can argue that this behavior is useful since we sometimes want to test whether a value is either `null` or `undefined`. A conditional like the following

```js
let val == getAValueFromSomewhere();

if (val === undefined || val === null) {
  // do one thing
} else {
  // do another thing
}

// shortened from above to the following, without any effect on its behavior:
let val = getAValueFromSomewhere();

if (val === undefined) {
  // do one thing
} else {
  // do another thing
}

// However, the first version is superior since it is more explicit and clear.
```

Thus far, we've only looked at cases where both operands are primitive values. We'll now explore how == behaves when the operands are objects (including arrays). When both operands are objects, == behaves exactly like the === operator; that is, it considers two objects equal only when they're the same object:

```js
> let arr = []
> arr == []
false
> arr == arr
true
```

However, when one of the operands is an object and the other a primitive, `==` coerces the object to a primitive before making the comparison. Let's see a few examples:

```js
> '' == {}
false
> '[object Object]' == {}
true
> [] == ''
true
```

- The plain object `{}` in the above example is coerced into to the string `'[object Object]'`. That's why the comparison with '[object Object]' evaluates as true.
- An empty array, on the other hand, is coerced into an empty string (''). A consequence of this is that the following comparison also holds:

```js
> [] == 0
true
```

- The array is coerced into the string `''`, and then compared with `0` again.
- At this point our comparison becomes `'' == 0`. We know from a previous rule that `==` converts the string to a number when the comparison is between strings and numbers.
- The empty string is coerced to the number `0`, and the resulting comparison becomes `0 == 0`.

Go ahead and try out different combinations of comparisons between objects and primitives. The goal here is not to memorize all possible cases. That's almost impossible. You can always open up the node console and verify for yourself when you need to. The things to remember from this discussion are:

1. When a number is compared with a string using `==`, the string is coerced into a number.
2. When a boolean is compared with any other value, it is coerced into a number and compared again using the `==` operator.
3. When an object is compared with a primitive value, the *object is coerced into a primitive value* and compared again using the `==` operator.
4. A `==` comparison of `undefined` with `null` evaluates as true.

Our advice to avoid `==` and `!=` isn't universal. There are JavaScript developers, including some well-known ones, who will tell you to go ahead and use the loose operators, `==` and `!=`; some even recommend preferring it. Their reasoning is easy to understand: your code should not be attempting to compare different kinds of things, except in a few well-defined, isolated cases. Using the strict operators as a workaround is just masking bad code. They're not wrong! If you're comparing strings with arrays, your code is almost certainly needs a redesign.

That said, you need to be aware of some edge cases with the loose operators. For that reason, the style we use at Launch School insists that you always use the strict operators. Doing so won't prevent you from fixing bad code, but at this stage of your journey, it's less confusing to use the strict operators, and easier to debug.

### Implicit Coercion with the Binary `+` operator

In the previous assignment, we saw that the unary `+` operator could coerce strings to numbers. That's a form of implicit type coercion, but it's so commonplace that some people regard it as explicit type coercion.

```js
// implicit coercion and the + operator
> 'number ' + 1
'number 1'
```

Here, the number `1` is coerced into the string `'1'` and then concatenated with the string `'number '`. The general rule is that whenever one of the operands of the ``+` operator is a string, the other operand is also coerced to a string and concatenated with the string:

```js
> '' + [1, 2, 3]
'1,2,3'
>'' + true
'true'
> '' + undefined
'undefined'
> '' + {}
'[object Object]'
```

When both operands are a combination of numbers, booleans, `null`s, or `undefined`s, they are converted to numbers and added together:

```js
1 + true; // 2
1 + false; // 1
true + false; // 1
null + false; // 0
null + null; // 0
1 + undefined; // NaN
```

When one of the operands is an object, both operands are converted to strings and concatenated together:

```js
[1] + 2;    // '12'
[1] + '2';  // '12'
[1, 2] + 3; // '1,23
[] + 5;     // '5'
[] + true;  // 'true'
42 + {}     // '42[object Object]`
```

### Relational Operators

The relational operators, `<`, `>`, `<=`, and `>=` are defined for numbers (numeric comparison) and strings (lexicographic order).

```js
> 1 < 2
true
> 'b' > 'a'
true
```

There are no strict versions of these operators. When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.

```js
11 > '9';         // true -- '9' is coerced to 9
'11 > 9;          // true -- '11' is coerced to 11
123 > 'a';        // false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a';       // also false
true > null;      // true -- becomes 1 > 0
null <= false;    // true -- becomes 0 <= 0
undefined >= 1;    // false -- becomes NaN >= 1
```

### Best Practices

Understanding JavaScript's implicit type coercions is important when you're debugging code. When you write your programs, though, it's best to:

- **Always use explicit type coercions** (covered in the previous assignment)
- **Always use strict equality and inequality operators** (=== and !==).

There are two exceptions to the advice to always use explicit coercion:

- Don't use `String()` or `toString()` inside `${...}` expressions in template literals.
- Feel free to use the unary `+` operator to convert strings to numbers.

Follow these guidelines even if you think that you understand the rules of implicit coercion. This part of JavaScript is opaque and not well understood. Clearly show your intentions and be explicit. These best practices will save you and future developers much grief.

202010721 14:39 Implicit Type Coercion assignment complete.

## Assignment: Mortgage / Car Loan Calculator

Take everything that you've learned so far and build a mortgage calculator (or car payment calculator -- it's the same thing).

You'll need three pieces of information:

- the loan amount
- the Annual Percentage Rate (APR)
- the loan duration

From the above, you'll need to calculate the following two things:

- monthly interest rate
- loan duration in months

You can use the following formula:

![Mortgage Calculation Formula](mortgage_calc_formula.png)

Translated to JavaScript, the formula looks like this:

```js
let m = p * (j / (1 - Math.pow((1 + j, (-n))));
```

- m = monthly payment
- p = loan amount
- j = monthly interest rate
- n = loan duration in months

When you write your program, don't use the single-letter variables `m`, `p`, `j`, and `n`; use explicit names. For instance, you may want to use `loanAmount` instead of `p`.

Try to print the payment amount as a dollar and cents amount, e.g., `$123.45` or `$371.00`.

Finally, don't forget to run your code through ESLint.

Also, consider asking for a code review after you've reviewed your code against the possible solution, and made any adjustments that you need to make.

Hints:

- Decide what input formats your program expects. For example, should the user enter an interest rate of 5% as 5 or .05?
- If you're working with an Annual Percentage Rate (APR), you need to convert it to a monthly interest rate for use in the formula.
- Be careful about the loan duration -- are you working with months or years? Choose variable names carefully to assist in remembering.
- Think about edge cases. There are plenty of edge cases to work with in this problem, and each presents interesting challenges. For instance, consider whether you want to support no-interest loans or loans that aren't for an integer number of years.
- You can use [this loan calculator](https://www.calculator.net/loan-calculator.html) to check your results.

Possible Solution

## 20. Coding Tips

We perform many code reviews, so we see a wide variety of code. We want to mention a few specific items we've seen come up over and over in doing reviews that may help you on your journey.

We perform many code reviews, so we see a wide variety of code. We want to mention a few specific items we've seen come up over and over in doing reviews that may help you on your journey.

### Dramatic Experience and Retaining Knowledge

A Launch School graduate was talking about how far he's come since starting from the first course and how much he's learned and how much has stuck with him. However, there were also some mistakes that he continues to make, despite having learned about them early on.

After chatting a bit, we concluded that he was still making those basic mistakes since he hadn't been burned badly enough. On the flip side, the things he always remembered were usually due to problems that caused him a major headache in the past. Any time those issues came up, the burn was fresh in his mind, and that helped him avoid repeating the mistake.

Part of our goal at Launch School is to help people realize that programming isn't all that hard. Unfortunately, it does require repetition. Maybe it takes you 2 to 3 hours to debug a small problem, and then you realize "Oh, I just missed a comma" - that's your **burn**.

When you first start learning to program, it seems like there are too many rules to remember. It's hard to understand which ones are crucial, and which ones aren't worth memorizing. Most of the time, when you come across yet another suggestion to follow, the reaction is "Yea, OK! Another rule I need to remember. I'll file it away... somewhere." Until you burn a couple of hours on that rule, you won't retain it for the long haul.

The only way to retain information is to pay with time. Debugging an issue for hours and hours ensures that the problem gets burned into long term memory. You pay for those burns with time, but they pay you back with interest. If you spend 3 hours debugging, those hours weren't wasted -- you won't make that mistake again. Think about debugging from that perspective -- embrace your burns and remember their lessons.

If you are serious about programming and you want to do it for years and maybe decades from today, then the hours you put into debugging little things are going to help you retain knowledge for the long haul.

You're more likely to remember things that took you a long time to solve or that caused you some embarrassment. You decide how to pay for the experience, either through time or repetition.

### Naming Things

Many people try to save on characters by using very short variable or function names. There's no need to save on characters. Choose descriptive names. For example, we see code like this often:

```js
let p = getUserInput();
```

What is `p`? It's easy to see that we're collecting some user input here, but what, exactly, does `p` contain? The next time we use `p` may be much later in the program. By then, you may no longer remember what it contains. That's especially true when you return to a program months or years after you wrote it.

Variable names should describe the content of the variable. If the name doesn't reflect that information, it adds another mental check that you must perform every time you see `p`. We could name it `yesOrNo`, but another problem arises if you later decide to allow a "maybe" response from the user. Typically, you don't want to hardcode possible values into a variable name because of future uncertainty. Instead, try to capture the intent of the variable. For example, if we're trying to capture a response to determine whether the user wants to play a game again, a better name would be `playAgain`. It's both descriptive and future-proof.

In programming, naming things is **hard**. Unfortunately, this problem isn't apparent when you write small programs, but it impedes flow when you're working on large programs. Try to develop good habits now; try to *use descriptive names at all times*.

One small exception to using descriptive names is when you have a tiny block of code -- as in 2 or 3 lines of code, at most. It's less of a problem there since the scope of the name is confined to a small area. Even here, though, the best practice is to use descriptive names.

### Naming Conventions

Names that follow the naming conventions in the [Naming Conventions section of the JavaScript Book](https://launchschool.com/books/javascript/read/preparations#namingconventions) are referred to as **idiomatic names**. In particular, whether a name is idiomatic or not depends on what kind of name we're describing. The following tables show which names are and aren't idiomatic in the various categories (we'll talk about constructors and classes later) and when.

#### Idiomatic Names

Category | Name | Note
---------|----------|---------
 Non-constant variables and object properties |  `employee` |
  | `number` |
  | `fizzBuzz` |
  | `speedOfLght` |
  | `destinationURL` | URL is an acronym
  | `m00n` |
 Constructor functions and clases | `Cat` |
  | `BoxTurtle` |
  | `Flightless Bird` |
 Other functions | `parseURL` | URL is an acronym
  | `goFaster` |
 Configuration and magic constants | `ABSOLUTE_PATH` |
  | `TODAY`
  Other `const` names | `employeeOfMonth` | Local style
  | `HairyCat` | Local style
  | `ABSOLUTE_PATH` | Local style

#### Valid but Non-Idiomatic Names

Category | Name | Notes
---------|------| -----
 Universally non-idiomatic | `$number` | Begins with $
 | `fizz_buzz` | snake_case not allowed
 | `fizzBUZZ` | BUZZ is not an acronym
 | `_hello` | Begins with _
 | `goodbye_` | Ends with _
 | `milesperhour` | Undifferentiated words
 | `MILESPERHOUR` | Undifferentiated words
 Non-constant variables and object properties | Employee Begins with capital letter
 `fizzBUZZ` | BUZZ is not an acronym
 `FIZZ_BUZZ` | SCREAMING_SNAKE_CASE
 Constructor functions and classes | cat | Begins with lowercase letter
 | `makeTurtle` | Begins with lowercase letter
 | `FIZZ_BUZZ` | SCREAMING_SNAKE_CASE
 Other functions | `ParseURL` | Begings with capital letter
 | `FIZZ_BUZZ` | SCREAMING_SNAKE_CASE
 Configuration and magic constants | `absolutePath` | Not SCREAMING_SNAKE_CASE
 | `Today` | Not SCREAMING_SNAKE_CASE

Note that non-idiomatic names are not invalid names. Non-idiomatic names are commonly used by external libraries to provide names that are easy to type yet unlikely to conflict with names in other libraries. For instance, the jQuery library uses a function named `$` as well as variables whose name begins with `$`, while the underscore.js library leans heavily on a variable named `_`.

#### Invalid Names

Name | Notes
-----|-------
 42ndStree | Begins with number
 fizz-buzz | Hyphen not allowed
 fizz.buzz | Looks like property reference

### Avoid Magic Numbers

A **magic number** is a number (or other simple value) that appears in your program without any information that describes what that number represents. For instance, a card game in which each player is dealt 5 cards may use the number `5` at various points in the program, such as a loop that deals the cards or when determining how many cards a player should receive to get back to the 5-card level. If you just use the number `5` in your program, there's no way to tell by just looking at the code why you are using that particular number. The situation becomes even more confusing when you use the same number in other contexts. For instance, your game may also use a best-of-five approach to determine the overall winner.

The way to avoid magic numbers is to use constants.

```js
const NUMBER_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; ++cardNumber) {
    hand.push(dealCard());
  }

  return hand;
}
```

Typically, magic number constants are set at the top level of a program as shown above, though you can also declare them inside a function.

Another consideration when declaring constants is whether the meaning of the number is clear. For instance, in some programs, you may need to know the **Unicode code points** (sometimes erroneously referred to as the ASCII character-code values) for the characters `a` and `z`. You could define those constants like this:

```js
const FIRST_CHARACTER_CODE = 97;
const LAST_CHARACTER_CODE = 122;
```

This code works, but it's still not clear what `97` and `122` mean in the context of your program. Instead, you can use some more explicit code by calculating the values directly from the characters:

```js
const FIRST_CHARACTER_CODE = 'a'.charCodeAt();
const LAST_CHARACTER_CODE = 'z'.charCodeAt();
```

In this last code fragment, `'a'.charCodeAt()` returns the Unicode code point of the character `a`, while `'z'.charCodeAt()` does the same thing for `z`. The resulting declaration is now much clearer and also less error-prone.

### Formatting

When using curly braces, if your block is multiple lines, the opening brace is on the same line as the initial statement and the ending brace is on its own line. If your block contains just a single-line statement or expression, you may condense it to one line. However, watch your line length when you do this; long lines are difficult to read. The longer the line, the more difficult it is to scan the code quickly.

```js
if (myObject.myNumber > 26) {
  console.log('Number is greater than 26');
} else {
  console.log('Number is less than or equal to 26');
}
```

Semicolons should *always* terminate each statement or expression that is not a brace-delimited block.

```js
let someValue = firstValue + secondValue + thirdValue;
```

With no semicolon to separate them, JavaScript sometimes sees the next statement or expression as part of the previous line, which leads to undesired behavior.

```js
function foo() {
  // ... some code here
  return
    42
}
```

The code above returns `undefined` from `foo`. However, the presence of the indented `42` suggests that we wanted to return `42`. Instead, JavaScript decided to assume that `return` is what we wanted, not `return 42`.

`if`, `for`, and `while` statements always use spaces between the keywords and following opening parenthesis, and between the closing parenthesis and opening brace. This prevents confusion between statements and function calls. You should also place space characters before and after operators and the equals symbol.

```js
// Bad
let counter=0;
while(counter<15){
  counter+=1;
}

// Good
let counter = 0;
while (counter < 15) {
  counter += 1;
}
```

Use one `let`, `const`, or `var` declaration per variable. It avoids thinking about whether to swap out a `;` for a `,`.

```js
// Bad
let firstName = 'Shane',
    lastName = 'Riley',
    dogs = ['Josie', 'Libby'];

// Good
let firstName = 'Shane';
let lastName = 'Riley';
let dogs = ['Josie', 'Libby'];
```

### Mutating Constants

Many developers speak of `const` declarations as declaring a constant: a value that can never be changed. For instance:

```js
const FOO = 4;
FOO = 5; // TypeError: Assignment to constant variable.
```

However, there's a *subtle complication* here: `const` merely declares a variable that can't be reassigned. That is, once initialized, the variable can't be assigned to a new value. However, it does not mean that the value can't be mutated. Consider the following code:

```js
const CARDS = [1, 2, 3];

CARDS.push(4);
console.log(CARDS); // [1, 2, 3, 4]

CARDS[1] = 'changed';
console.log(CARDS); // [1, 'changed', 3, 4]

CARDS.shift();
console.log(CARDS); // ['changed', 3, 4]

CARDS = [5, 6, 7]   // TypeError: Assignment to constant variable.
```

Here, we add a new element to the array object given by `CARDS`, replace an element with a new value, and remove an element from the array. All 3 operations are honored by JavaScript since they merely mutate the array. However, it raises an error on line 12 since reassignment of `const` variables is not allowed.

At best, mutating a value assigned to a `const` variable is misleading and should be avoided. However, it's not illegal to do so and not always observed in practice. Some developers have naming conventions that distinguish between true constants and constants whose values can be mutated.

You can use [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to freeze an object so that its value can not be changed in any way. Using `Object.freeze` is good practice with any constant that must never be modified.

```js
const CARDS = Object.freeze([1, 2, 3]);
CARDS.push(4); // TypeError: Cannot add property 3, object is not extensible
```

### Function Guidelines

The instinct to extract code to a function is good. However, make sure that the function does one thing, and that its responsibility is limited. That implies that your functions should be short (say, 10 lines or less). If it's more than 15 lines long, consider splitting it into 2 or more functions.

A function is said to have **side effects** if it does any of the following:

1. It reassigns any non-local variable. Reassigning a variable in the outer scope would be a side effect.

2. It mutates the value of any object referenced by a non-local variable. Mutating an array or object argument, for instance, would be a side effect.

3. It reads from or writes to a file, network connection, browser, or the system hardware. **Side effects like this include writing to the console log and reading input from the terminal.**

4. It raises an exception without handling it.

5. It calls another function that has side effects.

The following functions have side effects:

```js
// side effect: logs output to the console
// returns: undefined

function displayTotal(num1, num2) {
  console.log(num1 + num2);
}

// side effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}
```

Here's an example of a function with no side effects:

```js
// side effect: none
// returns: a new number

function computeTotal(num1, num2) {
  return num1 + num2;
}
```

Most functions should return a useful value or they should have a side effect, but not both. In the above examples, `append` both returns a useful value and has a side effect. If you write functions that do both, you may have trouble remembering one of those -- either you'll forget about the side effect, or you'll forget that there's a return value that you need to examine.

By "useful value," we mean that the function returns a value that has meaning to the calling code. For instance, a `computeTotal` function should probably return a number that contains the result of adding some numbers together. A function that returns an arbitrary value or that always returns the same value (such as `undefined`) is not usually returning a useful value.

There are exceptions to this rule about mixing side effects and useful return values. For instance, if you read something from a database, you almost certainly have to return a value. If you read some input from the user's keyboard, you probably need to display a prompt, read the input from the terminal, then return a value. Accessing a database and reading and writing from the terminal are side effects, but you may still need a return value.

Function names should reflect whether side effects may occur. For instance, you can use a name like `displayTotal` as the name of a function that displays a total on the console. The term "display" implies that you're going to do some output -- a side effect -- rather than attempting to just calculate and return the total. On the other hand, you would probably name the function that computes the total something like `computeTotal`. In this case, "compute" implies that you're going to return the value of a computation.

#### Functions should be at the same level of abstraction

This guideline is a little hard in the beginning since you have to develop a feel for it over time.

Usually, functions take some input and return an output. We should be able to copy and paste the function into the REPL and test it. When working with a function, you should mentally extract the function from the program and work with it in isolation. You should be able to feed it inputs and expect it to produce some outputs. When you have a function like that, you can use it without thinking about the implementation. Working this way helps compartmentalize your focus, an important skill when working on large codebases.

If the functions in your program are correctly compartmentalized, it makes programming much simpler, especially on large programs. You can see this when you read good code; the functions are all at the same layer of abstraction.

For example, given the four functions below, which one stands out?

- `deal()`
- `hit()`
- `stay()`
- `iterateThroughCards()`

The last one, `iterateThroughCards`, is not at the same abstraction level as the other functions. The other functions are in the language of the game — verbs that are used only for this game. They all specify "what" to do, but leave the implementation details to the actual function. You shouldn't care about the implementation when you use the function. The last function is a programmer concern — iterating through cards. It's "how" you perform the task.

Again, this is going to be hard in the beginning, but pay attention to how you organize your functions, and whether you can look at a list of functions a week later and still understand how to use them without studying their implementations.

### Function Names Should Reflect What They Do

Function names should reflect whether side effects may occur:

```js
function updateTotal(total, cards) {
  // ... some code here
}
```

When we see a function called `updateTotal`, we assume that it mutates something -- perhaps one of the arguments or something else in the program. We wouldn't expect the return value to have any significance. If it does, then you might have a problem. The less you have to remember, and the less other people have to remember while looking at your code, the better. Use naming conventions, even in your own code, to signify which types of functions mutate vs. which functions return values.

The more you have to think about a function, the harder it is to use it. If it has side effects and returns a value, it makes debugging and using the function difficult.

One corollary of this rule is that you should avoid functions that print things to the console and return a useful value. For instance, a `getAndDisplayTotal` function might display a total value and also return it. Those are two distinct actions that you may not always want to do together. However, if they're combined, then you probably need to repeat yourself somewhere.

There are exceptions to the "don't print and return" guideline. One exception is a function that requests some input from the user and then returns that input. Logically, that's a single operation: "get input from the user." A simple example of such a function is the `question` function from `readline-sync`.

Your goal should be to build small functions that are like LEGO blocks: they should be stand-alone pieces of functionality that you can use to piece together larger structures. You don't want these functions to be mentally taxing to use. Interesting structures comprise hundreds or thousands of individual LEGO pieces. Likewise, large programs combine hundreds or thousands of small functions. (Later, we'll talk about organizing functions into classes and objects).

Some functions are convoluted since the logic is complex. It's a sign that you don't quite understand the problem well enough to break it down into well-compartmentalized pieces. That's fine at first. However, your understanding should grow as you dig deeper into the code. When it does, refactor your code to reflect that increased clarity.

This process is similar to writing. Your first draft is almost exploratory, dumping out ideas all over the place. As your narrative comes into focus, the structure of your piece becomes more organized and clean.

### Displaying Output

Some functions only display information. For example:

```js
function welcome() {
  console.log('welcome');
}
```

That's fine, but it's not clear whether a function named `welcome` returns a string or outputs a string. One way to resolve this is to help yourself remember and prefix functions that output values with something like `print`, `say` or `display`. That requires some discipline, and it's vital that you only output values in these functions. Don't mutate arguments or return values.

Functions are like black boxes. It takes some stuff (input) and returns some value (output) to you. They should be self-contained; you should know what they do without looking at the implementation. Coding is much easier if you follow these general guidelines.

Remember that code not only must work correctly, but must also be easy to read, both by others as well as your future self.

### Miscellaneous Tips

- Watch your indentation. Use 2 spaces, not tabs. This violation burns JavaScript programmers' eyes. Verify your indentation after you've pushed to GitHub. (Some JavaScript style guides recommend 4 spaces, but we use 2 spaces at Launch School.)

- Name your functions from the perspective of *using them later*. That is, think first about how you want to invoke them; think about the implementation later. For example, if you have an array of cards, and you want to write a function to find the ace, your function should be called `findAce`, and you can use it like this: `let ace = findAce(cards)`;. You shouldn't name it `findAceFromCards`, because you'd be invoking it like this: `findAceFromCards(cards)`. When the reader sees a function like that, they think "What else can you find an ace from other than cards? Tiles?" The easier it is to read your code, the easier it is to debug and maintain.

- Know when to use a regular `while` loop vs a generic `while (true)` loop. Here's an example:

```js
while (answer.toLowerCase() !== 'n') {
  console.log('Continue? (y/n)');
  let answer = readline.question();
}
```

When running this code, JavaScript will throw an exception of "ReferenceError: answer is not defined". To correct it, we must declare and initialize `answer` before the `while` statement, like this:

```js
let answer = '';
while (answer.toLowerCase() !== 'n') {
  console.log('Continue? (y/n)');
  let answer = readline.question();
}
```

That would certainly work, but another implementation would be to use a generic loop with a `break` statement:

```js
while (true) {
  console.log('Continue? (y/n)');
  let answer = readline.question();
  if (answer.toLowerCase() === 'n') break;
}
```

Here, *all the code is contained in the loop*, and it's slightly easier to reason about it. You could even do without the answer variable and use the user's input (i.e., `readline.question`) in the `if` condition directly, but using `answer` is fine -- remember, clarity over terseness.

### Approach to Learning

Learning to program takes focus and attention. It takes plenty of repetition over a long period. One of the surprising aspects of learning to program is that it's not a sequential process. You can't master JavaScript, then master Node.js and Express, and then master testing. You'll likely revisit topics over and over, and, through experience, the most important information will get burned into your long term memory.

The first time you encounter a topic, it can be daunting. However, the more often you see it, the easier it becomes to understand and use it. The tips mentioned here may not make sense now, but that's ok. Over time, many of these topics will resurface, and it'll make more sense the second time around. Don't be demoralized if you do it once and you can't remember most of it. That's normal. Keep moving forward, and don't be afraid to spend time gaining valuable experience.

20210721 20:35 Coding Tips assignment completed.

## Variable Scope

20210723 10:11

One of the trickiest things to understand for a beginner is the concept of **scope** and how it pertains to accessing variables. A variable's scope is the part of the program that can access that variable by name. This is true in all programming languages. Specifically, variable scoping rules describe how and where the language finds previously declared variables.

In JavaScript, we have two different types of scope: **global** (outer) and **local** (inner).

Before we discuss variable scope in a bit more detail, refresh your memory by re-reading the [Variable Scope](https://launchschool.com/books/javascript/read/functions#variablescope) section from the book.

### The Global Scope

Very small JavaScript programs with no functions or blocks exist entirely within a single scope called the global scope:

```js
// global scope
let name = "Sohee";
console.log(name);
```

Here, we declare the `name` variable on the first line. After this line runs, `name` is available from that point to the end of the program. Running this code writes `Sohee` to the console log.

The concept of global scope is a little more nuanced when you compare JavaScript in the browser to JavaScript in Node.js. In Node.js, a global variable is only available in the file/module you declare it in. If you want variables to be available in another module, you'll have to explicitly import and export them in modules. We'll talk more about this in another course when we discuss node modules. For now, you can *think of global variables as variables that are available across your program.* You can use them anywhere in the program, either globally or from inside a function or a block.

### Local Scope

Local Scope comes in two forms:

- **function scope**
- **block scope**

**Rule 1:** outer scope variables can be accessed by the inner scope:

```js
let a = 1; // outer scope variable

function logA() {
  console.log(a); // => 1
  a += 1; // a is reassigned to a new value
}

logA();
// console.log(a); // => 2 'a' was reassigned in the inner scope
```

This code demonstrates two things. The first is that inner scope can access outer scope variables. The second, and less intuitive, concept is that you can change variables from an inner scope and have that change affect the outer scope. For example, when we re-assigned the variable in the inner scope with `a += 1`, that reassignment was visible in the outer scope.

This means that when we instantiate variables in an inner scope, we have to be very careful that we're not accidentally re-assigning an existing variable in an outer scope. That's a big reason to *avoid single-letter variable names.*

**Rule 2:** inner scope variables cannot be accessed in outer scope:

```js
function aFunc() {
  let a = 1;
}

aFunc();
console.log(a); // ReferenceError: as is not defined
```

Here, the **outer scope** is the **global scope**, and it does not have an `a` variable. Remember that where a variable is declared determines its scope. In the above code, `a` is declared in an inner scope and thus cannot be accessed from an outer scope.

Note that a *local variable only comes into existence when you call that function.* The mere act of defining a function doesn't create any variables. The function declaration does, however, *define* the scope of the variables. For example, in the `aFunc` function above, the function body defines where variable `a`, when created, will be accessible. However, the variable `a` doesn't get created and assigned a value unless we invoke the function. When we call the function on line 5, a variable `a` is created, assigned the value `1` and *immediately discarded* once the function finishes execution and control returns to the main flow of the program.

Because of this, when we talk about the scope of a variable, it doesn't matter whether we ever execute the code. For instance, suppose we had the following complete program:

```js
function aFunc() {
  let foo = 1;
}
```

Though we never invoke `aFunc` and never create the `foo` variable, we still talk of it as in scope within `aFunc`.

**Rule 3:** peer scopes do not conflict:

```js
function funcA() {
  let a = 'hello';
  console.log(a);
}

function funcB() {
  console.log(a); // ReferenceError: a is not defined
}

funcA();
funcB();
```

Executing `console.log(a)` on line 7 throws an error since `a` is not in scope in `funcB`. The declaration on line 2 does declare a variable named `a`, but that variable's scope is confined to `funcA`. `funcB` can't see the variable at all. That also means that we could declare a separate `a` variable in `funcB` if we wanted. The two a variables would have different local scopes and would also be independent of each other.

**Rule 4:** nested functions have their own variable scope:

Nested functions follow the same rules of inner and outer scoped variables. When dealing with nested functions, our usage of what's "outer" or "inner" is going to be relative. We'll switch vocabulary and talk about the "first level," "second level," and "third level."

```js
let a = 1; // first level variable

function foo() { // second level variable
  let b = 2;

  function bar() { // third level
  let c = 3;
  console.log(a); // => 1
  console.log(b); // => 2
  console.log(c); // => 3
  }

  bar();

  console.log(a) // => 1
  console.log(b) // => 2
  console.log(c) // => ReferenceError
}

foo();
```

If some of the outputs above surprise you, you should study the code carefully and make sure you understand the rules around inner scope versus outer scope.

One potentially surprising thing is that we can define functions within other functions in JavaScript. This is not true of all languages. It's likely that you've used this feature of JavaScript before. If you've used an array iteration method such as `forEach` inside a method, you've defined a function inside another function.

```js
function logElements(array) {
  array.forEach(function(element) {
    console.log(element);
  });
}

logElements([1, 2, 3]);
```

Here, we're defining a new function and passing it to the `forEach` method. That's a function definition within another function. Thus far, we've only passed arrow functions into iteration methods like `forEach`. This example uses the `function` syntax just to emphasize the point that you can define a function inside other functions. We'll discuss this practice in detail in another course.

**Rule 5:** inner scope variables can ***shadow*** outer scope variables

Take a look at the following code:

```js
[1, 2, 3].forEach(number => {
  console.log(number);
});
```

Here, `number` is a parameter that represents a value that the callback function expects when it is invoked. It represents each element as the `forEach` method iterates through the array. *Parameters are also local variables* and the same scoping rules apply to them.

Suppose we had a variable named `number` in the outer scope, though. We know that the inner scope has access to the outer scope, so we'd essentially have two local variables in the inner scope with the same name. When that happens, it's called **variable shadowing**, and it *prevents access to the outer scope local variable*. See this example:

```js
let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
```

The `console.log(number)` will use the parameter `number` and discard the outer scoped local variable. Variable shadowing also prevents us from making changes to the outer scoped `number`.

Variable shadowing isn't limited to callback functions. Whenever you have one scope nested within another, ***variables in the inner scope** will shadow variables in the outer scope having the same name.*

```js
let a = 1;

function doit(a) {
  console.log(a); // => 3
}

doit(3);
console.log(a); // => 1
```

Note that, in this case, it's the parameter `a` that is shadowing the global variable a. Most names -- variables, parameters, function names, or class names -- can shadow names from the outer scope. The only names that don't get involved in shadowing are property names for objects.

You want to avoid shadowing since it's almost never what you intended. *Choosing long and descriptive variable names is one simple way to ensure that you don't run into any of these weird scoping issues*. If you do run into these issues, you'll have a much better chance of debugging it if you have clear variable names.

#### Block Scope

In JavaScript, blocks are segments of one or more statements and expressions grouped by opening and closing curly braces (`{}`). Each pair of braces in the constructs like `if/else` and the `for` and `while` loops define new block scopes. The rules for block scopes are identical to those for function scopes.

1. Outer blocks cannot access variables from inner scopes.
2. Inner blocks can access variables from outer scopes.
3. Variables defined in an inner block can shadow variables from outer scopes.

Not all code between **curly braces** is a block.

- For instance, the code inside a function definition is not technically a block, but is, instead, called the **function body**.
  - Although blocks and function bodies are very similar, there are subtle differences that you will encounter in a later course.
- There are also other types of things between curly braces that are not considered blocks:
  - class definitions (introduced in a later course) and
  - object literals are not blocks.
  - The differences are more substantial with these constructs than with function bodies.

```js
// Examples:

// 1. outer blocks cannot access variables from inner scope
if (true) {
  let a = 'foo'
}

console.log(a); // ReferenceError

// 2. inner blocks can access variables from outer scope
let a = 'foo';

if (true) {
  console.log(a); // => 'foo'
}

// 3.
function aFunc() {
  let a = 'foo';

  if (true) {
    let b = 'bar';
    console.log(a); // => 'foo'

    if (true) {
      let c = 'baz';
    }

    console.log(a); // => 'foo'
    console.log(b); // => 'bar'
    console.log(c); // => ReferenceError
  }

  console.log(a); // => 'foo'
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

aFunc();
```

If you run the above example, you'll see that only one exception gets raised: `ReferenceError: c is not defined` even though we expect three exceptions. That's how exceptions work in JavaScript; they halt the execution of the program *immediately*. Once execution reaches line 14, it raises an error and immediately stops executing the rest of the code. The point of the example is to show that the variable `c` will not be accessible outside the inner `if` block and variables `b` and `c` will not be accessible outside the outer `if` block.

### Variable Scope Summary

Understanding variable scope is one of the most challenging and important aspects of learning to program. Make sure you know how variable scope works with regards to functions and blocks. Play around with various scenarios until you feel comfortable. It's likely you'll forget these rules, but the most important thing is to be able to quickly jump in the node REPL or open up your editor and refresh your memory.

20210723 17:10 Variable Scope Assignment completed

## 22. Re-read: Objects vs Primitive Values

Now is a good time to refresh your memory about [Objects vs. Primitive values](https://launchschool.com/books/javascript/read/objects#objectsvsprimitives) from the book.

### Objects vs Primitives

You may remember that JavaScript has two categories of data types: **primitives** and **objects**. The primitive types are strings, numbers, booleans, `null`, and `undefined`, bigints, and symbols. Primitive types are the simplest, most basic types in JavaScript.

Objects include, but aren't limited to, the following types:

- Simple Objects
- Arrays
- Dates
- Functions

Primitives | Objects
---------|----------
 string | Simple Objects
 numbers | Arrays
 booleans | Dates
 `null` | Functions
 `undefined` |
 bigints |
 symbols |

We learned about simple objects in the previous section; they're structures that contain multiple named values. Arrays are also objects, but they use integer indexes instead of keys. We learn about Date and Function objects in the Core Curriculum.

Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays **are** objects) has a `length` property that contains a number: a primitive value. Objects are usually (but not always) mutable: you can add, remove, and change their various component values.

Primitive values are always immutable; they don't have parts that one can change. Such values are said to be **atomic**; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or reassign it: give it an entirely new value. *All operations on primitive values evaluate as new values.* Even something like `0 + 0` evaluates to a new value of `0`.

```js
> let number = 20
> let newNumber = number + 1
> newNumber
= 21

> number
= 20

> let object = { a: 1, b: 2, c: 3 }
> object.c = object.c + 1
= 4

> object
= { a: 1, b: 2, c: 4 }
```

The above example illustrates the difference between an immutable primitive value and a mutable object. The `+` operation on line 2 returns a new value (`21`), and assigns it to `newNumber`; the original value of `number` (`20`), remains unchanged. In contrast, writing a new value to the `object`'s `c` property on line 10 changes the object's value. Note, however, that the `c` property has an entirely new number in it, precisely like what happened on line 2.

### What Things Aren't Objects or Primitives?

Objects and primitive values are the data and functions that you use in your program. Anything that isn't data or a function is neither a primitive value nor an object. That includes:

- variables and other identifiers such as function names
- statements such as `if`, `return`, `try`, `while`, and `break`
- keywords such as `new`, `function`, `let`, `const`, and `class`
- comments
- anything else that is neither data nor a function

Note that variables and other identifiers have or reference objects or primitive values, but the names, by themselves, are not.

---

Make sure you fully understand the following concepts after re-reading that section of the book:

1. Every value in JavaScript is either a primitive or an object
2. Primitives are atomic values
3. Objects are "compound" values made up of primitives or other objects
4. Primitive values are immutable. In other words, you can't add to, remove from or otherwise change a primitive value. Any operation performed on a primitive value returns a new primitive value.
5. Objects are mutable. That is, certain operations on objects can change the object in place. All variables that have a reference to that object will see that change.

Understanding the difference between objects and primitive values is essential to understanding JavaScript. Specifically, understanding the concepts of "pass-by-reference" vs. "pass-by-value" is crucial. That's the topic of discussion in the next assignment.

20210723 19:53 Re-read: Objects vs Primitive Values assignment completed

## 23. Pass by Reference vs Pass by Value

It's important to know what happens to function arguments. Different languages have different strategies for this. The terms **pass-by-reference** and **pass-by-value** describe the two main strategies. This assignment provides an understanding of what those terms mean and how they relate to JavaScript's behavior. In the end, it doesn't matter what you call it, as long as you understand how to invoke functions with the behavior you expect.

### What does Pass-by-Value mean?

The concept of "pass-by-value" traditionally means that when you use a variable to pass an argument to a function, the function can't do anything that sets the original variable to a different value. No matter what happens in the function, the variable will still contain the same value that was passed to the function.

That can lead you to believe that JavaScript is pass-by-value since re-assigning a parameter variable within a function doesn't affect the variable outside the function. For example:

```js
function changeName(name) {
  name = "bob"; // does this reassignment change the variable outside the function?
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => 'jim
}

anotherFunction();
```

Note that this code example has two different `name` variables. One is in the scope of the `changeName` function while the other is in `anotherFunction`'s scope. These two names are in separate scopes, and have no direct relationship with each other.

The question is: when we use `name` from `anotherFunction` to provide an argument to `changeName`, are we passing it by reference or by value? It looks like we may be passing it by value since re-assigning the variable does not affect the variable inside `anotherFunction`. Had the `name` variable in `anotherFunction` changed, we would say that JavaScript is pass-by-reference. Does that mean that JavaScript is pass-by-value?

### What does Pass-by-Reference mean?

From the previous example, it's natural to conclude that JavaScript is pass-by-value. However, it's not as simple as that. If JavaScript were purely pass-by-value, there wouldn't be any way for the function to change the original object. However, you can easily do that in JavaScript:

```js
function capitalize(names) {
  for (let index = 0; index < names.length; index +=1) {
    names[index] = names[index][0].toUppeCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']
```

That implies that JavaScript is pass-by-reference since the function affected the original object. However, as we saw with the re-assignment example, not all operations affect the original object. Let's make a small change to the above program:

```js
function capitalize(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names = ["chris", "kevin", "naveed];
capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
console.log(names); // => ['chris', 'kevin', 'naveed']
```

If you can't see the difference, look carefully. It appears we're back in the pass-by-value world again, where functions don't affect the original object. What's going on?

### What JavaScript does

*When you pass primitive values to functions, you can treat JavaScript like pass-by-value.* No operation performed on a primitive value can permanently alter the value. In other words, when you pass a primitive value to a function, you won't be able to affect the value of the argument passed to the function.

```js
function cap(name) {
  name.toUpperCase();
}

let myName = "naveed";
cap(myName);
console.log(myName); // => 'naveed'
```

However, the matter is more complicated when using objects (arrays and plain objects for example). With objects, JavaScript exhibits a combination of behaviors from both pass-by-reference as well as pass-by-value. Some people call this *pass-by-value-of-the-reference* or *call-by-sharing.* Whatever you call it, the most important concept you should remember is:

> When an operation within the function mutates its argument, it affects the original object.

The natural question is, then, which operations mutate the caller? Unfortunately, that's something that you have to discover through usage and reading the documentation.

Functions and methods that *mutate* their callers are called **destructive functions or methods**. `Array.prototype.push`, for example, is a destructive method:

```js
function addNames(arr, name) {
  arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); // ['bob', 'kim', 'jim']
```

You can see that `addNames` *permanently* changed the original `names` array.

**Reassignment** *is not* a destructive operation, as can be seen in this code:

```js
function addNames(arr, name) {
  arr = arr.concat([name]);
}

let names = ["bob", "kim"];
addName(names, "jim");
console.log(names) // => ['bob', 'kim']
```

Notice how the above code doesn't change the `names` array. However, if we make a very tiny change, the result is dramatically different:

```js
function addNames(arr, name) {
  arr = arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); // => ['bob', 'kim', 'jim']
```

Can you spot the change? We changed the method from `concat` to `push`. That implies that when we use `concat` to concatenate two arrays together, it returns a new array and doesn't mutate the original. However, when we use `push` to append a new value into an array, it does mutate the original array.

### Return Values

For most practical purposes, one can speak of values returned by functions as being pass-by-value or pass-by-reference much as we can with arguments. Consider these two code fragments:

```js
// 1.
function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);
console.log(number); // 1
console.log(newNumber); // 1

// 2.
function bar(array) {
  return array;
}

let array = [1, 2, 3];
let newArray = bar(array);
console.log(array === newArray) // true (they are the same object)

array.push(4);
console.log(array); // [1, 2, 3, 4]
console.log(newArray) // [1, 2, 3, 4]
```

With the `foo` function, we're passing a primitive value (`1`) into the function. As with all primitive values, the value is *passed by value*, so `foo` receives a copy of the original value. It then returns the value of the argument it received, which is yet another new value. When all that code runs, both `number` and `newNumber` have a value of `1`, but the two variables are not linked in any way -- the values are different numbers that just happen to be equal.

In the `bar` function, we're passing an array (`[1, 2, 3]`) into the function. As with other arrays and objects, `bar` receives a pointer (a reference) to the array. It then returns another reference to the same array to the calling code. When all is done, both `array` and `newArray` point to the same array in memory.

This may seem silly, but, as you'll see in a later course, this is behavior you must be aware of.

### Assignment

Simple assignments in JavaScript work a lot like pass-by-value and pass-by-reference:

```js
number = 1;
newNumber = number; // is this pass by value?

arr = [1, 2, 3];
newArr = arr; // is this pass by reference?
```

In the above code, `number` and `newNumber` have the same values, but those values are distinct -- if you increment one, the other is unaffected. Thus, it looks a lot like pass-by-value. On the other hand, `arr` and `newArr` point to the exact same array. If you use `arr` to modify the array, the array referenced by `newArr` also changes. That looks like pass-by-reference.

This similarity is a useful mental model. However, it's incorrect to speak of assignment in terms of pass-by-value or pass-by-reference. In JavaScript, those terms only apply when calling and returning from functions, not assignments.

### Variables as Pointers

Now is a good time to re-read the section [Variables as Pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers). Understanding this will help explain why JavaScript exhibits the behavior we have talked about in this assignment.

21:19 stop

20210724 09:03