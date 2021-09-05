/*  JS100/101 Study Session PEDAC - More Advanced Problems | Sun. Sept. 5 | 11:00 AM Eastern / 08:00 AM Pacific / Juliette Sinibardy

Introductions
- name, where you are, PEDAC process
- Juliette, France,
- Shane, Minneapolis, MN, use PEDAC a little bit
- H
- Adhitiani, Indonesia living in Budapest, Hungary, need to refresh PEDAC
- Laurent, Paris, JS101 Lesson 6, lighter on PEDAC
- Elaine Vuong, Toronto, not using PEDAC as much

PEDAC Theory
- separate logical breakdown
- code

Understand the Problem
Goal: understand what you're being asked to do. Understand the rules, the boundaries, etc.

Examples
Test assumptions, consider edge cases with strings and arrays, identify implicit requirements


Data Structure
Goal: begin to think logically and solution-based about the problem. Consider what data structures we can leverage. Remember you're not married to any of your thoughts at this stage. Take notes here.

Algorithm
Goal: write out high-level steps to solve the given problem.

Keep your algorithm high-level.  Not code-specific.  Your algorithm should be applicable to any program language.
Don't skip over steps in your algorithm.
Your algorithm should walk through how to solve the problem in a way that even someone who is not a programmer would understand.
The algorithm step requires the most practice to get comfortable with writing it at a high-level that is language-agnostic, yet not skipping over any steps on the path to solving the problem. Practice this even with easier problems so that you will feel comfortable when you are challenged with more complex problems.

Algorithm can help helper functions

Coding with intent

Goal: translate the algorithm into your programming language of choice.
You may be more comfortable using pseudo-code first.  Know that pseudo-code is not a substitute for the Algorithm step.
Run your code frequently.
Revisit algorithm if there was a flaw in your logic. Refer to your algo as you go.

Test your code
*/

/* ==========================================================================
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
- if input args are less than 0 then rreturn "not valid"
- initialize empty array for returning list of palindromes
- init palidrome found count to 0
- init current_num variable to "num"
- loop while palindrome count < "s"
  - if current_num is a palidrome then add to palindrome array and increment found count - use helper function to test for palidromes
  - increment current_num

- return palidrome array

- palidrome helper function
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
Break out of the loop when array.length == second argument

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

console.log(isPalindrome(3) === false);
console.log(isPalindrome(33) === true);
console.log(isPalindrome(101) === true);
console.log(isPalindrome(1014) === false);

function isValid(num) {
  return typeof num === "number" && num >= 0;
}

console.log(isValid(3) === true)
console.log(isValid(0) === true)
console.log(isValid(-3) === false)
console.log(isValid("ABCD") === false)

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

console.log(palindrome(6,4)); // [11,22,33,44]
console.log(palindrome(75,1)); // [77]
console.log(palindrome(101,2)); // [101,111]
console.log(palindrome(20,0)); // []
console.log(palindrome(0,4)); // [11,22,33,44]

console.log(palindrome("ACCDDCCA",3)); // "Not valid"
console.log(palindrome(773,"1551")); // "Not valid"
console.log(palindrome(-4505,15)); // "Not valid"
console.log(palindrome(4505,-15)); // "Not valid"