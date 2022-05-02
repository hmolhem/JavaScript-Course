// const person = {
//     name: "Taylor",
//     sayHello: function() {
//       return `Hello! My name is ${this.name}.`;
//     }
//   };

  const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };

// const bicycle = {
//     gear: 2,
//     setGear: function(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.gear);


  // Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
