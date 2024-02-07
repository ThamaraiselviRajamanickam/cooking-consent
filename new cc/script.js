const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const btn1=document.getElementById("model1");
const btn2=document.getElementById("model2");
const modelBtn=document.getElementById("modal-choice-btns")

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
 const consentFormData=new FormData(consentForm)
 var nameData=consentFormData.get('fullName')
 





    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="imgs/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${nameData}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="imgs/pirate.gif">
        </div>
    ` 
    modalCloseBtn.disabled=false; 
    }, 3000)
  
     
    
}) 

btn1.addEventListener('mouseenter',function(){
    modelBtn.classList.toggle('reverse')
 })