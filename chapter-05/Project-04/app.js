const showDialogBtn = document.getElementById('showModalBtn');
const dialogWindow = document.getElementById('modalBox');
const questionValue = document.getElementById('question');
const answerValue = document.getElementById('answer');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');
const outputBox = document.getElementById('outputBox');

// "Update details" button opens the <dialog> modally
showDialogBtn.addEventListener('click', function onOpen() {
  dialogWindow.showModal();
});

// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// cancelBtn.addEventListener('close', function onClose() {
//   // outputBox.value = modalBoxWindow.returnValue + " button clicked - " + (new Date()).toString();
//   console.log('click cancel btn');
// });
// saveBtn.addEventListener('close', function onClose() {
//   outputBox.value = modalBox.returnValue + " button clicked - " + (new Date()).toString();
// });

// cancelBtn.addEventListener('click',closeModalWindow);
// saveBtn.addEventListener('click',closeModalAndGetQuestionAndAnswer);

// function closeModalWindow(){
//   console.log('cancel btn');
// }

// function closeModalAndGetQuestionAndAnswer(){
//   console.log('save btn');
//   console.log(questionValue.value);
//   console.log(answerValue.value);
//   console.log(modalBoxWindow.returnValue);
// }

cancelBtn.addEventListener('close', ()=>{
  dialogWindow.close();
  console.log('Hello');
});