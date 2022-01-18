/* 09:28 ServPro came to inspect the ceilings

/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

PROBLEM
- input two arrays: nums1, nums2
- output: array

Rules
- return a new array that takes elements from the first array and checks if there's a greater value in the remaining of the second array:
  - if value exists return the next greater value in the second array
  - if there is no greater value, return -1

EXAMPLES
- done

DATA STRUCTURE
- input two arrays of integers
- intermediary: arrays
- output: an array

ALGORITHM
- input arrays: nums1, nums2
- initialize `result` to empty array
- iterate through each element of nums1 (value)
  - find the index of the element in nums 2 (startJdx)

  - iterate through nums2 from startJdx + 1 to end
    - if nums2 at jdx is greater than value
      push nums2 at jdx to result

  - if no greater value exist in nums2 return -1
- return `result`
*/

function nextGreaterElement(nums1, nums2) {
  let result = [];

  for (let idx = 0; idx < nums1.length; idx++) {
    let element = nums1[idx];
    let startJdx = nums2.indexOf(element) + 1;

    let greaterVal = -1;

    for (let jdx = startJdx; jdx < nums2.length; jdx++) {
      if (nums2[jdx] > element) {
        greaterVal = nums2[jdx];
        break;
      }
    }

    result.push(greaterVal);
  }

  return result;
}


console.log(nextGreaterElement ([2, 4], [1, 2, 3, 4])); // [3, -1]
// console.log(nextGreaterElement ([4,1,2], [1,3,4,2])); // [-1,3,-1]

console.log(nextGreaterElement ([2,4], [1,2,3,4])); // [3,-1]
console.log(nextGreaterElement ([4,1,2], [1,3,4,2])); // [-1,3,-1]

// const nextGreaterElement = (nums1, nums2) => {
//   let ans = [];
//   nums1.forEach((val) => {
//     const index = nums2.indexOf(val);
//     const ele = nextElement(nums2, index + 1, nums2.length, val);
//     ans.push(ele);
//   });
//   return ans;
// };

// const nextElement = (nums2, left, right, target) => {
//   while (left <= right) {
//     if (nums2[left] > target) {
//       return nums2[left];
//     }
//     left++;
//   }
//   return -1;
// };

// var nextGreaterElement = function (nums1, nums2) {
//   let stack = [];
//   let nextGreater = {};

//   for (const num of nums2) {
//     while (stack.length && stack[stack.length - 1] < num) {
//       nextGreater[stack.pop()] = num;
//     }
//     stack.push(num);
//   }
//   for (let i = 0; i < nums1.length; i++) {
//     nextGreater[nums1[i]]
//       ? (nums1[i] = nextGreater[nums1[i]])
//       : (nums1[i] = -1);
//   }
//   return nums1;
// };