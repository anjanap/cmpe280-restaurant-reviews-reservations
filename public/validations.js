function signupForm() {
    var fn = document.forms["signupform"]["firstname"].value;
    var ln = document.forms["signupform"]["lastname"].value;
    var em = document.forms["signupform"]["email"].value;
    var pwd = document.forms["signupform"]["password"].value;
    var pwd2 = document.forms["signupform"]["password-repeat"].value;
    var phn = document.forms["signupform"]["phone"].value;
    var regEm = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var regPh = /^\(\d{3}\) *\d{3}-\d{4}$/;
    var msg = "";
    if (fn == "") {
        msg += "Firstname is required.\n"
    }
    if (ln == "") {
        msg += "Lastname is required.\n"
    }
    if (em == "") {
        msg += "Email is required.\n"
    }
    if (pwd == "") {
        msg += "Passowrd is required.\n"
    }
    if (phn == "") {
        msg += "Phone number is required.\n"
    }
    if (!regPh.test(phn)) {
        msg += "Phone number format should be (999) 999-9999.\n"
    }
    if (!regEm.test(em)) {
        msg += "Email format incorrect.\n"
    }
    if (pwd.length < 6) {
        msg += "Passowrd minimum length should be 6.\n"
    }
    if (pwd2.length < 6) {
        msg += "Passwords do not match.\n"
    }
    if (pwd != pwd2)
        msg += "Passwords do not match.\n"

    if (msg.length > 0) {
        alert(msg);
        return false;
    }
}

function signinForm() {
    var em = document.forms["signinform"]["email"].value;
    var regEm = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pwd = document.forms["signinform"]["password"].value;
    var msg = "";
    if (em == "") {
        msg += "Email is required.\n"
    }
    if (pwd == "") {
        msg += "Passowrd is required.\n"
    }
    if (!regEm.test(em)) {
        msg += "Email format incorrect.\n"
    }
    if (pwd.length < 6) {
        msg += "Passowrd minimum length should be 6.\n"
    }
    if (msg.length > 0) {
        alert(msg);
        return false;
    }
}
