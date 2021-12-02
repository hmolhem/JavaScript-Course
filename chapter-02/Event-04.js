var username;
var password;
var submitForm = function(event){
    event.preventDefault(); // prevent form refresh
    console.log('data',username, password);
};
var onChangeInputPassword = function(event){
    password = event.target.value; // get passwod
};
var onChangeInputUsername = function(event){
    username = event.target.value; //get username
};
 
