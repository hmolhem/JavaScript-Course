// Catch Off By One Errors When Using Indexing
// Off by one errors (sometimes called OBOE) crop up

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    //for (let i = 0; i <= len; i++) { //incorrect one too many times
    // for (let i = 1; i < len; i++) {  //incorrect one too few times 
    for (let i = 0; i < len; i++) { // correct
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();