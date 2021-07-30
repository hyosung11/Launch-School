// function cite(author, quote) {
//   console.log(`${author} said: "${quote}"`);
// }

cite('Brendan Eich', 'Always bet on JavaScript.');
// Brendan Eich said: "Always bet on JavaScript."

// I prefer using template literals to this concatenation method
function cite(author, quote) {
  console.log(author + 'said: "' + quote + '"');
}

