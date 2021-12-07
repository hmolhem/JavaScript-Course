function sum(a,b){
    return a+b;
}

const sum2 = function(a,b){
    return a + b;
};

const sum3 = (a,b) =>{
    return a + b;
};

document.write('Method #1 : ',' Some of two number : ',sum(2,3));
document.write('<br>');

document.write('Method #2 : ',' Some of two number : ',sum2(2,3));
document.write('<br>');

document.write('Method #3 : ',' Some of two number : ',sum3(2,3));
document.write('<br>');

const alphabets = ['a', 'b', 'c'];

alphabets.map(function (ch) {
    document.writeln(ch);
});

document.write('<br>');

alphabets.map((ch) => {
    document.writeln(ch);
});



