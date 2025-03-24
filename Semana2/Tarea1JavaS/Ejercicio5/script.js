document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const edadActual = parseInt(document.getElementById('edadActual').value);

    const edadEn5Anios = edadActual + 5;
    const edadEn10Anios = edadActual + 10;
    const edadEn100Anios = edadActual + 100;

    var mensajeResultado = `Dentro de 5 años tendras ${edadEn5Anios} años, dentro de 10 años tendras ${edadEn10Anios} años, y dentro de 100 años tendras ${edadEn100Anios} años.`;

    document.getElementById('resultado').textContent = mensajeResultado;
});