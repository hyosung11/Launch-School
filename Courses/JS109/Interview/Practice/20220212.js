/* Pete, the Baker - 5 kyu

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in math. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

09:52 start
09:57 algo done
10:01 end

Problem
- input `recipe` object and `available` object`
- output number of cakes that can be made

Algo
- declare `cakes` function with `recipe` object and `available` object
- init `result` to empty array
- if `available` does not include item required in `recipe` return 0
- iterate through `recipe` object
  - divide available item value by the recipe item value
    - push the lowest integer value to `result`
- return the minimum value from the `result` array */

// function cakes(recipe, available) {
//   let result = [];

//   for (let item in recipe) {
//     if (available.hasOwnProperty(item) === false) return 0;
//     else result.push(Math.floor(available[item] / recipe[item]));
//   }

//   return Math.min(...result);
// }

// // Examples
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// ); // must return 2

// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// ); // must return 0

/* Triple Double

Write a function that takes two integer numbers and returns whether `num1` has consecutive triple digits of any number, and whether `num2` has consecutive double digits of that same number.

10:15 start
10:19 algo
10:27 got stuck because can't use `match` on an array
10:30 peeked at answer and then changed my code to run correctly


Problem
- input num1 and num2
- output boolean

Algo
- declare `tripleDouble` function with parameters `num1` and `num2`
- reassign num1 to string of numbers
- reassign num2 to string of numbers
- iterate through num1 as a string
  - if num1 matches num1 at idx and num1 at idx and num1 at idx &&
    num2 matches num1 at idx and num1 at idx
      - return true
- return false

*/

function tripleDouble(num1, num2) {
  num1 = String(num1)
  num2 = String(num2)

  for (let idx = 0; idx < num1.length; idx += 1) {

    if (num1.match(num1[idx] + num1[idx] + num1[idx]) &&
       num2.match(num1[idx] + num1[idx])) {
        return true;
    }
  }

  return false;
}

// console.log(tripleDouble(451999277, 41177722899) === true);
// console.log(tripleDouble(444555, 544) === true);
// console.log(tripleDouble(12555, 544) === false);
// console.log(tripleDouble(12345, 12345) === false);
// console.log(tripleDouble(10000, 10000) === true);

/* Triple Double

Write a function that takes two integer numbers and returns whether `num1` has consecutive triple digits of any number, and whether `num2` has consecutive double digits of that same number.

10:36 start again
10:38 algo done
10:42 solved

Problem
- input num1 and num2
- output boolean

Algo
- declare `tripleDouble` with `num1` and `num2` as parameters
- convert `num1` to string
- convert `num2` to string
- iterate through `num1`
  - if `num1` matches num1 at idx 3 times && num2 matches num1 at idx 2 times
    - return true
- return false
*/

function tripleDouble(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  for (let idx = 0; idx < num1.length; idx += 1) {

    if (num1.match(num1[idx] + num1[idx] + num1[idx]) &&
      num2.match(num1[idx] + num1[idx])) return true;
  }

  return false;
}

// console.log(tripleDouble(451999277, 41177722899) === true);
// console.log(tripleDouble(444555, 544) === true);
// console.log(tripleDouble(12555, 544) === false);
// console.log(tripleDouble(12345, 12345) === false);
// console.log(tripleDouble(10000, 10000) === true);