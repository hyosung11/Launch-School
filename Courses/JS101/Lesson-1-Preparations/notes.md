# Lesson 1: Preparations Notes

## 1. Welcome

### Discussions vs General Forums

Each lesson has a separate [discussions](https://launchschool.com/lessons/c5707865/home) forum.
General Forums

### How to ask for feedback

* The most efficient way to get good feedback or help is to treat questions to the forums as questions you'd ask a co-worker. 
* Lead with the error message, or describe in detail how the error happens. 
* Outline the steps you've taken so far to address the problem, and offer your guess as to where the problem lies. 
* Paste a link to your code - this is probably your GitHub repository. 
* Try to paste the exact file, so people don't have to hunt through your repo.
* If the error output is long, don't paste the entire thing into the forums. Use a [Gist](https://docs.github.com/en/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) or Pastebin and include the link. 
* By describing what debugging steps you've already taken and where you think the problem is, you'll direct their efforts in the right path.
* Use rubber duck debugging - outline your problem when asking for help. This well help clarify the problem and may also help you resolve the issue by yourself.

### GitHub Repository

All of your code for our courses should be pushed to GitHub repositories. For this course, you can use one repository, but create a separate folder for each lesson. When asking for help, make sure you push the code from your local machine to your GitHub repository. Without your code, there's little anybody can do to help you.

### Helping Each Other

One of the benefits of going through a program like this is the other motivated students who are taking the course with you. We encourage you to get to know each other, by way of helping and pushing each other. We've seen graduates pair off to start their own projects, and refer each other for jobs. After you take this program, you'll have spent a significant amount of time learning with each other, so take time to encourage, motivate, help and learn from each other.

Feel free to ask questions, but go beyond "it doesn't work" or "I'm having issues." Take time to describe what isn't working, what the steps are to reproduce it, and any debugging steps you've already taken, and include a link to the code. Doing so will lead to faster, more helpful responses.

### Submitting Assignments

## 2. Set Up Your Profile Image

* Changed my GitHub Profile picture.
* [Gravatar](https://en.gravatar.com/) a 3rd party profile image provider

## 3. Using Markdown

*  [GitHub-flavored Markdown](https://github.github.com/gfm/)
*  Make sure that you surround code with backticks (`), not apostrophes ('). 
   *  The backtick character is usually in the top left of your keyboard. 
* Also make sure that you use the Preview functionality to double check that the output looks as you expect, especially if you copy/paste code or console output.

## 4. Finish Prep Course

- [x] finish prep course
- [ ] review prep course

## 5. System Check

- [x] Node.js version 10.0.0 or higher installed.
- [x] v16.4.1

## 6. Differences Between JavaScript Versions

* Be aware that differences exist.
* With new releases of JavaScript, features are sometimes added, deprecated, or removed entirely.
* When using the JavaScript documentation, be sure to check the compatibility charts.

## 7. Git and GitHub

Make sure your GitHub repositories are public so that we can see your code. We'll talk about code hygiene and working with teams much later in the program. For now, please follow these guidelines:

* Make frequent commits to your local repository.
* Push your code to the remote repository often.
* Make sure that you push all your work-in-progress work to the remote repository when asking for help or a code review. It's how we can see your work and help you.
* In this course, it's ok to use a single git repository for all of the assignments. Make sure to create a new directory for each lesson so that we don't have to go hunting through your code.
* Do not create a nested git repository within another git repository. For instance, if you have a git repository in your js_101 directory, don't put another in js_101/tic-tac-toe. It's fine to put multiple small programs in separate directories within the repository, but don't create repositories inside those directories.
* When we move on to web development projects, you should use a separate repository for each project, but that is not a requirement for now. It won't hurt if you do; creating new repositories will help you learn how to use git.
* Much later, we may demonstrate places where you'd want to create a separate git repository to organize code. When you do that, make sure that you don't nest git repositories.

## 8. Active Learning

There are videos in some parts of our program. Some are long while others are short. Don't lean back and relax when watching the videos, especially the long ones. Approach them as you would a lecture in school:

* Make sure there are no external distractions. Turn off the tv and cell phone.
* Take notes.
* Look up concepts that you don't understand.
* Afterward, try to articulate the concepts in your own words. Later, we'll ask you to blog about what you learned to help reinforce this practice.
* Don't browse Facebook, Twitter, and other sites while the video is running.
* Visualize yourself in a classroom. Fabricate some competition with fellow students if it helps you stay motivated.
* Most videos are short, but a few run as much as an hour or more. Try to maintain active listening for the duration.
* Review your notes after the video to make sure you have captured the key concepts.
* This course teaches you programming, but it's also important to learn how to learn, especially when it's been a while since you've been in school.

## 9. Good vs Bad Questions

We may not always be able to answer questions that go beyond what we cover in this program.

### Bad Questions

Here's an example of a bad question:

> Can I assign a new value to a variable that's defined outside the current function?

This question is bad since it's **easily testable**. We want to encourage you to try things yourself. Create a new `.js` file and give it a shot:

```js
let number = 5;

function test() {
  number = 3;
}

test();
console.log(number);
// => 3
```

### Good Questions

A better question would be to observe this behavior and then make a small change. A good question, in this case, is to ask why the behavior is so different. For instance:

> Why is it that I can assign a new value to a variable defined outside the current function, but it doesn't work when I use that variable as a parameter to the function?

```js
let number = 5;

function test(number) {
  number = 3;
}

test(number);
console.log(number);
// => 5
```

This question shows that you played with the code and observed an unexpected difference in behavior. We encourage you to ask these types of questions. Most "how does it work in JavaScript?" questions can be answered by experimenting in Node or by playing with the code in your editor. The trick to memorizing all the rules in JavaScript is **don't** -- you need to be able to _refresh_ your memory by experimenting with code. You should try to develop this habit early.

If you do ask a "bad" question, we'll probably ask you to try it in Node or your editor. Don't be offended by responses like these; they're meant to help you in the long run. We may even ask you to try things in Node when you've asked a good question -- sometimes, the best way to answer a question is to help the person asking the question find the answer on their own.

Side note: the reason that the second code snippet doesn't change the value of `number` defined on line 1 is that the `number` parameter on line 3 _shadows_ the `number` variable by creating a separate and independent variable with the same name, but with the scope limited to the function.

### Let Us Know If You Figure It Out!

If you ask a question, and then later figure out the answer on your own, please let us know! Not every question can be answered quickly, and may require some time and research. Save the person who answers your question that time and effort if you manage to answer your own question, and post what you found out.

## 10. Lesson Discussion Forums

Each lesson has a discussion forum that is accessible via the "Discussions" tab on the lesson's home page. These forums contain discussion threads initiated by other students to ask questions about course concepts, request code reviews, and get help debugging common errors. You are encouraged to use the existing threads as a learning tool. Feel free to read through them and use the search function at the top of the page. Please open a new discussion if you want to ask a question, however, even if it's related to the original question.

You may also see threads pinned to the top of the lesson forums. Pinned threads are important or helpful discussions. They often answer frequently asked questions and may help you avoid common pitfalls. Take the time to read all of the pinned threads in the discussion forum for each lesson.

After completing a course assignment, you may request a code review in the lesson discussion forum. Please read through our [Code Review Guidelines](https://launchschool.com/gists/8bbb0e2a).

## 11. Study Sessions

Studying with others — both through formal and informal study groups — is not a requirement of the Launch School curriculum. We do, however, encourage you to consider it.

### Why should I study with others?

Although Launch School is self-paced, the projects in your future career probably won't be. Working with and learning alongside others will likely be an important part of your job.

Additionally, you will be required in the future to code in front of other people, even to be evaluated. This is common in software engineering interviews and even after accepting a job. It's also one of the key reasons we have interview assessments: we want you to get used to thinking and coding under pressure.

A great way to practice for these future opportunities is by coding in front of and with other people. Although the assessments are still a few lessons away, it's never too early to start meeting and practicing what you know with other students.

### **Formal Study Groups**

Launch School TAs host several formal study groups each week. They range in topics from introductory content to preparing for various assessments (both written and interview).

At this stage, any of the **JS100/101** study groups would be good to join. They're a great way to meet fellow students in a low-pressure and friendly environment. The TAs and study group leads are there to help you, answer questions you have about the topic, and give you an opportunity to practice discussing code and coding concepts with other people.

Each study group has space for five students at a time, and you can sign up for these groups by going to the Forum page of the website (events are typically pinned posts at the top). If you're not sure what time the event is in your local timezone, visit the Events page to see it converted for you.

### **Informal Study Groups**

In addition to the formal study groups, we encourage you to practice one-on-one or in peer-led groups with other students. There are lots of way that you can meet other students to study with. You can meet potential study partners in the formal study groups. There are also a number of Slack channels focused on particular parts of the curriculum. These are a great place to encounter other students who are at the same place in the curriculum.

The structure and focus of your study session can vary depending on a number of things, such as where you are in the curriculum or any particular learning objectives you have. Here's a few ideas you can try:

* **Topic Presentation**. Pick a particular topic or programming concept, and briefly present on that topic to the rest of the group using a combination of explanations and/or code examples. Have the rest of the group ask questions and give feedback.
* **Code Example Questions**. Have each student in the study group prepare a few code examples which illustrate or explore a particular concept. Take turns to ask the rest of the group about your examples, e.g. 'what will happen when this code is run?', 'what will line 5 output?', etc.
* **Pair Problem Solving**. With a study partner, pick a coding problem that neither of you have solved before and solve it together. Discuss the problem and approach to solving it, and iterate on an approach.
* **Live Coding Practice**. With a study partner, both of you choose a problem that the other has not seen before and solve it ahead of time. Then, on a call, your partner can give you a problem (that is new to you) to solve, and you can then give them a problem (that is new to them) to solve. Practice explaining your thought process, why you're choosing certain methods, etc.
* **Flash-card Quiz**. Prepare a flash card deck on a particular topic or concept. Use these cards in the session to quiz your study partner or study group.

#### Logistics

* When organizing a meet up time, agree on how you will meet. Two good options are Slack calls and Zoom.
* It's also important to see each other's code live. A few options: use [Coderpad](https://coderpad.io/) (which allows for 2 free pads a month with the free version), use [coderpad.io/sandbox](https://app.coderpad.io/sandbox) (switching the language to JavaScript) and share your screen, or use [repl.it](https://replit.com/~).
* You can choose practice problems from throughout the curriculum lessons, in addition to the Small Problems and Basic Problems, depending on what your goals are.
* Depending on your goals, study sessions can range from 30 min-1 hour or so. Seek to agree at the beginning how long you both can spend so as to manage expectations.
* For focused study sessions, we suggest keeping the groups small (5 or less). If practicing shorter problems/concepts, it will be easier to accommodate more than 1 partner at a time; whereas with more focused practice, it's better to stick to 1 partner at a time.

The overarching goal at this point is to gain confidence and communication skills in discussing coding and coding concepts covered in the Launch School curriculum. The Launch School curriculum is structured the way it is for a reason, and we'd recommend sticking to the learning path we've outlined. This [article](https://medium.com/launch-school/the-speed-of-mastery-my-pacing-at-launch-school-3493f251a6ad) discusses one student's approach to studying at Launch School, and trusting the curriculum as part of that approach (although the article refers to the Ruby courses, the points it makes are equally applicable to the JavaScript track).

"The Speed of Mastery: My Pacing at Launch School" by Callie Buruchara

- take well-organized notes in Notion.
- get the gist the first time.
- after finishing the course, go over notes again to seek mastery.
- trust the LS curriculum

## 12. Exercises: Small Problems

While you're working through this course, you should concurrently work through the _Small Problems_ exercises from the Exercises tab:

* Do around 20 exercises (or 2 sets) after each lesson.
* The Advanced exercises sets if any are present are optional; think of those as challenges.
* In most cases, the Small Problems should each take around 10-30 minutes to complete, though some may take significantly more time. 
* You may want to space out the 20 exercises, tackling a couple per day.
* If you encounter an exercise that requires knowledge that we haven't introduced yet, feel free to skip it and work on it later. 
  * Don't get frustrated by a question that seems to draw too much on things you haven't seen yet.
* The goal of this task isn't to complete exactly 20 exercises after each lesson. 
  * We suggest that you complete all of the easy and medium exercises as part of your preparation for the first interview; 
  * 20 questions per lesson helps spread that work out.
  * Going into the interview, you should return to these questions and make sure that you've completed all the easy and medium exercises. 
  * You may still encounter topics you haven't seen yet, and that's fine: try to use a search engine to help you find the solution anyway.

Before working on the Small Problems, take time to read through our blog article about [The Two-Layer Problem](). This article addresses the challenge of solving a problem while simultaneously learning a new programming language.

"The Two-Layer Problem" by Launch School

* learning to solve problems while simultaneously memorizing the syntax of a particular language.

> Write a program that finds all the words in the english language (anagrams) that can be formed by using the letters in a given string.

* If you’re a programming beginner and find some elementary coding problems too difficult, it’s very likely caused by trying to code too soon.
* Divide the problem into two sub-problems:
  1. Identifying the logical steps of finding all anagrams of a string in a dictionary
  2. Representing that logic with a programming language

Formulating the logic is the more challenging and important layer of the problem. This step requires you try to reduce the problem to its essence — its most abstract form. Rather than reach for books on logic and philosophy here, we want to stay in the practical, programming realm and come up with a step-by-step algorithm that we can readily convert to a working program.
#### PEDAC
| Objective | Step | Description|
| :--- | :---  | :-----      |
| Process the Problem | Understand the Problem | <ul><li>Identify expected input and output</li><li>Make the requirements explicit</li><li>Identify rules</li><li>Mental model of the problem (optional)</li></ul> |
| | Examples/Test Case | Validate understanding of the problem |
| | Data Structure | How we represent data that we will work with when converting the input to output. |
| | Algorithm | Steps for converting input to output |
| Code with Intent | Code | Implementation of Algorithm |
{"mode":"full","isActive":false}

Beginner programmers often find problem solving difficult because they must struggle with two concerns at the same time.

  * Finding a process that lets you separate the logic concern from the syntax concern greatly helps in reducing the difficulty. 
  * It also helps develop a problem-solving process that’s independent of any particular language.

_You may find it helpful to work some exercises multiple times to explore their depth and to allow the exercise to sink in fully._

[JS101 Small Problems Exercises](https://launchschool.com/exercises#js101_small_problems)

## 13. Summary

You're almost ready to start the next lesson! First, though, there is a short quiz on some of the topics we've covered in this lesson. You should:

* Mark this assignment as complete, then click on "Quiz" to go to the quiz.
* Answer all of the questions in the quiz and submit your answers.
* Once you've submitted your answers, you'll receive a score, and a "Take me to the next lesson" button will appear.
* If you're ready to move on, click on the button to access the next lesson.
* The quizzes in this course can be a useful indicator of topics you may want to review before moving on to a subsequent lesson.

[Some Advice to Those at the Beginning of Launch School](https://medium.com/launch-school/some-advice-to-those-at-the-beginning-of-launch-school-a6ff0b655a5d)

* A place to write an outline of the course
  * outline the course to serve as a _highly-functional and searchable table of contents_.
  * Having your own outline lets you reference all the course material much more efficiently at any time you would like to reference it in the future, especially while preparing for assessments. 
  * the outline for the entire course (e.g. RB101) should be in one document, not several.

* The ability to use Anki reasonably well
  * start every study session with Anki

* A study buddy you get along with well for weekly sessions

* A project management tool to keep track of to-dos (e.g. Trello)

* The ability to carve out times of total focus on what you set out to do

This means you are as thorough as possible the first time. One advantage of doing this all upfront is that it lets the information sink in over time, especially the Anki cards, which you’ll have more time to review and begin to build into your long-term memory.

[A Few Tips on Using Anki for Learning To Code](https://medium.com/nerd-for-tech/a-few-tips-on-using-anki-for-learning-to-code-4ad01f2080a3)

* Use Anki for memorization, not learning in general. 
* In other words, if you need to master a concept from scratch, or learn a procedure, or problem solve, Anki is not your go-to tool. 
* The ideal flash card takes no more than two seconds to understand what’s being asked, and no more than five seconds more to answer it. 
* If I can’t find a way to fit what is essential for practicing a certain thing so that I will — even after having not encountered it for weeks — be able to grok the question within 10 seconds and answer it within 5 or so seconds after that, it is very likely not flash card fare.

## 14. Lesson 1 Quiz 1

You're about to take the first quiz in the Core Curriculum. Almost every lesson in Core concludes with one or two quizzes. Before you take one, take some time to look over our [Quiz Guide](https://launchschool.com/gists/9376eab7).

Pay particular attention to the fact that the quizzes are difficult, and that low scores are commonplace. Don't let a low score leave you feeling frustrated or demoralized. The quizzes are intended to highlight concepts that you might need to review, but they are not used in any way to evaluate your performance. Use the questions you missed to focus your attention on topics where you might need a bit more study.

### Quiz Guide

Quizzes are auto-graded checkpoints that test your knowledge of the current lesson. Its goal is to allow you to check your understanding of the topics in the current lesson without any consequences attached to your performance. It is solely for your own benefit.

Given this, please take note of the following when working through a quiz:

* You will get a grade, but it won't be used to assess you in a formal capacity.
* Quizzes are open book. Feel free to use the course materials to find answers.
* Quizzes are not timed. Do not rush through answering a question. Take as much time as you need to work through quizzes. Many quiz questions are very nuanced and contain subtle, but important, edge cases to consider.
* There are no partial points, since everything in quizzes is auto-graded.
* Low scores are common on many quizzes. Try not to feel demoralized if you get a low score.
* Try to understand why you missed specific questions and use that analysis to firm up your mastery of the material.
* Quizzes focus on the topics covered in the current lesson. However, some questions may cover topics from an earlier lesson or from the reading material.
* Quizzes are blocking. You have to take them to get to the next assignment/lesson.

### FAQ

#### Can I retake quizzes?

Yes and no. Your first attempt at a quiz is the one that gets recorded permanently, so you can't change the score. However, you can review the questions on the quiz as a self-test: simply click the Hide Your Answers button to hide the previous results.

#### What happens if I score low on quizzes?

Officially, nothing will happen. It doesn't affect your progress in the Launch School curriculum. Consistent low scores, however, may imply that you must review some materials more carefully.

#### Does a low score mean I'm doing poorly?

No. The quizzes are difficult and sometimes tricky. Furthermore, each question is either right or wrong with no partial credit. Combined, these features make low scores commonplace for all students. What matters is not your score, but how you deal with the missed answers. Use the missed answers to solidify your mastery of the related concepts.

#### Where can I view my quiz scores?

You can view your quiz scores from `My Assessments > Quizzes` from the side navigation.

What if I think a quiz answer is wrong or ambiguous?
Please submit feedback together with the supporting reason why you think the answer is wrong. We will work quickly to correct it.

#### Is it ok to talk about quizzes in Slack? Or in the lesson discussion?

Yes, though it is recommended that you talk about it in the lesson discussion. It gives everyone a chance to see the discussion, and also more room to warn others that there are possible "spoilers" in the post as compared to Slack.

#### Are my answers saved if I accidentally exit the browser while taking a quiz?

The answers you've clicked "saved" on are stored. You can go back to the quiz by going to My Assessments > Quizzes. On the quizzes tab, you'll find the quiz you haven't finished to have a status of "Awaiting Answers." This is similar to how real assessment exams work.

#### Can I skip quizzes?

No, you can't. You must complete the quiz before you can proceed to the next assignment/lesson.

End