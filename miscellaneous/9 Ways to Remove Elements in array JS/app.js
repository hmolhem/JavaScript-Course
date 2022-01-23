

    var log = console.log;
    
    // Method #1
    // remove from end of an array by setting the length property
    var ar = [1, 2, 3, 4, 5, 6];
    ar.length = 4; // set length to remove elements
    log( ar ); // [1, 2, 3, 4]
    
    // Method #2
    // remove last element of the array
    console.clear();
    var ar = [1, 2, 3, 4, 5, 6];
    log(ar);
    log(ar.pop()); // return 6
    log(ar); // [1, 2, 3, 4, 5]
    
    // Method #3
    // remove first element of the array
    console.clear();
    var ar = [1, 2, 3, 4, 5, 6];
    log(ar);
    log(ar.shift()); // return 1
    log(ar); // [2, 3, 4, 5, 6]
    
    
    // Method #4
    // add/remove first elements from an array
    console.clear();
    var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar.splice(2,5)); // return [3, 4, 5, 6, 7]
    log(ar); // [1, 2, 8, 9, 10]
    log(ar);
    
    // removing one element in an array by using splice
    console.clear();
    var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar); 
    log(ar.splice(2,1)); // 3
    log(ar); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    
    // removing Array items by value using splice
    console.clear();
    var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar); 
    ar.forEach((el,idx) => {
        if (el === 5){
            log(ar.splice(idx,1));
        }
    });
    log(ar);
    
    // Method #5
    // using array filter method to remove items by value
    console.clear();
    var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar); 
    var filtered = ar.filter( value =>{
        return value > 5;
    });
    log(filtered);
    
    // Method #6
    // Lodash is library to manuplation an array see the website
    
    //Method #7
    // Making a Remove Method
    
    console.clear();
    var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar); 
    function removeRemove(arr, value) {
        return arr.filter(idx => {
            return idx != value;
        });
    }
    var result =  removeRemove(ar, 6);
    log(result);
    
    // Method #8
    // Explicitly Remove Array Elements Using the Delete Operator
    console.clear();
    var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar); 
    delete ar[4]; // delete element with index 4
    log(ar); // [1, 2, 3, 4, empty, 6, 7, 8, 9, 10]
    // alert(ar); // [1, 2, 3, 4, 6, 7, 8, 9, 10]


    // Method #9
    // Clear or Reset a JavaScript Array
    console.clear();
    ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar);
    ar = [];
    log(ar);
    
    console.clear();
    ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar1);
    ar2 = ar1;  // Reference ar1 by another variable ar2
    log(ar2);
    log(ar1);
    
    //A simple trick to clear an array is to set its length property to 0.
    console.clear();
    ar= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar);
    ar.length = 0; 
    log(ar);
    
    console.clear();
    ar= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar);
    ar.splice(0,ar.length);
    log(ar);
    
    console.clear();
    ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(ar);
    while(ar.length){
        ar.pop();
    }
    log(ar);


    
    



    