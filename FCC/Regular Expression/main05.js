// Find More Than the First Match

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
console.log(testStr.match(ourRegex));


let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);
