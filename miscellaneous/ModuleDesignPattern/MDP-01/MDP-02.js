var HTMLChanger = (function() {
    var contents = 'My name is Hossein';

    var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
    };

    return {
    callChangeHTML: changeHTML, //Revealing Module Pattern
    };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined