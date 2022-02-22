/* 1844. Replace All Digits with Characters


Michael
11:06 start
11:20 algo
11:23 code ~ 17 minutes
11:28 finished with a problem that solved the test cases but not the problem

*/

/*
You are going to be given an array of integers. Your job is to take that array and find
an index N where the sum of the integers to the left of N is equal to the sum of the
integers to the right of N. If there is no index that would make this happen, return -1.

[1, 2, 3, 4, 3, 2, 1] returns 3. The sum of the left side of index 3 [1, 2, 3] and the sum
of the right side of the index [3, 2, 1] both equal 6.
these should all return true */

/* Algo
- input an array of numbers
- iterate the array
  - init `leftSide` to slice of array from 0 to idx
  - init `rightSide` to slice of array from idx + 1
- compute sume of leftSide
- compute sum of rightSide
- compare the values and
- return idx if sum of both sides is equal
- return -1 if not found */

function findEvenIndex(array) {
  for (let idx = 0; idx < array.length; idx++) {
    let leftSideSum = array.slice(0, idx).reduce((sum, num) => sum + num, 0)
    let rightSideSum = array.slice(idx + 1).reduce((sum, num) => sum + num, 0)
    console.log(leftSideSum, rightSideSum)

    if (leftSideSum === rightSideSum) return idx;
  }

  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) // === 3);
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1);
console.log(findEvenIndex([1,2,3,4,5,6]) === -1);
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3);
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0);
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6);
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3);