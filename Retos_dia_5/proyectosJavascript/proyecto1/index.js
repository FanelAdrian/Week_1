const suma = (op1=0, op2=0) => `${op1} + ${op2} = ${op1 + op2}`;
const resta = (op1=0, op2=0) => `${op1} - ${op2} = ${op1 - op2}`;
const producto = (op1=0, op2=0) => console.log(`${op1} * ${op2} = ${op1 * op2}`);
const division = (op1=0, op2=0) => console.log(`${op1} / ${op2} = ${op1 / op2}`);

module.exports =  {suma, resta, producto, division};
