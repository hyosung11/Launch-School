# Assessment JS129: Object Oriented Programming with JavaScript

## Assignment 1: Assessment Format

This assessment is in 2 parts:

1. a timed test that you can start whenever you are ready.
2. a 1-on-1 live coding interview using Zoom or Skype.

Not passing either part results in a "Not Yet" for this assessment. See the [Assessment Rules](https://launchschool.com/gists/99b650e4) for the policy on retakes.

### Part 1 - Test

The test contains a series of questions (around 20), and you will have **3 hours** to complete it. After you submit the exam, we'll grade it within 24 hours. We may ask you to revise your answers, even if you receive a high grade. After you submit acceptable revisions, the grader will send the test to the instructor for a final evaluation. The instructor will take a look at your initial answers and revised answers, and determine whether the work is sufficient to pass. The instructor will make a final evaluation within 24 hours of receiving the test from the grader. The entire process could take a few days, depending on how well you do on your original answers and how quickly you respond to requests for revisions.

If you pass, you can continue to the next course. If you receive a "Not Yet" evaluation, you must retake the test according to the retake policy shown in our Assessment Rules.

There is a study guide for the test that walks you through what you need to study and how you should prepare.

### Part 2 - Interview

Once you pass part 1, you'll receive instructions on scheduling a follow-up interview.

The interview will be conducted like a real job interview, except we'll only talk about topics covered in this course. Make sure that you're clear on the core concepts from the lessons, and that you're able to explain clearly with code examples during the interview. You'll be expected to describe concepts with precision and clarity, while at the same time providing code examples.

We'll conduct the interview using Zoom or Skype, along with a collaborative online editor. We'll primarily use CoderPad. You should practice using the CoderPad environment ahead of time by exploring the demo pad. This pad is set up for demonstration purposes only and won't be used for the interview. When you're done exploring the demo pad, make sure that you clear any changes you made so that it's ready for the next person to use.

There is a study guide for the interview that walks you through what you need to study and how you should prepare.

## Assignment 2: Part 1: Study Guide for Test

### 2.1 Specific Topics of Interest

1. Objects, object factories, constructors and prototypes, OLOO, and ES6 classes
2. Methods and properties; instance and static methods and properties
3. Prototypal and pseudo-classical inheritance
4. Encapsulation
5. Polymorphism
6. Collaborator objects
7. Single vs multiple inheritance
8. Mix-ins; mix-ins vs. inheritance
9. Methods and functions; method invocation vs. function invocation
10. Higher-order functions
11. The global object
12. Method and property lookup sequence
13. Function execution context and this
14. Implicit and explicit execution context
15. Dealing with context loss
16. `call`, `apply`, and `bind`
17. `Object.assign` and `Object.create`
18. Built-in constructors like `Array`, `Object`, `String` and `Number`
19. Reading OO code

### 2.2 Using a REPL

JavaScript REPLs (such as Node.js) that run code as you type it do not run that code the same way as when you run the code from a `.js` file. This can lead to discrepancies in the behavior of your code. That can influence your answers on the assessment.

Unless otherwise stated, all assessment questions that use code examples or that expect you to write code assume that the code should be run from a `.js` file. **We strongly advise against using a REPL to test the code**.

### 2.3 Precision of Language

Some questions require that you explain some code or concepts with words. It's essential that you use precise vocabulary. Be sure to *pinpoint the causal mechanism at work*. In other words, use the right words and don't be vague.

For example, let's take the following code.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Woof! My name is ${this.name}.`)
  }
}
```

If we ask you to describe this code, you may say that:

> It defines a `Dog` class with two methods: a constructor and a method that has a message as a result.

This description isn't wrong, but it's imprecise and lacks some essential details. An answer like this may receive a score of 5/10 on a 10-point question; 50% is not a passing score.

A more precise answer says:

> This code defines a `Dog` class with two methods: The `constructor` method initializes a new `Dog` object, which it does by assigning the instance property `this.name` to the dog's name specified by the argument. The `sayHello` instance method logs a message to the console that includes the dog's name in place of `${this.name}`. The instance method `sayHello` returns `undefined`.

In programming, we must always concern ourselves with **outputs**, **return value**, and **object mutations**. We must use the right terms when we speak and not use vague words like "result." Furthermore, we need to be explicit about even the smallest details.

When writing answers to test questions, make sure you're as precise as possible, and that you use the proper vocabulary. Doing so will help you debug and understand more complex code later in your journey. If your definitions are imprecise, you can't use them to decompose a complicated method or program. Also, you may be unable to pass the test.

### Some Specific Definitions

For the purposes of this assessment, we will use some terms in very precise ways. You should be extremely precise in the language that you use as well. Doing so will prevent misunderstandings during grading. Relying on precise language will help both you and us understand each other.

These areas are outlined below.

#### Variables

Unless mentioned specifically, we use the term **variable** in the broadest sense possible. On this exam, that means that all of the following should be treated as variables:

- Variables declared with `let`, `const`
- Function parameters
- Function names
- Class names

*Note in particular that object property names **are not** variables.*

#### Implicit vs Explicit Execution Context

In earlier versions of JS120, we incorrectly stated that method invocations (e.g., `obj.foo()`) provide an **explicit execution context** for the method. On the surface, this usage makes sense since we're explicitly providing the object we want to use for the execution context. However, in practice, it's more common to say that method invocations provide an **implicit execution context** -- JavaScript determines the context by looking at the object used to call the method, and that is determined implicitly. It's a bit confusing, but you should use the term implicit execution context in this situation.

In practice, you use the `call`, `apply`, and `bind` methods to set an explicit execution context. You can also set the execution context explicitly with functions that accept an argument that specifies the context for a callback function. For instance, `Array.prototype.forEach` (and several other `Array.prototype` methods) take a `thisArg` argument that lets you set the context for the callback explicitly.

### The Private `[[Prototype]]` Property

In earlier versions of this course, we miscapitalized the name of this property as `[[prototype]]`. The correct capitalization is `[[Prototype]]`.

### Online Resources

When an online resource conflicts with Launch School materials, **the Launch School materials should be used on the assessment**. We can't grade assessments using information that differs from what we present, especially when that information is incorrectly changed.

This is especially true with semi-official sources like the Mozilla Developer Network (MDN). While many people rely on MDN, there are inaccuracies, inconsistencies, and conflicting information on the site.

### Additional Tips

This assessment has a different style than the JS101 written assessment, so you should expect several open-ended questions where you will need to *explain certain OOP concepts using code examples*.

Some questions near the end of the exam may take longer to answer than other questions. Be sure to allow additional time for these questions.

When writing code for an assessment question, run your code often to check it. Make sure that you have some way to run JavaScript code in your terminal or via an [online REPL](https://replit.com/@hyosung11) prepared beforehand.

Be sure to format and syntax highlight your code with [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) when including code and other special words that need to have a distinctive look to differentiate it from the surrounding text. Formatting and syntax highlighting your code will make it easier for us to accurately gauge your performance on the exam; if you don't, you may end up with a lower grade. In particular:

- Use single backticks to format inline code and names: write ``class`` to get `class`.
- Use triple backticks and a language name to format multi-line code:

```js
console.log("Hello");
console.log("Goodbye");
```

- Make sure that you use backticks (`), not apostrophes ('). On most keyboards, you can find the backtick key near the top-left corner.
- Use the Preview functionality to double-check that the output looks as you expect, especially if you use copy and paste or try to use other types of markdown formatting.

## Assignment 3: Part 1: Start the Test

## Assignment 4: Afterword

## Assignment 5; JS129 Test Feedback

## Assignment 6: Part 2: Study Guide for Interview

## Assignment 7: Part 2: Schedule an Interview

## Assignment 8: JS129 Interview Feedback
