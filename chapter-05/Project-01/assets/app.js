(function(){
    let toggle = button => {
       let element = document.getElementsByClassName("answerspan")[0];
      //  let hidden = element.getAttribute("visibility");
       let hidden = element.style.visibility;
       console.log(element, hidden);
      
       if (hidden) {
          // element.removeAttribute("hidden");
          element.style.visibility = '';
          button.innerText = "Hide Span";
       } else {
          // element.setAttribute("visibility", "hidden");
          element.style.visibility = 'hidden';
          button.innerText = "Show Span";
       }
    };

})();



