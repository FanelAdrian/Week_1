// Reto 3

// Tomando el Map anterior realizar las siguientes tareas:
let miMap = new Map();

miMap.set("numero", 1);
miMap.set(1, 1);
miMap.set("string", "Mi string");
miMap.set(2, "Mi string");
miMap.set("boolean", true);
miMap.set(3, true);
miMap.set(4, [1, 2, 3, 4]);
miMap.set(4, ["Juan", "Pepe", "Ana, Maria"]);
// 1. Muestra por consola el contenido del map.
console.log(miMap);

// 2. Muestra por consola el tamaño del map.
console.log(miMap.size);

// 3. Muestra por consola el valor de la clave 3
console.log(miMap.get(3));

// 4. Elimina la tupla cuya clave es “string” y muestra de nuevo el map por consola.
miMap.delete("string");
console.log(miMap);