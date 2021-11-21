/* =============================

1. Progressions

Medium Problem
You're given an array of integers.  You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

/* Mat Boyle's Code
assumptions
  array will always be positive
  array will always be 3 or more elements


  request breakdown
  create a function
    given an array of integers return num of arithmetic progressions' of size 3 from the list
      arithmetic progressions is number in sequence increasing by the same amount (1,2,3)(1,3,5)(2,4,6)
    count each time one is found
    return the total number found


pseudocode

function progressions(array)
  set arithmeticProgressionsFound variable to 0

  outer loop - loop through the array for the first element end array at 3rd to last item in array
    middle loop - sets the second element in the array to check start with 2nd item in the loop and ends with 2nd to last item in array
    inner loop - runs through the last item in teh array, starting with the third element until the last element
      if array[middleLoop] - array[outerLoop] equals array[innerLoop] - array[middleLoop]
        increase arithmeticProgressionsFound by 1 */