function sumEvenNumberRow(rowNumber) {

}

function createRow(startInteger, rowLength) {
  const row = [];
  // steps 2-4
  return row;
}

// row number: 1 --> sum of integers in row: 2
// row number: 2 --> sum of integers in row: 10
// row number: 4 --> sum of integers in row: 68

// console.log(sumEvenNumberRow(1)); // 2
// console.log(sumEvenNumberRow(2)); // 10
// console.log(sumEvenNumberRow(4)); // 68

// start: 2, length: 1 --> [2]
// start: 4, length: 2 --> [4, 6]
// start: 8, length: 3 --> [8, 10, 12]

console.log(createRow(2, 1)) // [2]
// console.log(createRow(4, 2)) // [4, 6]
// console.log(createRow(8, 3)) // [8, 10, 12]

// 1. Create an empty 'rows' array to contain all of the rows
// 2. Create a 'row' array and add it to the overall 'rows' array
// 3. Repeat step 2 until all the necessary rows have been created
//    - A;; rows have been created when the length of the 'rows' array is equal to the input integer
// 4. Sum the final row
// 5. Return the sum