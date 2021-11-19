/* Practical Mini Algorithms from Jason Aricheta */

// creating a hashmap
// Problem needs some kind of uniques? does it need to know occurrences?
function hashmap(collection) {
  let obj = {}
  collection.forEach(elm => {
    if (obj.hasOwnProperty(elm)) {
      obj[elm] += 1
    } else {
      obj[elm] = 1
    }
  }); 
  // returns KVP with keys being characters, values being # occurrences
  // but you can customize the value in the KVP to fit your algo
  return obj; 
}

// unique loop
function allUniquePairs(collection = '') {
  for (let i = 0; i < collection.length; i += 1) {
    for (let j = i + 1; j < collection.length; j += 1) {
      let iVal = collection[i];
      let jVal = collection[j];
      // your code here
      // .. i and j will never be the same, iVal and jVal will never be the same!
      // .. this loop will hit all possible pairs with i always being lower than j
      // .. POWERFUL when used with slice
    }
  }
}

// special string split
// do you need to split your string according to repeated characters? 
// IE: 'aaabbbcccczzaz' -> [aaa, bbb, cccc, zz, a, z]
// IE: 'aAaBbB' 
//        -> ['a', 'A', 'a', 'B', 'b','B'] (case sensitive) 
//        -> ['aAa', 'BbB'] (case insensitive)
function stringSplitRepeated(str) {
  let ary = [str[0]];
  for (let i = 1 ; i < str.length; i += 1) {
    let prev = str[i - 1];
    let curr = str[i]; 
    if (curr === prev) { //(curr.toLowerCase() === prev.toLowerCase())
						 // to make case insensitive!
      ary[ary.length - 1] += curr;
    } else {
      ary.push(curr);
    }
  }
  return ary;
}

// special string split powered up!! 
// what if you need to split your string according to its character class? tricky

// IE: '11Hello44HiThere3aaaa4' -> [11, Hello, 44, HiThere, 3, aaaa, 4]

const CHAR_CLASS = '0123456789'; 
                    // if we chose numbers as a character class
//    LOWER_CASE = 'abcdefghijlklmnopqrstuvwxyz' 
                    // if we chose lowercase class (or insensitive)
//    UPPER_CASE = 'abcdefghijlklmnopqrstuvwxyz'.toUpperCase(); 
                    // SAA but uppercase class
//    CUSTOM_CHAR = '?>*&';
// I expilcitly didn't use regex

function stringSplitClass(str, CHAR_CLASS) {

  let ary = [str[0]];
  for (let i = 1; i < str.length; i += 1) {
    let prev = str[i - 1];
    let curr = str[i];
    let prevBool = CHAR_CLASS.includes(prev); 
    let currBool = CHAR_CLASS.includes(curr);
      // true if both prev and curr are of the SAME class.
      // false if theres some kind of transition.
    if (prevBool === currBool) {
      ary[ary.length - 1] += curr;
    } else {
      ary.push(curr);
    }
  }
  return ary;

}

console.log('Hello')
// console.log(strinSplitClass('5hello', CHAR_CLASS))
console.log(stringSplitClass('54hi24654asdsadfsaf4asdasd2asda', CHAR_CLASS))
