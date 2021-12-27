(function(){
    var people = {
        people: ['Will','Hossein'],
        init: function(){
            this.cacheDom();
            this.render();
        },

        cacheDom: function(){
            this.el = document.getElementById('peopleModule');
            this.button = this.el.querySelector('button');
            this.input = this.el.querySelector('input');
            this.ul = this.el.querySelector('ul');
            this.template = this.el.querySelector('#people-templae');
        },
        
        render: function(){
            var data = {
                people: this.people,
            };
            console.log(data.people[0]);
            console.log(this.template);

            this.template.innerHTML +=  Mustache.render(this.template,data.people[0]);
            // for (index = 0; index < data.length; index++){
            //     this.template.innerHTML +=  Mustache.render(this.template,data.people[index]);
            // }
             


        }
    };
    people.init();
})();