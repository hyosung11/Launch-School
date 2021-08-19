// let numbers = [1, 2, 3, 4];
// let count = 0;

// while (count < numbers.length) {
//   numbers[count] += 1;
//   count += 1;
// }

// console.log(numbers); // => [2, 3, 4, 5]

// while (true) {
//   let number = Math.floor(10 * Math.random());
//   console.log(number);

//   if (number === 5) {
//     console.log('Exiting ...');
//     break;
//   }
// }

// 4
// 8
// 9
// 6
// 9
// 3
// 0
// 3
// 6
// 5
// Exiting ...

// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1,
// };

// let pets = Object.keys(numberOfPets);
// let counter = 0;

// while (counter < pets.length) {
//   let currentPet = pets[counter];
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
//   counter += 1;
// }

// let str = '';

// while (true) {
//   if (str.length >= 10) {
//     break;
//   }

//   str += '*';
//   console.log(str);
// }

// let str = '';

// while (str.length < 10) {
//   str += '*';
//   console.log(str);
// }

let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;

while (index < names.length) {
  if (names[index][0] === 'E') {
    break;
  }

  console.log(names[index]);
  index += 1;
}

// Pete
// Naveed
// Chris