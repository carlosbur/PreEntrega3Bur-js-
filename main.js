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
let catalogo = document.getElementById("catalogo")
let verCatalogobtn = document.getElementById("verCatalogo")
let ocultarCatalogobtn = document.getElementById("ocultarCatalogo")

function verCatalogo(array){
    // reseteo
    catalogo.innerHTML = ""
    
    for(let producto of array){
    //código para imprimir el array
        //creamos un div padre de la card
        let nuevoProductodiv = document.createElement("div")
        nuevoProductodiv.className = "nuevoContenedor"
        nuevoProductodiv.innerHTML = `
        <div class="container text-center">
            <div id="${producto.id}" class="card" style="width: 18rem;">
                <img class="card-img-top img-fluid" style="height: 200px;"src="img/${producto.imagen}" alt="${producto.nombreProducto}">
                <div class="card-body">
                    <h4 class="card-title">${producto.nombreProducto}</h4>
                    <p class="">Precio: ${producto.precio}</p>
                    <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Comprar</button>
                </div>
            </div> 
        </div>
        `        
        catalogo.appendChild(nuevoProductodiv)
    }
}

verCatalogobtn.onclick = ()=> {
    verCatalogo(listaProductos)
}

ocultarCatalogobtn.onclick = ()=>{
    catalogo.innerHTML = ""
}