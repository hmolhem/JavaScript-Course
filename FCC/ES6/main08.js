// Use the Spread Operator to Evaluate Arrays In-Place
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);

console.log(...arr);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  
console.log(arr2);
