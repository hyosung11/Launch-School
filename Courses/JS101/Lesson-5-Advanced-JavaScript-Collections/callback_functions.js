// Example 2
// [[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]

// Example 5
console.log([[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
}));

/*
What will the return value be in this example? Use what you've learned so far to break it down on your own before checking the solution below.

Solution

The return 
*/