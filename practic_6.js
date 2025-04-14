function parOImpar (numero) {
return numero % 2 === 0 ? "El numero es par" : "el numero es impar";
}

const num = parseInt (prompt("Introduce un numero entero"));
const resultado = parOImpar(num);
console.log(resultado)