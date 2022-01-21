    // document.querySelector('#myForm').addEventListener('submit', function(e){
    //     document.querySelector('#myModal').modal('show');
    //     e.preventDefault();
    //   });

    const question = document.querySelector('#myForm')[0];
    const answer = document.querySelector('#myForm')[1];
    const saveBtn = document.querySelector('#saveBtn');

    saveBtn.addEventListener('submit', submitForm);


    var submitForm = function(event){
        console.log(question);
        console.log(answer);
    };

export default submitForm;