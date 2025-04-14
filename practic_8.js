     
function print() {
    var texto = prompt("escribi un texto palindromo");
    esPalindromo(texto);
}


function esPalindromo(cadena) {
    let cadenaLimpia = cadena.replace(/\s+/g, '').toLowerCase();
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    if (cadenaLimpia === cadenaInvertida) {
        console.log("El texto es un palíndromo");
    } else {
        console.log("El texto no es un palíndromo");
    }
}
