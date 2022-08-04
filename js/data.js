// CLASE

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
// remeras
const remera001 = new Prendas('001', 'Remera', 'amarilla', 'Lacoste', 'de algodon', '2000', "./multimedia/remeras/remera-amarillo.jpeg" );
const remera002 = new Prendas('002', 'Remera', 'azul', 'Lacoste', 'de algodon', '2500', "./multimedia/remeras/remera-azul.jpeg");
const remera003 = new Prendas('003', 'Remera', 'blanca', 'Lacoste', 'de algodon', '3000', "./multimedia/remeras/remera-blanco.jpeg");
