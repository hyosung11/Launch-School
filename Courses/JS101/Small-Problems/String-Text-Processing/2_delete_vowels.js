/* JS101 - Small Problems > String and Text Processing > 2. Delete Vowels

Delete Vowels

Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed. */

// Solution 1 - regex
function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ''));
}

// Solution 2
function removeVowels(stringArray) {
  return stringArray.map(string => {
    let chars = string.split('');
    let removedVowels = deleteVowels(chars);
    return removedVowels.join('');
  });
}

function deleteVowels(string) {
  let VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return string.map(char => {
    if (VOWELS.indexOf(char) >= 0) {
      return '';
    } else {
      return char;
    }
  });
}

// Examples:
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]

/* Approach/Algorithm

You can look at this exercise as containing two parts. The first part is transforming the array argument into another array. The second part is processing the strings and transforming them into new strings that do not have vowels. Note that the first part is dependent on the result of the second part (Hint: think "nested").

Discussion

The first solution uses `String.prototype.replace()` method to remove all of the vowels from each string. We use `map()` to iterate through the array since it is ideal for transformations like this.

In the second solution, we use a helper function `deleteVowels` which removes all the vowels from the given array. In the `removeVowels` function, we are calling the `map` method on the given array of strings. This method returns a new array with all the elements of the original array transformed based on the return value of the callback function. Within the callback function we are splitting the string into array of characters, removing all the vowels from this array using our helper `deleteVowels` function and finally joining this new array into string again and returning it from the function.

If we compare first and second solution we can see how much regex can simplify some very complex operations. */

/* Kowshik
- initialize `vowels` to all vowels
- iterate through each string in strings array
  - iterate through each char of each string
    - check if char is a vowel
      - exclude if vowel
      - include if not a vowel
- return strings without vowels */

// function removeVowels(stringArray) {
//   let vowels = 'AEIOUaeiou';
//   return stringArray.map(string => {
//     return string.split('').filter(char => !(vowels.includes(char))).join('');
//   });
// }

// Elaine Vuong
// function isVowel(char) {
//   return 'aeiou'.includes(char.toLowerCase());
// }

// function nonVowelString(string) {
//   return string
//     .split('')
//     .filter((char) => !isVowel(char))
//     .join('');
// }

// function removeVowels(strArr) {
//   return strArr.map((string) => nonVowelString(string));
// }