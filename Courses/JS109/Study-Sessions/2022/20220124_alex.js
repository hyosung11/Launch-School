/* Who likes it? - 6 kyu

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

PROBLEM
in: array
out: string

Rules
- return a string as follows
  - if empty array, return 'no one likes this'
  - if array length is 1, return 'Name likes this'
  - if array length is 2, return 'Nam and name like this'
  - if array length is 3, return name1, name2, name3 like this
  - if array length is > 3 return name1, name2, and (array length - 2) others like this

EXAMPLES
- see below

DATA STRUCTURE
- input array
- intermediary: string
- output: string

ALGORITHM
- input array
- return a string as follows
  - if empty array, return 'no one likes this'
  - if array length is 1, return 'Name likes this'
  - if array length is 2, return 'Nam and name like this'
  - if array length is 3, return name1, name2, name3 like this
  - if array length is > 3 return name1, name2, and (array length - 2) others like this
*/

// function likes(array) {
//   if (array.length === 0) return 'no one likes this';
//   if (array.length === 1) return `${array[0]} likes this`;
//   if (array.length === 2) return `${array[0]} and ${array[1]} like this`;
//   if (array.length === 3) return `${array[0]}, ${array[1]} and ${array[2]} like this`;
//   if (array.length > 3) return `${array[0]}, ${array[1]} and ${array.length - 2} others like this`;
// }


// console.log(likes([]) === 'no one likes this');
// console.log(likes(['Peter']) === 'Peter likes this');
// console.log(likes(['Jacob', 'Alex']) === 'Jacob and Alex like this');
// console.log(likes(['Max', 'John', 'Mark']) === 'Max, John and Mark like this');
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']) === 'Alex, Jacob and 2 others like this');

/* ============================
Find the Parity Outlier - 6 kyu

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

PROBLEM
in: array
out: number

Rules
-input arr length is 3 or more
- arr contains either all odd with one even or all even with one odd
-we need to find and return the one even or odd number, depending on the makeup of the rest of the array

DATA STRUCTURES
in: arr
between: input arr
out: number

ALGO
create evenCount variable = 0
create oddCount variable = 0
iterate through arr
  - if element % 2 = 0, then evenCount += 1
  - else oddCount += 1
  if oddCount or evenCoun === 2, break

if oddCount === 2, 
  Iterate through arr
    if element % 2 == 0, return element

if evenCount === 2, 
  Iterate through arr
    if element % 2 == 1, return element
*/

// Alex's Solution
function findOutlier(array) {
  let evenCount = 0;
  let oddCount = 0;

  for (let idx = 0; idx < array.length; idx++) {
    let num = array[idx];
    if (num % 2 === 0) evenCount += 1;
    if (num % 2 === 1) oddCount += 1;
    if (oddCount === 2 || evenCount === 2) break;
  }

  if (oddCount === 2) {
    let arr = array.filter(num => num % 2 === 0);
    return arr[0];
  }
  if (evenCount === 2) {
    let arr = array.filter(num => num % 2 === 1);
    return arr[0];
  }
}

/* HyoSung's Solution
ALGO
- input array of numbers
- initialize `odds` to empty array
- initialize `evens` to empty array
- iterate through array
  - if num at idx divided by 2 remainder is 1, append to odds
  - if num at idx divided by 2 is remainder 0, append to evens
- if odds length is 1, return odds num at idx 0
- if evens length is 1, return evens num at idx 0
*/

// function findOutlier(array) {
//   let odds = [];
//   let evens = [];

//   for (let idx = 0; idx < array.length; idx++) {
//     let num = array[idx];
//     if (num % 2 === 1) odds.push(num);
//     if (num % 2 === 0) evens.push(num);
//   }

//   if (odds.length === 1) return odds[0];
//   if (evens.length === 1) return evens[0];
// }

// this version passes codewars tests
// function findOutlier(integers) {
//   let evens = [];
//   let odds = [];

//   integers.forEach(int => {
//     if (int % 2 === 0) evens.push(int);
//     else odds.push(int);
//   });

//   if (evens.length > 1) return odds[0];
//   return evens[0];
// }

// console.log(findOutlier([0, 1, 2]) === 1);
// console.log(findOutlier([1, 2, 3]) === 2);
// console.log(findOutlier([2,6,8,10,3]) === 3);
// console.log(findOutlier([0,0,3,0,0]) === 3);
// console.log(findOutlier([1,1,0,1,1]) === 0);



