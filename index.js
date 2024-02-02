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

/* portafolio */

let portafolioNext=document.getElementById("arrows__next");
let portafolioPrev=document.getElementById("arrows__prev");
let portafolioCarrousel=document.querySelector(".full-carrousel");
let portafolioLista=document.querySelector(".full-carrousel__lista");
let portafolioMiniaturas=document.querySelector(".full-carrousel__thumbnail");

portafolioNext.onclick=function(){
    showSLider('next');
}

portafolioPrev.onclick=function(){
    showSLider('prev');
}

let timmingPortafolio=2000;
let runTimeOutPortafolio;

function showSLider(type){
    let itemSlider = document.querySelectorAll('.full-carrousel__item');
    let itemThumbnail=document.querySelectorAll('.full-carrousel__thumbnail__item');

    if(type=='next'){
        portafolioLista.appendChild(itemSlider[0]);
        portafolioMiniaturas.appendChild(itemThumbnail[0]);
        
    }else{
        let positionLastItem=itemSlider.length-1;
        portafolioLista.prepend(itemSlider[positionLastItem]);
        portafolioMiniaturas.prepend(itemThumbnail[positionLastItem]);
    }
    portafolioCarrousel.classList.add(type);
    clearTimeout(runTimeOutPortafolio);
    runTimeOutPortafolio=setTimeout(()=>{
        portafolioCarrousel.classList.remove(type);
    },timmingPortafolio);
}  

/* acordeon */
let itemsAcordeon=document.querySelectorAll(".contenedor-acordeon__item");
itemsAcordeon.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('active');
    })
});
