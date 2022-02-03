const str = " ";
var log = console.log;
log('Hossein',str.repeat(10),'Molhem');


const str1 = 'a';
log(str1.repeat(10));

const str2 = 'Hello World';
log(str2.includes('o')); // true
log(str2.includes('w')); // false since case sensitive
log(str2.includes('W')); // true since case sensitive

strArray = ['Hossein', 'Molhem', 'Shahriar'];
log(strArray.includes('Hossein')); // true

const str3 = 'Hello World';
log('End ',str3.endsWith('d')); //true
log('End ',str3.endsWith('World')); //true
log('start ',str3.startsWith('Hello')); //true

