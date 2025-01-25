        const entrar = document.getElementById("login-form")


        entrar.addEventListener('submit', async (e) => {
        e.preventDefault();
        let correo = document.getElementById('login-correo').value;
        let contrasena = document.getElementById('login-contrasena').value;

        try {
            const respuesta = await fetch('http://localhost:3000/usuarios');
            if (!respuesta.ok) {
                throw new Error('Error al obtener los usuarios');
            }

            const data = await respuesta.json();

          data.forEach(element => {
            if(element.correo === correo && element.contrasena === contrasena);
            localStorage.setItem("usuario", element.correo)
            window.location.href = "htmls/tareas.html"
       
            });

             
        } catch (error) {
            console.error(error);
        }
    });


