(function(){
    var peopleModule = {

        people: { 
            people: ['Ali', 'Hasan']
        },
              
        init: function(){
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
            
        cacheDom: function(){
            this.elpeopleModule = document.getElementById('peopleModule');
            this.button = this.elpeopleModule.querySelectorAll('input')[0];
            this.input = this.elpeopleModule.querySelectorAll('input')[1];
            
            this.elpeopleCard = document.getElementById('peopleCard');
            this.ul = this.elpeopleCard.querySelector('ul');

            this.template = document.getElementById('people-template').innerHTML;
        },

        bindEvents: function (){
            this.button.addEventListener("click", this.addPerson.bind(this));
            this.ul.addEventListener("click", this.deletePerson.bind(this));
        },
        
        render: function(){
            this.ul.innerHTML = Mustache.render(this.template, this.people);
        },

        addPerson: function(){
            this.people.people.push(this.input.value);
            this.render();
            this.input.value = '';
        },

        deletePerson: function(event){
            let del = event.target.id;
            let name = event.target.parentNode.querySelector('span').innerHTML;
            if (del === 'del'){
                let index = this.people.people.indexOf(name);
                this.people.people.splice(index,1);
                console.log(index);
            }
            this.render();
        }

    };
    peopleModule.init();
})();