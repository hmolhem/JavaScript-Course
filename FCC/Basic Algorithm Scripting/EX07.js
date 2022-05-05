// Repeat a String Repeat a String
// function repeatStringNumTimes(str, num) {
//     let i = 0;
//     let newStr = '';
//     if (num > 0 ){
//         while(i !== num){
//             newStr += str;
//             i++;
//         }
//         return newStr;
//     }else return '';
//   }
  
//   console.log(repeatStringNumTimes("abc", -2));

  // method 2
  function repeatStringNumTimes(str, num) {

    return num > 0 ? str + repeatStringNumTimes(str,num-1):'';
  }
  
  console.log(repeatStringNumTimes("abc", 2));


  // Method 1
  // function repeatStringNumTimes(str, num) {
  //   if (num < 1) {
  //     return "";
  //   } else {
  //     return str + repeatStringNumTimes(str, num - 1);
  //   }
  // }

  // Method 2
  // function repeatStringNumTimes(str, num) {
  //   let accumulatedStr = "";
  
  //   for (let i = 0; i < num; i++) {
  //     accumulatedStr += str;
  //   }
  
  //   return accumulatedStr;
  // }

  // Method 3
  // function repeatStringNumTimes(str, num) {
  //   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  // }