document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;

    const mensajeBienvenida = `¡Hola ${nombre} ${apellido}! Bienvenido. Nos alegra saber que tienes ${edad} años.`;

    document.getElementById('mensaje').textContent = mensajeBienvenida;
});