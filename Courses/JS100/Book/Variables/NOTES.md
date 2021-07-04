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

## Declaring constants

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
