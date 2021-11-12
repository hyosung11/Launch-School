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

### 1. Repeat sequences of characters in a string

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

```js
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
