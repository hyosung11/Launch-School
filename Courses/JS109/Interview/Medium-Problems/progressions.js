/* Progressions

Medium Problem
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

PEDAC
- input: array
- output: number

Rules
- Test the arithmetic progressions for the array

ALGORITHM
If array length is less than 3, we return 0
Loop from 1 to difference (last one - first one)
Find all the subarrays of length 3
  We create an empty array to contain the subarrays
  If array length less than 3, no subarray
  If array length is 3, only 1 subarray
  If more than 3 elements
  Loop through the array from 0 to array length
    Add an array of length 3 to the `subArray` array
      Add element, element index + 1, element index + 2
  We want to increment the counter when 2nd element of the array - 1st element of the array is equal to third element - second element */

// function progressions(array) {
//   // if (array.length < 3) return 0;

//   let counter = 0;
//   let subarrays = [];

//   // if (array.length === 3) {
//     // subarrays.push(array);
//   // } else {
//     for (let idx = 0; idx < array.length - 2; idx += 1) {
//       for (let idx2 = idx + 1; idx2 < array.length - 1; idx2 += 1) {
//         for (let idx3 = idx2 + 1; idx3 < array.length; idx3 += 1) {
//           subarrays.push([array[idx], array[idx2], array[idx3]]);
//         }
//       }
//     }

//   // console.log(subarrays); // [1, 2, 3][1, 2, 4][1, 2, 5][1, 3, 4] [1, 3, 5] [1, 4, 5]
//   subarrays.forEach(subarray => {
//     if (subarray[1] - subarray[0] === subarray[2] - subarray[1]) counter += 1;
//   })

//   return counter;
// }
function progressions(array) {
  let counter = 0;
  let subarrays = [];

  for (let idx = 0; idx < array.length - 2; idx += 1) {
    for (let idx2 = idx + 1; idx2 < array.length - 1; idx2 += 1) {
      for (let idx3 = idx2 + 1; idx3 < array.length; idx3 += 1) {
        subarrays.push([array[idx], array[idx2], array[idx3]]);
      }
    }
  }

  subarrays.forEach(subarray => {
    if (subarray[1] - subarray[0] === subarray[2] - subarray[1]) {
      counter += 1;
    }
  });

  return counter;
}

// Test Cases
  console.log(progressions([]));  // 0
  console.log(progressions([1, 2]));  // 0
  console.log(progressions([1, 2, 3]));  // 1
  console.log(progressions([1, 2, 4]));  // 0
  console.log(progressions([1, 20, 21, 22]));  // 1
  console.log(progressions([1, 10000001, 20000001]));  // 1
  console.log(progressions([1, 2, 3, 4, 5])); // 4
  console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
  console.log(progressions([1, 2, 3, 4, 5]));  // 4
  console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

// function progressions(array) {
//   let counter = 0;
//   let subarrays = [];

//   for (let idx = 0; idx < array.length - 2; idx += 1) {
//     for (let idx2 = idx + 1; idx2 < array.length - 1; idx2 += 1) {
//       for (let idx3 = idx2 + 1; idx3 < array.length; idx3 += 1) {
//         subarrays.push([array[idx], array[idx2], array[idx3]]);
//       }
//     }
//   }

//   subarrays.forEach((subarray) => {
//     if (subarray[1] - subarray[0] === subarray[2] - subarray[1]) counter += 1;
//   });

//   return counter;
// }

function progressions(array) {
  let subarrays = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    for (let idx2 = idx + 1; idx2 < array.length; idx2 += 1) {
      for (let idx3 = idx2 + 1; idx3 < array.length; idx3 += 1) {
        subarrays.push([array[idx], array[idx2], array[idx3]]);
      }
    }
  }

  return subarrays.filter((subarray) => {
    return subarray[1] - subarray[0] === subarray[2] - subarray[1];
  }).length;
}