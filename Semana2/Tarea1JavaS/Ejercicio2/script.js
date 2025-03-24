function convertir() {
    
    let celsius = document.getElementById("celsius").value;
    if (isNaN(celsius)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese un valor numérico válido.";
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").textContent = celsius + " °C equivalen a " + fahrenheit.toFixed(2) + " °F.";
}