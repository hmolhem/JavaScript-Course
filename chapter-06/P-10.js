const  a = {
    name: 'hossein', 
    surname: 'molhem'
};
console.log('a : ',a);

const b = {
    age: 50
};

console.log('b :',b);

const c = {
    ...a,
    ...b
};
console.log('c : ', c);

Object.assign(a,b);
console.log('a is assign : ',a);

const f = {job: 'accademic member'};

a = {
    ...a,
    ...f
};

Object.assign(a,f);
console.log('a assign :',a);