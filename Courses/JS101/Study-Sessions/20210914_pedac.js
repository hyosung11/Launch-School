/* JS100/101 Study Session: Intro to PEDAC

Introductions
- Name, location, curriculum, use of PEDAC
- Juliette
- Adhit, Budapest Hungary, Lesson 6, struggle with organizing thoughts
- Jeff, NY Long Island, Lesson 4, never write stuff down
- H
- Michael, Santa Cruz, PEDAC process is new
- Jason, Wellington New Zealand @ 5:00, struggle to write out explicit rules

PEDAC
- structural process
- not linear
- separate logical breakdown from the coding steps

==========================
Understanding the Problem

Goal: understand what you're being asked to do.

Establish the rules & boundaries of the problem?
What are the implicit and explicit requirements?
Ask clarifying questions.
Make note of any questions you hope to answer by examining the test cases in the next step.

Rules:
- the output needs to be sorted in x order
- input will always be positive numbers

EXAMPLES AND TEST CASES

Goal: understand even more what you're being asked to do.
strings: uppercase, lowercase, non-letters, etc.
arrays: [], edge cases - always the same edge cases
edge cases: e.g., use test case with 0

We should use our examination of the test cases to confirm or refute our assumptions of the problem.
A good way to see the rules/boundaries in actions.
If the return value is an array-- take a look at the order of elements.
If problem involves strings-- should we treat strings in a case-insensitive manner?
What about empty arguments?
Walk through all test cases with your understanding of the problem and see if they confirm your understanding.
May need/want to write some of your own test cases.

DATA STRUCTURE

How we structure our data is closely related to our algorithm and the steps we may take to solve the problem.
Helps us to reason with our data more logically.
What does our data look like when we get it? (input)
What does our data look like when we return it? (output)
What does our data need to look like in between (intermediary steps)?

ALGORITHM

Goal: write out high-level steps to solve the given problem.

A logical sequence of steps for accomplishing a task or objective.
Be abstract and high-level (don't box yourself in to a specific implementation, for example).
Language-agnostic.  Your algorithm should be applicable no matter what language someone is using to code a solution.
Find a solution that works (don't worry about efficiency for now)
Can create sub-steps for different parts
Separate concerns can potentially be moved into a helper function.
You can (and should) return to your algorithm during the implementation stage to update.
Although you want to keep your algorithm high-level in that you don't want your algorithm to be code-specific, you should take care not to skip over necessary steps in the problem solving process. For example, if a step in your algorithm is 'determine if number is prime'.  There should be sub-steps there walking through how you would determine if the number is prime.

CODING with INTENT

Goal: translate the algorithm into your programming language of choice.

Now is the time to use pseudo-code (if you want) to act as a step in between the algorithm and the actual code.
The goal of pseudo-code at this point would be to explore the solution in the domain of code. An intermediary step of translating your written algorithm into the final code solution.
Follow along with your algorithm step by step and code the solution.
Run your code often to confirm your code is working as you expect. (Use console.log() at every line)
The key is to be in control the whole time. Code with intention and avoid hack and slash.
If you find your algorithm does not work (logical flaw), return to the algorithm step FIRST and THEN continue on with your code.  Don't push through and resort to hack and slash.
Good programmers often spend the least amount of time on the coding step, because they figured everything out in the other PEDA steps.
As your language fluency increases, the C step of PEDAC will go more quickly.

Problem Description:

Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l"

You can expect that the string will include only positive numbers.

input: a string
output: a number (sum of all numbers in the input string)

Rules:
- input string only contains positive numbers
- we don't need to worry about special characters nor case sensitivity
- consecutive digits represent a larger number

Data Structures:
- string
- intermediary => array of numbers
- number

Algorithm
- declare a function with one parameter that takes a string as an argument
- Initialize a result array
- Iterate through the string character by character
  - if the character is a letter discard it
  - if the character is a number check if the adjacent characters are also a number

- return a number representing the sum of all the numbers in the string

"convert string into numbers"

ALGORITHM

- numbers array
- split the string into array of characters
- iterate over the chars:
  - ['2', '0', ''-', '1', '-' ]
  - join the array => "20-1-""
  - split the array based on '-' => ["20", "1"]
- convert the array of strings into an array of numbers
- sum these numbers and return the result

==================
- isNumber = false
- currentNum = 0

- check if char is digit?
  - if so:
    - isNumber is true:
      - currentNum = currentNum * 10 + current char
    - isNumber is false:
      - currentNum = current char (converted to a number)
  - if not a digit:
    - isNumber = false
    - push currentNum to numbers array
    - currentNum = 0

*/

function sumOfNumbers(str) {
  let chars = str.split('');

  let delim = '-';
  let numbers = '0123456789';

  let digits = chars.map((char) => {
    if (numbers.includes(char)) {
      return char;
    } else {
      return delim;
    }
  });

  let numbers = digits
    .join('')
    .split(delim)
    .map((str) => Number(str));

  let result = numbers.reduce((sum, num) => sum + num);
  // console.log(result);
  return result;
}

console.log(sumOfNumbers('HE2LL3O W1OR5LD')) // === 11);
// 2 + 3 + 1 + 5

console.log(
  sumOfNumbers('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog') ===
    3635
);
console.log(sumOfNumbers('') === 0);

// regex
// str.match(/\d+/g);

function sumOfNumbers(str) {
  let delim = '-';

  let nums = str.split('').map((char) => {
    if ('0123456789'.includes(char)) {
      return char;
    }

    return delim;
  });

  let numbers = nums
    .join('')
    .split(delim)
    .map((str) => Number(str));

  let result = numbers.reduce((sum, num) => sum + num);
  console.log(result);
  return result;
}

console.log(sumOfNumbers('HE2LL3O W1OR5LD') === 11);
// 2 + 3 + 1 + 5

console.log(
  sumOfNumbers('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog') ===
    3635
);
console.log(sumOfNumbers('') === 0);

// Another Version
function sumOfIntegersInString(string) {
  let digits = string.replace(/[^0-9]/g, '-');
  let result = digits.split('-').reduce((sum, num) => sum + Number(num), 0);
  return result;
}
