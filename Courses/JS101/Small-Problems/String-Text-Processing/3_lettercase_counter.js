/* JS101 - Small Problems > String and Text Processing > 3. Lettercase Counter

Lettercase Counter

Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

PROBLEM
- input: string
- output: object

Identify rules
- input a string
- check for uppercase, lowercase, and nonletters
- return an object that indicates how many of each are in the string

EXAMPLES / TEST CASES
'abCdef 123' => {lowercase: 5, uppercase: 1, neither: 4}

- spaces are neither
- numbers are neither

DATA STRUCTURE
- input: string
- intermediary:
- output: object

ALGORITHM
- initialize object with keys and values set to 0
- iterate through the string
  - check each char
    - if lowercase add
    - if uppercase add
    - if neither add
- return object

CODE
- test code while programming */

// Solution 1 - loop
// function letterCaseCount(string) {
//   let counts = {lowercase: 0, uppercase: 0, neither: 0};

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx];
//     if ((char >= 'a') && (char <= 'z')) {
//       counts.lowercase += 1;
//     } else if ((char >= 'A') && (char <= 'Z')) {
//       counts.uppercase += 1;
//     } else {
//       counts.neither += 1;
//     }
//   }
//   return counts;
// }

// Solution 2 - regex
// function letterCaseCount(string) {
//   let lowercaseChars = string.match(/[a-z]/g) || [];
//   let uppercaseChars = string.match(/[A-Z]/g) || [];
//   let neitherChars = string.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowercaseChars.length,
//     uppercase: uppercaseChars.length,
//     neither: neitherChars.length
//   };
// }

// Examples:
console.log(letterCaseCount('abCdef 123'));
// { lowercase: 5, uppercase: 1, neither: 4 }

console.log(letterCaseCount('AbCd +Ef'));
// { lowercase: 3, uppercase: 3, neither: 2 }

console.log(letterCaseCount('123'));
// { lowercase: 0, uppercase: 0, neither: 3 }

console.log(letterCaseCount(''));
// { lowercase: 0, uppercase: 0, neither: 0 }

/* Discussion

This method is expected to return an object that includes the 3 character counts as properties.

In the first solution, we simply iterate through the string counting the different types of character by using some simple logical expressions.

The second solution uses the `String.prototype.match` method to process the `string` argument. The method takes a regular expression pattern as an argument and returns an array of characters that match the pattern. The solution first gets an array of matches for each character type and assigns each array to its respective variable. If the solution does not find any matches, it sets the variable to an empty array (`[]`) so that an error will not be raised when the `length` property is accessed on the variable later. Finally, the solution returns an object with three properties, setting the value of each to the `length` of the corresponding array (i.e., the `lowercase` property has a value of `lowercaseChars.length`).

In the second solution, we use regular expressions to count each of the three types of characters. If you are not familiar with regular expression, here's a brief explanation of the patterns we use:

- `/[a-z]/g` : Checks whether the character is a lowercase letter between `'a'` and `'z'`.
- `/[A-Z]/g` : Checks whether the character is an uppercase letter between `'A'` and `'Z'`.
- `/[^a-z]/gi` : Checks whether the character is neither an uppercase nor a lowercase letter.
- `g` : Tells the regex engine to search the entire string (i.e., g = global as in entire).
- `i` : Tells the regex engine to ignore case (i.e., i = ignore case). */

// Laurent
// function letterCaseCount(string) {
//   let counter = { lowercase: 0, uppercase: 0, neither: 0 };

//   string.split('').forEach((char) => {
//     if (char.toLowerCase() === char.toUpperCase()) counter.neither += 1;
//     else if (char === char.toUpperCase()) counter.uppercase += 1;
//     else if (char === char.toLowerCase()) counter.lowercase += 1;
//   });

//   return counter;
// }

/* Bob Rodes

Using the String.prototype.replace method and returning the object literal directly makes for a concise solution: */

// function letterCaseCount(str) {
//   return {
//     lowercase: str.replace(/[^a-z]/g, '').length,
//     uppercase: str.replace(/[^A-Z]/g, '').length,
//     neither: str.replace(/[a-z]/gi, '').length,
//   }
// }

/* I think replace is a bit more straightforward than `match`, simply because it doesn't require an array to be involved. Also, there are lots of situations where you can return an object literal directly like this, rather than using intermediary variables. Not that one always should; readability is a more important consideration than conciseness.

I suspect the solution uses `match` here to remind us that it returns `null` instead of an empty array when there are no matches, so you have to tack the `|| []` on the end. (See Javascript: the Bad Parts if someone ever gets around to writing it.) */
