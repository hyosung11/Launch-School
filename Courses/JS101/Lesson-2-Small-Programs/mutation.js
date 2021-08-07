// let words = ['scooby', 'do', 'on', 'channel', 'two'];

// words.forEach(word => {
//   console.log(word);
// })

// let words = ['scooby', 'do', 'on', 'channel', 'two'];

// words.forEach((word) => {
//   console.log(word); // logs: scooby, on, two (in that order)
//   words.shift();
// });

// let words = ['scooby', 'do', 'on', 'channel', 'two'];

// words.forEach(word => {
//   console.log(word);
//   words.shift();
// })

// console.log(words); // logs ['channel', 'two']

let pairs = [[6, 'scooby'], [2, 'do'], [2, 'on'], [7, 'channel'], [3, 'two']];

pairs.forEach(pair => {
  pair.shift();
})

console.log(pairs); // logs [['scooby'], ['do'], ['on'], ['channel'], ['two']];