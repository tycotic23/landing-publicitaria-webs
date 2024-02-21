/* para cerrar los proyectos al clickear la cruz */
let proyectos=document.querySelectorAll(".proyecto-vista");
let cerrarProyectos=document.querySelectorAll(".proyecto__cerrar");
let body=document.querySelector("body");
cerrarProyectos.forEach((boton,index)=>{
    boton.addEventListener('click',()=>{
        proyectos[index].classList.add('ocultar-proyecto');
        body.classList.remove('hidden-body');
    })
});

/* para ampliar los proyectos al tocar el boton ampliar */
/* importante: para que esto funcione los proyectos deben estar en el mismo orden, tanto los que son portadas como
los que tienen la info completa */
let ampliarProyectos=document.querySelectorAll('.ampliar-proyecto');

ampliarProyectos.forEach((boton,index)=>{
    boton.addEventListener('click',()=>{
        proyectos[index].classList.remove('ocultar-proyecto');
        body.classList.add('hidden-body');
    })
});

