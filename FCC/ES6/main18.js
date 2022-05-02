// Use class Syntax to Define a Constructor Function

// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
//   }
//   var zeus = new SpaceShuttle('Jupiter');

  class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');  


  // Only change code below this line
class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'