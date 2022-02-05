/* Deepak in yoga teaching before and physician before that ...

My problem

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in math. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

PROBLEM
- input: recipe object, and ingredients object
- output: number of whole cakes that can be made

Rules
- return the number of whole cakes that can be made with the available ingredients divided evenly into the recipe amounts
- if ingredient required for the recipe is not available, return 0
- disregard units
- number of cakes is limited by the value of the item whose multiple is the least

EXAMPLES
- flour needed is 500, and available is 1200, so 2 whole cakes can be made
- in this example all the other available ingredients were more than multiple of 2

DATA STRUCTURE
- input two objects
- intermediary: ?
- output number

ALGORITHM
- input `recipe` object and `available` object
- initialize `result` to empty array
- if required ingredient for recipe is not in available, return 0
- iterate through `recipe` object
  - divide the available value by the recipe value for each item of the recipe
  - push this value as the lowest whole number into the `result` array
- find the lowest whole number
- return lowest value in `result` array
*/

function cakes(recipe, available) {
  let result = [];

  for (let item in recipe) { // hasOwnProperty()
    if (available.hasOwnProperty(item) === false) return 0;

    let amount = Math.floor(available[item] / recipe[item]);
    result.push(amount);
  }

  return Math.min(...result);
}

// Test cases:
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) === 2);

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}) === 0);

/* Feedback 31 minutes to solve the problem
17 minutes to plan out the code
test the code more frequently
intuition is good */

/* Deepak starts his problem here

14:33

`scrambleWords` Typoglycemia Generator

14:40 using node to test code is good

14:46 testing the helper function
14:50 finished helper function

14:58 end in 25 minutes

Background

There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

the first and last characters remain in original place for each word
characters between the first and last characters must be sorted alphabetically
punctuation should remain at the same place as it started, for example: shan't -> sahn't
Assumptions

words are seperated by single spaces
only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
special characters do not take the position of the non special characters, for example: -dcba -> -dbca
for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
ignore capitalisation

// Deepak starts here

Problem:
  Input: string
  Output: string

Algorithm:
  define `scrambleWords()` with the parameter `string`
    split `string` into an `arrayOfWords`
    transform every `word` in `arrayOfWords`
      `wordTransformer(word)`
    join `arrayOfWOrds`; return

  define `wordTransformer()` with the parameter `word`
    remove punctuations from `word`
    flip the word (create function??)
      leave first and last letter in place
      sort rest of the word
    add punctuation at the same place
      declare `resultString` and initialize it to ''
      set counter to through string with punctuation
      set counter to through string without punctuation

      if punctuationWord[counter] === a punctuation
        add punctuation
        increment a
      else
        add b to resultString
        increment a
        increment b
*/

function scrambleWords(string) {
  return string.split(' ').map(word => wordTransformer(word)).join(' ');
}

function wordTransformer(word) {
  let bareWord = word.replace(/[-',.]/g, '');
  let flippedWord = bareWord[0] + bareWord.slice(1, -1).split('').sort().join('') + bareWord.at(-1)

  let resultWord = '';

  let flippedWordCounter = 0;

  for (let wordCounter = 0; wordCounter < word.length; wordCounter += 1) {
    if (/[-',.]/.test(word[wordCounter])) {
      resultWord += word[wordCounter];
    } else {
      resultWord += flippedWord[flippedWordCounter];
      flippedWordCounter += 1;
    }
  }

  return resultWord;
}


// console.log(wordTransformer("sahn't"));


console.log(scrambleWords('professionals') === 'paefilnoorsss');
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg');
console.log(scrambleWords("shan't") === "sahn't");
console.log(scrambleWords('-dcba') === '-dbca');
console.log(scrambleWords('dcba.') === 'dbca.');
console.log(scrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth." ) === "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.");
