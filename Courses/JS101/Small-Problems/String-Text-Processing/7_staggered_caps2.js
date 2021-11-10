/* JS101 - Small Problems > String and Text Processing > 7. Staggered Caps (Part 2)

Staggered Caps (Part 2)

Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

ALGORITHM
- initialize `needUpper` to `true
- split string into chars
- iterate over chars
  - change chars to lowercase
  - check char if lower
    - toggle boolean
    - change char to upper
  - toggle boolean
  - change upper to lower
  - return char
- join chars
- return string */

// function staggeredCase(string) {
//   let needUpper = true;

//   return string
//     .split('')
//     .map(char => {
//       char = char.toLowerCase();
//       if (char >= 'a' && char <= 'z') {
//         if (needUpper) {
//           needUpper = false;
//           return char.toUpperCase();
//         } else {
//           needUpper = true;
//           return char.toLowerCase();
//         }
//       } else {
//         return char;
//       }
//     })
//     .join('');
// }

// Example:
console.log(staggeredCase('I Love Launch School!') === 'I lOvE lAuNcH sChOoL!');
console.log(staggeredCase('ALL CAPS') === 'AlL cApS');
console.log(staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'
);

/* Discussion

In this solution, we have to avoid changing the toggle state when working with non-alphabetic characters. Since we can no longer rely on the index position, we instead track the upper/lower state with a boolean variable, `needUpper`. We only change this flag when dealing with alphabetic characters. Note that we simplify the test for alphabetic characters by converting the input character to lowercase first.

Further Exploration

Modify this function so the caller can determine whether non-alphabetic characters should be counted when determining the upper/lowercase state. That is, you want a function that can perform the same actions that this function does, or that operates like the previous version.

Hint: Use a default parameter. */

// Cherri
function staggeredCase(str) {
  let needUpper = true;
  return [...str]
    .map(char => {
      if (/[a-z]/i.test(char)) {
        char = needUpper ? char.toUpperCase() : char.toLowerCase();
        needUpper = !needUpper;
      }
      return char;
    })
    .join('');
}

// regexp:test() tests to see whether a string matches a specified regular expression.