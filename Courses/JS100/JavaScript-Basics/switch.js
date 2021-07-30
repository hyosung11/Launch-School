/* Switch

Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.
*/

// no break statements
// let animal = 'horse';

// switch (animal) {
//   case 'duck':
//     console.log('quack');
//   case 'squirrel':
//     console.log('nook nook');
//   case 'horse':
//     console.log('neigh');
//   case 'bird':
//     console.log('tweet tweet');
//   default:
//     console.log('*cricket*');
// }

// neigh
// tweet tweet
// *cricket*

// with break statements
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
    break;
  case 'squirrel':
    console.log('nook nook');
    break;
  case 'horse':
    console.log('neigh');
    break;
  case 'bird':
    console.log('tweet tweet');
    break;
  default:
    console.log('*cricket*');
    break;
}
// neigh