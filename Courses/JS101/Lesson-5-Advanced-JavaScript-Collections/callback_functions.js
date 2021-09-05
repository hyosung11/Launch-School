// Example 2
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]

// code check

function isPalindrome(num) {
  let str = String(num);
  if (str.length < 2) {
    return false;
  }

  return str === str.split('').reverse().join('');
}

function isValid(num) {
  return typeof num === "number" && num >= 0;
}

function palindrome(num, s) {
  let palindromeArray = [];

  if (!isValid(num) || !isValid(s)) {
    return 'Not valid';
  }

  while (palindromeArray.length < s) {
    if (isPalindrome(num)) {
      palindromeArray.push(num);
    }

    num += 1;
  }

  return palindromeArray;
}