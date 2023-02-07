// Capturo los elementos que necesito para mi JS
let productosDiv = document.getElementById("productosDiv")
let verCatalogobtn = document.getElementById("verCatalogo")
let ocultarCatalogobtn = document.getElementById("ocultarCatalogo")
let btnDark = document.getElementById("btnDark")
let inputBuscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")


// Funciones

function verCatalogo(array){
    
    // reseteo
    productosDiv.innerHTML = ""
    
    for(let producto of array){
    //código para imprimir el array
        //creamos un div padre de la card
        let nuevoProductodiv = document.createElement("div")
        nuevoProductodiv.className = "col-12 col-md-6 col-lg-4 my-3"
        nuevoProductodiv.innerHTML = `
        <div id="${producto.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;"src="img/${producto.imagen}" alt="${producto.nombreProducto}">
            <div class="card-body">
                <h4 class="card-title">${producto.nombreProducto}</h4>
                <p class="">Precio: ${producto.precio}</p>
                <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Comprar</button>
            </div>
        </div> 
        `        
        productosDiv.appendChild(nuevoProductodiv)
    }
}


function agregarProducto(array){
    let nombreProducto = document.getElementById("productoInput")  
    let precioProducto = document.getElementById("precioInput")
    
    // Construyo el nuevo producto en base a los parámetros ingresados por el usuario
    const nuevoProducto = new Producto (array.length+1, nombreProducto.value, Number(precioProducto.value), "nuevoprod.jpg")
    
    // Agrego el nuevo producto al array de productos
    array.push(nuevoProducto)

    // Cargo el array en el Storage 
    localStorage.setItem("Productos", JSON.stringify(array))

    let formAgregarProducto = document.getElementById("formAgregarProducto")
    formAgregarProducto.reset()
}

function buscarProd(buscado, array){
    let busqueda = array.filter(
        (prod) => prod.nombreProducto.toLowerCase().includes(buscado.toLowerCase()))
    
    if (busqueda.length == 0){
        coincidencia.innerHTML = `<h3>No tenemos ${buscado} en nuestro stock de productos</h3>`
        verCatalogo(busqueda)
    } else {
        coincidencia.innerHTML = ``
        verCatalogo(busqueda)
    }
}

// Funciones para ordenar
// Por precio de mayor a menor
function precioMayorMenor(array){
    // Hago una copia del array
    let mayorMenor = [].concat(array)
    //Ordeno con método Sort
    mayorMenor.sort((a, b) => b.precio - a.precio)
    verCatalogo(mayorMenor)
}
// Por precio de menor a mayor
function precioMenorMayor(array){
    // Hago una copia del array
    let menorMayor = [].concat(array)
    //Ordeno con método Sort
    menorMayor.sort((a, b) => a.precio - b.precio)
    verCatalogo(menorMayor)
}

// Alfabéticamente
function ordenAlfa(array){
    // Hago una copia del array
    let alfabetico = [].concat(array)
    //Ordeno con método Sort
    alfabetico.sort((a, b) => {
        if (a.nombreProducto > b.nombreProducto) {
        return 1
        }
        if (a.nombreProducto < b.nombreProducto) {
        return -1
        }
        // a es igual b
        return 0
    })
    verCatalogo(alfabetico)
}

// Eventos

guardarProductoBtn.addEventListener("click", ()=>{
    agregarProducto(listaProductos)
    verCatalogo(listaProductos)
    
})

verCatalogobtn.onclick = ()=> {
    verCatalogo(listaProductos)
}

ocultarCatalogobtn.onclick = ()=>{
    productosDiv.innerHTML = `<h3> Haga click en Ver Catálogo para consultar nuestros productos<h3>`
}

// Evento Buscador 
inputBuscador.addEventListener("input", ()=> {
    buscarProd(inputBuscador.value, listaProductos)  
})

// Eventos ordenar productos

selectOrden.addEventListener("change", ()=>{
    if(selectOrden.value == "1"){
        precioMayorMenor(listaProductos)
    }else if (selectOrden.value == "2"){
        precioMenorMayor(listaProductos)
    }else if(selectOrden.value == "3"){
        ordenAlfa(listaProductos)
    }
})


