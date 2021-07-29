let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
  if (cities[index] === null) {
    continue;
  }

  // console.log((cities[index]), (cities[index].length));
}

// for (let i = 0; ; i += 1) {
//   console.log("and on");
// }

// for (let i = 0; i < 1; i += 1) {
//   console.log("and on");
// }

// for (let i = 0; ; i += 1) {
//   console.log("and on");
//   break;
// }

// for (let i = 0; ; i += 1) {
//   console.log('and on');
//   // continue creates an endless loop as well
//   continue;
// }

// let number = 1;

// while (number < 40) {
//   console.log(number);
//   number += 2;
// }

// let num = 1;

// while (num < 40) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }

//   num += 1;
// }

// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for (let index = 0; index <= fish.length; index += 1) {
//   console.log(fish[index])

//   if (fish[index] === 'Nemo') {
//     break;
//   }
// }

//
// let counter = 0;

// while (counter > 0) {
//   console.log('Wooot!');
//   counter -= 1;
// }

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
