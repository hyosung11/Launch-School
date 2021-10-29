function getOldest(ages) { // line 1
  return ages.sort((a, b) => b - a)[0]; // line 2
} // line 3

console.log(getOldest([9, 6, 11, 48])); // => 53