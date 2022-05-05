// Confirm the Ending
function confirmEnding(str, target) {
    return str.endsWith(target);
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("specification", "on"));

  //
let str = 'Hossein'
let subStr = 'ein'
console.log(str.substring(str.length-subStr.length,str.length));

function cEnd(str,target){
    let extract = str.substring(str.length-target.length,str.length);
    console.log(extract,target);
    return extract === target 
}

console.log(cEnd("Connor", "n"))

// Method 1: Declarative approach
// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor

//   return str.slice(str.length - target.length) === target;
// }

// confirmEnding("He has to give me a new name", "name");

// Method 2: using Regular Expression
// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor

//   let re = new RegExp(target + "$", "i");

//   return re.test(str);
// }

// console.log(confirmEnding("Bastian", "n"));

// Method 3:
// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target
// }

// confirmEnding("Bastian", "n");