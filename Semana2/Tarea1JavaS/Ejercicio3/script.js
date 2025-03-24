function convertir() {
    // Obtener el valor de Fahrenheit y convertirlo a un número
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    // Verificar si el valor ingresado es un número
    if (isNaN(fahrenheit)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese un valor numérico válido.";
        return;
    }

    // Realizar la conversión de Fahrenheit a Celsius
    let celsius = (fahrenheit - 32) * 5 / 9; 

    // Mostrar el resultado
    document.getElementById("resultado").textContent = fahrenheit + " °F equivalen a " + celsius.toFixed(2) + " °C.";
}