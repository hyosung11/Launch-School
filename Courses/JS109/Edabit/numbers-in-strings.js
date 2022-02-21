/* Numbers in Strings - edabit Hard

Create a function that takes an array of strings and returns an array
with only the strings that have numbers in them.
If there are no strings containing numbers, return an empty array.

Examples

numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]

Notes

    The strings can contain white spaces or any type of characters.
    Bonus: Try solving this without RegEx.*/

function numInStr(arr) {
  let result = [];

  arr.forEach((string) => {
    if (/[0-9]/.test(string)) result.push(string);
  });

  return result;
}

console.log(numInStr(['abc', 'abc10'])); // ['abc10'])
console.log(numInStr(['abc', 'ab10c',  'a10bc', 'bcd'])); // ['ab10c', 'a10bc'])
console.log(numInStr(['1', 'a' , ' ' ,'b'])); // ['1'])
console.log(numInStr(['rct', 'ABC', 'Test', 'xYz'])); // [])
console.log(numInStr(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])); // ['10xYZ', 'xy2K77', 'Z1K2W0'])
console.log(numInStr(['-/>', '10bc', 'abc '])); // ['10bc'])
