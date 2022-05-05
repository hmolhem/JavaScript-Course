// Find the Longest Word in a String
function findLongestWordLength(str) {
    let words = str.split(" ");
    let longestWord = 0;
    for (let word in words){
        if(words[word].length > longestWord) longestWord = words[word].length;
    }
    return longestWord;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  // method 2
  let str = "The quick brown fox jumped over the lazy dog";
  let words = str.split(" ");
  console.log(words.map(word => word.length))

  // Method 1
//   function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxLength = 0;
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       }
//     }
  
//     return maxLength;
//   }

// Method 2
// function findLongestWordLength(s) {
//     return s.split(' ')
//       .reduce(function(longest, word) {
//         return Math.max(longest, word.length)
//       }, 0);
//   }

// Method 3
// function findLongestWordLength(str) {
//     return Math.max(...str.split(" ").map(word => word.length));
//   }

// Method 4
// function findLongestWordLength(str) {
//     // split the string into individual words
//     const words = str.split(" ");
  
//     // words only has 1 element left that is the longest element
//     if (words.length == 1) {
//       return words[0].length;
//     }
  
//     // if words has multiple elements, remove the first element
//     // and recursively call the function
//     return Math.max(
//       words[0].length,
//       findLongestWordLength(words.slice(1).join(" "))
//     );
//   }
  
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");