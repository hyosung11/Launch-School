/* JS101 - Small Problems > Easy 4 > 9. Letter Counter (Part 2)

Letter Counter (Part 2)

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4. */

function wordSizes(words) {
  let count = {};
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

// Examples:
console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes('')); // {}

/* Discussion

The only change this solution makes to the function, is to make sure that it does not count non-letter characters in determining word sizes. It does this by first removing all non-letter characters from each word using the `removeNonLetters` function. Then it performs the tallying of the word sizes.

This part of the code `count[cleanWordSize] = count[cleanWordSize] || 0`; might look confusing to you so let's explain it in more detail. JavaScript uses short-circuit evaluation for logical operators `||` and `&&`. The Logical OR operator (`||`) returns the value of its second operand if the first one is "falsy"; otherwise the value of the first operand is returned. "Falsy" values are those that coerce to `false` when used in boolean context. In JavaScript they are `null`, `undefined`, `NaN`, `""`(empty string), `0` and of course `false`. In our example `count[cleanWordSize]` will be assigned the value of `count[cleanWordSize]` if it is "truthy" value; otherwise, `0` will be assigned to it. The overall effect is that it guarantees that `count[cleanWordSize]` has a numeric value so we can safely add `1` to it on the next line. */