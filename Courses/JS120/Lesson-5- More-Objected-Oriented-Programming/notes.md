# Lesson 5: More Objected Oriented Programming

## Assignment 1: Introduction

We're now ready to tackle some more extensive programs using the OO concepts that we covered in previous lessons. The projects in this lesson are going to seem extremely difficult since we're putting a great deal of knowledge to work. We must also think about various OO design tradeoffs that don't have a single correct answer.

If you find that you're struggling, type along and let the material sink in. It takes time and repetition for this material to make sense. In particular, don't worry if OO-design issues push you beyond your comfort zone. Instead, digest as much as you can, then repeat the lesson until you feel reasonably comfortable. However, don't expect to master the design aspects; that requires many years of professional experience. This lesson won't try to make you an expert on OO design. Instead, it should give you a small taste of those topics.

## Assignment 2: OO Tic Tac Toe Overview

In this and the next few assignments, we'll build a Tic Tac Toe game similar to the one we built in a prior course. This game is more complicated than Rock, Paper, Scissors since we must deal with the notion of a ***game state*** that represents the current state of the board. The RPS game doesn't have a game state, only choices.

We'll take an object-oriented approach to design our game, so we'll employ the steps we learned earlier:

1. Write a textual description of the problem or exercise.
2. Extract the significant nouns and verbs from the description.
3. Organize and associate the verbs with the nouns.

### 2.1 Description

Let's begin by writing a textual description of the game.

- Tic Tac Toe is a 2-player board game.
- The board is a 3x3 grid.
- Players take turns marking a square with a marker that identifies the player.
- Traditionally, the player to go first uses the marker `X` to mark her squares, and the player to go second uses the marker `O`.
- The first player to mark 3 squares in a row with her marker wins the game.
- A row can be a horizontal row, a vertical column, or either of the two diagonals (top-left to bottom-right and top-right to bottom-left).
- There is one human player and one computer player.
- The human player always moves (places a marker) first in the initial version of our game; you can change that later.

This description provides a little more detail than the one we used in the earlier course, but it's effectively the same.

### 2.2 Identify the Nouns and Verbs

On the surface, Tic Tac Toe is a straightforward and simple game. There aren't many nouns and verbs:

**Nouns**  | game, board, square, grid, marker, row, player, human, computer
-------|----------------------------------------------------------------
**Verbs**  | play, mark, move, place

Some of these words aren't significant to the game design so we won't discuss them further. For instance, grid is a synonym for board, so we probably don't need to concern ourselves with grids. Similarly, move and place are synonyms for mark.

### 2.3 Organize

Let's organize our words a bit by writing down the significant nouns and the verbs in a way that shows some of the most likely relationships between words:

- Game (n)
- Board (n)
- Row (n)
- Square (n)
- Marker (n)
- Player (n)
  - Mark (v)
  - Play (v)
  - Human (n)
  - Computer (n)

None of our verbs appear to apply to the game, board or square. However, that doesn't matter; remember, we had a similar issue when we started working on the Rock, Paper, Scissors game.

Note that we wrote Human and Computer beneath Player to indicate that they are subclasses of Player. A similar situation may apply to Row, Square, and Marker, but that isn't entirely clear at this point.

This list isn't necessarily final. It's entirely possible that we'll add additional nouns or verbs as we go along to fill in some gaps. It's also possible that some of our words may end up not being significant. Our primary purpose in writing this list is to give us a starting point for our program.

Our list of nouns and verbs provides a general list of the types of objects we'll need (the nouns), and the behaviors that each object should implement (the verbs).

### 2.4 Code

Now that we have a general idea of the objects we'll need and their behaviors, it's time to begin coding our solution. We'll use JavaScript classes in our program, though you can also use the constructor/prototype approach, factory functions, and so on.

## Assignment 3: OO Tic Tac Toe with Classes - Part 1

As we've seen, there are different ways that one can create objects in JavaScript. In this walkthrough, we'll use ES6 classes for the simple OO model it provides.

### 3.1 Scaffolding

We've already identified the nouns and verbs we expect to need in our program. Let's put that to work by building some skeletal classes; scaffolding, if you will. We'll need a `constructor` method in each class, and we should also think about the possible states for each class's objects. We won't go into any great detail yet, and won't make any significant design decisions just yet.

```js
// oo_tt.js
class Board {
  constructor() {
    //STUB - we'll talk about stubs a bit later
    // We need a way to model the 3x3 grid. Perhaps "squares"?
    // What data structure should we use? An Array? An Object? Something else?
    // What should the data structure store? Strings? Numbers? Square objects?
  }
}

class Square {
  constructor() {
    //STUB
    // We need some way to keep track of this square's marker.
  }
}

class Row {
  constructor() {
    //STUB
    // We need some way to identify a row of 3 squares
  }
}

class Marker {
  constructor() {
    //STUB
    // A marker is something that represents a player's "piece" on the board.
  }
}

class Player {
  constructor() {
    //STUB
    // maybe a "marker" to keep track of this player's symbol (i.e., 'X' or 'O')
  }

  mark() {
    //STUB
    // We need a way to mark the board with this player's marker.
    // How do we access the board?
  }

  play() {
    //STUB
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
    //STUB
  }
}

class Computer extends Player {
  constructor() {
    //STUB
  }
}

class TTTGame {
  constructor() {
    //STUB
    // Need a board and two players
  }

  play() {
    //STUB
    // orchestrate game play
  }
}

let game = new TTTGame();
game.play();
```

Some questions remain about where the various responsibilities lie and how to organize those behaviors. There's even a question as to whether we need all of the classes shown above. For example, do we need the `Square` and `Player` classes? How about the `Human` and `Computer` classes that extend the `Player` class? We don't have clear answers for any of these questions. We need to explore the problem and get a better feel for the code. Another outstanding question is whether we need additional classes.

Note that we've changed the name of proposed `Game` class to `TTTGame`. We don't have to do that, but this class will be our **orchestration engine**: a class that controls the flow of the application or some part of the application. It's common practice to make the orchestration engine the last class in a file, and to give it a name that is likely to be unique.

The last two lines kick off the game by creating a `TTTGame` object, then calling the `play` method.

That's a good start on our program. There's no real functionality yet, but this code should run without error, even though it does nothing useful.

We'll explain the `//STUB` comments shortly.

### 3.2 Orchestrating the Game

In this section, we'll sketch out the behavior for the play method in the TTTGame class.

At this point, you might want to start thinking about the algorithm that play should use. That suggests that maybe we need a formal problem-solving approach like the PEDAC approach you met in the previous course. Here, though, we'll be a little less formal and write a spike -- some exploratory code to help you begin sketching out your program's structure and design. Spikes, in general, look similar to pseudocode in their general outline, but they more closely resemble the final code. In fact, it is code, and some of it may not change.

Here's the spike that we'll use for the play method:

```js
class TTTGame {
  // omitted code

  play() {
    //SPIKE
    this.displayWelcomeMessage();

    while (true) {
      this.displayBoard();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    //STUB
    // show a welcome message
  }

  displayGoodbyeMessage() {
    //STUB
    // show a goodbye message
  }

  displayResults() {
    //STUB
    // show the results of this game (win, lose, tie)
  }

  displayBoard() {
    //STUB
    // display the board, including its current state
  }

  firstPlayerMoves() {
    //STUB
    // the first player makes a move
  }

  secondPlayerMoves() {
    //STUB
    // the second player makes a move
  }

  gameOver() {
    //STUB
    return false;
  }
}
```

For now, we'll assume that all these methods belong to the `TTTGame` class, so we call them with `this` to provide context.

The idea behind a spike is to provide a general outline of how the program flows. Spikes take a high-level view, focusing on the general logic of the program; they don't concern ourselves with details like what it means for the game to be over.

Note that the (mostly) empty methods we created both here and earlier are **stubs**; they serve as placeholders for functions and methods to be written or removed later. They don't have any useful functionality yet; most stubs are either empty or return a constant value. That's enough to let you test your code without having to build the entire program first. It's common to insert a comment that identifies the method as a stub or spike, much as we do above with `STUB` and `SPIKE`. Such comments help the developer keep track of what remains to be done. For brevity, we won't show these comments in the rest of our code.

Spikes and stubs are more common in OO code than procedural code since OO code doesn't have that top-to-bottom flow that characterizes procedural code.

### 3.3 Initial Test

Let's make sure that the program runs. We don't expect it to do much; however, it should start and stop without displaying any messages. Let's try it:

```js
$ node ttt.js
```

Nothing. Really, nothing at all. If you've been following along carefully, the program doesn't display any output, and it doesn't stop. That's a bug. To terminate the game, press Control-C.

Note that the gameOver stub always returns `false`; thus, the program never executes either `break` statement in the `while` loop. Instead, it enters an infinite loop. For now, we can work around that by adding a `break` statement to the end of the loop:

```js
class TTTGame {
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.displayBoard();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }
}
```

The loop should now exit after one iteration, which is enough for us to test that the code does what we expect:

```sh
$ node ttt.js
$
```

The program doesn't display anything yet, which is good -- it didn't throw an error. Furthermore, it stops running automatically. That's all that we expect of it at this point.

### 3.4 Welcome and Goodbye Messages

Let's return to the `play` spike. Two of the easiest steps to implement are to display the welcome and goodbye messages. This code is *low-hanging fruit*, meaning we can implement it quickly then focus our attention on the more complex parts of the program. Here's our code:

```js
class TTTGame {
  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }
}
```

We can see the results immediately:

```sh
$ node ttt.js
Welcome to Tic Tac Toe!
Thanks for playing Tic Tac Toe! Goodbye!
```

Ta-da!

### 3.5 What's Next?

In the next assignment, we'll implement code to display the board and its current state.

## Assignment 4: 	OO Tic Tac Toe with Classes - Part 2

Now that we've completed the easy parts, it's time to tackle the harder stuff. In this assignment, we'll implement the code needed to display the board and its current state (the player's positions). Here's the state of our code thus far:

```js
class Board {
  constructor() {
    // We need a way to model the 3x3 grid. Perhaps "squares"?
    // What data structure should we use? An Array? An Object? Something else?
    // What should the data structure store? Strings? Numbers? Square objects?
  }
}

class Square {
  constructor() {
    // We need some way to keep track of this square's marker.
  }
}

class Row {
  constructor() {
    // We need some way to identify a row of 3 squares
  }
}

class Marker {
  constructor() {
    // A marker is something that represents a player's "piece" on the board.
  }
}

class Player {
  constructor() {
    // maybe a "marker" to keep track of this player's symbol (i.e., 'X' or 'O')
  }

  mark() {
    // We need a way to mark the board with this player's marker.
    // How do we access the board?
  }

  play() {
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
  }
}

class Computer extends Player {
  constructor() {
  }
}

class TTTGame {
  constructor() {
    // Need a board and two players
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.displayBoard();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    // show the results of this game (win, lose, tie)
  }

  displayBoard() {
    // display the board, including its current state
  }

  firstPlayerMoves() {
    // the first player makes a move
  }

  secondPlayerMoves() {
    // the second player makes a move
  }

  gameOver() {
    return false;
  }
}

let game = new TTTGame();
game.play();
```

### 4.1 Display the Board



### 4.2 Getting Started with the Board Class

### 4.3 The Board's State

### 4.4 The Square Class

### 4.5 Refactor: Eliminate Magic Constants

### 4.6 Refactor: DRY Board Initialization

### 4.7 What's Next?

## Assignment 5: OO Tic Tac Toe with Classes - Part 3

## Assignment 6: OO Tic Tac Toe with Classes - Part 4

## Assignment 7: OO Tic Tac Toe with Classes - Part 5

## Assignment 8: OO Tic Tac Toe Code Discussion

## Assignment 9: OO Tic Tac Toe with Constructors and Prototypes

## Assignment 10: OO Tic Tac Toe with OLOO

## Assignment 11: OO Tic Tac Toe with Bonus Features

## Assignment 12: OO Twenty-One Overview

## Assignment 13: OO Twenty-One: Reference Implementation with Classes

## Assignment 14: Exercise Sets

## Assignment 15: Summary

## Assignment 16: JS120 Course Feedback