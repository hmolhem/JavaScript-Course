model = {
    items: []
};

view = {
    clearList: function(){
        var range = docuemnt.createRange();
        range.selectNodeContents(document.getElementById('list'));
        range.deleteContents();
    },

    render: function(){
        this.clearList();
        if(model.items.length != 0){
            list = document.getElementById('list');
            for (var i=0; i < model.items.length; i++)    {
                item      = document.createElement("li");
                span      = document.createElement("span");
                check     = document.createElement("a");
                cross     = document.createElement("a");
                iconCheck = document.createElement("i");
                iconCross = document.createElement("i");
                
                item.className  = "item";
                span.calssName  = "item-text";
                check.className = "item-complete";
                cross.className = "item-delete";
                span.textContet = model.items[i].text;

                if (model.items[i].completed)
                span.setAttribute("style", "text-decoratino: line-through; color: #bbb;");

                iconCheck.setAttribute("class", "icon ion-md-checkmark");
                iconCheck.setAttribute("data-id", i);
                iconCross.setAttribute("class", "icon ion-md-trash");
                iconCross.setAttribute("data-id", i);
                
                check.setAttribute("onclick", controller.completeItem(`${i}`));
                cross.setAttribute("onclick", controller.completeItem(`${i}`));
                
                check.AppendChild(iconCheck);
                cross.AppendChild(iconCross);
                item.AppendChild(span);
                item.AppendChild(check);
                item.AppendChild(cross);

                list.appedChild(item);


            } //creating the DOM elements we need for each items
        }

    },

    addItem: function(e){
        if((e.code == "Enter") || (e.code == "NumpadEnetr")){
            input = document.getElementById('add-item');
            if ((input.value != "") || (input.value != " ")){
                controller.addItem(input.value);
                return false;
            }
        } //add item when click add item button
    }
};

controller = {
    init: function(){

        view.render(); // render function to refresh out view when we update something
    },
    
    addItem: function(item){
        list_item = {text: item, completed:false};
        model.item.push(list_item);
        document.getElementById('add-item').value = "";
        view.render(); // render function to refresh out view when we update something
    },
    
    completeItem: function(item_index){
        model.items[item_index].completed = !model.items[item_index].completed; //toggle item complete
        view.render(); // render function to refresh out view when we update something
    },
    
    deleteItem: function(){
        model.items.splice(item_index,1); //delete item from our list
        view.render(); // render function to refresh out view when we update something
    }
};