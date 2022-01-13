/* The Hashtag Generator - 5 kyu

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

Examples:
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

PROBLEM
- input string
- output: false or new string

Rules
- return a new string from the input string that starts with a hashtag (#)
  - all words separated by spaces must have their first letter capitalized
- if final result is longer than 140 chars return false
- if input is an empty string return false
- if result is an empty string return false

EXAMPLES
- '' => false
- 'Codewars' => '#Codewars' added #
- 'CodeWars Is Nice' => '#CodewarsIsNice' added hashtag and took out spaces
- 'Codewars is nice' => '#CodewarsIsNice' added hashtag, capitalized first letter of each word, removed spaces

DATA STRUCTURE
- input string
- intermediary: array
- output:
  - new string
  - or boolean false

ALGORITHM
- input string
- if input string is empty return false
- split string into words at space
- iterate by word
  - slice word at first index position and capitalize the letter
  - slice rest of word and lowercase the characters
  - join words without spaces
- if `result` string's length is greater than 140 or it's length is 0, return false
- add hashtag to beginning of word
- return `result` word */

function generateHashtag(string) {
  if (string.length === 0) return false;

  result = string
    .split(' ')
    .map((word) => {
      return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
    })
    .join('');

  if (result.length >= 140 || result.length === 0) return false;
  return `#${result}`;
}

console.log(generateHashtag('code' + ' '.repeat(140) + 'wars') === '#CodeWars'); // '#CodeWars');
console.log(generateHashtag('') === false); //false; // "Expected an empty string to return false"
true / false;
console.log(generateHashtag('') === false); // "Expected an empty string to return false"
console.log(generateHashtag('Codewars') === '#Codewars'); // "Should handle a single word."
console.log(generateHashtag('Codewars Is Nice') === '#CodewarsIsNice'); // "Should remove spaces."
// // console.log(generateHashtag("Codewars is nice") === "#CodewarsIsNice"); //
console.log(generateHashtag(' '.repeat(200)) === false); // "Still an empty string"
console.log(generateHashtag('Do We have A Hashtag') === '#DoWeHaveAHashtag'); // "Expected a Hashtag (#) at the beginning.")
// // "Should capitalize first letters of words."
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars') === '#CodeWars'); // "Expected an empty string to return false"
// // console.log(generateHashtag(" ".repeat(200)) === false); // "Still an empty string"
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars') === '#CodeWars');
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") === false); // "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag('a'.repeat(139)) === '#A' + 'a'.repeat(138)); // "Should work"
console.log(generateHashtag('a'.repeat(140)) === false); // "Too long"
