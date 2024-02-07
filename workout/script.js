// console.log("what is the capital of india?");
// setTimeout(function(){
//     console.log("Answer is:" + "New Delhi");

// },3000)

// setTimeout(function(){
//     console.log("Ready for  Next Question");
// },4000)

var container = document.getElementsByClassName("main-container");
var btnRef = document.getElementById("btn-ref");
var loginData = document.getElementById("login");
var textControl=document.getElementById("modelText")

setTimeout(function () {
  container[0].style.display = "block";
}, 1500);

btnRef.addEventListener("click", function () {
  container[0].style.display = "none";
});



loginData.addEventListener("sumbit", function (event) {
     event.preventDefault()
     textControl.innerHTML = `<div class="modal-inner-loading">
     <img src="na.png" class="loading">
     <p id="uploadText">
         Uploading your data to the dark web...
     </p>
 </div>`
    
});




//  function sumbitBtn(){
    
//  }