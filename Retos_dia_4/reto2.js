/* Reto 2
• Teniendo la siguiente estructura de objeto JSON:

persona =
{
"nombre" : string,
"apellido" : string,
"anyoNacimiento" : number,
"aficiones": array of string,
"dni": { "anyoExpedicion" : number, "lugarNacimento": string},
"colorPelo" : string
}

• Crear un array denominado personas con 4 objetos de tipo persona. */
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
                "aficiones": ["dormir", "siesta", "meditar"],
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
// • Mostrar todos las propiedades y su valor de un objeto persona utilizando for...in

// console.log(`${propiedad}: ${persona1[propiedad]}`); con esta opción (template string) queda mas estetico
// pero no me muestra los objetos.

/* for ( let propiedad in persona1) {
    console.log(propiedad);
    console.log(persona1[propiedad]);
}
 */
/* • Mostrar todos los elementos del array personas en la consola con un bucle for, con un
bucle while y con un bucle for...of */

//bucle for
/* for (i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
 */
//bucle while
/*  let i= 0;
while(i < personas.length) {
    console.log(personas[i]);
    i++;
} */

//bucle for ...of

/* for (let persona of personas) {
    console.log(persona);
}
   */