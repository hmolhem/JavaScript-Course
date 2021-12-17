function * fetchAPI(){
    console.log('START fetching');
    yield 'START';

    console.log('DOING fetching');
    yield 'DOING';

    console.log('DONE fetching');
    yield 'DONE';

    console.log('ERROR fetching');
    yield 'ERROR';
}

const myFetch = fetchAPI();

console.log(myFetch);
console.log(myFetch.next());
console.log(myFetch.next());
console.log(myFetch.next());
console.log(myFetch.next());
console.log(myFetch.next());

// arrow function is not generator
// redux saga is use generator
// when we use fetching information in several stage, we prefer to generator
// vaghi mikhaim kari ra chand marhale anjam dahim az generator estefadeh mishavd.

