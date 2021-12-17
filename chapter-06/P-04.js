const a = Symbol.for('Hossein'); // symbol with for is not unique
const b = Symbol.for('Hossein');
const c = Symbol.for('Molhem');

console.log(a === b);
console.log(a === c);

console.log('Symbol with keyFor : ',Symbol.keyFor(a));

const  obj = {};
obj.a = '111';
obj.b = '222';
console.log(obj);

obj[a] = 'Symbol A';
obj[c] = 'Symbol C';

console.log(obj);

console.log(JSON.stringify(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.getOwnPropertySymbols(obj)[0]);
console.log(Object.getOwnPropertySymbols(obj)[0] === a);
