/* 6:13 Prepping for Study Session */

/* Pete, the baker (part 2) - 6 kyu

Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. He also might have added some of the ingredients already, but something is missing. Can you help him to find out, what he has to add to the mixture?

Requirements:

- Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that. That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
- If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty object then.
- If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
- For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
- Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.

Examples:

var recipe = {flour: 200, eggs: 1, sugar: 100};

getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}

getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}

getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}

PROBLEM
-in:obj, obj
-out: object

Rules:
-return a obj comprised of the missing amount of each ingredient in the recipe in order to make the next complete cake
-in second obj, if any properties of first object are missing, assume they have a value of 0
-if any of the values in obj2 exceed that property value in obj1,
  find the greatest result (k) when each property value in obj2 is divided by that property value in obj1 and round up (Math.ceil)
  -multiply each value in obj1 by multiple, then follow previous subtraction scheme below
-return object in which the second obj values have been subtracted from first

let k = 1
-while obj1[property] < obj2[property], obj1[property] = obj1[property * k]
k += 1

*/

function getMissingIngredients(recipe, alreadyHas) {
  let multiple = 1;
  let result = {};

  for (let item in recipe) {
    if (!alreadyHas[item]) alreadyHas[item] = 0;
    if ((alreadyHas[item] / recipe[item]) > multiple) {
      multiple = Math.ceil(alreadyHas[item] / recipe[item]);
    }
  }

  for (let item in recipe) {
    let value = recipe[item] * multiple - alreadyHas[item]
    if (value) {
      result[item] = value;
    }
  }

  return result;
}

var recipe = {flour: 200, eggs: 1, sugar: 100};

console.log(getMissingIngredients(recipe, {flour: 50, eggs: 1})); // must return {flour: 150, sugar: 100}

console.log(getMissingIngredients(recipe, {})); // must return {flour: 200, eggs: 1, sugar: 100}

console.log(getMissingIngredients(recipe, {flour: 500, sugar: 200})); // must return {flour: 100, eggs: 3, sugar: 100}


function getMissingIngredients(recipe, added) {
  // if item is empty, then find the difference
  // if item does not exist, then create each item
  // quantity must be multiples of the recipe

  const recipeKeys = Object.keys(recipe);
  const addedKeys = Object.keys(added);
  let obj = {};
  let multiples = 1;
  // let tempMaxMultiple;

  for (ingredient of addedKeys) {
    let tempMaxMultiple = Math.ceil(added[ingredient] / recipe[ingredient]);
    if (tempMaxMultiple > 1) {
      if (tempMaxMultiple > multiples) multiples = tempMaxMultiple;
    }
  }

  for (let ingredient of recipeKeys) {
    if (added[ingredient]) {
      if (multiples * recipe[ingredient] - added[ingredient] !== 0) {
        obj[ingredient] = multiples * recipe[ingredient] - added[ingredient];
      }
    } else {
      obj[ingredient] = multiples * recipe[ingredient];
    }
  }
  return obj;
}


/* Is Integer Array - 6 kyu

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

- returns true / True if every element in an array is an integer or a float with no decimals.
- returns true / True if array is empty.
- returns false / False for every other input.
*/

function isIntArray(array) {
  if (!Array.isArray(array)) return false;
  return array.every(int => Number.isInteger(int));
}

console.log(isIntArray([]) === true); // 'Input: []';
console.log(isIntArray([1, 2, 3, 4]) === true); // 'Input: [1, 2, 3, 4]';
console.log(isIntArray([1, 2, 3, NaN]) === false); // 'Input: [1, 2, 3, NaN]';