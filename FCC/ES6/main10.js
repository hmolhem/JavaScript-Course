// Use Destructuring Assignment to Assign Variables from Objects
const user = { name: 'John Doe', age: 34 };
// const userName = user.name;
// const userAge = user.age;
const { name: userName, age: userAge } = user;
console.log(user.name, user.age);
console.log(userName, userAge);


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
//   const highToday = HIGH_TEMPERATURES.today;
//   const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line