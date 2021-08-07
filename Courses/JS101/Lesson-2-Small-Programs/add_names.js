// function addName(arr, name) {
//   arr = arr.concat([name]);
// }

// let names = ['bob', 'kim'];
// addName(names, 'jim');
// console.log(names); // => [ 'bob', 'kim', ]

function addNames(arr, name) {
  arr = arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names);
