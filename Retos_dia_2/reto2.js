
/** Reto 2
 • Crea una variable de tipo Map con las siguientes claves y valores:
 “numero”:1,
 1 : 1
 “string” : “Mi string”
 2 : “Mi string”
 “boolean”: true
 3: true
 “array”: [1,2,3,4]
 4: [“Juan”, “Pepe”, “Ana”, “Maria”] */
let miMap = new Map()

miMap.set("numero", 1)
miMap.set(1, 1)
miMap.set("string", "Mi string")
miMap.set(2, "Mi string")
miMap.set("boolean", true)
miMap.set(3, true)
miMap.set(4, [1, 2, 3, 4])
miMap.set(4, ["Juan", "Pepe", "Ana, Maria"])

console.log(miMap);

