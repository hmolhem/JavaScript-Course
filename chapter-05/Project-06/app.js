(function () {
    var flashCard = {
        data: {
            cardContent: [{
                    id: 1,
                    question: "what color is sky?",
                    answer: "blue"
                },
                {
                    id: 2,
                    question: "what is the capital city of Iran?",
                    answer: "Tehran"
                },
                {
                    id: 3,
                    question: "what is the population of Iran?",
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

            this.question = this.dialog.querySelector('#question');
            this.answer = this.dialog.querySelector('#answer');
            this.closeModalButton = this.dialog.querySelector('#close');
            this.saveModalButton = this.dialog.querySelector('#save');

            this.cards = document.getElementById('target');
            this.tempEngine = document.getElementById('template');
            this.template = this.tempEngine.innerHTML;
        },

        bindEvents: function () {
            this.openDialogWindow.addEventListener("click", this.opendialog.bind(this));
            this.closeModalButton.addEventListener("click", this.closeModalWindow.bind(this));
            this.saveModalButton.addEventListener("click", this.addCard.bind(this));
            this.cards.addEventListener('click', this.whatButtonPressed.bind(this));
        },

        render: function () {
            this.cards.innerHTML = Mustache.render(this.template, this.data);
        },

        opendialog: function () {
            this.question.value = '';
            this.answer.value = '';
            this.dialog.showModal();
        },
        
        closeModalWindow: function () {
            this.dialog.close();
        },
        
        addCard: function () {
            
            let newObject = {
                id: this.data.cardContent.length + 1,
                question: this.question.value,
                answer: this.answer.value
            };
            if (newObject.question !== "" && newObject.answer !== "") {
                this.data.cardContent.push(newObject);
                this.render();
                this.refreshModal();
            }
            this.render();
        },
        
        refreshModal: function () {
            this.question.value = '';
            this.answer.value = '';
        },
        
        
        whatButtonPressed: function () {
            let allCards = this.cards.querySelectorAll('.card');
            
            allCards.forEach((el, idx) => {
                el.querySelector('#showAnswer').addEventListener('click', (e) => {
                    this.showAnswer(e, idx);
                });
                el.querySelector('#editQuestion').addEventListener('click', (e) => {
                    this.editCard(e, idx);
                });
                el.querySelector('#deleteQuestion').addEventListener('click', (e) => {
                    this.deleteCard(e, idx);
                });
            });
        },
        
        showAnswer: function (e,i) {
            e.stopPropagation();
            let allCards = this.cards.querySelectorAll('.card');
            
            let answer = allCards[i].querySelector('#spanAnswer');
            let flag = answer.style.visibility === 'hidden';
            
            if (flag){
                answer.style.visibility = 'visible';
            }else {
                answer.style.visibility = 'hidden';
            }
        },
        
        editCard: function (e, i) {
            e.stopPropagation();
            let allCards = this.cards.querySelectorAll('.card');
            let editQuestion = allCards[i].querySelector('#editQuestion');
            let questionBox = allCards[i].querySelector('#spanQuestion');
            let answerBox = allCards[i].querySelector('#spanAnswer');
            
            questionBox.contentEditable = 'true';
            answerBox.style.visibility = 'visible';
            answerBox.contentEditable = 'true';
            questionBox.style.padding = '3px 5px';
            answerBox.style.padding = '3px 5px';
            editQuestion.innerHTML = 'Save Change';
            questionBox.focus();
            
            editQuestion.addEventListener('click', (e)=>{
                e.stopPropagation();
                this.data.cardContent[i].question = questionBox.innerHTML;
                this.data.cardContent[i].answer = answerBox.innerHTML;
                this.render();
            });
        },
        
        deleteCard: function (e, i) {
            e.stopPropagation();
            // console.log(e.target.id, i);
            let allCards = this.cards.querySelectorAll('.card');
            let deleteBtn = allCards[i].querySelector('#deleteQuestion');
            console.log(deleteBtn.innerHTML);
            console.log(i);
            this.data.cardContent.splice(i,1);
            this.data.cardContent.forEach((el,idx)=>{
                el.id = idx +1 ;
            })
            this.render();
        },
        
    };
    flashCard.init();
})();