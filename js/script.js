'use strict';

let precios = [];

class productoA{
    constructor(codigo,nombre,precio){
        this.codigo =codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

//funcion para validar
function validatefields() {

    if (document.getElementById('codigo').value == "") {
        alert('Debe ingresar el codigo del producto');
        return false;
    }

    if (document.getElementById('nombre').value == "") {
        alert('Debe ingresar nombre');
        return false;
    }

    if (document.getElementById('precio').value == "") {
        alert('Debe ingresar el precio');
        return false;
    }
    
}

function addRecord() {

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    
    precios.push( new productoA(codigo,nombre,precio));
}

function showData() {

    let rows = "";

    for (let index = 0; index < precios.length; index++) {
        
        rows += '<tr>'
        rows += '<td>' + precios[index].codigo + '</td>'
        rows += '<td>' + precios[index].nombre + '</td>'
        rows += '<td>' + precios[index].precio + '</td>'
        rows += '</tr>'
    }
        document.getElementById('listado').innerHTML = rows;
}

function addData() {

    //validar datos
    if (validatefields() == false) {
        return;
    }

    addRecord();

    //agregar datos

    showData();
    
    //mostrar arreglo
  

    //limpiar controles

}