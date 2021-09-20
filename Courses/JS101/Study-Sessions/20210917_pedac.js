/* JS100/101 Study Session - PEDAC: More Advanced Problems | Fri. Sept. 17 | 12:30 PM Eastern / 09:30 AM Pacific

Introductions
- Juliette
- Michael, Santa Cruz
- HyoSung
- Adhitiani, building Tic Tac Toe, try to use PEDAC all the time
- Jason, Aotearoa

PEDAC

PROBLEM
Implicit Requirements

EXAMPLES / TEST CASES
Edge Cases
- strings => uppercase, lowercase
- arrays: []

DATA STRUCTURE
- input
- intermediary step
- output

ALGORITHM
- More than 50% of time on this step
- High level overview like a cooking recipe
- Abstract enough, language agnostic
- Thorough and covers all the steps
  - use helper functions
  - when a function is doing more than one thing

Coding with intent
- run your code frequently
  - `console.log` the last value and run the code
- if your code has a logical flaw, go back to the algorithm and fix the issue there

====================
PROBLEM DESCRIPTION

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.

PROBLEM
- input: 2 integers (greater than or equal to 0)
  - num => first number considered in the algorithm
  - s (size) => number of elements in the returned array
- output: array of numbers or 'Not valid'

Rules
> if size is 0, returns an empty array
> if num is a palindrome, it's returned in the output array

> numerical palindrome definition
- single digit numbers are not palindromes ==> number > 10
- a palindrome is a number which reads the same backwards or forwards

> validity?
- both inputs need to be numbers
- both inputs need to be greater or equal to 0

DATA STRUCTURE
- input: 2 integers (greater than or equal to 0)
- output: array of numbers or 'Not valid'

- intermediary steps:
  - num > string > array

ALGORITHM

- check for validity => isValid()
  - typeof to check that they're both numbers
  - check that num >= 0 and s >= 0

- is palindrome function:
  - return false if num < 10
  - num_str = convert num to string
  - split, reverse and join the num_str (to get the reversed string)
  - compare the num_str and its reverse => if they're equal, it's a palindrome

- first, check for validity
  - if isValid returns false, then exit and return "Not valid"
  - else, continue the function

- palindromes return array (empty)

- loop until palindroms array's length is equal to size
  - current number is a palindrome?
    => yes, then add it to palindromes array
  - num += 1

- return the palindromes array

*/
function isValid(num, s) {
  // returns boolean
  let boolTypeOf = ((typeof num) === 'number' && (typeof s) === 'number' );
  let isMoreThan0 = ( (num >= 0) && (s >= 0));

  return (boolTypeOf && isMoreThan0);
}

console.log(isValid(6,4) === true);
console.log(isValid(6,"AAA") === false);
console.log(isValid(6,-3) === false);
console.log(isValid("AAA",2) === false);
console.log(isValid(0,0) === true);

function isPalindrome(num) {
  if (num <= 10) {
    return false;
  }

  return String(num) === String(num).split('').reverse().join('');
}

console.log(isPalindrome(11) === true)
console.log(isPalindrome(1) === false)
console.log(isPalindrome(1441) === true)
console.log(isPalindrome(13) === false)

function palindrome(num, s) {

}

console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"

/* ====

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345
You'll be given 2 numbers as arguments: (num, size). Write a function which returns an array of size number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.



P

- input: 2 integers (greater than or equal to 0)
> num => first number considered in the algorithm
> s (size) => number of elements in the returned array


- output: array of numbers or 'Not valid'

- rules:
> if size is 0, returns an empty array
> if num is a palindrom, it's returned in the output array


> numerical palindrom definition?
- single digit numbers are not palindroms => number > 10
- A palindrome is a number which reads the same backward as forward.


> validity?
- both inputs (num and s) need to be numbers
- both inputs need to be greater or equal than 0



D

- input: 2 integers (greater than or equal to 0)
- output: array of numbers or 'Not valid'

- intermediary steps: 

num > string > array 


A 


- check for validity => isValid()
  - typeof to check that they're both numbers
  - check that num >= 0 and s >= 0



- is palindrom function:
  - return false if num < 10
  - num_str = convert num to string
  - split, reverse and join the num_str (to get the reversed string)
  - compare the num_str and its reverse => if they're equal, it's a palindrom
  


- first, check for validity
  - if isValid returns false, then exit and return "Not valid"
  - else, continue the function

- palindroms return array (empty)

- loop until palindroms array's length is equal to size
  - current number is a palindrom? 
    => yes, then add it to palindroms array 
  - num += 1

- return the palindroms array


*/

function isValid(num, s) {
  // returns boolean
  let boolTypeOf = ((typeof num) === 'number' && (typeof s) === 'number' );
  let isMoreThan0 = ( (num >= 0) && (s >= 0));
  
  return (boolTypeOf && isMoreThan0);
}

function isPalindrome(num) {
  if (num <= 10) {
    return false;
  }
  
  return String(num) === String(num).split('').reverse().join('');
}


function palindrome(num, size) {
  if (!isValid(num, size)) {
    return 'Not valid';
  }

  let palinArry = [];
  
  while (true) {
    
    // core logic
    if (isPalindrome(num)) {
      palinArry.push(num);
    }
    
    num += 1;
    
    // break cond when size === palinArry
    if (palinArry.length === size) {
      break;
    }
  }
  return palinArry;
}


console.log(isValid(6,4) === true);
console.log(isValid(6,"AAA") === false);
console.log(isValid(6,-3) === false);
console.log(isValid("AAA",2) === false);
console.log(isValid(0,0) === true);
console.log("---------")


console.log(isPalindrome(11) === true)
console.log(isPalindrome(1) === false)
console.log(isPalindrome(1441) === true)
console.log(isPalindrome(13) === false)
console.log("---------")


console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"
