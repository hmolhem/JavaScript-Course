
var submitForm = function(event){
    event.preventDefault(); // prevent form refresh
    var form = new FormData(event.target);
    console.log('data',form.get('username'));
    console.log('data',form.get('password'));
};
