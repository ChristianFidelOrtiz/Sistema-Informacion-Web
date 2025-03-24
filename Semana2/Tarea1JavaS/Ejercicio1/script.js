function convertir() {
    
    let montoGs = document.getElementById("montoGs").value;
    let tipoCambio = document.getElementById("tipoCambio").value;

    
    if (isNaN(montoGs) || isNaN(tipoCambio)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores numéricos válidos.";
        return;
    }

    
    let montoUsd = montoGs / tipoCambio;

    
    document.getElementById("resultado").textContent = montoGs + " Gs equivalen a " + montoUsd.toFixed(2) + " USD.";
}