function signupForm() {
  var fn=document.signupform.firstname.value;
  var ln=document.signupform.lastname.value;
  var em=document.signupform.email.value;
  var pwd=document.signupform.password.value;
  var phn=document.signupform.phone.value;
  var regEm=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var regPh=/^\(\d{3}\) *\d{3}-\d{4}$/;
  var msg="";
  if (fn == "") {
    msg+="Firstname is required.\n"
  }
  if (ln == "") {
    msg+="Lastname is required.\n"
  }
  if (em == "") {
    msg+="Email is required.\n"
  }
  if (pwd == "") {
    msg+="Passowrd is required.\n"
  }
  if (phn == "") {
    msg+="Phone number is required.\n"
  }
  if(!regPh.test(phn)){
    msg+="Phone number format should be (999) 999-9999.\n"
  }
  if(!regEm.test(em)){
    msg+="Email format incorrect.\n"
  }
  if(pwd.length<6){
    msg+="Passowrd minimum length should be 6.\n"
  }
  if(msg.length>0){
    alert(msg);
    return false;
  }
}

function signinForm() {
  var em=document.signinform.email.value;
  var pwd=document.signinform.password.value;
  var msg="";
  if (em == "") {
    msg+="Email is required.\n"
  }
  if (pwd == "") {
    msg+="Passowrd is required.\n"
  }
  if(pwd.length<6){
    msg+="Passowrd minimum length should be 6.\n"
  }
}
