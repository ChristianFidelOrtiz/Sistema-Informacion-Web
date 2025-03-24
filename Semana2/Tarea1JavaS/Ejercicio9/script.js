document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const anio = parseInt(document.getElementById('anio').value);
    let mensaje = "";

    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        mensaje = `${anio} es un año bisiesto.`;
    } else {
        mensaje = `${anio} no es un año bisiesto.`;
    }

    alert(mensaje);
});