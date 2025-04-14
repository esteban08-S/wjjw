function print() {
    let texto = prompt("introduce un texto");
    analizarCadena(texto);
}


function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("El texto solo tiene mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("El texto solo tiene minúsculas");
    } else {
        console.log("el texto esta mezclado");
    }
}
