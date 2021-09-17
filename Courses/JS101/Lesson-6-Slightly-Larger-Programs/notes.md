# Lesson 6: Slightly Larger Programs

## 1. Introduction

In this lesson, we'll work on some slightly more complicated programs. These programs will be a departure from the simple ones you've seen so far; they are also beyond what you need for the JS109 assessment. However, they will challenge you to put everything you've learned to use and provide good practice for working with more extensive programs.

For the best results, take the following approach:

* Break down each problem into smaller pieces. Decomposition of the problem is probably the most challenging and most important task since you first have to understand the problem well. Your first attempt may not lead to a good solution, so don't be afraid to start over.

* Map the flow of the program in a flowchart, using sub-processes to encapsulate distinct components of the problem.

* When you're ready to tackle a component or sub-process, write the pseudocode for that sub-process. The pseudocode will probably translate into one or more functions, so be sure you understand what your inputs and outputs will be.

* Play around with the code. **Write every line of code and make sure you understand it.** Don't use copy and paste.

* *Do the assignments in sequence.* We'll walk you through the necessary steps to break down the problem.

* Don't be afraid to read the walk-throughs. Use them as guard rails so that you don't get stuck and spin your wheels for too long. However, don't sit back and read them without typing or coding along, either.

Before you start, make sure that you create a new directory for lesson 6. Call it something like lesson_6, and do all your work for this lesson in that directory.

Your working directory should now look something like this:

```sh
work            <-- this is your course 1 git repo
|
+--lesson_2     <-- all lesson 2 code goes here
|
+--lesson_3     <-- all lesson 3 code goes here
|
+--lesson_4     <-- all lesson 4 code goes here
|
+--lesson_5     <-- all lesson 5 code goes here
|
+--lesson_6     <-- all lesson 6 code goes here
```

## 2. More Node Debugger Commands

Earlier in the course we introduced some debugging techniques, including the basics of using the built-in Node.js debugger. As programs get larger and grow in complexity, the likelihood of bugs occurring in your code increases. When dealing with larger programs it is even more important to know how to identify and eliminate bugs when they occur. Before continuing with this lesson we recommend that you review [this assignment](https://launchschool.com/lessons/64655364/assignments/3b953f14).

In that earlier assignment, we listed some of the debugger's commands and outlined their basic usage. The debugger provides some additional functionality, some of which can be especially useful when working with larger or more complex programs. This functionality is described in the [Node documentation](https://launchschool.com/lessons/64655364/assignments/3b953f14). In this assignment, we'll explain and demonstrate some of it.

### Executing Expressions or Functions

You should already be familiar with the `exec` command as a way of accessing in-scope variables within the debugger. Something you may not be aware of is that the `exec` command can also be used to evaluate expressions or execute functions.

```sh
break in exec.js:8
  6
  7 let a = 1;
> 8 let b = 2;
  9
debug> exec a + b
3
```

Note that to execute a function with `exec` you need to have an invocation for that function in your code, not just the function definition.

Another way to evaluate expressions or execute functions within the debugger is to access the built in REPL. You can access the REPL via the `repl` command. Within the REPL, you can access variables that are in scope at the point where program execution was paused, and you can evaluate expressions or execute functions. Within the REPL, all of this can be done without the need for the `exec` command.

```sh
debug> repl
Press Ctrl + C to leave debug repl
> a
1
> a + b
3
```

To exit the REPL, you can use `Ctrl + C` (or `Ctrl + Shift + C` on some systems).

Video Demo `exec.js`

### Setting and Clearing Breakpoints

In the earlier assignment, we covered manually setting a breakpoint using the debugger keyword in the code file. This approach works fine, though it does mean that in order to set a breakpoint you have to exit the debugger, edit the file, and restart the debugger. This can be a pain if you want to add and then remove breakpoints at numerous points during the program execution.

Luckily there's a way to add and remove breakpoints within the debugger itself while it's running. Breakpoints can be set using the `setBreakpoint()` or `sb()` commands, and removed using the `clearBreakpoint()` or `cb()` commands.

* `setBreakpoint()` / `sb()` can be used without an argument to set a breakpoint on the current line, or with a line number passed as an argument in order to set a breakpoint on the line specified.

* `clearBreakpoint()` / `cb()` takes two arguments, the name of the file and the line number.

Video

### Stepping Into Functions

You should hopefully already be familiar with stepping through code using `n` or `next` command. This is sufficient for many situations, but if you have a function that calls another function (for example, a callback function), you may want to 'step into' the inner function at the appropriate point in the overall program execution in order to look at what's happening with the inner function execution. The Node debugger allows you to do this with the `s` or `step` command.

When you reach the inner function invocation, you can use `s` / `step` to move *into* the execution of that function, rather than just moving *over* it to the next expression or function call. Once 'inside' the function, you can step out of it using `o` or `out`.

Video => `step.js`

### Other Commands

There are a couple of other commands that might come in useful when using the debugger.

* The `help` command simply lists all of the commands that are available.
* The `list()` command can be used to reveal additional lines of code within the debugger UI.
  * Normally only five lines are visible (the current line, two above, and two below)
  * The `list()` command (called without arguments) will display five lines above and five below the current line
  * An argument can be passed in to the command to specify the number of lines to display above and below the current line. For example `list(8)` would show the current line, eight lines above it, and eight lines below it.

## 3. Tic Tac Toe Problem Decomposition

You've probably played Tic Tac Toe before. If you haven't, you can read more about it on its Wikipedia page. You only need a general idea of how to play the game, its rules, and some basic strategy, so don't get hung up on the details like history and combinatorics.

We want to build a single player Tic Tac Toe game where a user can play against the computer.

### Decomposing the Problem

Before we start coding, we must first come up with a mental map of the solution: we must first understand the problem better and decompose it into a set of smaller problems. For complex problems, a good starting point is to describe the problem in words and then build a high-level flowchart.

Let's first describe the game:

> Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. Each player takes a turn and marks a square on the board. The first player to get 3 squares in a row–horizontal, vertical, or diagonal–wins. If all 9 squares are filled and neither player has 3 in a row, the game is a tie.

That's a generic description, but we need to outline the sequence of game play a bit more before we can build a flow chart:

1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If it's a winning board, display the winner.
6. If the board is full, display tie.
7. If neither player won and the board is not full, go to #2
8. Play again?
9. If yes, go to #1
10. Goodbye!

You can see from the above sequence that there are two main loops:

* An inner loop between steps #2 and #7 that repeats as long as there is no winner and the board isn't full.
* An outer loop between steps #1 and #9 that repeats as long as the player wants to keep playing.

You may have noticed that we're using high-level pseudocode instead of formal pseudocode. We want to stay at a zoomed-out higher-level for now since all of the imperative code–the step by step directions–is encapsulated as sub-processes. For example, "display the board" doesn't go into how we should display the board; instead, we'll trust that a sub-process (a function), can take care of it. In other words, we'll figure that part out later. For now, we need to focus on higher-level thinking.

### Flowchart

Let's draw a flowchart based on the sequence outlined above:

![flowchart](ttt_flowchart.png)

If you need a refresher on flowcharts, see the [Flowchart assignment](https://launchschool.com/lessons/64655364/assignments/998c996d) from the *Small Programs* lesson.

Notice that there are a number of shapes, each of which stands for some specific processing. These shapes depict the general flow of the program, but it's at a much higher level than what we've worked with before. You can see that the sub-processes need to work with a concept that we call the "board." Every sub-process–"Display board," "User marks square," "board full?" and so on–requires us to inspect the board. In some cases, such as when we mark a square, we must permanently modify the board state.

With this flow chart in hand, we're finally ready to start writing some code.

Note: yes, you could spend more time here by writing out formal pseudocode for each sub-process. That technique would be far more detailed and would be great in a more complex program. If you're still having a hard time deconstructing the logic of this program, go ahead and take that step. Zoom in to each sub-process and try to outline a detailed approach to that problem.

## 4. Tic Tac Toe - Step 1 - Set up and display the board

We've divided our walkthrough of the Tic Tac Toe game into five assignments so that you can pause and reflect on each step of the program as you build it. In this assignment, we'll implement setting up and displaying a board. Don't worry if you can't write this code from scratch. Type along with the steps we outline below. Keep in mind that this isn't the only way to build this program: think of it as an implementation that you can refer to in case you get stuck. These walkthroughs can help you get started and may even help you figure out some edge cases that you may have missed in your implementation.

Regardless of whether you try to write your own solution, be sure to read the walkthroughs. If you write your own solution, use the walkthrough as a self-review to make sure you aren't missing anything or getting too complicated. If you don't write a solution yourself, be sure to type along as you read the walkthrough; don't just read the text and don't copy and paste the code.

The video walkthroughs are optional. They cover the same ground as the text walkthroughs, but visual learners may find them easier to follow. Regardless of whether you watch the videos, you should still read the text walkthroughs.

### Getting Started

All right. Let's move on to the implementation. We'll first take another look at the higher level breakdown that we came up with in the previous assignment:

1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If it's a winning board, display the winner.
6. If the board is full, display tie.
7. If neither player won and the board is not full, go to #2
8. Play again?
9. If yes, go to #1
10. Goodbye!

Video Walkthrough, Part 1

Run through the steps. In your first reading, you may find step #5 to be a little weird since each player has only marked one square, but we're already concerned about the logic of winning. That can be explained by step #7 which suggests a looping construct based on whether we have a result to display. If we don't, we go back to step #2. Let's take a look at the flowchart diagram as well:

![flowchart](ttt_flowchart.png)

Since it represents an output process, the "Display board" rectangle should actually be a parallelogram.

At this point, we're not concerned with *how* we'll implement a step like "Computer marks a square." Instead, we want to develop a high-level understanding of how the program will work. One thing that jumps out immediately is the notion of a board; it permeates nearly every step in the flowchart. For example, if we want to determine the winner of the game, we must inspect the state of the board; if we want to mark a square for the user, we need to alter the state of the board. Outlining the general flow of a program forces us to think about the high-level components of a program; that helps us when we begin coding.

#### Display an Empty Board

Let's start by creating a JavaScript file named tictactoe.js. The first thing we'll do is display an empty board:

```js
console.log('');
console.log('     |     |');
console.log('     |     |');
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log('     |     |');
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log('     |     |');
console.log('     |     |');
console.log('');
```

These are simple `console.log` calls, each with five spaces followed by a vertical bar and five more spaces. That gives us a nice Tic Tac Toe board. Run the program to see how it looks. It should display the following board on the console:

```sh
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
```

#### Display Board for an In-Progress Game

What we'd like to do after each move is to replace the center space in the chosen square with an `X` or `O` to denote that the square has been chosen by one of the players. So, after 3 moves, for instance, the board may look like this:

```sh
     |     |
  X  |     |
     |     |
-----+-----+-----
     |     |
     |  O  |
     |     |
-----+-----+-----
     |     |
     |     |  X
     |     |
```

If we take a look at our high-level pseudocode, you'll see that displaying the board is something we'll do over and over. This operation seems like a good candidate to abstract away as a function:

```js
function displayBoard() {
  console.log('');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('');
}
```

The `displayBoard` function isn't an interesting function at this point since it can only display the initial state where no squares are in use. This function probably needs a board as an argument and should display a grid based on that argument. However, how do we represent a board with a JavaScript data structure? This decision is crucial since the board is the main data structure of our program. Since we have nine squares on the board, one option could be to create a nine-element array that represents our board:

```js
['X', 'O', ' ', ' ', 'O', 'X', ' ', ' ', 'X']
```

That'll work, but there are other options. Another option is to create a nested array in which each subarray represents the state of each row of squares in the board. You can also use an object, which is what we'll use. There's no "right" or "best" choice here; we will choose to use an object instead, but either of the other two approaches will work.

In our board object, each key represents a specific square, numbered `1` through `9` (squares are numbered from left-to-right and top-to-bottom, so the top-left square is square `1`, and the bottom-right square is square `9`. Each value represents the symbol that goes into that square. For example, consider a board object that looks like this:

```js
let board = {
  1: 'X', // top left
  2: ' ', // top center
  3: ' ', // top right
  4: ' ', // middle left
  5: 'O', // center
  6: ' ', // middle right
  7: ' ', // bottom left
  8: ' ', // bottom center
  9: 'X', // bottom right
};
```

It should look like this when printed on the screen:

```sh
     |     |
  X  |     |
     |     |
-----+-----+-----
     |     |
     |  O  |
     |     |
-----+-----+-----
     |     |
     |     |  X
     |     |
```

Note that we use spaces (`' '`) instead of empty strings to represent the unmarked squares. We chose spaces so that we don't mess up the formatting.

Next, we need to change our `displayBoard` function to accept a board object and use that object to construct the visual board to display on the screen. We'll do that by replacing the middle space of each square with the appropriate value from the object using string interpolation with template strings:

```js
function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}
```

Note that we're using string-based indices to access values from the `board` object. That's because object keys are always strings in JavaScript. Test the new `displayBoard` function by passing it the board we created earlier.

```js
let board = {
  1: 'X',
  2: ' ',
  3: ' ',
  4: ' ',
  5: 'O',
  6: ' ',
  7: ' ',
  8: ' ',
  9: 'X',
};

displayBoard(board);
```

You'll see that we get a board with the appropriate squares marked off. Play around with this code by changing the `board` object and seeing how it affects the output on the screen. The intention is to declare and initialize a board object with spaces for all keys and then replace those spaces with `X` or `O` as the game advances.

#### Create a New Board

We've now decided on the data structure to represent the board as well as a function `displayBoard` that takes a board object and displays a grid that represents the object. Let's now create a function that returns an initial board object. The initial board object should contain only the string `' '` as values:

```js
function displayBoard(board) {
  // code omitted
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

let board = initializeBoard();
displayBoard(board);
```

The `initializeBoard` function creates and initializes an empty object, uses a loop to populate the objects keys from `1` to `9` with the string `' '`, and then returns that object.

That completes this assignment. In the next assignment, we'll implement the workflow for the user and computer choosing a move.

## 5. Tic Tac Toe - Step 2 - Player and Computer Turn

Thus far, our Tic Tac Toe implementation represents the game board with a data-structure and implements a function that displays the board on the screen. Next, we need to ask the human player to select a square to mark, then have the computer choose its square. Let's start with the player's choice.

### Player Turn

Video Walkthrough, Part 2

Ideally, we want to call a function that asks the player to choose a square. Before we implement it though, let's see the current state of our program:

```js
function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

let board = initializeBoard();

displayBoard(board);
```

Let's begin by writing a `playerChoosesSquare` function. The first thing to think about is the function's input--its arguments. We'll need to pass a board object to the function since we must mutate the board after the player chooses a square:

```js
function playerChoosesSquare(board) {

}
```

Next, we prompt the user for their square selection and read that input. We need to require the readline-sync object and also define the prompt function. By now, you should know how to do both those things so we won't show the code here.

Let's make an initial attempt at the `playerChoosesSquare` implementation:

```js
function playerChoosesSquare(board) {
  prompt('Choose a square (1-9):');
  let square = readline.question();
  board[square] = 'X';
}
```

Here, we ask the player to choose a square--a value between 1 and 9--and set the value for that square to `'X'`. For example, if she enters `9`, the value for key `9` of the board object will be set to `'X'`. Note that we don't need to convert the input to a number since the keys in JavaScript objects are always strings, and `readline.question` returns a string value.

Let's use `playerChoosesSquare` to ask for the player's move and then redisplay the board:

```js
// at bottom of program

let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
displayBoard(board);
```

If you run the program and enter a number between 1 and 9, you'll see that the appropriate square gets marked with an `X`.

```sh
$ node tictactoe.js

     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |

=> Choose a square (1-9)
5

     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |  X  |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
```

Run the program several times while inputting different numbers between 1 and 9 to verify that it works as expected.

#### Handling Bad Inputs

The current implementation of playerChoosesSquare has some problems:

1. If the player enters something other than a number between 1 and 9, it adds an unnecessary key to the board object. However, it doesn't complain about the incorrect input.
2. If a square has already been chosen, the function doesn't prevent the player from choosing that square again.

Obviously, we want to limit inputs to those that make sense. One way to do that is to insist that the board object contains a space (`' '`) in the position that corresponds to the key. Let's give it a try:

```js
function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  // valid square choices are those `board` keys whose values are spaces
  let emptySquares = Object.keys(board).filter(key => board[key] === ' ');

  while (true) {
    prompt('Choose a square (1-9):');
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares.includes(square)) {
      break; // break if it's a valid square
    } else {
      prompt("Sorry, that's not a valid choice.");
    }
  }

  board[square] = 'X';
}
```

We're using a `while (true)` loop here to keep asking the player for input until they've entered a valid choice. Valid choices are determined on line 5 by filtering out `board` keys where the value is a space. Test this new functionality by rerunning the program, this time providing both a valid and invalid square option.

```sh
$ node tictactoe.js

     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |

=> Choose a square (1-9)
10
=> Sorry, that's not a valid choice.
=> Choose a square (1-9)
1

     |     |
  X  |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
```

There's one slight improvement we should make. The prompt always asks for a number between 1 and 9, but those aren't always valid choices.

Recall that our program will run as part of a loop, with the human player and the computer taking turns until the game is over. If the user chooses `1` on her first turn and the computer then chooses `5`, then neither `1` nor `5` will be valid choices when the player selects her second square. To fix this problem, we must use the `emptySquares` array to construct our prompt message:

```js
function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  // valid square choices are those `board` keys whose values are spaces
  let emptySquares = Object.keys(board).filter(key => board[key] === ' ');

  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares.includes(square)) {
      break; // break if it's a valid square
    } else {
      prompt("Sorry, that's not a valid choice.");
    }
  }

  board[square] = 'X';
}
```

A small refactoring can be made in the `if/else` construct. Whenever we have `if/else` with a `break` statement, we can remove the `else` clause and turn the `if/else` into a guard clause:

```js
function playerChoosesSquare(board) {
  let square;
  let emptySquare = Object.keys(board).filter(key => board[key] === ' ');

  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = readline.question().trim();

    if (emptySquares.includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = 'X';
}
```

#### A Touch of Magic

From a readability standpoint, the use of spaces to represent unused squares isn't horrible, but there's no indication what those spaces mean inside our program. We can't tell at a glance that the spaces represent unused squares, nor can we distinguish them from spaces used for other purposes. Instead, we must study the context of each space character to determine what they represent. Such mystery constants are often said to be magic; they convey no information about their meaning, much as a magician doesn't reveal the secrets of his craft. In the case of magic constants, it's up to the person reading a program to divine the intent of the developer who added the magic constant to the program.

One easy way around the issue of magic constants is to use **symbolic constants** -- named constants -- instead. Symbolic constants with well-chosen names remove the magical element and reveal the purpose of each value.

For instance, the space character used to mark unused squares can be called something like `INITIAL_MARKER`:

```js
const INITIAL_MARKER = ' '; // near the top of the file

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function playerChoosesSquare(board) {
  let square;

  let emptySquares = Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });

  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares.includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = 'X';
}
```

We can also create a constant for the "X" marker that the human player uses:

```js
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';

// code omitted

function playerChoosesSquare(board) {
  let square;

  let emptySquares = Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });

  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares.includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}
```

In a little while, we'll add a `COMPUTER_MARKER` constant for the `"O"` marker.

One significant advantage of setting up constants for these markers is that you can easily replace the `"X"` and `"O"` with something else, such as ❌ (and 🔵) (that may require installing some Node packages with `npm`).

### Computer Turn

Let's now write a similar function for the computer; we'll call it `computerChoosesSquare`. For now, it will choose a random square from among those available, and set the value of that key to `O`.

```js
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

// code omitted

function computerChoosesSquare(board) {
  let emptySquares = Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER:
  });

  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares[randomIndex];
  board[square] = COMPUTER_MARKER;
}
```

Note that we're using the same expression to find empty squares in both computerChoosesSquare and playerChoosesSquare. It's a sign that we need to extract that expression to a function:

```js
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}
```

We can now call that function where we need access to empty squares:

```js
function playerChoosesSquare(board) {
  // omitted code

  // remove `let emptySquares = ...` statement

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  // omitted code
}

function computerChoosesSquare(board) {
  // remove `let emptySquares = ...` statement

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}
```

Finally, we need to call `computerChooseSquare` in our program to complete a single turn of the game. Our code looks like this:

```js
const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
computerChoosesSquare(board);

displayBoard(board);
```

Now that we have the functions we need to make square choices for the computer and the player, the next step is to implement the main game loop where we'll repeatedly ask the player and the computer to choose a square until we have a full board or a winner. Make sure that you understand what we've done so far. See you in the next assignment.

## 6. Tic Tac Toe - Step 3 - The Main Game Loop

We've made good progress so far. We have functions for making a square choice for both the computer and the player, and we're calling them both for one complete turn. The next step is to develop a loop that calls these functions repeatedly until the board is full or we have a winner. Let's first create a skeleton of the loop, then work out the details as we need them.

Video Walkthrough, Part 3

```js
// code omitted

let board = initializeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  // break if a condition is met
}
```

This loop repeatedly asks the user to choose a square, then asks the computer, and, finally, redisplays the updated board. It repeats this process until some condition is met; what is that condition? There are two, in fact:

1. There are no more empty squares, or
2. We have a winner.

Let's pretend we have functions that help determine when these conditions are met:

```js
// code omitted for brevity

let board = initializeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}
```

Here, we break out of the loop when either the board is full or someone has won. Since both functions require access to the board, both take board as the argument. Of the two functions, boardFull seems like it might be easiest to implement, so let's begin there. All we need to do is determine whether emptySquares() returns an empty list:

```js
function boardFull(board) {
  return emptySquares(board).length === 0;
}
```

Recall that `emptySquare` uses the `filter` function to select the `board` keys that have a value of `INITIAL_MARKER` (a space); these keys represent unplayed squares: neither the human nor the computer has played them. If there are no such keys, `filter` returns an empty array, which, in turn, is returned by `emptySquares`. We use that knowledge here to determine whether any squares remain. We'll want to test this function, of course, but our breaking condition also needs the `someoneWon` function. For now, we can just let it return `false` so we can test the `boardFull` function.

```js
function someoneWon(board) {
  return false;
}
```

Test the new code by running the program. You'll find that the program keeps running until the board is full.

Here's the complete code so far:

```js
const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return false;
}

let board = initializeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}
```

One thing you'll notice, though, is that we have multiple boards displayed as a result of this loop. Our terminal looks cluttered. Ideally, we only want to see the current state of the board at any time. We can accomplish that by clearing the terminal each time we display the board. One way to do that is with `console.clear()`:

```js
function displayBoard(board) {
  console.clear();

  console.log('');
  // code omitted
}
```

Rerun the program to see the effect.

In the next assignment, we'll take the final step of determining the winner of the game.

## 7. Tic Tac Toe - Step 4 - Determining the Winner

We've reached the point in our program where we can determine the winner of the game. After the program breaks out of the main game loop, there are only two possibilities: either someone has won, or we have a full board. Assuming we have an implementation for `someoneWon` at hand, let's handle those possibilities:

Video Walkthrough, Part 4

```js
while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt("It's a tie!");
}
```

Here, we're displaying a "Player Won!" or "Computer Won!" message when there's a winner and "It's a tie!" when there is no winner. The `detectWinner` function will return the name of the winner in the form of a string, or a value of `null` if neither player won. Thus, `someoneWon` can then use the return value of `detectWinner` like so:

```js
function someoneWon(board) {
  return detectWinner(board);
}
```

That's everything we need in the `someoneWon` function. Since we know that `detectWinner` will either return a string — a truthy value — or `null`, a falsy value, we can use it directly as the return value of `someoneWon`, which we'll eventually use in our `if/else` conditional.

This function is perfectly usable as we've implemented it, but it's not clearly returning a value that is intended to be used in a conditional context. It should return an explicit boolean value instead. One way to do that is to use an `if/else` inside `someoneWon`. A more concise way, though, is to use the `!` operator twice, like so:

```js
function someoneWon(board) {
  return !!detectWinner(board);
}
```

This common idiom converts a truthy value like `"abc"` to `true` and converts a falsy value like `undefined` or `null` to `false`. The consequence of using `!!` on the return value of `detectWinner` is that `someoneWon` now returns a boolean value.

At last, we're ready to write our `detectWinner` function. Let's first think about the winning condition. Take a look at this example of a board:

```sh
     |     |
  X  |  X  |  X
     |     |
-----+-----+-----
     |     |
  X  |  O  |  O
     |     |
-----+-----+-----
     |     |
  O  |  X  |  O
     |     |
```

The rules of the game say that a player wins when:

1. All three squares within any row are marked with the player's marker.
2. All three squares within any column are marked with the player's marker.
3. All three diagonal squares in either direction are marked with the player's marker.

Rewriting these rules in terms of our implementation, we can say that a player wins when any of the following sequences of squares all contain the player's marker:

* 1, 2, 3
* 4, 5, 6
* 7, 8, 9
* 1, 4, 7
* 2, 5, 8
* 3, 6, 9
* 1, 5, 9
* 3, 5, 7

We'll use a nested array to represent these 8 "winning lines." Each winning line is represented by an array that contains the keys of the three squares we'll need to examine. All of those arrays are themselves nested within an array that represents all of the winning lines. This structure lets us iterate over all of the possible winning lines, and, within each iteration, check whether the squares in that line all belong to one player. Here's our implementation:

```js
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}
```

The style used in the conditional expressions of that `if` statement may look a little strange, but it's a common way to write complex conditional expressions in an `if` or `while` statement. Continuations sometimes look a little strange, but, even so, such code is more readable than cramming everything onto one line.

Our function declares a `winningLines` variable and assigns it a two-dimensional array. Each subarray represents a winning line. We then iterate over the subarrays using a `for` loop.

We use a `for` loop here since we may need to return from the function before the end of the loop; `forEach` doesn't allow that since using `return` in the callback merely returns from the callback.

Within the loop, we use array destructuring to assign the numbers in each line -- a nested array -- to the variables `sq1`, `sq2`, and `sq3`. Thus, for example, if `winningLines[line]` points to the subarray `[1, 4, 7]`, the values `1`, `4`, and `7` will be assigned to `sq1`, `sq2`, and `sq3`, respectively. We then inspect the board for that line; if the marker at all three squares is `HUMAN_MARKER`, i.e., `'X'`, we return the string `'Player'`, if the marker at all three squares is `COMPUTER_MARKER`, we return `'Computer'`. If we make it through the entire loop without finding a winning line, we know that nobody won, so we return `null`.

Run the program and play it a few times to make sure you win, lose and tie with the computer. You should see the appropriate message displayed in each case.

### Improving the Game Loop

Video Walkthrough, Part 5

Let's take another look at our main game loop implementation:

```js
while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}
```

At first glance, the logic here may seem sound, but if you look closely, you'll realize that it has a subtle but serious bug. Let's say we're at a point in our loop where the board looks like this:

```sh
     |     |
  O  |     |  X
     |     |
-----+-----+-----
     |     |
     |  X  |
     |     |
-----+-----+-----
     |     |
  O  |  O  |  X
     |     |
```

The program asks the player to choose a square, and they choose square 6. The computer then chooses square 4. At this point, the board looks like this:

```sh
     |     |
  O  |     |  X
     |     |
-----+-----+-----
     |     |
  O  |  X  |  X
     |     |
-----+-----+-----
     |     |
  O  |  O  |  X
     |     |
```

Note that both columns 1 and 3 are winning lines. Who is the winner here? The player chose first, so they should be the winner. However, that's not what our program does: it declares the computer as the winner. If we look closely at `detectWinner`, we see that line `[1, 4, 7]` occurs before line `[3, 6, 9]` in the `winningLines` array. As a result, the function checks line `[1, 4, 7]` before it can check line `[3, 6, 9]`, so the computer gets declared the winner.

We can fix this bug with a few small changes to our main game loop:

```js
// displayBoard(board); -- delete this line

while (true) {
  displayBoard(board);

  playerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  computerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  // displayBoard(board); -- delete this line
}

displayBoard(board);

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt("It's a tie!");
}
```

The most significant change here is that we now check for a winner after each turn. This change guarantees that the board can never have winning lines for both players since the loop ends as soon as one player wins or the game is tied.

One other change is primarily cosmetic -- if we leave the calls to `displayBoard` unchanged, the final state of the board doesn't get displayed. To compensate, we move the first call from before the loop to the beginning of the loop, and the other call from the end of the loop to after the loop.

### Helpful Display

Currently, the board we display on the screen doesn't show us which marker belongs to which player. The user needs to know which marker represents them so that they are not confused about the choice that they need to make. Let's change our `displayBoard` function to display that information:

```js
function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}
```

### Play Again

Our game is almost complete at this point. As with the other major programs in this course, we want to ask the user whether they want to play again. To do that, we must wrap our main game loop in another, outer, loop and break out when the user doesn't respond with a `y` to our question:

```js
while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
```

Note that we include the board initialization in the outer loop since each game needs a separate board. At the very end, when the player doesn't want to play anymore, we display a thank you message.

Skipped Assignments 8 ~ 13

## 8. Assignment: TTT Bonus Features

You now have a simple, but fully-functional, command-line Tic Tac Toe game. It's time for you to try adding some additional features.

```js
const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again?');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
```

### Improved "join"

If we run the program as it now is, we'll see the following prompt:

```sh
=> Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, 9
```

This prompt is fine, but we'd like it to read a little better. Suppose we want to separate the last item with "or" so that it reads:

```sh
=> Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, or 9
```

Our code currently uses the `Array.prototype.join` method to create the list of numbers, but `join` can only insert a simple delimiter between each array element; it isn't smart enough to display a joining word for the last element.

Write a function named `joinOr` that produces the following results:

```js
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"
```

Use this function in the game when prompting the user to mark a square.

Note that `joinOr` has more functionality than we need for this program; for instance, it lets you specify different delimiters and different words for the last item. Make sure that you test the additional features even if you don't need them in your program; you may need this function again some day.

Hint

Try using the PEDAC approach and some pseudocode for this problem.

PEDAC and Pseudocode

**Inputs**

* An array that contains the list of values
* A delimiter (default is a comma followed by a space)
* A join word (default is `'or'`)

**Outputs**

* A string that represents the final string

**Algorithm**

* If input array is empty, return an empty string
* If input array only has one value, return that value as a string
* If input array has exactly two values, return those values separated by the join word; don't use delimiter
* If input array has three or more values, return the concatenation of all those values as follows:
  * Add the delimiter between each pair of values
  * Add the join word before the last value

**Examples/Test Cases**

See the test cases above.

Possible Solution

```js
function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) + `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}
```

A `switch` statement works well here since we need to perform different actions based on the number of elements in `arr`. If `arr` has 2 elements, then a delimiter isn't required; we can return the 2 elements separated by the value of `word`. When `arr` has more than 2 elements, we join all of the elements except the last using the `delimiter` value and concatenate the resulting string with `word` plus the last element.

Finally, you can use `joinOr` in the game like this:

```js
function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}
```

### Keep Score

Keep track of how many times the player and computer each win, and report the scores after each game. The first player to win 5 games wins the overall match (a series of 2 or more games). The score should reset to `0` for each player when beginning a new match. Don't use any global variables. However, you may want to use a global constant to represent the number of games needed to win the match.

## 14. Summary

At this point you should:

* know how to build slightly more complex programs.
* know how to map out logic and flow for a more complex program.
* know how to hold code and application logic in your head.
* know how to isolate code into reasonable "chunks" and extract it to functions.
* know how to write functions that have a single responsibility and are easy to use.
* be intimately familiar with variable scoping rules.
* be able to determine when a function mutates its arguments.
* know how to debug a complex program, using the node debugger.
* feel more comfortable with JavaScript in general.
* feel more comfortable with tearing down a seemingly complex problem.
* search for answers online.
* experiment in the node console or a code editor.

While building the programs, you should have experienced some frustration:

* Small changes in one place can cause ripple effects throughout the program.
* Loading an entire program into your head at once is hard.
* Adding a feature sometimes requires major changes to the entire program.
* A lack of guidelines to organize or break down the program into appropriate chunks.

All this has prepared you for the next step, which is learning about Object Oriented Programming. OOP helps alleviate many of these frustrations, but it introduces additional complexity and some new concepts. Be prepared; it's an entirely different way to think about programming.

Before moving on to OOP though, there's one more quiz for this course. Use this quiz as a way to check your understanding of some of the concepts covered in this lesson.
