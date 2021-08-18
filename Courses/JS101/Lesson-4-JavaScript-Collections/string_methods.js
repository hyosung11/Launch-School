function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

capitalize('pete'); // => 'Pete'

// Getting SungOh's name right
function capitalize(str) {
  return (
    str[0].toUpperCase() + str.slice(1, 4) + str[4].toUpperCase() + str.slice(5)
  );
}

console.log(capitalize('sungoh')); // => 'SungOh'
