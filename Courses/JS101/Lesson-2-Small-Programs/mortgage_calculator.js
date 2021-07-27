/* Assignment: Mortgage / Car Loan Calculator

Take everything that you've learned so far and build a mortgage calculator (or car payment calculator -- it's the same thing).

You'll need three pieces of information:
- the loan amount
- the Annual Percentage Rate (APR)
- the loan duration

From the above, you'll need to calculate the following two things:
- monthly interest rate
- loan duration in months

You can use the following formula:
- let m = p * (j / (1 - Math.pow((1 + j), (-n))));

m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

When you write your program, don't use the single-letter variables m, p, j, and n; use explicit names. For instance, you may want to use loanAmount instead of p.

Try to print the payment amount as a dollar and cents amount, e.g., $123.45 or $371.00.

Finally, don't forget to run your code through ESLint. Also, consider asking for a code review after you've reviewed your code against the possible solution, and made any adjustments that you need to make.

Hints:
- Decide what input formats your program expects. For example, should the user enter an interest rate of 5% as 5 or .05?
- If you're working with an Annual Percentage Rate (APR), you need to convert it to a monthly interest rate for use in the formula.
- Be careful about the loan duration -- are you working with months or years? Choose variable names carefully to assist in remembering.
- Think about edge cases. There are plenty of edge cases to work with in this problem, and each presents interesting challenges. For instance, consider whether you want to support no-interest loans or loans that aren't for an integer number of years.
- You can use this loan calculator to check your results.

PSEUDOCODE
1. Welcome the user
2. Input loan amount
3. Input APR
4. Input loan duration
5. Calculate monthly interest rate from APR
6. Calculate loan duration in months
7. Consider edge cases

*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to the Mortgage Calculator!");

prompt("Please enter the loan amount:");
let loanAmount = readline.question();