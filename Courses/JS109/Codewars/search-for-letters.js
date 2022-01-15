/* Search for Letters - 7 kyu
Algo
- input string
- initialize `alphabet` to 'a-z'
- use `reduce`
- split `alphabet` into chars
- iterate through chars of `alphabet`
  - if string lowercased includes the char increment acc with a '1'
  - else increment acc with a '0'
  - return `acc`
  - start with empty string
*/

// Rafiq Kamal
function change(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return alphabet
    .split('')
    .reduce((result, char) => {
      if (string.toLowerCase().includes(char)) result += '1';
      else result += '0';
      return result;
    }, '');
}

console.log(change('aslfka;lskdase'))