// Implement the filter Method on a Prototype

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach(item => callback(item) ? newArray.push(item):undefined);
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);

// Method 1
// Array.prototype.myFilter = function(callback){
//     // Only change code below this line
//     let newArray = [];
//     this.forEach(function(x) {
//       if (callback(x) == true) {
//         newArray.push(x);
//       }
//     });
//     // Only change code above this line
//     return newArray;
//   };
  
//   let new_s = s.myFilter(function(item){
//     return item % 2 === 1;
//   });

// Method 2
// Array.prototype.myFilter = function(callback) {
//     var newArray = [];
//     // Add your code below this line
//     for (let i = 0; i < this.length; i++) {
//       if (callback(this[i]) === true) {
//         newArray.push(this[i]);
//       }
//     }
//     // Add your code above this line
//     return newArray;
//   };
  
//   var new_s = s.myFilter(function(item) {
//     return item % 2 === 1;
//   });
