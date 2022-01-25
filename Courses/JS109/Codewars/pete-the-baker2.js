/* Pete, the baker (part 2) - 6 kyu

Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. He also might have added some of the ingredients already, but something is missing. Can you help him to find out, what he has to add to the mixture?

Requirements:

- Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that. That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
- If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty hash then.
- If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
- For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
- Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.

Examples:

var recipe = {flour: 200, eggs: 1, sugar: 100};

getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}
getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}

PROBLEM
- input: `recipe` and `added` object of ingredients
- output: object of needed ingredients

Rules
- return an object that contains the needed ingredients in the right amount to complete one unit of the recipe or multiple units of the recipe to use the ingredients in `added` with the `recipe`
- if item value in `recipe` equals item value in `added` don't return in the `result` object
  - if item doesn't need to be added, don't add to `result`
  - e.g., recipe requires one egg, and added has an egg
- if amount added for an item is less than amount required in the recipe, add the difference to `result`
  - e.g., recipe has flour: 200, added has 50, so flour needs 150

EXAMPLES
- see below

DATA STRUCTURE
- input:
  - `recipe` which is an object of ingredients and their values
  - `added` which is an object of ingredients and their values that have already been added for the recipe
- intermediary: object
- output: new object with the missing ingredients and their values

ALGORITHM
- input `recipe` and `added`
- initialize `result` to empty object
- initialize `count` to 1
- iterate through `recipe` by item
  - if item not in added, set added item's value to 0
  - if added item's value divided by recipe item's value is greater than `count`
    - reassign `count` to the rounded up value of dividing added item's value by the recipe item's value (to make complete recipe units)
- iterate through recipe by item again
  - initialize `value` to recipe item times count and subtract added item's value
  - if `value` is truthy
    - assign the result item to that value
- return `result`

*/

function getMissingIngredients(recipe, added) {
  let result = {};
  let count = 1;

  for (let item in recipe) {
    if (!added[item]) added[item] = 0;
    if (added[item] / recipe[item] > count)
      count = Math.ceil(added[item] / recipe[item]);
  }

  for (item in recipe) {
    let value = (recipe[item] * count) - added[item];
    if (value) result[item] = value;
  }

  return result;
}

const recipe = {flour: 200, eggs: 1, sugar: 100};

console.log(getMissingIngredients(recipe, {flour: 50, eggs: 1})); // must return {flour: 150, sugar: 100}
console.log(getMissingIngredients(recipe, {})); // must return {flour: 200, eggs: 1, sugar: 100}
console.log(getMissingIngredients(recipe, {flour: 500, sugar: 200})); // must return {flour: 100, eggs: 3, sugar: 100}