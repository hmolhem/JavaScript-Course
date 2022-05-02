/** @format */

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let index = 0;
  let flag = true;
  let l = contacts.length - 1;

  while (flag) {
    if (index <= l) {
      if (contacts[index].firstName == name) {
        if (contacts[index].hasOwnProperty(prop)) {
          flag = false;
          return contacts[index][prop];
        } else {
          flag = false;
          return "No such property";
        }
      } else index++;
    } else {
      return "No such contact";
    }
  }
}

// let x = lookUpProfile("Kristian", "lastName");
// console.log('First : ',x);

// let y = lookUpProfile("Sherlock", "likes");
// console.log('Second :',y);

// let z = lookUpProfile("Harry", "likes");
// console.log('Third :',z);

// let t = lookUpProfile("Bob", "number");
// console.log('Fourth :',t);

// let q = lookUpProfile("Bob", "potato");
// console.log('Fourth :',q);

let r = lookUpProfile("Akira", "address");
console.log('Fiveth :',r);
