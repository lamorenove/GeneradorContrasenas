let cantidad = document.getElementById('cantidad'); " Let reemplazó la palabra reservada var en los nuevos usos de java script"
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&/()=?¡+*/';

"FUNCIONES"
function generar() {

    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 6"); "CONDICIONALES"
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;


    }
    contrasena.value = password;

}














