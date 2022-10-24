/* Reto 1
• Construye una función “calculadora (operación, op1, op2)” que reciba como parámetros de
entrada:

- Tipo de operación
- Operadores (siempre 2 operadores para hacerlo más sencillo).

Las operaciones permitidas son: suma (“sum”), resta (“subs”), multiplicación (“mult”) y
división (“div”).
Dependiendo del identificador de la operación, y los parámetros de entrada, la función debe
decidir qué operación realizar y devolvernos un resultado válido.

• Invocar a esa función para probar todas las operaciones.

• Hacer el segundo parámetro un valor por defecto de tal manera que si no se incluye
siempre valga 0 */

function calculadora(operacion, op1=0, op2=0){
    switch(operacion){
        case "sum": 
            console.log(`${op1} + ${op2} = ${op1 + op2}`);
            break;
        case "subs": 
            console.log(`${op1} - ${op2} = ${op1 - op2}`);
            break;
        case "mult": 
            console.log(`${op1} * ${op2} = ${op1 * op2}`);
            break;
        case "div": 
            console.log(`${op1} / ${op2} = ${op1 / op2}`);
            break;
   
    }
    
} 

// • Reescribir la función utilizando la sintaxis de funciones arrows.

/* const calculadora = (operacion, op1=0, op2=0) =>{
    switch(operacion){
        case "sum": 
            console.log(`${op1} + ${op2} = ${op1 + op2}`);
            break;
        case "subs": 
            console.log(`${op1} - ${op2} = ${op1 - op2}`);
            break;
        case "mult": 
            console.log(`${op1} * ${op2} = ${op1 * op2}`);
            break;
        case "div": 
            console.log(`${op1} / ${op2} = ${op1 / op2}`);
            break;
   
    }
    
} 
calculadora("sum" ); */

// • Utilizar la función calculadora usando spread operator para los parámetros.

const calculadora = (operacion, op1=0, op2=0) =>{
    switch(operacion){
        case "sum": 
            console.log(`${op1} + ${op2} = ${op1 + op2}`);
            break;
        case "subs": 
            console.log(`${op1} - ${op2} = ${op1 - op2}`);
            break;
        case "mult": 
            console.log(`${op1} * ${op2} = ${op1 * op2}`);
            break;
        case "div": 
            console.log(`${op1} / ${op2} = ${op1 / op2}`);
            break;
   
    }
    
} 
let operadores = ["sum", 879, 9891];

calculadora(...operadores);