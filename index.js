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


/* seccion de proceso */
let heros=document.querySelectorAll(".container-hero__column");

function desactivarHeros(){
    heros.forEach(hero=>{
        hero.classList.remove('active');
    });
}

heros.forEach(hero=>(
    hero.addEventListener('click',()=>{
        /* desactivamos a los demas */
        desactivarHeros();
        /* activamos al seleccionado */
        hero.classList.add('active');
    })
));

