// Catch Use of Assignment Operator Instead of Equality Operator


/*
Branching programs, i.e. ones that do different things if certain conditions are met, rely on if, else if, and else statements in JavaScript. 
The condition sometimes takes the form of testing whether a result is equal to a value.

The code below assigns x to be 2, which evaluates as true. 
Almost every value on its own in JavaScript evaluates to true, 
except what are known as the "falsy" values: 
false, 0, "" (an empty string), 
NaN, undefined, and null.
*/

let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);