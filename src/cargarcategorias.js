
import datacategorias from './datos/categorias';



// desestructuramineto de un objeto con sus areglos o valores  basicamente agarramos uno por uno del arreglo de objetos 


const {categorias} =  datacategorias;


const  contenedoCategorias = document.getElementById('categorias');


categorias.forEach((categorias)=>{


const nuevaCategoria = document.createElement('a');
const plantilla =`
                  <img class="categoria__img" src="${categorias.imagenPortada}" alt="" />
                    <div class="categoria__datos">
                      <p class="categoria__nombre">${categorias.nombre}</p>
                        <p class="categoria__numero-fotos">${categorias.numeroFotos}</p>
                         </div>`;



nuevaCategoria.innerHTML=plantilla;

nuevaCategoria.classList.add('categoria'); // agregamos la clase a el enlace a 
nuevaCategoria.href = '#' //agrefgamos el atributo href a el enlace 
nuevaCategoria.dataset.categorias = categorias.id; //agregamos el atributto data a cada enlace con su respectivo id 





console.log(nuevaCategoria);



contenedoCategorias.append(nuevaCategoria);  //metiendo nuestras categoria al contendor principal y mostrarlas 


});
