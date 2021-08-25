// console.log('Hello World!');

// Variables

const lastName = 'Borgognoni';
let name = 'Dami'; // String literal
let age = 33; // Number literal
let estaAprobado  = true; // Boolean literal ... se usa para la logica
let firstName = undefined; // esto es raro  pero puede darse que tenga que estar indefinido
let selectedColor = null; // se usa para limpiar el valor de una variable, en caso de que luego exista porque se selecciono, se cambia el valor.

//tratamos a la variable como objeto, con propiedades.
// let person = {
//     lastName: 'Borgognoni',
//     isAproved: true
// };
//

//cambios en las variables 
// person.lastName = 'Frias';
// person['lastName'] = 'Cardoso'
//



//array
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green'
// selectedColors[3] = true


// functions
// se les asigna un parametro que es una variable solo util dentro de esa funcion, y luego se le da un argumento cuando llamamos
// la funcion , que sera el valor del parametro
// function man(body, lastName) {
    
// }
// man('skinny', 'Borgognoni');
// man('fat');


// function square(number) {
//     return number * number;
// }

// console.log(square(2));


// var nombre = 'Damian';
// var altura = 189;
// var concatenacion = nombre + ' ' + altura;



//condiciones
// if(altura >= 190){
//     datos.innerHTML += `<h1> Eres alto</h1>`;
// }else {
//     datos.innerHTML += `<h1> Eres bajo</h1>`;
// }

//bucles
// for(var i = 2000; i <=2020; i++){
//     //bloque de instrucciones
//     datos.innerHTML += '<h2>Estamos en el año: </h2>' +i;
// }

//funciones
// function MuestraMiNombre(nombre, altura) {
//     var datos = document.getElementById('datos');
//     datos.innerHTML = `
//     <h1>Hola como va</h1>
//     <h2>Mi nombre es ${nombre}</h2>
//     <h3>Mi altura es ${altura} cm</h3>
// `;
// }

// function MuestraMiNombre(nombre, altura) {
//     var misDatos = `
//         <h1>Hola como va</h1>
//         <h2>Mi nombre es ${nombre}</h2>
//         <h3>Mi altura es ${altura} cm</h3>   
//     `;

//     return misDatos;
// }

// function imprimir (){
//     var datos = document.getElementById('datos');
//     datos.innerHTML  = MuestraMiNombre('Damian Borgognoni', 174);
// }

// imprimir();

// //arrays
// var nombres = ['Victor', 'Antonio', 'Joaquin'];

// for(i = 0; i < nombres.length; i++){
//     document.write(nombres[i]  + '</br>');
// }
