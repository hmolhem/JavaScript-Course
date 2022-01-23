// pure function
let str = 'hossein molhem';
let log = console.log;

let f_pure = function(_input){
    let _output = _input.toUpperCase();
    return _output;
};

// str is perimitive value
log(f_pure(str));

let f_impure = function(_input){
    let _output = _input.toUpperCase();
    str = _output; // side-effect
    return _output;
};

log(f_pure(str), str);