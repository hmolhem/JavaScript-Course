// Use getters and setters to Control Access to an Object

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);

  /* 
  Note: It is convention to precede the name of a private variable 
  with an underscore (_).   However, the practice itself does not 
  make a variable private.
  */

  // Only change code below this line
class Thermostat {
    constructor(f){
      this._f = f;
    }
  
    get temperature() {
      return 5/9 * (this._f - 32);
    }
  
     set temperature(c) {
          this._f =  c* 9.0 / 5 + 32;
    }
   }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  console.log(thermos.temperature); // 24.44 in Celsius
  let temp = thermos.temperature; // 24.44 in Celsius
  console.log(temp);
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  console.log(temp);


