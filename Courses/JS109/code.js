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

function objectHasProperty(object, property) {
  return object[property] ? 1 : 2;
}

let obj = {
  something: 3,
  enabled: false,
  result: undefined,
};

console.log(objectHasProperty(obj, 'something')); // returns 1
console.log(objectHasProperty(obj, 'active'));    // returns 2
console.log(objectHasProperty(obj, 'enabled')); 