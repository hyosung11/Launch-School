/* Drone Fly-By - 7 kyu

The other day I saw an amazing video where a guy hacked some wifi controlled light bulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.

Algo
- input
  - lamps string all off
  - drone string movement
- initialize `result` to 0
- check length of `drone` string
- initialize `on` to drone string length
- initialize `off` to lamps - drone length
- concatenate on plus off to make result string
- return result string */

// function flyBy(lamps, drone){
//   let result = '';
//   let on = drone.length;
//   let off = lamps.length - drone.length;

//   result = 'o'.repeat(on) + 'x'.repeat(off);
//   // console.log(result)
//   return result;
// }

// function flyBy(lamps, drone) {
//   const newArray = [];
//   let index = 0;

//   while (index < lamps.length) {
//     if (index < drone.length) {
//       newArray.push('o');
//     } else {
//       newArray.push('x');
//     }
//     index++;
//   }

//   return newArray.join('');
// }

function flyBy(lamps, drone) {
  for (char of drone) {
    lamps = lamps.replace('x', 'o');
  }
  return lamps;
}

console.log(flyBy('xxxxxx', '====T'));
console.log(flyBy('xxxxxxxxx', '==T'));
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'));

console.log(flyBy('xxxxxx', '====T') === 'ooooox');
console.log(flyBy('xxxxxxxxx', '==T') === 'oooxxxxxx');
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T') === 'ooooooooooxxxxx');