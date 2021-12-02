/* Palindrome

Instructions
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.

PROBLEM
- inputs:
> num starting number
> s the number of numerical palindromes we want

-output
> an array of numbers (numerical palindromes)

-rules:
> what is a palindrome?
- a number that reads the same backward as forward
- single digit numbers are not palindromes

> if num is a palindrome, it should be included in the return array
> the returned palindromes are greater than or equal to num
> if num or s is not a number, or if it's less than 0, then we return "Not valid"
> if s is 0, we return an empty array

EXAMPLES

DATA STRUCTURE
- inputs:
> num starting number - 0 or greater
> s the number of numerical palindromes we want - 0 or greater

-output:
> an array of numbers (numerical palindromes)

-intermediary steps:
> array of numbers
> converting numbers into strings for palindrome checks

ALGORITHM
- Declare a function with two parameters that takes two number arguments
- Initialize a result variable and assign it the value of an empty array

- helper function to check the value of the first argument
  - if first argument is not a number
    - return "Not valid"
  - if first argument is a number less than 0
    - return "Not valid"

- Return result array of numbers

SHANE
- if input args are not numbers then return "not valid"
- if input args are less than 0 then return "not valid"
- initialize empty array for returning list of palindromes
- init palindrome found count to 0
- init current_num variable to "num"
- loop while palindrome count < "s"
  - if current_num is a palindrome then add to palindrome array and increment found count - use helper function to test for palindromes
  - increment current_num

- return palindrome array

- palindrome helper function
  - input is a Number
  - convert number to a string
  - if string is equal to itself reversed then return true - otherwise return false

ELAINE
Step 1 - Check for Data Type Validity -> Helper Function
- Determine if num is a data type of a number
  - if num is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'
- Determine if s is a data type of a number
  - if s is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'

Step 2 - Check for Rules -> Edge Case
- Determine if s is the number 0, and if so, return an Empty Array

Step 3 - Checking for a Palindrome (helper function - predicate to determine if a number is a palindrome)
- Starting with num, convert num into a string, and then into an array of characters (3 => '3' => ['3'])
  - If the length of the numCharArray is 1,
    - return False - this number is NOT a palindrome
  - Else
    - Create a new empty array
    - Copy the numCharArray into the new empty array, and reverse it (revArray)
    - Note that since we are dealing with OBJECTS - JavaScript only considers objects the same
    - if they point to the same place in memory, AND have the same properties (i.e. they MUST
      be the same object)
    - Rejoin the numCharArray and the revArray and convert both to strings
    - Check to see if the revString is equal to the originalString
    - If they are equal, return true - this is a palindrome number
    - If the strings are not equal, return false - this is not a palindrome number

Step 4 (Larger Opening Algorithm)
  - Initiate a palindrome counter variable, that will count palindrome numbers
  - Initialize an Empty Array to return the palindrome numbers
  - Starting with num, determine if num is a Palindrome (see Step 3)
    a - If num is a palindrome, increment the palindrome counter variable
    b - Add num to the Array of Palindrome Numbers
    - While the palindrome counter variable is less than s (required number of palindrome numbers)
      Repeat steps a and b -> break
  - Return the Palindrome Number Array

Check Test Cases

Juliette's Algorithm
1. Define a helper method `isPalindrome`
 Convert Number to String
 Reverse the string and check if it's the equivalent in value
 Check if String is greater than length 1

2. Loop and increment num (first argument) by one each Iteration
 Invoke helper method `isPalindrome`
If true, push the number to a final array
Break out of the loop when array.length === second argument

3. Define a helper method valid?
Are both arguments Number ?
Are both of them >= 0 ?

Group Algorithm
Step 1 - Check for Data Type Validity -> Helper Function
- Determine if num is a data type of a number
  - if num is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'
- Determine if s is a data type of a number
  - if s is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'

- palindrome helper function
  - input is a Number
  - convert number to a string
  - if string is equal to itself reversed then return true - otherwise return false
  - If the length of the numCharArray is 1,
    - return False - this number is NOT a palindrome
*/

function isPalindrome(num) {
  let str = String(num);
  if (str.length < 2) {
    return false;
  }

  return str === str.split('').reverse().join('');
}

// console.log(isPalindrome(3) === false);
// console.log(isPalindrome(33) === true);
// console.log(isPalindrome(101) === true);
// console.log(isPalindrome(1014) === false);

function isValid(num) {
  return typeof num === 'number' && num >= 0;
}

// console.log(isValid(3) === true)
// console.log(isValid(0) === true)
// console.log(isValid(-3) === false)
// console.log(isValid("ABCD") === false)

function palindrome(num, s) {
  let palindromeArray = [];

  if (!isValid(num) || !isValid(s)) {
    return 'Not valid';
  }

  while (palindromeArray.length < s) {
    if (isPalindrome(num)) {
      palindromeArray.push(num);
    }

    num += 1;
  }

  return palindromeArray;
}

console.log(palindrome(6, 4)); // [11,22,33,44]
console.log(palindrome(75, 1)); // [77]
console.log(palindrome(101, 2)); // [101,111]
console.log(palindrome(20, 0)); // []
console.log(palindrome(0, 4)); // [11,22,33,44]

console.log(palindrome('ACCDDCCA', 3)); // "Not valid"
console.log(palindrome(773, '1551')); // "Not valid"
console.log(palindrome(-4505, 15)); // "Not valid"
console.log(palindrome(4505, -15)); // "Not valid"

// Practice
function isPalindrome(num) {
  let str = String(num);
  if (str.length < 2) {
    return false;
  }

  return str === str.split('').reverse().join('');
}

function isValid(num) {
  return typeof num === 'number' && num > 0;
}

function palindrome(num, s) {
  let palindromeArray = [];

  if (!isValid(num) || !isValid(s)) {
    return 'Not valid';
  }

  while (palindromeArray.length < s) {
    if (isPalindrome(num)) {
      palindromeArray.push(num);
    }

    num += 1;
  }

  return palindromeArray;
}

 /* Palindrome

Instructions
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 

PEDAC
- input: two numbers: starting number, and the number of elements to return in the array
-output: an array of numbers

Rules
- if either input is not a number return 'not valid'
- if either input is less than 0 return 'not valid'
- single digit numbers are not palindromes
- if s is zero return an empty array
- if num is a palindrome include it in the count

Examples below

Data Structure
- input: two numbers: starting number, count number
- intermediate: array
- output: array

Algorithm
- if either input is not a number return 'not valid'
- if either input is less than 0 return 'not valid'
- create an empty array that will hold the result

Problem 1: iterate
- keep track of the number through num 75
- iterate until the array length is count
  - check if number is a palindrome
    - if it is, we push it to the array
  - increment num

Problem 2: is the number a palindrome
- turn number to an array and check if it is equal to it's reverse value

- return the result array

*/

function palindrome(num, count) {
  if (typeof num !== 'number' || typeof count !== 'number') return 'not valid';
  if (num < 0 || count < 0) return 'not valid';
  if (num < 10) num = 11;

  let result = [];

  while (result.length < count) {
    if (isPalindrome(num)) {
      result.push(num);
    }
    num += 1;
  }

  return result;
}

function isPalindrome(num) {
  let numString = String(num);
  // if (numString.length < 2) return false;
  return numString === numString.split('').reverse().join('');
}

console.log(palindrome('ACCDDCCA', 3)); // "Not valid"
console.log(palindrome(3, 'A')); // "Not valid"
console.log(palindrome(773, '1551')); // "Not valid"
console.log(palindrome(-4505, 15)); // "Not valid"
console.log(palindrome(4505, -15)); // "Not valid"

console.log(palindrome(20, 0)); // []
console.log(palindrome(75, 1)); // [77]
console.log(palindrome(6, 4)); // [11,22,33,44] 4 numbers which are the next palindrome numbers
console.log(palindrome(101, 2)); // [101,111]
console.log(palindrome(0, 4)); // [11,22,33,44]
