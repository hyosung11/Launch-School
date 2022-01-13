/* The JS 109 Session

Introductions
- Elaine
- Stan van de Poll, Netherlands, JS210, worked with Rails for 2 years
- Mary McDonald, Montreal, JS109 Interview
- Shane Ziegler, Minneapolis, JS109 written
- Aryan Binazir, Chapel Hill, NC, JS210, Lesson 2
- Jared Yeoman, Rochester, NY, written
- Hugo Robas, living in Bay Area from France, JS109 written
- H,

Topics
- Lexical Scope - structure of the source code to determine variable scope
- Closures (not in JS109)

1. **Study Tips**
- **Make Your Own Detailed Notes** → try to put the material into your own words, and make additional examples as you go.
- **Pay Attention to Definitions** - for example, what is an expression? What is a function definition vs. what is a function expression?
- **Reviewing Code Snippet Wording** - carefully review the code snippet wording that Launch School uses, and really pay attention to the level of conciseness that they use, and how precise they are
- **Make a List of ‘Hard’ Problems** **or Concepts** - it’s okay if you don’t understand something! It’s perfectly normal. As you study, I would make a list of concepts or questions that you found particularly difficult. Try to articulate **what it is** about the problem that you do not understand. Pinpoint it down to what broad concept it is and then later, spend time investigating that concept.
- Variable Assignment
- Arrow Functions
- Return Values from Functions
- Variable Scope

2. **Written Assessment Tips**
- **Attend SPOT and Study Sessions**
- **Practice writing your own Code Snippets**
- **Exchange Code Snippets with Others to get Exposure to how Others Write their Code Snippets**
- Had about 3-5 People that I exchanged Code Snippets with to get Breadth and Exposure to Different Methods
- Added Tip - find people who are doing the JS 210, they’ve done the Ruby course already so their code explanations will be top notch!
- **Make a Collection of ‘Code Snippets’** → Time Yourself writing each Code Snippet, trying to be as concise as possible while covering all the bases, keeping the Code Snippets less than 7-8minutes

3. **Interview Assessment Tips**
- **Study the Way that you Expect to Perform on the Test** - use a consistent PEDAC that works for you. Don’t be lazy.
- **Studying with a Timer for 25-30m** which will simulate the Exam Experience
- **Studying via Speaking Out Loud** - simulates the Exam Experience
- **Find Other Students that are Studying for JS 109, and reach out to do Live Coding Sessions**
- **Reflect - Be Honest with Yourself for your Learning Process -** after each problem that you do, reflect on four things:
  - How You **Felt** (**emotional**)
  - How **Clear** You Were (look at your PEDAC and think about what you were saying as you went through the problem, were you clear in your communication of your problem solving)
  - **PEDA Analysis** - look at your PEDA process. Ensure that your algorithm matches your code.
  - **C Analysis** - look at your own code, and do two things:
    - Identify Opportunities for Refactoring
    - Consider other Alternatives
    - Is my Code Well Compartmentalized and Broken Out into Components that Are Easy to Test and Understand?

In addition, if you are doing problems from CodeWars - look at the solutions of a few, and see if you can understand the thought process of the programmer. Don’t be overwhelmed if you can’t, but if you can, it is a useful exercise, particularly if the thought process differs from yours.

Compartmentalize your code to simplify and test

- ****What Do You Do When You Hit a Wall?**** → when you hit a wall or find a bug, as you practice, I want you to **mentally celebrate a little bit**. It is humbling to know that you are not perfect, you’re learning, and it’s really great - finding a bug gives you a chance to learn something new. Hitting a Wall or Finding a Bug is a **great learning opportunity**, and although it can be frustrating, you will have an approach that works for you to work through bugs.
    - Good Ideas for ‘Wall-Hitting Strategy’?
        - ***Review the Examples***
        - ***Review your Algorithm***
        - Log Different the Changing Output in Your Code
        - Check Return Values, Logic, and Scoping of your Variables
        - Review Documentation for the Methods that You’re Using (to make sure they’re working properly)
        - Breathe and Step Away from the Problem
    - Bad Ideas for ‘Wall-Hitting Strategy’?
        - Hack and Slash
*/

// What does line 10 output and why?
let firstName = "John";

const getName = name => {
  name.concat(" Doe");
  name = name.toLowerCase();
  return name;
}

getName(firstName);
console.log(firstName);

/* I give you a string of words separated by sentences. Each even indexed word, I want you to remove all the vowels, and each odd indexed word I want you to reverse the letters in the word. */


// string => string.split(' ') -> array of words separated by spaces
// -> if condition -> to identify even or odd

/* Code Snippets */
function removeVowels(word)
function reverseWord(word)
function isEvenOrOdd(index)


while (true) {
  let num = 2;
  break;
}

num; // returns ?


/*
We have a loop , followed by {}; what structure does this combination define? Explain with reference to this structure and its relationship to what happens on line 2 and line 6. What will line 6 return and why? What underlying principle does this illustrate?
*/