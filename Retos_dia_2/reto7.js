// Reto 7
// Realizar las siguientes tareas:

// 1. Crear un objeto literal llamado direccion con los campos calle, numero, piso y puerta.
let direccion = { "calle": "Ave Maria", "numero": 5, "piso": "5", "Puerta": "Izquierda"};

// 2. Iguala a una nueva variable direccion2 la variable direccion
let direccion2 = direccion;

// 3. Utiliza spreads operator para realizar una copia de direccion en la variable direccion3.
let direccion3 = {...direccion};

// 4. Añade el campo ciudad a la variable direccion y muestra por pantalla el contenido de las 3 variables.
direccion["ciudad"] = "barcelona";
console.log(direccion);
console.log(direccion2);
console.log(direccion3);

// 5. Explica lo que ha ocurrido en un fichero de texto
console.log(`En la variable direccion3 no ha repercutido el cambio debido a que hemos realizado una 'copia' 
antes de los cambios con spread operator, en cambio direccion2 esta igualada a direccion por lo que los cambios le afectan.`)

// 6. Crea un array de nombres, iguala a la variable nombres2 la variable nombres
let nombres = ["Clara", "Clera","Cloro","Claro"];
let nombres2 = nombres;

// 7. Utiliza el spreads operator para copiar la variable nombres en la variable nombres3
let nombres3 = [...nombres];

// 8. Añade un nuevo nombre a la variable nombres, muestra las 3 variables y explica que ocurre en un
// fichero de texto.
nombres.push("Clero");
console.log(nombres);
console.log(nombres2);
console.log(nombres3);
console.log(`El array nombres3 no sufred cambios porque hemos realizado una copia con spreads operator de nombres antes
de añadir un nuevolemento al array`);

// 9. Añade un nuevo campo pais a direccion3 y concaténalo con direccion1 usando spreads operator
direccion3["pais"] = "España";
direccion = {...direccion, ...direccion3};
console.log(direccion);

// 10. Concatena usando spreads operator los arrays nombres y nombres3
nombres = [...nombres, ...nombres3];
console.log(nombres);