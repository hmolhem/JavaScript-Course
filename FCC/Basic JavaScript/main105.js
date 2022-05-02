function checkNum(num){
  return (num==0)? 'zero': (num>0)? 'positive': 'negative';
}

console.log(checkNum(10));
console.log(checkNum(-12));
console.log(checkNum(0));