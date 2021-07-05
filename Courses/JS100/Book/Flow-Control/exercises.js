// Flow Control Exercises

// 1. What values do the following expressions evaluate to?

// false || (true && false); // false
// true || 1 + 2;  // true
// 1 + 2 || true; // 3
// true && 1 + 2; // 3
// false && 1 + 2; // false
// 1 + 2 && true; // true
// 32 * 4 >= 129; // false
// false !== !true; // false
// true === 4; // false
// false === (847 === "847"); // true
// false === (847 == "847"); // false
// !true || !(100 / 5) === 20 || 328 / 4 === 82 || false; // true

// Remember that expressions involving the logical operators of || and && use short-circuit evaluation; they also return truthiness values.

// The last expression needs some explanation:

// !true || !(100 / 5) === 20 || 328 / 4 === 82 || false; // true

// 1. !true is false
// 2. !(100 / 5) === 20) is also false because !(100 / 5) is a boolean value, and === always returns false when the operands have different types.
// 3. ((328 / 4) === 82) is true
//4. Put together, items 1-3 combine with || as (false || false || true), which is true.
// 5. Using the value from item 4 results in true || false, which is true.

// 2. Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }

// evenOrOdd(3) // odd
// evenOrOdd(4) // even

// The solution uses the remainder operator (%) to determine whether the number is even. If the result of number % 2 is 0, the number is even.

// 3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer.');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

// evenOrOdd('tasty')
// evenOrOdd(1.55)
// evenOrOdd(45)

// 4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

// barCodeScanner("113");
// Product2
// Product3
// Product not found!

// Since the case clauses of the switch statement lack break statements, control falls through from the matching case '113' clause and executes the code in the case '142' and default clauses as well. JavaScript doesn't care that the criteria for extra case clauses don't match our serial value. This fall-through behavior is often undesirable. To avoid it, you must add break statements to each case clause:

// refactor with break statements
function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product 1");
      break;
    case "113":
      console.log("Product 2");
      break;
    case "142":
      console.log("Product 3");
      break;
    default:
      console.log("Product not found!");
  }
}

// barCodeScanner('142')

// 5. Refactor this statement to use an if statement instead.

// ternary operator version
// return foo() ? 'bar' : qux();

// if statement version
// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// Ternary operators are most useful when the values are simple expressions; anything more complicated than calling a function or accessing a variable or literal value can lead to unreadable code. Our original code is an excellent example of how to use the ternary operator; the refactoring merely demonstrates that you understand how it works.

// 6. What does this code output to the console?

// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }

// isArrayEmpty([]); // => Not Empty

// The output is Not Empty since, while the array is empty -- it has no elements and the length property is 0 -- it isn't falsy. Thus, JavaScript executes the first branch of the if statement.

// 7. Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

// if statement version
function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

// console.log(capsLong('I ate the cookie')); // => I ATE THE COOKIE
// console.log(capsLong('SungOh')); // => SungOh
// console.log(capsLong('onetwothree')); // => ONETWOTHREE

// ternary operator version 
function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

// console.log(capsLong("Sue Smith"));     // => Sue Smith
// console.log(capsLong("Sue Robertson")); // => SUE ROBERTSON
// console.log(capsLong("Joe Thomas"));    // => Joe Thomas
// console.log(capsLong("Joe Stevens"));   // => JOE STEVENS

// 8. Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100 `);
  }
}

numberRange(25); // => 25 is between 0 and 50
numberRange(75); // => 75 is between 51 and 100
numberRange(125); // => 125 is greater than 100
numberRange(-25); // -25 is less than 0
numberRange(3231); // => 3231 is greater than 100