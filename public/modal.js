var signup = document.getElementById('id01');
var signin = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == signin) {
            signin.style.display = "none";
        }

        if (event.target == signup) {
            signup.style.display = "none";
        }