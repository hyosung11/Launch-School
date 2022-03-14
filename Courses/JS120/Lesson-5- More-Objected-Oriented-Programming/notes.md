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

To begin, we must first decide how we want to depict the board. That's not hard: the Tic Tac Toe board is a 3x3 grid of squares, and players place their markers in the central part of each square. It's called **ASCII art**, but you don't have to be an artist to come up with something like this:

```sh
     |     |
  O  |     |  O
     |     |
-----+-----+-----
     |     |
     |  X  |
     |     |
-----+-----+-----
     |     |
  X  |     |
     |     |
```

We show the game board in an in-progress state after each player has made two moves.

We can readily convert that diagram into a series of console.log invocations:

```js
class TTTGame {
  displayBoard() {
    console.log("");
    console.log("     |     |     ");
    console.log("  O  |     |  O  ");
    console.log("     |     |     ");
    console.log("-----+-----+-----");
    console.log("     |     |     ");
    console.log("     |  X  |     ");
    console.log("     |     |     ");
    console.log("-----+-----+-----");
    console.log("     |     |     ");
    console.log("  X  |     |     ");
    console.log("     |     |     ");
    console.log("");
  }
}
```

Let's see what happens when we run this code:

```sh
$ node ttt.js
Welcome to Tic Tac Toe!

     |     |
  O  |     |  O
     |     |
-----+-----+-----
     |     |
     |  X  |
     |     |
-----+-----+-----
     |     |
  X  |     |
     |     |

Thanks for playing Tic Tac Toe! Goodbye!
```

That's what we expected to see.

We have some extraneous spaces at the end of each line that we don't need; trailing spaces are rarely a problem, but they can be a nuisance in some circumstances. It's a common practice to remove trailing spaces when they aren't needed, so let's delete them:

```js
class TTTGame {
  displayBoard() {
    console.log("");
    console.log("     |     |");
    console.log("  O  |     |  O");
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log("     |  X  |");
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log("  X  |     |");
    console.log("     |     |");
    console.log("");
  }
}
```

Test your code one more time to make sure it still works.

### 4.2 Getting Started with the Board Class

Wait a minute. Why isn't `displayBoard` in the `Board` class? Indeed, it should be; the board object should know everything it needs to keep track of its state and to render itself.

Before we move it, though, `TTTGame` needs a board object that it can use during the game. Let's create it in the `TTTGame` constructor.

```js
class TTTGame {
  constructor() {
    this.board = new Board();
  }
}
```

Now we can move `displayBoard` to the `Board` class, and use the `board` property (`this.board`) of the `TTTGame` object to access it:

```js
class Board {
  display() {
    console.log("");
    console.log("     |     |");
    console.log("  O  |     |  O");
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log("     |  X  |");
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log("  X  |     |");
    console.log("     |     |");
    console.log("");
  }
}

class TTTGame {
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  // Delete this method
  // displayBoard() {
  //   omitted code
  // }
}
```

Note that we changed the name of the method to `display` rather than `displayBoard`. Since we'll always use a board object to invoke the method, using the word "Board" in the name is redundant. It's not like `this.board.display` might decide to display a picture of the Mona Lisa instead.

Test the code and verify that it displays the board correctly. Unfortunately, it always displays the initial board; there's no way yet for it to display the game in progress,

### 4.3 The Board's State

The primary responsibility of a board object is to maintain and represent the state of the board, so it makes sense to initialize that state in the `constructor` method for the `Board` class. First, though, how should we represent the board?

Let's first assume that the squares on the board are numbered from 1 through 9, like so:

```sh
 1 | 2 | 3
---+---+---
 4 | 5 | 6
---+---+---
 7 | 8 | 9
```

An obvious choice is to represent the board as a 3x3 matrix. In JavaScript, we can represent a matrix as an array whose elements are nested subarrays. That means we can implement the board as a 3 element array of subarrays, each of which contains 3 squares. However, that may be messier and more complicated than you might expect. For starters:

- If we ask the user to choose a square by entering a number from 1-9, we have to map that number to a specific row and column number in the matrix.

- If we want to avoid the mapping, we need to ask the player to enter a row and column number instead of a single number. The user will soon go find something better to do with his time.

- Nested arrays are messy in general. You must access everything with two indices; keeping the indices straight can be very confusing.

Let's give that choice a pass. (You can try it for fun later on if you're feeling confident or a need to be humbled.)

Another approach we might try would represent the board as an array of 9 square objects. However, array indices start at 0, and our square keys start at 1. That leads to several tradeoffs we might have to make:

- Use keys 0-8 instead of 1-9 so that the keys and the array indices have a simple correspondence. However, that may confuse users of your game; most people are unaccustomed to thinking of item 0 as the first item in a list.

- Use 10 elements in the array indexed 0-9, but don't use the element at index 0. That's a bit awkward, though, and may cause issues with iteration methods like `forEach` and `map`. It may also confuse programmers looking at your code.

- Translate back and forth between square keys and array indices, adding or subtracting 1 when needed. That, too, can be confusing, and it complicates your logic noticeably.

Hmm. Neither a matrix nor an array seems like a great choice. What can we do instead? One solution that seems a bit strange at first is to create an object that has 9 properties with the names "1", "2", "3", and so on:

```js
class Board {
  constructor() {
    this.squares = {
      "1": "X",
      "2": " ",
      "3": " ",
      "4": " ",
      "5": "O",
      "6": " ",
      "7": " ",
      "8": " ",
      "9": " ",
    };
  }
}
```

The value for each property is the marker associated with that square: `"X"` for player 1, `"O"` for player 2, and `" "` (space) for unmarked squares. With this structure, we can access the marker for the square with key `"5"` as `this.squares["5"]`. The one significant tradeoff is that we must remember that we're using an ordinary object, not an array. It may still confuse other programmers a bit, but any errors that arise should be easier to debug.

Turning our attention back to the `display` method, it looks like we can use `this.squares` directly to retrieve the marker for each square:

```js
class Board {
  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}
```

Note that we're using template literals on the lines that access `this.squares`, so we need to use backticks instead of quotes.

The rest of the code is unchanged thus far, but the program now initializes and displays the board correctly.

### 4.4 The Square Class

At this time, the `Board` class uses a simple string to represent the state of each of the 9 squares. Our scaffolding code suggests that we might want to use a `Square` class to represent squares instead. What are the states and behaviors we might need in a `Square` class?

- State: The current marker: either `X`, `O`, or `" "` (a space).
- Behavior: create a new square
- Behavior: retrieve the current marker from the square
- Behavior: test whether the square is unmarked

That's not a lot, and it should be possible to write our `Board` class without a `Square` class. However, there are some pros and cons involved, as well:

- Pros
  - It makes the `Square` class available for possible reuse.
  - Using `Square` objects instead of strings shows our intent better

- Cons
  - More code
  - More indirection

It seems that we really could go either way, without much benefit or disadvantage to either approach. Since we're learning about OOP, though, let's go ahead and use a `Square` class:

```js
class Square {
  constructor(marker) {
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.squares = {
      "1": new Square(" "),
      "2": new Square(" "),
      "3": new Square(" "),
      "4": new Square(" "),
      "5": new Square(" "),
      "6": new Square(" "),
      "7": new Square(" "),
      "8": new Square(" "),
      "9": new Square(" "),
    };
  }
}
```

Note that we've moved the `Square` class from our scaffolding code to the top of the file to ensure that `Board`'s `constructor` method knows about the `Square` class. If we left the `Square` class where it was, the calls to `new Square` would raise an error. There are other ways to ensure that `Board` recognizes the `Square` class, but in most cases, this technique is easy to use and understand.

For now, squares only need to keep track of the marker that they contain. We won't need it in our game, but for debugging purposes, we'll let the `Square` constructor set the marker's value explicitly when it creates a new square. That lets us set up and test custom board scenarios.

We can take advantage of the fact that new squares are almost always unused squares. That lets us invokes the constructor without arguments to create unused squares:

```js
class Square {
  constructor(marker = " ") {
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.squares = {
      "1": new Square(),
      "2": new Square(),
      "3": new Square("X"), // testing -- remove "X" later
      "4": new Square(),
      "5": new Square("O"), // testing -- remove "O" later
      "6": new Square(),
      "7": new Square("X"), // testing -- remove "X" later
      "8": new Square(),
      "9": new Square(),
    };
  }
}
```

Let's see what happens when we try to run this code:

```sh
$ node ttt.js
Welcome to Tic Tac Toe!

     |     |
  [object Object]  |  [object Object]  |  [object Object]
     |     |
-----+-----+-----
     |     |
  [object Object]  |  [object Object]  |  [object Object]
     |     |
-----+-----+-----
     |     |
  [object Object]  |  [object Object]  |  [object Object]
     |     |

Thanks for playing Tic Tac Toe! Goodbye!
```

Oops! That's not what we want. Can you see where the problem lies? Try to determine what's wrong before proceeding. You don't need to fix it; identify it for now, and we'll fix it in a bit.

**Answer**

The problem here is that `new Square` returns a `Square` object instead of a string. Thus, `this.board` is a collection of `Square` objects, not a collection of strings. Moreover, `this.square[key]` returns a square object, not a string.

How can we fix this problem? If you want to try it on your own, take a look at the [Object.prototype.toString documentation at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString). Whether or not you try it on your own, be sure to check our solution before you continue.

**Solution**

At first glance, you might think that the `display` method can use the square's `marker` property directly. That would work, and it's perfectly acceptable for small classes and classes that you have no control over. The `Board` class is relatively small, so we could reasonably take that approach.

However, you shouldn't generally access properties directly unless you have no choice, as with the built-in types and classes from 3rd party libraries. Since we can modify the `Square` class in this application, let's try to use a more OO approach.

Perhaps we can add a getMarker method to the Square class that returns the square's marker.

```js
// Don't add this to your code!

class Square {
  getMarker() {
    return this.marker;
  }
}
```

That's simple enough, and it's safer than accessing the square's marker directly from the `Board` class. However, we'll need to call `getMarker` from the `display` method instead of just accessing the square:

```js
console.log(`  ${this.squares["1"].getMarker()}  |  ${this.squares["2"].getMarker()}  |  ${this.squares["3"]}.getMarker()`);
```

That's a bit tedious and ugly.

A cleaner solution leverages the `Object.prototype.toString` method. Since every object normally inherits from `Object.prototype` either directly or indirectly, every object, by default, has access to this method. JavaScript uses `toString` when it must implicitly convert something to a string representation. However, it returns the unhelpful `[object Object]` when passed an object. Fortunately, you can **override** `toString` in your classes; that is, you can define a `toString` method in your class that JavaScript should call instead. In the case of a square object, we want to return the associated marker as a string: `"X"`, `"O"`, or `" "`. Here's our code:

```js
class Square {
  toString() {
    return this.marker;
  }
}
```

That's identical to the `getMarker` method shown above, but we don't need to call it explicitly. Though we haven't changed the `display` method, the board should now display correctly.

### 4.5 Refactor: Eliminate Magic Constants

For readability, let's create a symbolic constant for the "magic constant" we're using to represent unused squares (a space character in this case). We'll also add symbolic constants for the X and O markers that the human and computer players will use:

```js
class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
}
```

The `static` keyword defines a property that belongs to the class, not the individual objects created from the class. It's useful for defining **class constants** like those provided in other languages. Note that we must qualify the constant name with the class name, e.g., `Square.UNUSED_SQUARE`, even if we reference it from somewhere in the class.

As of this writing, the `static` keyword for defining class-level non-method properties is still a work in progress: it hasn't been finalized in the ECMAScript standard. Most recent browsers and Node support it, but you may have some problems with older versions, and it is still subject to change. If you prefer to avoid it, you can rewrite the above code like this:

```js
class Square {
  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O";
```

We don't need the `HUMAN_MARKER` and `COMPUTER_MARKER` constants yet, but we're anticipating that we will. One significant advantage of setting up constants for these markers is that you can easily replace them with something else, such as ❌ and 🔵. You may need to install some Node packages to handle Unicode output with `npm` if you decide to do that, though.

Note that the `Square` class probably isn't an ideal location for `HUMAN_MARKER` and `COMPUTER_MARKER`. First, these constants couple the `Square` class to the idea of a human and a computer marker. That could be useful in many games, but a more general `Square` class may not care about humans and computers, especially if there are more than 2 players in the game. Secondly, they're not used by the `Square` class at all; we won't use them in our future code either.

Leaving the constants in place has benefits as well. For instance, it's easy to see what values are valid markers for the squares.

Ideally, `HUMAN_MARKER` belongs in the `Human` class, and `COMPUTER_MARKER` belongs in the `Computer` class. Another approach would involve the `Marker` class, but the `Square` class, so far, seems too simple to bother with a separate `Marker` class. That may change, but for now, we'll avoid the extra complexity and leave them here.

### 4.6 Refactor: DRY Board Initialization

The initialization of `this.squares` in the board object is repetitive; let's DRY up that code (Don't Repeat Yourself) with a loop:

```js
class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }
}
```

Note that using `String()` on line 5 isn't strictly necessary. JavaScript always treats object keys as strings.

### 4.7 What's Next?

In the next assignment, we'll create human and computer players, then implement the code that lets them each make a move.

## Assignment 5: OO Tic Tac Toe with Classes - Part 3

Currently, our game can display the playing board together with the current game state, but little else. It's time to create our players - a human and a computer. We'll also implement the code needed to let both players make one move. We'll implement turn taking and valid-move detection in the next assignment. Here's the state of our code thus far:

```js
class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
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
    this.board = new Board();
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

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

### 5.1 Creating the Players

For now, let's assume that the human player always plays first and that the computer plays second. We can update `TTTGame` to make this distinction clearer:

```js
class TTTGame {
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  humanMoves() { // was firstPlayerMoves
    console.log("human moves");
  }

  computerMoves() { // was secondPlayerMoves
    console.log("computer moves");
  }

}
```

```sh
$ node ttt.js
Welcome to Tic Tac Toe!

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

human moves
computer moves
Thanks for playing Tic Tac Toe! Goodbye!
```

Since the human and computer are both players in this game, we should create a couple of `Player` objects (a `Human` and a `Computer`) when we start the game:

```js
class Human extends Player {
  constructor() {
    super();
  }
}

class Computer extends Player {
  constructor() {
    super();
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }
}
```

Remember: the `Human` and `Computer` classes *extend* the `Player` class.

### 5.2 Get the Human's Move

Let's write some code that lets the human player pick a square, a value between 1 and 9, inclusive. The code displays a prompt, reads and validates the human's input, and then marks the selected square. If the human enters an invalid selection, we'll ask her to try again. We can use our old friend, readline-sync, to prompt her and read her choice:

```js
let readline = require("readline-sync"); // first line in ttt.js

class TTTGame {
  humanMoves() {
    let choice;

    while (true) {
      choice = readline.question("Choose a square between 1 and 9: ");

      let integerValue = parseInt(choice, 10);
      if (integerValue >= 1 && integerValue <= 9) {
        break;
      }

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    // mark the selected square with the human's marker
  }
}
```

This code is relatively straightforward. It uses a loop to solicit the human's choice of squares, then validates it with `parseInt`. If the input is valid, the loop ends. If it isn't valid, the loop issues an error message and asks her to try again.

By the way: if you think our validation is a bit too forgiving, it is. Since the code uses parseInt to validate input, it can accept invalid numbers such as `4.32`, `6b`, and `3 + 4`. We probably should reject those answers. We'll fix that later without even trying.

The two argument form of `parseInt` lets you specify the **radix** or **base** that you want to use when parsing a numeric string. For instance, the decimal numbers that most people work with every day use base-10 or a radix of 10. Such numbers are comprised of one or more digits from the 10-digit range 0 through 9. In a similar vein, computers use binary numbers: base-2 or radix 2, and the digits used are 0 and 1. You can provide the base or radix as the 2nd argument to parseInt.

Over the years, `parseInt` has seen several changes in its behavior depending on whether it receives a radix argument and the value of the string argument. Worse yet, the behavior is implementation-dependent, which means you might get different results in different engines:

```js
// possible result from engine 1
parseInt('077');   // => 77

// possible result from engine 2
parseInt('077');   // => 63
```

Both results are correct! The difference is that engine 2 interprets a number that begins with `0` as an octal number (radix 8), while engine 1 interprets it as a decimal number (radix 10). The octal value `077` is equivalent to the decimal value `63`.

Most contemporary JavaScript engines work like engine 1, but there may be some that work like engine 2. To avoid problems, always specify the radix argument.

See [MDN's parseInt documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) for more information on how `parseInt` works, especially with respect to the radix.

### 5.3 Placing the Player's Move on the Board

The `humanMoves` method is unfinished; we need to somehow mark the selected square with the human's marker (`X`). There are two main approaches that we can use depending on how we want to divide class responsibilities. One approach has the human player accept that responsibility:

```js
this.human.mark(choice, Square.HUMAN_MARKER);
```

The other approach is to have the board accept the responsibility:

```js
this.board.markSquareAt(choice, Square.HUMAN_MARKER);
```

How to choose? Either should work, but there's a minor problem with the first approach that makes it more difficult to implement -- `Player` objects don't have a board. That means that we would have to pass in a board object each time we need to mark a square:

```js
this.human.mark(choice, Square.HUMAN_MARKER, this.board);
```

That seems a bit awkward. Furthermore, we still need a `markSquareAt` method in `Board` that we can call from `mark`.

The second approach is more direct since `TTTGame` already has a `Board` object that we can use to call the method. We'll take this approach:

```js
class Square {
  setMarker(marker) {
    this.marker = marker;
  }
}

class Board {
  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }
}

class TTTGame {
  humanMoves() {
    // omitted code

    this.board.markSquareAt(choice, Square.HUMAN_MARKER);
  }
}
```

### 5.4 Defining a Player's Marker

### 5.5 Testing the Human Player's Moves

### 5.6 The Computer's Move

### 5.7 Possible Refactor: Move the Move Methods?

### 5.8 Refactor: Remove the Marker Class

### 5.8 What's Next?

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