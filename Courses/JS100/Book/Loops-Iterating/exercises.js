// Loops & Iterating Exercises

// 3. The following code causes an infinite loop (a loop that never stops iterating). Why?

// let counter = 0;

// while ((counter = 1)) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

// The problem occurs on line 3 where we assign 1 to counter inside the conditional part of the while loop. JavaScript accepts this code since the assignment always returns a truthy value (1 in this case), the loop condition never becomes false. Furthermore, the test on line 7 never becomes true since the assignment on line 3 ensures that counter is always equal to 2 when we execute line 7.

// 4. Does the following code produce an error? Why or why not? What output does this code send to the console?

// for (let i = 0; i < 5; ) {
//   console.log((i += 1));
// }

// The code doesn't produce an error since all 3 components of the for loop are optional. In this code, we omit the "next value" component; however, this isn't a problem here since we increment the loop variable on line 2.

// 1
// 2
// 3
// 4
// 5

// Although i is 0 on the first iteration, the loop logs 1 during that iteration since i += 1 increments i before console.log gets to log anything. i += 1 also returns the new value of i (1), and that's what gets passed to console.log. Similar actions occur on each iteration: the output is always 1 greater than the initial value of i, and i += 1 takes care of incrementing i to the next higher number, then passes that value to console.log.

// Note that we use let in the initialization clause of the loop to create and initialize an index variable. We can also write:

let i;
for (i = 0; i < 5; ) {
  console.log((i += 1));
}

// 1
// 2
// 3
// 4
// 5

// While these examples may seem identical at first glance - they both log the numbers 1 through 5 to the console - there is a subtle difference. In the first example, JavaScript limits the scope of the resulting variable to the for loop. Code outside of the loop can't access the value after the loop ends. In the latter example, using let before the loop creates a variable whose scope extends beyond the loop. In particular, code that appears after the loop can examine and use the value of the variable.

// To avoid problems with name clashes, you should limit the scope of your variables to the smallest possible scope. As a result, some developers prefer to declare their index variable in the for initialization clause. However, the practice isn't universal; you'll understand why that is when you learn about the var statement.