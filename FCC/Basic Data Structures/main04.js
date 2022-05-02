// Remove Items Using splice()
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 1);
console.log(array);

let array1 = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array1.splice(6, 2);
console.log(newArray);

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.shift();
arr.splice(3,4);
// Only change code above this line
console.log(arr);