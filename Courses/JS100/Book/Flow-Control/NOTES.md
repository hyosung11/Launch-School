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

The term **falsy** refers to values that evaluate as false, while the values that evaluate as true are **truthy**. These terms are used to distinguish between boolean `true` and `false` values. We can also discuss **truthiness**: whether something is a truthy or falsy value.

Truthiness is exceptionally useful in JavaScript; there are plenty of situations where you want to treat the values `0` (all 3 variants), `''`, `undefined`, `null`, and `NaN` as though they were false. It helps make conditional expressions read more naturally, but it can also catch an unwary programmer by surprise. If you have experience with another language that uses falsy values, be wary; most languages don't share the same idea of what values are falsy. That's a constant headache for programmers that work with multiple languages.

Let's return to the if `(x = 5)` example. When you see code like that, it's important to remember that `x = 5` is an assignment. It returns `5`, which, in turn, is a truthy value. You should avoid using assignments in conditionals: at first glance, `if (x = 5)` and `if (x == 5)` look identical. However, they have entirely different meanings and produce different results. That makes the code suspect: the assignment might be intentional, but it might also be a mistake, and mistakes are bugs waiting to bite the unwary. Worse yet, another programmer may come along and naively "fix" the code.

The `&&` and `||` logical operators, as you'll recall, use short-circuit evaluation. These operators work with truthy and falsy values too, and they can also return truthy values instead of boolean values. When using `&&` and `||`, the return value is always the value of the operand evaluated last:

```js
// && - evaluates truthiness or falsiness

> 3 && 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' && 3  // last evaluated operand is 3
= 3

> 0 && 'foo'  // last evaluated operand is 0
= 0

> 'foo' && 0  // last evaluated operand is 0
= 0

> 3 || 'foo'  // last evaluated operand is 3
= 3

// ==============================================

// || - evaluates truthiness or falsiness

> 'foo' || 3  // last evaluated operand is 'foo'
= 'foo'

> 0 || 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' || 0  // last evaluated operand is 'foo'
= 'foo'

> '' || 0     // last evaluated operand is 0
= 0
```

Suppose you have an expression of some kind that returns a value that is either truthy or falsy, but isn't a boolean value:

```js
let foo = null;
let bar = 'qux';
let isOk = foo || bar;
```

In this code, `isOk` gets set to a truthy value of `"qux"`. In most cases, you can use "`qux`" as though it were actually a boolean `true` value. However, using a string value as though it is a boolean isn't the clearest way to write your code. It may even look like a mistake to another programmer who is trying to track down a bug. In some strange cases, it may even be a mistake.

You can address this easily enough by using an `if` statement or a ternary expression:

```js
// ternary expression
let isOk = (foo || bar) ? true : false;

// if statement
let isOk;
if (foo || bar) {
  isOk = true;
} else {
  isOk = false;
}
```

Either of those snippets sets `isOk` to an appropriate boolean value. However, they do so in a somewhat wordy manner. Many JavaScript programmers use a more concise coercion by using what looks like a `!!` operator:

```js
let isOk = !!(foo || bar);
```

In reality, `!!` isn't a separate operator in JavaScript. Instead, it's two consecutive `!` operators. The expression `!!a` is equivalent to writing `!(!a)`. The inner `!` converts the value of `a` to `false` if it is truthy, or `true` if `a` is falsy. The outer `!` then flips `true` to `false` or `false` to `true`. In the end, we end up with a boolean value instead of a truthiness value:

```js
> !!3    // 3 is truthy, !3 is false, !false is true
= true

> !!''   // '' is falsy, !'' is true, !true is false
= false
```

## Operator Precedence

JavaScript has a set of **precedence** rules it uses to evaluate expressions that use multiple operators and sub-expressions. The following is a list of the comparison operations from the highest precedence (top) to lowest (bottom).

* `<=`, `<`, `>`, `>=` - Comparison
* `===`, `!==`, `==`, `!=` - Equality
* `&&` - Logical AND
* `||` - Logical OR

```js
// With the precedence list in hand, we can look at the following expression and determine how to evaluate it:

if (x || y && z) {
  // do something
}
```

For the moment, let's ignore the fact that both `||` and `&&` are short-circuit operators. The program first evaluates the `y && z` sub-expression since `&&` has higher precedence than `||`. It then takes the result of that evaluation and evaluates `x || result`.

We can use parentheses to override the precedence: sub-expressions in parentheses get evaluated before un-parenthesized expressions at the same depth in the main expression (don't worry about what we mean by depth right now):

```js
if ((x || y) && z) {
  // do something
}
```

In this code,` x || y` gets evaluated first, and then `result && z`. That's a different result from the un-parenthesized expression. They help the computer and other programmers understand your intentions, you should strive to use parentheses in any expression that uses two or more different operators.

JavaScript evaluates parentheses in the usual algebraic order: it evaluates the expression in the innermost set of parentheses first, then works its way out to the outermost part of the expression. When multiple parenthesized subexpressions appear at the same depth, it evaluates them from left to right. Once it evaluates the parenthesized expressions, it evaluates the final expression value.

Short circuit evaluation doesn't change the precedence rules, but, if you try to think about it, you may end up confused. Wait until later before you try to understand how and why. For now, remember that short-circuit evaluation may prevent JavaScript from evaluating the expression to the right of the operator, but the precedence rules remain the same.

## Ternary Operator

The **ternary operator** is a quick and easy way to write a short, concise, and simple if/else conditional. It uses a combination of the `?` and `:` symbols and takes 3 operands (hence, the name "ternary"):

```js
> 1 == 1 ? 'this is true' : 'this is not true'
= 'this is true'

> 1 == 0 ? "this is true" : "this is not true"
= 'this is not true'
```

JavaScript first evaluates the first operand (the comparisons). If it has a truthy result, JavaScript evaluates the second operand (`this is true`) and returns its value. Otherwise, it evaluates the third operand (`this is not true`) and returns its value.

The chief advantage that the ternary operator has over an `if/else` statement is that the entire structure is an expression. What that means is that we can treat the ternary expression as a value: we can assign it to a variable, pass it as an argument, and so on. Since `if/else` is a statement, we can't capture its result to a variable.

```js
> let message = true ? 'this is true' : 'this is not true'
= undefined

> message
= 'this is true'

> console.log(false ? 'this is true' : 'this is not true')
this is not true
= undefined
```

## Switch Statement

The last conditional flow structure we want to discuss is the `switch` statement. A `switch` statement is similar to an `if` statement, but it has a different interface. It compares a single value against multiple values for strict equality (as with the `===` operator), whereas `if` can test multiple expressions with any condition.

`switch` statements use the reserved words `switch`, `case`, `default`, and `break`.

```js
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
} // => a is 5
```

This example is functionally identical to the following `if/else` statement:

```js
let a = 5;

if (a === 5) {
  console.log('a is 5');
} else if (a === 6) {
  console.log('a is 6');
} else {
  console.log('a is neither 5, nor 6');
} // => a is 5
```

You can see how similar they are, but you can also see how they differ. The `switch` statement evaluates the expression, `a`, compares its value to the value in each `case` clause and then executes the statements and expressions associated with the first matching clause. In this example, the value of the expression is `5`; thus, the program executes the statements and expressions associated with the `case 5`: clause. The statements and expressions in the `default`: clause run when the expression doesn't match any of the `case` clauses; it acts like the final `else` in an `if` statement.

The `break` statement in each `case` is crucial. Without a break, execution "falls through" to the next `case` clause.

```js
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
  case 6:
    console.log('a is 6');
  default:
    console.log('a is neither 5, nor 6');
} // => a is 5
  //    a is 6
  //    a is neither 5, nor 6
```

This behavior is a little strange, and _almost_ always undesirable. In most cases, you want to avoid fall-throughs that lead to executing multiple `case` clauses for a single value. Code that falls through multiple cases like this is, by its nature, suspect; it looks like you forgot to use the `break` statement, which makes it look like a bug waiting to happen. Even if the code is correct, it looks wrong. Often, it is wrong.

However, that doesn't mean that fall-throughs are never appropriate. There are use cases where they work well. For instance, suppose you want to execute the same action for two or more cases:

```js
let a = 5;

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('a is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('a is not 5, 6, 7, 8, or 9');
    break;
}
```

Technically, this is fall-through, but, since each `case` executes a single clause, it's safe to use and doesn't suggest a possible error.

There are plenty of uses for `case` statements. They're potent tools in JavaScript. If you're uncomfortable with them, spend some time modifying the ones we presented above and watch how they respond to your changes. Test their boundaries and learn their capabilities. Curiosity will serve you well in your journey towards mastering JavaScript. There is much to discover!