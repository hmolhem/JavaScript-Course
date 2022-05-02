// Use Destructuring Assignment to Assign Variables from Arrays
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [a1, b1,,, c1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1, c1);

let c = 8, d = 6;
[c, d] = [d, c]