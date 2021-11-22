/* 1.  Problem Description - Find Even Index

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

Another one:
You are given the array [20, 10, -80, 10, 10, 15, 35]
At index 0 the left side is []
The right side is [10, -80, 10, 10, 15, 35]
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: array of integers
- output: number representing index if true

Identify rules
- if no index where sum of the integers on either side of N are equal, return -1
- empty arrays are equal to 0
- the integers at the index N will not count towards the left and right sums
- numbers can be negative

EXAMPLES / TEST CASES
[1, 2, 3, 4, 3, 2, 1] => index position 3 because sum of numbers on both sides equal; in this case 6 and 6

DATA STRUCTURE
- input: array
- intermediary: array
- output: number

ALGORITHM
- input an array of numbers
- iterate through array
  - for each integer in input array
    - get the left and right slices of the array, starting from that int's index
    - sum the left and right side slices
    - if sums of slices are equal, return the index position
- return -1 if not found

CODE
Implementation of Algorithm
- test code while programming

Antonina's Algorithm
Input: array of integers
Output: boolean value
Rules:
  - the integers at the index N will not count towards the left and right sums
  - an empty array should return 0 for this problem
Algorithm:
  - For each integer in input array
    - get the right and the left slice of the array, starting from that int's index
    - if the sums of those slices are equal, return the index `N`
  - Return -1 */

function findEvenIndex(integers) {
  for (let idx = 0; idx < integers.length; idx += 1) {
    let leftSide = integers.slice(0, idx);
    let rightSide = integers.slice(idx + 1);
    let leftSideSum = leftSide.reduce((total, value) => total + value, 0);
    let rightSideSum = rightSide.reduce((total, value) => total + value, 0);

    if (leftSideSum === rightSideSum) return idx;
  }

  return -1;
}

//Test Cases
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

// function findEvenIndex(ints) {
//   for (let idx = 0; idx < ints.length; idx += 1) {
//     let leftSide = ints.slice(0, idx);
//     console.log(leftSide);
//     let rightSide = ints.slice(idx + 1);
//     console.log(rightSide)
//     let leftSideSum = leftSide.reduce((sum, value) => sum + value, 0);
//     let rightSideSum = rightSide.reduce((sum, value) => sum + value, 0);

//     if (leftSideSum === rightSideSum) {
//       return idx;
//     }
//   }

//   return -1;
// }
// function findEvenIndex(ints) {
//   for (let n = 0; n < ints.length; n += 1) {
//     let leftSide = ints.slice(0, n);
//     let rightSide = ints.slice(n + 1);
//     let leftSideSum = leftSide.reduce((sum, currVal) => sum + currVal, 0);
//     let rightSideSum = rightSide.reduce((sum, currVal) => sum + currVal, 0);

//     if (leftSideSum === rightSideSum) return n;
//   }

//   return -1;
// }



    // for (var k = 0; k <= i; k++) {
    //   left = left + arr[k];
    // }
    // if (right === left) {
    //   return i;
    // }



// function findEvenIndex(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var left = 0;
//     var right = 0;

//     for (var j = i; j <= arr.length - 1; j++) {
//       right = right + arr[j];
//     }

//     for (var k = 0; k <= i; k++) {
//       left = left + arr[k];
//     }

//     if (right === left) {
//       return i;
//     }
//   }

//   return -1;
// }