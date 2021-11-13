/* JS101 - Small Problems > Medium 2 > 7. Bubble Sort

Bubble Sort

Bubble Sort is one of the simplest sorting algorithms available. It is not an efficient algorithm, so developers rarely use it in real code. However, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

ALGORITHM
- input an array
- loop through array
  - compare values at adjacent index positions
  - if first value is greater than second swap
  - repeat until a complete pass is made without performing any swaps
- output sorted array */

// Launch School
// function bubbleSort(array) {
//   while (true) {
//     let swapped = false;
//     for (let idx = 1; idx < array.length; idx++) {
//       if (array[idx - 1] <= array[idx]) continue;
//       [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
//       swapped = true;
//     }
//     if (!swapped) break;
//   }
// }

// Julia Martin
// function bubbleSort(array) {
//   let swapsMade;
//   do {
//     swapsMade = false;
//     for (let idx = 0; idx < array.length - 1; idx++) {
//       if (array[idx] > array[idx + 1]) {
//         [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
//         swapsMade = true;
//       }
//     }
//   } while (swapsMade);
// }

// Examples:
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/* Discussion

The solution uses a pair of loops, with one nested inside the other. The outer `while` loop handles the task of repeating the iterations until the `array` is completely sorted. The loop terminates the first time it iterates through all the comparisons without making any swaps, which it keeps track of by using the `swapped` variable.

The inner `for` loop handles the task of comparing the values of each pair of consecutive elements and swapping them if the first element of the pair is greater than the second. For swapping we use the destructuring assignment, e.g.,

[a, b] = [b, a] */