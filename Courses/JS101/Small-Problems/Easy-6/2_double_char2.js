/* JS101 - Small Problems > Easy 6 > 2. Double Char (Part 2)

Double Char (Part 2)

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

ALGORITHM
- split string at each char into an array
- loop through the array
  - check the char
    - if consonant, double and add
    - if not consonant ignore
  - return array
- join array and return as string */

function doubleConsonants(string) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let stringArray = [];

  for (let index = 0; index < string.length; index++) {
    stringArray.push(string[index]);
    if (CONSONANTS.indexOf(string[index].toLowerCase()) >= 0) {
      stringArray.push(string[index]);
    }
  }

  return stringArray.join('');
}

// Examples:
// console.log(doubleConsonants('String')); // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
// console.log(doubleConsonants('')); // ""

/* Discussion

This exercise is nearly identical to the previous exercise, so the solution is also similar to the first solution from that exercise. The main difference is that this solution must determine whether each character is a consonant. This can be done in a variety of ways, but ours takes the straightforward approach of searching an array of lowercase consonants. To account for uppercase consonants, the solution converts each character to lowercase before performing the check. */

// Emma Story
// function doubleConsonants(string) {
//   // const CONSONANTS
//   const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
//   // split / map / join
//   return string.split('').map(char => {
//     return CONSONANTS.includes(char.toLowerCase()) ? char.repeat(2) : char;
//   }).join('');
// }

// Bob Rodes - `replace` and regex:
// const doubleConsonants = (str) => str.replace(/[^\Waeiou\d_]/g, '$&$&');

// Examples:
console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""

/* I'll break it down:

- `[]` Match any character that matches any value inside the brackets.
- `^` If inside the brackets, then match any character that does not match a value inside the brackets. So exclude:
  - \W Any non-word character, equivalent to `[^a-zA-Z0-9_]`.
  - aeiou Vowels.
  - \d digits.
  - _ Literal underscore character.
- /g Return all matches of the regex rather than just the first one

So, no non-word characters, no vowels, no digits, no underscore. The digits and underscore need to be specifically excluded, because `\W` doesn't exclude them, or more precisely, `[^\W]` doesn't.

Now, `replace(regex, replaceValue)` takes each match and replaces it with the replacement value. For the `replaceValue` argument, `$&` references the matched character or characters; so `$&$&` replaces each match with the match doubled.

It's less of a headache to just spell out all the consonants and use the `\i` modifier for case insensitivity, as several of us have done: `/[bcdfghjklmnpqrstvwxyz]/ig`. However, the more concise "not (everything but consonants)" version is good practice and keeps the column count down. */