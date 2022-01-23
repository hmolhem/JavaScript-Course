// let multiplier = function(factor){
//     return function(x){
//         return x*factor;
//     };
// };

// you can use inner function as arrow function

let multiplier = function(factor){
    return x => x*factor;
};

let doubler = multiplier(2);
let tripler = multiplier(3);

console.log(doubler);
console.log(doubler(5));
console.log(tripler(5));


