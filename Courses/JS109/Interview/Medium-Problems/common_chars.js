/* Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

*/

function commonChars(strings) {
  let commonChars = strings[0];

  for (let idx = 1; idx < strings.length; idx += 1) {
    commonChars = commonBetweenTwo(commonChars, strings[idx].split(''))
  }

  return commonChars;
}

function commonBetweenTwo(word1, word2) {
  let commonChars = [];
  let word2Clone = word2.slice(0);

  for (let idx = 0; idx < word1.length; idx += 1) {
    let char1 = word1[idx];

    for (let jdx = 0; jdx < word2.length; jdx += 1) {
      let char2 = word2[jdx];

      if (char1 === char2) {
        let charIndexInClone = word2Clone.indexOf(char2);

        if (charIndexInClone !== -1) {
          commonChars.push(char1);
          word2Clone.splice(charIndexInClone, 1);
          break;
        }
      }
    }
  }

  return commonChars;
}

console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []