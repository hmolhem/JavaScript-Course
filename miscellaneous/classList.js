let div = document.querySelector('#content');
console.log(div.classList);

let dispalayClassList = (d) =>{
    for (let cssClass of div.classList) {
        console.log(cssClass);
    }
};


dispalayClassList(div);
div.classList.add('info'); // add new class to classList
dispalayClassList(div);

div.classList.remove('info'); // remove element class
dispalayClassList(div);

div.classList.add('success', 'black', 'info');
dispalayClassList(div);
div.classList.replace('success','primary');
dispalayClassList(div);
flag = div.classList.contains('primary');
console.log(flag);

div.classList.toggle('dark'); // add it
dispalayClassList(div);
div.classList.toggle('dark'); // remove it
dispalayClassList(div);
