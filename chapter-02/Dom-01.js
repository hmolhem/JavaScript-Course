var submitForm = function(event){
    event.preventDefault(); // prevent form refresh
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // console.log(event);
    console.log(username, password);
};  

