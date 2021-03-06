/* Pete, the Baker - 5 kyu

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in math. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

PROBLEM
- input
  - object containing recipe ingredients
  - object containing available ingredients
- output number

Rules
- return number representing how many cakes can be made with the available ingredients
- if ingredient not in object its value is 0

EXAMPLES
- see below

DATA STRUCTURE
- input recipe object, ingredients object
- intermediary: array?
- output: number

ALGORITHM
- input recipe object and ingredients object
- initialize `cakeCount` to empty array
- iterate through the items in recipe
  - if recipe item's value is greater than the item's value in ingredients or
  - if ingredient item doesn't exist
    - return 0
  - otherwise initialize `cake` to the value of dividing the ingredient item value by the recipe item value and take the floor of that
    - push `cake` to `cakeCount
- return `cakeCount` lowest value as number of cakes that can be made
*/
function cakes(recipe, ingredients) {
  let cakeCount = [];

  for (let item in recipe) {
    if (recipe[item] > ingredients[item] || ingredients.hasOwnProperty(item) === false) {
      return 0;
    } else {
      let cake = Math.floor(ingredients[item] / recipe[item]);
      cakeCount.push(cake);
    }
  }

  return Math.min(...cakeCount);
}

// Examples
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // must return 2

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // must return 0

// function cakes(recipe, ingredients) {
//   let cakeCount = [];

//   for (let item in recipe) {
//     if (
//       recipe[item] > ingredients[item] ||
//       ingredients.hasOwnProperty(item) === false
//     ) {
//       return 0;
//     } else {
//       let cake = Math.floor(ingredients[item] / recipe[item]);
//       console.log(cake);
//       cakeCount.push(cake);
//     }
//   }

//   return Math.min(...cakeCount);
// }

// function cakes(recipe, available) {
//   let cakeCount = 0;

//   while (true) {
//     for (let key in recipe) {
//       available[key] -= recipe[key];
//     }

//     if (Object.values(available).every((count) => count >= 0)) {
//       cakeCount++;
//     } else break;
//   }

//   return cakeCount;
// }

// function cakes(recipe, available) {
//   // initialize cakeCount
//   let cakeCount = 0;
//   // start a while loop
//   while (true) {
//     // use a for...in loop to subtract the recipe's ingredients from available ingredients
//     for (let ing in recipe) {
//       available[ing] -= recipe[ing];
//     }
//     // check if any of the available ingredients are negative. if none are, increment cakeCount (it means we have enough)
//     if (Object.values(available).every((count) => count >= 0)) {
//       cakeCount++;
//       // if any of them are negative, it means we don't have enough, so we break out of the while loop
//     } else break;
//   }
//   // return the count
//   return cakeCount;
// }

// function cakes(recipe, ingredients) {
//   let cakeCount = [];

//   for (let item in recipe) {
//     if (recipe[item] > ingredients[item] || ingredients.hasOwnProperty(item) === false) {
//       return 0;
//     } else {
//       let cake = Math.floor(ingredients[item] / recipe[item])
//       cakeCount.push(cake);
//     }
//   }

//   return Math.min(...cakeCount);
// }

/* Antonina's Solution
Inputs:
  -object (recipe)
  -object (available ingredients)
Output: integer

Rules:
- if some ingredient does not exist in an object, its value can be considered to be 0
- return maximum number of cakes that can be baked using the available ingredients

Algorithm:
- create an empty array
- for each ingredient in the `recipe` object
  - divide the available amount of that ingredient in the available ingredients object
     - and keep the integer part of the result and push it in the array
  - if an ingredient does not exist in the available ingredients object, push 0
     to the array
- return the minimum number from the array
*/

function cakes(recipe, available) {
  let count = [];

  for (let item in recipe) {
    if (!available[item]) count.push(0);
    else count.push(Math.floor(available[item] / recipe[item]));
  }

  return Math.min(...count);
}