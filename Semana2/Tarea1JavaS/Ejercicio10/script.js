document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const fecha1 = document.getElementById('fecha1').value;
    const fecha2 = document.getElementById('fecha2').value;

    if (!validarFormatoFecha(fecha1) || !validarFormatoFecha(fecha2)) {
        alert("Por favor, ingrese fechas en el formato dd/mm/yyyy.");
        return;
    }

    const fechaObj1 = convertirAObjetoFecha(fecha1);
    const fechaObj2 = convertirAObjetoFecha(fecha2);

    if (fechaObj1 > fechaObj2) {
        alert("La Fecha 1 debe ser anterior o igual a la Fecha 2.");
        return;
    }

    const diferencia = calcularDiferenciaDias(fechaObj1, fechaObj2);
    document.getElementById('resultado').textContent = `Diferencia: ${diferencia} días.`;
});

function validarFormatoFecha(fecha) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(fecha);
}

function convertirAObjetoFecha(fecha) {
    const partes = fecha.split('/');
    return new Date(partes[2], partes[1] - 1, partes[0]);
}

function calcularDiferenciaDias(fecha1, fecha2) {
    const unDia = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((fecha1 - fecha2) / unDia));
}
