/* Sort Arrays (Ignoring Case) - 6 kyu

Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

PROBLEM
- input: array of words
- output array of words arranged in alphabetical order

Rules
- return an array of strings sorted in alphabetical order based on the first letter in each string
- case insensitive

EXAMPLES
- ["C", "d", "a", "B"]) -->  ["a", "B", "C", "d"]

DATA STRUCTURE
- input array of strings
- iterate through string elements
  - sort by the first char in each element
- return new array of strings in alphabetical order
*/

function sortme(array) {
  let sorted = array.sort((a, b) => {
      a = a.toLowerCase()
      b = b.toLowerCase();
      if (a > b) return 1;
      if (a < b) return -1;
      if (a === b) return 0;
    })

  return sorted;
}

// console.log(sortme(["C", "d", "a", "B"])); //  ["a", "B", "C", "d"])
// console.log(sortme(["Hello","there","I'm","fine"])); // ["fine", "Hello", "I'm", "there"])

// console.log(sortme(["CodeWars"])); // ["CodeWars"])
// console.log(sortme([])); // [])

console.log(sortme(["would","Fact","all","The","look","number","For","Their","for","Would","Leave","Woman","Other","his"])); // should equal ["all","Fact","For","for","his","Leave","look","number","Other","The","Their","Woman","would","Would"]