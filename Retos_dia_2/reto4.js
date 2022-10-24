// Reto 4

// Crea una variable de tipo set e inserta los siguientes valores: 1, ”1”, “Saludo”, [1,2,3,4], 1
let miSet = new Set();
miSet.add(1);
miSet.add("1");
miSet.add("Saludo");
miSet.add([1,2, 3, 4]);
miSet.add(1);

// 1. Muestra por consola el contenido del set.
console.log(miSet);

// 2. Muestra por consola el tamaño del set.
console.log(miSet.size);

// 3. Muestra por consola si existe el valor 2 en el set.
console.log(miSet.has(2));

// 4. Elimina del conjunto el elemento “1”.
console.log(miSet);
miSet.delete("1");
console.log(miSet);
