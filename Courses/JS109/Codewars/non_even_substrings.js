/* Non-even substrings

Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples. */


// function solve(s){
//   // initialize counter
//   let counter = 0;
//   // iterate over string characters
//   for (let idx = 0; idx < s.length; idx++) {
//     // if number is odd, increment counter by the value of its index + 1 (explanation below)
//     if (Number(s[idx]) % 2 === 1) {
//       counter += idx + 1;
//     }
//   }
//   return counter;
// };

/*
the idea behind the index + 1 is that if the number is odd, any substrings that end with it
will always be odd. so for example the number 1341, if we look at the last index, number 1, 
all of the substrings that end with the last 1 will always be odd: 1341, 341, 41, 1. So the 
index position tells us how many odd substrings we can count. if the number is even, 
we don't count anything because all substrings that end with it will be even. 
for example, 134, 34, and 4 are all even so we don't count those. 
*/

// function solve(string) {
//   let counter = 0;

//   for (let idx = 0; idx < string.length; idx++) {
//     let digit = string[idx];
//     if (Number(digit) % 2 === 1) {
//       counter += idx + 1;
//     }
//   }

//   return counter;
// }

/*
INPUT: string (string of integers -> "1234")
OUTPUT: number (number of odd-numbered substrings that can be formed)

RULES
- Given a string of integers, return the number of odd-numbered substrings that can be formed.
- find ALL substrings
- return substrings that represents a number that is odd (e.g. 1, 3, 41, 7)


EXPLORATION
"1341" -> "1", "13", "1"...
"341"  -> "3", "34", "341"
"41"   -> "4", "41"
...
"1"

ALGORITHM
- Find all the substrings of the number string
- get all the last number of each digit string
- filter all the numbers that are odd numbers
- count all the items in the odd numbers array
- return the count of all odd items
*/

function solve(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx++) {
    for (let jdx = idx + 1; jdx <= string.length; jdx++) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings.filter(num => Number(num[num.length - 1]) % 2 === 1).length;
}

// function solve(string) {
//   let substrings = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     // `jdx < string.length + 1` => what is this doing?
//     // I changed it to `jdx <= string.length` and it works
//     for (let jdx = idx + 1; jdx <= string.length; jdx++) {
//       substrings.push(string.slice(idx, jdx));
//     }
//   }
//   // check the last digit and see if it's odd
//   return substrings.filter(num => Number(num[num.length - 1]) % 2 === 1).length;
// }


// function solve(s){
//   let subStrArray = [];

//     for (let i = 0; i < s.length; i++) {
//       for (let j = i + 1; j < s.length + 1; j++) {
//           subStrArray.push(s.slice(i,j))
//       }
//     }
//   // console.log(s)
//   return subStrArray.filter(el =>Number(el[el.length - 1]) % 2 === 1).length
// };

console.log(solve('1341'));

console.log(solve("1341") === 7);
console.log(solve("1357") === 10);
console.log(solve("13471")=== 12);
console.log(solve("134721") === 13);
console.log(solve("1347231") === 20);
console.log(solve("13472315") === 28);

// Jack Aitken
// function solve(s) {
//   let allSubstrs = substrings(s);

//   let oddSubstrs = allSubstrs.filter((num) => {
//     return num[num.length - 1] % 2 !== 0;
//   });
//   return oddSubstrs.length;
// }

// function substrings(s) {
//   let arr = [];

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       arr.push(s.slice(i, j));
//     }
//   }
//   return arr;
// }