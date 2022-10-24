/* Reto 5
• Modificar el penultimo reto del tema anterior para sustituir los 12 if por solamente 3
utilizando el bucle for. */

/* Reto 4 (Cont)
Tomando como base el array anterior: */

// • Mostrar el nombre de todos aquellas personas del array que tengan el pelo castaño.
/* if (personas[0].colorPelo == "castaño"){
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

/* if ((personas[0].colorPelo == "negro" && personas[0].dni.anyoExpedicion < 2022) || (personas[0].anyoNacimiento >= 2004 && personas[0].aficiones.includes("comer") || personas[0].aficiones.includes("dormir"))) {
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
}; */

// • Implementarlo solo con condicionales clásicos. */
let persona1 = {"nombre" : "Ana", "apellido" : "Martinez", "anyoNacimiento" : 2002, "aficiones": ["comer", "dormir", "almorzar"], "dni": { "anyoExpedicion" : 2020,"lugarNacimento": "España"}, "colorPelo" : "castaño"};
let persona2 = {"nombre" : "Pepe", "apellido" : "Garcia", "anyoNacimiento" : 1983, "aficiones": ["pescar", "senderismo", "buscar setas"], "dni": { "anyoExpedicion" : 2018,"lugarNacimento": "Marruecos"}, "colorPelo" : "negro"};
let persona3 = {"nombre" : "Maria", "apellido" : "Heredero", "anyoNacimiento" : 1992, "aficiones": ["tenis", "nadar", "baloncesto"], "dni": { "anyoExpedicion" : 2026,"lugarNacimento": "España"}, "colorPelo" : "castaño"};
let persona4 = {"nombre" : "Pedro", "apellido" : "Barriga", "anyoNacimiento" : 2006, "aficiones": ["nadar", "pescar", "comer"], "dni": { "anyoExpedicion" : 2022,"lugarNacimento": "Suecia"}, "colorPelo" : "pelirrojo"};
let personas = [persona1, persona2, persona3, persona4];

for (let i = 0; i < personas.length; i++) {
    if (personas[i].colorPelo === "castaño"){
        console.log(`${personas[i].nombre} tiene el pelo castaño`);
    } 
    if (personas[i].anyoNacimiento  < 1992){
        console.log(`${personas[i].nombre} tiene mas de 30`);
    }
    if ((personas[i].colorPelo === "negro" && personas[i].dni.anyoExpedicion < 2022) || (personas[i].anyoNacimiento >= 2004 && personas[i].aficiones.includes("comer") || personas[i].aficiones.includes("dormir"))) {
        console.log(`${personas[i].nombre} tiene el pelo negro y el DNI caducado o tine menos de 18 años y le gusta comer y dormir.`);
    }

}

