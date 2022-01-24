/* Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

PROBLEM
- input: recipe object and ingredients object
- output: number (number of cakes that can be made)

Rules
- return a number of cakes that can be made
- if an ingredient required for the recipe is not available, return 0
- divide the amount available in ingredients by the amount required by the recipe

EXAMPLES -
- see below

DATA STRUCTURE
- input: two object as recipe and ingredients
- intermediary: how to compare each object?
- output: number

ALGORITHM
- input `recipe` object and `available` object
- initialize `count` to empty object
- iterate by item in `recipe`
  - if item doesn't exist in `available` append count with 0
  - else divide item's value in available by item's value in `recipe`
    - append count with the lowest whole number
- find the smallest number in the count array
- return `count` as number of cakes that can be made
*/

function cakes(recipe, available) {
  let count = [];

  for (let item in recipe) {
    if (!available[item]) count.push(0);
    else count.push(Math.floor(available[item] / recipe[item]));
  }

  return Math.min(...count);
}

// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 

// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 

// Michael's Solution
// function cakes(recipe, available) {
//   let result = []
//   let recipeArray = Object.entries(recipe);
//   let availArray = Object.entries(available);

//   if(recipeArray.length > availArray.length){
//     return 0;
//   }

//   for(let propAvail in available){
//     for(let propRecipe in recipe){
//       if(propAvail === propRecipe){
//         result.push(Math.floor(available[propAvail] / recipe[propRecipe])) 
//       }
//     }
//   }
//   return result.sort((a,b) => a - b)[0];
// }


/* Scramblies - 5 kyu

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z).
No punctuation or digits will be included.
Performance needs to be considered

Input strings s1 and s2 are null terminated.

Examples:
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False */

//rules: Input: str1, str2;
  //ouput: boolean
    //if the chars in string2 will be arranged to equal string1; true.
      //if not; false;

//Algo:
  //define the function
  //use an object to count each string in string1;
  //use an array to push the chars from str2 into the array while referencing count1;
    //split str1 split str2 compare lengths; if str1 is shorter; false;
//if the count array includes undefined; false
  //else true;

function scramble(str1, str2) {
  let count1 = {};
  let arrayCount = [];

  if (str1.split('').length < str2.split('').length) {
    return false;
  }

  for (let index = 0; index < str1.split('').length; index++) {
    if (!count1[str1[index]]) {
      count1[str1[index]] = 0;
    }
    count1[str1[index]]++;
  }

  for (let index = 0; index < str2.split('').length; index++) {
    arrayCount.push(count1[str2[index]]);
  }

  if (arrayCount.includes(undefined)) {
    return false;
  } else {
    return true;
  }
}

// console.log(scramble('rkqodlw', 'world') === true);
// console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
// console.log(scramble('katas', 'steak') === false);
// console.log(scramble('scriptjava', 'javascript') === true);
// console.log(scramble('scriptingjava', 'javascript') === true);
// console.log(scramble('scriptsjava', 'javascripts') === true);
// console.log(scramble('jscripts', 'javascript') === false);
// console.log(scramble('aabbcamaomsccdd', 'commas') === true);