/* Reto 2
• Piensa en una aplicación web que proponga recetas de cocina dependiendo del
ingrediente principal.

• Utiliza la sentencia switch/case para proponer una receta según el ingrediente principal.

• Hacerlo para 10 ingredientes principales diferentes.

• Por defecto si no coincide el ingrediente con los que se propone, mostrar “Imposible
proponer receta” por consola. */

let ingredientes = ["rucula","boniato", "berenjena", "lechuga", "pollo", "ternera", "cerdo", "patatas", "tomate", "huevos", "salchichas", "garbanzos", "pasta"];
let ingrediente = ingredientes[Math.floor(Math.random() *(ingredientes.length ))];
console.log(ingrediente);
switch (ingrediente) {
    case "lechuga":
        console.log("ensalada");
        break;
    case "pollo":
        console.log("Pollo al horno");
        break;
    case "ternera":
        console.log("hamburguesas");
        break;
    case "cerdo":
        console.log("cerdo agridullce");
        break;
    case "patatas":
        console.log("patatas fritas");
        break;
    case "tomate":
        console.log("gazpacho");
        break;
    case "huevos":
        console.log("huevos fritos");
        break;
    case "salchichas":
        console.log("perrito caliente");
        break;
    case "garbanzos":
        console.log("cocido");
        break;
    case "pasta":
        console.log("espaguetis");
        break;
    default: console.log("Imposible proponer receta");
}