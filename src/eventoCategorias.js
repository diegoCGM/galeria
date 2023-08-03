

import datafotos from  './datos/fotos';
import { cargarImagen } from './galeria/cargarImagen';

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

//const conimagen =document.querySelector('.galeria__carousel-slides'); forma 1

contenedorCategorias.addEventListener('click',(e)=>{
    console.log(e.target);
e.preventDefault // evita el comportamineto de recargar la pagina 

 if(e.target.closest('a')){

    galeria.classList.add('galeria--active');
    const categoriaActiva = e.target.closest('a').dataset.categorias; // importante poner siempre un dataset por que ayuda a poder manipular bien los elementos 
    

       galeria.dataset.categorias = categoriaActiva;
   

    const fotos = datafotos.fotos[categoriaActiva];
    document.body.style.overflow = 'hidden';

     const {id,nombre,ruta,descripcion} = fotos[1];
     console.log(fotos,"hjbhssvakfjcvdskujvcukvkj");

    cargarImagen(id,nombre,ruta,descripcion);
    console.log(fotos,"desj");
    const carrusel = galeria.querySelector('.galeria__carousel-slides');
   
    carrusel.innerHTML='';

    fotos.forEach(imagenes => {

        //const enlace = document.createElement('a'); forma 1
       // enlace.classList.add('galeria__carousel-slide'); formma 1

//       const  slider = `
//       <img class="galeria__carousel-image" src="${imagenes.ruta}" alt="" />
//   `; forma 1

    //  enlace.innerHTML = slider; forma 1

    const slider = `<a href="#" class="galeria__carousel-slide">
    <img class="galeria__carousel-image" src="${imagenes.ruta}" alt=""  data-id='${imagenes.id}' />
</a>   `



   galeria.querySelector('.galeria__carousel-slides').innerHTML +=slider; 


   //conimagen.append(enlace); forma 1 


    });

    galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');

 }



});