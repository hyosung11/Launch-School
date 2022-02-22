/* Michael => 884. Uncommon Word from Two Sentences - Leetcode

He solved it using an object

11:48 start my problem - 12:05 end

Duplicate Encode

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("


PROBLEM
- input a string
- return new string

Rules
- return a new string of open and closed parens based on the number of occurrences of a char in the input string
  - if count is 1 replace with '('
  - if count greater than 1 replace with ')'
- ignore capitalization
- empty string?
- spaces are considered chars
- implicit that return string is same length as input string

EXAMPLES
- 'din' => '((('
- 'recede' => ()()()'

DATA STRUCTURE
- input string
- intermediary: object to track occurrences
- output string

ALGORITHM
- input string
- initialize `result` to empty string
- initialize `count` to empty object
- change string to lowercase
- iterate through the string
  - add char and value to object or
  - increment value of char in object
- iterate through string again
  - if value of char in count is 1 append '(' to result string
  - otherwise append ')' to result string
- return `result` string
*/

function duplicateEncode(string) {
  let result = '';
  let count = {};

  string.toLowerCase().split('').forEach(char => {
    count[char] = count[char] + 1 || 1;
  });

 for (let idx = 0; idx < string.length; idx++) {
   if (count[string[idx]] === 1) result += '(';
   else result += ')'
 }

  return result;
}

console.log(duplicateEncode("din")); //,"((("
console.log(duplicateEncode("recede")); //,"()()()";
console.log(duplicateEncode("Success")); //,")())())" -- "should ignore case"
console.log(duplicateEncode("(( @")); //,"))((";

