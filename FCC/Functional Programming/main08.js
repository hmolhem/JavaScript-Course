// Implement map on a Prototype
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
    for (let i = 0; i<this.length; i++){
      newArray.push(callback(this[i]));
    }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

// const new_s = s.myMap(item => item * 2);


console.log(new_s);


// Method 2
// the global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//   var newArray = [];
//   // Add your code below this line
//   this.forEach(a => newArray.push(callback(a)));
//   // Add your code above this line
//   return newArray;
// };

// var new_s = s.myMap(function(item) {
//   return item * 2;
// });

// Method 3
// The global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback, arr = [], i = 0) {
//   return i < this.length
//     ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
//     : arr;
// };

// var new_s = s.myMap(function(item) {
//   return item * 2;
// });