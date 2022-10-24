/* Reto 4
• Teniendo la siguiente estructura de objeto JSON:

persona =
{
"nombre" : string,
"apellido" : string,
"anyoNacimiento" : number,
"aficiones": array of string,
"dni": { "anyoExpedicion" : number,
"lugarNacimento": string},
"colorPelo" : string
}

• Crear un array de personas con 4 objetos de tipo persona. */

personas = [
            persona1 = {"nombre" : "Ana", "apellido" : "Martinez", "anyoNacimiento" : 2006, "aficiones": ["comer", "dormir", "almorzar"], "dni": { "anyoExpedicion" : 2020,"lugarNacimento": "España"}, "colorPelo" : "castaño"},
            persona2 = {"nombre" : "Pepe", "apellido" : "Garcia", "anyoNacimiento" : 1983, "aficiones": ["pescar", "senderismo", "buscar setas"], "dni": { "anyoExpedicion" : 2018,"lugarNacimento": "Marruecos"}, "colorPelo" : "negro"},
            persona3 = {"nombre" : "Maria", "apellido" : "Heredero", "anyoNacimiento" : 1992, "aficiones": ["tenis", "nadar", "baloncesto"], "dni": { "anyoExpedicion" : 2026,"lugarNacimento": "España"}, "colorPelo" : "castaño"},
            persona4 = {"nombre" : "Pedro", "apellido" : "Barriga", "anyoNacimiento" : 2002, "aficiones": ["nadar", "pescar", "comer"], "dni": { "anyoExpedicion" : 2022,"lugarNacimento": "Suecia"}, "colorPelo" : "pelirrojo"}, 
           ];


/* Reto 4 (Cont)
Tomando como base el array anterior: */

// • Mostrar el nombre de todos aquellas personas del array que tengan el pelo castaño.
if (personas[0].colorPelo == "castaño"){
    console.log(persona1.nombre);
};
if (personas[1].colorPelo == "castaño"){
    console.log(persona2.nombre)
};
if (personas[2].colorPelo == "castaño"){
    console.log(persona3.nombre);
};
if (personas[3].colorPelo == "castaño"){
    console.log(persona4.nombre);
};

console.log(" ");

// • Mostrar la edad de todos los que sean mayores de 30.
if (personas[0].anyoNacimiento  < 1992){
    console.log(persona1.nombre);
};
if (personas[1].anyoNacimiento < 1992){
    console.log(persona2.nombre);
};
if (personas[2].anyoNacimiento < 1992){
    console.log(persona3.nombre);
};
if (personas[3].anyoNacimiento < 1992){
    console.log(persona4.nombre);
   } 

   console.log(" ");

/* • Mostrar el lugar de nacimiento de todos los que tengan el pelo negro y el dni caducado, o sean
menores de edad y su afición sea comer o dormir. */

if ((personas[0].colorPelo == "negro" && personas[0].dni.anyoExpedicion < 2022) || (personas[0].anyoNacimiento >= 2004 && personas[0].aficiones.includes("comer") || personas[0].aficiones.includes("dormir"))) {
    console.log(persona1.nombre);
};
if ((personas[1].colorPelo == "negro" && personas[1].dni.anyoExpedicion < 2022) || (personas[1].anyoNacimiento >= 2004 && personas[1].aficiones.includes("comer") || personas[1].aficiones.includes("dormir"))) {
    console.log(persona2.nombre);
};
if ((personas[2].colorPelo == "negro" && personas[2].dni.anyoExpedicion < 2022) || (personas[2].anyoNacimiento >= 2004 && personas[2].aficiones.includes("comer") || personas[2].aficiones.includes("dormir"))) {
    console.log(persona3.nombre);
};
if ((personas[3].colorPelo == "negro" && personas[3].dni.anyoExpedicion < 2022) || (personas[3].anyoNacimiento >= 2004 && personas[3].aficiones.includes("comer") || personas[3].aficiones.includes("dormir"))) {
    console.log(persona4.nombre);
};

// • Implementarlo solo con condicionales clásicos.