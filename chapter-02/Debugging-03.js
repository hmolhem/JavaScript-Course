var submitForm = function(event){
    if (event) event.preventDefault(); // prevent form refresh

        if(
            document.getElementById('username') && 
            document.getElementById('password')
        ){
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            document.getElementById('description').innerHTML = "Submitted";
            document.getElementById('description').style.color = "#4caf50";
            console.log(username, password);           
        }
};