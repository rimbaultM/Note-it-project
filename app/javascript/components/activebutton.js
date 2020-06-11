 const activebutton = () => {
     // Get the container element
    var btnContainer = document.getElementById("colorselect");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("buttonchoice");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activetheme");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" activetheme", "");
        }
        // Add the active class to the current/clicked button
        this.className += " activetheme";
      });
    }
}
 export {activebutton}






