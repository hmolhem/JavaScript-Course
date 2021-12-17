const a = Symbol(); // symbol create unique data type
const b = Symbol();

console.log(a); // print a is a Symbol()
console.log(a === b);

console.log(Symbol() === Symbol()); // means that Symbol is unique

const c = Symbol('This is sample test.');
console.log(c);
console.log(c === a);

const NAME = Symbol();
const PERSON = {
    [NAME]: 'Hossein'
};

console.log(PERSON[NAME]);