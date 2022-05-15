// Introduction to Currying and Partial Application
// function add(x) {
//     // Only change code below this line
//     return function(y){
//         return function(z){
//             return x + y + z;
//         }
//     }
  
//     // Only change code above this line
//   }
  
//   console.log(add(10)(20)(30));
  
  // Method 2
  const add = x => y => z => x + y + z;
  console.log(add(10)(20)(30));




