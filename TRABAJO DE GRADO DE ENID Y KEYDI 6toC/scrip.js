let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 8 ;

loadMoreBtn.onclink = () => {
    [...document.querySelectorAll('.box-container .box')];
    for(var i = currentItem; i < currenItem + 4; i++) {
        boxes[i].style.display = 'none'
    }

    //carrito
const carrito = document.getElementById('carrito');
const elementos1 =  document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click'. eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento (e) {
    e.preventDefault();
if(e.target.classList.contains('agregar-carrito')) {
    const elemento = e.target.parentElement.parentElement;
leerDatosElemento(elemento);
}
}


function leerDatosElemento(elemento){
    const infoElemento = {
    imagen: elemento.querySelector('img').src,
    titulo: elemento.querySelector('h3').textContent,
    precio: elemento.querySelector('.precio').textContent,
    id: elemento.querySelector ('a').getAttribute('data-id')
}
}
    
insertarCarrito(infoElemento);
}
function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML =
    <><td>
            <imagen src="${elemento.imagen}" width />100 height=150px 
        </td><td>
                ${elemento.titulo}
            </td>
            <td>
            $ {elemento.precio}
            </td>
            <td>
            <a herf="#" class="borrar" data-id="${elemento.id}" >x</a>
            </td>
            
            </>
; 
lista.appendChild(row);
}

function eliminarElemento (a) {
    e.preventDefault();
    let elemento,
    elementoId;
    
    
    if(e.target.classList.contains('borrar')){
    e.target.parentElement.parentElement. parentElement.remove();
    elemento = e.target.parentElement.parentElement;
    elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
    
    }
    
    function vaciarCarrito() {
    while(lista.firsChild) {
    lista.removeChild(lista.firstChild);
    }
    return false;
    
    }
    