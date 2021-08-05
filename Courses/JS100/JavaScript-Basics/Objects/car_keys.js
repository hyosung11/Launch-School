/* JS100 - JavaScript Basics > Objects > 7. Car Keys

Car Keys

Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

*/

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7,
};

// let keys = Object.keys(vehicle);

let keys = [];

for (let property in vehicle) {
  keys.push(property);
}

console.log(keys);
// [ 'manufacturer', 'model', 'year', 'range', 'seats' ]