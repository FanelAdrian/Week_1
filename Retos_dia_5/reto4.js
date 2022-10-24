let myLib = require("./reto_3/libreriaVector");

/* Reto 4
• Redefine la función sumaVector para implementarla utilizando el método .forEach
suponiendo que tanto v1 como v2 tienen el mismo número de elementos. */

let v1 = myLib.crearVector(2, 5);
let v2 = myLib.crearVector(8, 22);
let v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/* const sumaVector = (v1, v2) => {
    let v3 = [];
    if (v1.length === v2.length) {
        v2.forEach((numero, i) => {
            v3.push(v1[i] + numero);
        });
    }
    return v3;
} */
/* • Redefine la función sumaVector implementándola utilizando el método .map
suponiendo que tanto v1 como v2 tienen el mismo número de elementos. */

const sumaVector = (v1, v2) => {
    let v3 = v1.map((num, i) => num + v2[i]);
    return v3;
}

console.log(v1);
console.log(v2);
    console.log(sumaVector(v1, v2));
    
/* • Implementa la función filtrarPares(v) que devuelva el vector resultante de eliminar los
número impares almacenados en v, utilizando el método .filter. */

// La funcion que se le indica a .filter su resultado tiene que ser true o false (una condicion) y 
//  devolvera un array con los elementos que cumplan esa función.
/* let filtrarPares = (v) => {
   let pares = v.filter(num => num % 2 === 0);
   return pares;
}
console.log(filtrarPares(v));

 */
/* • Implementa la función sumatorio(v) que devuelve la suma de los elementos del vector v
usando el método .reduce. */
 
const sumatorio = (v) => {
    let sumatodo = v.reduce((acumulator, num) => acumulator + num);
    return sumatodo;
} 
console.log(sumatorio(v));
