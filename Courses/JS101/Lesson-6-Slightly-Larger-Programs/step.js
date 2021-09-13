// step.js

function square(num) {
  return num * num;
}

const myArr = [1, 2, 3, 4, 5];

let squares = myArr.map(num => square(num));

console.log(squares)

/*
In this file, we declare a function `square` on line 3. It takes one argument `num` and simply returns the product of num multiplied by itself.
*/