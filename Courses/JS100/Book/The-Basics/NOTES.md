# Introduction to Programming: The Basics

## Data Types

JavaScript has five so-called **primitive data types:**

1. String
2. Number
3. Undefined
4. Null
5. Boolean

All other data types are **object type**. (ES6 introduces two additional primitive types: Symbol and BigInt.)

Data type values can be represented by **literals**. A literal is any notation that lets you represent a fixed value in source code. For instance, all of the following are literals in JavaScript:

```js
'Hello, world!'     // string literal
3.141528            // numeric literal
true                // boolean literal
{ a: 1, b: 2 }      // object literal
[ 1, 2, 3 ]         // array literal
undefined           // undefined literal
```

### Strings
- note that the quotes are syntactic components, not part of the value.

```js
> 'He said, "Hi there!"'    // with single quotes
= 'He said, "Hi there!"'

> "He said, \"Hi there!\""  // with double quotes and escaping
= 'He said, "Hi there!"'
```

- Note that Node displays the return values with double quotes here. It ordinarily uses single quotes, but it switches to double quotes when the string's value contains any single quotes.

A similar technique works when the string contains a double-quote character: put the entire string inside single quotes or escape the double-quote characters.

```js
> 'He said, "Hi there!"'    // with single quotes
= 'He said, "Hi there!"'

> "He said, \"Hi there!\""  // with double quotes and escaping
= 'He said, "Hi there!"'
```
- This time Node uses single quotes; that's the default.

Template Literals (backticks) enable an operation called **string interpolation**
```js
> `5 plus 5 equals ${5 + 5}`
= '5 plus 5 equals 10'
```

String interpolation syntax:
```js 
Blah ${expression} blah.
```

### Numbers
- JavaScript has a single data type, Number, that represents all types of numbers. For the math whizzes out there, we mean real numbers.

```js
1, 2, -3, 4.5, -6.77, 234891234 // Examples of numeric literals
```
### Booleans
- `true` or `false`

### Undefined
- the absence of value expressed as `undefined`
- Can also explicitly use the literal `undefined`
```js
setAgeFor('Omi', undefined);
```
- The `console.log` function is an example of a function that returns `undefined`:

```js
> console.log("Hello, World!")
Hello, World!
= undefined
```
- `undefined` also arises when declaring variables without an explicit value. `node` example:

```js
> let foo
= undefined

> foo
= undefined

> let bar = 3
= undefined

> bar
= 3
```

- As you can see, we declare the `foo` variable without giving it a value. Using that variable returns `undefined`. On the other hand, we declare `bar` with an initial value of `3`. Thus, using `bar` in an expression returns `3`.
