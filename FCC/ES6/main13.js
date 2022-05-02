// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const [a, b, ...arrr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // a=1, b=2
console.log(arrr); // arr= 3,4,5,7

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,,...arr] = list; // Change this line
  return arr;
}
const arr = removeFirstTwo(source);