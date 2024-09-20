let cantidad = document.getElementById('cantidad'); " Let reemplazó la palabra reservada var en los nuevos usos de java script"
let boton = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&/()=?¡+*/';

//"FUNCIONES" Función que se ejecuta al hacer click en el botón generar en el html

function generar() {

    //convertir el valor ingresado en el campo de cantidad a un número entero.
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    //verificar si el número de caracteras es menor a 8
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");//Mostrar una alerta si es menor a 8
        return;//Salir de la función si no se cumple la condición. "CONDICIONALES"
    }

    // Inicializar la variable para almacenar la contraseña generada
    let password = '';

    // Bucle para generar cada caracter de la contraseña
    for (let i = 0; i < numeroDigitado; i++) {

        //Generar un caracter aleatorio de la lísta de caracteras permitidos.
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        //Añadir el caracter aleatoriio a la contraseña
        password += caracterAleatorio;

    }
    contrasena.value = password;
}

// Validación de la seguridad de la contraseña

let tieneMayusculas = /[A-Z]/.test(password);
let tieneMinusculas = /[a-z]/.test(password);
let tieneNumeros = /[0-9]/.test(password);
let tieneCaracteresEspeciales = /[!"#$%&/()=?¡+*/']/.test(password);

if (
    tieneMayusculas &&
    tieneMinusculas &&
    tieneNumeros &&
    tieneCaracteresEspeciales
) {
    alert(
        "Contraseña no segura.  Debe incluir al menos una mayuúscula, una minúscula, un número y un carácter especial"
    );

}

// Asignar la contraseña generada al campo de texto para mostrarla al usuario
contrasena.value = password;

// Crear la función para el botón que cree en html para limpiar
function limpiar() {

    contrasena.value = " ";
    cantidad.value = " ";

}











