# Answer Snippets for Written Assessment

## Data Types

JavaScript has the following built-in data types:

`undefined`
`null`
`String`
`Number`

### `Number`

* All JavaScript numeric values have type `Number`.
* JavaScript represents all numbers using a floating point system.

Primitive values are not mutable.
`NaN` is a number in JavaScript, so it is a primitive value.
`undefined` is a primitive value

## 4. Declarations, Initialization, Assignment, and Reassignment

```js
let myNumber = 3;
```

`let` with a variable name and optional assignment forms a JavaScript statement.

The value `3` is an expression. Code appearing to the right of an `=` in a declaration is an expression.

```js
let myVariable = 'Hello, World';
myVariable = 23;
```

Once you create a variable, you can reassign it to a different value. This code contains only one variable: `myVariable`.

```js
let a = 2;
let b = Math.floor(Math.random() * 2);
a *= b;

if (a = 2) {
  console.log('The value of `a` is two.');
} else {
  console.log('The value of `a` is NOT two.');
}
```

In JavaScript, whenever you see a single `=` sign in an expression, it's always variable assignment. 

## 5. Equality: Loose and Strict Equality

When comparing a `number` and a `string`, JavaScript coerces the `string` to a `number.

* Even if a string isn't a number, JavaScript coerces it to a number when a string and a number are mixed with `==`.
* It doesn't matter which side of the `==` contains the string operand.
* If the string contains a non-numeric value, JavaScript coerces it to `NaN`.