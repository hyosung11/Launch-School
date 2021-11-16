# JS109 Interview Assessment Questions

## Helper Functions

### Lowercase

```js
function isLowercase(char) {
  return char >= 'a' && char <= 'z';
}

console.log(isLowercase('%')); // false
```

### Uppercase

```js
function isUppercase(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(isUppercase('L')); // true
```

## String Processing Problems

### 1. Repeated sequences of characters included in the return string

1. Problem Description

Given the string of alphabetic characters limited to a-z, do as in the sample cases.

Each character in the string argument should appear in the returned string. The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)

The repeated sequences of a character should be separated by a hyphen in the returned string.

In the repeated sequences of a character included in the returned string, the first instance of the character should be uppercase. Subsequent instances of the character should be lowercase.

```js
function accum(string) {
  return string
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}

console.log(accum('Today'));
// 'T-Oo-Ddd-Aaaa-Yyyyy'
```

### 2. Word to Digit

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

(Uses an object as a lookup table)

```js
const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });
  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. In the zone. Thanks.'));
// =>  "Please call me at 5 5 5 1 2 3 4. In the zone. Thanks."
```

### 3. String to Object

Lettercase Percentage Ratio

Write a function that takes a string and returns an object containing the following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

```js
// declarative solution
function letterPercentages(string) {
  let percents = { lowercase: 0, uppercase: 0, neither: 0 }

  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      percents.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      percents.uppercase += 1;
    } else {
      percents.neither += 1;
    }
  });

  return calculatePercent(percents, string);
}

function calculatePercent(object, string) {
  for (let key in object) {
    object[key] = (object[key] / string.length * 100).toFixed(2);
  }
  return object;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
```

---

```js
// regex solution
function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither: percentage(/[^a-z]/gi)
  }
}
```

## Array Processing Problems

### Array to String

1. Problem Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.

```js
function commonPrefix(words) {
  let prefix = '';
  words.sort((a, b) => a.length - b.length);

  let substring = '';

  for (let index = 0; index < words[0].length; index += 1) {
    substring += words[0][index];
    if (words.every((word) => word.startsWith(substring))) {
      prefix = substring;
    }
  }
  return prefix;
}

// Test Cases
console.log(commonPrefix(["flower","flow","flight"]) === "fl"); // true
console.log(commonPrefix(["dog","racecar","car"])  === ""); // true
console.log(commonPrefix(["interspecies","interstellar","interstate"]) === "inters"); // true
console.log(commonPrefix(["throne","dungeon"]) === ""); // true
console.log(commonPrefix(["throne","throne"]) === "throne"); // true
console.log(commonPrefix([""]) === ""); // true
```

## Numbers

### Number to String

```js
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
```
