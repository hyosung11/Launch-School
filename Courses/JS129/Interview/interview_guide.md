# Assessment JS129: Object Oriented Programming > Part 2: Study Guide for Interview (Version 20220623 11:31)

## Format

We'll conduct the interview like a real job interview, except that we'll limit the discussion to the topics covered in course JS120. Make sure that you are clear on the core concepts from this course. You must be able to explain the concepts with precision and clarity while you write out code examples.

We'll conduct the interview using Slack Calls or Google Meet, together with a collaborative online editor like CoderPad. You should practice using the CoderPad environment before the interview via our demo pad. This pad is for demonstration purposes only; we won't use it during the interview. When you've finished exploring the demo pad, please clear any changes you made so that it's ready for the next person to use.

### Note for CoderPad

CoderPad runs JavaScript code in *strict mode*, which we discuss in depth in the next course. While you don't need to be familiar with all facets of strict mode, there is one aspect that may arise during this assessment: the implicit execution context is `undefined`, not the global object. That means that the value of `this` may be `undefined` at times. For instance:

```js
function foo() {
  console.log(this);
}

foo(); // undefined
```

Be prepared for this change before the interview. If you wish to practice on your own system instead of on CoderPad, add `"use strict"`; to the top of your JavaScript code:

```js
"use strict"; // the quotes are required

function foo() {
  console.log(this);
}

foo(); // undefined
```

## Interview Presentation

The interviewer will ask you to present or teach OOP topics. You should have a strong conceptual understanding of the core concepts in JS120. You should be able to talk about why they exist and how to use them in code and write example code to illustrate the concepts. You'll also need to use that conceptual understanding to reason with and solve various code examples and problems that the interviewer will present.

We'll ask you to speak and drive the conversation, so practice speaking and teaching others on technical topics. Make sure you study the following resources, perhaps going through them more than once.

- [JS120](https://launchschool.com/courses/f8a4a136)
- the written part of the assessment

## Communication Style

We will also assess your ability to communicate with clarity. You should speak in a clear tone and explain concepts with precision and correct vocabulary. **If you've never done this before, you should practice before the interview**. There's a reason the previous sentence is in bold.

Mistakes are normal. If you make one in the interview, we want to see how you recover, or whether you can recover at all.

## Areas of Focus

- [x] General knowledge of OOP concepts as they pertain to JavaScript.
- [x] Conventional techniques for constructing objects, including the use of prototypal inheritance.
- [ ] The ability to come up with code examples to illustrate concepts. Be prepared! Know what examples you want to use.
- [ ] The ability to integrate what you've learned and put it to work to understand unusual situations.
- [ ] An ability to speak clearly and with precision.

## Study Groups

Peer-led study groups for this assessment are listed in the Community Forum. We strongly encourage you to attend one of these study groups if you can. Speaking and articulating concepts in front of people is a unique experience, so you should practice before the interview. Most people don't find talking like this natural, but all can improve with practice. We're sure you wouldn't welcome surprises during a real job interview; you also don't want them during the assessment interview. No matter how well you think that you know the material, talking about it in an interview is different.

You can also check on the chat room channels to find one-on-one study partners or to find out if there's any interest in forming a study group.

## Final Tips

It's probably a good idea to over-prepare so that you come to the interview ready to impress. It's unlikely that you'll perform at your peak during the interview, so make sure to practice and get to a place where you are confident in your ability. Expect to be nervous and expect to be operating at a sub-optimal level. Aim to impress, nevertheless.

Speak with precision and confidence and clarity. To get the most out of this experience, treat this as a job interview.

We don't allow the use of JavaScript documentation on the interview assessment, so don't rely on it.

For some additional insights and tips, check out some of the articles students wrote.

- Joe's [article](https://medium.com/launch-school/dealing-with-nerves-and-assessments-at-launch-school-7b919c3ee08b) talks about how to approach problem solving as well as how to deal with nerves during the interview.

- This [blog post](https://medium.com/launch-school/my-study-tips-for-the-js129-assessment-646b7f652c9f) from William offers some tips and tricks on how to master the concepts in JS120.

## Interview Tips

- You are expected to drive the conversation in a favorable direction.
- You can write down in CoderPad what you think you were asked and ask the interviewer to confirm that you understand their question correctly.
- Stay engaged with the interviewer
  - While going through your explanation, you can pause and ask something like "Is this making sense so far?"
- When you finish a demonstration (code example), you can look back at the question you were asked (since you *wrote it down*) to quickly see if there's anything you forgot to mention.
- Test your code often! Use the Node console to test things before you put them in your code!

End
