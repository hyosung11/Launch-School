# INTRODUCTION TO PROGRAMMING: More Stuff

## Variables as Pointers

In this section, we'll examine the concepts behind variables and **pointers**. Specifically, we'll see how some variables act as pointers to a place (or address space) in memory, while others contain values.

As we've learned, JavaScript values fall into one of two broad categories: primitive values and objects. Primitive values are easier to understand, so we'll start there.

### Working with Primitive Values

Let's take a quick look at how primitive values and the variables assigned to them relate. Consider the following code:

```js
let count = 1;
count = 2;
```
This code is simple and not too difficult to understand, even if it isn't very useful. On line 1, we declare a variable named `count`, and initialize it to a value of `1`, which is a primitive value. Line 2 reassigns `count` to a new primitive value, `2`.

What does that look like in the computer, however? For starters, every time a JavaScript program creates a new variable, JavaScript allocates a spot somewhere in its memory to hold its value. With (most) primitive values, the actual value of the variable gets stored in this allocated memory.

Thus, for example, the `count` variable may end up at address 0x1234 in the computer's memory, and the memory at that address gets set to `1` and then `2`. The process looks like this:

![Memory Allocation](memory_allocation.png)
