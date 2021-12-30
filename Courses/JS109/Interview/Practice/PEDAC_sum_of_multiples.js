/* Solving Coding Problems with PEDAC

WHAT IS PEDAC?

PEDAC stands for [Understand the] Problem, Examples/Test Case, Data Structure, Algorithm, and Code

PEDAC has two primary objectives:
- process the problem (PEDA) and
- code with intent (C).

PROBLEM
- identify expected input and output
- make the requirement explicit
- identify the rules
- mental model of the problem (optional)

EXAMPLES / TEST CASES
- validate understanding of the problem

DATA STRUCTURE
- how we represent the data that we will work with when converting the input to output

ALGORITHM
- steps for converting input to output

CODE
- implement the algorithm

WHY USE PEDAC?
- a disciplined approach, such as PEDAC, helps you identify and avoid the pitfalls you may encounter when you don't code with intent

Pitfalls of hack and slash coding include:
- missed requirements
- unforeseen edge cases
- hard to understand code
- code that's difficult to maintain

EXAMPLE PROBLEM

Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors.

For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.

If no factors are given, use 3 and 5 as the default factors.

UNDERSTAND THE PROBLEM
- digest the problem to gain a holistic and well-rounded understanding of what the entire problem is asking
- read the problem statement carefully; don't miss any details
- every word and every detail matters

inputs:
  target number
  the set of factors

output:
  sum of multiples

Problem Domain
- A problem domain is the area of expertise or application that needs to be examined to solve a problem. It limits the scope of the problem.
- here there's a subtle implicit concept that's introduced in the problem: `multiples`
- seek clarification and don't assume something
- here, assume that `multiples` is a mathematical term that means a number that can be divided by another number without a remainder

Example Clarification
- target number:
  20

- multiples of 3:
  3, 6, 9, 12, 15, 18 (all have no remainder when divided by 3)

- multiples of 5:
  5, 10, 15 (all have no remainder when divided by 5)

Implicit Requirements
- the multiple to be summed must be unique
  - the number 15 is present in multiples of 3 and 5 but we add it just once
  - learn this implicitly from the example: the uniqueness requirement is not stated explicitly

- the target value is the limit, but it is not considered a multiple
  - the target 20 is not included in the sum even though it's a multiple of 5

- all numbers are natural numbers: the set of integers greater than or equal to 0 or 1

Clarifying Questions
1. What are the possible values for the target number? Are negative numbers allowed?
  - any natural number greater than 0
  - there will always be a target value

2. How will the factors be provided to the program?
  - as an array

3. What happens if only one number is provided as a factor? Should the program assume that a second factor that is either 3 or 5 is needed?
  - No
  - default to 3 and 5 only if no factors provided

Mental Model
- a mental model is an explanation of someone's thought process about how something works in the real word.

Example 1
- Determine a list of all multiples of a set of factors up to a target value, then filter the list of multiples to the unique values. Finally, compute and return the sum of unique multiples.

Example 2.
- Incrementally build a list of numbers that are multiples of a set of one or more factors. Add a multiple to the list only if it is not yet on the list. Finally, compute and return the sum of the numbers on the list.

EXAMPLES/TEST CASES

Example 1
- inputs:
  - target number: 20
  - factors: [3, 5]
      - 3, 6, 9, 12, 15, 18
      - 5, 10
- output:
  - 78

Example 2
- inputs
  - target number: 20
  - factors: [3]
    - 3, 6, 9, 12, 15, 18
- output
  - 63

Example 3
- inputs:
  - target number: 20
  - factors: [5]
- output:
  - 30

Example 4
- inputs
  - target numbers: 20
  - factors: []
- output
  - 78 because using the default factors

Example 5
- inputs:
  - target number: 1
  - factors [] defaults to [3, 5]
- output:
  - 0

Edge Cases
- last number before the target value if the last number before the target value is a multiple of one or more of the factors

Example 6
- inputs:
  - target number: 20
  - factors: [19]
-output
  - 19

DATA STRUCTURE
- intended programming language
- mental model
  - array since we need to collect the values that are multiples of our factors and then add them up
  - how and when will we filter the numbers

ALGORITHM
First Mental Model
- Determine a list of all multiples of a set of factors up to a target value, then filter the list of multiples to the unique values. Finally, compute and return the sum of the unique multiples.

1. Create an empty array called `multiples` that will contain multiples.
2. Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`
3. For every `factor` in the `factors` list:
  1. Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.
  2. While `current_multiple` < `target`
    1. Append the `current_multiple` to `multiples`.
    2. Add `factor` to `current_multiple`.
4. Filter duplicate numbers from `multiples`.
5. Compute and return the sum of numbers in `multiples`.

---
Second Mental Model
- Incrementally build a list of numbers that are multiples of a set of one or more factors. Add a multiple to the list only if it is not yet on the list. Finally, compute and return the sum of the numbers on the list.

1. Create an empty array called `multiples` that will contain the list of multiples
2. Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`
3. For every `factor` in the `factors` list:
    1.  Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.
    2. While `current_multiple` < `target`
      1. Is the `current_multiple` in `multiples` already?
        1.  Yes - do nothing
        2.  No - Append the `current_multiple` to `multiples`.
    2. Add `factor` to `current_multiple`.
4. Compute and return the sum of the numbers in `multiples`.

Before implementing your algorithm, you should test it manually with you test cases.

Example 1
inputs:
  - target number: 20
  - number to get multiples: [3, 5]
output:
  - 78

Algorithm
1. Create an empty array called `multiples` that will contain the list of multiples
  - `multiples = []`
2. Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`
  - `[3, 5]` obtained from supplied factors.
3. For every `factor` in the `factors` list: `[3, 5]`
  1. Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.
    - `current_multiple = 3`
    - `current_multiple = 5`
  2. While `current_multiple` < `target`
    1. Append the `current_multiple` to `multiples`.
      `multiples = [3]
      multiples = [3, 6]
      multiples = [3, 6, 9]
      ...
      multiples = [3, 5, 9, 12, 15, 18, 10, 15]
    2. Add `factor` to `current_multiple`.
      `current_multiple = 6
      current_multiple = 9
      ...
      current_multiple = 18
      current_multiple = 21
      current_multiple = 5
      current_multiple = 10
      current_multiple = 15
      current_multiple = 20
4. Filter duplicate numbers from `multiples`.
  `multiples = [3, 6, 9, 12, 18, 5, 10]
5. Compute and return the sum of the numbers in `multiples`.
  `78`

Second Mental Model
- Incrementally build a list of numbers that are multiples of a set of one or more factors. Add a multiple to the list only if it is not yet on the list. Finally, compute and return the sum of the numbers on the list.

1. Create an empty array called `multiples` that will contain the list of multiples
2. Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`
3. For every `factor` in the `factors` list:
  1.  Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.
  2. While `current_multiple` < `target`
    1. Is the `current_multiple` in `multiples` already?
      1.  Yes - do nothing
      2.  No - Append the `current_multiple` to `multiples`.
    2. Add `factor` to `current_multiple`.
4. Compute and return the sum of the numbers in `multiples`. */

function sumOfMultiples(target, factors) {
  let multiples = [];
  if (factors.length === 0) factors = [3, 5];

  factors.forEach(factor => {
    for (let currentMultiple = factor; currentMultiple < target; currentMultiple += factor) {
      if (!multiples.includes(currentMultiple)) {
        multiples.push(currentMultiple);
      }
    }
  })

  return multiples.reduce((sum, value) => sum + value, 0);
}

console.log(sumOfMultiples(1, []));       // returns 0
console.log(sumOfMultiples(20, [3, 5]));  // returns 78
console.log(sumOfMultiples(20, [3]));     // returns 63
console.log(sumOfMultiples(20, [5]));     // returns 30
console.log(sumOfMultiples(20, []));      // returns 78
console.log(sumOfMultiples(20, [19]));    // returns 19