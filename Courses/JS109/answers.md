# JS109 Written Assessment Answers

Examine the code example below. The last line outputs the string `'Hi'` rather than the string `'Hello'`. Explain what is happening here and identify the underlying principle that this demonstrates.

```js
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);
```

On line 1, the global variable `greeting` is declared and initialized to the string `'Hello'`. Lines 3-6 define a `while` loop that will execute forever unless something happens to end the loop. On line 4, when the loop starts, it reassigns the global variable `greeting` to the string `'Hi'`. On the next line, the `break` statement causes the loop to end, with code execution continuing after line 6. Finally, on line 8, `console.log` is called with the value of the variable `greeting` passed to it as an argument. Since `greeting` is now assigned to `'Hi'`, that is what gets output. This example demonstrates variable scoping rules in JavaScript, specifically that variables declared in the outer scope are accessible from a nested inner scope.
