/* 11:21 study session
/* PROBLEM DESCRIPTION

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. 

The result array should be sorted in ascending order of values. 
Assume there are no duplicate numbers in the array. 
The order of the numbers in the input array should not matter. 

11:22 start
11:29 algo done
11:33 solved 

Problem
- input an array of numbers
- output an array of arrays of pairs of numbers that have a difference of 2

Rules
- return nested array of arrays of pairs of numbers with a difference of 2
- sort the result array in ascending order of values
- no duplicates
- if no elements have a difference of 2, return an empty array

Examples
- reviewed

Data Structure
- input array
- intermediate: sort the array
- output nested arrays of pairs of numbers

Algorithm
- declare `differenceOfTwo` function with `array` parameter
- init `result` to empty array
- sort the array in ascending order of values
- iterate through array with outer loop
  - iterate through array with inner loop
    - compare elements and push elements with a difference of two to `result` array as an array
- return `result`
*/

function differenceOfTwo (array) {
  let result = [];
  array.sort();
  
  for (let idx = 0; idx < array.length; idx += 1) {

    for (let jdx = idx + 1; jdx <= array.length; jdx += 1) {

      if (array[jdx] - array[idx] === 2) {
        result.push([array[idx], array[jdx]])
      }
    }
  }

  return result;
}

console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4])); // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []

/* Grab Scrab for Michael

11:36 start

*/

/* GrabScrab

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as an array, and output a list of words that the pirate might have meant.

Return matches in the same order as in the array. Return an empty array if there are no matches. 

11:36 start
11:45 algo 
11:51 solved 

PROBLEM:
  input: string; and array
  output: an array; that matches the letters from the string

  rules:
    -the characters inside the array have to exactly match the 
    chars inside the string
    -if none of the chars match the string return empty
    -all lowercase 

DATA STRUCTURE:
  input: string; an array
  use sort for string and each element in array
  result array
  output: an array that matches the string

ALGO:
  define function with para string, array
    define result to empty array
    sort the string
    sort each element in array
    iterate through the sorted array
      if the sorted string is the same as the element
        push into result
        return result
*/

function grabscrab(string, array){
  let result = [];
  let sortedString = string.split('').sort().join('');
  let sortedArr = array.map(ele => ele.split('').sort().join(''));

  for(let i = 0; i < sortedArr.length; i++){
    if(sortedString === sortedArr[i]){
      result.push(array[i])
    }
  }
  return result;
}

console.log(grabscrab('oob', ['bob', 'baobab'])); // []);
console.log(grabscrab('ourf', ['one', 'two', 'three'])); // []);
console.log(grabscrab('trisf', ['first'])); // ["first"]);
console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); // Should return ["sport", "ports"].

console.log(grabscrab('ainstuomn', ['mountains', 'hills', 'mesa'])); // ["mountains"]);

console.log(grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop'])); // ["pool", "loop"]));
console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); // ["sport", "ports"]);

function grabscrab(string, array) {
  let result = [];

  let sortedString = string.split('').sort().join('');
  let sortedArray = array.map((word) => word.split('').sort().join(''));

  for (let idx = 0; idx < sortedArray.length; idx += 1) {
    if (sortedString === sortedArray[idx]) {
      result.push(array[idx]);
    }
  }
  return result;
}