var submitForm = function(event){
    if (event) event.preventDefault(); // prevent form refresh

        try {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            document.getElementById('description').innerHTML = "Submitted";
            document.getElementById('description').style.color = "#4caf50";
            console.log(username, password);           
        } catch (error) {
            console.log('something wrong.');
            // console.log(error);
            document.getElementById('description').innerHTML = "Error";
            document.getElementById('description').style.color = "red";      
        }
};