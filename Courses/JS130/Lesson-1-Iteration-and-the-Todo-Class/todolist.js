// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");

// omitted code

console.log(todo2.getTitle()); // => 'Clean room'

// console.log(todo1.toString());
// console.log(todo2.toString());
// console.log(todo3.toString());

// [ ] Buy milk
// [ ] Clean room
// [ ] Go to the gym

// console.log(todo1);
// console.log(todo2);
// console.log(todo3);

// Todo { title: 'Buy milk', done: false }
// Todo { title: 'Clean room', done: false }
// Todo { title: 'Go to the gym', done: false }

// console.log(String(todo1));
// console.log(String(todo2));
// console.log(String(todo3));
