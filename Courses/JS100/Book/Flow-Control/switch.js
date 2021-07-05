// switch statement
// let a = 5;

// switch (a) {
//   case 5:
//     console.log('a is 5');
//     break;
//   case 6:
//     console.log('a is 6');
//     break;
//   default:
//     console.log('a is neither 5 nor 6');
//     break;
// } // => a is 5

// if/else statement (functionally identical to switch statement above)
// let b = 5;

// if (b === 5) {
//   console.log('b is 5');
// } else if (b === 6) {
//   console.log('b is 6');
// } else {
//   console.log('b is neither 5, nor 6');
// } // => b is 5

// code without break statements
// let c = 5;

// switch (c) {
//   case 5:
//     console.log('c is 5');
//   case 6:
//     console.log('c is 6');
//   default:
//     console.log('c is neither 5, nor 6');
// } // => c is 5
  //    c is 6
  //    c is neither 5, nor 6

// switch statement with fall-through use to execute the same action for two or more cases:

let a = 5;

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log("a is 8 or 9");
    break;
  default:
    // executed if a is anything else
    console.log("a is not 5, 6, 7, 8, or 9");
    break;
} // a is either 5, 6, or 7


