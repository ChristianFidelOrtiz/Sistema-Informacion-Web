document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const montoConIva = parseFloat(document.getElementById('montoConIva').value);
    const montoSinIva = montoConIva / 1.10;
    const iva = montoConIva - montoSinIva;

    document.getElementById('resultado').textContent = `Monto sin IVA: ${montoSinIva.toFixed(2)}, IVA (10%): ${iva.toFixed(2)}`;
});