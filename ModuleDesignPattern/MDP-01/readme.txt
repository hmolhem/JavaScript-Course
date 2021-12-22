// https://www.digitalocean.com/community/conceptual_articles/module-design-pattern-in-javascript


// Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes
// that is, a closure that protect variables and methods 
// (however, it will return an object instead of a function). 

// This is what it looks like:

(function() {

    // declare private variables and/or functions

    return {
        // declare public variables and/or functions
    }

})();

// Here we instantiate the private variables and/or functions before returning our object that we want to return. 
// Code outside of our closure is unable to access these private variables since it is not in the same scope.
// Let’s take a more concrete implementation:

var HTMLChanger = (function() {
    var contents = 'contents';

    var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
    };

    return {
    callChangeHTML: function() {
        changeHTML();
        console.log(contents);
    }
    };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined

// Notice that callChangeHTML binds to the returned object and can be referenced 
// within the HTMLChanger namespace. However, when outside the module, contents are 
// unable to be referenced.

// Revealing Module Pattern
// A variation of the module pattern is called the Revealing Module Pattern. 
// The purpose is to maintain encapsulation and reveal certain variables and 
// methods returned in an object literal. 

// The direct implementation looks like this:

var Exposer = (function() {
    var privateVariable = 10;

    var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
    }

    var methodToExpose = function() {
    console.log('This is a method I want to expose!');
    }

    var otherMethodIWantToExpose = function() {
    privateMethod();
    }

    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined

// Although this looks much cleaner, an obvious disadvantage is unable to reference 
// the private methods. This can pose unit testing challenges. 
// Similarly, the public behaviors are non-overridable.