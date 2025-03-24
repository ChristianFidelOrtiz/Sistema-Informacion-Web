document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const gastoTotal = parseFloat(document.getElementById('gastoTotal').value);
    const porcentajePropina = parseFloat(document.getElementById('porcentajePropina').value);
    const propina = (gastoTotal * porcentajePropina) / 100;

    document.getElementById('resultado').textContent = `Propina: ${propina.toFixed(2)}`;
});