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
`undefined` is a primitive value.

```js
Number('12 oz');   // => NaN
parseInt('12 oz'); // => 12

Number('');        // => 0
parseInt('');      // => NaN
```

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

In JavaScript, whenever you see a single `=`sign in an expression, it's always a variable assignment; in this code, the program assigns the value `2` to `a` instead of testing whether `a` already contains a value of `2`. What's more, the expression between parentheses in an `if` statement gets evaluated in a boolean context; that is, JavaScript tries to determine if the expression has a truthy or falsy return value. In this case, the return value is always `2`, which evaluates as truthy, so the program always executes line 6, and never line 8.

## 5. Equality: Loose and Strict Equality

When comparing a `number` and a `string`, JavaScript coerces the `string` to a `number.

* Even if a string isn't a number, JavaScript coerces it to a number when a string and a number are mixed with `==`.
* It doesn't matter which side of the `==` contains the string operand.
* If the string contains a non-numeric value, JavaScript coerces it to `NaN`.

## 20. Truthiness vs. Boolean

`[undefined]` is truthy since it's an array value, even though the array contains just a single `undefined` element.

## 21. Variable Scope (especially how variables interact with function definitions and blocks)

A variable's scope refers to where it is available for use in a program; in other words, where it can be accessed.

Passing the value of a variable into a function as an argument gives that function access to the value of the variable, but it doesn't change the *scope* of the variable.

The type of variable's value plays no part in its scope, nor does its truthiness.

