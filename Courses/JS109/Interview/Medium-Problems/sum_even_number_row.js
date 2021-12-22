/* Sum Even Number Rows

Imagine a sequence of consecutive even integers beginning with 2. The integers are grouped in rows, with the first row containing one integer, the second row two integers, the third row three integers, and so on. Given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row.

PROBLEM
Rules
- sequence of integers
- sequence begins with 2
- integers are consecutive
- sequence is grouped in to rows
- each row incrementally larger: 1, 2, 3, ...
- row 'number' equals the number of elements in the row
-   - row 1 has 1 element, row 2 has 2 elements, ...
- input: a single integer
  - identifies a 'row', which is a subset of a sequence of integers
- output: a single integer
  - the sum of the integers in the row identified by the input integer

- sequence:
2
4, 6
8, 10, 12
14, 16, 18, 20

How do we create the structure?

EXAMPLES
- row number: 1 --> sum of integers in row: 2
- row number: 2 --> sum of integers in row: 10
- row number: 4 --> sum of integers in row: 68

DATA STRUCTURES

2
4, 6
8, 10, 12
14, 16, 18, 20
...

- overall structure representing sequence as a whole
- individual rows within overall structure
- individual rows in a set order in context of sequence
- individual rows contain integers
- can assume that integers are in a set order in the context of the sequence

nested arrays
[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20],
  ...
]

ALGORITHM
1. Create an empty `rows` array to contain all of the rows
2. Create a `row` array and add it to the overall `rows` array
3. Repeat step 2 until all the necessary rows have been created
  - All rows have been created when the length of the `rows` array is equal to the input integer
4. Sum the final row
5. Return the sum

Problem: Create a Row

Rules:
- row is an array
- arrays contain integers
- integers are consecutive even numbers
- integers in each row form part of an overall larger sequence
- rows are of different lengths
- input: the info needed to create the output
  - the starting integer
  - length of the row
- output: the row itself: `[8, 10, 12]`

Examples:
start: 2, length: 1 --> [2]
start: 4, length: 2 --> [4, 6]
start: 8, length: 3 --> [8, 10, 12]

Data Structure:
- an array of integers

Algorithm:
1. Create an empty `row` array to contain the integers
2. Add the starting integer
3. Increment the starting integer by 2 to get the next integer in the sequence
4. Repeat steps 2 & 3 until the array has reached the correct length
5. Return the `row` array

Steps 2-4 above
Start the loop
- add start integer to the row array
- increment the start integer by 2
- break out of the loop if length of the row array equals rowLength

ALGORITHM
1. Create an empty `rows` array to contain all of the rows
2. Create a `row` array and add it to the overall `rows` array
3. Repeat step 2 until all the necessary rows have been created
  - All rows have been created when the length of the `rows` array is equal to the input integer
4. Sum the final row
5. Return the sum

Calculating the starting integer
Rule: first integer of row equal to last integer of the preceding row + 2
Algorithm:
- get the last row from the rows array
- get the last integer of that row
- add 2 to that integer

*/

function sumEvenNumberRow(rowNumber) {
  let rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }

  let finalRow = rows.pop();
  return finalRow.reduce((total, value) => total + value, 0); // TODO: sum final row and return the sum
}

function createRow(startInteger, rowLength) {
  let row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

// - row number: 1 --> sum of integers in row: 2
// - row number: 2 --> sum of integers in row: 10
// - row number: 4 --> sum of integers in row: 68

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(3)); // 30
console.log(sumEvenNumberRow(4)); // 68

// start: 2, length: 1 --> [2]
// start: 4, length: 2 --> [4, 6]
// start: 8, length: 3 --> [8, 10, 12]

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]