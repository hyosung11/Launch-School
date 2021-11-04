/* JS101 - Small Problems > Easy 3 > 8. Grade Book

Grade Book

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

ALGORITHM
- find averages of three scores
- determine letter grade based on the average score
- return the letter grade */

function getGrade(score1, score2, score3) {
  let totalScore = score1 + score2 + score3;
  let averageScore = (totalScore / 3).toFixed(0);

  // Always check `true` for `switch` statements with numbers
  switch (true) {
    case averageScore >= 90 && averageScore <= 100:
      return 'A';
    case averageScore >= 80 && averageScore < 90:
      return 'B';
    case averageScore >= 70 && averageScore < 80:
      return 'C';
    case averageScore >= 60 && averageScore < 70:
      return 'D';
    case averageScore >= 0 && averageScore < 60:
      return 'F';
  }
}

// Examples:
console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(81, 82, 83)); // "B"
console.log(getGrade(50, 50, 95)); // "D"

// Launch School
// function getGrade(grade1, grade2, grade3) {
//   let average = (grade1 + grade2 + grade3) / 3;

//   if (average >= 90 && average <= 100) {
//     return 'A';
//   } else if (average >= 80 && average < 90) {
//     return 'B';
//   } else if (average >= 70 && average < 80) {
//     return 'C';
//   } else if (average >= 60 && average < 70) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

/* Discussion

The solution first computes the average of the three scores. It then determines the letter grade equivalent via a series of `if` statements in accordance with the problem specification.

=========
Bob Rodes

While the logic in the solution is entirely sound, we can simplify it. It checks for possibilities that can't exist.

- On line 4, we don't have to check whether a value is less than or equal to 100. The specs say "There is no need to check for negative values or values greater than 100," so grade `A` is any value greater than or equal to 90.
- We don't need to specify `else` conditions, since each condition, when met, returns from the function.
- We don't need to check for a top range value in each condition, since any value going over the top range would meet a previous condition.

So, this works too: */

// function avg(array) {
//   return array.reduce((acc, num) => acc + num) / array.length;
// }

// function getGrade(...args) {
//   let pct = avg(args);

//   if (pct >= 90) return 'A';
//   if (pct >= 80) return 'B';
//   if (pct >= 70) return 'C';
//   if (pct >= 60) return 'D';
//   return 'F';
// }

// Tim Dronkers
// const GRADES = {
//   90: 'A',
//   80: 'B',
//   70: 'C',
//   60: 'D',
//   50: 'F',
// };

// function getGrade(num1, num2, num3) {
//   let meanScore = Math.floor((num1 + num2 + num3) / 3);
//   let roundedScore = meanScore - (meanScore % 10);
//   return roundedScore <= 50 ? GRADES['50'] : GRADES[roundedScore.toFixed(0)];
// }