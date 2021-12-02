var submitForm = function(event){
    event.preventDefault(); // prevent form refresh
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    document.getElementById('description').innerHTML = "Submitted";
    document.getElementById('description').style.color = "#4caf50";
    console.log(username, password);
};