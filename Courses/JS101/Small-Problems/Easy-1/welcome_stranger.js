/* JS101 - Small Problems > Easy 2 > 1. Welcome Stranger

Welcome Stranger

Create a function that takes 2 arguments, an array and an object. The array 
will contain 2 or more elements that, when combined with adjoining spaces, 
will produce a person's name. The object will contain two keys, "title" and 
"occupation", and the appropriate values. Your function should return a 
greeting that uses the person's full name, and mentions the person's title.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input:
  - an array: with two or more elements
  - an object: two keys and their respective values

- output: string

Make the requirements explicit (clarifying questions)
- array contains two or more elements; combined with adjoining spaces to 
produce a person's first and last name (as well as middle name)
- object's keys are title and occupation with appropriate values
- function returns greeting of person's full name and title

Identify rules
- join the elements of the array in the order they are given
- join the values of tile and occupation in this order
- return string

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.
- string
- array
- object

ALGORITHM
Steps for converting input to output
1. declare function that with two parameters: an array, and an object
2. The array takes two or more string arguments
3. The object takes two key-value pairs: key of title and key of occupation
4. join the strings in the array with the adjoining spaces
5. get values from the object's keys
6. object returns values from the keys
7. return a string with greeting messages
  - "Hello" and "Nice to have a X around."

CODE
Implementation of Algorithm
*/
function greetings(array, object) {
  let stringFromArray = array.join(" ");
  let stringFromObject = object.title + " " + object.occupation

  return `Hello, ${stringFromArray}! Nice to have a ${stringFromObject} around.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// => Hello, John Q Doe! Nice to have a Master Plumber around.