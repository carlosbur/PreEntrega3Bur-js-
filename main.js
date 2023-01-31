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


// Creo el array de Productos y pusheo los objetos ya existentes
const listaProductos = []
listaProductos.push(karategi, guantines, empeinera, tobillera)


// Capturo los elementos que necesito para mi JS
let productosDiv = document.getElementById("productosDiv")
let verCatalogobtn = document.getElementById("verCatalogo")
let ocultarCatalogobtn = document.getElementById("ocultarCatalogo")

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

verCatalogobtn.onclick = ()=> {
    verCatalogo(listaProductos)
}

ocultarCatalogobtn.onclick = ()=>{
    productosDiv.innerHTML = `<h3> Haga click en Ver Catálogo para consultar nuestros productos<h3>`
}

let inputBuscador = document.getElementById("buscador")
inputBuscador.addEventListener("input", ()=> {
console.log(inputBuscador.value)  
})