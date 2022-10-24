/* Reto 2
• Crea un directorio nuevo llamado proyectosJavascript.
• Crea un subdirectorio llamado proyecto1.
• Dentro de ese directorio:

- Inicia el proyecto: npm init
• Dentro de Visual Code Studio:
- Crear un fichero index.js
- Crear un fichero run.js

• En el fichero index.js (fichero de librería):

- Declarar las funciones de la calculadora por separado (suma, resta, producto,
división)
- Al final del documento index.js escribir la sentencia:

module.exports =

• A continuación escribir el nombre de las funciones entre {} separados por comas de la
librería que se desean exportar.
• En el fichero run.js (fichero del programa principal) escribir la sentencia:

- let myLib = require("./index");

• Llamar a todas las funciones de la librería e imprimir sus resultados.
- NOTA: Para llamar a la función hay que hacer myLib.función. Ej: myLib.suma(2,3) */