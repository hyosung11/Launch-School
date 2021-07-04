# INTRODUCTION TO PROGRAMMING: Variables

Think of variables as containers that hold information: their purpose is to label and store data in memory so that your program can use it.

## Variables and Variable names

A variable is simply a named area of a program's memory space where the program can store data. Typically, variables can be changed. That is, we can give the variable a new value.

```js
let answer = 41;
answer = 42;
console.log(answer)
```

### Variable Naming

A variable name must accurately and succinctly describe the data that the variable contains. Make sure that they are accurate, descriptive, and understandable to other readers.

Variable names are often referred to by the broader term, **identifiers**. In JavaScript, identifiers refer to several things:

* Variable names declared by `let` and `var`
* Constant names declared by `const`
* Property names of objects
* Function names
* Function parameters
* Class names

### What Else is a Variable?

JavaScript has a bunch of other things that involve storing data in a named area of memory. The list looks a lot like the list of identifiers:

* Variables declared with let and var
* Constants declared with const
* Properties of the global object
* Function names
* Function parameters
* Class names

The most significant difference in this list compared to the list of identifiers is that not all object properties are variables; only those on the global object.

## Declaring and Assigning Variables

```js
> let firstName
= undefined

> firstName
= undefined

> let firstName = 'SungOh' // Initializer used in declaration.
= undefined

> firstName
'SungOh'

> console.log(`Your first name is ${firstName}`)
'Your first name is SungOh'
= undefined

> firstName = 'Omi'
= 'Joe'

> firstName = 42
= 42

> let firstName = 'Sohee' // Declare and initialize variable with an explicit value on the same line.
= undefined

> firstName = 'Martha'
= 'Martha'
```

* Note that regardless of whether we provide a value in a declaration, the variable is initialized. If we don't provide an explicit value, that initial value is undefined.

* There is a subtle difference in terminology surrounding the = token. When used in a declaration, the = is just a syntactic token that tells JavaScript that you're going to supply an initial value for the variable. However, in an assignment, the = is called the **assignment operator**.

```js
> let a = 4
= undefined

> let b = a
= undefined

> a = 7
= 7

> b
```

* You'll notice that `b` retains the value `4`, even though a is now `7`. This example suggests that variables have values that aren't deeply-linked to each other. If you change one variable, it doesn't change other variables with the same value.

## Declaring Constants

```js
> const firstName = 'Mitchell'
= undefined

> firstName
= Mitchell

const INTEREST_RATE = 0.0783;
INTEREST_RATE = 0.0788; // Uncaught TypeError: Assignment to constant variable.

let interest = amount * 0.0783;

const INTEREST_RATE = 0.0783;
let interest = amount * INTEREST_RATE; // easier to understand than the above code snippet
```

A standard convention when naming constants is to use all uppercase letters and digits in the name; if the name contains multiple words, use underscores to separate the words.

```js
const foo; // SyntaxError: Missing initializer in const declaration
```

## Variable Scope 

In JavaScript, variables declared with the let or const keywords have **block** scope.

```js
if (expression) {  // block starts at {
  doSomething();   // block body
}                  // block ends here
```

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

In general, blocks appear in `if...else if...else`, `while`, `do...while`, `for`, `switch`, and `try...catch` statements, or by themselves (as in the first example above).

As mentioned above, function bodies are not technically blocks. However, they look and behave so much like blocks that many developers do not distinguish between the two. In this book and the curriculum, we'll usually treat function bodies as blocks. When we want to differentiate them or exclude function bodies from the discussion, we'll refer to **non-function blocks**.

```js
if (1 === 1) {
  let a = 'foo';
}

console.log(a); // ReferenceError: a is not defined

// The error tells you that a isn't available on line 5. In other words, it isn't in scope outside of the if block.

let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a);    // => 'bar'

// If, on the other hand, you declare the variable outside the if block, the variable is available within the block as well as after the block ends.

