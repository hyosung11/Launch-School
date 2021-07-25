// Use underscore for unused callback parameters

// let names = ['sungoh', 'omi', 'sohee'];

// names.forEach(_ => {
//   console.log('Got a name!');
// });

// Got a name!
// Got a name!
// Got a name!

// need second parameter but not first one, use `_` to indicate that the first parameter is not being used by the callback:

let names = ['sungoh', 'omi', 'louis'];

names.forEach((_, index) => {
  console.log(`${index + 1}: got a name!`);
});

// 1: got a name!
// 2: got a name!
// 3: got a name!