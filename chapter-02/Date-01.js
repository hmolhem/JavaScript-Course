
var onChangeDate = function(event){
      console.log("value : ",event.target.value); 
      console.log("string date : ",Date(event.target.value));
      console.log("Timestamp :", new Date(event.target.value).getTime());
};