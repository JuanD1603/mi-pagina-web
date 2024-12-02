function realizarOperacion(num1, num2, operacion) {
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                resultado = "Error: No se puede dividir entre cero.";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operación no válida.";
    }
    return resultado;
}


let continuar = true;
while (continuar) {

    let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o escriba 'salir' para terminar:");
    if (operacion.toLowerCase() === "salir") {
        continuar = false;
        break;
    }

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));


    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        continue;
    }


    let resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
    alert(`El resultado de la operación ${operacion} es: ${resultado}`);
    document.getElementById("resultado").textContent = `Última operación: ${operacion} - Resultado: ${resultado}`;
}

alert("Gracias por usar la calculadora. ¡Hasta pronto!");