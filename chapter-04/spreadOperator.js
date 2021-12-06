function sum(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3];
console.log(...numbers);
console.log('summation of aray by spread operator : ',sum(...numbers));
console.log('summation of aray by apply method : ',sum.apply(null,numbers));


// another spread operator
let numberScore = [0,1,2];
let newNumber = 10;
numberScore = [...numberScore, newNumber];
console.log(numberScore);
console.log(...numberScore);

// function calls
console.log(sum(...numberScore));

 // combine two arrays by inserting all elements from iterableObj
x = [0,1,2,3,4,5,6];
y  = [...x, 7, 'eight', 9];
console.log(x);
console.log(y);

// copy an array
let t = [1,2,3];
let s = [...t];
console.log('t :', t);
console.log('s :', s);