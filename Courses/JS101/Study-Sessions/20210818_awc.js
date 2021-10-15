/* Algorithm Clinic

Introductions
- Missy, Northern VA, Backend of Ruby, at the library right now
- Katarina, in Spain, 181 Databases
- H
- Sarah, Provo, UT, preparing for assessment Ruby 109
- Chris, Portland, OR, Ruby 109
- Mark, NY, 109 assessment
- Alex, Northern NJ, JS101
- Spencer, Ruby 101 Lesson 6, Kingston Ontario Canada

# Use the PEDAC process to get a start on solving the problem below...
# ... but STOP when you finish writing your algorithm.
# Then let your partner know you're done.
# Once each of you finish, switch "computers" by moving your avatar across the table
# Copy and paste your partner’s algorithm to your own repl or code editor
# Code up a solution to the problem that your partner was given
# If you have any trouble interpreting their algorithm, ask them to adjust it
# Good luck!!

# Problem Level: EASY

Create a function that takes an array of numbers and returns the second largest number.

Test cases:
secondLargest([10, 40, 30, 20, 50]) == 40
secondLargest([25, 143, 89, 13, 105]) == 105
secondLargest([54, 23, 11, 17, 10]) == 23

(problem source: Edabit)

Algorithm
1. Declare a function with one parameter that takes an array of numbers
2. Sort the array of numbers by descending value
3. Return the number at index 1 as the second largest number
*/

// fix this - it's not correct
function secondLargest(array) {
  return array.sort((num1, num2) =>  num2 - num1)[1];
}

// console.log(secondLargest([10, 40, 30, 20, 50]) === 40);
// console.log(secondLargest([25, 143, 89, 13, 105]) === 105);
// console.log(secondLargest([54, 23, 11, 17, 10]) === 23);

// console.log(secondLargest([10, 40, 30, 20, 50]));
// console.log(secondLargest([25, 143, 89, 13, 105]));
// console.log(secondLargest([54, 23, 11, 17, 10]));

/* Sarah's Algorithm

# Problem Level: EASY

Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

Test cases:
factorial(3) == 6
factorial(5) == 120
factorial(13) == 6227020800


(problem source: Edabit)

=begin
#------------------------------------------------------------------------------
PROBLEM:
Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.


input: integer
output: factorial of input (integer)
rules:
    Explicit requirements:
      factorial is the multiple of all positive lower integers
    Implicit requirements:
      factorial of 1 is zero
      input will be an integer
Unclear parts of problem?
#---------------------------------------------------------------------------
EXAMPLES
Test cases:
factorial(0) == 1
factorial(1) == 1
factorial(3) == 6
factorial(5) == 120
factorial(13) == 6227020800

#---------------------------------------------------------------------------

DATA STRUCTURE
input and output are integers
intermediary variable needed to store running total

#---------------------------------------------------------------------------

ALGORITHM

define factorial method   accepts one argument (integer)
  initialize variable for total as 1

  if input argument is less then 0
    return error statement

  if input argument equals 0
    return (total)

  else
    initialize (variable for counter) as 1
    loop
      break loop if (variable for counter) equals (input argument)
      multiply (variable for counter) by (total) and assign to (total)
      add one to (variable for counter)
    end
    return (total)
  end
end

=end
*/

// function factorial(number) {
//   let total = 1;

//   if (number < 0) {
//     return - 1;
//   } else if (number === 0) {
//     return total;
//   } else {
//     let counter = 1;

//     for (let index = 1; index <= number; index++) {
//       total = counter * total;
//       if (counter === number) {
//         break;
//       }

//       counter += 1;
//     }
//   }

//   return total;
// }

// //  Test cases:
// console.log(factorial(0) == 1);
// console.log(factorial(1) == 1);
// console.log(factorial(3) == 6);
// console.log(factorial(5) == 120);
// console.log(factorial(13) == 6227020800);

function factorial(number) {
  let total = 1;

  if (number < 0) {
    return -
    1;
  } else if (number === 0) {
    return total;
  } else {
    for (let index = 1; index <= number; index++) {
      total = index * total;
    }
  }

  return total;
}

//  Test cases:
// console.log(factorial(0) == 1);
// console.log(factorial(1) == 1);
// console.log(factorial(3) == 6);
// console.log(factorial(5) == 120);
// console.log(factorial(13) == 6227020800);

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(13));