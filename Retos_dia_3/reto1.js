// Reto 1

/*  • Utiliza una secuencia if/else para decidir si un peatón debe cruzar un paso de cebra o no.
    • Tened en cuenta tanto el color del semáforo como si pasan o no pasan coches.
    • Hacerlo tanto con la secuencia if/else como con condicionales ternarios. */

    let semaforo_peatones = "rojo";
    let pasan_coches = true;

        if ( semaforo_peatones == "verde" && pasan_coches == false){
            console.log( "cruza la calle");
        } else {
            console.log("no cruza la calle")
        }
 
;
//!pasan_coches eso es igual a pasan_coches == false
cruza = semaforo_peatones == "rojo" && !pasan_coches ? "cruza la calle":
"no cruza la calle";
console.log(cruza);