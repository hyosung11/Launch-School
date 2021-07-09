# Solving Coding Problems with [PEDAC](https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f)

1. Useful for beginners to employ a system of thinking.
2. Gateway concept for more formal algorithmic techniques to problem solving.

## What is PEDAC?

- PEDAC stands for "[Understand the] Problem, Examples / Test Cases, Data Structure, Algorithm, and Code. 
- PEDAC's objectives are to process the problem (PEDA) and code with intent (C).

### PEDAC
| Objective | Step | Description|
| :--- | :---  | :-----      |
| Process the Problem | Understand the Problem | <ul><li>Identify expected input and output</li><li>Make the requirements explicit</li><li>Identify rules</li><li>Mental model of the problem (optional)</li></ul> |
| | Examples/Test Case | Validate understanding of the problem |
| | Data Structure | How we represent data that we will work with when converting the input to output. |
| | Algorithm | Steps for converting input to output |
| _Code with Intent_ | Code | **Implementation** of Algorithm |

## Why Use PEDAC?

A disciplined approach, such as PEDAC, helps you identify and avoid the pitfalls you may encounter when you don’t code with intent.

Common pitfalls of hack and slash or coding without intent are:

* Missed requirements
* Unforeseen Edge Cases
* Hard to understand code
* Code that’s difficult to maintain

## Example Problem

```js
Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors.

For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.

If no factors are given, use 3 and 5 as the default factors.
```

### Understand the Problem

The first critical step of PEDAC is to digest the problem to gain a holistic and well-rounded understanding of what the entire problem is asking.

First identify the **inputs** and **outputs** for the problem. Reading the problem statement reveals two inputs and one output:

```js
inputs:
  target number
  the set of factors
output:
  sum of multiples
  ```

There's also a subtle implicit concept that introduced in the problem: `multiples`.

#### Problem Domain

A problem domain is the area of expertise or application that needs to be examined to solve a problem (source: [problem domain wiki](https://en.wikipedia.org/wiki/Problem_domain)). It **limits the scope** of the problem.

Going back to the term “multiples,” assume that this is a _“mathematical term” that means “a number that can be divided by another number without a remainder.”_

Using the example in the second paragraph, we can confirm this:

```js
target number: 
20

multiples of 3: 
3, 6, 9, 12, 15, 18 (all have no remainder when divided by 3)

multiples of 5: 
5, 10, 15 (all have no remainder when divided by 5)
```

### Implicit Requirements

This problem statement also conveys a few rules that we must keep in mind:

1. The multiples to be summed must be unique. The number `15` is present as a multiple of `3` and `5`, but we add it just once when computing the sum`(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78)`. Note that we learn this implicitly from the example: the uniqueness requirement is not stated explicitly.

2. The target value is the limit, but it is not considered a multiple. In the example, the target, `20`, is not included in the sum even though it’s a multiple of `5`. As with the first rule, this requirement is implicit.

3. All numbers are natural numbers: they are the set of integers greater than or equal to `0` or `1`. Since adding `0` to any number doesn’t change it, it doesn’t matter which definition we use. For simplicity, we’ll assume that the natural numbers start with `1`.

### Clarifying Questions

1. What are the possible values for the target number? Are negative numbers allowed? 
   - Any natural number greater than `0`. 
   - There will always be a target value.

2. How will the factors be provided to the program? 
   - As an array.

3. What happens if only one number is provided as a factor? Should the program assume that a second factor that is either 3 or 5 is needed? 
   - No. Default to 3 and 5 **only** if no factors are provided.

#### Mental Model
A mental model is an explanation of someone's thought process about how something works in the real world (source: [wikipedia](https://en.wikipedia.org/wiki/Mental_model))

We can think of the mental model as our summary view of the “entire problem.” In other words, it is our perspective on **what** the problem requires. Be sure to note that we’re not yet interested in **how** to solve the problem (the algorithm).

Here’s a simple mental model for this problem:

```js
Determine a list of all multiples of a set of factors up to a target value, then filter the list of multiples to the unique values. Finally, compute and return the sum of the unique multiples.
```

Here’s another mental model:

```js
Incrementally build a list of numbers that are multiples of a set of one or more factors. Add a multiple to the list only if it is not yet on the list. Finally, compute and return the sum of the numbers on the list.
```

### Examples / Test Cases

In this step, our objective is to come up with examples that validate our understanding of the problem and confirm that we are working in the right direction. The confirmation will typically come from a person or documentation of a process: we can ask the person to confirm the output given the input, or we can follow the process to check the output given the input.

Our examples will be in the form of tests that show the expected outputs given certain inputs:

#### Validation

Example 1

Inputs: 
- Target number: 20
- Factors: [3, 5]

Output
- 78

---

Example 2

Inputs:
- Target number: 20
- Factors: [3]

Output
- 63

---

Example 3

Inputs:
- Target number: 20
- Factors: [5]

Output
- 30

---

Example 4

Inputs:
- Target number: 20
- Factors []

Output
- 78

---

Example 5

Inputs:
- Target number: 1
- Factors: []

Output
- 0





