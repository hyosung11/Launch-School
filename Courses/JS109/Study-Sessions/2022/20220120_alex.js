/* Array.diff - 6 kyu

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

PROBLEM
- input: two arrays of numbers
- output: new array of unique values

Rules
- return an array that removes all values from array1 that are in array2 and keep the order
- if a value is present in array2, all of its occurrences must be removed from array1 
- if array1 is empty return an empty array
- if array2 is empty return array1

DATA
in: array
between: arr
out: arr

ALGO
- input: arr1 and array2
- create result arr
- iterate through arr1 
  -if element is not in arr2, push to result
- return result
*/

// function arrayDiff(array1, array2) {
//   let result = [];

//   array1.forEach((num) => {
//     if (!array2.includes(num)) result.push(num);
//   });

//   return result;
// }

function arrayDiff(array1, array2) {
  return array1.filter(element => !array2.includes(element));
}

console.log(arrayDiff([], [4, 5])); // [], "a was [], b was [4,5]");
console.log(arrayDiff([3, 4], [3])); // [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1, 8, 2], [])); // [1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3], "a was [1,2,3], b was [1,2]")
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]

/* Where is my parent!?(cry) - 6 kyu

Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". 

PROBLEM
input: str
output: str

rules:
-sort string alphabetically but with each uppercase letter preceding the lowercase occurrences of the same letter

DATA:
in: str
between: str
out: str

ALGO:
-create result string
-sort string alphabetically
-iterate through input str  
  -if str[i] to upper case === str[i], result += str[i]
    iterate through input string once more
      -if str[j] === str[i] to lowercase,
      result += str[j]

return result
*/

function findChildren(string) {
  let result = '';
  let sorted = string.split('').sort().join('');

  for (let idx = 0; idx < sorted.length; idx++) {
    if (sorted[idx] === sorted[idx].toUpperCase()) {
      result += sorted[idx];

      for (let jdx = 0; jdx < sorted.length; jdx++) {
        if (sorted[jdx] === sorted[idx].toLowerCase()) {
        result += sorted[jdx];
        }
      }
    }
  }

  return result;
}

console.log(findChildren('beeeEBb')) // 'BbbEeee');
console.log(findChildren('uwwWUueEe')) // ==='EeeUuuWww');

console.log(findChildren('beeeEBb') === 'BbbEeee');
console.log(findChildren('uwwWUueEe') ==='EeeUuuWww');

console.log(findChildren('beeeEBb') === 'BbbEeee');
console.log(findChildren('uwwWUueEe') ==='EeeUuuWww');

// function findChildren(string) {
//   let result = '';
//   let sorted = string.split('').sort().join('');
//   // console.log(sorted) => BEbbeee

//   for (let idx = 0; idx < sorted.length; idx++) {
//     // sorted[0] === B
//     // sorted[1] === E
//     // sorted[2] === b
//     // sorted[3] === b
//     // sorted[4] === e
//     // sorted[5] === e
//     // sorted[6] === e

//     if (sorted[idx] === sorted[idx].toUpperCase()) {
//       //[0] B === B.toUpperCase()

//       result += sorted[idx];
//       // console.log(result);
//       // [0] B

//       for (let jdx = 0; jdx < sorted.length; jdx++) {
//         // console.log(`sorted[jdx] = ${sorted[jdx]}`) // B
//         if (sorted[jdx] === sorted[idx].toLowerCase()) {
//           // first pass of outer loop with 'B'
//           // B !== B.toLowerCase()
//           // E !== B.toLowerCase()
//           // b === B.toLowerCase()
//           // b === B.toLowerCase()
//           // e !== B.toLowerCase()
//           // e !== B.toLowerCase()
//           // e !== B.toLowerCase()

//           // second pass of outer loop with 'E'
//           // B !== E.toLowerCase()
//           // E !== E.toLowerCase()
//           // b !== E.toLowerCase()
//           // b !== E.toLowerCase()
//           // e === E.toLowerCase()
//           // e === E.toLowerCase()
//           // e === E.toLowerCase()

//         result += sorted[jdx];
//         console.log(result); 
//         // Bb
//         // Bbb
//         // BbbEe
//         // BbbEee
//         // BbbEeee
//         }
//       }
//     }
//   }

//   return result; // Bbb
// }


function findChildren(string) {
  return string
    .split('')
    .sort((a,b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      } else if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      } else if (a.toLowerCase() === b.toLowerCase()) {
        return a.charCodeAt() - b.charCodeAt();
      }
    }).join('');
}

console.log(findChildren('beeeEBb')) // 'BbbEeee');
// console.log(findChildren('uwwWUueEe')) // ==='EeeUuuWww');

/* You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.


ALGO
-loop through arr
  -if sum of slice from 0 to index === sum of slice from index + 1, return index
return -1
*/

function findEvenIndex(array) {
  for (let idx = 0; idx < array.length; idx++) {
    let leftSum = array.slice(0, idx).reduce((sum, num) => sum + num, 0);
    let rightSum = array.slice(idx + 1).reduce((sum, num) => sum + num, 0);

    if (leftSum === rightSum) return idx;
  }

  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); //"The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]) === -1);  //"The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // "The array was: [20,10,30,10,10,15,35] \n");