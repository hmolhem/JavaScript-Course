function truncateString(str, num) {
    return num<str.length ? str.substring(0,num)+'...': str;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

  // Method 1
  // function truncateString(str, num) {
  //   // Clear out that junk in your trunk
  //   if (str.length > num) {
  //     return str.slice(0, num) + "...";
  //   } else {
  //     return str;
  //   }
  // }

  // Method 2
  // function truncateString(str, num) {
  //   return str.length > num ? str.slice(0, num) + "..." : str;
  // }