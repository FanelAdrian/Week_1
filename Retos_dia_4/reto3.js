/* Reto 3

*/
let persona1 = {
                "nombre" : "Alberto",
                "apellido" : "Gonzalez",
                "anyoNacimiento" : 1997,
                "aficiones": ["comer", "cenar","desayunar"],
                "dni": { "anyoExpedicion" : 2025, "lugarNacimento": "España"},
                "colorPelo" : "pelirrojo"
                };
let persona2 = {
                "nombre" : "Pepe",
                "apellido" : "Martinez",
                "anyoNacimiento" : 2002,
                "aficiones": ["dormir", "siesta", "descansar"],
                "dni": { "anyoExpedicion" : 2028, "lugarNacimento": "Mexico"},
                "colorPelo" : "negro"
                };
let persona3 = {
                "nombre" : "Adriano",
                "apellido" : "Ristreto",
                "anyoNacimiento" : 1985,
                "aficiones": ["tomar cafe","hacer pizza","comer pasta"],
                "dni": { "anyoExpedicion" : 2022, "lugarNacimento": "Italia"},
                "colorPelo" : "castaño"
                };
let persona4 = { 
                "nombre" : "Sergei",
                "apellido" : "Borgachov",
                "anyoNacimiento" : 1979,
                "aficiones": ["bailar", "karate", "conducir"],
                "dni": { "anyoExpedicion" : 2002, "lugarNacimento": "Rusia"},
                "colorPelo" : "rubio"
                };

let personas = [persona1, persona2, persona3, persona4];

/* • Mostrar en la consola javascript los elementos del array persona que cumplan que su año
de nacimiento esté entre 1978 y 2000. Hacerlo con un bucle for, while y for...of.
• Mostrar el siguiente mensaje:

• - “Tu edad está entre 40 y 20 años” para todos los elementos del array que cumple

la condición del apartado anterior.

• - “Tu edad es menor de 20” para el resto de los casos.

/* for ( i = 0; i < personas.length; i++) {
    if (personas[i].anyoNacimiento >= 1978 && personas[i].anyoNacimiento <= 2000) { 
        console.log( `${personas[i].nombre}: Tu edad está entre 40 y 20 años`);
        
    } else console.log(`${personas[i].nombre}: Tu edad es menor de 20.`);
}
 */
// Con While
/*  let i = 0;
 while ( i < personas.length) {
    if (personas[i].anyoNacimiento >= 1978 && personas[i].anyoNacimiento <= 2000) { 
        console.log( `${personas[i].nombre}: Tu edad está entre 40 y 20 años`);
        
    } else console.log(`${personas[i].nombre}: Tu edad es menor de 20.`);
    i++; 
} 
 */
//con for...of.
/* for (let persona of personas) {
   if (persona.anyoNacimiento >= 1978 && persona.anyoNacimiento <= 2000) { 
     console.log( `${persona.nombre}: Tu edad está entre 40 y 20 años`);
        
    } else console.log(`${persona.nombre}: Tu edad es menor de 20.`);
} */

/* 
• Agregar la afición “jugar a la play” a todos los elementos del array personas utilizando el
bucle for y for...of.  */
 
/* for ( let persona of personas) {
    persona.aficiones.push("jugar a la play");
}

console.log(personas[0]["aficiones"]); */