// Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
    this.name = name;
}
  
  Cat.prototype = {
    constructor: Cat
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
      }
  };

let C1 = new Cat("pishi");
let B1 = new Bear("goh");

console.log(C1);
console.log(B1);
