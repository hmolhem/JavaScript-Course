// Apply Functional Programming to Convert Strings to URL Slugs
// Only change code below this line
function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-");
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));

// Method 2
// the global variable
// var globalTitle = "Winter Is Coming";

// // Add your code below this line
// function urlSlug(title) {
//   return title
//     .split(" ")
//     .filter(substr => substr !== "")
//     .join("-")
//     .toLowerCase();
// }
// // Add your code above this line

// var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"