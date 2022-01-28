/* JS100/101 Study Session: PEDAC - More Advanced Problems

Introductions
- Michael: Italy, get some more practice with the PEDAC
- Wendy Tran: Oregon, thinking through problems with PEDAC
- Daniel Ebron: NYC, JS101, started section on PEDAC
- Spencer: Colorado, JS109, preparing for written assessment
- H: learn to adjust algorithm to the problem

Ask the interviewer about parts of the problem that you don't understand.

Understand the Problem

Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.

All tests will include only two different elements.

Input: two arrays
Output: boolean

Questions:
- What does elements a and b mean?
- What defines opposites of the two arrays?

Rules:
- Empty arrays will return false
- Given two values (elements a and b), we are looking for when the first value (element a) in the first array becomes the second value (element b) in the second array and vice-versa
- Input arrays will only include two distinct values (maximum)
- Both arrays must contain the same number of elements and same values
- elements a and b can be of different data types
- nested objects will not pass (cannot be compared) - not in the test cases
- if the length of the input arrays is < 2, return `false`

Examples/test cases

Data structure
input arrays
variables to store the unique values

Algorithm
Spencer
- Declare function called isAntiArray with two parameters, array1 and array2
- If array1 length does not match array2 length, return false
- Initialize for loop
- Declare variable called 'element' initialized to zero
- 'Element' is less than length of array1
- 'Element' increments by one for each loop
- In the loop body, compare the element at index zero of array1 with the element at index zero of array2
- If both match, return false
- If both do not match, continue
- Exit loop body
- Return true

Michael
Algo
  define function with arr1 and arr2 para
    if arr1 and arr2 lengths are less than 3;
      return false
    define part1 to the first 0 index position of the arr1
      define part2 to the first 1 index position of the arr2
        if part 1 equals part2?
          return true
            else false;


function isAntiArray(arr1, arr2){

  if(arr1.length <= 2 || arr2.length <= 2){
    return false;
  }

  let part1 = arr1[0];
  let part2 = arr2[1];

  return part1 === part2 ? true : false

}

// Daniel

// input two arrays
// check if two arrays have same length. otherwise return false
// .includes one aray two check if the other array has its elements
// ensure if input is not just .length ONE. otherwise return false

// then iterate through array
// through each iteration, if current char(a) iteration is not (a). move to next. if it is (a) return false

// Wendy
// - Define 2 variables, a and b
// - Conditional statements
//     - Look at length of array 1 and 2. If less than 2, then return false
//     - Else:
//         - Iterate through the first array
//         - Store the value located at index 0 into variable a
//         - Conditional statement
//             - Look at the next value in the array. If it is equal to the value stored in variable a, continue
//             - Else, store the value in variable b
//         - Create a loop to iterate through the arrays
//             - Conditional statement
//                 - If index 0 (or general index) is equal to variable a in the first array, then
//                     - Compare the value located at index 0 of the second array. If the value is equal to variable b, then continue
//                     - else return false
//                 - If index 0 (or general index) is equal to variable b in the first array, then
//                     - Compare the value located at index 0 of the second array. If the value is equal to variable a, then  continue
//                     - else return false
//             - After the conditional statements, return true because we got through all elements of both arrays successfully

// Code
*/

console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])); // true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])); // true
console.log(isAntiArray([3.14, true, 3.14], [false, 3.14, 3.14])); // false
// [3.14, true, 3.14], [true, 3.14, true] ?
console.log(isAntiArray([3.14, true, 3.14], [true, "3.14", true])); // false
console.log(isAntiArray([], [])); // false
console.log(isAntiArray([3.14], [3.14])); // false
console.log(isAntiArray([3.14], [false])); // false
console.log(isAntiArray([3.14, true], [3.14])); // false
console.log(isAntiArray([3.14], [3.14, true])); // false