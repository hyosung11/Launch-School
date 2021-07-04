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

