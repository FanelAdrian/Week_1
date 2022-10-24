/* Reto 4


Teniendo en cuenta el json del día anterior:
Alterar el json inicial y añadirle los siguientes atributos a todas las personas:
• colorPelo : string
• dinero : number
• coches :array de json. Cada coche tendrá los siguientes atributos:
- marca
- numeroAsientos
- esElectrico  */

let persona = {
    "nombre": "Paco",
    "apellidos": ["Martinez", "Martinez"],
    "edad": 19,
    "colorPelo": "verde",
    "dinero": 900,
    "coches": [
                {
                "marca" : "toyota",
                "numeroAsientos": 5,
                "esElectrico": true,
                }
                ],
    "padres": [
                {
                "nombre": "Manolo",
                "apellidos": ["Martinez", "Fernandez"],
                "edad": 49,
                "colorPelo": "rubio",
                "dinero": 25900,
                "coches": [
                            {
                            "marca" : "toyota",
                            "numeroAsientos": 3,
                            "esElectrico": false,
                            }
                            ],
                "padres": [
                    {
                    "nombre": "Eugenio",
                    "apellidos": ["Martinez", "Garcia"],
                    "edad": 75,
                    "colorPelo" : "castaño",
                    "dinero": 1000,
                    "coches": [
                            {
                                "marca" : "toyota",
                                "numeroAsientos": 2,
                                "esElectrico": false,
                            }
                            ],
                "padres": []
                            },
                    {
                    "nombre": "Eugenia",
                    "apellidos": ["Fernandez", "Genio"],
                    "edad": 69,
                    "colorPelo" : "negro",
                    "dinero": 5000,
                    "coches": [
                                {
                                "marca" : "toyota",
                                "numeroAsientos": 5,
                                "esElectrico": true,
                                }
                                ],
                    "padres": []
                    }]
                        },
                {
                "nombre": "Carlena Madre",
                "apellidos": ["Martinez", "Garcia"],
                "edad": 39,
                "colorPelo": "negro",
                "dinero": 1500,
                "coches": [
                            {
                            "marca" : "toyota",
                            "numeroAsientos": 2,
                            "esElectrico": true,
                            }
                        ],
                "padres": [
                    {
                    "nombre": "Rogelio Abuelo Madre",
                    "apellidos": ["Martinez", "Lopez"],
                    "edad": 67,
                    "colorPelo": "rubio",
                    "dinero": 1380,
                    "coches":[
                                {
                                "marca" : "toyota",
                                "numeroAsientos": 5,
                                "esElectrico": false,
                                }
                            ],
                    "padres": []
                            },
                    {
                    "nombre": "Fernanda Abuela Madre",
                    "apellidos": ["Garcia", "Garcia"],
                    "edad": 70,
                    "colorPelo" : "NARANJA",
                    "dinero": 7600,
                    "coches":[
                                {
                                "marca" : "honda",
                                "numeroAsientos": 5,
                                "esElectrico": false,
                                }
                            ],
                    "padres": []
                    }]
                }]
};
/* Implementar cada una de las siguientes condiciones:

1. En caso de que el color de pelo de la abuela por parte de madre no sea castaño y el abuelo por parte
de padre tenga un solo coche, que cambie el color de pelo del hijo a verde. Y en caso de que el color
de pelo del hijo ya fuera verde, que cambie el color de pelo del hijo a azul. */

if (persona.padres[1].padres[1].colorPelo == "castaño" && persona.padres[0].padres[0].coches.length == 1){
    persona.colorPelo = "verde";
    console.log(persona.colorPelo);
    } else if (persona.colorPelo == "verde"){
        persona.colorPelo = "azul";
        console.log(persona.colorPelo);
    };
/* 2. En caso de que la suma del dinero del padre, la madre, el abuelo por parte de padre y la abuela por
parte de madre sea mayor que 100000€, añadir un coche Ferrari al array de coches del hijo.
3. En caso de que la suma esté entre 35000 y 100000, añadir un Tesla al array de coches del hijo.
4. Si es menos de 35000, añadir un Peugeot al array de coches del hijo. */

if ((persona.padres[0].dinero + persona.padres[1].dinero + persona.padres[0].padres[0].dinero + persona.padres[1].padres[1].dinero) > 100000){
    persona.coches[0] = "Ferrari";
}else if ((persona.padres[0].dinero + persona.padres[1].dinero + persona.padres[0].padres[0].dinero + persona.padres[1].padres[1].dinero) >= 35000 && (persona.padres[0].dinero + persona.padres[1].dinero + persona.padres[0].padres[0].dinero + persona.padres[1].padres[1].dinero < 100000)){
    persona.coches[0] = "Tesla";
}else persona.coches[0] = "Peugeout";
console.log(persona.coches)
console.log(persona.padres[0].dinero + persona.padres[1].dinero + persona.padres[0].padres[0].dinero + persona.padres[1].padres[1].dinero);