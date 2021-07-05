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

* `<`
The **less than operator** returns `true` when the value of the left operand has a value that is less than the value of the right operand, `false` otherwise.

```js
> 4 < 5
= true

> 5 < 4
= false

> 5 < 5
= false

> "4" < "5"
= true

> "42" < "402"
= false

> "42" < "420"
= true

> "42" < 420
= true
```

When comparing strings, the comparison is character-by-character. JavaScript moves from left-to-right in the strings looking for the first character that is different from its counterpart in the other string. Once it finds a character that differs, it compares that character with its counterpart, and makes a decision based on that. If both strings are equal up to the length of the shorter string as in the next to last example, then the shorter string is considered less than the longer string.

The final example shows that if you use `<` with two different types, some sort of coercion will take place. In this case, "42" gets coerced to a number, so a numeric comparison takes place. Don't try to remember this.

* `>`
The greater than operator returns `true` when the value of the left operand has a value that is greater than the value of the right operand, `false` otherwise.

```js
// Compare with the `<` examples.

> 4 > 5
= false

> 5 > 4
= true

> 5 > 5
= false

> "4" > "5"
= false

> "42" > "402"
= true

> "42" > "420"
= false

> "42" > 420
= false
```

As with `<`, the `>` operator can be used to compare strings, and can even be used with mixed types (but with sometimes bizarre results).

* `<=`
The **less than or equal to operator** returns `true` when the value of the left operand has a value that is less than _or equal to_ the value of the right operand, `false` otherwise. Note that `=<` is not a valid comparison operator.

```js
// Compare with the `<=` examples.

> 4 <= 5
= true

> 5 <= 4
= false

> 5 <= 5
= true
```

Of course, the `<=` operator works equally well with strings.

* `>=`
The **greater than or equal to operator** returns `true` when the value of the left operand has a value that is greater than _or equal to_ the value of the right operand, `false` otherwise. Note that `=>` is not a valid comparison operator.

```js
// Compare with the `>` and `>=` examples.

> 4 >= 5
= false

> 5 >= 4
= true

> 5 >= 5
= true
```

Of course, the `>=` operator works equally well with strings.

## Logical Operators

 The `!`, `&&`, and `||` **logical operators** provide the ability to combine conditions:

 * `!`
The **not operator** returns `true` when its operand is `false` and returns `false` when the operand is `true`. That is, it negates its operand. Note that, unlike most operators, `!` takes a single operand; the operand appears to the right of the operator.

```js
> !true
= false

> !false
= true

> !(4 === 4)
= false

> !(4 !== 4)
= true
```

In these examples, JavaScript first evaluates the expression on the right, then applies `!` to the result, thus negating it. For instance, we know that `4 === 4` is `true`, so `!(4 === 4)` is `false`.

* `&&`
The **and operator** returns `true` when both operands are `true` and `false` when either operand is `false`.

```js
> true && true
= true

> true && false
= false

> false && true
= false

> false && false
= false

> (4 === 4) && (5 === 5)
= true

> (4 === 4) && (5 === 6)
= false

> (4 === 5) && (5 === 5)
= false

> (4 === 5) && (5 === 6)
= false
```

* `||`
The **or operator** returns `true` when either operand is `true` and `false` when both operands are `false`.

```js
> true || true
= true

> true || false
= true

> false || true
= true

> false || false
= false

> (4 === 4) || (5 === 5)
= true

> (4 === 4) || (5 === 6)
= true

> (4 === 5) || (5 === 5)
= true

> (4 === 5) || (5 === 6)
= false
```

`&&` and `||` don't always return `true` or `false`, but they do when they operate on boolean values. A little later in this chapter we'll see what happens when we use `&&` and `||` with non-boolean values.

## Short Ciruits

The `&&` and `||` operators both use a mechanism called **short circuit evaluation** to evaluate their operands. Consider these two expressions:

```js
> isRed(item) && isPortable(item)
> isGreen(item) || hasWheels(item)
```

The first expression returns `true` when `item` is both red and portable. If either condition is `false`, then the overall result must be false. Thus, if the program determines that `item` is not red, it doesn't have to check whether it is portable. JavaScript short-circuits the entire expression by terminating evaluation as soon as it determines that `item` isn't red. It doesn't need to call `isPortable()` since it already knows that the entire expression must be `false`.

Similarly, the second expression returns `true` when `item` is either green or has wheels. When either condition is `true`, the overall result **must** be `true`. Thus, if the program determines that `item` is green, it doesn't have to check whether it has wheels. Again, JavaScript short-circuits the entire expression once it determines that `item` is green. The entire expression must be `true`.

## Truthiness

Notice that every `if` statement has an expression that evaluates as true or false. However, the expression doesn't have to be one of the boolean values, `true` and `false`. JavaScript can coerce any value to a boolean value, and that's what it does in conditional contexts like the `if` statement.

```js
// Example 1

a = 5
if (a) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

// Example 2
b = 0
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
```

The first example logs "how can this be true?" while the second logs "it is not true." This works since JavaScript coerces the value `5` to `true`, and the value `0` to `false`. To repeat, JavaScript can coerce any value to a boolean. Thus, you can use any expression in a conditional expression. We often say that the expression **evaluates as** or **evaluates to** true or false.

We can even write code like this:

```js
let x;

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
```

The above code doesn't test whether `x` is equal to `5`. Instead, it assigns the variable `x` to `5`, then evaluates the assignment's return value (`5`) as a boolean. Here, `5` evaluates as true when it appears in a boolean expression.

When coercing a value to a boolean, JavaScript treats the following values as false:

* `false`
* The number `0`. This includes all 3 variations of zero in JavaScript:
  * `0`: The ordinary zero value.
  * `-0`: A negative zero. That's mathematical nonsense, but a real thing in JavaScript.
  * `0n`: The `BigInt` version of zero.

* An empty string ('')
* undefined
* null
* NaN

Everything else evaluates as true.