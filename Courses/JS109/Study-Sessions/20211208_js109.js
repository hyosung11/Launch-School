/* JS109 Study Session with Antonina

Introductions
- Antonina, Greece, student and TA
- H
- Allison, TX, JS109 Interview
- Alex, NJ
- Chris, north of Phoenix, studying for written
- Jared, Rochester, NY, studying for written
- Will, Denver, JS109 written

1. The maximum sum subarray problem consists in finding the maximum sum
of a contiguous subsequence in an array of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
-- should be 6: [4, -1, 2, 1]
Easy case is when the array is made up of only positive numbers and
the maximum sum is the sum of the whole array.
If the array is made up of only negative numbers, return 0 instead.
An empty array is considered to have zero greatest sum.
Note that the empty array is also a valid argument array.

Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

2 Problem Description
Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"
*/