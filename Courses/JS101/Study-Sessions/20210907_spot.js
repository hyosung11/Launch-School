/* SPOT Study Session with Austin Miller (Fjord)

Introductions
- Austin Miller
- Mugen Mirai => Marcos
- Jeff
- HyoSung

Agenda
collections, nested collections, map, filter, forEach
210, just started - just got to 'hoisting'

*/

// function lastElementOf(arr) {
//   // …
// }


// lastElementOf(['U', 'S', 'A']);  // returns "A"

// function lastElementOf(arr) {
//   let index = arr.length - 1;
//   return arr[index];
// }

// console.log(lastElementOf(['U', 'S', 'A', 'R']));  // returns "R"
// console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

// function arrayToLowerCase(arr) {
//   const returnArray = [];
//   arr.forEach((char) => {
//     returnArray.push(char.toLowerCase()); //;<-? how do we push to the new array?
//   });

//   return returnArray;
// }

// let arr = ['U', 'S', 'A'];
// console.log(arrayToLowerCase(arr)); // ['u', 's', 'a']

function arrayToLowerCase(arr) {
  // const returnArray = [];
  let returnArray = arr.forEach((char) => {
    // ['U', 'S', 'A']
    return char.toLowerCase();
  });

  return returnArray;
}

// map uses the return value of the callback function to return a new array

// function arrayToLowerCase(arr) {
//   // const returnArray = [];
//   let returnArray = arr.map((char) => {
//     // ['U', 'S', 'A']
//     char.toLowerCase();
//   });

//   return returnArray;
// }

function arrayToLowerCase(arr) {
  // const returnArray = [];
  let returnArray = arr.filter((char) => {
    // ['U', 'S', 'a']
    return char === char.toLowerCase();
  });

  return returnArray;
}
