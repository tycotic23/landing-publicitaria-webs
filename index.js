let menuButton=document.getElementById("menu");
let menuDiv=document.querySelector(".visible-nav");

menuButton.addEventListener('click',()=>{
    menuDiv.classList.toggle('nav-hidden');
});

menuDiv.addEventListener('click',()=>{
    menuDiv.classList.toggle('nav-hidden');
});

/* girar tarjetas */

let cards=document.querySelectorAll(".recuadro__item-card");
cards.forEach(card=>{
    card.addEventListener('click',()=>{
        card.classList.toggle("recuadro__item-card-flip");
    });
});

/* acordeon */
let itemsAcordeon=document.querySelectorAll(".contenedor-acordeon__item");
itemsAcordeon.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('active');
    })
});
