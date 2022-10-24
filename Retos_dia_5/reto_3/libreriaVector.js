
const numeroAleatorio = (max, min=0) => Math.floor((Math.random() * (max - min + 1)) + min);

const crearVector = (n, m) => {
    let vector = [];
    for (let i = 0; i < n; i++) {
        vector.push(numeroAleatorio(m));
    }
    return vector;
}

const sumaVector = (v1, v2) => {
    let v3 = [];
    if (v1.length === v2.length) {
        for (let i = 0; i < v2.length; i++) {
            v3.push(v1[i] + v2[i]);
        }
    }
    return v3;
}
let v1 = crearVector(3,5);
let v2 = crearVector(3, 22);
console.log(v1);
console.log(v2);
console.log(sumaVector(v1, v2));

const productoNumeroVector = (n, v) => {
    let v3 = [];
    for (let vector of v) {
       v3.push(vector * n);
    }
    return v3;
}

const restaVector = (v1, v2) => {
    let v3 = [];
    if (v1.length === v2.length) {
        for (i = 0; i < v2.length; i++) {
            v3.push(v1[i] - v2[i]);
        }
    }
    return v3;
}

const productoVector = (v1, v2) => {
    let v3 = [];
    if (v1.length === v2.length) {
        for (i = 0; i < v2.length; i++) {
            v3.push(v1[i] * v2[i]);
        }
    }
    return v3;
}

module.exports = {numeroAleatorio, crearVector, sumaVector, restaVector, productoVector, productoNumeroVector};