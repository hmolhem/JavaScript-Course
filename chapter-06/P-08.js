const names = ['hossein', 'maryam', 'shahriar', 'parviz'];
console.log(names.indexOf('maryam')); // 1
console.log(names.indexOf('shahin')); // -1


const s = new Set();
s.add('hossein');
s.add('maryam');
s.add('shahriar');
s.add('parviz');

console.log(s.has('hossein'));  // return true
console.log(s.has('akram'));  // return false
console.log('Set size : ',s.size);
console.log(s.keys());
s.delete('parviz');
console.log(s);

s.forEach(names => {
    console.log('Name : ', names);
});
