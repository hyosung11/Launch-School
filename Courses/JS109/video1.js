/* Courses > JS109 Assessment: Programming Foundations with JavaScript > Assessment JS109: JavaScript and General Programming > 7. Part 2: Study Guide for Interview > Video 1

Create a function that takes a positive integer and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1

Examples

console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(513) === 531); // true
console.log(nextBiggerNum(2017) === 2071); // true
console.log(nextBiggerNum(111) === -1); // true
console.log(nextBiggerNum(123456789) === 123456798); // true

1234 ==> 1243
1432 ==> 2134
2341 ==> 2413
876 ==> -1 // 1st > 2nd > 3rd -1
786 ==> 867 
123456789 ==>

ALGORITHM
- iterate from number1, number2 = number1 + 1
- compare digits. If true, return the new number
- iterate until number2 has more digits than number1 */

function compareDigits(number1, number2) {
  let array1 = number1.toString().split('').sort();
  let array2 = number2.toString().split('').sort();

  if (array1.length !== array2.length) {
    return false;
  }

  let i;

  for (i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
  }

  return true;
}

console.log(compareDigits(1234, 4321));