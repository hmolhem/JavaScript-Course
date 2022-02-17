let  content = document.getElementById('menu');
let firstChild =  content.firstChild.nodeName;

console.log(firstChild);

console.log(content.firstElementChild); // returns first element child

console.log(content.lastElementChild); // returns last element child

console.log(content.childNodes); // returns all child elements with any node type.

console.log(content.children); // returns all child elements.

console.log(content.hasChildNodes());  // return true orfalse

//  traverse on all HTMLCollections
for (let index = 0; index < content.children.length; index++) {
    const element = content.children[index];
    console.log(element);
}

// Array from HTMLCollection
Array.from(content.children).forEach(el =>{
    console.log(el);
});

let log = console.log

log(content.lastElementChild.textContent)
log(content.lastElementChild.nodeName)
log(content.lastElementChild.nodeType)
log(content.lastElementChild.nodeValue)



