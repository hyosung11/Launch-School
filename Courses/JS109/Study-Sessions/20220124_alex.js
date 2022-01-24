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

function likes(array) {
  if (array.length === 0) return 'no one likes this';
  if (array.length === 1) return `${array[0]} likes this`;
  if (array.length === 2) return `${array[0]} and ${array[1]} like this`;
  if (array.length === 3) return `${array[0]}, ${array[1]} and ${array[2]} like this`;
  if (array.length > 3) return `${array[0]}, ${array[1]} and ${array.length - 2} others like this`;
}


console.log(likes([]) === 'no one likes this');
console.log(likes(['Peter']) === 'Peter likes this');
console.log(likes(['Jacob', 'Alex']) === 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']) === 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']) === 'Alex, Jacob and 2 others like this');

/* ============================
Find the Parity Outlier - 6 kyu

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */

console.log(findOutlier([0, 1, 2]) === 1);
console.log(findOutlier([1, 2, 3]) === 2);
console.log(findOutlier([2,6,8,10,3]) === 3);
console.log(findOutlier([0,0,3,0,0]) === 3);
console.log(findOutlier([1,1,0,1,1]) === 0);

/* Is Integer Array - 6 kyu

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

- returns true / True if every element in an array is an integer or a float with no decimals.
- returns true / True if array is empty.
- returns false / False for every other input.
*/

console.log(isIntArray([]) === true); // 'Input: []';
console.log(isIntArray([1, 2, 3, 4]) === true); // 'Input: [1, 2, 3, 4]';
console.log(isIntArray([1, 2, 3, NaN]) === false); // 'Input: [1, 2, 3, NaN]';

/* Reversing and Combining Text - 6 kyu

Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...
So what to do?

Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:

Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"
