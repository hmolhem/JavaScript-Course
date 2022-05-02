function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));

  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countdown(5));

  function rangeOfNumbersUp(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const countArray = rangeOfNumbersUp(startNum, endNum-1);
      countArray.push(endNum);
      return countArray;
    }
  }
  console.log(rangeOfNumbersUp(6, 9));

  function rangeOfNumbersDown(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const countArray = rangeOfNumbersDown(startNum, endNum-1);
      countArray.unshift(endNum);
      return countArray;
    }
  }
  console.log(rangeOfNumbersDown(6, 9));