// selection
// let numbers = [1, 3, 9, 11, 1, 4, 1];
// let ones = [];

// for (let counter = 0; counter < numbers.length; counter++) {
//   let currentNum = numbers[counter];

//   if (currentNum === 1) {
//     ones.push(currentNum); // appends currentNum to the ones array
//   }
// }

// console.log(ones); // => [1, 1, 1]

// transformation
// let fruits = ['apple', 'banana', 'pear'];
// let transformedElements = [];
// let counter = 0;

// while (counter < fruits.length) {
//   let currentElement = fruits[counter];
//   transformedElements.push(currentElement + 's');
//   counter += 1;
// }


// console.log(transformedElements); // => ['apples', 'bananas', 'pears']
// console.log(fruits);

// Extracting to Functions
// function selectVowels(str) {
//   let selectedChars = '';

//   for (let counter = 0; counter < str.length; counter += 1) {
//     let currentChar = str[counter];

//     if ('aeiouAEIOU'.includes(currentChar)) {
//       selectedChars += currentChar;
//     }
//   }

//   return selectedChars;
// }

// console.log(selectVowels('the quick brown fox')); // => 'euioo'

// let sentence = 'I wandered lonely as a cloud'
// console.log(selectVowels(sentence)); // => 'Iaeeoeaaou'
// console.log(sentence); // => 'I wandered lonely as a cloud'

// let numberOfVowels = selectVowels('hello world').length;
// console.log(numberOfVowels); // => 3

/* Let's look at an example with objects. In this example, we want to select the key-value pairs where the value is 'Fruit'. */

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(produceList) {
//   let produceKeys = Object.keys(produceList);
//   let selectedFruits = {};

//   for (let counter = 0; counter < produceKeys.length; counter++) {
//     let currentKey = produceKeys[counter];
//     let currentValue = produceList[currentKey];

//     if (currentValue === 'Fruit') {
//       selectedFruits[currentKey] = currentValue;
//     }
//   }

//   return selectedFruits;
// }

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

/* We'll now move on to examples of some functions that perform transformations. The function below multiplies each element in an array by 2. */


// function doubleNumbers(numbers) {
//   let doubledNumbers = [];
//   let counter = 0;

//   while (counter < numbers.length) {
//     let currentNumber = numbers[counter];
//     doubledNumbers.push(currentNumber * 2);

//     counter += 1;
//   }

//   return doubledNumbers;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

/* ===================================================================
 Can you implement a doubleNumbers function that mutates its argument? */

// function doubleNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     let currentNumber = numbers[counter];
//     numbers[counter] = currentNumber * 2;

//     counter += 1;
//   }

//   return numbers;
// }

// shortened version of above
// function doubleNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     numbers[counter] *= 2;

//     counter += 1;
//   }

//   return numbers;
// }

// let numbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(numbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(numbers); // => [2, 8, 6, 14, 4, 12]

// This function only transforms a subset of elements in the collection; aka an identity transformation

// function doubleOddNumbers(numbers) {
//   let doubledNumbers = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];

//     if (currentNumber % 2 === 1) {
//       doubledNumbers.push(currentNumber * 2);
//     } else {
//       doubledNumbers.push(currentNumber);
//     }
//   }

//   return doubledNumbers;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddNumbers(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// // not mutated
// console.log(myNumbers);; // => [1, 4, 3, 7, 2, 6]

/* Here's an exercise for you: suppose we wanted to transform the numbers based on their position in the array rather than their value? Try coding a solution that doubles the numbers that have odd indices: */


// function doubleNumbersWithOddIndices(numbers) {
//   let doubledNumbers = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];

//     if (counter % 2 === 1) {
//       doubledNumbers.push(currentNumber * 2);
//     } else {
//       doubledNumbers.push(currentNumber);
//     }
//   }

//   return doubledNumbers;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbersWithOddIndices(myNumbers)); // => [ 1, 8, 3, 14, 2, 12 ]

/* Recall earlier we wrote a selectFruit function that selected fruits out of the produceList object of fruits and vegetables. Suppose we wish to select generic produce types; we want to be able to specify whether we're interested in selecting fruits or vegetables or some other kind of produce, entirely. Here's how we could build such a function: */

// function selectType(produceList, selectionCriterion) {
//   let produceKeys = Object.keys(produceList);
//   let selectedItems = {};

//   for (let counter = 0; counter < produceKeys.length; counter++) {
//     let currentKey = produceKeys[counter];
//     let currentValue = produceList[currentKey];

//     // used to be (currentValue === 'Fruit')
//     if (currentValue === selectionCriterion) {
//       selectedItems[currentKey] = currentValue;
//     }
//   }

//   return selectedItems;
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// console.log(selectType(produce, 'Fruit')); // => {apple: 'Fruit', pear: 'Fruit'}
// console.log(selectType(produce, 'Vegetable')); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
// console.log(selectType(produce, 'Meat')); // => {}

/* Try coding a function that lets you multiply every array item by a specified value. As with doubleNumbers, don't mutate the array, but return a new array instead. */

function multiply(numbers, multiplier) {
  let multipliedNumbers = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    multipliedNumbers.push(currentNumber * multiplier);
  }

  return multipliedNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
