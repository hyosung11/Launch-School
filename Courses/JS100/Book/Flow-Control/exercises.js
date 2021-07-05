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

evenOrOdd('tasty')
evenOrOdd(1.55)
evenOrOdd(45)