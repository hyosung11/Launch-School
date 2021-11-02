/* JS101 - Small Problems > Easy 3 > 1. ddaaiillyy ddoouubbllee

ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

ALGORITHM
1. Declare a function that takes a string argument
2. initialize empty string variable
3. Loop through each character of the string
  - if a char in the string is duplicate of the preceding char ignore it
  - add char to the empty string
4. return new string
*/

// My Solution
// function crunch(text) {
//   let crunchText = '';
//   for (let index = 0; index < text.length; index += 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }
//   }

//   return crunchText;
// }

// Launch School Solution
// function crunch(text) {
//   let crunchText = '';
//   let index = 0;

//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }

//     index += 1;
//   }

//   return crunchText;
// }

// Solution with `filter` from Laurent
// function crunch(text) {
//   return text
//     .split('')
//     .filter((char, index) => {
//       return char !== text[index - 1]
//     })
//     .join('')
// }

/* A Solution with Regex from Laurent

A solution with regex. We are going to use the replace method to match a certain set of strings and replace them with an empty string.

In our case, we want to replace the repeating strings: the regex will consider each character through `(.)`. We use parentheses around the dot, which is basically any character, to create a capture group so that we can refer to it later with the `\1`.

`(?=\1)` is a positive lookahead, it looks one character after the current one (here referenced as `\1`), and if the character is the same, the `.` is captured by our regex.

For example, in the string `gggg` `aaaa` we would select (ggg)g (aaa)a, because the character after them is the same. */

function crunch(string) {
  return string.replace(/(.)(?=\1)/g, "");
}

// Examples
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
console.log(crunch('aaahhh-bbbbbbaaa'));

/* Discussion
Our solution builds a `crunchText` variable by iterating over each character in the `text` argument. While iterating over the characters in `text`, the key is to only append the character at the current index if it is not equal to the next character. If it is equal, then do nothing.

Further Exploration
You may have noticed that the solution continues iterating until `index` points to the last character in the string, which means that `text[index + 1]` is beyond the end of the string during the last iteration. Why does it do this? What happens if we stop iterating when index is equal to `text.length - 1`?

It's also possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions. Can you think of any other solutions that don't use regular expressions? */