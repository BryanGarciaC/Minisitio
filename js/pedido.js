//Variales globales
const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos()
{

    //LLamado al evento que cuando se presionar Comprar es enviado al carrito 
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    //llamado de evento de eliminacion de producto  del carrito 
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Evento de eliminacion de productos del carrito 
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //Al cargar documento se muestra lo almacenado en localStorge
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    //Enviar pedido al la pagina de comprar
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}