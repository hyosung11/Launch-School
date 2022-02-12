/* Password maker - 7 kyu

One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

- instead of including i or I put the number 1 in the password;
- instead of including o or O put the number 0 in the password;
- instead of including s or S put the number 5 in the password.

"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"

Algo
- input string
- initialize `result` to empty string
- split string at spaces into words
- iterate through string
  - iterate through chars of each word
    - if char is an i or an I, replace it with 1
    - if char is o or O replace with 0
    - if char is s or S replace with 5
    - otherwise add first letter of each word to `result`
- return `result` as new string
*/

// my working solution
// function makePassword(string) {
//   let result = '';
//   let words = string.split(' ');

//   words.forEach(word => {
//     if (word[0] === 'i' || word[0] === 'I') result += 1;
//     else if (word[0] === 'o' || word[0] === 'O') result += 0;
//     else if (word[0] === 's' || word[0] === 'S') result += 5;
//     else result += word[0];
//   });

//   return result;
// }

// regex
function makePassword(phrase) {
  return phrase
    .split(' ')
    .map(word => word[0])
    .join('')
    .replace(/[ios]/gi, char => ({ i: 1, s: 5, o: 0})[char.toLowerCase()]);
}

// console.log(makePassword('Give it to Iulio'));
console.log(makePassword('Give me liberty or give me death')) // 'Gml0gmd'
console.log(makePassword('Keep Calm and Carry On')) // 'KCaC0'

// console.log(makePassword("Give me liberty or give me death") === "Gml0gmd"); // "Wrong output for 'Give me liberty or give me death'");

// console.log(makePassword("Keep Calm and Carry On") === "KCaC0"); // "Wrong output for 'Keep Calm and Carry On'");