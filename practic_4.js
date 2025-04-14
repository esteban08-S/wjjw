function eje2() {

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];

    var dni = 48855913, letra = "A"

    if (dni > 99999999 || dni < 0) {
        console.log("el numero proporcionado no es valido")
    } else {
        letras = letras[dni % 23]
        if (letra == letras) {
            console.log("el dni proporcionado corresponde correctamente a la letra" + letras)
        }
        if (letra !== letras) {
            console.log("la letra correspondiente al dni proporcionada no coincide con la letra proporcionada")
        }
    }
}