// Odd Numbers

// for (let number = 1; number < 100; number += 2) {
//   console.log(number);
// }

function oddNumsAlt(maxNumber) {
  let number = 1;

  while (number < maxNumber) {
    console.log(number)
    number += 2;
  }
}

oddNumsAlt(55);