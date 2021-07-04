// Example: Greet the User by Name

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);