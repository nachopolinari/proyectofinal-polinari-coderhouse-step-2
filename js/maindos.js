// Definimos nuestra clase modelo de producto

class Prendas {
    constructor(id, nombre, color, marca, tela, precio, img) {
        this.id = id
        this.nombre = nombre
        this.color = color
        this.marca = marca
        this.tela = tela
        this.precio = precio
        this.img = img
    }
}
// Generamos nuestros productos

// en la carpeta data estan todos los productos pero no llegue a trabajar con todos
// remeras
const remera001 = new Prendas('001', 'Remera', 'amarilla', 'Lacoste', 'de algodon', '2000', "./multimedia/remeras/remera-amarillo.jpeg");
const remera002 = new Prendas('002', 'Remera', 'azul', 'Lacoste', 'de algodon', '2500', "./multimedia/remeras/remera-azul.jpeg");
const remera003 = new Prendas('003', 'Remera', 'blanca', 'Lacoste', 'de algodon', '3000', "./multimedia/remeras/remera-blanco.jpeg");

// Creamos un array con todos nuestros productos dentro

const productos = [remera001, remera002, remera003]

let carrito = []

// FUNCIONES 

const cardContainer = document.querySelector('#cardContainer')
const sectionCarrito = document.querySelector('.sectionCarrito')


productos.forEach((Prendas) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    
        <img src="${Prendas.img}" alt="${Prendas.nombre}" class="card-img">
        <div class="container">
            <h4 class="prodName"><b>${Prendas.nombre} ${Prendas.tela}</b></h4>
            <p class="prodColor">Color: ${Prendas.color}</p>        
            <p class="prodMarca ">Marca:${Prendas.marca}</p>
            <p clas="prodPrice"> $${Prendas.precio}</p> <!-*precio*->
            
            <button class="buttonCTA" id="mostrarToast" data-id="${Prendas.id}">Comprar</button>
        </div>
    `
    cardContainer.append(card)
})

// EVENTLISTENER 



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


    const renderizarCarrito = () => {
        sectionCarrito.innerHTML = ''
        carrito.forEach((Prendas) => {
            const prendaRenderizada = document.createElement('div')
            prendaRenderizada.className = 'prendaRenderizada'
            prendaRenderizada.innerHTML = `
        <h4 class="prodName"><b>${Prendas.nombre} ${Prendas.tela}</b></h4>
            <p class="prodColor">Color: ${Prendas.color}</p>        
            <p class="prodMarca ">Marca:${Prendas.marca}</p>
            <p clas="prodPrice"> $${Prendas.precio}</p>
        `
            sectionCarrito.append(prendaRenderizada)
        })
    }

    renderizarCarrito()
    console.log(carrito);

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
}

// EVENTLISTENER 
const seleccionarComprar = document.querySelectorAll('.buttonCTA')
seleccionarComprar.forEach((botonComprar) => {
    botonComprar.addEventListener('click', agregarProducto)
})


