// let num = 1;

// const addOne = () => {
//   num += 1;
// };

// addOne;
// console.log(num); // 1


// let score = 23;

// function updateScore(points) {
//   let score;
//   console.log(score);
//   score += points;
// }

// console.log(updateScore(5)); // undefined
// console.log(score); // 23

// let bottles = 10;

// function decrementBottles(bottles) {
//   bottles -= 1;
// }

// console.log(decrementBottles());
// console.log(bottles);

// function squash(string) {
//   string = string.replaceAll(' ', '');
// }

// let sentence = "A sentence is a set of words put together with meaning.";
// console.log(squash(sentence)); // undefined

// console.log(sentence); // => A sentence is a set of words put together with meaning.

// function squash(array) {
//   array[0] = array[0].replaceAll(' ', '');
// }

// let sentence = ['A sentence is a set of words put together with meaning.'];
// squash(sentence);

// console.log(sentence[0]); // Asentenceisasetofwordsputtogetherwithmeaning.

// let arr = [1, 2, 3].filter(function (n) {
//   return n - 2;
// });

// console.log(arr); // [ 1, 3 ]

// let arr = [1, 2, 3];
// let newArr = arr.map((num) => num);
// arr[0] = 5;
// console.log(newArr); //  [1, 2, 3]
// console.log(arr); //  [5, 2, 3]

// let array1 = [23, 9, 157, 1507, 4, 21];
// let array2 = array1.sort((a, b) => {
//   return a - b;
// });
// console.log(array2); //

// function swapEnds(arr) {
//   let first = arr[0];
//   let last = arr[arr.length - 1];

//   arr[0] = last;
//   arr[arr.length - 1] = first;
//   console.log(arr);
//   return arr;

// }

// console.log(swapEnds([1, 2, 3, 4]));

// function objectHasProperty(object, property) {
//   return object[property] ? 1 : 2;
// }

// let obj = {
//   something: 3,
//   enabled: false,
//   result: undefined,
//   test: 5
// };

// console.log(objectHasProperty(obj, 'something')); // returns 1
// console.log(objectHasProperty(obj, 'active'));    // returns 2

// console.log(objectHasProperty(obj, 'enabled')); // returns 2
// console.log(objectHasProperty(obj, 'result')); // returns 2
// console.log(objectHasProperty(obj, 'test')); // returns 1

// ===========================================
function objectHasProperty(object, property) {
  if (object[property]) {
    return 1;
  } else if (object[property] === false) {
    return 1;
  } else {
    return 2;
  }
}

let obj = {
  something: 3,
  enabled: false,
  result: undefined,
  test: 0
};

console.log(objectHasProperty(obj, 'something')); // returns 1
console.log(objectHasProperty(obj, 'active'));    // returns 2
console.log(objectHasProperty(obj, 'enabled')); // returns 1
console.log(objectHasProperty(obj, 'result')); // returns 2
console.log(objectHasProperty(obj, 'test')); // returns 2