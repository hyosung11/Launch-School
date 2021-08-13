// 20210813 06:00 Exercises shared by Alex
// let b = 2;

// function test(b) {
//   return (b += 5);
// }

// console.log(test());

// console.log(
//   [
//     [1, 2],
//     [3, 4],
//   ].map((arr) => console.log(arr[0]))
// );

// // 1
// // 3
// // [ undefined, undefined ]

// console.log([1, 2, 3].filter((num) => {
//   num + num;
// })); // []

// missing return statement
// 

function messWithVars(one, two, three ){
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is ${one}`)
console.log(`two is ${two}`);
console.log(`three is ${three}`);