// Match Numbers and Letters of the Alphabet

let jennyStr = "Jenny8675309";
let myRegexx = /[a-z0-9]/gi;
let resultt = jennyStr.match(myRegexx);
console.log(resultt);

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);