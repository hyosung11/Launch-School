/* JS120 - Object Oriented JavaScript > Objects > 3. Testing Object Equality

Testing Object Equality

In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates as true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs. */

function objectsEqual(obj1, obj2) {
  let arr1 = Object.entries(obj1).sort();
  let arr2 = Object.entries(obj2).sort();

  if (arr1.length !== arr2.length) return false;

  for (let idx = 0; idx < arr1.length; idx += 1) {
    if (arr1[idx][0] !== arr2[idx][0]) return false;
    if (arr1[idx][1] !== arr2[idx][1]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {})); // false
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({a: 'foo'}, {a: 'foo'})); // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'})); // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: 1}, {c: 'foo', b: 1}));  // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', b: 1}));  // false
console.log(objectsEqual({a: 'foo', b: 1}, {a: 'foo', b: 1}));  // true
console.log(objectsEqual({b: 1, a: 'foo'}, {a: 'foo', b: 1}));  // true

/* Solution from Launch School */
function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return keysMatch(a, b) && valuesMatch(a, b);
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every((key) => a[key] === b[key]);
}

/* Discussion

The solution is straightforward, it checks whether the keys are the same and the values for the respective keys are the same, and it makes use of helper functions for each. The solution also has a guard clause to immediately returns true if the two arguments passed reference the same object.

Further Exploration

A limitation of this function is that it doesn't look for deep equality. In other words, if one of the values is an object in both objects, this will return `false` unless that object is identical on both objects. */

/* Coen van Steijn */

function objectsEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key of Object.keys(obj1)) {
    if (!obj2.hasOwnProperty(key)) return false; // check if obj2 has this property
    if (obj1[key] !== obj2[key]) return false; // check if their values are equal
  }

  return true;
}

// David Pocsai
let objectsEqual = (obj1, obj2) => {
  let stringObj1 = Object.entries(obj1).sort().join('');
  let stringObj2 = Object.entries(obj2).sort().join('');
  return stringObj1 === stringObj2;
};