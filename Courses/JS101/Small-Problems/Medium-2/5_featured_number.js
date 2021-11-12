/* JS101 - Small Problems > Medium 2 > 5. Next Featured Number Higher than a Given Value

Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201. */

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 ===0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}

// Examples:
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/* Discussion

The algorithm for this problem is less complicated than it looks. The solution just has to increment a number and check whether it meets the criteria of a featured number. The challenge is in doing this efficiently; otherwise, there will be many numbers to go through, which will take a significant amount of time.

On this note, the solution uses a function and a mathematical approach that work together to improve the processing efficiency. The `toOddMultipleOf7` function returns the next number that is both a multiple of 7 and an odd number. Once you have this value, you just need to increment it in steps of 14 to cycle through all of the odd multiples of 7. Neat trick, and it makes the program significantly faster.

The `featured` function checks each multiple to see whether all the digits are unique. Since it increments the starting number by 14 during each iteration, there is no need to determine whether the number is odd or a multiple of 7 -- we already know it is.

The `allUnique` function uses a seen object to determine whether a digit already exists in the number. If the function finds that a digit appears more than once while iterating over the digits, then the number is not a featured number. */