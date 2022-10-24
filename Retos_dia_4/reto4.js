/* Reto 4
• Calcular el factorial de un numero dado, primero utilizando la sentencia for y luego con
while.
*/
/* let n = 5;
let resultado = 1;
for (i = 1; i <= n; i++) {
  resultado = resultado * i;
  console.log(resultado);
}
console.log(resultado);
 */
/* let n = 5;
let resultado = 1;
let i = 1;

while ( i <= n) {
    resultado = resultado * i;
    i++;   
}
console.log(resultado); */

/* • Dado un array de números, buscar si existe algún numero de ese array que sea múltiplo
de 2 utilizando la sentencia while. */

/* let numeros = [1, 2, 3, , 4, 5, 6, 7, 8, 9, 10];
let i = 0;

while ((i < numeros.length) && (numeros[i] % 2 != 0)) {
     i++;
    }
let Par = ((i < numeros.length) && (numeros[i] % 2 === 0));
console.log(Par); */

/* • Realizar la suma de los 100 primeros números. Utilizando el bucle que mejor se adapte al
problema. */

/* let resultado = 0;

for ( let i = 0; i < 100; i++) {
    resultado += i;
    console.log(resultado);
} */
/* • Dado un array de nombres mostrar el índice de la primera ocurrencia del nombre “Pepe”.
Utilizar el bucle que mejor se adapte al problema. */
 let nombres = ["Clara", "Boba", "Pepe", "Casimiro", "Pepe"];
let pepe = undefined; 
let i = 0;
while ( i < nombres.length && pepe === undefined){
    if (nombres[i] === "Pepe") {
        pepe = i;
    }
    i++;
} 
console.log(pepe);
/* 
// • Generar dos arrays de 100 números aleatorios entre 0 y 20.
/* let numero1 = [];
let numero2 = [];
for (let i = 1; i <= 100; i++) {
    numero1.push(Math.floor(Math.random() * 20));
    numero2.push(Math.floor(Math.random() * 20));
} */
/* console.log(numero2); */
// • Realizar la suma de los dos arrays anteriores.
/* let numeroSuma = 0;
let numero3 = [...numero1, ...numero2];
for (let i = 0; i < numero3.length; i++) {
    numeroSuma += numero3[i];
}
console.log(numeroSuma); */
