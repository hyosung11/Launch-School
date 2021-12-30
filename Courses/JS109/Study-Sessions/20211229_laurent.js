/* GrabScrab

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as an array, and output a list of words that the pirate might have meant.

Return matches in the same order as in the array. Return an empty array if there are no matches.

PROBLEM
- input string and an array of strings
- output: an array of strings

Rules
- find words in array that when unscrambled match the input string
- if no matches, return an empty array
- return matches in same order as in the array
- must use all the letters in the input string to match words in the array

EXAMPLES
- see below

DATA STRUCTURE
- input:

ALGORITHM
Approach 1: Counters
Declare a `count` function
Declare a variable `result` and assign it to an empty array

Declare a variable `stringCounter` and assign it the return value of the call of `count` function on the string
Counter {o: 1, r: 1, t: 1, s: 1, p: 1}

Iterate over the array
  Shortcut: if length is different from string length, it's not a match, next one
  Otherwise, we declare a variable `wordCounter` count the letters
  If both letters count match each other, add the string to `result`: go through each key and check if count for each value is the same

  Compare 2 object

Return `result`

Approach 2: eliminate letters and check if both strings are empty at the end
Take the first letter of the string
*/

function count(string) {
  let result = {};

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    result[char] ? (result[char] += 1) : (result[char] = 1);
  }

  return result;
}

function grabscrab(string, array) {
  const checkObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let char in obj1) {
      if (obj1[char] !== obj2[char]) return false;
    }

    return true;
  };

  let stringCounter = count(string); // {a: 1, b: 1}
  let result = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    let word = array[idx];
    if (word.length !== string.length) continue;
    let wordCounter = count(word); // {b: 1, a: 1, c: 1}

    if (checkObjects(stringCounter, wordCounter)) result.push(word);
  }

  return result;
}
// console.log(count('ortsp'));

console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); // Should return ["sport", "ports"].
console.log(grabscrab('trisf', ['first'])); // ["first"]);
console.log(grabscrab('oob', ['bob', 'baobab'])); // []);
console.log(grabscrab('ainstuomn', ['mountains', 'hills', 'mesa'])); // ["mountains"]);
console.log(grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop'])); // ["pool", "loop"]));
console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); // ["sport", "ports"]);
console.log(grabscrab('ourf', ['one', 'two', 'three'])); // []);

function count(string) {
  let result = {};

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    result[char] ? (result[char] += 1) : (result[char] = 1);
  }

  return result;
}

// Refactored
// function checkObjects(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

//   for (let char in obj1) {
//     if (obj1[char] !== obj2[char]) return false;
//   }

//   return true;
// }

// function grabscrab(string, array) {
//   let stringCounter = count(string); // {a: 1, b: 1}
//   let result = [];

//   for (let idx = 0; idx < array.length; idx += 1) {
//     let word = array[idx];
//     if (word.length !== string.length) continue;
//     let wordCounter = count(word); // {b: 1, a: 1, c: 1}

//     if (checkObjects(stringCounter, wordCounter)) result.push(word);
//   }

//   return result;
// }

function grabscrab(string, array) {
  let result = [];
  string = string.split('').sort().join('');

  for (let idx = 0; idx < array.length; idx += 1) {
    let word = array[idx];
    if (word.length !== string.length) continue;
    let sortedWord = word.split('').sort().join('');
    if (string === sortedWord) result.push(word);
  }

  return result;
}