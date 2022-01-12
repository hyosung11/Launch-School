/* Extract the domain name from a URL - 5 kyu

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

PROBLEM
- input: string
- output: string as substring of input string representing the domain name

Rules
- return the domain name from the string
- domain name is the second set of letters in the string
- domain name follows two forward slashes '//' or a '.'
- domain name is followed by a '.'

EXAMPLES
- 'www.xakep.ru') === 'xakep'
- 'https://youtube.com' === 'youtube'

DATA STRUCTURE
- input: string
- intermediary: array
- output: new string

ALGORITHM
- input string
- initialize `result` to empty string
- split string into array of chars
- iterate through chars
- return `result` substring
*/

function domainName(url) {
  url = url.replace('www.', '');
  url = url.replace('http://', '');
  url = url.replace('https://', '');

  return url.split('.')[0]; // 'xakep' . 'ru'
}

console.log(domainName('http://google.com') === 'google');
console.log(domainName('http://google.co.jp') === 'google');
console.log(domainName('www.xakep.ru') === 'xakep');
console.log(domainName('https://youtube.com') === 'youtube');

console.log(
  domainName('https://www.tfrb5uf4ccpvq3t8ukfoxea.org') ===
    'tfrb5uf4ccpvq3t8ukfoxea'
);

/* Given two strings s and t, return true if t is an anagram of s, and false otherwise. */

function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("anagram", "nagaram") === true);
console.log(isAnagram("rat", "car") === false);

/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

function isAnagram(str1, str2) {
  // sort the letters in descending order
  const sortString = string => string.split('').sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;
  })
  .join('');

  console.log(sortString(str1));
  return sortString(str1) === sortString(str2);
}

console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("anagram", "nagaram") === true);
console.log(isAnagram("rat", "car") === false);

/* FizzBuzz
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

function fizzBuzz(num) {
  let result = [];
  for (let idx = 1; idx <= num; idx++) {
    if (idx % 3 === 0 && idx % 5 === 0) result.push('FizzBuzz')
    else if (idx % 5 === 0) result.push('Buzz');
    else if (idx % 3 === 0) result.push('Fizz');
    else result.push(String(idx));
  }

  return result;
}

console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

PROBLEM
- input two number arrays
- output: array with number or numbers common to both, even if numbers occur in both arrays more than once, just return one instance of the number in the result array

ALGORITHM
- input two arrays
- initialize `result` to empty array
- iterate through nums of num1 array
  - if num is in nums2 and not in `result`
  - push num to result
- return result array
*/

// function intersection(nums1, nums2) {
//   let result = [];

//   nums1.forEach(num => {
//     if (nums2.includes(num) && !result.includes(num)) result.push(num)
//   })

//   return result;
// }

// Laurent's Version
// function intersection(arr1, arr2) {
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);

//   arr1 = arr1.filter((nb, idx) => nb !== arr1[idx + 1]);
//   arr2 = arr2.filter((nb, idx) => nb !== arr2[idx + 1]);

//   return arr1.filter((nb) => arr2.includes(nb));
// }
// Refactor
function intersection(arr1, arr2) {
  arr1.sort((a, b) => a - b);

  arr1 = arr1.filter((nb, idx) => nb !== arr1[idx + 1]);

  return arr1.filter((nb) => arr2.includes(nb));
}

// console.log(intersection([1,2,2,1], [2,2])); // [2]
// console.log(intersection([4,9,5], [9,4,9,8,4])); // [9,4] or [4,9]


console.log(intersection([1,2,2,1], [2,2])); // [2]
console.log(intersection([4,9,5], [9,4,9,8,4])); // [9,4] or [4,9]