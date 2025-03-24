document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const monto = parseFloat(document.getElementById('monto').value);
    const iva = monto * 0.10;
    const montoConIva = monto + iva;

    document.getElementById('resultado').textContent = `El monto con IVA (10%) es: ${montoConIva.toFixed(2)}`;
});