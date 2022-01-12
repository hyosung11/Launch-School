/* Extract the domain name from a URL - 5 kyu

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

PROBLEM
- input: string
- output: string as substring of input string representing the domain name

Rules
- return the domain name from the string
- domain name is the second set of letters in the string
- domain name follows two forward slashes '//' or a '.'
- domain name is followed by a '.'

EXAMPLES
- 'www.xakep.ru') === 'xakep'
- 'https://youtube.com' === 'youtube'

DATA STRUCTURE
- input: string
- intermediary: array
- output: new string

ALGORITHM
- input string
- initialize `result` to empty string
- split string into array of chars
- iterate through chars
- return `result` substring
*/

// function domainName(domain) {
  
// }

function domainName(websiteURL) {
  let result = '';

  if (websiteURL.indexOf('//') > -1) {
    result = websiteURL.split('/')[2];
    // console.log(result);
  } else {
    result = websiteURL.split('.')[1];
  }

  result = result.split(':')[0];
  result = result.split('.')[0];

  return result;
}

// console.log(domainName('http://google.com'));
// console.log(domainName('http://google.co.jp'));
// console.log(domainName('https://youtube.com'));
// console.log(domainName('www.xakep.ru'));

console.log(domainName('http://google.com') === 'google');
console.log(domainName('http://google.co.jp') === 'google');
console.log(domainName('www.xakep.ru') === 'xakep');
console.log(domainName('https://youtube.com') === 'youtube');