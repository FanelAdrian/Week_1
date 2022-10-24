// Reto 6
// Realizar las siguientes tareas:

// 1. Crear un objeto literal como en el ejemplo 3.
let persona = { "nombre": "Pepe",
                "edad": "37",
                "esVaron": true,
                "aficiones": ["nadar", "dibujar", "leer"],
                "DNI": {"numero": 44669911,
                        "fechadeExpedicion":"05 de Marzo de 2025"}};
// 2. Mostrar su nombre.
console.log(persona.nombre);

// 3. Mostrar todas sus aficiones.
console.log(persona.aficiones);

// 4. Mostrar solo su segunda afición.
console.log(persona.aficiones[1]);

// 5. Mostrar todos los datos de su dni.
console.log(persona.DNI);

// 6. Mostrar solo la fecha de expedición de su dni.
console.log(persona.DNI.fechadeExpedicion);

// 7. Modificar la fecha de expedición de su dni.
persona.DNI.fechadeExpedicion.replace("07 de Julio 2020");
console.log(persona.DNI.fechadeExpedicion);

// 8. Eliminar la segunda afición.

// delete persona.aficiones[1];
persona.aficiones.splice(1, 1);
console.log(persona.aficiones);

// 9. Agregar una nueva afición.
persona.aficiones.push("Pescar champiñones");
console.log(persona.aficiones);



