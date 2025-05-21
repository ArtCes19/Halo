const nav= document.querySelector("#nav");
const abir= document.querySelector("#abrir");

function funAbrir(){
    nav.classList.toggle("mostrar");
}
const scrollButton=document.getElementById('ancla');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};