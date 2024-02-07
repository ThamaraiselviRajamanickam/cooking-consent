var ans=document.getElementsByClassName("answer");
var qus=document.getElementsByClassName("question");
var changequs=document.getElementsByClassName("qus-change");
var btnRef=document.getElementById("btn");
function ansWork(){
    ans[0].style.display="block";
    qus[0].style.backgroundColor="#68e1fd";
    changequs[0].style.color="#1434A4";
    btnRef.style.display="none";
}