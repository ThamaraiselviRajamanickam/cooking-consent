// var fromEl=document.getElementById("login-form");
// var fromE2=document.querySelector("form input [type='text']");
// var fromE3=document.querySelector("form input [type='email']");
// var fromE4=document.querySelector("for input [type='password']");
// var btn1=document.getElementById("btn")
// btn1.addEventListener('sumbit',(event) => {
//     event.preventDefault()
//     const loginFormData = new FormData(fromEl)

//     const name = loginFormData.get('astronautName')
//     console.log(name)
// })

var loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var loginFormData = new FormData(loginForm);

  var name = loginFormData.get("astronautName");
  var emailData = loginFormData.get("astronautEmail");
  var passwordData=loginFormData.get('astronautPassword');
  console.log(name);
  console.log(emailData);
  console.log(passwordData);
 

});
