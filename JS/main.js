// Capturo los elementos que necesito para mi JS
let productosDiv = document.getElementById("productosDiv")
let verCatalogobtn = document.getElementById("verCatalogo")
let ocultarCatalogobtn = document.getElementById("ocultarCatalogo")
let btnDark = document.getElementById("btnDark")
let inputBuscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")


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

inputBuscador.addEventListener("input", ()=> {
    console.log(inputBuscador.value)  
    buscarProd(inputBuscador.value, listaProductos)  
})
