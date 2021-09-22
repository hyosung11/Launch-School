# Assessment: Programming Foundations with JavaScript

## Summary

Assessment on your knowledge and mastery of course JS101.

## Prerequisites

Course No.  | Name
------------|-----
JS101  | Programming Foundations with JavaScript

You have met prerequisites for this course.

## 1. Lessons: Assessment JS109: JavaScript and General Programming

## Assignment 1. Assessment Format

This assessment is in 2 parts:

1. a timed test that you can start whenever you are ready.
2. a 1-on-1 live coding interview using Zoom or Skype.

Not passing either part results in a "Not Yet" for this assessment. See the [Assessment Rules](https://launchschool.com/gists/99b650e4) for the policy on retakes.

### Part 1 - Test

Part 1 - Test

The test constitutes part 1 of this assessment. It contains a series of questions (around 20), and you will have **3 hours** to complete it. After you submit the test, it will be graded within 24 hours. After the initial grading, you might be asked to revise your answers, even if you receive a high grade. After you submit acceptable revisions, the grader will send the test to the instructor for a final evaluation. The instructor will take a look at your initial answers and revised answers, and determine whether the work is sufficient to pass. The instructor will make a final evaluation within 24 hours of receiving the test from the grader. The entire process could take a few days, depending on how well you do on the initial answers and how quickly you respond to requests for revisions.

If you pass, you can continue on to part 2. If you don't pass, you must retake this test again according to the retake policy.

There will be a study guide for the test that walks you through exactly what to study for and how to prepare.

### Part 2 - Interview

Once you pass part 1, you'll receive instructions on scheduling a follow-up interview.

The interview will be conducted like a real job interview, except we'll only talk about topics covered in this course. Make sure that you're clear on the core concepts from the lessons, and that you're able to explain clearly with code examples during the interview. You'll be expected to describe concepts with precision and clarity, while at the same time providing code examples.

We'll conduct the interview using Zoom or Skype, along with a collaborative online editor. We'll primarily use [CoderPad](https://coderpad.io/). You should practice using the CoderPad environment ahead of time by exploring the [demo pad](https://app.coderpad.io/JEYFF66M). This pad is set up for demonstration purposes only and will not be used for the actual interview. When you're done exploring the demo pad, make sure that you clear any changes you made so that it's ready for the next person to use.

There will be a study guide for the interview that walks you through exactly what to study for and how to prepare.

## 2. Study Sessions

If you haven't already, we highly encourage you to attend a study session and/or to create one of your own to further practice your skills. Details about both kinds can be found [in this assignment](https://launchschool.com/lessons/c5707865/assignments/832cfd62). Again, it is not mandatory, but we believe it will benefit you greatly.

As you start to focus on the first assessments, our official Assessment Prep study sessions can form a useful part of your preparation. We highly recommend that you attend at least one formal JS109 study group which can be found on the Events and Forum pages. These are a great way to get a better understanding of what will be expected of you on the assessments.

### Practicing with Other Students

Choosing to do additional practice with other students is a great way to improve your ability to communicate effectively and code well under pressure. Below are some suggestions on possible ways you could structure these study sessions.

#### Written Assessment

Several students have found it helpful to send short code snippets back and forth. Student A will send Student B a code snippet. Then, Student B will time herself explaining the output and return values of that code snippet and giving an explanation for each. After completing all of the received problems, Student B will send it back to Student A where Student A can now read her answers and give feedback.

This helps both students better see their own strengths and weaknesses, how long it takes them to write out their answers, and removes some of the stress of novelty that the first written assessment may bring.

#### Interview Assessment

The first interview assessment can be daunting because of its format: you must solve coding problems in front of someone else and without any documentation or notes. Thus, the best way to prepare for this kind of assessment is to recreate the format in your practice.

A good way to do this is for you to pair up with another student. Each of you can choose a JavaScript Small Problem that you have already solved (and preferably your partner has not). Then, on a live call, you have to solve a problem in front of them, and they have to solve a problem in front of you. In addition to solving the problem well and without too much assistance, it's good to practice talking through and explaining your code as your solving the problem. This communication during the interview assessment is essential.

Although some students look to external resources outside of Launch School curriculum to search for practice problems, we recommend using the Launch School [JS101 - Small Problems](https://launchschool.com/exercises#js101_small_problems) in the first instance. Those in the Medium problem sets in particular are good preparation for the level of difficulty of the problems you will encounter during the interview. If you are thinking of using an external resource such CodeWars, we suggest that you first read [this article](https://medium.com/launch-school/the-pros-cons-of-codewars-for-ls-assessments-36167a8141cf), by one of our students, outlining the pros and cons of using CodeWars in this context (the article refers to the RB109 assessment, but is equally applicable to JS109).

## 3. Part 1: Study Guide for Test

This assessment will test your knowledge of the [Prep Course](https://launchschool.com/lessons/2fb5ba77/assignments) and JS101, as well as the [Introduction to Programming with JavaScript](https://launchschool.com/books/javascript) book. It has a huge surface area in that it covers the JavaScript programming language broadly. It does not cover Object Oriented Programming.

### Specific Topics of Interest

You should be able to clearly explain the following topics:

* declarations, initialization, assignment, and re-assignment
* variable scope, especially how variables interact with function definitions and blocks
* primitive values, objects and type coercion
* object properties
* mutability vs. immutability vs `const`
* loose and strict equality
* passing arguments into and return values out of functions
* working with Strings
~~* working with Arrays, especially the iteration methods (`forEach`, `map`, `filter`, and `find`)~~
* working with Objects: accessing keys and values of an Object as arrays
~~* arrays are objects~~
* understanding the concepts of *pass-by-reference* and *pass-by-value*
* variables as pointers
* console.log vs. return
* truthiness vs. boolean
* function definition and invocation
* function declarations, function expressions, and arrow functions
* implicit return value of function invocations
* first-class functions
* side-effects
* naming conventions (legal vs idiomatic)
* be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)

### Using a REPL

JavaScript REPLs (such as Node.js) that run code as you type it do not run that code the same way as when you run the code from a `.js` file. This can lead to discrepancies in the behavior of your code. That can influence your answers on the assessment.

Unless otherwise stated, all assessment questions that use code examples or that expect you to write code assume that the code should be run from a `.js` file. **We strongly advise against using a REPL to test the code.**

### How to Answer the Assessment Questions

The questions in this assessment will typically test your knowledge and understanding at more than one level.

* On one level, the question will test your ability to parse code and describe it with precision, or test your knowledge of some specific syntactical aspect or language-specific feature of the JavaScript programming language.
* On another level, the question will check your understanding of some deeper underlying principle; this might be some more fundamental aspect of the JavaScript language or a non-language-specific programming concept.

When answering the questions, you should:

* Explain your reasoning with reference to specific lines in the program. You can use line numbers to refer to particular lines of code where necessary.
* Answer with extreme precision. For example, say "function definition" or "function invocation" as opposed to "function" (see the section on *Precision of Language* below for more on this).
* Highlight any specific syntactical conventions or technical observations where relevant.
* Identify the fundamental concept or concepts demonstrated by the question.

#### Example

Examine the code example below. The last line outputs the string `'Hi'` rather than the string `'Hello'`. Explain what is happening here and identify the underlying principle that this demonstrates.

```js
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);
```

Compare the following possible answers to this question:

A) `greeting` is set to `Hello` on line 1. `greeting` is set to `Hi` on line 4. Line 8 outputs `greeting`, which is `Hi`.

B) The global variable `greeting` is assigned to the string `Hello` on line 1. Within the loop, `greeting` is then reassigned to the string `Hi` on line 4. On line 8, `console.log` is called with the variable `greeting` passed to it as an argument; since `greeting` is now assigned to `Hi`, this is what is output.

C) The global variable `greeting` is initialized to the string `Hello` on line 1. Within the loop, lines 3 to 6 define a block within which `greeting` is reassigned to the string `Hi` on line 4. On line 8, `console.log` is called with the variable `greeting` passed to it as an argument; since `greeting` is now assigned to `Hi`, this is what is output.

D) The global variable `greeting` is declared and initialized to the string `Hello` on line 1. Lines 3 to 6 define a loop that will execute forever, unless something happens to end the loop. When the loop begins, it first reassigns the `greeting` global variable to `Hi` on line 4. On the next line, `break`, causes the loop to end, with execution resuming after line 6. Finally, on line 8, `console.log` is called with the value of the variable `greeting` passed to it as an argument. Since `greeting` is now assigned to `Hi`, that is what gets output. This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

While none of these answers is technically incorrect, they all answer the question with varying degrees of detail and precision.

* Answer **A** describes what is happening in the code example, but does so in a fairly basic way with imprecise language. This response wouldn't be sufficient to receive full points for any of the questions in the assessment.

* Answer **B** again describes what is happening, but with greater precision of language. This answer would score higher than answer **A**, but generally wouldn't be sufficient to receive full points for the majority of questions; most questions in the assessment are looking for something more, such as *a specific piece of syntactical knowledge* and perhaps *identification of some fundamental concept.*

* Answer **C**, as well as precisely describing the example, *identifies an important JavaScript syntactical convention* that is relevant to the example code: the fact that braces next to a while statement form a block in JavaScript. We also use more precise terminology by saying that greeting is initialized instead of assigned. For some assessment questions, this answer might be enough to receive full points, but many questions expect you to demonstrate a deeper understanding of the fundamental concept that this illustrates.

* Answer **D** goes a step further than **C** by **explaining why this is important** and the *underlying principle that it demonstrates*; i.e., the fact that JavaScript has particular scoping rules which affect whether or not a variable can be referenced or reassigned. It also talks about how the `break` statement influences the execution of the loop. Finally, we also mention that we're declaring a global variable. Based on the way that this question is phrased, answer **D** would be the only answer of the four to receive full points in an actual assessment.

#### Bullet Points

Many students attempt to use bullet points to answer the questions on the exam. This makes sense in some situations:

* You have a list of explicit reasons why some code does what it does.
* You have a list of pros and cons.
* You want to provide a list of things.

In short, they work well for **lists**. (Notice that we used a bullet list to list this list of lists!) However, they don't always work as complete answers for a question. **You don't speak in bullet lists; don't write with lists.**

To illustrate, consider the following hypothetical explanation of the example code from the previous section:

* Line 1 declares a variable named greeting and initializes it as `'Hello'`.
* Line 3 begins a loop that keeps on repeating forever until the code breaks out of the loop.
* Line 4 reassigns `greeting` to `'Hi'`.
* Line 5 breaks out of the loop.
* Line 8 logs the value of `greeting` to the console.
* Variables defined in an outer scope are accessible from a nested inner scope.

This answer is essentially a **laundry list** of statements about the code. Unfortunately, laundry lists aren't very effective as answers on the assessment. They are difficult to follow, and often leave it to the reader to piece together the logic behind the list.

In the above list, for instance, there's no logical progression that actually explains what is happening. Instead, the student has simply listed a bunch of statements about each line of code, plus one unrelated item that talks about scope. However, a program is not a series of independent lines of code. Code depends on what happened before, and it influences what happens later. There's nothing in the laundry list that connects those individual bits of code together.

From the grader's point of view, this answer is incomplete:

* It doesn't mention what happens when the loop runs.
* it doesn't talk about the fact that `greeting` on line 4 is the same variable as the one shown on lines 1 and 8.
* It doesn't tie the statement about variables to the other statements.

In short, it leaves the grader with the burden of tying your bullet points together in a coherent whole.

These faults can be addressed, to a degree, in a bullet point answer. However, the laundry list approach often leads students to overlook these missing details. Paragraphs make it easier to think about the bigger picture since you're striving for clarity, not a list of everything you can think of.

Some students *overcompensate* by listing a bunch of facts that aren't really pertinent to the question. For instance, a typical answer might list several facts about the word true above:

* The `while` loop takes a condition of `true`
* The loop is looking for a truthy value, but `true` is a boolean value.
* It evaluates `true` as truthy.

This is mostly clutter for the grader, and there's some ambiguity about what "It" means in the last bullet. You may also lose some points if the additional details say something that is incorrect.

In general, a clearly written paragraph is easier to understand and grade than a laundry list. While we won't penalize you for using bullet points, it's important to realize that bullet points have weaknesses that are difficult to see when you're writing.

#### Precision of Language

Most questions require that you explain some code with words. It's important to be able to describe why something happens using precise vocabulary and be able to *pinpoint the principle* (scope, shadowing, etc.) at work. In other words, be precise and don't be vague.

For example, let's take the following piece of code.

```js
let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}

myFunc();
```

If asked to describe what the `myFunc` code does, you might be tempted to say:

> The result of the function is `"Hello, world!"`.

This statement isn't wrong, but, it's imprecise and doesn't help us understand the function. If you had written that as an answer, you might score a 2/5 on the question (40% is not a passing score).

A more precise answer would be something along the lines of this:

> The function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

In programming, we're always concerned with the output and the return value, as well as any object mutation and non-local variables being used. We need to speak in those terms, and not use vague words like "results."

When writing answers to the test questions, be as precise as possible, and use the proper vocabulary. Doing this will help you debug and understand more complex code later in your journey. If your definitions are not precise, you won't be able to lean on them to decompose complicated code. Also, you will likely not be able to pass this assessment.

### Some Specifics

For the purposes of this assessment, we will use some terms in very precise ways. You should be extremely precise in the language that you use as well. Doing so will prevent misunderstandings during grading. Relying on precise language will help both you and us understand each other.

These areas are outlined below.

#### Assignments

Consider the following assignment:

```js
greeting = 'Hello';
```

Most of the Launch School material describes this assignment as:

> The `greeting` variable is assigned to the string `'Hello'`.

However, there are places where we describe this code as:

> The string `'Hello'` is assigned to the `greeting` variable.

Both of these are acceptable in the assessment. Try to be consistent though to avoid confusion.

#### Variables

Unless mentioned specifically, we use the term **variable** in the broadest sense possible. On this exam, that means that all of the following should be treated as variables:

* Variables declared with `let` or `const`
* Function parameters
* Function names

Note in particular that object property names **are not** variables.

#### What Code Does

There are **two main ways** to describe the following code:

```js
function appendTo(str, otherStr) {
  for (let index = 0; index < otherStr.length; ++index) {
    str += otherStr[index];
  }

  return str;
}
```

**First**, there's the *implementation level description*. Here, we'd say something like this:

> We're declaring a function named `appendTo` that takes two arguments, both of which are presumed to be strings. We then use a `for` loop with an `index` local variable to iterate over the characters in the second string, appending each character to the value of the first string. We then return the result value as a new string.

An implementation-level description is fine when describing the way a function does something. However, it's completely dependent on the implementation. If the implementation changes for some reason, the description may no longer be accurate. For instance, here's the same function with a completely different implementation:

```js
function appendTo(str, otherStr) {
  return str + otherStr;
}
```

The implementation-level description no longer describes this code accurately. It's not even close.

That leads us to the second way to describe some code: *the user-level description*. Here, we describe what code does not how it does it. The description is not dependent on the implementation, but takes a *higher-level perspective* that is more enduring.

> `appendTo` is a function that takes two string arguments and returns a new string. The returned string contains the result of appending the second string to the first.

Notice that we don't mention the implementation details at all. Instead, we provide a higher-level view of the function. There's just enough information that another developer can use it in their code without first having to understand what's going on behind the scenes.

If we ask you to describe a function without reference to its implementation, it's this kind of user-level description that we're looking for. We may also ask to describe the function for other developers or for documentation purposes: again, we're looking for the user-level description.

#### Truthiness

In the assessment, we want you to be very clear about the distinction between *truthy* and *falsy* values and the boolean values `true` and `false`.

In JavaScript, the *falsy* values `false`, `0`, `NaN`, `""`, `undefined`, and `null` are all said to *evaluate to false* when used in a boolean context. All other values, the *truthy* values, are all said to *evaluate to true*. Note that saying that a value evaluates to true or false is **not** the same as saying that those values **are** `true` or `false`, or that they are **equal to** `true` or `false`. These may seem like subtle distinctions, but they are important ones.

Suppose we ask you to describe what is happening in this code:

```js
let a = "Hello";

if (a) {
  console.log("Hello is truthy");
} else {
  console.log("Hello is falsy");
}
```

If your answer says that "`a` is `true`" or that "`a` is equal to `true`" in the conditional on line 3, we would likely deduct points from your score. A much better answer would say that "`a` is truthy" or that "`a` evaluates to true" on line 3.

To sum up:

* Use "evaluates to true" or "is truthy" when discussing expressions that only have to be truthy.
* Use "evaluates to false" or "is falsy" when discussing expressions that only have to be falsy.
* Do not use "is `true`" or "is equal to `true`" unless you are specifically discussing the boolean value `true`.
* Do not use "is `false`" or "is equal to `false`" unless you are specifically discussing the boolean value `false`.

#### Distinctions

Be clear about the following distinctions:

* Parameters are the names assigned to a function's arguments; arguments are the values that get passed to the function.
* Variables are not passed to or returned by functions: **values** or **references** are passed.
* Truthiness vs Boolean values (see above)

### Online Resources

When an online resource conflicts with Launch School materials, the Launch School materials should be used on the assessment. We can't grade assessments using information that differs from what we present, especially when that information is incorrectly changed.

This is especially true with semi-official sources like the Mozilla Developer Network (MDN). Nearly anybody can update the MDN documentation, and those updates are sometimes incorrect.

### Additional Tips

When writing code for an assessment question, run your code often to check it. Make sure that you have some way to run JavaScript code in your terminal or via an online repl prepared beforehand.

Some Launch School students have blogged about their assessment experiences:

* Raúl talks about his preparation and experiences as a non-native English speaker [in this interesting article](https://medium.com/@raul.dehevia/launch-schools-109-written-assessment-a-non-native-english-speaker-s-perspective-d320b47368ba).

* Drew shares a [few tips](https://medium.com/launch-school/a-beginners-guide-to-surviving-launch-school-101-c706553252cc) to set you up for success and to make your Launch School journey a little less daunting.

Dalibor wrote a [blog article](https://medium.com/launch-school/knowing-is-not-enough-you-need-tactics-too-how-to-be-prepared-for-launch-school-written-3f7b9c9cb08e) about his strategy for success on Launch School's written assessments.

Callie's [blog article](https://medium.com/launch-school/passing-launch-schools-first-assessments-rb109-4b2b047060dc) has a wealth of useful information about preparing for both parts of the assessment: the exam and the interview. Callie speaks specifically of the Ruby-based RB109 assessments, but her advice and recommendations apply equally as well to JS109.

These articles are well worth your time; don't pass them up!

20210920 10:47 Complete assignment.

## 4. Part 1: Start the Test

Make sure that you thoroughly study the topics in the study guide. After you've done so, you may start the test.

### Time Duration
