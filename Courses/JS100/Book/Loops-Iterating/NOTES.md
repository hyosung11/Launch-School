# INTRODUCTION TO PROGRAMMING: Loops & Iterating

 * JavaScript loops have several forms, but the main looping structures use a looping keyword, a condition, and a block. 
* These loops execute the loop's body (the block) for as long as the condition remains truthy. 
* We use the term **one iteration** to describe executing the loop body once. 
* JavaScript also has two other loop mechanisms: array abstractions and recursion.

## while Loops

* A `while` loop uses the `while` keyword followed by a conditional expression in parentheses and a block. 
* The loop executes the block again and again for as long as the conditional expression remains truthy. 
* In most programs, that loop should ultimately stop repeating. 
* That means that the block must do something that tells JavaScript when the loop should stop; that is, it needs to arrange for the conditional expression to become falsy.
* Otherwise, the loop is an **infinite loop** that never stops repeating.

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
```

While that code is straightforward and readily understood, it's easy to see that this approach isn't sustainable. Suppose we need to log numbers from 1 to 1000 or 1,000,000. If you had to write all that code for such a simple task, you would soon come to regret your career choice.

```js
// rewritten with while loop
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter = counter + 1;
}
// conditional expression changed
let counter = 1;
while (counter <= 1000) {
  console.log(counter);
  counter = counter + 1;
}
```

When JavaScript encounters this `while` loop, it evaluates the conditional expression inside the parentheses, `counter <= 1000`. Since `counter`'s initial value is `1`, the expression is `true` at the beginning of the `while` statement and the engine runs the loop's block. Inside the block, we output `counter`'s value, then increment it by `1`.

After the first block iteration, JavaScript re-evaluates the conditional expression. This time, `counter` is `2`, which is still less than or equal to `1000`; thus, the block runs again. After 1000 iterations, `counter`'s value becomes 1001. Since the loop condition is no longer truthy, the program stops looping and continues with the first expression or statement after the loop.

Line 4 in this example is crucial. The loop block _must_ modify `counter` in some way that ultimately makes the loop condition `false`. If it doesn't, the loop becomes an infinite loop, which, in most cases, you don't want. If your program never stops running, you probably have an infinite loop somewhere in the program.

```js
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter += 1;
}
```

In this code, we changed the line `counter = counter + 1` to `counter += 1`. This syntax appears often in other programming languages. It's a succinct way to say the same thing as `counter = counter + 1`, but with less typing. You can use this syntax with other arithmetic operators as well:

```js
> let a = 3
> a *= 4            // 3 * 4
= 12

> a /= 6            // 12 / 6
= 2

> a -= 2            // 2 - 2
= 0
```

JavaScript has an even more succinct syntax to increment a number by 1.

```js
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}
```




## for Loops

## Controlling Loops

## Array Iteration

## Recursion

## Summary

## Exercises

