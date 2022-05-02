// Combine Arrays with the Spread Operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
console.log(thatArray);

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ... fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());