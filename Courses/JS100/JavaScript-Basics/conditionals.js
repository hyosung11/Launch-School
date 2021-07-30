// if (true && false) {
//   console.log('Yes!');
// } else {
//   console.log('No ...');
// }
// No ...

// let sale = true;
// let admissionPrice = !sale ? 5.25 : 3.99;

// console.log('$' + admissionPrice);
// $3.99

// Are we moving?
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

// let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
let isMoving = (brakingForce < acceleration && speed > 0) || acceleration > 0;

console.log(isMoving); // true