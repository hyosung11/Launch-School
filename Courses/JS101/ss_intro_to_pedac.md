# [JS100/101 Study Session: Intro to PEDAC | Wed. July 14th | 12:00 PM Eastern / 09:00 AM Pacific
](https://launchschool.com/posts/d14c299d)

Juliette Sinibardy ,  9 days ago

Hi everyone! I will be hosting a study group for students in JS100 & JS101. This session will focus on an introduction to solving problems with PEDAC.

This study group could be for you if:

* You're in the earlier lessons of JS101 (e.g. Lessons 1-3)
* You're new to PEDAC and want to understand each step of the problem-solving process better
* You'd like to practice PEDAC on a simpler problem

None of the above items are required, but they're a good guide to know if you should start here. We are also offering another study group: JS100/JS101 Study Group: PEDAC - More Advanced Problems. That study group is a better choice if you have more experience with PEDAC and/or you're ready to start practicing with harder/JS109 interview-level problems.

Study groups are a great way to gain confidence, and to connect with and learn from fellow students. There is no judgement here! We encourage all students to attend a session, if able.

Date: Wednesday, July 14th

Time: 12:00 PM Eastern / 11:00 AM Central / 09:00 AM Pacific

Duration: 1 hour

Activity: Walk through and introduce the PEDAC process. Practice solving a simpler problem with PEDAC. Ask Questions.

You will need: To have Zoom downloaded on your computer. Please make sure to have this set up ahead of time. I will send a message via Slack with a link to our Zoom session at the time of the event.

Sign up: This study group is for students in JS100 or JS101.

To sign up, comment below with your Slack name & where you are in the curriculum. There is space for five students! Students who have not participated in a study group before will be given priority. If it looks like five people are already signed up, but you haven't yet had a chance to attend a study group, please leave your name below anyway.

Participants:
Alex Stein
H
Laurent Staub
Byron Holmes
~~Mark A~~

---

12:01

Intros
- Juliette
- Byron
- Laurent
- Alex

Problem
Goal: understand what you're being asked to do.
Establish the rules & boundaries of the problem?
What are the implicit and explicit requirements?
Ask clarifying questions.
Make note of any questions you hope to answer by examining the test cases in the next step.

Examples
Goal: understand more about what you're being asked to do.
We should use our examination of the test cases to confirm or refute our assumptions of the problem.
A good way to see the rules/boundaries in actions.
If the return value is an array -- take a look at the order of elements.
If problem involves strings-- should we treat strings in a case-insensitive manner?
What about empty arguments?
Walk through all test cases with your understanding of the problem and see if they confirm your understanding.
May need/want to write some of your own test cases.

Data structure
Goal: begin to think logically and solution-based about the problem.
How we structure our data is closely related to our algorithm and the steps we may take to solve the problem.
Helps us to reason with our data more logically.
What does our data look like when we get it? (input)
What does our data look like when we return it? (output)
What does our data need to look like in between (intermediary steps)?

Algorithm
Goal: write out high-level steps to solve the given problem.
A logical sequence of steps for accomplishing a task or objective.
Be abstract and high-level (don't box yourself in to a specific implementation, for example).
Language-agnostic. Your algorithm should be applicable no matter what language someone is using to code a solution.
Find a solution that works (don't worry about efficiency for now) -- test your solution
Can create substeps for different parts
Separate concerns can potentially be moved into a helper function.
You can (and should) return to your algorithm during the implementation stage to update.
Although you want to keep your algorithm high-level in that you don't want your algorithm to be code-specific, you should take care not to skip over necessary steps in the problem solving process. For example, if a step in your algorithm is 'determine if number is prime'.  There should be sub-steps there walking through how you would determine if the number is prime.

Write out the steps:
- initialize var a
- loop through the array
    - check if element is greater than 10
    - if so then X
- return a

Code
Goal: translate the algorithm into your programming language of choice.
Now is the time to use pseudo-code (if you want) to act as a step in between the algorithm and the actual code.
The goal of pseudo-code at this point would be to explore the solution in the domain of code.  An intermediary step of translating your written algorithm into the final code solution.
Follow along with your algorithm step by step and code the solution.
**Run your code** often to confirm your code is working as you expect.
The key is to be in control the whole time. Code with intention and avoid hack and slash.
If you find your algorithm does not work (logical flaw), return to the algorithm step FIRST and THEN continue on with your code. Don't push through and resort to hack and slash.
Good programmers often spend the least amount of time on the coding step, because they figured everything out in the other PEDA steps.
As your language fluency increases, the C step of PEDAC will go more quickly.

```js {line-numbers}

const test = () => {
  let a = 1 + 1;
  console.log(a)
}
```

---

Presentation

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.


Problem

inputs:
- array of strings

outputs:
- array of numbers (with the same number of elements as the input array)

rules:
- a letter corresponds to a number
- to each string corresponds a SamePositionCount
- case doesn't matter
- no spaces in the strings
- no special character => only alphabet letters

what's a same position count?
- for each letter in a word, we need to compare the letter's position in the word and in the alphabet. If they match, the "return count" increases by 1.


Examples

rules:
- alphabet position: starts at 1 => can we make it start at 0?
- word position: starts at 0


Data Structure

input: array of strings
output: array of integers

intermediary steps: array

Array.prototype.map()


Algorithm

Write out the steps:
~~- make a function declaration that inputs an array of strings as a parameter
- loop through the array
    - correlate a letter with a number
    - check if element is greater than 10
    - if so then X
- return a~~
make a function declaration
check the length of the input array
map letters to numbers
check for empty array

```js {line-numbers}

console.log(solve(["abode","ABc","xyzD"])) // [4,3,1]
console.log(solve(["abide","ABc","xyz"]))  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])) // [6,5,7]
// xyzDEFghijabc
// ---1111111---

console.log(solve(["encode","abc","xyzD","ABmD"])) // [1, 3, 1, 3]
console.log(solve([])) // []
*/
```

Byron's Algorithm

Given a collections of strings

Set a var alphabet to the lowercase alphabet
Set a var resultArray to an empty array

loop through the collection of strings one by one

  - set a counter to 0
  -for each string in collection, we loop through the string
    we check the character in the string at the current index compared with 
    the character in alphabet at the current index 
    if the chars match, increment counter
  after we iterate through a single string, push counter to result array
  -after we iterate through the collection of strings
   return result array

Code

```js {line-numbers}
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet[20]
'u'

function solve() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let resultArray = [];

  // console.log(array);

  for (let index = 0; index < array.length; index +=1) {
    let count = 0;
    for (let stringIndex = 0; stringIndex < array[index].length; stringIndex += 1)
  }
}


alphabet[20]
'u'
