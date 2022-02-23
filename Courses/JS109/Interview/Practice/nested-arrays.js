/* Understanding Nested Arrays in Javascript

https://javascript.plainenglish.io/understanding-the-nested-arrays-fbf3ab13c2b4

*/

 /* Creating Arrays */

// let favMovies = ['Begin Again', 'Soul', ['Matrix', 'Matrix Reloaded', 'Matrix Revolutions'], ['Frozen', 'Frozen 2', ['Tangled', 'Aladdin']]];

// let favMovies = new Array();

// favMovies[0] = 'Begin Again';
// favMovies[1] = 'Soul'
// favMovies[2] = new Array ('Matrix', 'Matrix Reloaded', 'Matrix Revolutions')
// favMovies[3] = new Array ( 'Frozen', 'Frozen 2', [ 'Tangled', 'Aladdin' ] )
// console.log(favMovies)

// let favMovies = Array ();

// favMovies[0] = 'Begin Again';
// favMovies[1] = 'Soul';
// favMovies[2] = Array ( 'Matrix', 'Matrix Reloaded', 'Matrix Revolutions')
// favMovies[3] = Array ('Frozen', 'Frozen 2', ['Tangled', 'Aladdin'])

// console.log(favMovies[3][2][0]) // 'Tangled'

/* Flatten a nested array */

// let favMovies = ['Begin Again', 'Soul', ['Matrix', 'Matrix Reloaded', 'Matrix Revolutions'], ['Frozen', 'Frozen 2', ['Tangled', 'Aladdin']]];

// let flattenedArray = favMovies.flat();
// console.log(flattenedArray);
// [
//   'Begin Again',
//   'Soul',
//   'Matrix',
//   'Matrix Reloaded',
//   'Matrix Revolutions',
//   'Frozen',
//   'Frozen 2',
//   [ 'Tangled', 'Aladdin' ]
// ]

// let flattenedArray = favMovies.flat(2);
// console.log(flattenedArray);
// [
//   'Begin Again',
//   'Soul',
//   'Matrix',
//   'Matrix Reloaded',
//   'Matrix Revolutions',
//   'Frozen',
//   'Frozen 2',
//   'Tangled',
//   'Aladdin'
// ]

/*Use `Array.prototype.toString()` and `String.prototype.split()` methods */

let favMovies = ['Begin Again', 'Soul', ['Matrix', 'Matrix Reloaded', 'Matrix Revolutions'], ['Frozen', 'Frozen 2', ['Tangled', 'Aladdin']]];

favMovies = favMovies.toString().split(',')
console.log(favMovies);