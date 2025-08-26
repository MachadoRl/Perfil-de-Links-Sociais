var btnInstagram = document.getElementById("btn-instagram");
var btnYoutube = document.getElementById("btn-youtube");
var modal = document.getElementById("modal");

btnInstagram.addEventListener("click", function(){
    modal.classList.toggle("opened");
}) 

btnYoutube.addEventListener("click", function(){
    modal.classList.toggle("opened");
}) 

modal.addEventListener("click", function() {
    modal.classList.toggle("opened");
})
