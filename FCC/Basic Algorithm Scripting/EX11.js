// Title Case a Sentence
function titleCase(str) {
    return str.split(' ').map(item=>item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()).join(' ');
  }
  
  console.log(titleCase("sHoRt AnD sToUt"));

  // Method 1
  function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }

  // Method 2
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
  
  titleCase("I'm a little tea pot");

  // Method 3
  function titleCase(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, L => L.toUpperCase());
  }