Courses > JS101 Programming Foundations with JavaScript > Lesson 1: Preparations > 14. Lesson 1 Quiz 1

# Lesson 1 Quiz 1 (Are you sure?)

You're about to take the first quiz in the Core Curriculum. Almost every lesson in Core concludes with one or two quizzes. Before you take one, take some time to look over our [Quiz Guide](https://launchschool.com/gists/9376eab7).

Pay particular attention to the fact that the quizzes are **difficult**, and that low scores are commonplace. Don't let a low score leave you feeling frustrated or demoralized. The quizzes are intended to *highlight concepts that you might need to review*, but they are not used in any way to evaluate your performance. Use the questions you missed to focus your attention on topics where you might need a bit more study.

Please read this [quiz guide](https://launchschool.com/gists/9376eab7) before starting the quiz. It gives you an idea of what quizzes are and how to use them.

20210718 10:56 Start the Quiz

Assignment: Lesson 1 Quiz 1\
Student Name: HyoSung Bidol-Lee\
Time Started: 10:56AM EDT

A number of the questions in this quiz depend on the information you learned about in [Introduction to Programming with JavaScript book](https://launchschool.com/books/javascript).

## Question 1

What is the difference between Git and GitHub?

Your Answer === correct.

A
~~Nothing. They're the same thing, but offered by different companies; both are cloud-based remote repositories for code versioning and collaboration. BitBucket and GitLab are other examples.~~

B
~~Both are version control systems, but Git is used for Free and Open Source Software (FOSS) projects, whereas GitHub is for commercial software.~~

C
Git is a distributed version control system which was designed to be used locally without a main central repository. GitHub is a cloud-based remote repository which acts as a centralized repository for Git to enable collaboration.

D
~~Git uses a branch-and-merge workflow. Since branches can't exist on remote repositories, GitHub doesn't allow branching.~~

Discussion

* BitBucket, GitLab (and others) are alternatives to GitHub, but Git itself is distinct from these services.
* Git and GitHub are both used for FOSS and commercial software.
* Both Git and GitHub allow branching and merging.

## Question 2

When should you nest Git repositories?

Your Answer === correct

- [ ] A. Only when directed to by the course material.

- [ ] B. Only if the two repositories are for related topics.

- [x] C. You should not nest Git repositories.

- [ ] D. Only when the nested repository is for an application that isn't part of Launch School's curriculum.

## Question 3

Which of the following should you do as part of an *active learning approach* to using the video resources at Launch School?

Your Answer === correct

- [x] A. Take notes.

- [x] B. Eliminate external distractions.

- [x] C. Look up concepts you don't understand.

- [x] D. Review your notes to make sure you captured the key concepts.

Discussion

All the choices are correct. Other things that you can do are to *visualize yourself in a classroom while watching the video* or, when you've finished the video, try to *articulate the concepts in your own words*.

## Question 4

When asking for help, what might be considered a *bad* question?

Your Answer === correct

- [ ] A. A question about JavaScript syntax where you can't find the answer on MDN or Google.

- [x] B. A question that you can easily test.

- [ ] C. A question about an assignment that you haven't completed.

- [ ] D. A question about an error in your code.

Discussion

Questions that you can test easily usually aren't good questions, so B is the correct answer.

We encourage questions and want to create an environment where students feel comfortable asking all kinds of questions about the course material. However, we also want students to try things themselves. If you ask a question like "What happens when I run this code?," we might well tell you to run the code and see what happens. We may even ask you to explain the answer.

Sometimes, we may not answer a question because it's outside the course scope. Don't get discouraged if this happens to you. Such questions often mean that you're thinking deeply about the material.

## Question 5

Which of the following are built-in JavaScript data types?

Your Answer === correct

- [x] A. Undefined

- [ ] B. Integer

- [ ] C. Float

- [x] D. Null

- [x] E. String

Discussion

* JavaScript doesn't have Integer and Floats as data types.
* All JavaScript numeric values have type Number.
* It represents all numbers using a floating point system.

JavaScript has seven built-in data types:

1. `null`
2. `undefined`
3. `boolean`
4. `number`
5. `string`
6. `object`
7. `symbol`

`Integer` and `Float` **are not** built-in JavaScript data types.

Identify data types by the `typeof` operator. Variables don't have types, but the values in them do. These types define the intrinsic behavior of the values.

## Question 6

Select the statement about JS's **primitive values** that are correct:

Your Answer === wrong

- [x] A. `undefined` is a primitive value.

- [x] B. You can't mutate a primitive value after creating it.

- [ ] C. Primitive values are mutable.

- [ ] D. `NaN` is a primitive value. *I missed this one. NaN is a primitive value*

Discussion

* Primitive values are not mutable.
* `NaN` is a number in JavaScript, so it is a primitive value.
* `undefined` is a *primitive value*
* You **can't** *mutate* a *primitive value* after creating it.

## Question 7

Which of the following statements are **true** about the following code snippet?

```js
let myNumber = 3;
```

Your Answer === wrong

- [x] A. The code snippet contains only a statement. *Wrong answer!*

- [ ] B. The code snippet contains only an expression.

- [ ] C. **The code snippet contains both a statement and an expression.** **Right answer.**

- [ ] D. The code snippet contains neither a statement nor an expression.

Discussion

* `let` with a **variable name** and optional assignment *forms* a **JavaScript statement**.
* The **value** 3 is an **expression**. (Code appearing to the *right* of an `=` in a *declaration* is an *expression*.

---

**Statement**: a unit of code representing one instruction or more, usually starts with a language reserved keyword and ends, *explicitly* or *implicitly*, with a **statement terminator**. Examples of statements:

```js
> 3;
> let x = 3;
> if () {}
> for () {}
> while () {}
```

**Expression**: a unit of code that resolves to a value, as instance, **literals** & **operators**. Examples for expressions:

```js
> 3
> 1 + 2
> "expression"
> fn()
> []
> {}
```

## Question 8

Which of the following choices are **true** about the following code snippet?

```js
let myVariable = 'Hello, World';
myVariable = 23;
```

Your Answer === wrong

- [ ] A. The last line produces an error since `myVariable` already references a `string`. Once you create a variable, you can't assign a different type to that variable.

- [x] B. The two `myVariables` are different. One stores a `string`, the other a `number`. **Wrong answer. Don't select this one.**

- [x] C. This code works. Once you can create a variable, you can reassign it to a different value.

- [ ] D. All of the above are **false**.

Discussion

* Reassigning a variable to a different type is legal.
* The code contains only one variable: `myVariable`

## Question 9

Which of the following statements about the `==` (loose equality / non-strict equality) operator are true?

Your Answer === correct

- [x] A. When comparing a `number` and a `string`, JavaScript coerces the `string` to a `number`.

- [ ] B. When comparing a `number` and a `string`, JavaScript coerces the `string` to a `number` if it's on the left-hand side; it doesn't if it's on the right.

- [ ] C. When comparing a `number` and a `string`, JavaScript coerces the `string` to a `number` if it's value is numeric (i.e., 1 or 1.0).

- [ ] D. When comparing a `number` and a `string`, JavaScript coerces the `number` to a `string` and then performs a lexicographic (natural alphabetic) comparison.


Discussion

* Even if a string isn't a number, JavaScript coerces it to a number when a string and a number are mixed with `==`.
* It doesn't matter which side of the `==` contains the string operand.
* If the string contains a non-numeric value, JavaScript coerces it to `NaN`.

---

11:15 Finish first pass through questions.

Your answer was saved. You still need to submit the quiz by clicking the 'Submit My Answers' button below.

11:45 Finish second pass through the questions. I feel confident of my answers. Ready to submit my answers.

11:47 Result

Assignment: Lesson 1 Quiz 1\
Student Name: HyoSung Bidol-Lee\
Submitted at: about a minute ago\
Time taken: 0.84 hour(s)\
Score: 6/9 (66.67%)

Your quiz was graded.

11:48 WTF. Damn. I thought I had 100%. Ugh. I need to review the answers.

12:18 Reviewed the answers. Understand the mistakes I made.
