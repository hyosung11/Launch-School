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

The **increment operator** (`++`) increments its operand by `1`; that is, it adds `1` to the existing value. There's a corresponding **decrement operator** (`--`) that decrements a variable's value by `1`. That is, it subtracts `1` from the value. JavaScript provides these operators since incrementing and decrementing by 1 are such commonplace operations.

There are two forms of `++`: one that comes before the variable name (the pre-increment operator), and one that comes after (the post-increment operator). Both increment the variable, but they differ in what gets returned by the expression. The pre-increment form returns the new value of the variable, while the post-increment form returns the previous value of the variable.

```js
> let a = 1;
> ++a;
= 2

> a
= 2

> a++
= 2

> a
= 3

// There are corresponding pre-decrement and post-decrement operators (e.g., --a and a--) that work in a similar way.
```

There's a growing sentiment among some developers that the increment and decrement operators are harmful. It's easy to mistype them in ways that can lead to strange bugs, especially if you're not mindful of the return values. They recommend using the `+=` and `-= `operators instead; it's only a few characters more to type.

Most developers still use them in the increment clause of a `for` loop:

```js
// increment operator used in increment clause of for loop
for (var index = 0; index < 5; ++index) {
  // body of loop
}

// However, they shouldn't be used anywhere else.
```

### Looping Over Arrays With while

* Use loops in programming to iterate over an array's elements and perform some action on each element. 
* **Iterate** means to process each element one at a time, in sequence from the first to the last element.
* Arrays are fundamental structures in programming.
* The ability to read and manipulate the elements of an array is a critical skill.

Let's write a program that iterates over the names in an array of names and creates a new array with the names in uppercase:

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

A bit of explanation is in order here. The variable `names` holds an array of names. We want to convert every name to
uppercase and append it to the empty `upperNames` array. Since array indexes are zero-based, we initialize an `index` variable with `0`.

Next, we use a loop that executes as long as the number in `index` is smaller than the length of the `names` array. Line 8 increments the index by `1` after each iteration, which ensures that `index < names.length becomes` false after the loop handles the last element.

Line 6 accesses the name stored at `names[index]` and uses it to call the `toUpperCase` method. That method returns the name in uppercase, which we assign to `upperCaseName`. It doesn't change the original name in the `names` array.

Line 7 uses the `push` method for arrays to append the latest uppercase name to the `upperNames` array. Over the five iterations of the `names` array, line 7 appends five uppercase names to `upperNames`, one per iteration, in the same order that the loop processes them.

Note that we initialized `names`, `upperNames`, and `index` before the loop. If we initialized them inside the loop, they would have block scope. Every loop iteration would create, initialize, and discard each variable. That wouldn't work well even if the code could run, which it would not.

### do/while Loop

A do/while loop differs visibly from a `while` loop, but its behavior is almost identical. The crucial difference is that `do/while` always executes the code in the block at least once. A `while` loop can't make that guarantee since the initial condition may be falsy; if it is, the loop body doesn't run. In a `do/while` loop, the conditional check occurs at the end of the loop instead of the beginning which allows it to run the code at least once, even if the condition is falsy when the loop begins.

Let's write some code that illustrates how `do/while` works. We'll ask the user whether he wants to repeat an action, and then repeat the question if he enters y.

```js
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');
```

When you run this code in a browser, it displays a `Do you want to do that again?` prompt. If you enter the lowercase letter `y`, it displays the prompt again. It repeats this process until you enter something other than `y`, at which point the loop ends and control moves to the first statement or expression after the loop.

Notice how `while` and the condition are now at the end of the loop. Since the test occurs at the end of the loop, the loop always executes at least once.

## for Loops

for loops have the same purpose as `while` loops, but they use a condensed syntax that works well when iterating over arrays and other sequences. A `for` loop combines variable initialization, a loop condition, and the variable increment/decrement expression all on the same line:

```js
for (initialization; condition; increment) {
  // loop body
}
```

This structure behaves almost the same as:

```js
initialization;
while (condition) {
  // loop body
  increment;
}
```

The sole difference between the two loops is the scope of any variables declared by the initialization clause. In the `while` statement, the scope includes the code that surrounds the loop; in the `for` statement, the scope is the `for` statement and its body.

```js
// names program rewritten with a for loop
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

This program functions in the same way as the version that uses `while`. The difference is that we initialize the `index` variable, specify the loop condition, and increment the `index` variable all on the same line. When JavaScript runs this loop, it follows this sequence:

1. Declare and initialize the `index` variable to 0.

2. If `index` is not less than the array length, go to step 6.
3. Execute the loop body.

4. Increment `index`.

5. Go back to step 2.

6. Log the results.

`for` loops let you see and understand the looping logic at a single glance. The syntax also lets you move the `index` variable from the global scope into the scope of the `for` statement, and it helps make your code cleaner and more organized.

## Controlling Loops

JavaScript uses the keywords `continue` and `break` to provide more control over loops. `continue` lets you start a new iteration of the loop, while `break` lets you terminate a loop early.

### `continue`

Let's continue working with the names program. Suppose we want all the uppercase names in our `upperNames` array except `'Naveed'`. The continue statement can help us do that.

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
```

The `upperNames` array no longer contains `'NAVEED'`. When a loop encounters the `continue` keyword, it skips running the rest of the block and jumps ahead to the next iteration. In this example, we tell the loop to ignore `'Naveed'` and skip to the next iteration without adding `'NAVEED'` to `upperNames`.

You can rewrite a loop that uses `continue` with a negated `if` conditional.

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] !== 'Naveed') {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
```

This code behaves like the version that uses `continue`.

If we can write looping logic without `continue`, why bother using it at all? You don't have to use continue, of course, but it often leads to a more elegant solution to a problem. Without `continue`, your loops get cluttered with nested conditional logic:

```js
for (let i = 0; i < someNumber; i += 1) {
  if (someCondition) {
    // execute 10 lines
  }
}

for (let i = 0; i < someNumber; i += 1) {
  if (someCondition) {
    // some code here
    if (anotherCondition) {
      // some more code here
    }
  }
}
```

We can use `continue` to rewrite those two loops without nesting:

```js
for (let i = 0; i < someNumber; i += 1) {
  if (!someCondition) continue;
  // execute 10 lines
}

for (let i = 0; i < someNumber; i += 1) {
  if (!someCondition) continue;
  // some code here

  if (!anotherCondition) continue;
  // some more code here
}
```

Earlier, we said that you should always use blocks with `if` statements. A common exception to this rule occurs when using a `continue`, `break`, or `return` statement as the `if` clause. When changing the flow with these three statements, the single-line version of the `if` statement can make your code easier to read.

### `break`

You sometimes want to skip all remaining iterations of a loop. For instance, when you search an array for a specific value, you probably want to stop searching once you find it. There's no reason to keep searching if you don't need any subsequent matches.

```js
let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
  }
}

console.log(indexOfFive);
```

This program iterates over the elements of an array to find the element whose value is `5`. When it finds that value, it stores its index in the `indexOfFive` variable. It then logs the index of the found element to the console. Notice that we initialize `indexOfFive` to `-1`: we use this value when the array doesn't have the desired value.

If you study this code, you should notice that the loop continues executing once it finds the element whose value is `5`. It iterates over every element in the array, even if `5` is the first element. That seems pointless and wasteful of precious CPU resources. That's where `break` steps in and saves the day:

```js
// The break statement on line 7 tells JavaScript to terminate the loop once we find the desired element.
let array = [3, 1, 5, 9, 2, 6, 4, 7]
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);
```

## Array Iteration

JavaScript arrays have several methods that iterate over the elements without using the looping syntax we've seen thus far.

As you may recall, arrays are ordered lists. Suppose you have an array of names that you want to display on the console, one per line. How would you do that without using one of the loop structures we've seen so far?

One way is to use the built-in `forEach` method for arrays:

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});
```

Isn't that nice! It's probably the most peculiar code you've seen so far. We've got some explaining to do.

The most glaring item in need of explanation is that we seem to be passing a function definition as an argument to `forEach`. Think about that. How in the world could that be valid, or even useful?

If you study this code long enough, you may recognize that the function definition is, in fact, a function expression: we talked about them back in the _Functions_ chapter. This function expression doesn't have a name: it's an **anonymous function**.

That doesn't help, however. We still don't understand how the code works.

One feature of JavaScript that sets it apart from most other languages is that it has first-class functions. That means that functions are values: you can assign them to variables, pass them around as arguments to other functions, and even use them as return values in other functions. In our example, we're passing the anonymous function as an argument to `forEach`. That explains why the code is valid.

When you pass a function as an argument to another function, that other function can call the function represented by the argument. That's what `forEach` does, and it's why this code is useful. As its name suggests, `forEach` loops through each element in an array, in sequence, starting with the first element. For each name, `forEach` invokes the anonymous function with the name as an argument. The anonymous function can do whatever it needs to do with the argument. In this case, it merely logs the name.

We can make the code more concise by using an arrow function:

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(name => console.log(name));
```

Most JavaScript programmers prefer to use **array looping abstractions** like `forEach` to loop over arrays.

## Recursion

**Recursive** functions are functions that call themselves. Such code doesn't look much like a loop, but there's a close relationship between loops and recursion. The relationship is close enough that we say that recursion is another way to create loops in JavaScript.

### A Simple Example

Suppose you want to know the result of doubling a number, then the result of doubling that number, and so on until the number reaches some predefined maximum, such as 50. You might begin with the following function:

```js
function doubler(number) {
  console.log(number * 2);
}

// You can use it like this, stopping when you get a result greater than 50.
> doubler(1)     // => 2
> doubler(2)     // => 4
> doubler(4)     // => 8
> doubler(8)     // => 16
> doubler(16)    // => 32
> doubler(32)    // => 64

// That's a bit clumsy, and the code doesn't lend itself to reuse.

// Let's refactor doubler to use recursion instead:
function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80
```

Our `doubler` function code calls itself on line 5. Each invocation of `doubler` logs a new number, then calls itself with a new value twice that of the input number. To make sure the "loop" stops, we skip the recursive call when the number is greater than 50.

### A Complex Example

Let's create a function that uses recursion to calculate the nth number in the _Fibonacci sequence_. Each number in this sequence is the sum of the previous two numbers in the sequence:

* `fibonacci(0) = 0`
* `fibonacci(1) = 1`
* `fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1`
* `fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2`
* `fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3`
* `fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5`
* `fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8`
* `fibonacci(7) = fibonacci(6) + fibonacci(5) = 8 + 5 = 13`

```js
// key expression to solve fibonacci sequence
fibonacci(0) = 0 // by definition
fibonacci(1) = 1 // by definition
fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2) // for all n >= 2

// fibonacci sequence
function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(6));  // => 8
console.log(fibonacci(20)); // => 6765
```

A diagram can help, as can walking through an example or two. For instance, We can use a tree-like structure to understand the mechanics of the Fibonacci program. The following diagram uses `f` to abbreviate `fibonacci` to save space:

![fibonacci recursion](fibonacci(6).png)

Each time the `fibonacci` function runs, it recursively invokes itself twice, once with a number `1` less than the current number, and once with a number `2` less than the current number. For instance, let's calculate `f(6)` by hand. Find the `f(6)` box in the diagram and follow along:

1. f(6) returns the value of f(5) + f(4).
2. f(5) returns the value of f(4) + f(3).
3. f(4) returns the value of f(3) + f(2).
4. f(3) returns the value of f(2) + f(1).
5. f(2) returns the value of f(1) + f(0).
6. f(1) returns 1. The baseline condition number < 2 tells us this value.
7. f(0) returns 0. The baseline condition number < 2 tells us this value.
8. Plug the values from steps 6 and 7 into step 5 to determine that f(2) is 1.
9. Plug the values from steps 5 and 6 into step 4 to determine that f(3) is 2.
10. Plug the values from steps 4 and 5 into step 3 to determine that f(4) is 3.
11. Plug the values from steps 3 and 4 into step 2 to determine that f(5) is 5.
12. Plug the values from steps 2 and 3 into step 1 to determine that f(6) is 8.

The recursive calls work their way down the tree: `f(6)` calls `f(5)` and `f(4)`; `f(5)` calls `f(4)` and `f(3)`. In the end, we reach the lowest level in the tree which always has a 1 or 0 return value in this algorithm. Once it reaches the bottom, the code starts adding return values and percolating back up the tree. When it works its way back to the top, it returns the final result.

The fact that this code calls itself twice makes it more complicated than most recursive code. For instance, we must calculate `f(4)` twice: once on the left, once on the right. However, the principle behind recursion remains the same.

Every recursive function has a **baseline condition** that marks the end of the recursion (`number < 2` in our code) and some code that recursively calls the function with a new argument. In most cases, the baseline condition returns a concrete value that gets reused as the code "unwinds" the recursive calls. Each unwind step uses the previous return value(s) to calculate an intermediate result that gets returned in the next step. In our example, the last step evaluates `f(6)` as `f(5)` + `f(4)` which yields 8.

End