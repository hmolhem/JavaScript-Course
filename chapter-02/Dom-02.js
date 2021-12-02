var submitForm = function(event){
    event.preventDefault(); // prevent form refresh
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // console.log(event);
    console.log(username, password);
};  

var showElementBytag = function(event){
    var tags = document.getElementsByTagName('input');
    console.log(tags.length);
    for (let index = 0; index < tags.length; index++) {
        console.log(tags[index].id, tags[index].type);
    }
};