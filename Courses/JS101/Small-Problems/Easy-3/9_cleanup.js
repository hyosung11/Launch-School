/* JS101 - Small Problems > Easy 3 > 9. Clean up the words

Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "

============================================================

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: string
- output: string

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- replace non-alphabetic characters with spaces
- only one space for one or more non-alphabetic characters in a row

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Example:
cleanUp("---what's my +*& line?");    // " what s my line "

Edge Cases?
- numbers?
- capital letters?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary:
- output: string

ALGORITHM
Steps for converting input to output
- initialize cleanText variable to an empty string
- loop through the string argument
  - if the char at the index position is an alphabetic character add it to cleanText
  - if char is not alphabet char, replace char with empty space
    - if next char is also not in the alphabet, ignore it
- return cleanText

CODE
Implementation of Algorithm
- test code while programming

===============================*/

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(letter) {
  return letter >= 'a' && letter <= 'z';
}

function isUpperCaseLetter(letter) {
  return letter >= 'A' && letter <= 'Z';
}
// Regular Expression Solution
// function cleanUp(text) {
//   // replace all non-letters with space and delete all duplicate spaces
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }

// Examples
console.log(cleanUp("---what's my +*& line?")); // " what s my line "
console.log(cleanUp("Stop_* the $#@$@ madness!"));

/* Discussion

The solution makes use of a `for` loop to build a `cleanText` variable. At every iteration, the objective is to check if the current character is a letter (either uppercase or lowercase). If the character is not a letter, the program appends a space (`" "`); if the character is a letter, the program appends that letter.

The tricky part is when there are consecutive non-letter characters. The specification shows that there are no consecutive space characters, even if there are consecutive non-letter characters. To handle this, the solution uses a condition to check if the last character in the `cleanText` variable is a space. If the character is a space, it means that there is already a space at the previous index position, so appending another space would result in having consecutive space characters.

Shorter solution explanation:

Ah, the expressiveness of regular expressions. They can really help with messy text manipulation. They aren't always the wisest choice for understandable code, but they can save a lot of effort in some cases. This is one such case where the regular expression may be the best choice.

This method is quite simple: using the `String.prototype.replace()` call, it simply replaces all non-alphabetic characters in `text` with a space, then by chaining another `replace()` method call we delete all of the duplicate spaces.

If you are unfamiliar with regular expressions, the expression `/[^a-z]/gi` is a regular expression that matches any character that is not an uppercase or lowercase letter. The `/i` part of this expression is what makes this expression case insensitive and `/g` part changes all the characters not just first one. `replace()` replaces all characters in `text` that match the regular expression in the 1st argument with the value in the 2nd argument. */