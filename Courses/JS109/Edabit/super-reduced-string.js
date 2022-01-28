/* Super Reduced String

Steve has a string of lowercase characters in range ascii[["a".."z"]]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation, he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, return "Empty String".

Case
- superReducedString("aaabccddd") ➞ "abd"

Explanation:
- "aaabccddd" -> "abccddd" -> "abddd" -> "abd"

Examples
- superReducedString("cccxllyyy") ➞ "cxy"
- superReducedString("aa") ➞ "Empty String"
- superReducedString("baab") ➞ "Empty String"
- superReducedString("fghiiijkllmnnno") ➞ "fghijkmno"
- superReducedString("chklssstt") ➞ "chkls"

PROBLEM
- input string
- output new string or "Empty String"

Rules
- return new string shorter than the input string with letters in adjacent pairs removed until only single occurrences of the letter are left, or "Empty String" if no more letters left
- implicit that if odd number of occurrences, an occurrence of letter will remain
- looks like all letters in input string are lowercase
- if input string is an empty string return "Empty String"
- implicit that you need to return the letters in the same order that they appeared in the input string (so can't sort the string)

EXAMPLES
- see above

DATA STRUCTURE
- input string
- intermediary
- output: string

ALGORITHM
- input string
- initialize `letters` to an array by splitting the input string at each character
- iterate over `letters`
    - if letters at current index and next index are the same,
      - remove letters at current index and next index
  - reset the idx to loop from the beginning `idx = -1`
- if `letters` length is 0, return "Empty String"
- return `letters` joined to make a string */

function superReducedString(string) {
  let result = string.split('');
  // console.log(result); [ 'b', 'c', 'c', 'd', 'd', 'b' ]

  for (let idx = 0; idx < result.length; idx++) {
    if (result[idx] === result[idx + 1]) {
      result.splice(idx, 2);
      // console.log(result);
      // [ 'b', 'd', 'd', 'b' ]
      // [ 'b', 'b' ]
      // []
      idx = -1; // <-- I can't find documentation on this
    }
  }

  if (result.length === 0) return 'Empty String';
  else return result.join('');
}

console.log(superReducedString("bccddb") === "Empty String");
console.log(superReducedString("zzzhhnnttti") === "zti");
console.log(superReducedString("nnncqwerhhhou") === "ncqwerhou");
console.log(superReducedString("abbccddfghiaklmno") === "afghiaklmno");
console.log(superReducedString("") === "Empty String");
console.log(superReducedString("qqq") === "q");
console.log(superReducedString("rthiioouusss") === "rths");
console.log(superReducedString("acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj") === "acdqgacdqj");