/* Number of People in the Bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look at the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop. */

// function number(busStops) {
//   let count = 0;

//   for (let idx = 0; idx < busStops.length; idx++) {
//     let getOnBus = busStops[idx][0];
//     count += getOnBus;
//     let getOffBus = busStops[idx][1];
//     count -= getOffBus;
//   }
//   return count;
// }

function number(busStops) {
  let count = 0;

  for (let idx = 0; idx < busStops.length; idx++) {
    count += busStops[idx][0];
    count -= busStops[idx][1];
  }
  return count;
}

/*
given a nested array with 2 integer elements, add the first integer and subtract the second.

data structure:
   var toAdd, toSubtract

algorithm:
create var toAdd and set value to 0
create var toSubtract and set value to 0
iterate over the array
  add the first element of each nested array to toAdd
  add the second element of each nested array to toSubtract
return toAdd - toSubtract
*/

// var number = function(busStops){
//   let toAdd = 0;
//   let toSubtract = 0;

//   busStops.forEach(subarr => {
//     toAdd += subarr[0];
//     toSubtract += subarr[1];
//   })
//   return toAdd - toSubtract;
// }

console.log(number([[10, 0],[3, 5],[5, 8]]) === 5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) === 17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) === 21);
console.log(number([[0,0]]) === 0);

/*
Notes:
- input is an array of 2 element arrays
- inner array 0th index value is number of passengers getting in the bus
- inner array 1st index value is number of pass. getting out of the bus

Algo:
- declare inBus variable
- declare outBus variable
- loop over input array
  - on each iteration add current inner array 0th index value to inBus
  - add current array 1st index value to outBus
- return inBus - outBus
*/

// var number = function(busStops){
//   let inBus = 0;
//   let outBus = 0;

//   busStops.forEach(innerArr => {
//     inBus += innerArr[0];
//     outBus += innerArr[1];
//   })
//   return inBus - outBus;
// }

// function numbers(busStops) {
//   let passengers = 0;

//   busStops.forEach(stop => {
//     passengers += stop[0];
//     passengers -= stop[1];
//   });

//   return passengers;
// }