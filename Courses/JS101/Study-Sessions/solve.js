/* Mandy's Algorithm
- Initialize a String that holds the letters of the alphabet
- Initialize a count variable to store how many letters meet the criteria

- Iterate through the Input Array (helper function)
   - On each individual `word`, count the letters that meet the criteria: the letter's position in the String must occupy their positions in the alphabet
   - Compare the index of the character to the index of the letter in the alphabet string
   - Increment `count` if character meets the criteria
   - Once we are finished checking all the characters, store the count in a final Array (either through map or initializing a new Array)
   */

function countMatchingIndices(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let count = 0;

  string.split('').forEach((char, index) => {
    if (char.toLowerCase() === alphabet[index]) {
       count += 1;
    }
  });
  return count;
}

function solve(array) {
  return array.map(function(word) {
   return countMatchingIndices(word);
  });
}

console.log(solve(["abode","ABc","xyzD"])) // [4,3,1]
console.log(solve(["abide","ABc","xyz"]))  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])) // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])) // [1, 3, 1, 3]