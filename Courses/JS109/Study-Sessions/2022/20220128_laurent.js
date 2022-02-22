/* 🦁🐱 Count Animals 🐶🐺

Mubashir needs your help to find out number of animals hidden in a given string txt.

You are provided with an array of animals given below:

animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]

Rule: Return the maximum number of animal names. See the below example:

txt = "goatcode"

countAnimals(txt) ➞ 2
// First animal = "dog"
// Remaining string = "atcoe",
// Second animal = "cat".
// count = 2 (correct)

// If you got a "goat" first time
// remaining string = "code",
// no animal will be found during next time.
// count = 1 (wrong)

Examples

countAnimals("goatcode") ➞ 2
// "dog", "cat"

countAnimals("cockdogwdufrbir") ➞ 4
// "cow", "duck", "frog", "bird"

countAnimals("dogdogdogdogdog") ➞ 5 */

// console.log(countAnimals('dogcat') === 2);
// console.log(countAnimals('bcaatt') === 2);
// console.log(countAnimals('dopig') === 1);
// console.log(countAnimals('goatcode') === 2);
// console.log(countAnimals('dogdogdogdogdog') === 5);
// console.log(countAnimals('cockdogwdufrbir') === 4);

/*/* 🦁🐱 Count Animals 🐶🐺

Mubashir needs your help to find out number of animals hidden in a given string txt.

You are provided with an array of animals given below:

animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]

Rule: Return the maximum number of animal names. See the below example:

txt = "goatcode"

countAnimals(txt) ➞ 2
// First animal = "dog"
// Remaining string = "atcoe",
// Second animal = "cat".
// count = 2 (correct)

// If you got a "goat" first time
// remaining string = "code",
// no animal will be found during next time.
// count = 1 (wrong)

Examples

countAnimals("goatcode") ➞ 2
// "dog", "cat"

countAnimals("cockdogwdufrbir") ➞ 4
// "cow", "duck", "frog", "bird"

countAnimals("dogdogdogdogdog") 5

PROBLEM
- input a string
- output: a number

Rules
- return count of maximum animal names found in the string
- given an array of animal names
- implicit that you can only use each letter of the string once

EXAMPLES
- done

DATA STRUCTURE
- input: string
- intermediary: split into an array (splice?)
- output: number

ALGORITHM
- input string
- initialize `count` to 0
- how to compare substrings in string to values in the array, but can only do this once for each letter
- regex?

- return `count`
*/

// let animals = ["dog", "cat", "bat", "cock", "cow", "pig",
// "fox", "ant", "bird", "lion", "wolf", "deer", "bear",
// "frog", "hen", "mole", "duck", "goat"]

// function countAnimals(string) {
//   let count = 0;

//   for (let idx = 0; idx < animals.length; idx++) {
//     let animal = animals[idx];
    
//   }


//   return count;
// }

// console.log(countAnimals('dogcat') === 2);
/* 'dog' and 'cat'

// console.log(countAnimals('bcaatt') === 2);
// /* 'cat' and 'bat'
// cons
// console.log(countAnimals('dpoig') === 1);
// /* 'pig' 'pig' & 'gdiopi' => how do you check that 'pig' is contained in 'gdiopi'?

// console.log(countAnimals('goatcode') === 2);
// /* 'goatcode' => 'cat' => 'gaode' can get 'dog'

// console.log(countAnimals('dogdogdogdogdog') === 5);
// console.log(countAnimals('cockdogwdufrbir') ==
*/

let animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]

function countAnimals(string) {
  const countLetters = string => {
    let counter = {};

    for (let index = 0; index < string.length; index += 1) {
      let char = string[index];
      if (!counter[char]) counter[char] = 1;
      else counter[char] += 1;
    }

    return counter;
  }

  const isCount1Contained = (count1, count2) => {
    for (let char in count1) {
      if (count1[char] > count2[char] || !count2[char]) return false
    }

    return true;
  }

  let stringCount = countLetters(string);
  let arrayCounts = animals.map(countLetters);

  for (let index = 0; index < arrayCounts.length; index += 1) {
    let count = arrayCounts[index];

    let filteredCount = arrayCounts.filter(count => isCount1Contained(count, stringCount));
  }
}

console.log(countAnimals('dogcat') === 2);
/* 'dog' and 'cat' */
// console.log(countAnimals('bcaatt') === 2);
/* 'cat' and 'bat' */
// console.log(countAnimals('dopig') === 1);
/* 'pig' */
// console.log(countAnimals('goatcode') === 2);
/* 'cat'  and 'dog' */
// console.log(countAnimals('dogdogdogdogdog') === 5);
// console.log(countAnimals('cockdogwdufrbir') === 4);= 4);