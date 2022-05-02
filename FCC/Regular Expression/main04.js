// Extract Matches

console.log("Hello, World!".match(/Hello/));
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));

/*
'string'.match(/regex/);
/regex/.test('string');
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);