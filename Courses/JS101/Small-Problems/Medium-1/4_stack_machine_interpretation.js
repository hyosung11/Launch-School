/* JS101 - Small Problems > Medium 1 > 4. Stack Machine Interpretation

Stack Machine Interpretation

A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: `Array.prototype.push` and `Array.prototype.pop`.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a `MULT` operation in a stack-and-register language. It removes the value from the `stack`, multiplies the removed `stack` value with the `register` value, then stores the result back in the `register`. For example, if we start with a stack of `[3, 6, 4]` (where `4` is the topmost item in the stack) and a register value of `7`, the `MULT` operation mutates the stack to `[3, 6]` (the `4` is removed), and the result of the multiplication, `28`, is left in the register. If we do another `MULT` at this point, the stack is mutated to `[3]`, and the register is left with the value `168`.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

- `n` : Place a value, `n`, in the register. Do not modify the stack.
- `PUSH` : Push the register value onto the stack. Leave the value in the register.
`ADD` : Pop a value from the stack and add it to the register value, storing the result in the register.
`SUB` : Pop a value from the stack and subtract it from the register value, storing the result in the register.
`MULT` : Pop a value from the stack and multiply it by the register value, storing the result in the register.
`DIV` : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
- `REMAINDER` : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
- `POP` : Remove the topmost item from the stack and place it in the register.
- `PRINT` : Print the register value.

All operations are integer operations (which is only important with `DIV` and `REMAINDER`).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [`] `and `0`, respectively. */

function minilang(program) {
  let stack = [];
  let register = 0;
  program.split(' ').forEach((token) => {
    switch (token) {
      case 'ADD':
        register += stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  });
  return register;
}

// Examples:
// minilang('PRINT');
// 0

// minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

// console.log(minilang('5 PUSH POP PRINT'));
// 5

// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

// console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// 12

// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

// console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)

/* Discussion

This problem may seem daunting because the explanation of the stack machine is quite long, but the implementation is relatively straightforward.

The solution starts by initializing the `stack` and `register` variables to `[] `and `0`, respectively. Next, the solution loops through each token of the program argument. The solution gets the list of tokens by splitting the program using a space (' ') as a separator. The solution then passes each token to the switch statement, which performs the corresponding processing — as described in the problem specifications — on the value of each token.

Notice that for the `DIV` and `REMAINDER` operations, the solution uses the `Math.floor` method to ensure that the resulting value is always an integer.

Further Exploration

Refactor the minilang function to include some error handling. In particular, the function should detect and report empty stack conditions (trying to use a value from the stack when there are no values), and invalid tokens in the program. Ideally, the function should return an error message if an error occurs, or undefined if the program runs successfully. */