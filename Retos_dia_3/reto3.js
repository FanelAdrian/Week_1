/* Reto 3
Piensa un escenario en el que se quiere decidir un restaurante para una celebración.
Los organizadores quieren que cumpla uno de los siguientes puntos:

- Que haya 3 platos en el menú, que incluya DJ y dos horas de barra libre.
- Que haya cóctel de bienvenida, menú con dos platos y una hora de barra libre.

Implementa esta solución utilizando solo una rama if y una rama else.

Implementar dicha solución con condicionales clásicos y ternarios. */

let platos_menu = 2;
let DJ = true;
let horas_barra_libre = 5;
let coctel_bienvenida = true;

if (platos_menu >= 3 && DJ == true && horas_barra_libre >= 2) {
    console.log("¡Que empiece la fiesta!");
} else if (coctel_bienvenida == true && platos_menu >= 2 && horas_barra_libre >= 1) {
    console.log("¡Que empiece la fiesta, locas!");
} else {
    console.log(" ´pa casa");
}

fiesta = (platos_menu >= 3 && DJ == true && horas_barra_libre >= 2) || (coctel_bienvenida == true && platos_menu >= 2 && horas_barra_libre >= 1) ? "¡Empieza la fiesta!":
"Para casa";
console.log(fiesta);