# Flow Control

When writing programs, you want your data to take the correct path. You want it to turn left or right, up, down, reverse, or proceed straight ahead when it's supposed to. We call this **flow control**.

## Conditionals

A conditional is a fork (or multiple forks) in the road. Your data arrives at a conditional, which then tells the data where to go.

Examples of valid JavaScript conditionals:

```js
if (x === 3) {                          // Example 1
  console.log("x is 3");
}

if (x === 3) {                          // Example 2
  console.log("x is 3");
} else {
  console.log("x is NOT 3");
}

if (x === 3) console.log("x is 3");     // Example 3

if (x === 3)                            // Example 4
  console.log("x is 3");

if (x === 3)                            // Example 5
  console.log("x is 3");
else
  console.log("x is NOT 3");

if (x === 3) {                          // Example 6
  console.log('x is 3');
} else {
  if (x === 4) {
    console.log('x is 4');
  } else {
    console.log('x is NOT 3 or 4');
  }
}

if (x === 3) {                          // Example 7
  console.log("x is 3");
} else if (x === 4) {
  console.log("x is 4");
} else {
  console.log('x is NOT 3 or 4');
}
```

Example 1 demonstrates the simplest `if` statement: it has a single condition `(x === 3)` and a single **clause**—a block, statement, or expression in this context—that executes when the condition is `true`. When the condition is `false`, execution resumes with the first statement or expression after the `if` statement without running the code in the clause.

Example 2 demonstrates that you can handle both `true` and `false` conditions in the same `if` statement by using an `else` clause. When the condition is `true`, the code in the `if` clause (the first block) runs; when it's `false`, the code in the `else` clause runs. It's important to understand that the `else` clause is not a separate statement: it's part of the `if` statement.

Examples 3, 4, and 5 show that you don't need a block when the `if` or `else` clause contains a single statement or expression. You need braces for a block when you want to execute multiple statements or expressions in a clause. Otherwise, you can omit them. However, this practice can cause problems. Consider the following code:

```js
if (x === 3)
  console.log('x is 3');
  console.log('x is an odd number');
  ```

Based on the indentation, it looks like the programmer expects line 3 to execute when `x` is `3`, but not when it has some other value. However, line 3 is _not_ part of the `if` statement. It's a separate expression that follows the if statement. Though JavaScript allows this practice, you should avoid it in most cases. Blocks make your code more readable and reliable.

Examples 6 and 7 both behave the same way. Example 6 uses a nested `if` statement in the `else` clause, while example 7 shows the result of removing the block. Here, we can ignore our suggestion to use blocks in `if` statements; `else if` is one place where omitting the block is preferable. It's easier to read and maintain example 7 since you don't have the syntactic clutter of extra braces and indentation.

## Comparisons

Comparison operators return a boolean value: `true` or `false`.\
The expressions or values that an operator uses are its **operands**. In comparisons, the expressions to the left and right of the operator are the operands.

* `===`\
The **strict equality operator**, also known as the **identity operator**, returns true when the operands have the same type _and_ value, **false** otherwise.

```js
> 5 === 5
= true

> 5 === 4
= false

> 'abc' === 'abc'
= true

> 'abc' === 'abcd'
= false

> 'abc' === 'aBc'
= false

> '5' === '5'
= true

> '5' === '6'
= false

> 5 === '5'
= false

> '' === 0
= false
```

* `!==`\
The **strict inequality operator** returns `false` when the operands have the same type and value, `true` otherwise. Note that`!==` is the inverse of `===`: when `===` returns true, `!==` returns false, and vice versa.

```js
// Compare with the `===` examples.

> 5 !== 5
= false

> 5 !== 4
= true

> 4 !== 156
= true

> 'abc' !== 'def'
= true

> 'abc' !== 'aBc'
= true

> 5 !== '5'
= true
```

* `==`
The **non-strict equality operator**, also known as the **loose equality operator**, is similar to `===.` However, when the operands have different types, `==` attempts to coerce one of the operands to the other operand's type before it compares them, and it may coerce both operands in some cases. The result is `true` when the final values are the same, `false` otherwise. The coercion behavior can lead to unexpected results. For instance, when we compare the number `5` to the string `'5'` using `==,` we get `true`; with `===`, we get `false`.

```js
// Compare with the `===` examples.

> 5 == 5
= true

> 5 == 4
= false

> 5 == '5'
= true

> '' == 0
= true
```

* `!=`
The **non-strict inequality operator**, also known as the **loose inequality operator**, is similar to `!==`. However, when the operands have different types, `!=` attempts to coerce one of the operands to the other operand's type before it compares them, and it may coerce both operands in some cases. The result is `false` when the final values are the same, `true` otherwise.

```js
// Compare with the `==` and `!==` examples.

> 5 != 5
= false

> 5 != 4
= true

> 5 != '5'
= false

> '' != 0
= false
```

The rules that govern which operand `==` and `!=` coerces to the other are complex and difficult to remember. Avoid these operators when you can. For instance, you can use explicit coercion and `===` in most cases.

That advice is not universal. There are JavaScript developers, including some well-known ones, who will tell you to go ahead and use the loose operators, `==` and `!=`. Their reasoning is easy to understand: your code should not be attempting to compare different kinds of things, except in a few well-defined, isolated cases. Using the strict operators as a workaround is just masking bad code. They're not completely wrong! If you're comparing strings with arrays, your code almost certainly needs a redesign.

That said, there are some edge cases that you need to be aware of with the loose operators. For that reason, the style we use at Launch School insists that you always use the strict operators. Doing so won't prevent you from having to fix bad code, but at this stage of your journey, it's less confusing to use the strict operators, and easier to debug.
