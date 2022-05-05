// Falsy Bouncer
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

  // Method 1
  function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }

  // Method 2
  function bouncer(arr) {
    return arr.filter(Boolean);
  }
  