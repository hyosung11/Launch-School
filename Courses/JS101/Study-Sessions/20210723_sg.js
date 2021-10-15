/* JS100/JS101 Beginner Study Group | Friday, July, 23rd | 11:00 AM Eastern / 8:00 AM PACIFIC

PARTICIPANTS
Mandy Cheang TA
Jeannine (JS101)
  - Boston, MA
  - Lesson 4
@GregB
  - Denver, CO
  - JS101 Lesson 4, Easy 4
@AlexStein
  - NJ music teacher
  - two year plan for LS
@laurentstaub
  - Paris France
  - Lesson 2
  - Consultant of own company on Excel
@HyoSungBidol-Lee

AGENDA
- Introductions
- Study Tips - Learning how to learn
  - cards at different levels
  - click through to the summary
- Statement vs Expression
- Problem solving - PEDAC

STATEMENT vs EXPRESSION

Statement
- does not evaluate to a value
  - console.log(if(true))

Expression
- an expression is anything that JS can evaluate to a value, even if that value is undefined or null
- 7 + (5 + 2)
// 14

=====
PEDAC

Given a string of one or more words, return an array that contains
the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.

PROBLEM
Input
- string of one or more words
- What is word? -- group of characters separated by a white space

Output:
- an array, elements are numbers. Numbers represent the count of vowels of each word.
- vowels: 'aeiouAEIOU'

Explicit Requirements
- returned array should have the same number of elements as words

EXAMPLES
- `!!` is considered a word in the 2nd example
- words can be a combination of letters and symbols 'abc' 'grrr!'
- when given an empty string that contains no words, return an empty array
- can assume that words do not contain numbers

Edge Cases
- inclusion of numbers?
  - can ask in an interview

DATA STRUCTURES
- input String
- output array of numbers
- another data structure convert String --> Array

ALGORITHM
1. declare function with one parameter that takes a string argument of one or more words
2. initialize an empty array to log the number of vowels in each word
3. change the string to all lowercase
4. split the string at each word
5. initialize variable to count vowels of each word
6. loop through check each word for a vowel
  - if vowel increase the count of vowels for the word
  - check next word to end of string
7. return array of numbers indicating how many vowels in each word

Greg's Algorithm

Mandy
- Convert the input string of words into an array of words.
    - Split the string by spaces to extract each word into the array.
- Convert the array of words into a new array of numbers.
- Iterate over each word in the array of words and count the number of vowels for each word, using the `numOfVowels(word)` helper function.

    - Create a helper function for the sub-problem of counting the number of vowels in a word. `numOfVowels` function:
        - Given a single word.
        - Initialize a variable `count` to store the count.
        - Iterate over each character of the word.
        - If the character is one of `a` `e` `i` `o` `u` , - increment `count`.
        - After iteration is complete, return `count`.

- Return the newly created array of numbers (number of vowels).
*/

function vowelCount(str) {
  if (str === '') return [];

  return str.split(' ').map((word) => countVowels(word));
}

function countVowels(word) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let character of word) {
    if (vowels.includes(character.toLowerCase())) {
      count += 1;
    }
  }

  return count;
}

// Examples
vowelCount('WhaTs yOur enneagram?');                  // [1, 2, 4]
vowelCount('Colonel Sanders feeds me well !!');       // [3, 2, 2, 1, 1, 0]
vowelCount('');                                       // []
vowelCount('ZoInkies!! There are monsters in here.'); // [4, 2, 2, 2, 1, 2]
vowelCount('grrr!');                                  // [0]
