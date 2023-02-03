// Defino mi clase de productos
class Producto{
    constructor (id, nombreProducto, precio, imagen) {
        this.id = id,
        this.nombreProducto = nombreProducto,
        this.precio = precio
        this.imagen = imagen
    }
}

// Instancio los primeros objetos de Producto
const karategi = new Producto(1, "Karategi", 8400, "karategi.jpg")
const guantines = new Producto(2, "Guantines", 3400, "guantines.jpg")
const empeinera = new Producto(3, "Empeinera", 4400, "empeinera.jpg")
const tobillera = new Producto(4, "Tobillera", 6400, "tobillera.jpg")


// Creo el array de Productos y trabajo con el localStorage
let listaProductos = []
if(localStorage.getItem("Productos")){
    listaProductos = JSON.parse(localStorage.getItem("Productos"))
}else{
    listaProductos.push(karategi, guantines, empeinera, tobillera)
    localStorage.setItem("Productos", JSON.stringify(listaProductos))
}



// Capturo los elementos que necesito para mi JS
let productosDiv = document.getElementById("productosDiv")
let verCatalogobtn = document.getElementById("verCatalogo")
let ocultarCatalogobtn = document.getElementById("ocultarCatalogo")
let btnDark = document.getElementById("btnDark")
let inputBuscador = document.getElementById("buscador")


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
})

// Dark Mode
if(localStorage.getItem("modoOscuro")){
    if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
        btnDark.innerText = `Light`
        btnDark.className = `btn btn-light`
        document.body.classList.add("darkMode")
    }
}else{
    localStorage.setItem("modoOscuro", false)
}


btnDark.addEventListener("click", ()=> {
    document.body.classList.toggle("darkMode")

    if(JSON.parse(localStorage.getItem("modoOscuro")) == false){
        btnDark.innerText = `Light`
        btnDark.className = `btn btn-light`
        localStorage.setItem("modoOscuro", true)
    }else{
        btnDark.innerText = `Dark`
        btnDark.className = `btn btn-dark`
        localStorage.setItem("modoOscuro", false)
    }

})