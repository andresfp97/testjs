const resgistrar = document.getElementById("registro-form")

resgistrar.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('registro-nombre').value;
    const correo = document.getElementById('registro-correo').value;
    const contrasena = document.getElementById('registro-contrasena').value;
    try {
        const respuesta = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, correo, contrasena}),
        });

        if (!respuesta.ok) {
            throw new Error('Error al registrar usuario');
        }
        
        window.location.href = './login.html';
    } catch (error) {
        console.error(error);
    }
});