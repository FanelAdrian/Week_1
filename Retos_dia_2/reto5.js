// Reto 5

console.log(" ");
console.log("Reto 5");
console.log(" ");

// Realizar las siguientes tareas:

// 1. Hacer tres arrays de 5 elementos de tipo String
let array1 = ["Pepa","Pipo", "Pepi", "Popa", "Papa"];
let array2 = ["Mama","Mema", "Momo", "Mimo", "Mume"];
let array3 = ["Lola","Lilo", "Lele", "Lula", "Lala"];

// 2. Hacer un array de los tres arrays y llamarle matriz
let matriz = [array1, array2, array3];
console.log(matriz);

console.log(" ");

// 3. Mostrar matriz[2]
console.log(matriz[2]);

console.log(" ");

// 4. Mostrar matriz[2,4]
console.log(matriz[2][4]);

// 5. Mostrar segundo carácter del elemento matriz[2,4]

// console.log(matriz[2][4].charAt(1));
console.log(matriz[2][4][1]);

// 6. Sustituir el elemento matriz[2] por otro array de números

// delete matriz[2];
// matriz.splice(2, 0, [1,2,3,4,5]);
matriz[2] = [1, 2, 3, 4, 5];

// 7. Mostrar ese elemento
console.log(matriz[2]);

// 8. Modificar el elemento matriz[1,3] por un booleano
matriz[1][3] = true;

// 9. Mostrar ese elemento
console.log(matriz[1][3]);

// 10. Insertar al final del primer array un nuevo string
matriz[0].push("Hola soy Pepa");

// 11. Eliminar el primer elemento del primer array
matriz[0].shift();

// 12. Eliminar el ultimo elemento de un array
matriz[2].pop();

// 13. Ordenar alfabeticamente el array 2
console.log(matriz[1].sort());
