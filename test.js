// let numero = 5;

// numero = numero+1;esto es lo mismo a poner "nombre de variable++"
// numero--;
// document.write(numero);


//condicionales (para ver si se realiza una accion o la otra)

// let numero = 1;
// let nombre = 'damian';
// let verdadero = true;


// if(!verdadero){                                               //accion verdadera, entre parentesis se evalua si la codicion se cumple o no
//     document.write('verdadero');                                                        //en caso de que se cumpla se ejecuta la accion
// }else{                                                      //accion falsa, que en caso de no cumplirse la condicion, ejecuta esto.
//     document.write('falso');
// }

//se usa == para comparacion de iguales y && para decir "y"
// ambas condiciones tienen que ser verdaderas, sino usara la accion falsa. Salvo que usemos || ("o"), que hace que una 
//al menos se cumpla para realizar la accion verdadera.
// con ! le preguntamos si la condicional es lo contrario. 

//array, son variables que contienen diferentes datos

// let arreglo = [1, 5, 10, 'Damian', true];

// document.write(arreglo[3]); // para mostrar cada indice , se selecciona entre corchetes el numero de posicion.


// for = ciclo, dentro de los parentesis se pone la condicion que se va a repetir y hasta donde . Entre las llaves la accion por
//cada ciclo.

// for(let i=0;i<5;i++){
//     document.write(arreglo[i]);
// }

//(primero: se coloca donde se comienza; segundo:hasta donde se va a repetir;tercero: el incrementador, para que recorra todos los datos)
//luego entre corchetes en la accion, podemos poner directamente el nombre de la variable, ya que es lo que lo va a recorrer.

//while 
//es muy parecido al "for" pero con otra sintaxis, y debemos antes declarar la variable.
// let i = 0

// while(i<10){
//     document.write(i);
//     i = i+2;
// }

//switch
//evalua la variable, es como una condicional. Recordar el break para que termine el proceso.
// let hora = 10;

// switch(hora){
//     case 10:
//         document.write('Buenos dias!');
//         break;
//     case 15:
//         document.write('Buenas tardes!')    
//         break;
// }

//funciones, sirven para repetir acciones .

// function suma(num1, num2){
//     return document.write(num1 + num2);
// }

// suma(10, 63);

