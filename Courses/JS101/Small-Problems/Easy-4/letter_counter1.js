/* JS101 - Small Problems > Easy 4> 8. Letter Counter (Part 1)

Letter Counter (Part 1)

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: string
- output: object

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary: array
- output: object

ALGORITHM
Steps for converting input to output
1. Split the string at every space into an array
2. Count the number of characters in each element of the array
3. for each element in the array
  - add a key to the object that represents the value of the number and initialize counter to 1
  - we add 1 to the corresponding key
4. return the object
CODE
Implementation of Algorithm
- test code while programming

*/

// Examples:

function wordSizes(string) {
  let returnedObject = {};
  let numbersArray = string
    .split(' ')
    .map(string => string.length);

  if (numbersArray.length === 1 && numbersArray[0] === 0) return returnedObject;

  numbersArray.forEach(element => {
    if (Object.keys(returnedObject).includes(String(element))) {
      returnedObject[element] += 1;
    } else {
      returnedObject[element] = 1;
    }

  });

  return returnedObject;
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}