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

In the `humanMoves` method, we pass the human player's marker (`X`) to the board object. You probably realize that somewhere else in this program, we also need to pass the computer's marker (`O`) to `markSquareAt`. With that in mind, it might be wise to let each player object define its marker. Let's try it:

```js
class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  // Delete this code - `Board` provides `markSquareAt` instead
  // mark() {
  //   ...
  // }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  humanMoves() {
    // omitted code

    this.board.markSquareAt(choice, this.human.getMarker());
  }
}
```

### 5.5 Testing the Human Player's Moves

Let's test the program and make sure the board updates as expected. We'll add an extra call to `this.board.display` so we can see the results of the human's move.

```js
class TTTGame {
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      this.board.display(); // so we can see human's move
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }
}
```

```sh
$ node ttt.js
Welcome to Tic Tac Toe!

     |     |
     |     |  X
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
  O  |     |
     |     |

Choose a square between 1 and 9: 2

     |     |
     |  X  |  X
     |     |
-----+-----+-----
     |     |
     |     |
     |     |
-----+-----+-----
     |     |
  O  |     |
     |     |

computer moves
Thanks for playing Tic Tac Toe! Goodbye!
```

Looks good! Try some other tests on your own. Be sure to choose each possible square, and to pay attention to the buggy behavior that occurs when you enter invalid input or choose a square that already has a marker.

### 5.6 The Computer's Move

We've got a pretty dumb computer, so we won't strain its processors by making it think about complicated stuff like strategy. Instead, it will pick squares at random; that should be an effective strategy. Here's our code:

```js
class TTTGame {
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      this.board.display(); // so we can see the human's move
      if (this.gameOver()) break;

      this.computerMoves();
      this.board.display(); // so we can see the computer's move
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  computerMoves() {
    let choice = Math.floor((9 * Math.random()) + 1);
    this.board.markSquareAt(choice, this.computer.getMarker());
  }
}
```

Not much to it other than the expression that generates a random integer between 1 and 9, inclusive. The line that marks the square with the computer's marker is almost identical to the corresponding line in `humanMoves`. We also added a 3rd call to `this.board.display` so we can see the board after the computer plays.

Go ahead and "play" the game several times. Make sure you play it often enough to see the bug caused by choosing a random square for the computer's move. You'll fix that bug later. (The computer's move overwrites the player's move.)

### 5.7 Possible Refactor: Move the Move Methods?

You may have noticed that `humanMoves` and `computerMoves` are part of `TTTGame` rather than part of the `Human` and `Computer` classes, respectively. If that seems odd, it is, but just a bit. As it happens, though, how a player moves is an aspect of the game, not the player. Though it seems like `humanMoves` and `computerMoves` should be part of the `Human` and `Computer` classes, they should instead be part of `TTTGame`.

If you're confused by that, you're not alone. Our initial attempt at this program placed the player-move methods in the `Human` and `Computer` classes. However, as the game grew increasingly complex, the Human and Computer classes became ever more tightly coupled with the `Board` and `TTTGame` classes. That made the program inflexible and hard to modify. Eventually, we decided to keep the player-move methods in `TTTGame`. It's a tradeoff, and an example of how choosing the right design isn't always easy.

### 5.8 Refactor: Remove the Marker Class

Our original design called for a `Marker` class: something that the `Player` class might use to represent the markers associated with each player. While our design isn't complete yet, our decision to use single-character strings to represent the markers seems like it will do the job. If we were to use something more complex as a marker -- say an image file of some kind -- then a `Marker` class might be worth the effort. For now, though, the built-in `String` class should do the trick. Go ahead and remove the `Marker` class from your code:

```js
// DELETE THIS CODE
// class Marker {
//   constructor() {
//     // A marker is something that represents a player's "piece" on the board.
//   }
// }
```

### 5.8 What's Next?

In the next assignment, we'll implement turn taking and valid-move detection.

## Assignment 6: OO Tic Tac Toe with Classes - Part 4

Our game is starting to look a bit like a complete Tic Tac Toe game. However, each player only gets one shot to play. Furthermore, both players can make invalid moves, and the game will accept them. We'll address both issues in this assignment. Here's the state of our code thus far:

```js
let readline = require("readline-sync");

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

  setMarker(marker) {
    this.marker = marker;
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

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }
}

class Row {
  constructor() {
    // We need some way to identify a row of 3 squares
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  play() {
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      this.board.display(); // so we can see human's move
      if (this.gameOver()) break;

      this.computerMoves();
      this.board.display(); // so we can see the computer's move
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

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = Math.floor((9 * Math.random()) + 1);
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return false;
  }
}

let game = new TTTGame();
game.play();
```

### 6.1 Taking Turns

The human and computer should take turns playing until the game is over. Most of that is easy to do with what we have so far: remove the `break` statement from the loop in play method in `TTTGame`. We'll also remove the extraneous calls to `this.board.display` so the board only displays when the human is ready to make a move:

```js
class TTTGame {
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      // this.board.display(); -- Delete this line
      if (this.gameOver()) break;

      this.computerMoves();
      // this.board.display(); -- Delete this line
      if (this.gameOver()) break;
      // break; -- Delete this line
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }
}
```

Go ahead and play again. This time you'll find that there's no obvious way for the game to end; gameplay keeps going long after the board is full or either player gets 3 markers in a row. Furthermore, both players can choose any square at any time, including squares that already have a marker. Such great fun! (To quit the game, press Control-C at the `Choose a square` prompt.)

### 6.2 Validating Moves

Let's see what we can do about that bug that lets the players choose any square on the board, regardless of whether it's available.

One approach that we may want to consider involves asking the board object to check whether a square is available. For instance, we may start writing code like this:

```js
// Don't add this code to your game!

class Square {
  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

class Board {
  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }
}
```

This approach might work. However, if we look at humanMoves in the TTTGame class, we'll see that we tell the user to enter a value between 1 and 9. However, some squares will no longer be available; by the human player's second turn, there should be 2 squares that she can't choose. Ideally, we want to change our prompt to reflect the available choices:

```sh
Choose a square (1, 2, 4, 6, 7, 8, 9):
```

Furthermore, those items should be the only choices that the game accepts.

One way to build the desired prompt is to build an array that contains the keys for all unused squares on the board. We can use that array to construct the prompt. We can also use the array to determine whether the human's move is valid and repeat the same process to determine whether the computer's move is valid. That suggests that a list of unused square's keys may be more useful than merely checking whether a single square is available.

First, let's create an `unusedSquares` method on the `Board` class that returns an array of the unused squares; the array should contain the keys associated with those squares, not square objects. We could also call this method something like `keysForUnusedSquares` to be more explicit, but `unusedSquares` should be okay; mentioning keys is a bit wordy:

```js
class Square {
  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

class Board {
  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }
};
```

We can use the return value of `unusedSquares` to construct the prompt:

```js
class TTTGame {
  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${validChoices.join(", ")}): `;
      choice = readline.question(prompt);

      let integerValue = parseInt(choice, 10);
      if (integerValue >= 1 && integerValue <= 9) {
        break;
      }

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }
}
```

The prompt now changes based on which squares are available.

We can use the same array to determine whether the human's choice is valid:

```js
class TTTGame {
  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${validChoices.join(", ")}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }
}
```

Finally, we can use `unusedSquares` to validate the computer's choice:

```js
class TTTGame{
  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }
}
```

If you run this code now, you should find that gameplay proceeds as expected, up until the point when the computer makes its final move. At that point, it enters an infinite loop (again!); press Control-C to exit the program.

The infinite loop occurs since the computer has no moves available, so the `do...while` loop never finds a valid choice. We could add some code to this method to handle that more cleanly, but this situation should never occur in the final game; the game should never call `moves` in the `Computer` or `Human` class when the board is full.

### 6.3 Refactor: Remove `play` Method from `Player` Class

At this point, it's clear that we don't need the play method in Player, so let's go ahead and remove it:

```js
class Player {
  // Delete this method
  // play() {
  //   // We need a way for each player to play the game.
  //   // Do we need access to the board?
  // }
}
```

### 6.4 What's Next?

In the next assignment, we'll implement end-of-game and winner detection.

## Assignment 7: OO Tic Tac Toe with Classes - Part 5

All that remains at this point is to determine whether the game is over and to determine who won: the human, the computer, or neither (a tie game). Here's the state of our code thus far:

```js
let readline = require("readline-sync");

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

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
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

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }
}

class Row {
  constructor() {
    // We need some way to identify a row of 3 squares
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
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

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${validChoices.join(", ")}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return false;
  }
}

let game = new TTTGame();
game.play();
```

Remember that this code enters an infinite loop when the board is full. We'll fix that in this assignment.

### 7.1 Is the Game Over?

Currently, the program enters an infinite loop when the board is full. While that loop occurs in the `computerMoves` method on the `TTTGame` class due to the lack of valid moves on a full board, the root of the problem is that we shouldn't call `computerMoves` at all when the board is full. It's one of two conditions we must check for to determine when the game is over. The other occurs when one player or the other plays a winning marker.

Let's implement the game-over functionality. We'll begin with a `gameOver` method that checks for both game-over conditions. For clarity, we'll make each check in a separate method:

```js
class TTTGame {
  gameOver() {
    return this.boardIsFull() || this.someoneWon();
  }

  boardIsFull() {
    //STUB
    return false;
  }

  someoneWon() {
    //STUB
    return false;
  }
}
```

Note that we don't care yet about who won; all we need to know right now is that someone won. We also don't need to distinguish between a full-board tie and a full-board win, so the order in which we call `boardIsFull` and `someoneWon` isn't important; we could swap the order of tests in `gameOver` and get the same results.

It's tempting to do something like this:

```js
// Don't add this to your code!

gameOver() {
  this.theWinner = this.whoWon();
  return this.theWinner !== undefined || this.boardIsFull();
}
```

That method is relatively easy to understand, but it does two separate things: it determines whether the game is over and, as a side effect, it also determines who the winner is if there is a winner. Methods that have both a side effect and a meaningful return value or that try to perform multiple actions are generally not recommended; as much as possible, a method should do one thing. It should return a useful value or have a side-effect, but not both.

### 7.1.1 Is the Board Full?

Recall that unusedSquares in the Board class returns an array that contains the keys of all remaining unused squares. That provides a convenient way to determine whether the board is full -- all we have to do is check whether the return value is an empty array:

```js
class TTTGame {
  boardIsFull() {
    let unusedSquares = this.board.unusedSquares();
    return unusedSquares.length === 0;
  }
}
```

Run the program and confirm that it quits once the board is full.

Notice that the board has all the information it needs to determine whether it is full. That suggests that `boardIsFull` should be in the `Board` class instead of `TTTGame`. For instance:

```js
class Board {
  isFull() {
    return this.unusedSquares().length === 0;
  }
}

class TTTGame {
  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }
}
```

Whether you put `boardIsFull` in `TTTGame` or `isFull` in `Board` is a decision that can go either way. On one hand, the `Board` class has all the information it needs to determine that the board is full and it seems likely that other games that use the `Board` class will need to know whether the board is full. On the other hand, the rules of the game require that we be able to detect a full-board condition; perhaps that code belongs in the `TTTGame` class. Either choice is reasonable. We'll move the code into the `Board` class as shown above.

### 7.1.2 Did Someone Win the Game?

Now comes the fun part -- how to determine whether someone won the game. In the previous step, we moved the test for a full board to the `Board` class; the board has all the information it needs to determine whether it is full. The board also has all the information it needs to determine whether someone has won the game; it just needs to detect 3 squares in a row.

However, the board is just a 3x3 grid of squares and markers. It doesn't know and doesn't care about the game we're playing. It happens to be Tic Tac Toe, but, in theory, we could use this board in another game that uses a grid of 3x3 squares and markers. That strongly suggests that we should determine whether someone won elsewhere. Since the rules of the game determine the winner, the best place to determine who won is in the `TTTGame`.

The question now is how to determine whether someone won. One way to accomplish that is to search all of the possible 3-in-a-row combinations for 3 squares that share the same marker. Let's look at some pseudocode:

```sh
For every possible winning combination of squares (a row):
  If the human has marked all 3 squares or the player has marked all 3 squares:
    Someone won! Return true.

Nobody won. Return false.
```

That pseudocode provides the algorithm we need to determine whether there's been a winner, but it lacks some crucial details. How do we determine "every possible winning combination of squares"? How do we determine whether a given player has marked all 3 squares?

Let's first look at how we can determine the possible winning combinations. One way to do that is to provide a nested array in which each inner array is a 3-element array that identifies the keys in a given row, and the outer array is just a list of those rows. We might define that array like this:

```js
class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],   // top row of board
    [ "4", "5", "6" ],   // center row of board
    [ "7", "8", "9" ],   // bottom row of board
    [ "1", "4", "7" ],   // left column of board
    [ "2", "5", "8" ],   // middle column of board
    [ "3", "6", "9" ],   // right column of board
    [ "1", "5", "9" ],   // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],   // diagonal: bottom-left to top-right
  ];
}
```

We also need a method that counts the number of squares that contain a player's marker. The method should work for a list of specific squares, so we'll need two arguments: a player, and a list of keys for the squares we want to examine:

```js
class Square {
  getMarker() {
    return this.marker;
  }
}

class Board{
  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }
}
```

Note that the first argument to `countMarkersFor` is the player for whom we are counting squares; the second is an array of keys from the board's grid, e.g., `[1, 4, 7]`, from which we need to count the player's markers. Note that we also added a `getMarker` method to the `Square` class, despite having decided earlier that we didn't need one. We could, in theory, use `toString` as we did earlier. However, our interest here is the value of the marker, not what it looks like on the board. Using a `getMarker` method makes the intent easier to discern.

We can now use that array and method to determine whether we have a winner:

```js
class TTTGame {
  someoneWon() {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(this.human, row) === 3 ||
             this.board.countMarkersFor(this.computer, row) === 3;
    });
  }
}
```

Note that the `Array.prototype.some` method returns `true` if any invocation of the callback function returns `true`, `false` if every invocation returns `false`. `some` is a great way to detect whether any element of an array meets some criterion.

Our method iterates through the list of possible winning rows and checks each to see whether it contains a winning set of markers. For each row, we merely count the number of markers belonging to each player -- if either one has 3 markers, we have a winning row.

We should now have a fully functioning game. It doesn't yet tell us who won or even whether someone won, but it works correctly.

### 7.1.3 Who Won the Game?

Now that we know whether someone won the game, we're also going to need to know who won the game. We'll need that information in the `displayResults` method in `TTTGame`:

```js
class TTTGame {
  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
}
```

The `isWinner` method determines whether a specified player won the game. It determines whether any row contains 3 occurrences of the specified player's marker.

Our game application is now almost complete. It should work as-is.

### 7.2 Refactor: Clean Up `someoneWon`

Though the implementations differ, someoneWon and isWinner are also similar; in fact, we can rewrite someoneWon by using isWinner to determine the winning marker. The resulting code is much simpler:

```js
class TTTGame {
  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}
```

Be sure to test that your game still works.

### 7.3 Refactor: Remove the Row Class

We made use of the concept of a "row" in the `TTTGame.POSSIBLE_WINNING_ROWS` array of arrays and we pass each "row" of that array to `countMarkersFor` method of the board. We could, in theory, abstract the winning rows to Row class, but it hardly seems worth it. Feel free to try it if you want, but save your code; you may need to back out your changes to finish the assignment.

If you don't implement a `Row` class, you can delete the skeleton class we created earlier:

```js
// DELETE THIS CODE
// class Row {
//   constructor() {
//     // We need some way to identify a row of 3 squares
//   }
// }
```

### 7.4 Improving the UI: Clearing the Screen

The TTT game currently writes all its output to the console, one line after the other, scrolling the screen upward as it runs. The game screen tends to look cluttered, which so much going on the display that it's sometimes hard to see what's happening. Can we do something to improve the UI?

Yes, we can. One solution is to clear the display each time you display the board so that it always appears at the top of the screen, with no clutter to get in the player's way. Unfortunately, clearing the screen is trickier than it sounds -- how you clear the screen depends on your computer's operating system; Macs and Windows machines, for instance, clear the screen in different ways.

A simple solution to this compatibility issue is to simply call `console.clear()`:

```js
console.clear();
```

Let's implement screen clears in the TTT game. Before we do, though, try to do it yourself. When you're ready, take a look at our solution.

Try to arrange things so that:

- The user can see the welcome message and the board simultaneously when she starts the game.
- Don't display the welcome message after the human's first move.
- Try to always display the board at the same location on the screen regardless of whether the welcome message is present.

```js
let readline = require("readline-sync"); // first line in ttt.js

class Board {
  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class TTTGame {
  play() {
    this.displayWelcomeMessage();

    this.board.display();
    while (true) {
      // this.board.display(); -- Delete this line
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }
}
```

### 7.5 ESLint

Now would be an excellent time to run ESLint:

```sh
npx eslint ttt.js
```

If you've followed along carefully, ESLint shouldn't detect any problems. If it does detect any problems, try to fix them before moving on.

### 7.6 The Completed Game

```js
let readline = require("readline-sync");

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

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
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

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();

    this.board.display();
    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${validChoices.join(", ")}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
}

let game = new TTTGame();
game.play();
```

### 7.7 What's Next?

Congratulations! The game is now complete.

## Assignment 8: OO Tic Tac Toe Code Discussion

Below are some ideas for you to ponder. You don't need to implement any solutions.

1. Did you notice how tiresome it is to test for regression after every small change or refactoring? Besides being careful, what else can we do to ease this burden? If you said "tests," you are right. One of the most fundamental reasons for testing is to prevent regression. We'll talk about testing in detail in a later course.

Using testing to drive design is another primary reason to use tests. However, that's an entirely different topic that we'll cover much later in the program.

2. While it's usually harder to write OO code from scratch, do you think it was easier or felt safer to modify the OO TTT program than the procedural version we wrote earlier? You should have! OOP forces you to use indirection, but that indirection helps isolate concerns so that they don't ripple across an entire codebase. Changes are encapsulated in a class or object. The interface used to interact with a class or object can remain the same while the specific implementation can change. That's one of the chief benefits of object-oriented programming.

**Indirection**, in the sense we're using it, refers to the ability to reference something indirectly. For instance, calling a function or a method is an example of indirection -- we're using the function name to invoke some action. If that function calls another function, then that's yet another level of indirection.

Using variables to represent values is also an example of indirection. For instance:

```js
let foo = "bar";
console.log(foo);
```

On line 2, we're using indirection to access the value of `foo`, which is `"bar"`.

If you want to determine the value of an object property, there are at least two levels of indirection involved: the variable name for the object, and the name of the property:

```js
let obj = { foo: "bar" };
console.log(obj.foo); // 2 levels of indirection
```

Indirection effectively means that you have to have to look elsewhere to determine what a name -- a variable or a function, for instance - refers to. In one sense, it makes programs a little harder to read since the actual values or behaviors are somewhere else in the code base. In practice, though, indirection makes code easier to understand, particularly if you use good variable and function names. The names tell you what you're working with without actually revealing more information than you need.

3. Most of our classes have generic names, like `Player` or `Board`. Suppose we want to put our game in a library and let other developers use it. Our generic class names are now in the global namespace where they may conflict with names those other developers are using. How do we fix that? Answer: *use a module*; we'll talk about modules in another course. In the short term, we can use names that are less likely to conflict, such as `TTTPlayer` and `TTTBoard`.

4. As we write programs with more classes, we start to build a **dependency graph** of the classes. In OOP, we don't want the dependency graph to look like a spider web. Put another way: classes should *collaborate with some other classes*. If all classes collaborate with each other, though, you should reconsider your OO design. For example, our dependency graph looks like this:

- `TTTGame` collaborates with `Human`.
- `TTTGame` collaborates with `Computer`.
- `TTTGame` collaborates with `Board`.
- `Board` collaborates with `Square`.

Notice that the `Human`, `Computer`, and `Player` classes know nothing about the `Square` class, and `Board` knows nothing about `Human`, `Computer`, and `Player`. That's how we *encapsulate and mitigate the ripple effects of change*.

5. Analyze the `Board` and `Square` classes. Look at methods (behaviors) in those classes:

**Board**  | **Square**
-------|-------
`display`  | `getMarker`
`displayWithClear`  | `setMarker`
`markSquareAt`  | `isUnused`
`countMarkersFor`  | `toString`
`unusedSquares`  |
`isFull`  |

Notice how the *methods only deal with concerns related to the class*.

While developing this program, we placed the `isWinner` method in `TTTGame`. It uses `Board.protoype.countMarkersFor` to determine whether a player has 3 markers in a row; we could easily create a `Board.prototype.threeInARow` method instead. The choice of where to put a particular behavior is often unclear. Sometimes, there is no advantage or disadvantage to putting it in one class instead of another.

When working with classes, you must focus on the behaviors and data in that class. It's tempting to *inject* additional collaborators into a class, but keep in mind that doing so introduces additional **dependencies**. The `Board` knows about `Square`, but it doesn't know anything about `Player` or even the `TTTGame`. In that way, it tries to be a generic type.

6. What we just talked about in the previous point is hard to understand without more experience. Consider our decision to put `humanMoves` and `computerMoves` in the `TTTGame` class. We could have instead put a `moves` method in the `Human` and `Computer` classes. However, if we did that, we would have to pass a `Board` object to those two methods, thus introducing dependencies between `Human` and the `Board` class, and between the `Computer` and `Board` classes.

Would those dependencies be wrong? The answer is unclear; it depends on the tradeoffs you're willing to make. We opted to keep the move behavior in `TTTGame` to avoid introducing the dependencies described above.

In OOP, there are poor designs, but there is *rarely one right design*. It all comes down to tradeoffs between tightly coupled dependencies or loosely coupled dependencies. Tightly coupled dependencies are easier to understand but offer less flexibility. Loosely coupled dependencies are more challenging to understand but offer more long term flexibility. Which path is right depends on your application. Most of the time, beginners tend to over-apply design patterns. Don't prematurely optimize or build for large-scale architecture when you don't need it. On the other hand, recognize when you're introducing coupling and dependency, and eliminate unnecessary coupling when you can.

That's **the art component of programming**. It's a small taste of software design, patterns, and architecture. Mastering this art is a lifelong journey, and your intuition will slowly improve as you gain experience.

7. Given that the general lack of behaviors or state in the `Human` and `Computer` classes, you might consider deleting them. For now, though, you can leave them in place. You may find them useful in the next assignment.

## Assignment 9: OO Tic Tac Toe with Constructors and Prototypes

Of course, there's more than one way to create an OO program in JavaScript. For practice, try to rewrite the TTT program using constructors and prototypes and the pseudo-classical pattern instead of classes. To get you started, here's how you would rewrite the Square class.

```js
function Square(marker) {
  this.marker = marker || Square.UNUSED_SQUARE;
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O";

Square.prototype.toString = function() {
  return this.marker;
};

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
};

Square.prototype.isUnused = function() {
  return this.marker === Square.UNUSED_SQUARE;
};

Square.prototype.getMarker = function() {
  return this.marker;
};
```

Here's a complete reference solution:

```js
let readline = require("readline-sync");

function Square(marker) {
  this.marker = marker || Square.UNUSED_SQUARE;
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O";

Square.prototype.toString = function() {
  return this.marker;
};

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
};

Square.prototype.isUnused = function() {
  return this.marker === Square.UNUSED_SQUARE;
};

Square.prototype.getMarker = function() {
  return this.marker;
};

function Board() {
  this.squares = {};
  for (let counter = 1; counter <= 9; ++counter) {
    this.squares[String(counter)] = new Square();
  }
}

Board.prototype.display = function() {
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
};

Board.prototype.markSquareAt = function(key, marker) {
  this.squares[key].setMarker(marker);
};

Board.prototype.isFull = function() {
  return this.unusedSquares().length === 0;
};

Board.prototype.unusedSquares = function() {
  let keys = Object.keys(this.squares);
  return keys.filter(key => this.squares[key].isUnused());
};

Board.prototype.countMarkersFor = function(player, keys) {
  let markers = keys.filter(key => {
    return this.squares[key].getMarker() === player.getMarker();
  });

  return markers.length;
};

Board.prototype.displayWithClear = function() {
  console.clear();
  console.log("");
  console.log("");
  this.display();
};

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  return this.marker;
};

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

function TTTGame() {
  this.board = new Board();
  this.human = new Human();
  this.computer = new Computer();
}

TTTGame.POSSIBLE_WINNING_ROWS = [
  [ "1", "2", "3" ],            // top row of board
  [ "4", "5", "6" ],            // center row of board
  [ "7", "8", "9" ],            // bottom row of board
  [ "1", "4", "7" ],            // left column of board
  [ "2", "5", "8" ],            // middle column of board
  [ "3", "6", "9" ],            // right column of board
  [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
  [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
];

TTTGame.prototype.play = function() {
  this.displayWelcomeMessage();

  this.board.display();
  while (true) {
    this.humanMoves();
    if (this.gameOver()) break;

    this.computerMoves();
    if (this.gameOver()) break;

    this.board.displayWithClear();
  }

  this.board.displayWithClear();
  this.displayResults();
  this.displayGoodbyeMessage();
};

TTTGame.prototype.displayWelcomeMessage = function() {
  console.clear();
  console.log("Welcome to Tic Tac Toe!");
  console.log("");
};

TTTGame.prototype.displayGoodbyeMessage = function() {
  console.log("Thanks for playing Tic Tac Toe! Goodbye!");
};

TTTGame.prototype.displayResults = function() {
  if (this.isWinner(this.human)) {
    console.log("You won! Congratulations!");
  } else if (this.isWinner(this.computer)) {
    console.log("I won! I won! Take that, human!");
  } else {
    console.log("A tie game. How boring.");
  }
};

TTTGame.prototype.humanMoves = function() {
  let choice;

  while (true) {
    let validChoices = this.board.unusedSquares();
    const prompt = `Choose a square (${validChoices.join(", ")}): `;
    choice = readline.question(prompt);

    if (validChoices.includes(choice)) break;

    console.log("Sorry, that's not a valid choice.");
    console.log("");
  }

  this.board.markSquareAt(choice, this.human.getMarker());
};

TTTGame.prototype.computerMoves = function() {
  let validChoices = this.board.unusedSquares();
  let choice;

  do {
    choice = Math.floor((9 * Math.random()) + 1).toString();
  } while (!validChoices.includes(choice));

  this.board.markSquareAt(choice, this.computer.getMarker());
};

TTTGame.prototype.gameOver = function() {
  return this.board.isFull() || this.someoneWon();
};

TTTGame.prototype.someoneWon = function() {
  return this.isWinner(this.human) || this.isWinner(this.computer);
};

TTTGame.prototype.isWinner = function(player) {
  return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
    return this.board.countMarkersFor(player, row) === 3;
  });
};

let game = new TTTGame();
game.play();
```

## Assignment 10: OO Tic Tac Toe with OLOO

Now try to rewrite the TTT program using the OLOO pattern. To get you started, here's how you would rewrite the Square class.

```js
let Square = {
  UNUSED_SQUARE:   " ",
  HUMAN_MARKER:    "X",
  COMPUTER_MARKER: "O",

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },

  toString() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },

  getMarker() {
    return this.marker;
  },
};

let square = Object.create(Square).init();
```

**Solution**

```js
let readline = require("readline-sync");

let Square = {
  UNUSED_SQUARE:   " ",
  HUMAN_MARKER:    "X",
  COMPUTER_MARKER: "O",

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },

  toString() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },

  getMarker() {
    return this.marker;
  },
};

let Board = {
  init() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = Object.create(Square).init();
    }

    return this;
  },

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
  },

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  isFull() {
    return this.unusedSquares().length === 0;
  },

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  },

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  },
};

const PlayerPrototype = {
  initialize(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  },
};

let Human = Object.create(PlayerPrototype);

Human.init = function() {
  return this.initialize(Square.HUMAN_MARKER);
};

let Computer = Object.create(PlayerPrototype);

Computer.init = function() {
  return this.initialize(Square.COMPUTER_MARKER);
};

let TTTGame = {
  POSSIBLE_WINNING_ROWS: [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ],

  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    return this;
  },

  play() {
    this.displayWelcomeMessage();

    this.board.display();
    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
  },

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  },

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${validChoices.join(", ")}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  },

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  },

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  },
};

let game = Object.create(TTTGame).init();
console.log(game);
game.play();
```

## Assignment 11: OO Tic Tac Toe with Bonus Features

Let's add some additional features to our TTT game. When you've finished, consider asking for a code review. Be sure to compare your code with our solutions first to determine whether you missed anything.

You should *commit your changes before starting work on each feature*. That should help you get back to a working game if you mess things up working on a feature.

1. **Improved prompt**

If we run the current game, we'll see the following prompt:

```sh
Choose a square (1, 2, 3, 4, 5, 6, 7, 8, 9):
```

That's okay, but this message could use a small improvement: it should include the word `or` before the final choice:

```sh
Choose a square (1, 2, 3, 4, 5, 6, 7, 8, or 9):
```

Our code currently uses `Array.prototype.join` to create the prompt, but it can't insert a different delimiter before the final choice. It isn't smart enough to do what we need. We'll write a `joinOr` method to make up for this lack. The method should work like this:

```js
// obj is the context for `joinOr`; replace it with the correct context.
obj.joinOr([1, 2])                   # => "1 or 2"
obj.joinOr([1, 2, 3])                # => "1, 2, or 3"
obj.joinOr([1, 2, 3], '; ')          # => "1; 2; or 3"
obj.joinOr([1, 2, 3], ', ', 'and')   # => "1, 2, and 3"
```

Once the method works as shown, add it to your Tic Tac Toe game and use it to format the prompt when asking the human player to mark a square.

Hints

- Pseudocode and other problem-solving steps may help you implement this feature.
- Try writing the method in a separate file first so you can test it easily. Move it into the game once you know it works correctly.

Possible Solution

First, let's do a little design work:

- Calling sequences (see above for outputs)
  - `obj.joinOr(choices);`
  - `obj.joinOr(choices, separator);`
  - `obj.joinOr(choices, separator, conjunction);`

- Assumptions:
  - `obj.joinOr([1])` => "1"

- Rules:
  - Default separator is `', '`.
  - Default conjunction is `'or'`.
  - If only one choice, just display that element.
  - If two choices, display them separated by the conjunction
  - If three or more choices, insert conjunction before final choice, and use separators between all of the choices.

- Pseudocode:

```sh
-   If separator not supplied, use `', '`.
-   If conjunction not supplied, use `or`.
-   If there is only choice:
    -   Return the choice as a string.
-   Else If there are exactly two choices:
    -   Return the two choices separated by the conjunction.
-   Else
    -   Join all choices except the last with the separator and save as the result.
    -   Append the separator to the result.
    -   Append the conjunction to the result.
    -   Append a space to the result.
    -   Append the final choice to the result.
    -   Return the result.

```

After translating the pseudocode, the code should look something like this:

```js
class TTTGame {
  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  static joinOr(choices, separator = ', ', conjunction = 'or') {
    if (choices.length === 1) {
      return choices[0].toString();
    }  else if (choices.length === 2) {
      return `${choices[0]} ${conjunction} ${choices[1]}`;
    } else {
      let lastChoice = choices[choices.length - 1];
      let result = choices.slice(0, -1).join(separator);
      return `${result}${separator} ${conjunction} ${lastChoice}`;
    }
  }
}
```

We chose to put this method in the `TTTGame` class simply because that is the only class that needs it. Whether that's a good location for it is debatable -- it doesn't have anything to do with the game, but we haven't talked about any alternate approaches yet.

We also made it a static method since it doesn't need access to any of `TTTGame`'s methods and properties. We could have made it an instance method, but that's slightly misleading. Don't worry about it if that's what you did.

Ideally, `joinOr` should probably be a private method, but JavaScript doesn't provide any special syntax for defining private methods. That's not to say that it's impossible to create a private method, but it isn't worth the effort right now.

2. **Play Again**

Our game currently lets the players play one game and then it ends. Add the ability to play again:

- After each game ends, the program should ask the human player whether they want to play again. If they do, then the program should start a new game of TTT. Otherwise, it should end the program.
- The program should accept `y` or `n` (in lowercase or uppercase) as valid answers at the "play again?" prompt; all other answers are invalid.
- The program should display the welcome message before the first game starts. It should never display the message again.
- The program should display the results after each game ends, but before asking whether the human player wants to play again.
- The program should display the goodbye message when the human player decides that he doesn't want to play again. It should never display the goodbye message before that.

Hints

- Create a separate method to play the game once.
- Consider using a playAgain method to isolate the "play again" processing.

Possible Solution

```js
class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[counter] = new Square();
    }
  }
}

class TTTGame {
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.playOneGame();
      if (!this.playAgain()) break;

      console.log("Let's play again!");
    }

    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.board.reset();
    this.board.display();
    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
  }

  playAgain() {
    let answer;

    while (true) {
      answer = readline.question("Play again (y/n)? ").toLowerCase();

      if (["y", "n"].includes(answer)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    console.clear();
    return answer === "y";
  }
}
```

The most significant change here is that we moved the orchestration engine for a single game into a new `playOneGame` method, then reused `play` to orchestrate the overall flow of the program: welcome, play a game, do play-again processing, goodbye.

We also added a `reset` method to the `Board` class to reset the state of the board. Since the code is identical to what we had in the constructor, we've moved the constructor code into the `reset` method, then called reset from inside the constructor. This pattern is useful with objects that need to be fully or partially reset during their lifetime.

You may have noticed that the constructor is now redundant since we also call `reset` in `playOneGame` before we ever make use of the board object. However, it's still a good idea to initialize your objects in the constructor to ensure that they always have valid state,

3. **Computer AI: Defense**

The computer currently isn't a challenging opponent: its sole strategy is to pick a square at random. It may win a game now and then by accident, but most people can readily beat (or at least tie) it.

Let's give the computer some smarts -- a touch of Artificial Intelligence if you will. We'll make the computer defensive-minded.

If there's an immediate threat on the board, the computer should defend against that threat. An immediate threat is present when the human has 2 squares in a row with an unused square in the 3rd position of that row. The computer needs to defend that square; it must block that move by claiming the unused square. That is, the computer should place its marker on the unused square.

The computer can continue to select random squares when there is no immediate threat.

Hint: Consider using the `countMarkersFor()` method from the `Board` class.

Possible Solution

```js
class Board {
  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.isUnusedSquare(key));
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }
}

class TTTGame {
  computerMoves() {
    let choice = this.defensiveComputerMove();

    if (!choice) {
      let validChoices = this.board.unusedSquares();

      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  defensiveComputerMove() {
    for (let index = 0; index < TTTGame.POSSIBLE_WINNING_ROWS.length; ++index) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[index];
      let key = this.atRiskSquare(row);
      if (key) return key;
    }

    return null;
  }

  atRiskSquare(row) {
    if (this.board.countMarkersFor(this.human, row) === 2) {
      let index = row.findIndex(key => this.board.isUnusedSquare(key));
      if (index >= 0) return row[index];
    }

    return null;
  }
}
```

Here, we've defined two new methods in `TTTGame`: `defensiveComputerMove` and `atRiskSquare`.

The `defensiveComputerMove` method iterates through the list of possible winning rows, and tests each row with `atRiskSquare` to see whether it contains an at-risk square; that is, a square that the human can choose to win the game. If it finds one, it returns that square's key as the required move. Otherwise, it returns `null`.

The `atRiskSquare` method first checks that the row contains precisely two of the human's markers, then checks to see if the remaining square is unused. If it is, `atRiskSquare` returns the key associated with the unused square. Otherwise, it returns `null`.

We modified `computerMoves` to check first whether there's an at-risk square. If there is, it places the computer's marker on that square. Otherwise, it chooses a random square.

We also added an `isUnusedSquare` method to the `Board` class and modified the existing `unusedSquares` method to use `isUnusedSquare`.

4. **Computer AI: Offense**

The defensive-minded AI is pretty cool. It improves the computer's strategy enough that ties may occur more often. However, when there are no threatened squares, it still picks a square at random. Let's make a small improvement that has the computer look for an offensive move; one that lets it win. That makes the computer's strategy look like this:

```sh
-   If any square is a potential winner
    -   Pick that square.
-   Else if any square is at risk, pick that square.
    -   Pick that square.
-   Else:
    -   Pick a random square.
```

Hint

Examine the code you wrote for the defensive move. Can you adapt that code somehow to locate a potential winning move instead?

Possible Solution

```js
class TTTGame {
  computerMoves() {
    let choice = this.offensiveComputerMove();
    if (!choice) {
      choice = this.defensiveComputerMove();
    }

    if (!choice) {
      let validChoices = this.board.unusedSquares();

      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  offensiveComputerMove() {
    for (let index = 0; index < TTTGame.POSSIBLE_WINNING_ROWS.length; ++index) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[index];
      let key = this.winningSquare(row);
      if (key) return key;
    }

    return null;
  }

  winningSquare(row) {
    if (this.board.countMarkersFor(this.computer, row) === 2) {
      let index = row.findIndex(key => this.board.isUnusedSquare(key));
      if (index >= 0) return row[index];
    }

    return null;
  }
}
```

The code for this feature is nearly identical to that for the defensive move. In fact, it is so close that we will ask you to refactor the methods in another feature below. You may even have already done so.

## Assignment 12: OO Twenty-One Overview

## Assignment 13: OO Twenty-One: Reference Implementation with Classes

## Assignment 14: Exercise Sets

Before you begin the assessments, you should complete all of the [Object Oriented JavaScript exercise sets](https://launchschool.com/exercises#js120_object_oriented_javascript). Complete the sets in the following sequence:

1. Easy
2. Objects
3. Function Context
4. OO Basics: Classes
5. OO Basics: Inheritance and Mixins
6. Object Creation Patterns

## Assignment 15: Summary

## Assignment 16: JS120 Course Feedback