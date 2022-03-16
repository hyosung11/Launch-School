/* Interview Assessment Problem

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in either the input or output arrays. The order of the numbers in the input array should not matter.

6:07 start
06:39

PROBLEM
- in: arr of nums
- out: nested arr of num pairs

Rules:
- return an array of arrays, each comprised of nums with a difference of 2
- numbers can only appear once
- empty arr returns empty arr

ALGO
init results
init usedNums
iterate through arr
  if arr includes arr[idx] + 2 and usedNums does not include arr[idx]
    -push ([arr[idx], arr[idx] + 2]) to results
    -push arr[idx] and arr[idx] + 2 to usedNums
*/

function pairedNums(arr) {
  let results = [];
  let usedNums = [];
  arr.sort((a, b) => a - b);
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr.includes(arr[idx] + 2) && !usedNums.includes(arr[idx])) {
      results.push([arr[idx], arr[idx] + 2]);
      usedNums.push(arr[idx], arr[idx] + 2);
    }
  }
  return results;
}

console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7])); // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27])); // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]

function pairedNums(array) {
  let result = [];

  array.sort((a, b) => a - b);

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array.includes(array[idx] + 2) && !isAlreadyThere(array[idx], result)) {
      result.push([array[idx], array[idx] + 2]);
    }
  }

  return result;
}

function isAlreadyThere(number, arr) {
  if (arr.length === 0) return false;
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx][1] === number) return true;
  }
  return false;
}

/* Super Reduced String

Steve has a string of lowercase characters in range ascii[["a".."z"]]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation, he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, return "Empty String".

Case
- superReducedString("aaabccddd") ➞ "abd"

Explanation:
- "aaabccddd" -> "abccddd" -> "abddd" -> "abd"

PROBLEM
- in: str
- out: str

Rules:
- if there are two consecutive char that are the same, delete both of them
- a third consec will be left intact

Examples
- superReducedString("cccxllyyy") ➞ "cxy"
- superReducedString("aa") ➞ "Empty String"
- superReducedString("baab") ➞ "Empty String"
- superReducedString("fghiiijkllmnnno") ➞ "fghijkmno"
- superReducedString("chklssstt") ➞ "chkls"

ALGO
- init result = ''

loop through str
  if str[idx] === str[idx + 1]
    - idx+= 2
  else result += str[idx]
return result
06:43 start

*/

// not solved yet by Alex during our study session
function superReducedString (str) {
  let result = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === str[idx + 1]) {
        idx += 1;
    } else {
      result += str[idx];
    }
  }
  return result;
}

console.log(superReducedString("bccddb")) // === "Empty String");
console.log(superReducedString("zzzhhnnttti") === "zti");
console.log(superReducedString("nnncqwerhhhou") === "ncqwerhou");
console.log(superReducedString("abbccddfghiaklmno") === "afghiaklmno");
console.log(superReducedString("") === "Empty String");
console.log(superReducedString("qqq") === "q");
console.log(superReducedString("rthiioouusss") === "rths");
console.log(superReducedString("acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj") === "acdqgacdqj");