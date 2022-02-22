/* 1408. String Matching in an Array
Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained, removing some characters to left and/or right side of words[j].

 

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.


Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".


Example 3:

Input: words = ["blue","green","bu"]
Output: []

11:01 start
11:11 algo
11:18 code
11:27 solved

  PROBLEM:
    input: array
    output: an array; substrings
    
    rule:
    the order does not matter
    
  EXAMPLE TESTS:
    stringMatching(["blue","green","bu"]) => []
    stringMatching(["mass","as","hero","superhero"]) => ['as', 'hero']
    stringMatching(["leetcode","et","code"])) => ['et', 'code']
    
    DATA STRUCTURE:
      input: array
      sort on length
      output: array; substrings
      
    ALGO:
      define function para array
        init result to empty array
        iterate through the array elements
        iterate through array elements higher index
          slice the array
          on first element call includes on the rest of the elements;
            push elements result
              return result;
*/

function stringMatching(array) {
  let result = [];
  let sortedArr = array.sort((a, b) => b.length - a.length);

  for (let i = 0; i <= sortedArr.length; i++) {
    for (let j = i + 1; j <= sortedArr.length; j++) {
      if (sortedArr.slice(i, j)[0].includes(sortedArr[j])) {
        result.push(sortedArr[j]);
      }
    }
  }
  return result;
}

console.log(stringMatching(['blue', 'green', 'bu'])); //  []
console.log(stringMatching(['mass', 'as', 'hero', 'superhero'])); // ["as","hero"]
console.log(stringMatching(['leetcode', 'et', 'code'])); // ["et","code"]

/*
11:33

HyoSung's Turn */

//www.codewars.com/kata/578aa45ee9fd15ff4600090d

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

/*
11:34 start
11:54 code
11:58 solved

Problem
- input an array of numbers
- output an array

Rules
- return an array in which the odd numbers are in ascending order while the even numbers remain in their original position of the input array
- if input array is empty, return an empty array

Examples
- [7, 1] => [1, 7] 
- [5, 3, 1, 8, 0] => [1, 3, 5, 8, 0]

Data Structure
- input array of numbers
- inside array
- output array

Algorithm
- declare `sortArray` function with `array` parameter
- init `result` to empty array 

- init odds to filter odd number from arrays and sort [5, 3, 1]

- iterate over array
  - if element at idx is odd
    - pop element from odds to result
  - else push element at the array idx to result
- return `result`


*/

https: function sortArray(array) {
  let result = [];

  let odds = array.filter((num) => num % 2 === 1).sort((a, b) => b - a);

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] % 2 === 1) {
      result.push(odds.pop());
    } else {
      result.push(array[idx]);
    }
  }

  return result;
}

console.log(sortArray([5, 3, 1, 8, 0]))//, [1, 3, 5, 8, 0]);
console.log(sortArray([5, 3, 2, 8, 1, 4]))//, [1, 3, 2, 8, 5, 4]);
console.log(sortArray([]))//,[]);

/* Michael's Solution */
function sortArray(array) {
  let odds = [];
  let evens = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    } else {
      evens.push(array[i]);
    }
  }
  let sortedOdds = odds.sort((a, b) => a - b);

  for (let j = 0; j < array.length; j++) {
    if (evens.includes(array[j])) {
      sortedOdds.splice(j, 0, array[j]);
    }
  }

  return sortedOdds;
}

/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */