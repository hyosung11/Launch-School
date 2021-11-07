/* JS101 - Small Problems > Easy 5 > 9. How Many?

How Many?

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

PROBLEM
- input: array of strings
- output: template literal populated with info from object

Identify rules
- count the number of times each element occurs in array
- log element with number of occurrences
- words are case sensitive

EXAMPLES / TEST CASES
['car', 'car', 'truck', 'car', 'SUV', 'truck','motorcycle', 'motorcycle', 'car', 'truck'];
car => 4
truck => 3
SUV => 1
motorcycle => 2

Edge Cases?
- keep capitalization

DATA STRUCTURE
- input: array
- intermediary: object
- output: template literal of vehicle name with number of occurrences

ALGORITHM
Steps for converting input to output
1. Declare the function CountOccurrences that takes an argument of an array of strings
2. Initialize a vehicle object and assign it to an empty object
3. Loop through the array
  - If vehicle object has a key that matches the current element, increment the keys value by 1
  - If the vehicle object does not have a key at the current element create a key with a value of 1 with the name of the current element
4. Return the object

CODE
Implementation of Algorithm
- test code while programming */

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

function countOccurrences(elements) {
  let occurrences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
    occurrences[elements[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${String(occurrences[item])}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4;
// truck => 3;
// SUV => 1;
// motorcycle => 2;

/* Discussion

The solution uses two functions. The second function, `logOccurrences`, aids readability. Its sole use is to log each `key: value` pair in the format specified by the exercise description.

The function of interest is `countOccurrences`. It starts off by initializing an `occurrences` object. This object holds the results of the counting. The function uses a loop to iterate over each element of the `elements` array argument. During each iteration, it checks to see if a property, with a key equal to the name of the current vehicle, exists in `occurrences`. If it does not exist, the function initializes the property to `0`. The function then increments the current value of the property by `1`. Finally, the function calls `logOccurrences` to output the desired result.

Further Exploration

Try to solve the problem when words are case insensitive, e.g. "suv" and "SUV" represent the same vehicle type. */

// with Alex
// function countOccurrences(array) {
//   let vehicleObject = {};

//   for (let index = 0; index < array.length; index += 1) {
//     if (Object.keys(vehicleObject).includes(array[index])) {
//       vehicleObject[array[index]] += 1;
//     } else {
//       vehicleObject[array[index]] = 1;
//     }
//   }

//   // console.log(vehicleObject);

//   for (let index = 0; index < Object.keys(vehicleObject).length; index++) {
//     console.log(`${Object.keys(vehicleObject)[index]} => ${vehicleObject[Object.keys(vehicleObject)[index]]}`);
//   }
// }

// countOccurrences(vehicles);

// Emma Story
function countOccurrences(arr) {
  const result = arr.reduce((obj, current) => {
    if (!obj[current]) obj[current] = 0;
    obj[current]++;
    return obj;
  }, {});

  Object.entries(result).forEach((pair) =>
    console.log(`${pair[0]} => ${pair[1]}`)
  );
}

// Aaron Smith
function createObj(array) {
  return array.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
}

function countOccurrences(array) {
  let obj = createObj(array);
  Object.entries(obj).forEach((elem) => {
    console.log(`${elem[0]} => ${elem[1]}`);
  });
}

// Antonina
function countOccurrences(array) {
  let occurrences = {};
  array.forEach((el) => {
    el = el.toLowerCase();
    occurrences[el] ? (occurrences[el] += 1) : (occurrences[el] = 1);
  });

  for (let [key, value] of Object.entries(occurrences)) {
    console.log(`${key} => ${value}`);
  }
}

/* Bob Rodes

After looking at the solution, I swiped its idea of breaking out the log functionality into a separate function. It does a better job of following the principle of "functions should do one thing" than having everything in one function does. */

function countOccurrences(vehicles) {
  let vehicleCount = vehicles.reduce((list, unit) => {
    unit = unit.toLowerCase();
    list[unit] = (list[unit] || 0) + 1;
    return list;
  }, {});

  logResult(vehicleCount)
}

function logResult(list) {
  let listMap = new Map(Object.entries(list));

  listMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
  });
}

/* I've been using `reduce` to do things like this for practice, and I've gotten to like it. But the `for` loop is simpler and probably performs faster.

I did some experimenting with listing out the objects. I tried setting up a `Map` object and running `Map.prototype.forEach` on it. `Map` has a rich set of methods to manipulate its key/value pairs, sort of like Dictionary objects in some other languages. But if you already have an object in place, then plugging it into a `Map` object just to do a `forEach` on it is probably overkill. Still, it works fine.

`Map.prototype.forEach`'s callback procedure takes the value for the first argument and the key for the second, which is the opposite of practically every method in every language I know of that works with key/value pairs. So that's an idiosyncrasy to look out for.

After tinkering a while, I realized that I was plugging `Object.entries(list)` into the `Map` object for no good reason, since I could just use it directly in a call to `Array.prototype.forEach`. So, I refactored to this: */

function logResult(list) {
  Object.entries(list).forEach(([key, value]) => {
    console.log(`${key} => ${value}`);
  });
}

/* One discovery here for me was the cosmetic improvement of using array destructuring in the callback function. Without it, the function looked like this: */

function logResult(list) {
  Object.entries(list).forEach((arr) => {
    console.log(`${arr[0]} => ${arr[1]}`);
  });
}

/* I think the destructuring looks nicer and is easier to read.

Further exploration: line 3 in `countOccurrences` just forces the key to lower case. */

// final version
function countOccurrences(vehicles) {
  let vehicleCount = vehicles.reduce((list, unit) => {
    unit = unit.toLowerCase();
    list[unit] = (list[unit] || 0) + 1;
    return list;
  }, {});

  logResult(vehicleCount);
}

function logResult(list) {
  Object.entries(list).forEach(([key, value]) => {
    console.log(`${key} => ${value}`);
  });
}