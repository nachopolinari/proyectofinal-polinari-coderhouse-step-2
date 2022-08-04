// ARRAY con todos nuestros productos dentro

const productos = [remera001, remera002, remera003]

// ARRAY vacio carrito

let carrito = []

// SELECTORES
const cardContainer = document.querySelector('#cardContainer')
const sectionCarrito = document.querySelector('.sectionCarrito')
const botonVaciar = document.getElementById('btnVaciar')
const precioTotal = document.getElementById('precioTotal')
const contadorCarrito = document.getElementById('cart-quantity')


// DOM
productos.forEach((remera) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    
        <img src="${remera.img}" alt="${remera.nombre}" class="card-img">
        <div class="container">
            <h4 class="prodName"><b>${remera.nombre} ${remera.tela}</b></h4>
            <p class="prodColor">Color: ${remera.color}</p>        
            <p class="prodMarca ">Marca:${remera.marca}</p>
            <p clas="prodPrice"> $${remera.precio}</p> <!-*precio*->
            
            <button class="buttonCTA" id="mostrarToast" data-id="${remera.id}">Comprar</button>
        </div>
    `
    cardContainer.append(card)
})

// FUNCIONES

const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const prendaAgregada = productos.find((Prendas) => Prendas.id == productoElegido)

    if (carrito.length < 5) {
        carrito.push(prendaAgregada)
    } else {
        Toastify({
            text: "Solo puedes comprar hasta 5 productos por vez.",
            className: "info",
            style: {
                background: "linear-gradient(to center, #00b09b, #96c93d)",
            }
            // disparo toast
        }).showToast();
    }

    // guardar en local storage
    localStorage.setItem('carrito', JSON.stringify(carrito))

    // disparo funcion
    renderizarCarrito()
    console.log(carrito); /*borrar antes de entregar*/

    // toastify al sumar producto al carrito
    if (carrito.length < 5) {
        Toastify({
            text: "Sumaste la prenda al carrito",
            className: "info",
            style: {
                background: "linear-gradient(to center, #00b09b, #96c93d)",
            }
            // disparo toast
        }).showToast();
    }

    // contador de productos en el carrito
    contadorCarrito.innerText = carrito.length
}


const renderizarCarrito = () => {
    sectionCarrito.innerHTML = ''
    carrito.forEach((remera) => {
        const prendaRenderizada = document.createElement('div')
        prendaRenderizada.className = 'prendaRenderizada'
        prendaRenderizada.innerHTML = `
    <h4 class="prodName"><b>${remera.nombre} ${remera.tela}</b></h4>
        <p class="prodColor">Color: ${remera.color}</p>        
        <p class="prodMarca ">Marca:${remera.marca}</p>
        <p class="prodPrice"> $${remera.precio}</p>
        <buttom class="quitarPrenda">QUITAR</buttom>
    `
        sectionCarrito.append(prendaRenderizada)
    })


// Suma total

    // precioTotal.innerText = carrito.reduce(function(acc,Prendas) {return Prendas.precio +acc;})
    precioTotal.innerText = carrito.map(Prendas => Prendas.precio).reduce((prev, curr) => prev + curr, 0)
}



// EVENTLISTENER 

// boton comprar
const seleccionarComprar = document.querySelectorAll('.buttonCTA')
seleccionarComprar.forEach((botonComprar) => {
    botonComprar.addEventListener('click', agregarProducto)
    
}) 



// Vaciar Carrito
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    renderizarCarrito()
})


// BOTON QUITAR DEL CARRITO

// const eliminarDelCarrito = (e) => {
//     const prodId = e.target.getAttribute('data-id')
//     const item = carrito.find((Prendas) =>Prendas.id==prodId)
//     const indice = carrito.indexOf(item)

//     carrito.splice(indice,1)

//     renderizarCarrito()
// }

// const quitarPrenda = document.querySelectorAll('.quitarPrenda')
// quitarPrenda.forEach((botonQuitar) => {
//     botonQuitar.addEventListener('click', eliminarDelCarrito)})