/* Courses > JS101 Programming Foundations with JavaScript > Lesson 2: Small Programs > 6. Pseudocode

Pseudocode

START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END
*/

function greatestNumber(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  })

  return savedNumber;
}

console.log(greatestNumber([1, 11, 34, 765, 556])) // 765