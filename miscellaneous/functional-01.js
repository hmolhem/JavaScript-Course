//  https://www.youtube.com/watch?v=6NPfQJJEySY

// functional programming
// 1- clean code
// 2- syntactic Efficiency
// 3- More Abstract
// 4- Reduction of Errors

// pure function
function add(a,b){
    return a+b;
}

add(1,2); // 3

let L = [1,2,3];

for (let i = 0; i < L.length; i++){
    L[i] = L[i] + 1;
}

console.log(L); // [2,3,4]

L.map(function(item){return item+1;});
console.log(L.map(item => item+1));

let aadd = item => item + 1;
console.log(L.map(add));

let sum = (A,I) => {return A + I;};
let val = L.map(add).reduce(sum,0);
console.log(val);
