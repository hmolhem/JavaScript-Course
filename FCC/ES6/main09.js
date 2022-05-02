// Use Destructuring Assignment to Extract Values from Objects
const user = { name: 'John Doe', age: 34 };
// const name = user.name;
// const age = user.age;

const { name, age } = user;

console.log(name);
console.log(age);


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
 
  // const today = HIGH_TEMPERATURES.today;
  // const tomorrow = HIGH_TEMPERATURES.tomorrow;
  const {today,  tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow)