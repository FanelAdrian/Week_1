//Reto 8

// Crear un unico json con las siguientes claves:
// • nombre : string
// • apellidos : array de string
// • edad : number
// • padres : array de dos json.
// Array de dos json, y cada uno tendrá los mismos atributos que el json inicial, incluidos los
// padres.
// A su vez, estos tendrán los mismos atributos que el json inicial, con la única salvedad de que
// estos no tendrán padres. 

let madrileño = {
    "nombre": "Paco",
    "apellidos": ["Martinez", "Martinez"],
    "edad": 19,
    "padres": [
        {
        "nombre": "Manolo",
        "apellidos": ["Martinez", "Fernandez"],
        "edad": 49,
        "padres": [
            {
            "nombre": "Eugenio",
            "apellidos": ["Martinez", "Garcia"],
            "edad": 75,
            "padres": []
                    },
            {
            "nombre": "Eugenia",
            "apellidos": ["Fernandez", "Genio"],
            "edad": 69,
            "padres": []
            }]
                },
        {
        "nombre": "Carlena",
        "apellidos": ["Martinez", "Garcia"],
        "edad": 39,
        "padres": [
            {
            "nombre": "Rogelio",
            "apellidos": ["Martinez", "Lopez"],
            "edad": 67,
            "padres": []
                    },
            {
            "nombre": "Fernanda",
            "apellidos": ["Garcia", "Garcia"],
            "edad": 70,
            "padres": []
            }]
        }]
};

//Se pide:

// • Mostrar por consola el nombre del abuelo por parte de madre.
console.log(madrileño.padres[1].padres[0].nombre);

// • Mostrar el segundo apellido de la abuela por parte de padre.
console.log(madrileño.padres[0].padres[1].apellidos[1]);

/* • Sumar a la edad de la madre, la edad del abuelo por parte de padre (Para ello habrá que
    acceder a cada valor desde el objeto literal) */
console.log(madrileño.padres[1].edad + madrileño.padres[0].padres[0].edad);

// • Intercambiar las edades de los abuelos por parte de padre
let edad_abu = madrileño.padres[0].padres[1].edad;
madrileño.padres[0].padres[1].edad = madrileño.padres[0].padres[0].edad;
madrileño.padres[0].padres[0].edad = edad_abu;
console.log(madrileño.padres[1]);
console.log(madrileño.padres[0]);

// • Añadirle a la abuela por parte de madre el segundo apellido del abuelo por parte de padre.
madrileño.padres[1].padres[1].apellidos.push(madrileño.padres[0].padres[0].apellidos[1]);
console.log(madrileño.padres[1].padres[1]);

console.log(" ");

// • Eliminar el primer apellido de la madre
madrileño.padres[1].apellidos.splice(0, 1);
console.log(madrileño.padres[1].apellidos);

/** • Mostrar la última letra del segundo apellido del abuelo por parte de padre (No se puede
    contar el número de letras, hay que hacerlo de forma automática) */
console.log(madrileño.padres[0].padres[0].apellidos[1][madrileño.padres[0].padres[0].apellidos[1].length - 1]);