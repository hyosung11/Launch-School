/* Algorithm Writing Clinic

Introductions
- Katarina, JS180
- Dana Chen, JS230

### RIGHT SIDE Problem Level: EASY

Create a function that takes a number as its argument and returns an array of all its factors.

**Notes**

- The input integer will be positive.
- A factor is a number that evenly divides into another number without leaving a remainder. The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.

**Test cases:**

```ruby
factorize(12) ➞ [1, 2, 3, 4, 6, 12]
factorize(4) ➞ [1, 2, 4]
factorize(17) ➞ [1, 17]
```

PEDAC

PROBLEM
- input: number
- output: array

Rules:
- the input integer will be positive

EXAMPLES
factorize(12) ➞ [1, 2, 3, 4, 6, 12]
factorize(4) ➞ [1, 2, 4]
factorize(17) ➞ [1, 17]

Data Structure:
- input: number
- intermediary: number to array
- output: array

ALGORITHM
1. Declare a function with one parameter that takes a positive integer as an argument
2. Initialize a variable to a result array with initial value of an empty array
3. loop through 1 to the number
4. check if number is a factor
  - The number is a factor if its exactly divisible without a remainder
  - If number is divisible without a remainder add to the result array
5. Return result array

==============================
# Choose a problem from here:

# Write your algorithm below! Once the clinic is over, please delete everything below this line :-)

Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
Test cases:
missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
missing_num([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
missing_num([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

-Pass an array of 9 digits 1 - 10 into the function as a parameter;
-Create a local array to check the parameter array against which contains the numbers 1 - 10 in numerical order
-Sort the parameter array numerically
-For each index (loop of choice) compare the index of the parameter array for strict equality with the same index in the local array
  -If: the comparison is falsy, return the current index of the local array.
  -Else: return ‘no missing digits’ // this is optional.

*/
// function missingNum(array) {
//   let localArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   array.sort((a, b) => a - b);

//   for (let index = 0; index <= array.length; index += 1) {
//     if (localArray[index] !== array[index]) {
//       return localArray[index];
//     }
//   }
// }

// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5);
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // ➞ 10);
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7
// console.log(missingNum([10, 5, 7, 2, 4, 6, 3, 9, 1])); // ➞ 8

function factorize(int) {
  let result = [];
  for (let i = 1; i <= int; i += 1) {
    // console.log(i);
    // console.log(int / i);
    if (int % i === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(factorize(12)); // ➞ [1, 2, 3, 4, 6, 12]);
console.log(factorize(4)); // ➞ [1, 2, 4]);
console.log(factorize(17)); // ➞ [1, 17]
