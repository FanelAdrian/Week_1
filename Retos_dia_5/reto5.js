/* Reto 5
• Crea una función que imprima siempre lo que se le pasa por parámetro, y si no se le pasa
ningún parámetro, informe de esta situación (utiliza ECMASCRIPT). */

const print = (mensaje = "indique un mensaje") => console.log(mensaje);

// otra forma
const printa = (mensaje) => {
    if (mensaje === undefined){ console.log("indique un mensaje")
}
    else console.log(mensaje);
}
