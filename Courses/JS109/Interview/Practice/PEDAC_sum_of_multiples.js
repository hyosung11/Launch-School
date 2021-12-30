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

*/