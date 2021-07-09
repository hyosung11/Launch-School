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

> Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors.

> For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.

> If no factors are given, use 3 and 5 as the default factors.


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

- Determine a list of all multiples of a set of factors up to a target value, then filter the list of multiples to the unique values. Finally, compute and return the sum of the unique multiples.

Here’s another mental model:

- Incrementally build a list of numbers that are multiples of a set of one or more factors. Add a multiple to the list only if it is not yet on the list. Finally, compute and return the sum of the numbers on the list.


### Examples / Test Cases

In this step, our objective is to come up with examples that validate our understanding of the problem and confirm that we are working in the right direction. The confirmation will typically come from a person or documentation of a process: we can ask the person to confirm the output given the input, or we can follow the process to check the output given the input.

Our examples will be in the form of tests that show the expected outputs given certain inputs:

### Validation
#### Example 1
**Inputs:**
* Target number: 20
* Factors: [3, 5]

**Output**
* 78
---
#### Example 2
**Inputs:**
* Target number: 20
* Factors: [3]

**Output**
* 63
---
#### Example 3
**Inputs:**
* Target number: 20
* Factors: [5]

**Output**
* 30
---
#### Example 4
**Inputs:**
* Target number: 20
* Factors: []

**Output**
* 78
---
#### Example 5
**Inputs:**
* Target number: 1
* Factors: []

**Output**
* 0
---

#### Edge Cases

In addition to test cases based on our rules, we should also provide test cases that handle any edge cases we can find. Edge cases are inputs at the “edges” of the problem description that may be mishandled if we aren’t careful. 
- For instance, problems that involve iterating over numbers have edge cases at one or both ends of the range. If you’re not careful, you may get incorrect answers at these edges. 
- Typical edge cases can involve working with negative numbers, the number zero, or extremely high values (if performance is a requirement). 
- When working with collections, it’s normally a good idea to find test cases that deal with zero, one or multiple elements in the collection.

This example problem has one significant edge case: what happens if the last number before the target value is a multiple of one or more of the factors?

In each of our test cases above, the last number added to the sum is either `18` or `15`. That leaves `19` (the last value checked) out of the sum, which is the right thing to do. Suppose, though, that `19` should be included in the sum, which it should if `19` is one of the factors. Since `19` is the last possible number to check (given a target of `20`), it’s at the “edge” of the range of values that get summed. To be certain we include `19` in the sum, we need to provide a test case that handles it.

---
### Validation
#### Example 6
**Inputs:**
* Target number: 20
* Factors: [19]

**Output**
* 19
---

### Data Structure

With our test cases ready, the next thing to do is to determine what data structures we will work with to convert the input to the output. The chief considerations here are our intended programming language and our mental model.

Using either of our mental models, we need to collect the values that are multiples of our factors, and then add them up. An array seems like a good fit for this collection of multiples. The only difference between our models lies in how and when we filter those numbers, but we’ll worry about that later.

One thing to take note of is that the data structure will influence your algorithm. For this reason, we typically pair the “Data Structure” and “Algorithm” steps together.

### Algorithm

#### Where to Start?
In this step, if you have a mental model, you can start there. Otherwise, start with the "Data Structure" step and think of how you'd build and manipulate it to get the output. For instance, if it's an array, you'd probably focus on constructing or iterating over a collection.

Determine a series of instructions that will transform the input to the desired output. The challenge is to get the right level of detail; we want something that we can readily convert to code without actually writing code.

The reason you don’t want it written at the programming language level is that you will lose flexibility during implementation. Programming languages often provide several ways to achieve a given result, but each of those approaches can affect other parts of the program. If you make an implementation choice too soon by making it part of your algorithm, then later discover you should have chosen something else, you may need to go back and modify both the code and the algorithm. If you don’t address the changes at both levels, you may encounter the pitfalls we discussed earlier.

That said, it is not uncommon to change an algorithm once coding starts; don’t feel constrained to stick with what you’ve initially written. In fact, two individuals working on the same problem will often come up with different algorithms, especially if each individual has formulated different mental models. To demonstrate this, here are the algorithms using both mental models from our example:

#### First Mental Model
>Determine a list of all multiples of a set of factors up to a target value, then filter the list of multiples to the unique values. Finally, compute and return the sum of the unique multiples.
1.  Create an empty array called `multiples` that will contain the multiples.
2.  Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`
3.  For every `factor` in the `factors` list:
    1.  Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.
    2.  While `current_multiple` < `target`
        1.  Append the `current_multiple` to `multiples`.
        2.  Add `factor` to `current_multiple`.
4.  Filter duplicate numbers from `multiples`.
5.  Compute and return the sum of the numbers in `multiples`.

---
#### Second Mental Model
>Incrementally build a list of numbers that are multiples of a set of one or more factors. Add a multiple to the list only if it is not yet on the list. Finally, compute and return the sum of the numbers on the list.
1.  Create an empty array called `multiples` that will contain the list of multiples
2.  Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`
3.  For every `factor` in the `factors` list:
    1.  Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.
    2.  While `current_multiple` < `target`
        1.  Is the `current_multiple` in `multiples` already?
            1.  Yes - do nothing
            2.  No - Append the `current_multiple` to `multiples`.
        2. Add `factor` to `current_multiple`.
4.  Compute and return the sum of the numbers in `multiples`.

Before implementing your algorithm, you should test it manually with your test cases. You don’t need to check all of the test cases, just enough to be confident that the algorithm works.

#### Example 1
**Inputs:**
* Target number: 20
* Number to get multiples: [3, 5]

**Output**
* 78
---
Algorithm

1.  Create an empty array called `multiples` that will contain the list of multiples

    `multiples = []`

2.  Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`

    `[3, 5]` obtained from supplied factors.

3.  For every `factor` in the `factors` list: `[3, 5]`
    1.  Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.

        ```ruby
        current_multiple = 3
        current_multiple = 5
        ```

    2.  While `current_multiple` < `target`
        1.  Append the `current_multiple` to `multiples`.

            ```ruby
            multiples = [3]
            multiples = [3, 6]
            multiples = [3, 6, 9]
            ...
            multiples = [3, 6, 9, 12, 15, 18, 5, 10, 15]
            ```

        2.  Add `factor` to `current_multiple`.
            ```ruby
            current_multiple = 6
            current_multiple = 9
             ...
            current_multiple = 18
            current_multiple = 21
            current_multiple = 5
            current_multiple = 10
            current_multiple = 15
            current_multiple = 20
            ```

4.  Filter duplicate numbers from `multiples`.

    `multiples = [3, 6, 9, 12, 15, 18, 5, 10]`

5.  Compute and return the sum of the numbers in `multiples`.

    `78`

### Code

This is the last step in PEDAC — the “C”, which stands for “code with intent”. This stage is all about implementing the solution in your language of choice. The major benefit of investing time in the previous steps (the PEDA) is that it reduces the implementation to a simple translation of the algorithm into programming language syntax.

Don’t be alarmed if, after doing all the steps above, you still have to circle back to your algorithm. That can and will happen often. After all, you’re human, and you may have missed something. PEDAC, however, aims to minimize those mistakes, so you don’t miss major requirements and even if you are circling back to previous steps, it’s mostly for fine-tuning the approach.

Here’s a Ruby implementation of the algorithm we designed for the first mental model:

```rb
def sum_of_multiples(target, factors)
  multiples = []
  factors = [3, 5] if factors.length == 0

  factors.each do |factor|
    current_multiple = factor

    while current_multiple < target
      multiples << current_multiple
      current_multiple += factor
    end
  end

  multiples.uniq.inject(0, :+)
end

sum_of_multiples(20, [3, 5])  # returns 78
sum_of_multiples(20, [3])     # returns 63
sum_of_multiples(20, [5])     # returns 30
sum_of_multiples(20, [])      # returns 78
sum_of_multiples(1, [])       # returns 0
sum_of_multiples(20, [19])    # returns 19
```

Here’s the JavaScript implementation using the algorithm we designed for the second mental model:

```js
function sumOfMultiples(targetNumber, factors) {
  var multiples = [];
  if (factors.length === 0) {
    factors = [3, 5];
  }

  factors.forEach(function(factor) {
    var currentMultiple;
    for (currentMultiple = factor; currentMultiple < targetNumber; currentMultiple += factor) {
      if (multiples.indexOf(currentMultiple) === -1) {
        multiples.push(currentMultiple);
      }
    }
  });

  return multiples.reduce(function(sum, value) {
    return sum + value;
  }, 0);
}

sumOfMultiples(20, [3, 5]);  // returns 78
sumOfMultiples(20, [3]);     // returns 63
sumOfMultiples(20, [5]);     // returns 30
sumOfMultiples(20, []);      // returns 78
sumOfMultiples(1, []);       // returns 0
sumOfMultiples(20, [19]);    // returns 19
```

Either Ruby or JavaScript would work for both mental models. However, the first model is slightly better suited for Ruby since Ruby has a method for returning unique values in an Array; JavaScript does not.

End
