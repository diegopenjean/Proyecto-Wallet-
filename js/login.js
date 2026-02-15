console.log("¡El archivo JS está conectado correctamente!");
// 1. Escuchar cuando el HTML esté listo (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function() 
{

    // 2. Seleccionar el Formulario
    const loginForm = document.getElementById('loginForm');

    // 3. Escuchar el evento "submit" (Cuando intentan enviar)
    loginForm.addEventListener('submit', function(event) {

        // 4. Detener el comportamiento por defecto (preventDefault)
        event.preventDefault();

        // 5. Capturar los datos del usuario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // 6. Validación
        if (email === 'admin@alke.cl' && password === '123456') {
            
            // --- CAMINO DEL ÉXITO ---
            console.log('Login correcto');

            // 7. localStorage (La memoria del navegador)
            // Aquí guardamos que el usuario "Diego" está autorizado.
            localStorage.setItem('usuarioLogueado', 'true');
            localStorage.setItem('nombreUsuario', 'Diego');
            localStorage.setItem('saldo', '200000'); // Guardamos el saldo inicial

            // 8. Redirección
            window.location.href = 'menu.html';

        } else {
            
            
            // 9. Feedback visual
            alert('Error: Credenciales incorrectas.\n\nPrueba con:\nUsuario: admin@alke.cl\nClave: 123456');
            
            // 10. UX (Experiencia de Usuario)
            // Borramos el campo de contraseña para que el usuario pueda intentar de nuevo rápido.
            document.getElementById('password').value = '';
        }

    });

});