// Match Anything with Wildcard Period

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
console.log(result);