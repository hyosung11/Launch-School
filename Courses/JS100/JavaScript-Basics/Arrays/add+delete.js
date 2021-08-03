/* JS100 - JavaScript Basics Arrays > 3. Add + Delete

Add + Delete

We are given the following array of energy sources.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// console.log(energy.shift() && energy.push('geothermal'));
// console.log(energy);

// removing an element
// energy = energy.slice(1);

// console.log(energy);

energy.splice(0, 1);
console.log(energy); // [ 'solar', 'wind', 'tidal', 'fusion' ]