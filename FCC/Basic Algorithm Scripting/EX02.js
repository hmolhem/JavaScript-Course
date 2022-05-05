// Reverse a String
let str = 'Hossein';
let newStr = '';
for (let i = str.length-1; i>=0; i--){
    newStr += str[i];
}
console.log(newStr);

let nStr = ''.split();
for (ch in str){
    nStr.unshift(str[ch])
}

console.log(nStr.join(""));

function reverseString(str) {
    let newStr = ''.split();
    for (let ch in str){
      newStr.unshift(str[ch]);
    }
    return newStr.join("");
  }
  
  console.log(reverseString("hello"));

  // Method 1: 
  // function reverseString(str) {
  //   let reversedStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversedStr += str[i];
  //   }
  //   return reversedStr;
  // }

  // Method 2: 
  // function reverseString(str) {
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");
  // }
