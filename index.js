let menuButton=document.getElementById("menu");
let menuDiv=document.querySelector(".visible-nav");

menuButton.addEventListener('click',()=>{
    menuDiv.classList.toggle('nav-hidden');
});

menuDiv.addEventListener('click',()=>{
    menuDiv.classList.toggle('nav-hidden');
});