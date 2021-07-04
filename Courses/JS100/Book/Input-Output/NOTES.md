# INTRODUCTION TO PROGRAMMING: Input/Output

## Command Line Output

```js
let name = 'Jane';
console.log(`Good morning, ${name}!`);

> node greetings.js
Good morning, Jane!
```

## Command Line Input

Node.js has an API called **readline** that lets JavaScript programs read input from the command line. However, the API isn't straightforward or simple: it requires an understanding of asynchronous programming and higher-order functions. We don't explore these concepts in this book. For now, we can use a simplified version of the readline library called **readline-sync**.

## Input in the Browser 

Working with a browser's input controls requires a working knowledge of the Document Object Model (DOM), which is outside the scope of this book. However, you don't need to know about the DOM to get user inputs. Most browsers implement the `prompt` function which lets a program ask for and obtain text-based input from the user.