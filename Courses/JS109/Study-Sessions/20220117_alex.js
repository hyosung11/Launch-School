/* String Transformer - 6 kyu

Given a string, return a new string that has transformed based on the input:

- Change case of every character, ie. lower case to upper case, upper case to lower case.
- Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces. 

PROBLEM
- input: string
- output: new string

Rules
- change case of every char from lower to upper and upper to lower
- reverse the order of words from the input
- input is only letters and spaces
- extra spaces beyond spaces between words should be removed

Questions
- what happens to leading and trailing spaces? Are they preserved? Do they count as words when it comes to reversing the order of the elements?

EXAMPLE
- 'drink WAter' => 'waTER DRINK'

DATA STRUCTURE
- input: string
- intermediary: array
- output: new string

ALGO
- split into arr by spaces
- filter out empty string
- use a helper function (or map) to make all lower char upper and vice versa
- create result variable and set to: reverse and join arr by space
- return result

*/

function stringTransformer(string) {
  let arr = string
    .split(' ')
    .map((char) => changeCase(char));

  let result = arr.reverse().join(' ');
  return result;
}

function changeCase(word) {
  return word
    .split('')
    .map((char) => {
      return char === char.toUpperCase()
        ? (char = char.toLowerCase())
        : (char = char.toUpperCase());
    })
    .join('');
}

// console.log(changeCase('drink WAter'))

// console.log(stringTransformer('drink WAter')) // === 'waTER DRINK');
// console.log(stringTransformer('Example string')); //=== //'STRING eXAMPLE'));

// console.log(stringTransformer('drink WAter') === 'waTER DRINK');
// console.log(stringTransformer('Example string') === 'STRING eXAMPLE');

/* Largest Product in a series - 5 kyu

Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240

The input string always has more than five digits.

PROBLEM
input: number string
output: number (largest product of 5 consec)

rules:
-return largest value out of product of every 5 consecutive numbers

EXAMPLES

DATA STRUCTURES
input: string
in between: arr
output: number

ALGO
- input: number string
- split into arr by empty string
- let greatestProduct = 0
- iterate through arr.length - 5
  -take slices from index to index plus 5
  -coerce digits to numbers
  -if the product of the current slice greater than greatestProduct, set the value of greatestProduct to teh product of the current slice

  return greatestProduct
*/

function greatestProduct(string) {
  let greatest = 0;
  let digits = string.split('');

  for (let idx = 0; idx <= digits.length - 5; idx++) {

    let test = digits.slice(idx, idx + 5).reduce((total, num) => total * Number(num), 1);

    if (test > greatest) greatest = test;
  }

  return greatest;
}

console.log(greatestProduct("02494037820244202221011110532909999") === 0);

console.log(greatestProduct("123834539327238239583") === 3240); 'The method gave a wrong answer';
console.log(greatestProduct("92494737828244222221111111532909999") === 5292); 'The method gave a wrong answer';
console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
console.log(greatestProduct("92494737828244222221111111532909999"), 5292);


// The method gave a wrong answer - Expected: 3240, instead got: 2160

// console.log(greatestProduct("123834539327238239583") === 3240); 'The method gave a wrong answer';
// console.log(greatestProduct("92494737828244222221111111532909999") === 5292); 'The method gave a wrong answer';
// console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
// console.log(greatestProduct("92494737828244222221111111532909999"), 5292);
// console.log(greatestProduct("02494037820244202221011110532909999") === 0);