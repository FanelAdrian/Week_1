
// Reto_1

// Crea una variable denominada cadena que almacene una cadena de texto.
let cadena = "Esto es una cadena de texto" ;

// Crea otra variable denominada numero que almacene un numero.
let numero = 37;

// Finalmente crea una variable booleana que almacene un valor verdadero o falso.
let booleana = true;

// Mostrar por consola los valores de las tres variables.
console.log(typeof(cadena));
console.log(typeof(numero));
console.log(typeof(booleana));

// Reto_2

// Haz la raíz cuadrada de 1369.
console.log(Math.sqrt(1369));

// Reto_3

// Genera un número aleatorio entre 0 y 10 de forma automática.
console.log(Math.floor((Math.random() * 9) + 1));

// Reto_4

// Guarda en variables el nombre y apellidos de una persona.
let nombre = "Fanel Adrian ";
let apellido = "Pop";

// Ahora escribe un texto cualquiera y concatena en medio del texto el nombre de esa persona y los apellidos.
// Hacerlo usando el operador que corresponda y almacénalo en una variable.
let nombre_y_apellido = nombre + apellido;
console.log(nombre_y_apellido);

// Hacer lo mismo pero utilizando template strings y almacenarlo en otra variable.
let mi_nombre_y_apellido = (`Mi nombre es ${nombre} y apellido ${apellido}`);
console.log(mi_nombre_y_apellido);

// Transforma el texto de las dos variables anteriores a mayúsculas de forma automática (novale reescribirlo)
// y muéstralo por la consola.
console.log(nombre_y_apellido.toUpperCase());
console.log(mi_nombre_y_apellido.toUpperCase());

// Reto_5

// Crea una variable de tipo string con el texto que tu elijas.
 let palabra = "palabra";

// Almacena en otra variable el número de caracteres de la variable anterior y muéstralo por pantalla.
let longitud_palabra = palabra.length;
console.log(longitud_palabra);

// Muestra por pantalla el carácter de la posición 3 de la variable de tipo string.
console.log(palabra[3]);

// Mostrar por pantalla si la cadena de caracteres de dicha variable contiene la palabra “codenotch”.
// Utilizar el método de string que indica si una cadena de texto puede ser encontrada dentro de otra.
let texto = "Hola codenoch";
let codenoch = "codenoch";
let buscar = texto.indexOf(codenoch);


if(buscar >= 0) {
    console.log("la palabra existe dentro de la cadena y se encuentra en la posición " + buscar);
} else {
    console.log("la palabra no existe dentro de la cadena");
}