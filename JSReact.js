// function sumar(){
//     document.write(10)
// }
// sumar()

// las funciones de flechas nos permiten ahorrar codigo , pero siguen siendo las mismas.Con un solo parametro no hace falta los
//parentesis. En mas de uno si.
//cuando usamos "return" recordar que fuera de la funcion debemos darle un valor como constante para luego mostrarlo.
//en las funciones de flecha, se puede evitar el return y las llaves. Cuando no se usen llaves, va a retornar todo lo que 
//este del lado derecho . No esta mal usar parentesis tampoco. 

// const sumarDos = (num1, num2) => (num1 + num2)

// const resultado = sumarDos(20,30)
// document.write(resultado)

// const mensaje = nombre => ('Hola soy ' + nombre)

// const resultado2 = mensaje('Damian')
// document.write(resultado2)

//si como argumento no ponemos nada, la funcion va a mostrar el parametro declarado dentro del parentesis.

// const suma3 = (num = 3) => {
//     document.write(num + 3)
// }
// suma3(4)


//template string
// se pueden usar `` para evitar la concatenacion , usando $ dentro para llamar una logica de JS y  utilizar esos parametros.
// const numero = (num1,  num2) => (
//     ` El numero es: ${num1 + num2}`
//     )


// const resultado = numero(10,20)
// document.write(resultado)


//objetos 
//los objetos utilizar : y no el signo = 
// const mascota = {
//     nombre: 'Churri',
//     edad:1,
//     vivo:true,
//     cosas: ['peludo', 'gordito']
// }
// mascota.id = 1
// console.log(mascota)

//destructuring objects 
// nos va a servir para obtener algunas propiedades de un objeto
// const mascota = {
//     nombre: 'Churri',
//     edad:1,
//     vivo:true,
//     cosas: ['peludo', 'gordito']
// }

//se pueden guardar constantes con solo una de las propiedades del objeto para llamarlas individualmente.
// const nombreMascota = mascota.nombre

// tambien se pueden creer constantes para llamar ciertas propiedades de ese obejto de una forma mas sencilla.
// const {edad, nombre} = mascota
// console.log(nombre)


//array de objetos
// se pueden anidar objetos dentro de objetos , y luego llamarlos con la misma anidacion llamandolos con ".", para ir buscando
//las propeidades.
// const web = {
//     nombre: 'Dami',
//     links: {
//         enlace: 'www.dami.com.ar'
//     },
//     redesSociales: {
//         youtube: {
//             enlace:'youtube.com/dami',
//             nombre:'Dami channel'
//         },
//         facebook: {
//             enlace:'Dami Bass'
//         }
//     }
// }

// const enlaceYT = web.redesSociales.youtube.enlace

//para evitar tener que hacer una constante nueva con cada propiedad, se pueden destruir los objetos para ubicar y llamar
//solament los que necesitamos.
// const {enlace, nombre}  =  web.redesSociales.youtube
// console.log(enlace)
// console.log(nombre)


//fetch API
//sirve para levantar API

// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.results)
//         let arrayNombres = []
//         data.results.forEach(element => {
//             // console.log(element.name)
//             arrayNombres.push(element.name)
//         });
//         console.log(arrayNombres)
//     })
//     .catch(error => console.log(error))



//asycn await
//await va a funcionar siempre que este dentro de una funcion async
//funciona igual que fetch y then
// const obetenerPokemones = async() => {
//     try {
//         const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//         const data  = await res.json()
//         // console.log(data.results)
//         const arrayNombres = data.results.map(poke => poke.name)
//         console.log(arrayNombres)
//     }catch (error) {
//         console.log(error)
//     }
// }
// obetenerPokemones()

//map, es una funcion para lso array, ya que permite recorrer todos los datos dentro y mostrarlos. Crea un nuevo array. 

// const obetenerPokemones = async() => {
//     try {
//         const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//         const data  = await res.json()
//         // console.log(data.results)
//         const arrayNombres = data.results.map(poke => poke.name)
//         console.log(arrayNombres)
//     }catch (error) {
//         console.log(error)
//     }
// }
// obetenerPokemones()


//filter , crea un nuevo array con elementos con condicion. !== (sea distinto). sirve para filtrar objetos o  sus propiedades.

// const obetenerPokemones = async() => {
//     try {
//         const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//         const data  = await res.json()
//         // console.log(data.results)
//         const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur')
//         console.log(arrayNombres)
//     }catch (error) {
//         console.log(error)
//     }
// }
// obetenerPokemones()


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const mascotas = [
//     {nombre: 'Puchini', edad:12, raza:'perro'},
//     {nombre: 'Cachito feliz', edad:3, raza:'perro'},
//     {nombre: 'Pulga', edad:10, raza:'perro'},
//     {nombre: 'Pelusa', edad:16, raza:'gato'},
// ];

//filter lo que hace es filtrarnos mediante una condicion los datos que necesitamos. Es inmutable, es decir que no va a 
//modificar los elementos de la constante que filtramos.
//toma el elemento completo
// const numerosFiltrados = numeros.filter(x => x < 5)

// const perros = mascotas.filter(x => x.raza == 'perro')
// const gatos = mascotas.filter(x => x.edad !== 3)
// console.log(gatos);
// console.log(perros);

//map transforma los elementos de un array . una nueva copia.
//busca sobre cada elemento y realiza una accion o funcion.
//crea un nuevo array con nuevos datos , tomado de uno ya creado.


// const suma = (ns) => {
//     let acumulado = 0;
//     for (i=0; i < ns.length; i++) {
//         acumulado += ns[i];
//     }
//     return acumulado
// }


// const numeros = [1, 2, 3, 4, 5]
// const result = numeros.reduce((acc, el) => acc + el, 0)
// const multiplicados = numeros.map(x => x * 2)
// const parejas = numeros.map(x => [x, x])



// const mascotas = [
//     {nombre: 'Puchini', edad:12, tipo:'perro'},
//     {nombre: 'Cachito feliz', edad:3, tipo:'perro'},
//     {nombre: 'Pulga', edad:10, tipo:'perro'},
//     {nombre: 'Pelusa', edad:12, tipo:'gato'},
// ];
// const idexed = mascotas.reduce((acc, el) => ({
//     ...acc
// }))


// const edades = mascotas.map(x => x.edad)
// const resultado1 = suma(edades);
// console.log(resultado1 / edades.length);

//reduce 

// const reducer = (acumulador, valorActual) => nuevoAcumulador

// const reducido = [1, 2].reduce((acc, el) => acc + el, 0)


// const fn1 = (a, b) => { 
//     return a + b
// }

// const resultado = fn1(1, 2)
// console.log(resultado)


// const servicios = {
//     api: {},
//     mailer: 'soy  mailer',
//     apollo: {},
// }

// const enviarCorreo = ({mailer}) => {
//     console.log(mailer)

// }

// enviarCorreo(servicios)

//array spread operator
// los "..." lo que hace es tomar cada elemento y entregarlo como argumento.
// esto nos sirve para no tener que argumentar cada parametro, sino que ya toma todo lo que se declaro como argumento
// de los parametros de esa funcion

const arr = [1, 2, 4]

const suma = (a,b,c ) => a + b - c
const result1 = suma(...arr)
// generop una copia del array anterior, se lo asigno a una const nueva, y luego puedo sumar o llamar a mi nuevo arreglo
//sin que se modifique.
const arr2 = [...arr]
arr.push(3)
console.log(arr2 ,arr)

//object spread operator
// genera copias de un objto en otro y no borrar lo que ya teniamos
// const nos deja mutar el objeto, pero no cambiarlo ni reasignarlo.

const obj = {
    a:1, 
    b:2
}

const obj1 = {
    data: {
        ...obj
    }
}

obj1['c'] = 3

console.log(obj1)
