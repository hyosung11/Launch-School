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

### Null
- `null` represents the intentional absence of value, i.e., emptiness or nothing.
- `null` explicitly used; `undefined` can arise implicitly.

```js
> let foo = null
```
- `null` is specified as a literal value.

### The typeof Operator
- Every value in JS programs has a data type. 
- Use `typeof` to see what type a particular value has. 
- `typeof` returns a string that contains the type of its operand's value:

```js
> typeof 1
= 'number'

> typeof 'foo'
= 'string'

> typeof true
= 'boolean'

> typeof undefined
= 'undefined'

> typeof null
= 'object'

> typeof [1, 2, 3]
= 'object'
```

## Operations

### Adding, Subtracting, and Multiplying numbers

- `+`, `-`, `*`

### Division and Remainder

- `/` and `%`
- JavaScript also has a **remainder operator**, `%.` It returns the remainder of a division operation.

```js
> 16 % 5
= 1
```

- Since 16 divided by 5 equals 3 with a remainder of 1, this operation returns 1.

- Note that JavaScript's `%` operator computes the **remainder** of dividing two numbers; it does not compute the modulo value, nor does it have any built-in methods that will compute the modulo value.
- If you need to determine the modulo or remainder of two integers, try to work with positive integers exclusively.

### NaN

- Some operations, such as `0 / 0`, return the value `NaN`, which stands for "Not a Number." This special value signals an illegal operation on numbers such as `0 / 0`or `3 + undefined.
- `typeof NaN = 'number'`
- Undefined mathematical operations, such as dividing 0 by 0 or trying to take the square root of a negative number, return `NaN`. Note that _undefined_ here is a mathematical term: it doesn't refer to JavaScript's `undefined` value but to a mathematical operation that isn't defined.
- Trying to convert a non-number value, such as `'hello'`, to a number can also return `NaN`.
- To determine whether a value is `NaN`, you can't use the usual comparison operators in a simple way. As it happens, `NaN` is the only value in JavaScript that is not equal to itself:

```js
> let value = NaN;
> value === NaN         // We'll talk about this in a few minutes
= false

> NaN === NaN
= false
```

- Instead, you should use either `Number.isNaN` or `Object.is`:

```js
> let value = NaN;
> Number.isNaN(value)
= true

> Object.is(value, NaN)
= true
```

### Infinity and -Infinity

- `Infinity` is a number that is so large, it can't be written down.
- `NaN`, on the other hand, is the result of an attempted mathematical operation that is neither a valid number nor an infinite number.
- One common operation that results in `Infinity` is to divide a positive number by `0`.
- `Infinity` has some other interesting, and sometimes puzzling, properties:

```js
> Infinity * Infinity
= Infinity

> Infinity + Infinity
= Infinity

> Infinity - Infinity
= NaN

> Infinity / Infinity
= NaN

> 1234567890 / Infinity
= 0
```

- `Infinity` has a negative counterpart, `-Infinity`, that represents an infinite value that is less than 0. It most commonly arises when dividing a negative number by 0:

```js
> -1 / 0
= -Infinity
```

- As with `NaN`, `Infinity` and -`Infinity` are considered by JavaScript to be numbers.

### Equality Comparison

- To determine whether two values are identical, use the `===` operator. It compares two operands for equality and returns `true` or `false` as appropriate.

### String Concatenation

- Use the `+` operator to join two strings and concatenate their values.

```js
> 'foo' + 'bar'
= 'foobar'

> '1' + '2' 
= '12'

> '1' + 2 // JS concatenates the two values as strings. Coerces the number 2 to a string and concatenates the result to the string '1'. Implicit type coercion
= '12'

> '5' - 3 // other arithmetic operation
= 2
```

## Explicit Coercion

- **explicit type coercion** lets you decide what you want to do, whereas implicit coercion lets the engine choose.

### Strings to Numbers

```js
// Number function
> Number('1') // The Number function coerces a string to a number.
= 1 // Can perform arithmetic operations on the result.

> Number('foo') // Number on a non-numeric string
= NaN // Returns NaN in JS. Most other languages return an error.
```

```js
// parseInt function
> parseInt('12') // parses an integer from a string.
= 12

> parseInt('12xyz')
= 12 // Stops converting and ignores everything else once it encounters an invalid character.

> parseInt('3.1415')
= 3 // Returns an integer when the string is a number with a fractional component.

// parseFloat function
> parseFloat('12.5foo')
= 12.5 // Coerces a string to a floating-point (decimal) number.

### Numbers to Strings

```js
// String function
> String(20)
= '20'
```

## Data Structures

### Arrays

- JS organizes information into ordered lists using **arrays**.
- The order of the elements is significant.
- Use index numbers to retrieve array elements.
- Index numbers are non-negative integers starting from `0`.

```js
> [1, 2, 3, 4, 5]
[ 1, 2, 3, 4, 5 ]

> [1, 2, 3, 4, 5][0]
= 1

> [1, 2, 3, 4, 5][2]
= 3

[
  "Eric Idle",
  "John Cleese",
  "Terry Gilliam",
  "Graham Chapman",
  "Michael Palin",
  "Terry Jones", // The trailing comma on the last item in the list is optional, but a common practice. Try to be consistent in its use.
]

### Objects

- JS uses objects as a dictionary-like structure that matches keys with specific values. A JS object is a collection of key-value pairs.

```js
> { dog: 'barks' }
= { dog: 'barks' }

> { dog: 'barks', cat: 'meows', pig: 'oinks' }
= { dog: 'barks', cat: 'meows', pig: 'oinks' }

> ({ dog: 'barks', cat: 'meows', pig: 'oinks' })['cat']
= 'meows' // Returns noise a cat makes by retrieving value by its key.

// Object written in multi-line format.
{
  title: "Monty Python's Flying Circus",
  cast: [
    "Eric Idle",
    "John Cleese",
    "Terry Gilliam",
    "Graham Chapman",
    "Michael Palin",
    "Terry Jones",
  ],
  firstSeason: 1969,
  lastSeason: 1974, /* The trailing comma on the last property in the object is optional, but a common practice. Try to be consistent in its use. */
}
```

## Expressions and Return Values

- JS expressions are like expressions in math; they evaluate to values that you can use as part of another expression:

```js
> 7 + (5 + 2)
= 14

> console.log(5 + 2)
7
= undefined
```

- **return value** is the evaluated value of the expression.
- Expressions don't have to involve operators: any value is an expression that evaluates to itself:

```js
> "hi"
= 'hi'
```

### Printing (logging) vs returning values

- **log** is a synonym for printing or displaying something on the console.

```js
> console.log('Howdy')
Howdy // displayed on the console
= undefined // this is return value of the expression that returned nothing

> let a = console.log("Howdy")
> a 
```
- What do we expect to happen here? The value returned by `console.log("Howdy")` is `undefined`, so that's the value to which `a` gets assigned. Therefore, `a` on the second line evaluates to `undefined`, and `node` shows it as the return value.

```js
let a = console.log("Howdy");
> Howdy
> undefined // This is the return value for me. It's different from above. Why?
```

- Output and return value are different concepts.

