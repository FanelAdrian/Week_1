let myLib = require("./libreriaVector");

/* Reto 3
Se define un vector como un array de números.
Crea un fichero llamado libreriaVector.js con las siguientes funciones:

1. crearVector(n, m):number[]. Crea y devuelve un vector de n números aleatorios que van
desde 0 hasta m.  */

console.log(myLib.crearVector(5, 5));


let v = myLib.crearVector(myLib.numeroAleatorio(10, 1),myLib.numeroAleatorio(10));
let v1 = myLib.crearVector(3,5);
let v2 = myLib.crearVector(3, 22);

let v3 = myLib.crearVector(9,11);
let v4 = myLib.crearVector(11, 20);

console.log(v2);
console.log(v1);

/* 2. sumaVector(v1, v2):number[]. Suma dos vectores v1 y v2 si y solo si tienen el mismo
numero de elementos y devuelve el vector resultado de dicha suma. */

console.log(myLib.sumaVector(v1, v2));

/* 3. productoNumeroVector(n, v): number[]. Multiplica el vector v por el numero y devuelve el
vector resultado de dicho producto. */

// console.log(myLib.productoNumeroVector(5, v2));

/* 4. restaVector(v1, v2): number[]. Resta dos vectores v1 y v2 si y solo si tienen el mismo
numero de elementos y devuelve el vector resultado de dicha resta. */

// console.log(myLib.restaVector(v1, v2));

/* 5. productoVector(v1, v2): Multiplica dos vectores v1 y v2 si y solo si tienen el mismo número
de elementos y devuelve el vector resultado de dicho producto. */

// console.log(myLib.productoVector(v2, v1));

/* Crea un nuevo fichero que llame a las funciones definidas en el fichero libreríaVector.js y
prueba todas sus funciones. */
