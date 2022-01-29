(function () {
    var flashCard = {
        data: {
            cardContent: [{
                    id: 1,
                    question: "what color is sky",
                    answer: "blue"
                },
                {
                    id: 2,
                    question: "what is the capital city of Iran",
                    answer: "Tehran"
                },
                {
                    id: 3,
                    question: "what is the population of Iran",
                    answer: "80M"
                }
            ]
        },

        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.render();
            // this.fetchCards();
        },

        cacheDom: function () {
            this.container = document.querySelector('.container');
            this.header = this.container.querySelector('#header');
            this.dialog = this.container.querySelector('.dialog');
            this.target = this.container.querySelector('#target');

            this.openDialogWindow = this.header.querySelector('#showModalBtn');

            this.question = this.dialog .querySelector('#question');
            this.answer = this.dialog .querySelector('#answer');
            this.closeModalButton = this.dialog .querySelector('#close');
            this.saveModalButton = this.dialog .querySelector('#save');

            this.cards = document.getElementById('target');
            this.tempEngine = document.getElementById('template');
            this.template = this.tempEngine.innerHTML;
        },

        bindEvents: function () {
            this.openDialogWindow.addEventListener("click", this.opendialog.bind(this));
            this.closeModalButton.addEventListener("click", this.closeModalWindow.bind(this));
            this.saveModalButton.addEventListener("click", this.addCard.bind(this));
            // this.tempEngine.addEventListener('click', this.showAnswer.bind(this));
            // this.tempEngine.addEventListener('click', this.deleteCard.bind(this));
            // this.tempEngine.addEventListener('click', this.editCard.bind(this));
            this.cards.addEventListener('click',this.showAnswer.bind(this));
        },

        render: function () {
            this.cards.innerHTML = Mustache.render(this.template, this.data);
        },

        opendialog: function () {
            this.question.value = '';
            this.answer.value = '';
            this.dialog.showModal();
        },

        closeModalWindow: function(){
            this.dialog.close();
        },

        addCard: function () {

            let newObject = {id:this.data.cardContent.length+1, 
                question:this.question.value,
                answer: this.answer.value
                };
            if(newObject.question !=="" && newObject.answer !==""){
                this.data.cardContent.push(newObject);
                this.render();
                this.refreshModel();
            }
            this.render();
            // console.log(this.data.cardContent.length);
        },

        refreshModel: function(){
            this.question.value = '';
            this.answer.value = '';
        },

        // fetchCards: function () {
        //     this.spanAnswer = document.querySelectorAll('#spanAnswer');
        //     this.showAnswer = document.querySelectorAll('#showAnswer');
        //     this.showAnswer.forEach((el,idx) =>{
        //         el.addEventListener('click', ()=>{
        //             this.showHideAnswer(idx,this.spanAnswer[idx]);
        //         });
        //     });
        // },

        // showHideAnswer: function(idx,answer){
        //     if(answer.style.visibility === 'hidden'){
        //         answer.style.visibility = 'visible';
        //     }else{
        //         answer.style.visibility = 'hidden';
        //     }
        // },

        showAnswer: function () {
            this.cards.querySelectorAll('.card').addEventListener();
            console.log(x);
        },
        
        deleteCard: function () {

        },

        editCard: function () {

        },



    };
    flashCard.init();
})();