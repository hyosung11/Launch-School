/* JS109 Study Group | Tue. Nov. 30 | 10:30 AM Eastern

Introductions
- Antonina, TA
- Allison Embrey, prepping for JS109 Written, TX
- Abbie Papka, preparing for the interview
- Mary McDonald, Montreal, interview
- Nikolay, Moscow, end of JS101
- Edward Tristan Revells

===================
Problem Description

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
-- should be 6: [4, -1, 2, 1]

Easy case is when the array is made up of only positive numbers and
the maximum sum is the sum of the whole array.
If the array is made up of only negative numbers, return 0 instead.

Empty array is considered to have zero greatest sum.
Note that the empty array is also a valid argument array.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: array of integers
- output: number

Identify rules
- find the maximum sum of a contiguous subsequence in an array of integers
- if the array is made up only of negative numbers, return 0
- an empty array has zero greatest sum
- an empty array is a valid argument array

EXAMPLES / TEST CASES
// Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

Edge Cases?

DATA STRUCTURE
- input: array of integers
- intermediary: array
- output: number representing maximum sum

ALGORITHM
- input an array of integers
- if array is empty return 0
- if array only has negative numbers return 0
- declare `maxSum` variable` to hold current max sum
- iterate through the array
  - iterate through subarrays
    - compute value of subarrays
    - if sum of subarray greater than maxSum make it new maxSum
- return a number representing the maximum sum

CODE
Implementation of Algorithm
- test code while programming */

// function maxSequence(array) {
//   if (array.length === 0) return 0;
//   let maxSum = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     let currentSum = array[idx] + array[idx + 1];
//     console.log(currentSum);
//   }
// }

// Test Cases
// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([-32]) === 0); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

//--Abbie--
//input: array of numbers
//output: number

//rules: 
//if empty, return 0. 

  //if only negative numbers, return 0.  
  //if only positive, return sum of whole array.

//algorithm: 
  //deal with edge cases first
  //set maxSum variable
  //get substrings
    //

  //for each substring, if sum > maxSum reset maxSum

// function maxSequence(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   if (array.every(number => number > 0)) {
//     return array.reduce((sum, element) => sum + element, 0);
//   }
//   if(array.every(number => number < 0)){
//     return 0;
//   }
//   let maxSum = 0;
//   let subArrays = getSubArrays(array);
//   for (let i = 0; i < subArrays.length; i++) {
//     let currSum = subArrays[i].reduce((sum, element) => sum + element, 0);
//     if (maxSum < currSum) {
//       maxSum = currSum;
//     }
//   }
//   return maxSum;
// }

// function getSubArrays(array) {
//   let subArrays = [];
//   for (let i = 0; i <= array.length; i++ ){
//     for (let b = i + 1; b <= array.length; b ++) {
//       subArrays.push(array.slice(i, b));
//     }
//   }
//   return subArrays;
// }

// Second Problem
// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum
// of the integers to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array,
// the sum of left side of the index [1, 2, 3] and the sum of the
// right side of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.


/* Algo
- input array of integers
- iterate through the array
  - exclude the N, representing the middle index position
  - iterate through firstPart of the array
    - compute value of firstPart of the array
  - iterate through secondPart of the array
    - compute value of secondPart of the array
  - compare firstPart with secondPart
- return index number if values of parts are equal or return -1 if not equal */

function findEvenIndex(array) {
  for (let idx = 0; idx < array.length; idx += 1) {
    let firstPart = array.slice(0, idx).reduce((sum, value) => sum + value, 0);
    // console.log(firstPart);
    let secondPart = array.slice(idx + 1).reduce((sum, value) => sum + value, 0);  //console.log(secondPart);
    if (firstPart === secondPart) return idx;
  }

  return -1;
}
//Test Cases
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // true
console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

/* RECALL PEDAC EDWARD JS109
///////////////
in LIST
  - integer elements
out NUMBER
  - index N where sumLeft === sumRight
main challenges
  - we must select an idx and record sum of elements left and record sum of elements right of it
    // 
  - we must set two count variables which exclude idx and sum left or sum right
  - we must compare them and return idx when === 0
  - we must return -1 otherwise
steps
*/

// function findEvenIndex (input) {
//   for(let idx = 0; idx < input.length; idx++) {
//     let leftSide = input.slice(0,idx).reduce((a,b)=>a+b,0) 
//     //   HAD to put 0 as initial value otherwise
//     let rightSide = input.slice(idx+1).reduce((a,b)=>a+b,0) 
//     // got TypeError: Reduce of empty array with no initial value
//       // console.log(idx,input[idx],leftSide,rightSide)
//     if (leftSide === rightSide) return idx                           // b/c sometimes array starts empty
//   }
//   return -1
// }



//Abbie
//input: an array of integers
//output: an index where the left side of the array equals the right side

//algorithm:
      //let i = 1
      //get leftside of array
      //get rightside of array
      //get leftsidesum
      //get rightside sum
      //if leftsidesum === rightside sum return index, else increment index

// function findEvenIndex(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   for (let i = 0; i < array.length; i ++) {
//     let leftside = array.slice(0, i);
//     let rightside = array.slice(i + 1);

//     let leftsidesum = leftside.reduce((sum, element) => sum + element,0) ;
//     let rightsidesum = rightside.reduce((sum, element) => sum + element, 0);
//     if (leftsidesum === rightsidesum){
//       return i;
//     }
//   }
//   return -1;
// }